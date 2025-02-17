import { Box, Flex, FlexProps, Progress, Text } from '@chakra-ui/react';
import { ColumnSchema } from '../../../sdlc/single-report-schema';
import { Comparable, Selectable } from '../../../types';
import {
  formatColumnValueWith,
  formatIntervalMinMax,
} from '../../../utils/formatters';
import { ColumnName } from '../../Tables';
import { getIconForColumnType } from '../utils';

interface Props extends Comparable, Selectable {
  tableName: string;
  baseColumnDatum?: Partial<ColumnSchema>;
  targetColumnDatum?: Partial<ColumnSchema>;
  isActive: boolean;
  showExtra?: boolean;
}
/**
 * A list item showing a base column detail's name, valid% progress bar(s) depending on split-view
 */
export function ColumnDetailListItem({
  tableName,
  baseColumnDatum,
  targetColumnDatum,
  onSelect,
  isActive,
  singleOnly,
  showExtra,
  ...props
}: Props & FlexProps) {
  const fallbackColumnDatum = targetColumnDatum || baseColumnDatum;
  const { icon } = getIconForColumnType(fallbackColumnDatum);
  const { valids_p: baseValidRatio } = baseColumnDatum || {};
  const baseValidsPercentValue = Number(baseValidRatio) * 100;
  const baseValidsPercentLabel = formatColumnValueWith(
    baseValidRatio,
    formatIntervalMinMax,
  );
  const { valids_p: targetValidRatio } = targetColumnDatum || {};
  const targetValidsPercentValue = Number(targetValidRatio) * 100;
  const targetValidsPercentLabel = formatColumnValueWith(
    targetValidRatio,
    formatIntervalMinMax,
  );

  return (
    <Flex
      mx={3}
      fontSize={'sm'}
      borderRadius={'lg'}
      justifyContent={'space-between'}
      alignItems={'center'}
      cursor={'pointer'}
      onClick={() =>
        onSelect({ tableName, columnName: fallbackColumnDatum?.name || '' })
      }
      color={isActive ? 'white' : 'inherit'}
      bg={isActive ? 'piperider.400' : 'inherit'}
      _hover={{ bgColor: isActive ? 'piperider.500' : 'blackAlpha.50' }}
      data-cy="column-detail-list-item"
      {...props}
    >
      <ColumnName
        iconColor={isActive ? 'white' : 'gray.500'}
        icon={icon}
        name={fallbackColumnDatum?.name}
      />
      {showExtra && (
        <Box
          w={{ md: 'auto', xl: '10em' }}
          fontSize={{ md: '2xs', xl: 'sm' }}
          display={{ base: 'none', lg: 'block' }}
          color={isActive ? 'white' : 'gray.600'}
        >
          {!singleOnly && (
            <Text fontSize={'sm'} color={'gray.600'} fontWeight={'semibold'}>
              Base
            </Text>
          )}
          {baseValidsPercentLabel && (
            <Progress value={baseValidsPercentValue || 0} />
          )}
          <Flex justifyContent={'space-between'}>
            <Text fontSize={'xs'} mr={2}>
              {baseValidsPercentLabel}
            </Text>
            <Text fontSize={'xs'}>Valid</Text>
          </Flex>
          {!singleOnly && (
            <Box mt={3}>
              <Text fontSize={'sm'} fontWeight={'semibold'}>
                Target
              </Text>
              {targetValidsPercentLabel && (
                <Progress value={targetValidsPercentValue || 0} />
              )}
              <Flex justifyContent={'space-between'}>
                <Text fontSize={'xs'} mr={2}>
                  {targetValidsPercentLabel}
                </Text>
                <Text fontSize={'xs'}>Valid</Text>
              </Flex>
            </Box>
          )}
        </Box>
      )}
    </Flex>
  );
}
