import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { ExperienceInterface } from "@/config/experience";

interface ProjectCardProps {
  project: ExperienceInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isSvgLogo =
    typeof project.companyLogoImg === "string" &&
    project.companyLogoImg.endsWith(".svg");

  return (
    <div className="relative p-6 max-w-sm bg-background border border-border rounded-lg h-full">
      {project.companyLogoImg && (
        <div className="relative w-full h-[160px] rounded-lg border border-border bg-white overflow-hidden mb-1">
          <Image
            className="object-contain p-10"
            src={project.companyLogoImg}
            alt={`${project.companyName} logo`}
            fill
            unoptimized={isSvgLogo}
          />
        </div>
      )}
      <div className="pt-5 space-y-3">
        <h5 className="text-2xl font-bold tracking-tight text-foreground">
          {project.companyName}
        </h5>
        <p className="line-clamp-3 font-normal text-muted-foreground">
          {project.shortDescription}
        </p>
        <div className="flex gap-2 flex-wrap">
          <ChipContainer textArr={project.category} />
        </div>
        <Link href={`/experience/${project.id}`}>
          <Button variant={"default"} className="mt-2">
            Read more
            <Icons.chevronRight className="w-4 ml-1" />
          </Button>
        </Link>
      </div>
      <div className="absolute bottom-4 right-4 p-3 rounded-full bg-background border border-border">
        {project.type === "Personal Project" ? (
          <Icons.userFill className="h-4 w-4" />
        ) : (
          <Icons.work className="h-4 w-4" />
        )}
      </div>
    </div>
  );
}
