import JobPage from "@/components/JobPage";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";

interface PageProps {
  params: {
    slug: string;
  };
}
// Cache this function so that we fetch the job only once not in generateMetadata and in the page if i use "fetch" function i don't have
//to cash the function because it is already cached
const getJob = cache(async (slug: string) => {
  const job = await prisma.job.findUnique({
    where: { slug },
  });
  if (!job) notFound();
  return job;
});
export async function generateMetadata({
  params: { slug },
}: PageProps): Promise<Metadata> {
  fetch;
  const job = await getJob(slug);
  return {
    title: job.title,
  };
}
export async function generateStaticParams() {
  const jobs = await prisma.job.findMany({
    where: { approved: true },
    select: { slug: true },
  });
  return jobs.map(({ slug }) => slug);
}
const Page = async ({ params: { slug } }: PageProps) => {
  const job = await getJob(slug);
  const { applicationEmail, applicationUrl } = job;
  const applicationLink = applicationEmail
    ? `mailto:${applicationEmail}`
    : applicationUrl;
  if (!applicationLink) {
    console.error("Job has no application link or email");
    notFound();
  }
  return (
    <main className="mx-auto my-10 flex max-w-5xl flex-col items-center gap-5 px-3 md:flex-row md:items-start">
      <JobPage job={job} />
      <aside>
        <Button asChild>
          <a href={applicationLink} className="w-40 md:w-fit ">
            Apply Now
          </a>
        </Button>
      </aside>
    </main>
  );
};

export default Page;
