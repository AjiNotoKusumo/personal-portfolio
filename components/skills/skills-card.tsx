import Rating from "@/components/skills/rating";
import { skillsInterface } from "@/config/skills";

interface SkillsCardProps {
  skills: skillsInterface[];
}

export default function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <div className="mx-auto grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {skills.map((skill, id) => (
        <div
          key={id}
          className="flex items-center gap-3 rounded-xl border bg-background px-4 py-4 transition-all hover:border-primary/40 hover:shadow-md"
        >
          <skill.icon size={32} className="shrink-0" />

          <h3 className="text-sm font-semibold">
            {skill.name}
          </h3>
        </div>
      ))}
    </div>
  );
}
