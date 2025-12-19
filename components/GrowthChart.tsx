import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { COLORS } from '../constants';

const data = [
  { name: 'Launch 1', compound: 10, reset: 10 },
  { name: 'Launch 2', compound: 25, reset: 12 },
  { name: 'Launch 3', compound: 45, reset: 11 },
  { name: 'Launch 4', compound: 70, reset: 13 },
  { name: 'Launch 5', compound: 100, reset: 12 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-primary p-3 border border-gray-700 shadow-xl text-xs">
        <p className="text-white font-bold mb-2 uppercase tracking-wider">Impact Analysis</p>
        <p style={{ color: COLORS.accent }} className="font-mono">System: {payload[0].value}</p>
        <p className="text-gray-400 font-mono">Traditional: {payload[1].value}</p>
      </div>
    );
  }
  return null;
};

const GrowthChart: React.FC = () => {
  return (
    <div className="w-full flex flex-col">
      <h3 className="text-center text-xs font-bold text-gray-500 mb-6 uppercase tracking-widest">Momentum Trajectory</h3>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="0 0" vertical={false} stroke="#e5e7eb" strokeOpacity={0.2} />
            <XAxis dataKey="name" hide />
            <YAxis hide />
            <Tooltip content={<CustomTooltip />} cursor={{stroke: '#e5e7eb', strokeWidth: 1}} />
            <Line 
                type="monotone" 
                dataKey="compound" 
                stroke={COLORS.accent} 
                strokeWidth={3} 
                dot={{ r: 3, fill: COLORS.accent, strokeWidth: 0 }} 
                activeDot={{ r: 5, stroke: '#fff', strokeWidth: 2 }}
                isAnimationActive={true}
            />
            <Line 
                type="monotone" 
                dataKey="reset" 
                stroke="#9ca3af" 
                strokeWidth={1} 
                strokeDasharray="4 4" 
                dot={false} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-center gap-8 mt-6 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-accent"></span> Spotify System
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-gray-400"></span> Traditional Motion
        </div>
      </div>
    </div>
  );
};

export default GrowthChart;