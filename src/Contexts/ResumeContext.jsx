import React, { createContext } from 'react';

// Data
import resume_json from '../data/resume.json';

// ImageKit SDK
const urlEndpoint = 'https://ik.imagekit.io/haji/abdirahmanhaji_com';

export const ResumeContext = createContext();

export const ResumeContextProvider = ({ children }) => {
  const {
    basics,
    experiences,
    skills,
    projects,
    education,
    leadership,
    interests,
  } = resume_json;

  const {
    name,
    label,
    email,
    phone,
    website,
    area,
    summary: aboutSummary,
  } = basics;

  return (
    <ResumeContext.Provider
      value={{
        name,
        label,
        email,
        phone,
        website,
        area,
        aboutSummary,
        experiences,
        skills,
        projects,
        education,
        leadership,
        interests,
        urlEndpoint,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};
