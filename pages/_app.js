"use client";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import FeedbackWidget from "@/components/FeedbackWidget";
import { ToastContainer } from "react-toastify";
import LoadingBar from "react-top-loading-bar";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  // Route loader progress
  useEffect(() => {
    const handleStart = () => setProgress(40);
    const handleComplete = () => setProgress(100);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
      <Head>
        <title>Innovative Learn</title>
      </Head>

      <Navbar />
      <FeedbackWidget />
      <ToastContainer />

      <LoadingBar
        color="#FF00D4"
        height={4}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      {/* Render current page only (no caching) */}
      <Component {...pageProps} />

      <Footer />
    </>
  );
}
