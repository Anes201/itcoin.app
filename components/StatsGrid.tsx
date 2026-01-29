import { Users, BarChart3, Globe2, Trophy } from 'lucide-react';

const stats = [
  { 
    label: 'Total Supply', 
    value: '21M MAX', 
    icon: <Users className="w-5 h-5" />, 
    description: 'The hardest money ever' 
  },
  { 
    label: 'Market Dominance', 
    value: '52.4%', 
    icon: <BarChart3 className="w-5 h-5" />, 
    description: 'Share of total crypto market' 
  },
  { 
    label: 'Hash Rate', 
    value: '600 EH/s', 
    icon: <Trophy className="w-5 h-5" />, 
    description: 'Network security level' 
  },
  { 
    label: 'Active Addresses', 
    value: '1.2M+', 
    icon: <Globe2 className="w-5 h-5" />, 
    description: 'Decentralized users worldwide' 
  },
];

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((item, i) => (
        <div 
          key={i} 
          className="bg-[#0A0A0A] p-8 rounded-[2rem] border border-white/5 shadow-2xl hover:border-white/10 transition-all group"
        >
          <div className="w-12 h-12 bg-white/5 text-gray-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#F7931A] group-hover:text-white transition-all">
            {item.icon}
          </div>
          <p className="text-gray-500 font-black text-[10px] uppercase tracking-[0.2em] mb-2">{item.label}</p>
          <p className="text-3xl font-black text-white mb-2">{item.value}</p>
          <p className="text-gray-600 text-sm font-bold">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
