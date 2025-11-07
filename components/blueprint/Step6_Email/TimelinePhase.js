export default function TimelinePhase({ title, duration, items, rightAlign = false }) {
  return (
    <div className={`relative mb-8 ${rightAlign ? 'text-right' : 'text-left'}`}>
      {/* Gradient Background Card */}
      <div className={`
        relative p-4 rounded-xl bg-gradient-to-br from-[#F5F0ED] to-[#f0e6df]
        border border-[#8B7355]/30 shadow-lg
        ${rightAlign ? 'ml-8' : 'mr-8'}
        hover:shadow-[#8B7355]/10 hover:shadow-xl transition-all duration-300
      `}>
        
        {/* Header with Icon */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-[#3E2723]">
              {title}
            </h3>
          </div>
          <span className="text-sm text-[#8B7355] font-semibold bg-[#8B7355]/10 px-3 py-1 rounded-full">
            {duration}
          </span>
        </div>

        {/* Items with Bullets */}
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li 
              key={index} 
              className="flex items-start gap-3 text-[#5D4037] text-sm leading-relaxed"
            >
              <span className="text-[#8B7355] mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}