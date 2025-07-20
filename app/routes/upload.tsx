import React, { useState, type FormEvent } from 'react';
import FileUploader from '~/components/FileUploader';
import Navbar from '~/components/Navbar';

const Upload = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusText, setStatusText] = useState<string>("Processing your resume...");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // ✅ use e.currentTarget directly (it's the form)
    const formData = new FormData(e.currentTarget);
    const companyName = formData.get('company-name') as string;
    const jobTitle = formData.get('job-title') as string;
    const jobDescription = formData.get('job-description') as string;

    if (!file) {
      alert("Please upload a resume before submitting.");
      return;
    }

    // ✅ Mark as processing
    setIsProcessing(true);
    setStatusText("Processing your resume...");

    // Simulate processing (e.g., API call)
    console.log({ companyName, jobTitle, jobDescription, file });
    // You can place your analyze logic here
  };

  const handleFileSelect = (file: File | null) => {
    setFile(file);
  };

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen">
      <Navbar />

      <section className="main-section">
        <div className="page-heading py-16 text-center">
          <h1 className="text-3xl font-bold">Smart feedback for your dream job</h1>

          {isProcessing ? (
            <>
              <h2>{statusText}</h2>
              <img src="/images/resume-scan.gif" className="w-full" />
            </>
          ) : (
            <>
              <h2>Drop your resume for an ATS score and improvement tips</h2>
              <form
                id="upload-form"
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 mt-8"
              >
                <div className="form-div">
                  <label htmlFor="company-name">Company Name</label>
                  <input type="text" name="company-name" placeholder="Company Name" id="company-name" />
                </div>

                <div className="form-div">
                  <label htmlFor="job-title">Job Title</label>
                  <input type="text" name="job-title" placeholder="Job Title" id="job-title" />
                </div>

                <div className="form-div">
                  <label htmlFor="job-description">Job Description</label>
                  <textarea rows={5} name="job-description" placeholder="Job Description" id="job-description" />
                </div>

                <div className="form-div">
                  <label htmlFor="uploader">Upload Resume</label>
                  <FileUploader onFileSelect={handleFileSelect} />
                </div>

                <button className="primary-button" type="submit">
                  Analyze Resume
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default Upload;
