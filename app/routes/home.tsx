import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job:" },
  ];
}

export default function Home() {
  const { auth, kv } = usePuterStore();
  const navigate = useNavigate();
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loadingResumes, setLoadingResumes] = useState(false);

  useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate("/auth?next=/");
    }
  }, [auth.isAuthenticated]);

  useEffect(() => {
    const loadResumes = async () => {
      setLoadingResumes(true);
      const items = (await kv.list("resume:*", true)) as KVItem[];

      const parsedResumes = items?.map((item) => JSON.parse(item.value) as Resume);
      setResumes(parsedResumes || []);
      setLoadingResumes(false);
    };

    loadResumes();
  }, []);

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen">
      <Navbar />

      <section className="main-section">
        <div className="page-heading text-center mb-10 py-10">
          <h1 className="text-3xl font-bold">
            Track your Applications & Resume Ratings
          </h1>
          <h2 className="text-lg text-gray-600 mt-2">
            Review your submissions and check AI-powered feedback
          </h2>
        </div>

        {!loadingResumes &&resumes.length > 0 && (
          <div className="resume-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 justify-center">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}

        {loadingResumes && (
          <div className="text-center text-gray-500 mt-10">Loading resumes...</div>
        )}
      </section>
    </main>
  );
}
