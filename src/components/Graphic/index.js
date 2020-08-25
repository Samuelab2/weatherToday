import React, { useRef } from 'react';
import { AreaClosed, Bar } from '@vx/shape';
import appleStock from '@vx/mock-data/lib/mocks/appleStock';
import { curveMonotoneX } from '@vx/curve';
import { scaleTime, scaleLinear } from '@vx/scale';
import { useTooltip, Tooltip, defaultStyles } from '@vx/tooltip';
import { localPoint } from '@vx/event';
import { LinearGradient } from '@vx/gradient';
import { max, extent, bisector } from 'd3-array';
import { timeFormat } from 'd3-time-format';

const stock = appleStock.slice(800);
export const background = '#3b6978';
export const background2 = '#204051';
export const accentColor = '#edffea';
export const accentColorDark = '#75daad';
const tooltipStyles = {
  ...defaultStyles,
  background,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  border: '1px solid white',
  color: 'white',
};

// util
const formatDate = timeFormat("%b %d, '%y");

// accessors
const getDate = (d) => new Date(d.date);
const getStockValue = (d) => d.close;
const bisectDate = bisector(d => new Date(d.date)).left;

const Graphic = () => {
  const {
    width = 400,
    height = 400,
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
    domain: extent(stock, getDate),
  })

  const stockValueScale = scaleLinear({
    range: [yMax, 0],
    domain: [0, (max(stock, getStockValue) || 0) + yMax / 3],
    nice: true,
  })

  // tooltip handler
  const handleTooltip = (event) => {
    const { x } = localPoint(event);
    const x0 = dateScale.invert(x);
    const index = bisectDate(stock, x0, 1);
    const d0 = stock[index - 1];
    const d1 = stock[index];
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
          data={stock}
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
          <Tooltip key={Math.random()} top={tooltipTop - 12} left={tooltipLeft + 12} style={tooltipStyles}>
            {`$${getStockValue(tooltipData)}`}
          </Tooltip>
          <Tooltip
            key={Math.random()}
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