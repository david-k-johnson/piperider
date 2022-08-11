import { Flex } from '@chakra-ui/react';
import { useRef } from 'react';
import { useResizeObserver } from '../../hooks/useResizeObserver';
import { useSingleChart } from '../../hooks/useSingleChart';
import { ColumnSchema } from '../../sdlc/single-report-schema';

export interface BarChartDatum {
  type: ColumnSchema['type'];
  isCategorical: boolean;
  label: string | null;
  value: any;
  total: number;
}
interface Props {
  data: Array<BarChartDatum>;
  height?: number | string;
}

export function SRBarChart({ data, height = '230px' }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const dimensions = useResizeObserver(containerRef);

  useSingleChart({ target: svgRef, data, dimensions });

  return (
    <Flex className="chart" width="100%" height={height} ref={containerRef}>
      <svg width="100%" overflow="visible" ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </Flex>
  );
}
