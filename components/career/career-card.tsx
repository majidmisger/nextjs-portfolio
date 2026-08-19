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
  const isSvgLogo = career.logo?.endsWith(".svg");

  return (
    <div className="relative p-6 max-w-sm bg-background border border-border rounded-lg mx-auto h-full">
      <div className="relative w-full h-[180px] rounded-lg border border-border bg-white overflow-hidden">
        {career.logo ? (
          <Image
            className="object-contain p-6"
            src={career.logo}
            alt={`${career.company} logo`}
            fill
            unoptimized={isSvgLogo}
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <Icons.work className="h-10 w-10 text-muted-foreground" />
          </div>
        )}
      </div>

      <div className="pt-5 space-y-3">
        <h5 className="text-2xl font-bold tracking-tight text-foreground">
          {career.company}
        </h5>
        <p className="text-sm font-medium text-muted-foreground">
          {career.position} • {career.location}
        </p>
        {(career.product || career.team) && (
          <p className="text-xs font-medium text-foreground/80">
            {[career.product, career.team].filter(Boolean).join(" · ")}
          </p>
        )}
        <p className="text-xs text-muted-foreground">{dateRange}</p>
        <p className="line-clamp-3 text-sm text-muted-foreground">
          {career.description?.[0]}
        </p>

        <ChipContainer textArr={career.skills} />

        {career.companyUrl && (
          <Link href={career.companyUrl} target="_blank">
            <Button variant={"default"} className="mt-2">
              Visit Product
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
