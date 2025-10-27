/**
 * Timeline Phase Component
 * Displays individual timeline phases
 */
// export default function TimelinePhase({ title, duration, items, rightAlign = false }) {
//   return (
//     <div className="relative mb-8">
//       <h3 className="text-lg font-bold text-[var(--color-softwhite)] mb-2">{title}</h3>
//       <span className={`absolute top-0 ${rightAlign ? 'right-4' : 'right-0'} text-[var(--color-electric)] font-semibold`}>
//         {duration}
//       </span>
//       <ul className="space-y-1 text-[var(--color-softwhite)]">
//         {items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

export default function TimelinePhase({ title, duration, items, rightAlign = false }) {
  return (
    <div className={`relative mb-6 ${rightAlign ? 'text-right' : 'text-left'}`}>
      {/* Thin Gradient Border */}
      <div className={`
        relative p-[1px] rounded-lg bg-gradient-to-r from-[var(--color-electric)] to-purple-500
        ${rightAlign ? 'ml-8' : 'mr-8'}
        hover:from-[var(--color-electric)] hover:to-pink-500 transition-all duration-300
      `}>
        <div className="bg-[var(--color-midnight)] rounded-lg p-4">
          
          {/* Clean Header */}
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-base font-semibold text-[var(--color-softwhite)]">
              {title}
            </h3>
            <span className="text-xs text-[var(--color-electric)] font-medium">
              {duration}
            </span>
          </div>

          {/* Minimal Items */}
          <ul className="space-y-1">
            {items.map((item, index) => (
              <li 
                key={index} 
                className="text-[var(--color-softwhite)]/70 text-xs leading-relaxed"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}