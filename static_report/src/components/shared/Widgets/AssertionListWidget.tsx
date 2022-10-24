import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import {
  Flex,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Text,
  useDisclosure,
  Code,
  chakra,
  TableProps,
  TableContainerProps,
  Tooltip,
} from '@chakra-ui/react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { useEffect, useMemo, useState } from 'react';
import { AssertionTest, Comparable } from '../../../types';
import { formatTestExpectedOrActual, ReportState } from '../../../utils';
import { AssertionStatusIcon } from '../Assertions';
import {
  CRAssertionModal,
  CRAssertionModalData,
} from '../Assertions/AssertionCRModal';
import { NoData } from '../Layouts/NoData';

type TargetStatus = { targetStatus?: 'passed' | 'failed' };
type JoinedAssertionTest = AssertionTest & TargetStatus;
interface Props extends Comparable {
  comparableAssertions: ReportState['assertionsOnly'];
  filterString?: string;
  setFilterString?: (input: string) => void;
  tableSize?: TableProps['size'];
}
/*
  A widget for displaying a UI table of comparable assertions (single vs both)
  Allows sorting by selecting column headers (default, asc, desc)
  Accepts a filterString for filtering the shown list
*/
export function AssertionListWidget({
  comparableAssertions,
  filterString = '',
  setFilterString,
  singleOnly,
  tableSize,
  ...props
}: Props & TableContainerProps) {
  const modal = useDisclosure();
  const [reactTableData, setReactTableData] = useState<JoinedAssertionTest[]>(
    [],
  );
  const [sorting, setSorting] = useState<SortingState>([]);
  const [testDetail, setTestDetail] = useState<
    CRAssertionModalData | undefined
  >();
  const columnHelper = createColumnHelper<JoinedAssertionTest>();
  useEffect(() => {
    //FIXME: for target -> base (asymmetric case)
    const joinedByIndexAssertions =
      comparableAssertions?.base
        ?.map((baseDatum, index) => {
          return {
            ...baseDatum,
            targetStatus: comparableAssertions?.target?.[index]?.status,
          };
        })
        .sort((v) => (v.status === 'failed' ? -1 : 1)) || [];
    // console.log(joinedByIndexAssertions);

    setReactTableData(joinedByIndexAssertions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const statusColHelperItem = singleOnly
    ? [
        columnHelper.accessor('status', {
          cell: (info) => info.getValue(),
          header: 'Status',
          enableGlobalFilter: false,
        }),
      ]
    : [
        columnHelper.accessor('status', {
          cell: (info) => info.getValue(),
          header: 'Base Status',
          enableGlobalFilter: false,
        }),
        columnHelper.accessor('targetStatus', {
          cell: (info) => info.getValue(),
          header: 'Target Status',
          enableGlobalFilter: false,
        }),
      ];
  const resultValueColHelperItem = singleOnly
    ? [
        columnHelper.accessor('expected', {
          //dbt: empty
          cell: (info) => info.getValue(),
          header: 'Expected',
        }),
        columnHelper.accessor('actual', {
          //dbt: message
          cell: (info) =>
            info.row.original.source === 'dbt'
              ? info.row.original.message
              : info.getValue(),
          header: 'Actual',
        }),
      ]
    : [];
  const columns = useMemo(
    () => [
      ...statusColHelperItem,
      {
        accessorFn: (row) => `${row.table}.${row.column}`,
        id: 'testSubject',
        header: 'Test Subject',
      },
      columnHelper.accessor('name', {
        cell: (info) => info.getValue(),
        header: 'Assertion',
      }),
      ...resultValueColHelperItem,
      columnHelper.accessor('source', {
        cell: (info) => info.getValue(),
        header: 'Source',
        enableGlobalFilter: false,
      }),
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  //NOTE: comparison will still reference target's assertions directly
  //FIXME: for target -> base (asymmetric case)
  const { target: targetFlatAssertions } = comparableAssertions || {};

  const table = useReactTable<JoinedAssertionTest>({
    columns,
    data: reactTableData,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
  });

  if (reactTableData.length === 0) {
    return (
      <Flex direction="column" justifyContent="center" alignItems="center">
        <NoData text="No Tests Available" />
      </Flex>
    );
  }

  return (
    <>
      <TableContainer {...props}>
        <Table variant="simple" size={tableSize}>
          <Thead>
            <Tr>
              {table.getFlatHeaders().map((headerRow) => {
                const sortToggle = (
                  <chakra.span pl="4" pos={'absolute'} right={0}>
                    {headerRow.column.getIsSorted() ? (
                      headerRow.column.getIsSorted() === 'desc' ? (
                        <TriangleDownIcon aria-label="sorted descending" />
                      ) : (
                        <TriangleUpIcon aria-label="sorted ascending" />
                      )
                    ) : null}
                  </chakra.span>
                );
                const isStatusCol = Boolean(headerRow.id.match(/status/gi));
                return (
                  <Th
                    pos={'relative'}
                    key={headerRow.id}
                    onClick={headerRow.column.getToggleSortingHandler()}
                    _hover={{ cursor: 'pointer' }}
                    textAlign={isStatusCol ? 'center' : 'left'}
                    px={isStatusCol ? 0 : 2}
                  >
                    {flexRender(
                      headerRow.column.columnDef.header,
                      headerRow.getContext(),
                    )}
                    {sortToggle}
                  </Th>
                );
              })}
              {!singleOnly && <Th textAlign={'center'}>View</Th>}
            </Tr>
          </Thead>
          <Tbody>
            {table
              .getSortedRowModel()
              .rows.filter(({ original: v }) =>
                filterString
                  ? v.name.search(new RegExp(filterString, 'gi')) > -1 ||
                    (v.table || '').search(new RegExp(filterString, 'gi')) >
                      -1 ||
                    (v.column || '').search(new RegExp(filterString, 'gi')) > -1
                  : true,
              )
              .map((row) => {
                const {
                  table,
                  column,
                  name,
                  expected,
                  actual,
                  source,
                  status,
                  targetStatus,
                  message,
                } = row.original;
                const actualColValue = formatTestExpectedOrActual(
                  source === 'piperider' ? actual : message,
                );
                const expectedColValue = formatTestExpectedOrActual(expected);

                //Temporary: guard for assuring it's matching assertion pairs
                const targetRef =
                  targetFlatAssertions?.[row.index]?.table === table
                    ? targetFlatAssertions?.[row.index]
                    : undefined;

                const testSubjectName = column
                  ? `${table}.${column}`
                  : `${table}`;
                return (
                  <Tr key={row.id}>
                    <Td>
                      <Flex justifyContent={'center'}>
                        <AssertionStatusIcon status={status} />
                      </Flex>
                    </Td>
                    {!singleOnly && (
                      <Td>
                        <Flex justifyContent={'center'}>
                          <AssertionStatusIcon status={targetStatus} />
                        </Flex>
                      </Td>
                    )}
                    <Td maxWidth={'16em'} px={2}>
                      <Tooltip label={testSubjectName}>
                        <Text noOfLines={1} textOverflow={'ellipsis'}>
                          {testSubjectName}
                        </Text>
                      </Tooltip>
                    </Td>
                    <Td maxWidth={'16em'} px={2}>
                      <Tooltip label={name}>
                        <Text noOfLines={1} textOverflow={'ellipsis'}>
                          {name}
                        </Text>
                      </Tooltip>
                    </Td>
                    {singleOnly && (
                      <>
                        <Td px={2}>
                          <Tooltip label={expectedColValue}>
                            <Code
                              maxWidth={'14em'}
                              noOfLines={1}
                              color={'gray.700'}
                            >
                              {expectedColValue}
                            </Code>
                          </Tooltip>
                        </Td>
                        <Td px={2}>
                          <Tooltip label={actualColValue}>
                            <Code
                              maxWidth={'14em'}
                              noOfLines={1}
                              color={
                                status === 'failed' ? 'red.500' : 'gray.700'
                              }
                            >
                              {actualColValue}
                            </Code>
                          </Tooltip>
                        </Td>
                      </>
                    )}
                    <Td px={2}>{source}</Td>
                    {!singleOnly && (
                      <Td
                        textAlign={'center'}
                        onClick={() => {
                          setTestDetail({
                            assertionSource: source,
                            assertionName: name,
                            base: row.original,
                            target: targetRef,
                          });
                          modal.onOpen();
                        }}
                      >
                        <Text as="span" cursor="pointer">
                          🔍
                        </Text>
                      </Td>
                    )}
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
      <CRAssertionModal
        {...modal}
        data={testDetail}
        onClose={() => {
          modal.onClose();
          setTestDetail(undefined);
        }}
      />
    </>
  );
}
