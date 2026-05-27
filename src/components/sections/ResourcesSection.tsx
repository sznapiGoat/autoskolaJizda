import { ExternalLink, FileText, Download } from "lucide-react";
import { RESOURCES_EXTERNAL, RESOURCES_DOWNLOADS } from "@/lib/data";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export default function ResourcesSection() {
  return (
    <section
      id="portal"
      className="bg-[#f9fafb] py-20 sm:py-28"
      aria-labelledby="resources-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" className="max-w-2xl mb-14">
          <p className="text-sm font-semibold text-[#047857] uppercase tracking-widest mb-3">
            Studentský portál
          </p>
          <h2
            id="resources-heading"
            className="text-3xl sm:text-4xl font-bold text-[#111827]"
          >
            Materiály &amp; užitečné odkazy
          </h2>
          <p className="mt-4 text-[1.0625rem] text-[#6b7280] leading-relaxed">
            Vše, co potřebujete před zahájením kurzu i v jeho průběhu — formuláře ke
            stažení a ověřené externí zdroje na jednom místě.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Downloads */}
          <FadeIn direction="left">
            <div>
              <h3 className="text-base font-semibold text-[#111827] mb-5 flex items-center gap-2">
                <Download size={16} className="text-[#047857]" aria-hidden="true" />
                Formuláře ke stažení
              </h3>
              <ul className="flex flex-col gap-3" aria-label="PDF formuláře">
                {RESOURCES_DOWNLOADS.map((file) => (
                  <li key={file.id}>
                    <a
                      href={file.href}
                      download={file.filename}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-4 rounded-xl border border-[#e5e7eb] bg-white p-5 hover:border-[#047857]/50 hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#047857]"
                      aria-label={`Stáhnout ${file.label} (PDF)`}
                    >
                      <div
                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#047857] shrink-0 group-hover:bg-[#065f46] transition-colors"
                        aria-hidden="true"
                      >
                        <FileText size={18} className="text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-[#111827] group-hover:text-[#047857] transition-colors leading-snug">
                          {file.label}
                        </p>
                        <p className="text-xs text-[#6b7280] mt-0.5">{file.description}</p>
                        <p className="text-xs font-medium text-[#047857] mt-1.5 flex items-center gap-1">
                          <Download size={11} aria-hidden="true" />
                          Stáhnout PDF
                        </p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* External links */}
          <FadeIn direction="right">
            <div>
              <h3 className="text-base font-semibold text-[#111827] mb-5 flex items-center gap-2">
                <ExternalLink size={16} className="text-[#047857]" aria-hidden="true" />
                Užitečné weby
              </h3>
              <StaggerContainer
                staggerDelay={0.06}
                className="flex flex-col gap-3"
              >
                {RESOURCES_EXTERNAL.map((link) => (
                  <StaggerItem key={link.id}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-4 rounded-xl border border-[#e5e7eb] bg-white p-4 hover:border-[#047857]/40 hover:bg-[#f9fafb] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#047857]"
                      aria-label={`Přejít na ${link.label} (otevře se v novém okně)`}
                    >
                      <div
                        className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#f0fdf4] shrink-0 group-hover:bg-[#dcfce7] transition-colors mt-0.5"
                        aria-hidden="true"
                      >
                        <ExternalLink size={14} className="text-[#047857]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-[#111827] group-hover:text-[#047857] transition-colors leading-snug truncate">
                          {link.label}
                        </p>
                        <p className="text-xs text-[#6b7280] mt-0.5 leading-relaxed">
                          {link.description}
                        </p>
                      </div>
                      <ExternalLink
                        size={13}
                        className="text-[#d1d5db] group-hover:text-[#047857] transition-colors shrink-0 mt-1"
                        aria-hidden="true"
                      />
                    </a>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
