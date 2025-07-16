// components/experience/career-card.tsx

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/common/icons";
import ChipContainer from "@/components/ui/chip-container";
import { CareerExperienceInterface } from "@/config/career";

interface CareerCardProps {
  career: CareerExperienceInterface;
}

export default function CareerCard({ career }: CareerCardProps) {
  if (!career) return null;

  const formatDate = (date: Date | "Present") => {
    if (date === "Present") return "Present";
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  const dateRange = `${formatDate(career.startDate)} - ${formatDate(career.endDate)}`;

  return (
    <div className="relative p-6 max-w-sm bg-background border border-border rounded-lg mx-auto">
      <div className="relative w-full h-[200px]">
        {career.logo && (
          <Image
            className="rounded-lg border border-border object-cover"
            src={career.logo}
            alt={career.company}
            fill
          />
        )}
      </div>

      <div className="pt-5 space-y-3">
        <h5 className="text-2xl font-bold tracking-tight text-foreground">
          {career.company}
        </h5>
        <p className="text-sm font-medium text-muted-foreground">
          {career.position} • {career.location}
        </p>
        <p className="text-xs text-muted-foreground">{dateRange}</p>
        <p className="line-clamp-3 text-sm text-muted-foreground">
          {career.description?.[0]}
        </p>

        <ChipContainer textArr={career.skills} />

        {career.companyUrl && (
          <Link href={career.companyUrl} target="_blank">
            <Button variant={"default"} className="mt-2">
              Visit Company
              <Icons.chevronRight className="w-4 ml-1" />
            </Button>
          </Link>
        )}
      </div>

      <div className="absolute bottom-4 right-4 p-3 rounded-full bg-background border border-border">
        <Icons.work className="h-4 w-4" />
      </div>
    </div>
  );
}
