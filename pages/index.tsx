import type { NextPage } from "next";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import DragDrop from '../components/ImageUpload/DragDrop';
import { uploadImage, generateDescription } from '../utils/api';
import { ERROR_MESSAGES } from '../utils/constants';
import Layout from '../components/Layout';
import Hero from '../components/Home/Hero';
import UploadSection from '../components/Upload/UploadSection';
import Features from '../components/Home/Features';
import HowItWorks from '../components/Home/HowItWorks';
import FAQ from '../components/Home/FAQ';
import SEO from '../components/Layout/SEO';

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string>("");

  return (
    <Layout>
      <SEO />
      <Hero />
      <UploadSection />
      <Features />
      <HowItWorks />
      <FAQ />
    </Layout>
  );
};

export interface GenerateResponse {
  text: string;
  error?: string;
}

export interface UploadResponse {
  url: string;
  error?: string;
}

export interface ImageResult {
  originalUrl: string;
  description: string;
  timestamp: string;
}

export default HomePage;
