import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { ProjectInterface } from "@/config/projects";

interface ProjectCardProps {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative p-6 w-full bg-background border border-border rounded-lg h-full flex flex-col">
      <div className="relative w-full h-[200px] flex-shrink-0">
        <Image
          className="rounded-lg border border-border object-cover"
          src={project.companyLogoImg}
          alt="img"
          fill
        />
      </div>
      <div className="pt-5 space-y-3 flex flex-col flex-grow">
        <h5 className="text-2xl font-bold tracking-tight text-foreground">
          {project.companyName}
        </h5>
        <p className="line-clamp-3 font-normal text-muted-foreground flex-grow">
          {project.shortDescription}
        </p>
        <div className="flex gap-2 flex-wrap">
          <ChipContainer textArr={project.category} />
        </div>
        <Link href={`/projects/${project.id}`} className="mt-auto">
          <Button variant={"default"} className="mt-2 w-full sm:w-auto">
            Read more
            <Icons.chevronRight className="w-4 ml-1" />
          </Button>
        </Link>
      </div>
      <div className="absolute bottom-4 right-4 flex items-center gap-2 hidden md:flex">
        {/* Github Link */}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-background border border-border hover:bg-muted transition-colors"
          >
            <Icons.gitHub className="h-5 w-5 text-muted-foreground hover:text-foreground" />
          </a>
        )}

        {/* Live Demo Link */}
        {project.websiteLink && (
          <a
            href={project.websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-background border border-border hover:bg-muted transition-colors"
          >
            <Icons.externalLink className="h-5 w-5 text-muted-foreground hover:text-foreground" />
          </a>
        )}

        {/* Project Type Icon */}
        <div className="p-3 rounded-full bg-background border border-border">
          {project.type === "Personal" ? (
            <Icons.userFill className="h-4 w-4" />
          ) : (
            <Icons.work className="h-4 w-4" />
          )}
        </div>
      </div>
    </div>
  );
}
