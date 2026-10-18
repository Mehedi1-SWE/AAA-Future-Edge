import { pageDetails, siteUrl } from "../lib/seo";
import { jobDetails } from "../data/job-details";

export default function sitemap() {
  const paths = [
    ...Object.keys(pageDetails),
    ...jobDetails.map((job) => `/job/${job.id}`),
  ];
  return paths.map((path) => ({ url: new URL(path, siteUrl).href }));
}
