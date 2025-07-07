"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowDown, Sparkles, Users, Globe } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);
  const [mounted, setMounted] = useState(false);

  const stats = [
    {
      icon: <Users className="h-4 w-4 text-blue-600" />,
      number: "500+",
      label: "Teachers Joined",
    },
    {
      icon: <Globe className="h-4 w-4 text-blue-600" />,
      number: "2,500+",
      label: "Teachers Impacted",
    },
    {
      icon: <Sparkles className="h-4 w-4 text-blue-600" />,
      number: "12+",
      label: "Languages Supported",
    },
  ];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const bgGradient = isHovered
    ? "linear-gradient(to bottom right, #dbeafe, #cde5fe)"
    : "linear-gradient(to bottom, #eff6ff, #cde5fe)";

  return (
    <section
      className="relative min-h-screen flex items-center justify-center py-20 bg-[length:400%_400%] animate-[gradientShift_8s_ease-in-out_infinite] transition-all duration-700"
      style={{ backgroundImage: bgGradient }}
      onMouseEnter={() => setIsHovered(false)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-start space-y-6 text-center md:text-left">
            {/* Heading */}
            <div
              className={`transition-all duration-1000 ease-out ${
                mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <h1 className="text-[3.25rem] md:text-6xl font-bold leading-tight text-gray-900">
                Join India’s First <br />
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Edu-LLM Teacher
                </span>
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed mt-3">
                Built by teachers. For classrooms. In every language.
              </p>
            </div>

            {/* CTA + Pills */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg rounded-full transition-all duration-300"
                onClick={() =>
                  window.open("https://forms.gle/jSydHxxUx7TaAaYAA", "_blank")
                }
              >
                Become a Contributor
              </Button>

              <div className="flex gap-3">
                <span className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                  50+ Contributors
                </span>
                <span className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                  12+ Languages
                </span>
              </div>
            </div>

            {/* Stats Card */}
            <div
              className={`transition-all duration-1000 ease-out ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <Card className="bg-white p-5 shadow-md rounded-xl border border-gray-200 max-w-lg mx-auto md:mx-0">
                <p className="text-gray-700 leading-relaxed mb-3">
                  <span className="font-semibold text-gray-900">
                    Help build India’s first EDU-LLM
                  </span>{" "}
                  by sharing your four AI lessons and clusters, teach each topic micro-tiered to Indian classrooms in every language.
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  {stats[currentStat].icon}
                  <span className="font-semibold text-blue-600">
                    {stats[currentStat].number}
                  </span>
                  <span className="text-gray-600">{stats[currentStat].label}</span>
                </div>
              </Card>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <div
              className={`transition-all duration-1000 ease-out ${
                mounted ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
              } w-full max-w-2xl`}
            >
              <Image
                src="/handdrawnbgr.png"
                alt="AI Concept"
                width={500}
                height={500}
                className="w-full max-w-[500px] h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <a href="#why" className="animate-bounce cursor-pointer">
            <ArrowDown className="h-6 w-6 text-blue-600" />
          </a>
        </div>
      </div>
    </section>
  );
}
