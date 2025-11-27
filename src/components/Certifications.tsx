"use client";

import React, { useState } from "react";
import { X, Award, Calendar, ExternalLink } from "lucide-react";
import Image from "next/image";

interface Certification {
  id: number;
  title: string;
  issuer: string;
  description: string;
  image: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
  gradient: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "Hashgraph Certified Developer",
    issuer: "Hedera Hashgraph",
    description: "Comprehensive certification in Hedera Hashgraph distributed ledger technology, covering smart contracts, consensus services, and decentralized applications development.",
    image: "/Hashgraphe Course.png",
    date: "2024",
    credentialId: "HCD-2024-001",
    skills: ["Smart Contracts", "Distributed Ledger", "Consensus Services", "DApps"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Cisco Certified Network Associate (CCNA)",
    issuer: "Cisco Systems",
    description: "Professional certification demonstrating skills in network fundamentals, network access, IP connectivity, IP services, security fundamentals, and automation.",
    image: "/CCNA.png",
    date: "2024",
    credentialId: "CCNA-2024-002",
    skills: ["Network Fundamentals", "IP Connectivity", "Security", "Automation"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 3,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    description: "Foundational certification validating knowledge of AWS Cloud concepts, services, and terminology, including security, architecture, pricing, and support.",
    image: "/AWS.jpg",
    date: "2024",
    credentialId: "AWS-CP-2024-003",
    skills: ["Cloud Computing", "AWS Services", "Security", "Architecture"],
    gradient: "from-orange-500 to-red-500",
  },
];

export default function Certifications() {
  const [selectedCertification, setSelectedCertification] = useState<Certification | null>(null);

  const closeModal = () => setSelectedCertification(null);

  return (
    <section id="certifications" className="min-h-screen py-20 px-4 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1f2e] via-[#222831] to-[#1a1f2e] opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,173,181,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00ADB5] to-purple-500 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Professional certifications that validate my expertise and commitment to continuous learning in technology and cloud computing.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((certification) => (
            <div
              key={certification.id}
              className="group relative bg-gradient-to-br from-[#222831] to-[#1a1f2e] rounded-2xl overflow-hidden border border-[#00ADB5]/20 hover:border-[#00ADB5]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#00ADB5]/10 cursor-pointer transform hover:-translate-y-2"
              onClick={() => setSelectedCertification(certification)}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#1a1f2e] to-[#222831]">
                <Image
                  src={certification.image}
                  alt={certification.title}
                  fill
                  className={`transition-all duration-700 group-hover:scale-105 group-hover:brightness-110 ${
                    certification.image.endsWith('.png') ? 'object-contain p-4' : 'object-cover'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#222831]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />

                {/* Issuer Badge */}
                <div className="absolute top-4 right-4 transform group-hover:scale-110 transition-transform duration-300">
                  <span className="px-3 py-1.5 rounded-full text-xs font-bold text-white bg-white/20 backdrop-blur-sm border border-white/20">
                    {certification.issuer}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#00ADB5]/0 group-hover:bg-[#00ADB5]/30 transition-all duration-500 flex items-center justify-center backdrop-blur-[1px]">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <span className="text-white font-bold text-lg bg-white/20 backdrop-blur-md px-6 py-3 rounded-full shadow-xl border border-white/30">
                      View Details →
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-gradient-to-b from-transparent to-[#222831]/50">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00ADB5] transition-colors duration-500 leading-tight">
                  {certification.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2 group-hover:text-gray-200 transition-colors duration-300">
                  {certification.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {certification.skills.slice(0, 2).map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-[#00ADB5]/10 text-[#00ADB5] rounded-full border border-[#00ADB5]/20"
                    >
                      {skill}
                    </span>
                  ))}
                  {certification.skills.length > 2 && (
                    <span className="px-2 py-1 text-xs bg-gray-600/20 text-gray-400 rounded-full">
                      +{certification.skills.length - 2} more
                    </span>
                  )}
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Calendar className="w-3 h-3 text-[#00ADB5]" />
                  <span className="font-medium">{certification.date}</span>
                </div>
              </div>

              {/* Bottom gradient line */}
              <div className={`h-1 bg-gradient-to-r ${certification.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left shadow-lg`} />
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Modal/Popup */}
      {selectedCertification && (
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
            className="relative w-full max-w-4xl bg-gradient-to-br from-[#222831] to-[#1a1f2e] rounded-3xl overflow-hidden border border-[#00ADB5]/40 shadow-2xl animate-in slide-in-from-bottom-4 duration-700"
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
                src={selectedCertification.image}
                alt={selectedCertification.title}
                width={400}
                height={300}
                className="max-w-full max-h-full object-contain"
              />
              <div className="absolute bottom-4 left-6">
                <span className={`px-4 py-1.5 rounded-full text-sm font-semibold text-white bg-white/20 backdrop-blur-sm`}>
                  {selectedCertification.issuer}
                </span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-10">
              <div className="text-center mb-8">
                <h3 className="text-4xl font-bold text-white mb-3 leading-tight">
                  {selectedCertification.title}
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-[#00ADB5] to-transparent mx-auto rounded-full" />
              </div>

              {/* Enhanced Meta info */}
              <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
                <div className="flex items-center gap-3 bg-[#00ADB5]/10 px-4 py-2 rounded-full border border-[#00ADB5]/20">
                  <div className="w-8 h-8 rounded-lg bg-[#00ADB5]/20 flex items-center justify-center">
                    <Award className="w-4 h-4 text-[#00ADB5]" />
                  </div>
                  <span className="text-white font-medium text-sm">{selectedCertification.issuer}</span>
                </div>
                <div className="flex items-center gap-3 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-purple-400" />
                  </div>
                  <span className="text-white font-medium text-sm">{selectedCertification.date}</span>
                </div>
                {selectedCertification.credentialId && (
                  <div className="flex items-center gap-3 bg-gray-500/10 px-4 py-2 rounded-full border border-gray-500/20">
                    <div className="w-8 h-8 rounded-lg bg-gray-500/20 flex items-center justify-center">
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    </div>
                    <span className="text-white font-medium text-sm">{selectedCertification.credentialId}</span>
                  </div>
                )}
              </div>

              {/* Enhanced Description */}
              <div className="bg-gradient-to-r from-[#00ADB5]/5 to-purple-500/5 p-6 rounded-2xl border border-white/10 mb-8">
                <p className="text-gray-200 leading-relaxed text-base text-center">
                  {selectedCertification.description}
                </p>
              </div>

              {/* Skills Section */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-white mb-4 text-center">Skills Validated</h4>
                <div className="flex flex-wrap justify-center gap-3">
                  {selectedCertification.skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r ${selectedCertification.gradient} border border-white/20`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Enhanced Action button */}
              <div className="flex justify-center">
                <button
                  onClick={closeModal}
                  className={`px-8 py-4 rounded-2xl bg-gradient-to-r ${selectedCertification.gradient} text-white font-bold text-lg hover:opacity-90 hover:shadow-xl hover:shadow-white/10 transition-all duration-300 hover:scale-105 border border-white/20`}
                >
                  Close Certification
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}