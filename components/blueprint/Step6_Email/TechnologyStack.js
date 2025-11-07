/**
 * Technology Stack Component
 * Displays recommended technologies
 */
export default function TechnologyStack() {
  const technologies = [
    "React UI", 
    "n8n Workflow Automation", 
    "Supabase Database", 
    "Google OAuth Integration",
    "Social Media APIs",
    "AI-Powered Features",
    "Webhook Integrations",
    "Multi-Platform Dashboard"
  ];

  return (
    <div className="mb-10">
      <h2 className="text-xl font-semibold text-[#3E2723] mb-4">Recommended Technology Stack</h2>
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech, index) => (
          <span 
            key={index} 
            className="bg-[#F5F0ED] text-[#8B7355] px-4 py-2 rounded-full text-sm font-medium border border-[#8B7355]/50"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}