import { type FormEvent, useState } from 'react';
import Navbar from "~/components/Navbar";
import FileUploader from "~/components/FileUploader";
import { usePuterStore } from "~/lib/puter";
import { useNavigate } from "react-router";
import { convertPdfToImage } from "~/lib/pdf2img";
import { generateUUID } from '~/lib/utils';
import { prepareInstructions } from 'constants/indx';

const Upload = () => {
  const { auth, isLoading, fs, ai, kv } = usePuterStore();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusText, setStatusText] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleFileSelect = (file: File | null) => {
    console.log("File selected:", file);
    setFile(file);
  };

  const handleAnalyze = async ({
    companyName,
    jobTitle,
    jobDescription,
    file,
  }: {
    companyName: string;
    jobTitle: string;
    jobDescription: string;
    file: File;
  }) => {
    setIsProcessing(true);

    setStatusText('Uploading the file...');
    const uploadedFile = await fs.upload([file]);
    if (!uploadedFile) {
      setStatusText('Error: Failed to upload file');
      return;
    }

    setStatusText('Converting to image...');
    const imageFile = await convertPdfToImage(file);
    if (!imageFile.file) {
      setStatusText('Error: Failed to convert PDF to image');
      return;
    }

    setStatusText('Uploading the image...');
    const uploadedImage = await fs.upload([imageFile.file]);
    if (!uploadedImage) {
      setStatusText('Error: Failed to upload image');
      return;
    }

    setStatusText('Preparing data...');
    const uuid = generateUUID();
    const data = {
      id: uuid,
      resumePath: uploadedFile.path,
      imagePath: uploadedImage.path,
      companyName,
      jobTitle,
      jobDescription,
      feedback: '',
    };
    await kv.set(`resume:${uuid}`, JSON.stringify(data));

    setStatusText('Analyzing...');
    const feedback = await ai.feedback(
      uploadedFile.path,
      prepareInstructions({ jobTitle, jobDescription })
    );

    if (!feedback) {
      setStatusText('Error: Failed to analyze resume');
      return;
    }

    const feedbackText =
      typeof feedback.message.content === 'string'
        ? feedback.message.content
        : feedback.message.content[0].text;

    data.feedback = JSON.parse(feedbackText);
    await kv.set(`resume:${uuid}`, JSON.stringify(data));

    setStatusText('Analysis complete, redirecting...');
    console.log(data);
    navigate(`/resume/${uuid}`);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submit clicked");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const companyName = formData.get('company-name') as string;
    const jobTitle = formData.get('job-title') as string;
    const jobDescription = formData.get('job-description') as string;

    if (!file) {
      setStatusText("Please upload your resume file.");
      console.warn("No file selected");
      return;
    }

    handleAnalyze({ companyName, jobTitle, jobDescription, file });
  };

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />

      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Smart feedback for your dream job</h1>
          {isProcessing ? (
            <>
              <h2>{statusText}</h2>
              <img src="/images/resume-scan.gif" className="w-full" />
            </>
          ) : (
            <h2>Drop your resume for an ATS score and improvement tips</h2>
          )}

          {!isProcessing && (
            <form id="upload-form" onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
              <div className="form-div">
                <label htmlFor="company-name">Company Name</label>
                <input type="text" name="company-name" id="company-name" placeholder="Company Name" required />
              </div>

              <div className="form-div">
                <label htmlFor="job-title">Job Title</label>
                <input type="text" name="job-title" id="job-title" placeholder="Job Title" required />
              </div>

              <div className="form-div">
                <label htmlFor="job-description">Job Description</label>
                <textarea name="job-description" id="job-description" rows={5} placeholder="Job Description" required />
              </div>

              <div className="form-div">
                <label htmlFor="uploader">Upload Resume</label>
                <FileUploader onFileSelect={handleFileSelect} />
              </div>

              <button className="primary-button" type="submit">
                Analyze Resume
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default Upload;
