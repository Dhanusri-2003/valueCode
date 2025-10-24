/**
 * Timeline Phase Component
 * Displays individual timeline phases
 */
export default function TimelinePhase({ title, duration, items, rightAlign = false }) {
  return (
    <div className="relative mb-8">
      <h3 className="text-lg font-bold text-[var(--color-softwhite)] mb-2">{title}</h3>
      <span className={`absolute top-0 ${rightAlign ? 'right-4' : 'right-0'} text-[var(--color-electric)] font-semibold`}>
        {duration}
      </span>
      <ul className="space-y-1 text-[var(--color-softwhite)]">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}