/**
 * Content Section Component
 * Reusable component for features, challenges, and improvements
 */
export default function ContentSection({ title, items, icon, colorClass, indexColorClass }) {
  return (
    <div className="flex-1">
      <div className="flex items-center mb-4">
        <span className={`${colorClass} text-xl mr-2`}>{icon}</span>
        <h3 className={`text-lg font-bold ${colorClass}`}>{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <strong className={`${indexColorClass} mr-2`}>{index + 1}.</strong>
            <span className="text-[var(--color-softwhite)]">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}