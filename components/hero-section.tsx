"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowDown, Sparkles, Users, Globe } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const stats = [
    {
      icon: <Users className="h-4 w-4 text-orange-600" />,
      number: "500+",
      label: "Teachers Joined",
    },
    {
      icon: <Globe className="h-4 w-4 text-orange-600" />,
      number: "2,500+",
      label: "Teachers Impacted",
    },
    {
      icon: <Sparkles className="h-4 w-4 text-orange-600" />,
      number: "12+",
      label: "Languages Supported",
    },
  ];

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Animated Light Gradient Background */}
      <div
        className={`absolute inset-0 z-0 transition-all duration-[4000ms] ease-in-out
          ${isMounted ? "opacity-100 blur-0" : "opacity-0 blur-md"}
          bg-gradient-to-br from-orange-100 via-orange-200 to-white
          bg-[length:300%_300%] animate-[gradient-light_12s_ease_infinite]`}
      />

      <div className="relative z-10 w-full px-3 sm:px-6 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* LEFT - TEXT CONTENT */}
          <div className="flex flex-col items-start justify-center w-full md:w-1/2 space-y-6">
            {/* Heading */}
            <div
              className={`transition-all duration-1000 ease-out ${
                isMounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <h1 className="text-[2.5rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Join India’s First <br />
                <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                  Edu-LLM Teacher
                </span>
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mt-3">
                Let’s teach. Let’s reach. Let’s transform.
              </p>
            </div>

            {/* CTA + Pills */}
            <div
              className={`flex flex-wrap items-center gap-4 transition-all duration-1000 ${
                isMounted ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-600 text-white px-8 py-4 text-xl rounded-full transition-all duration-300 min-w-[17rem] text-center relative overflow-hidden"
                onClick={() =>
                  window.open("https://forms.gle/jSydHxxUx7TaAaYAA", "_blank")
                }
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
              >
                <span className="invisible">Become a Contributor</span>
                <span className="absolute inset-0 flex items-center justify-center">
                  {isButtonHovered ? "Join Us" : "Become a Contributor"}
                </span>
              </Button>

              <div className="flex gap-3 flex-wrap">
                <span className="px-2.5 py-1.5 bg-white border border-gray-300 rounded-full text-xs font-medium text-gray-700 shadow-sm">
                  50+ Contributors
                </span>
                <span className="px-2.5 py-1.5 bg-white border border-gray-300 rounded-full text-xs font-medium text-gray-700 shadow-sm">
                  12+ Languages
                </span>
              </div>
            </div>

            {/* Stats Card */}
            <div
              className={`transition-all duration-1000 ease-out ${
                isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } w-full`}
            >
              <Card className="bg-white p-5 shadow-md rounded-xl border border-orange-500 max-w-xl">
                <p className="text-gray-700 leading-relaxed mb-3">
                  <span className="font-semibold text-gray-900">
                    Help build India’s first EDU-LLM
                  </span>{" "}
                  by sharing your four AI lessons and clusters, teach each topic
                  micro-tiered to Indian classrooms in every language.
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  {stats[currentStat].icon}
                  <span className="font-semibold text-orange-600">
                    {stats[currentStat].number}
                  </span>
                  <span className="text-gray-600">{stats[currentStat].label}</span>
                </div>
              </Card>
            </div>
          </div>

          {/* RIGHT - IMAGE */}
          <div
            className={`transition-all duration-1000 ease-out ${
              isMounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            } w-full md:w-1/2`}
          >
            <Image
              src="/handdrawnbgr.png"
              alt="AI Concept"
              width={580}
              height={580}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <a href="#why" className="animate-bounce cursor-pointer">
            <ArrowDown className="h-6 w-6 text-orange-600" />
          </a>
        </div>
      </div>
    </section>
  );
}
