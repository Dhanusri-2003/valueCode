/**
 * Recommendation Card Component
 * Displays individual strategic recommendations
 */
export default function RecommendationCard({ title, description, icon, bgColor, borderColor, textColor }) {
  return (
    <div className={`${bgColor} border ${borderColor} rounded-lg p-6`}>
      <div className="flex items-center mb-3">
        <span className={`${textColor} text-lg mr-2`}>{icon}</span>
        <h4 className={`font-bold ${textColor}`}>{title}</h4>
      </div>
      <p className="text-[var(--color-mutedgray)] text-sm">
        {description}
      </p>
    </div>
  );
}