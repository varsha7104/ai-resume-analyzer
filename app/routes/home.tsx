import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Navbar from "~/components/Navbar";
import { resumes } from "constants/indx";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job:" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen">
      <Navbar />
      <section className="main-section ">
        <div className="page-heading text-center mb-10 py-10">
          <h1 className="text-3xl font-bold">Track your Applications & Resume Ratings</h1>
          <h2 className="text-lg text-gray-600 mt-2">
            Review your submissions and check AI-powered feedback
          </h2>
        </div>

        {resumes.length > 0 && (
          <div className="resume-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 justify-items-center">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
