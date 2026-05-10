import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import Timeline from "@/components/education/timeline";
import { educations } from "@/config/education";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${pagesConfig.education.metadata.title} | Education Timeline`,
  description: `${pagesConfig.education.metadata.description} Explore my educational journey and academic achievements.`,
  keywords: [
    "education timeline",
    "academic achievements",
    "student experience",
    "learning journey",
    "educational background",
  ],
  alternates: {
    canonical: `${siteConfig.url}/education`,
  },
};

export default function EducationPage() {
  return (
    <PageContainer
      title={pagesConfig.education.title}
      description={pagesConfig.education.description}
    >
      <Timeline educations={educations} />
    </PageContainer>
  );
}
