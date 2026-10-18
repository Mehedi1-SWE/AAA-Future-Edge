import JobDetails from "../../../../components/Others/Career/JobDetails";
import { jobDetails } from "../../../../data/job-details";
import { createPageMetadata } from "../../../../lib/seo";

export function generateStaticParams() {
  return jobDetails.map((job) => ({ id: String(job.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  // Retain the existing page's numeric ID matching, including URL aliases.
  const job = jobDetails.find((job) => job.id === parseInt(id));
  if (!job) {
    return {
      title: "Job Not Found | AAA Future-Edge",
      description: "The job you're looking for doesn't exist or has been removed.",
      robots: { index: false, follow: true },
    };
  }
  return createPageMetadata(`/job/${job.id}`, {
    title: job.title,
    description: `${job.title} at ${job.companyName}, ${job.location}. ${job.jobType}. Application deadline: ${job.applicationDeadline}.`,
  });
}

export default async function JobPage({ params }) {
  const { id } = await params;
  return <JobDetails id={id} />;
}
