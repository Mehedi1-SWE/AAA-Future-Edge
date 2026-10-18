// The preferred origin already used by the application's www redirect.
export const siteUrl = "https://aaa-fe.com";
export const siteName = "AAA Future-Edge";

// Summaries are drawn exclusively from the content on each existing page.
export const pageDetails = {
  "/": {
    title: "Management Consulting",
    description: "AAA Future-Edge is a management consulting firm specializing in HR solutions, talent acquisition, leadership development, and performance management.",
  },
  "/explore": {
    title: "Explore Us",
    description: "Learn about AAA Future-Edge, its HR consulting approach, mission, vision, values, and CEO and Lead Consultant Mr. Riad Mahmud.",
  },
  "/career": {
    title: "Career",
    description: "View the job listings, role descriptions, requirements, and application links on the AAA Future-Edge career page.",
  },
  "/contact": {
    title: "Contact Us",
    description: "Contact AAA Future-Edge at info@aaa-fe.com or +880 1922000025. Office: House-774, Road-11, Avenue-02, Mirpur DOHS, Dhaka-1216.",
  },
  "/gallery": {
    title: "Gallery",
    description: "Explore the AAA Future-Edge gallery of team-building activities, employee training sessions, cultural diversity celebrations, and leadership workshops.",
  },
  "/blog": {
    title: "Blogs",
    description: "Browse articles on essential website features, Endpoint Detection and Response (EDR), and social engineering attack types.",
  },
  "/IT-Strategy": {
    title: "IT Strategy",
    description: "Explore IT strategy content covering IT infrastructure, data privacy policies, integrated security, and business automation.",
  },
  "/Scope-of-works": {
    title: "Scope of Works",
    description: "Explore organization architecture, recruitment and selection, leadership development, HR strategy, talent acquisition, and performance management.",
  },
  "/core-services": {
    title: "Core Services",
    description: "Explore AAA Future-Edge core services including HR transformation, team building, MTO development, HR strategy and process, and organizational development.",
  },
  "/HR-Strategy": {
    title: "HR Strategy",
    description: "Explore HR strategy, talent development and optimization, performance management, and HR planning content from AAA Future-Edge.",
  },
  "/HR-Services": {
    title: "HR Services",
    description: "Explore HR services covering Human Resource Information Systems (HRIS), talent hunt, HR audits, and compliance.",
  },
  "/IT-Services": {
    title: "IT Services",
    description: "Explore managed IT services, cloud solutions, cybersecurity, IT consulting, network solutions, IT infrastructure, and software development.",
  },
  "/Career-Counselling": {
    title: "Career Counselling",
    description: "Explore career assessments, resume and cover letter writing, interview coaching, and job search strategies from AAA Future-Edge.",
  },
  "/Health-Tourism": {
    title: "Health Tourism",
    description: "Health Tourism at AAA Future-Edge: coming soon. Stay tuned as we prepare something special just for you.",
  },
};

export function createPageMetadata(path, details = pageDetails[path]) {
  const title = `${details.title} | ${siteName}`;
  return {
    title,
    description: details.description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description: details.description,
      url: path,
      siteName,
      type: "website",
      images: [{ url: "/assets/logo/Future-Edge.jpg", alt: "AAA Future-Edge logo" }],
    },
  };
}
