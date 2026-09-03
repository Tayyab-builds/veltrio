import { useState } from 'react';
import { revenueData } from '../../data/dashboardData';

export default function RevenueOverview() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeRange, setActiveRange] = useState('30D');

  const width = 600;
  const height = 200;
  const padding = { top: 20, right: 20, bottom: 30, left: 40 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  const maxValue = Math.max(...revenueData.values);
  const minValue = 0;

  const points = revenueData.values.map((value, index) => {
    const x = padding.left + (index / (revenueData.values.length - 1)) * chartWidth;
    const y = padding.top + chartHeight - ((value - minValue) / (maxValue - minValue)) * chartHeight;
    return { x, y, value, label: revenueData.labels[index] };
  });

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ');
  const areaPath = `${linePath} L${points[points.length-1].x},${padding.top + chartHeight} L${points[0].x},${padding.top + chartHeight} Z`;

  return (
    <div className="card-premium bg-white rounded-xl border border-border-color p-5 sm:p-6 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between mb-5">
        <div>
          <h3 className="text-lg font-semibold text-dark">Revenue overview</h3>
          <p className="mt-1 text-sm text-secondary-text">Track revenue performance over time.</p>
        </div>
        <div className="inline-flex w-fit rounded-lg bg-slate-100 p-1" role="group" aria-label="Revenue timeframe">
          {['7D', '30D', '90D', '12M'].map((range) => (
            <button
              key={range}
              onClick={() => setActiveRange(range)}
              className={`h-7 px-2.5 text-xs font-semibold rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 ${activeRange === range ? 'bg-white text-primary shadow-sm' : 'text-secondary-text hover:text-dark'}`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      <div className="relative min-w-0" aria-label="Revenue line chart">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full min-h-[180px] h-auto" role="img" aria-label="Revenue trend over time">
          <defs>
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
            const y = padding.top + chartHeight * ratio;
            return (
              <line key={ratio} x1={padding.left} y1={y} x2={width - padding.right} y2={y} stroke="#E2E8F0" strokeWidth="1" />
            );
          })}

          {/* Area */}
          <path d={areaPath} fill="url(#revenueGradient)" />
          {/* Line */}
          <path d={linePath} fill="none" stroke="#4F46E5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

          {/* Data points */}
          {points.map((p, i) => (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={hoveredIndex === i ? '5.5' : '4'}
              fill="#4F46E5"
              className="cursor-pointer"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onFocus={() => setHoveredIndex(i)}
              onBlur={() => setHoveredIndex(null)}
              tabIndex="0"
              aria-label={`${p.label}: $${p.value.toLocaleString()}`}
            />
          ))}

          {/* Labels */}
          {points.map((p, i) => (
            <text key={i} x={p.x} y={padding.top + chartHeight + 15} textAnchor="middle" className="text-xs fill-current text-muted-text" fontSize="10">
              {p.label}
            </text>
          ))}
        </svg>

        {/* Tooltip */}
        {hoveredIndex !== null && (
          <div
            className="absolute bg-white border border-border-color rounded-lg shadow-lg px-3 py-2 text-xs"
            style={{
              left: points[hoveredIndex].x,
              top: points[hoveredIndex].y - 40,
              transform: 'translateX(-50%)',
            }}
          >
            <div className="font-semibold text-dark">{points[hoveredIndex].label}</div>
            <div className="text-primary">${points[hoveredIndex].value.toLocaleString()}</div>
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center gap-3 border-t border-border-color pt-4">
        <div>
          <span className="block text-xs font-medium uppercase tracking-wide text-muted-text">Current revenue</span>
          <span className="mt-0.5 block text-xl font-bold tracking-tight text-dark">{revenueData.currentRevenue}</span>
        </div>
        <span className="ml-auto rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">{revenueData.change}</span>
      </div>
    </div>
  );
}
