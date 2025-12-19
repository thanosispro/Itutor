"use client";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import FeedbackWidget from "@/components/FeedbackWidget";
import { ToastContainer } from "react-toastify";
import LoadingBar from "react-top-loading-bar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [pages, setPages] = useState({});
  const [progress, setProgress] = useState(0);

  // UseEffect to handle route changes and loader progress
  useEffect(() => {
    const handleStart = () => setProgress(40); // Set progress when route change starts
    const handleComplete = () => setProgress(100); // Set progress when route change completes

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);

    return () => {
      // Cleanup events when component is unmounted
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
    };
  }, [router]);

  // Cache pages by full URL (this ensures each page is preserved)
  useEffect(() => {
    // When navigating to a new route, cache the component
    if (!pages[router.asPath]) {
      setPages((prev) => ({
        ...prev,
        [router.asPath]: <Component {...pageProps} key={router.asPath} />,
      }));
    }
  }, [router.asPath, pages, pageProps, Component]);

  return (
    <>
      <Navbar />
      <FeedbackWidget />
      <ToastContainer />
      <LoadingBar
        color="#FF00D4"
        height={4}
        progress={progress}
        onLoaderFinished={() => setProgress(0)} 
      />
      {/* Render the component based on the current route */}
      {Object.entries(pages).map(([path, page]) => (
        <div
          key={path}
          style={{ display: path === router.asPath ? "block" : "none" }}
        >
          {page}
        </div>
      ))}
      <Footer />
    </>
  );
}
