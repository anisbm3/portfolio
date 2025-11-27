import React from "react";

export default function Experience(): React.ReactElement {
  const items = [
    {
      title: "Esprit Student",
      period: "2021 — Now",
      details: "Undergraduate studies at Esprit (ongoing).",
    },
    {
      title: "Internship — BNA Bank",
      period: "2022",
      details: "Summer internship working on internal tools.",
    },
    {
      title: "Mobile App Developer — DWS Startup",
      period: "2024",
      details: "Built cross-platform mobile features and releases.",
    },
    {
      title: "AI Internship — Premiere Consulting",
      period: "2025",
      details: "Worked on ML prototypes and data pipelines.",
    },
    {
      title: "ODC Full Stack Developer",
      period: "2025",
      details: "Full stack role at ODC — web and API development.",
    },
  ];

  return (
    <section id="experience" aria-labelledby="experience-title" className="min-h-[60vh] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 id="experience-title" className="text-4xl font-bold text-white mb-12 text-center">
          Experience
        </h2>

        <div className="relative">
          {/* Center vertical line using provided colors */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 opacity-90"
            style={{ background: "linear-gradient(#00ADB5, #222831)" }}
          />

          <ul className="space-y-20">
            {items.map((item, idx) => {
              const isRight = idx % 2 === 0; // alternate sides (first on right)

              return (
                <li key={idx} className="relative">
                  <div className="md:flex items-center justify-between">
                    {/* Left card (show on odd items) */}
                    <div className={`md:w-1/2 md:px-6 ${isRight ? "md:order-1 md:text-right" : "md:order-2"}`}>
                      {!isRight && (
                        <article className="inline-block bg-white/3 backdrop-blur-sm p-4 rounded-lg shadow-lg text-left md:max-w-md text-white">
                          <h3 className="text-lg font-semibold" style={{ color: "#00ADB5" }}>{item.title}</h3>
                          <time className="text-sm" style={{ color: "#00ADB5" }}>{item.period}</time>
                          <p className="mt-2 text-sm text-zinc-200">{item.details}</p>
                        </article>
                      )}
                    </div>

                    {/* Marker */}
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                      <div
                        className="flex items-center justify-center h-14 w-14 rounded-full border-4 bg-transparent"
                        style={{ borderColor: "#00ADB5" }}
                      >
                        <div
                          className="h-10 w-10 rounded-full flex items-center justify-center font-medium"
                          style={{ backgroundColor: "#222831", color: "#00ADB5" }}
                        >
                          {idx + 1}
                        </div>
                      </div>
                    </div>

                    {/* Right card (show on even items) */}
                    <div className={`md:w-1/2 md:px-6 ${isRight ? "md:order-2" : "md:order-1 md:text-left"}`}>
                      {isRight && (
                        <article className="inline-block bg-white/3 backdrop-blur-sm p-4 rounded-lg shadow-lg text-left md:max-w-md text-white">
                          <h3 className="text-lg font-semibold" style={{ color: "#00ADB5" }}>{item.title}</h3>
                          <time className="text-sm" style={{ color: "#00ADB5" }}>{item.period}</time>
                          <p className="mt-2 text-sm" style={{ color: "#cfcfcf" }}>{item.details}</p>
                        </article>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
