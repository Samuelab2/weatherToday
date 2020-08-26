import React, { useRef } from 'react';
import { AreaClosed, Bar } from '@vx/shape';
import { curveMonotoneX } from '@vx/curve';
import { scaleTime, scaleLinear } from '@vx/scale';
import { useTooltip, Tooltip, defaultStyles } from '@vx/tooltip';
import { localPoint } from '@vx/event';
import { LinearGradient } from '@vx/gradient';
import { max, extent, bisector } from 'd3-array';
import { timeFormat } from 'd3-time-format';

export const background = '#3b6978';
export const background2 = '#204051';
export const accentColor = '#edffea';
export const accentColorDark = '#75daad';
const tooltipStyles = {
  ...defaultStyles,
  background,
  position: 'absolute',
  border: '1px solid white',
  color: 'white',
};

// util

// accessors
const getDate = (d) => new Date(d.x);
const getStockValue = (d) => d.y;
const bisectDate = bisector(d => new Date(d.x)).left;

const Graphic = ({ data, type }) => {
  
  const formatDate = type === 'hours' ? timeFormat("%A, %-I:%M:%S %p") : timeFormat("%A, %-d/%-m/%Y")

  const {
    width = 400,
    height = 200,
    margin = { top: 0, right: 0, bottom: 0, left: 0 },
    showTooltip,
    hideTooltip,
    tooltipData,
    tooltipTop = 0,
    tooltipLeft = 0,
  } = useTooltip()

  const svgRef = useRef(null);
  
  if (width < 10) return null;

  // bounds
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  // scales
  const dateScale = scaleTime({
    range: [0, xMax],
    domain: extent(data, getDate),
  })

  const stockValueScale = scaleLinear({
    range: [yMax, 0],
    domain: [0, (max(data, getStockValue) || 0) + yMax / 10],
    nice: true,
  })

  // tooltip handler
  const handleTooltip = (event) => {
    const { x } = localPoint(event);
    const x0 = dateScale.invert(x);
    const index = bisectDate(data, x0, 1);
    const d0 = data[index - 1];
    const d1 = data[index];
    let d = d0;
    if (d1 && getDate(d1)) {
      d = x0.valueOf() - getDate(d0).valueOf() > getDate(d1).valueOf() - x0.valueOf() ? d1 : d0;
    }
    showTooltip({
      tooltipData: d,
      tooltipLeft: x,
      tooltipTop: stockValueScale(getStockValue(d)),
    });
  }

  return (
    <div>
      <svg width={width} height={height} ref={svgRef}>
        <rect
          x={0}
          y={0}
          width={width}
          height={height}
          fill="url(#area-background-gradient)"
          rx={14}
        />
        <LinearGradient id="area-background-gradient" from={background} to={background2} />
        <LinearGradient id="area-gradient" from={accentColor} to={accentColor} toOpacity={0.1} />
        <AreaClosed
          data={data}
          x={d => dateScale(getDate(d))}
          y={d => stockValueScale(getStockValue(d))}
          yScale={stockValueScale}
          strokeWidth={1}
          stroke="url(#area-gradient)"
          fill="url(#area-gradient)"
          curve={curveMonotoneX}
        />
        <Bar
          x={0}
          y={0}
          width={width}
          height={height}
          fill="transparent"
          rx={14}
          onTouchStart={handleTooltip}
          onTouchMove={handleTooltip}
          onMouseMove={handleTooltip}
          onMouseLeave={() => hideTooltip()}
        />
      </svg>
      {tooltipData && (
        <>
          <Tooltip top={tooltipTop - 12} left={tooltipLeft + 12} style={tooltipStyles}>
            {`${getStockValue(tooltipData)} ° C`}
          </Tooltip>
          <Tooltip
            top={yMax - 14}
            left={tooltipLeft}
            style={{
              ...defaultStyles,
              minWidth: 72,
              textAlign: 'center',
              transform: 'translateX(-50%)',
            }}
          >
            {formatDate(getDate(tooltipData))}
          </Tooltip>
        </>
      )}
    </div>
  );
}

export default Graphic