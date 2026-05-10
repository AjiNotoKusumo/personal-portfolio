import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import ContributionCard from "@/components/contributions/contribution-card";
import { contributionsUnsorted } from "@/config/contributions";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.certifications.metadata.title,
  description: pagesConfig.certifications.metadata.description,
};

export default function CertificationsPage() {
  return (
    <PageContainer
      title={pagesConfig.certifications.title}
      description={pagesConfig.certifications.description}
    >
      <ContributionCard
        contributions={contributionsUnsorted}
      />
    </PageContainer>
  );
}
