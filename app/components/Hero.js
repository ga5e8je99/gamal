"use client";

import Image from "next/image";
import Link from "next/link";
import { useSiteData } from "@/lib/useSiteData";

export default function Hero() {
  const { profile } = useSiteData();
  const fullName = profile.name || "Gamal Ahmed";
  const nameParts = fullName.split(" ");
  const firstName = nameParts[0] || "Gamal";
  const lastName = nameParts.slice(1).join(" ") || "Ahmed";

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pb-12 border-b-2 border-b-emerald-200/10 relative" id="home">
      <div className="max-w-7xl mx-auto w-full relative z-20 lg:mb-80">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                <p className="text-teal-400 font-mono text-sm tracking-wider">
                  Hi, my name is
                </p>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
                <span>{firstName}</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500">
                  {lastName}
                </span>
              </h1>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300 mt-4">
                {profile.roleTitle || "Full-Stack Web Developer"}
              </h2>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
              {profile.shortBio || (
                <>
                  I&apos;m passionate about modern web technologies. I dedicate my time to creating{" "}
                  <span className="text-teal-300 font-medium">fast</span>,{" "}
                  <span className="text-blue-300 font-medium">seamless</span>, and{" "}
                  <span className="text-purple-300 font-medium">advanced</span> web applications for a superior user experience.
                </>
              )}
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <Link href="#portfolio" className="px-8 py-3 bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-medium rounded-lg hover:from-teal-600 hover:to-emerald-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-500/25">
                View Projects
              </Link>
              <Link href="#contact" className="px-8 py-3 border-2 border-gray-700 text-gray-300 font-medium rounded-lg hover:border-teal-500 hover:text-teal-400 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10">
                Contact Me
              </Link>
            </div>

            {/* Tech Stack */}
            <div className="pt-8">
              <p className="text-gray-500 text-sm font-mono mb-4">TECH I WORK WITH</p>
              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'MongoDB', 'JavaScript'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full text-gray-300 text-sm border border-gray-700 hover:border-teal-500/50 hover:text-teal-300 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-800/50 shadow-2xl group">
                <Image
                  src={'/gamalImage.webp'}
                  alt={`${fullName} - Full-Stack Web Developer`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                  priority
                />
                
                {/* VR Glasses Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                
                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-16 h-16 border-2 border-teal-500/30 rounded-full animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 border-2 border-blue-500/30 rounded-full animate-float-delayed"></div>
              </div>

              {/* Status Indicator */}
              <div className="absolute -bottom-2 -right-2 sm:bottom-4 sm:right-4 bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></div>
                <span className="text-teal-300 text-sm font-mono">Available for Full-Stack Projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="static lg:absolute flex justify-end my-20 lg-block lg:-bottom-40 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-teal-400 rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
