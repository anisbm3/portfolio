"use client";

import { Award, Calendar, Heart, MapPin, Sparkles, Users, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface SocialExperience {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  date: string;
  location: string;
  category: string;
  icon: React.ElementType;
  gradient: string;
}

const socialExperiences: SocialExperience[] = [
  {
    id: 1,
    title: "Communication Manager at HackArts 2.0",
    description: "Managed communication for a graphic design hackathon",
    fullDescription: "As Communication Manager for HackArts 2.0, I identified target audiences interested in the event's themes, oversaw outreach and invitations, and coordinated communication efforts to maximize participation and engagement.",
    image: "/hackarts.jpg",
    date: "July - November 2024",
    location: "ESPRIT, Tunis",
    category: "Communication",
    icon: Users,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "Communication Manager at WIE ACT 2.0",
    description: "Led communication campaign achieving 4 radio appearances",
    fullDescription: "Responsible for a communication campaign that achieved 4 radio appearances and drew 200 participants, strengthening the event's public reach and community impact.",
    image: "/WIE_ACT.jpg",
    date: "July - October 2024",
    location: "ESPRIT, Tunis",
    category: "Communication",
    icon: Sparkles,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "HR Manager at IEEE ESPRIT SB",
    description: "Directed HR operations, recruited 850+ members",
    fullDescription: "Directed HR operations at IEEE ESPRIT Student Branch, recruiting over 850 members and increasing event participation by 25% through engagement initiatives.",
    image: "/SB.jpg",
    date: "May 2024 - February 2025",
    location: "ESPRIT, Tunis",
    category: "Leadership",
    icon: Award,
    gradient: "from-amber-500 to-orange-500",
  },
  {
    id: 4,
    title: "Communication Manager at Esprit RAS ROBOTS 2.0",
    description: "Coordinated robotics competition with 600+ participants",
    fullDescription: "Coordinated a large-scale robotics event featuring 4 radio appearances, attracting over 600 participants from diverse schools, age groups, and cities, and welcoming 200 visitors.",
    image: "/RAS_Robots.jpg",
    date: "December 2023 - February 2024",
    location: "ESPRIT, Tunis",
    category: "Communication",
    icon: Users,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 5,
    title: "HR Manager at IEEE ESPRIT RAS SBC",
    description: "Managed HR initiatives and community engagement",
    fullDescription: "Directed HR operations at the IEEE ESPRIT Student Branch, overseeing recruitment, engagement, and event coordination. Managed human resources initiatives, fostering collaboration and active participation within the IEEE ESPRIT community.",
    image: "/RAS.jpg",
    date: "April 2023 - April 2024",
    location: "ESPRIT, Tunis",
    category: "Leadership",
    icon: Award,
    gradient: "from-gray-600 to-gray-800",
  },
  {
    id: 6,
    title: "COVID-19 Vaccination Volunteer",
    description: "Volunteered for vaccination campaign during pandemic",
    fullDescription: "Volunteered for the COVID-19 vaccination campaign, contributing to community health efforts and supporting public vaccination initiatives during the global pandemic.",
    image: "/volunteer.jpg",
    date: "January 2020 - December 2021",
    location: "Tunisia",
    category: "Volunteer",
    icon: Heart,
    gradient: "from-pink-500 to-rose-500",
  },
];

export default function Social() {
  const [selectedExperience, setSelectedExperience] = useState<SocialExperience | null>(null);

  const closeModal = () => setSelectedExperience(null);

  return (
    <section id="social" className="min-h-[60vh] py-16 px-6 relative overflow-hidden">
      {/* Enhanced Background decorations */}
      <div className="absolute top-10 left-5 w-96 h-96 bg-gradient-to-br from-[#00ADB5]/20 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-gradient-to-tl from-pink-500/15 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-r from-orange-500/10 to-yellow-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Floating particles */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-[#00ADB5] rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-40 left-20 w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-40 right-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '2.5s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent mb-2 animate-fadeIn">
              Social <span className="bg-gradient-to-r from-[#00ADB5] via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">Life</span>
            </h2>
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#00ADB5] to-transparent rounded-full animate-fadeIn" style={{ animationDelay: '0.3s' }} />
          </div>
          <p className="text-gray-300 mt-8 text-xl max-w-3xl mx-auto leading-relaxed animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            Beyond the code lies a world of meaningful connections, leadership, and community impact.
            <span className="text-[#00ADB5] font-semibold"> Here&apos;s my journey.</span>
          </p>
          
          {/* Decorative elements */}
          <div className="flex justify-center items-center gap-4 mt-8 animate-fadeIn" style={{ animationDelay: '0.9s' }}>
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#00ADB5] rounded-full" />
            <div className="w-3 h-3 bg-[#00ADB5] rounded-full animate-ping" />
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#00ADB5] rounded-full" />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialExperiences.map((experience, index) => (
            <div
              key={experience.id}
              onClick={() => setSelectedExperience(experience)}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-[#222831] rounded-3xl overflow-hidden border border-[#00ADB5]/20 hover:border-[#00ADB5]/60 transition-all duration-700 hover:shadow-2xl hover:shadow-[#00ADB5]/30 hover:-translate-y-3 group backdrop-blur-sm">
                {/* Enhanced Image Container */}
                <div className="relative h-64 overflow-hidden">
                  {/* Actual image */}
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#222831]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                  
                  {/* Enhanced Category Badge */}
                  <div className="absolute top-4 right-4 transform group-hover:scale-110 transition-transform duration-300">
                    <span className={`px-4 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r ${experience.gradient} shadow-xl backdrop-blur-sm border border-white/20`}>
                      {experience.category}
                    </span>
                  </div>

                  {/* Enhanced Hover overlay */}
                  <div className="absolute inset-0 bg-[#00ADB5]/0 group-hover:bg-[#00ADB5]/30 transition-all duration-500 flex items-center justify-center backdrop-blur-[1px]">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <span className="text-white font-bold text-lg bg-white/20 backdrop-blur-md px-6 py-3 rounded-full shadow-xl border border-white/30">
                        View Details →
                      </span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Content */}
                <div className="p-8 bg-gradient-to-b from-transparent to-[#222831]/50">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00ADB5] transition-colors duration-500 leading-tight">
                    {experience.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-2 group-hover:text-gray-200 transition-colors duration-300">
                    {experience.description}
                  </p>

                  {/* Enhanced Meta info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <div className="flex items-center gap-2 bg-[#00ADB5]/10 px-3 py-1.5 rounded-full">
                        <Calendar className="w-3 h-3 text-[#00ADB5]" />
                        <span className="font-medium">{experience.date}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-purple-500/10 px-3 py-1.5 rounded-full">
                        <MapPin className="w-3 h-3 text-purple-400" />
                        <span className="font-medium">{experience.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Bottom gradient line */}
                <div className={`h-1.5 bg-gradient-to-r ${experience.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left shadow-lg`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Modal/Popup */}
      {selectedExperience && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in zoom-in duration-500"
          onClick={closeModal}
        >
          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#00ADB5]/30 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-[#00ADB5]/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-purple-400/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-1/4 right-1/2 w-2 h-2 bg-[#00ADB5]/25 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
          </div>

          <div
            className="relative w-full max-w-3xl bg-gradient-to-br from-[#222831] to-[#1a1f2e] rounded-3xl overflow-hidden border border-[#00ADB5]/40 shadow-2xl animate-in slide-in-from-bottom-4 duration-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Enhanced Close button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Modal Header Image */}
            <div className="relative h-80 flex items-center justify-center bg-[#222831]">
              <Image
                src={selectedExperience.image}
                alt={selectedExperience.title}
                width={400}
                height={300}
                className="max-w-full max-h-full object-contain"
              />
              <div className="absolute bottom-4 left-6">
                <span className={`px-4 py-1.5 rounded-full text-sm font-semibold text-white bg-white/20 backdrop-blur-sm`}>
                  {selectedExperience.category}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-10">
              <div className="text-center mb-8">
                <h3 className="text-4xl font-bold text-white mb-3 leading-tight">
                  {selectedExperience.title}
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-[#00ADB5] to-transparent mx-auto rounded-full" />
              </div>

              {/* Enhanced Meta info */}
              <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
                <div className="flex items-center gap-3 bg-[#00ADB5]/10 px-4 py-2 rounded-full border border-[#00ADB5]/20">
                  <div className="w-8 h-8 rounded-lg bg-[#00ADB5]/20 flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-[#00ADB5]" />
                  </div>
                  <span className="text-white font-medium text-sm">{selectedExperience.date}</span>
                </div>
                <div className="flex items-center gap-3 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-purple-400" />
                  </div>
                  <span className="text-white font-medium text-sm">{selectedExperience.location}</span>
                </div>
              </div>

              {/* Enhanced Full description */}
              <div className="bg-gradient-to-r from-[#00ADB5]/5 to-purple-500/5 p-6 rounded-2xl border border-white/10 mb-8">
                <p className="text-gray-200 leading-relaxed text-base text-center">
                  {selectedExperience.fullDescription}
                </p>
              </div>

              {/* Enhanced Action button */}
              <div className="flex justify-center">
                <button
                  onClick={closeModal}
                  className={`px-8 py-4 rounded-2xl bg-gradient-to-r ${selectedExperience.gradient} text-white font-bold text-lg hover:opacity-90 hover:shadow-xl hover:shadow-white/10 transition-all duration-300 hover:scale-105 border border-white/20`}
                >
                  Close Experience
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
