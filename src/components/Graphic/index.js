import React, { useRef } from 'react';
import { AreaClosed, Line, Bar } from '@vx/shape';
import { curveLinear } from '@vx/curve';
import { scaleTime, scaleLinear } from '@vx/scale';
import { useTooltip, Tooltip, defaultStyles } from '@vx/tooltip';
import { localPoint } from '@vx/event';
import { LinearGradient } from '@vx/gradient';
import { max, extent, bisector } from 'd3-array';
import { timeFormat } from 'd3-time-format';

export const background = '#d54062';
export const background2 = '#ffa36c';
export const accentColor = '#ebdc87';
export const accentColorDark = '#799351';
const tooltipStyles = {
  ...defaultStyles,
  background: accentColorDark,
  position: 'absolute',
  border: '1px solid white',
  color: 'white',
};

// accessors
const getDate = (d) => new Date(d.x);
const getTempValue = (d) => d.y;
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

  const tempValueScale = scaleLinear({
    range: [yMax, 0],
    domain: [0, (max(data, getTempValue) || 0) + yMax / 6],
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
      tooltipTop: tempValueScale(getTempValue(d)),
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
        <LinearGradient id="area-gradient" from={accentColor} to={accentColor} toOpacity={0.5} />
        <AreaClosed
          data={data}
          x={d => dateScale(getDate(d))}
          y={d => tempValueScale(getTempValue(d))}
          yScale={tempValueScale}
          strokeWidth={1}
          stroke="url(#area-gradient)"
          fill="url(#area-gradient)"
          curve={curveLinear}
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
        {tooltipData && (
          <g>
            <Line
              from={{ x: tooltipLeft, y: 0 }}
              to={{ x: tooltipLeft, y: yMax }}
              stroke={accentColorDark}
              strokeWidth={2}
              pointerEvents="none"
              strokeDasharray="5,2"
            />
            <circle
              cx={tooltipLeft}
              cy={tooltipTop + 1}
              r={4}
              fill="black"
              fillOpacity={0.1}
              stroke="black"
              strokeOpacity={0.1}
              strokeWidth={2}
              pointerEvents="none"
            />
            <circle
              cx={tooltipLeft}
              cy={tooltipTop}
              r={4}
              fill={accentColorDark}
              stroke="white"
              strokeWidth={2}
              pointerEvents="none"
            />
          </g>
        )}
      </svg>
      {tooltipData && (
        <>
          <Tooltip top={tooltipTop - 25} left={tooltipLeft - 45} style={tooltipStyles}>
            {`${getTempValue(tooltipData)} ° C`}
          </Tooltip>
          <Tooltip
            top={yMax + 20}
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