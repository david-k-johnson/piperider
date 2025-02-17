import {
  Button,
  Text,
  type UseDisclosureReturn,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from '@chakra-ui/react';
import { formatTestExpectedOrActual } from '../../utils/formatters';
import { AssertionStatusIcon } from './AssertionStatusIcon';
import { NO_VALUE } from '../Columns/constants';
import { NoData } from '../Layouts';
import { AssertionTest } from '../../sdlc/single-report-schema';
import { ComparableData } from '../../types';
import { CommonModal } from '../Common/CommonModal';

export type CRAssertionModalData = {
  assertionName?: string;
  assertionSource?: string;
} & ComparableData<Partial<AssertionTest> | null>;
export type TestDetail = {
  data?: CRAssertionModalData;
};

type Props = UseDisclosureReturn & TestDetail;
export function CRAssertionModal({ data, isOpen, onClose, ...props }: Props) {
  return (
    <CommonModal
      {...props}
      isOpen={isOpen}
      size="2xl"
      onClose={() => {
        onClose();
      }}
      title={
        <Text
          title={data?.assertionName}
          noOfLines={1}
          maxWidth="calc(100% - 50px)"
        >
          {data?.assertionName}
        </Text>
      }
      footer={<Button onClick={onClose}>Close</Button>}
    >
      <AssertionTestDetail data={data} />
    </CommonModal>
  );
}

type DetailProps = { data?: CRAssertionModalData };
function AssertionTestDetail({ data }: DetailProps) {
  if (!data) return <NoData />;

  const isDbtKind = data.assertionSource === 'dbt';
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th />
            <Th>Status</Th>
            {isDbtKind ? (
              <Th>Message</Th>
            ) : (
              <>
                <Th>Expected</Th>
                <Th>Actual</Th>
              </>
            )}
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td fontWeight={700}>Base</Td>
            <Td>
              <AssertionStatusIcon status={data?.base?.status} />
            </Td>
            {isDbtKind ? (
              <Td>{data?.base?.message ?? NO_VALUE}</Td>
            ) : (
              <>
                <Td>{formatTestExpectedOrActual(data?.base?.expected)}</Td>
                <Td>{formatTestExpectedOrActual(data?.base?.actual)}</Td>
              </>
            )}
          </Tr>

          <Tr>
            <Td fontWeight={700}>Target</Td>
            <Td>
              <AssertionStatusIcon status={data?.target?.status} />
            </Td>
            {isDbtKind ? (
              <Td>{data?.target?.message ?? NO_VALUE}</Td>
            ) : (
              <>
                <Td>{formatTestExpectedOrActual(data?.target?.expected)}</Td>
                <Td>{formatTestExpectedOrActual(data?.target?.actual)}</Td>
              </>
            )}
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
