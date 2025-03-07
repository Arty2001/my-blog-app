"use client";
import React, { useMemo } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import IntroductionSection from "./components/IntroductionSection";
import DiversePerspectivesSection from "./components/DiversePerspectivesSection";
import CaseStudiesMediaInsights from "./components/CaseStudiesMediaInsights";
import NextStepsSection from "./components/NextSteps";
import ReferencesSection from "./components/ReferencesSection";
import SocioculturalDynamicsSection from "./components/SocioculturalDynamicsSection";
import CognitiveChallengesSection from "./components/CognitiveChallengeSection";

// ------------------------------
// Animated Rocket Emoji
// ------------------------------
function AnimatedRocket() {
  // useScroll provides the scroll values for the viewport.
  const { scrollY } = useScroll();
  // Map the scroll position from 0 to 300px to a translation from 0 to -200px.
  const y = useTransform(scrollY, [0, 300], [0, -200]);
  const x = useTransform(scrollY, [0, 300], [0, 200]);

  return (
    <motion.span style={{ x, y }} className="block text-[60px] md:text-[80px]">
      🚀
    </motion.span>
  );
}

// ------------------------------
// StarField: Subtle Twinkling Stars
// ------------------------------
function StarField() {
  const stars = useMemo(
    () =>
      Array.from({ length: 60 }, () => ({
        cx: Math.random() * 100,
        cy: Math.random() * 100,
        r: Math.random() * 1.5 + 0.5,
        delay: Math.random() * 2,
      })),
    []
  );

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none">
      {stars.map((star, i) => (
        <motion.circle
          key={i}
          cx={`${star.cx}%`}
          cy={`${star.cy}%`}
          r={star.r}
          fill="white"
          initial={{ opacity: 0.5, scale: 0.8 }}
          animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, delay: star.delay }}
        />
      ))}
    </svg>
  );
}

// ------------------------------
// Main Page Component
// ------------------------------
export default function Home() {
  return (
    <div className="font-inter relative min-h-screen bg-gradient-to-b from-[#1a2a6c] to-[#b21f1f] text-white overflow-x-hidden">
      {/* Star Field Background */}
      <StarField />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="mb-8">
          <AnimatedRocket />
        </div>
        <h1 className="text-white font-inter text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-xl text-gray-900">
          The Human Factor on Mars
        </h1>
        <p className="text-white font-inter max-w-2xl text-lg md:text-xl leading-relaxed text-gray-700">
          Exploring the <strong>Psychological</strong>,{" "}
          <strong>Sociological</strong>, and <strong>Cognitive</strong>{" "}
          dimensions of space travel.
        </p>
        <div className="mt-10">
          <p className="text-white font-inter text-base text-gray-600">
            Written by{" "}
            <span className="font-bold">Athavan Thambimuthu (260990043)</span>{" "}
            and <span className="font-bold">Alessandro Rocca (260984371)</span>
          </p>
        </div>
      </section>

      {/* Main Blog Content Container */}
      <main className="relative max-w-5xl mx-auto px-4 pb-16">
        {/* Introduction Section */}
        <IntroductionSection/>

        <DiversePerspectivesSection/>
        <CaseStudiesMediaInsights/>
        <SocioculturalDynamicsSection/>
        <CognitiveChallengesSection/>
        <NextStepsSection/>
        <ReferencesSection/>
      </main>
    </div>
  );
}
