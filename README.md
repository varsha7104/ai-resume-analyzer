# 🧠 AI Resume Analyzer
AI-powered Resume Analyzer built with React & Puter.js. Includes seamless auth, upload and store resumes, and match candidates to jobs using smart AI evaluations. All wrapped in a clean, reusable UI.

---

## 📋 Table of Contents

- [✨ Introduction](#-introduction)
- [⚙️ Tech Stack](#-tech-stack)
- [🔋 Features](#-features)
- [🤸 Project WalkThrough](#-project-walkthrough)
  - [🔧 Requirements](#-requirements)
  - [🏠 Homepage & Navbar](#-homepage--navbar)
  - [📄 Resume Card](#-resume-card)
  - [🔐 Authentication & Puter AI](#-authentication--puter-ai)
  - [📤 Upload File Component](#-upload-file-component)
  - [🧾 PDF Conversion & AI Feedback](#-pdf-conversion--ai-feedback)
  - [🧵 Resume Feedback Page](#-resume-feedback-page)
  - [📊 ATS Simulation](#-ats-simulation)
  - [🧠 Resume Analysis Page](#-resume-analysis-page)
  - [🧹 Wipe Functionality](#-wipe-functionality)
  - [✅ Final Page Outcome](#-final-page-outcome)


---

## ✨ Introduction

Build an AI-powered Resume Analyzer with React, React Router, and Puter.js! Implement seamless auth, upload and store resumes, and match candidates to jobs using smart AI evaluations. Get custom feedback and ATS scores tailored to each listing—all wrapped in a clean, reusable UI.

If you're getting started and need assistance or face any bugs, join our active Discord community with over 50k+ members. It's a place where people help each other out.

---

## ⚙️ Tech Stack

- **[React](https://reactjs.org/):** A popular open-source JavaScript library for building UIs with reusable components and a virtual DOM.

- **[React Router v7](https://reactrouter.com/en/main):** The go-to routing library for React apps, offering nested routes, data loaders/actions, SSR support, and more.

- **[Puter.com](https://puter.com/):** An open-source internet OS used as a privacy-first cloud platform for apps, files, and storage.

- **[Puter.js](https://github.com/puter-project/puter-js):** A small client-side SDK that enables serverless auth, storage, and AI directly in the browser.

- **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework for rapidly building custom UIs.

- **[TypeScript](https://www.typescriptlang.org/):** A superset of JavaScript that adds static typing for better tooling and code quality.

- **[Vite](https://vitejs.dev/):** A fast build tool with instant server startup and HMR for modern development.

- **[Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction):** A minimal, performant state management library using hooks in React.

---

## 🔋 Features

- **👉 Easy & convenient auth:** Handle authentication entirely in the browser using Puter.js—no backend or setup required.

- **👉 Resume upload & storage:** Let users upload and store all their resumes in one place, safely and reliably.

- **👉 AI resume matching:** Provide a job listing and get an ATS score with custom feedback tailored to each resume.

- **👉 Reusable, modern UI:** Built with clean, consistent components for a great-looking and maintainable interface.

- **👉 Code Reusability:** Leverage reusable components and a modular codebase for efficient development.

- **👉 Cross-Device Compatibility:** Fully responsive design that works seamlessly across all devices.

- **👉 Modern UI/UX:** Clean, responsive design built with Tailwind CSS and shadcn/ui for a sleek user experience.

- 

---

## 🤸 Project-WalkThrough



### 🔧 Requirements

- Node.js (v18+)
- Git
- Puter CLI  
  Install it with:
  ```bash
  npm install -g puter


##  🏠 Homepage & Navbar
🧩 Components Overview

🏠 Homepage & Navbar

I created a clean homepage with a top navbar using React and Tailwind CSS. The navbar includes links to the Upload and Analyze sections, making navigation simple and user-friendly.

📄 Resume Card

The Resume Card displays the uploaded resume preview and AI-generated insights. I built it as a reusable component that shows key details like extracted skills, experience, and summary. It’s styled for clarity and responsiveness.

<img width="1366" height="768" alt="Screenshot (70)" src="https://github.com/user-attachments/assets/15effde5-9b9f-4959-94fb-0ae15450809b" />
# Authentication and Starting with Puter AI setup
Here I have did the authentication  using puter ai .Puter AI facilitates the use of various AI technologies within applications, particularly for developers who want to easily integrate AI features without managing extensive backend infrastructure.


<img width="1366" height="768" alt="Screenshot (73)" src="https://github.com/user-attachments/assets/15c127c3-31ec-4008-8082-2b9b0164233d" />

![MixCollage-23-Jul-2025-06-13-PM-9467](https://github.com/user-attachments/assets/f3bdda39-6307-4906-a5fc-19f50efc17e4)
# Upload File Component
The Resume Upload component is embedded inside the resume card for a smooth user experience. It uses react-dropzone to support drag-and-drop or manual PDF uploads. Once uploaded, the resume is previewed and sent for AI analysis.


<img width="1366" height="768" alt="Screenshot (77)" src="https://github.com/user-attachments/assets/5c40f977-3c01-47c2-815d-261dd6eb92c0" />

<img width="1366" height="768" alt="Screenshot (79)" src="https://github.com/user-attachments/assets/8de848d4-f000-4388-9f24-9318b3a2b040" />
# Pdf conversion and ai feedback
The uploaded PDF resume is converted into an image for better visualization and AI processing. Our AI model analyzes the resume and provides instant feedback on structure, skills, and improvements. This feedback is displayed directly below the resume card for a seamless review.
<img width="1366" height="768" alt="Screenshot (93)" src="https://github.com/user-attachments/assets/4c0ae905-ac96-4858-998a-cd05165a47d4" />

<img width="1366" height="768" alt="Screenshot (83)" src="https://github.com/user-attachments/assets/30c11f0b-4056-4f32-8145-03f47284fd29" />


# Resume Feedback Page


## Sumary 
The Resume Page allows users to upload their resume (PDF) directly through a drag-and-drop interface. It converts the PDF into an image, analyzes it using AI to simulate ATS screening, and provides real-time feedback on formatting, keywords, and content quality. All interactions happen within a clean, interactive resume card layout.
<img width="1366" height="768" alt="Screenshot (85)" src="https://github.com/user-attachments/assets/26bac654-97d7-4364-b6b4-7c13e8b983ef" />

## ATS

The uploaded PDF is converted to an image and scanned by the AI to simulate ATS (Applicant Tracking System) screening. The system checks formatting, keywords, and section clarity. Based on this, users receive actionable feedback to improve ATS compatibility and resume quality.

<img width="1366" height="768" alt="Screenshot (86)" src="https://github.com/user-attachments/assets/9e4c2012-f838-46fb-b9dc-8049a3580114" />

##  🧠 Resume Analysis Page
This page displays the uploaded PDF resume preview alongside detailed AI-generated feedback based on tone, style, content, and structure. The resume is converted to an image for clear viewing, while the AI highlights formatting issues, missing action verbs, ATS compatibility, and provides improvement tips. Scores are shown for each category, helping users optimize their resume for recruiters and ATS systems.
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/a3e4201e-504a-435e-9e6b-1813ffc523b7" />

## 🧹 Wipe Functionality
The Wipe feature allows users to reset the resume upload and analysis process with a single click. It clears the uploaded PDF, preview image, and all AI feedback data from the interface. This ensures a clean state, making it easy to upload and analyze a new resume without refreshing the page.



<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/0fbca71b-8400-402e-9f07-05b237312ecf" />

## ✅ Final Page Outcome
The final page presents a clean, side-by-side view of the uploaded resume and detailed AI feedback. Users can visually inspect their resume while reviewing categorized suggestions on tone, content, structure, and ATS compatibility. It offers a complete analysis with actionable insights and improvement scores to enhance resume quality and job readiness.

<img width="1366" height="768" alt="Screenshot (92)" src="https://github.com/user-attachments/assets/cc7a6085-7808-4bef-b42c-e226040193aa" />


