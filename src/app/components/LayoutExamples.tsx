import { ArrowRight, Calendar, Users } from "lucide-react";

export function LayoutExamples() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="mb-2">8. Layout Patterns</h2>
        <p className="text-sm text-[#666666]">Common layout structures from datascience.ch</p>
      </div>

      <div className="space-y-8">
        {/* Hero Section */}
        <div className="space-y-3">
          <p className="text-sm font-semibold">Hero Section Layout</p>
          <div className="bg-white dark:bg-[#2d2d2d] rounded-none border border-[#E5E5E5] dark:border-[#404040] p-8 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold text-[#000000] dark:text-white leading-tight">
                  Enabling data-driven science & innovation for societal impact
                </h1>
                <p className="text-base text-[#666666] leading-relaxed">
                  The Swiss Data Science Center brings together expertise to enable cutting-edge research and development.
                </p>
                <button style={{ fontFamily: 'Switzer, sans-serif' }} className="uppercase px-6 py-3 bg-[#5461a6] text-white rounded-none hover:bg-[#26245c] transition-colors  inline-flex items-center gap-2">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="bg-gradient-to-br from-[#6B6B9F] to-[#5B7FBF] rounded-none h-64 flex items-center justify-center">
                <span className="text-white text-sm opacity-75">Hero Image</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content + Image Side by Side */}
        <div className="space-y-3">
          <p className="text-sm font-semibold">Content + Image Layout</p>
          <div className="bg-white dark:bg-[#2d2d2d] rounded-none border border-[#E5E5E5] dark:border-[#404040] overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 bg-[#F7F7F8] dark:bg-[#1a1a1a] flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-[#000000] dark:text-white mb-3">
                  The Swiss Data Science Center
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed mb-4">
                  We collaborate with academic and industry partners to advance data science capabilities across Switzerland and beyond.
                </p>
                <button style={{ fontFamily: 'Switzer, sans-serif' }} className="uppercase px-5 py-2.5 bg-[#5461a6] text-white rounded-none hover:bg-[#26245c] transition-colors  text-sm self-start">
                  Discover more
                </button>
              </div>
              <div className="bg-gradient-to-br from-[#2E3B5C] to-[#5B7FBF] h-full min-h-[250px] flex items-center justify-center">
                <span className="text-white text-sm opacity-75">Supporting Image</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card Grid Layout */}
        <div className="space-y-3">
          <p className="text-sm font-semibold">News/Events Card Grid</p>
          <div className="bg-[#F7F7F8] dark:bg-[#1a1a1a] rounded-none border border-[#E5E5E5] dark:border-[#404040] p-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-[#000000] dark:text-white">Latest news</h3>
              <button style={{ fontFamily: 'Switzer, sans-serif' }} className="uppercase text-sm text-[#5461a6] dark:text-[#93c5fd] hover:text-[#26245c] dark:hover:text-white ">View all →</button>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white dark:bg-[#2d2d2d] rounded-none overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-gradient-to-br from-[#5B7FBF] to-[#6B6B9F] h-40 flex items-center justify-center">
                    <span className="text-white text-xs opacity-75">Image</span>
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-[#999999] dark:text-gray-400">
                      <Calendar className="w-3 h-3" />
                      <span>May 7, 2026</span>
                    </div>
                    <h4 className="font-semibold text-[#000000] dark:text-white leading-snug">
                      Data Science at the forefront of innovation
                    </h4>
                    <p className="text-sm text-[#666666] leading-relaxed line-clamp-2">
                      Exploring new methodologies in machine learning and artificial intelligence.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="space-y-3">
          <p className="text-sm font-semibold">Form/Dropdown Section</p>
          <div className="bg-white dark:bg-[#2d2d2d] rounded-none border border-[#E5E5E5] dark:border-[#404040] p-8">
            <h3 className="text-2xl font-bold text-[#000000] dark:text-white mb-2">
              Data Science per domain
            </h3>
            <p className="text-sm text-[#666666] mb-6">
              Explore our projects and initiatives across different sectors
            </p>
            <div className="space-y-3">
              <details className="border border-[#E5E5E5] dark:border-[#404040] rounded-none">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-[#000000] dark:text-white hover:bg-[#F7F7F8] dark:bg-[#1a1a1a] transition-colors">
                  Health & Medicine
                </summary>
                <div className="px-4 py-3 bg-[#F7F7F8] dark:bg-[#1a1a1a] border-t border-[#E5E5E5] dark:border-[#404040]">
                  <p className="text-sm text-[#666666]">Medical imaging, genomics, and clinical decision support systems.</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] dark:border-[#404040] rounded-none">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-[#000000] dark:text-white hover:bg-[#F7F7F8] dark:bg-[#1a1a1a] transition-colors">
                  Climate & Environment
                </summary>
                <div className="px-4 py-3 bg-[#F7F7F8] dark:bg-[#1a1a1a] border-t border-[#E5E5E5] dark:border-[#404040]">
                  <p className="text-sm text-[#666666]">Climate modeling, environmental monitoring, and sustainability analytics.</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] dark:border-[#404040] rounded-none">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-[#000000] dark:text-white hover:bg-[#F7F7F8] dark:bg-[#1a1a1a] transition-colors">
                  Social Sciences
                </summary>
                <div className="px-4 py-3 bg-[#F7F7F8] dark:bg-[#1a1a1a] border-t border-[#E5E5E5] dark:border-[#404040]">
                  <p className="text-sm text-[#666666]">Computational social science, network analysis, and behavioral research.</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="space-y-3">
          <p className="text-sm font-semibold">Call-to-Action Banner</p>
          <div className="bg-gradient-to-r from-[#2E3B5C] to-[#6B6B9F] rounded-none p-8 text-white">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold mb-3">
                Let's talk Data Science
              </h3>
              <p className="text-base opacity-90 mb-6 leading-relaxed">
                Connect with our team to explore collaboration opportunities and discover how data science can transform your research.
              </p>
              <button style={{ fontFamily: 'Switzer, sans-serif' }} className="uppercase px-6 py-3 bg-white dark:bg-[#2d2d2d] text-[#2E3B5C] rounded-none hover:bg-opacity-90 transition-all  inline-flex items-center gap-2">
                Get in touch
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Event Card Horizontal */}
        <div className="space-y-3">
          <p className="text-sm font-semibold">Event Card (Horizontal)</p>
          <div className="bg-white dark:bg-[#2d2d2d] rounded-none border border-[#E5E5E5] dark:border-[#404040] overflow-hidden hover:shadow-md transition-shadow">
            <div className="grid md:grid-cols-3 gap-0">
              <div className="bg-gradient-to-br from-[#6B6B9F] to-[#5B7FBF] h-full min-h-[180px] flex items-center justify-center">
                <span className="text-white text-sm opacity-75">Event Image</span>
              </div>
              <div className="md:col-span-2 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-[#999999] dark:text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>June 15, 2026</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>Zurich</span>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-[#000000] dark:text-white mb-2">
                    Data Enabling Workshop 2026
                  </h4>
                  <p className="text-sm text-[#666666] leading-relaxed">
                    Join us for an intensive workshop on the latest data science methodologies and tools for research applications.
                  </p>
                </div>
                <div className="mt-4">
                  <button style={{ fontFamily: 'Switzer, sans-serif' }} className="uppercase text-sm text-[#5461a6] dark:text-[#93c5fd] hover:text-[#26245c] dark:hover:text-white  inline-flex items-center gap-1">
                    Register now
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Layout Guidelines */}
      <div className="bg-[#F7F7F8] dark:bg-[#1a1a1a] rounded-none border border-[#E5E5E5] dark:border-[#404040] p-6 mt-8">
        <h3 className="text-sm font-semibold mb-3 text-[#000000] dark:text-white">Layout Guidelines</h3>
        <ul className="text-sm space-y-2 text-[#666666]">
          <li>• Use 12-column grid system for responsive layouts</li>
          <li>• Maximum content width: 1280px (max-w-7xl)</li>
          <li>• Maintain consistent horizontal padding: 24px (px-6)</li>
          <li>• Section spacing: 64px - 96px between major sections</li>
          <li>• Card spacing: 16px - 24px gaps in grids</li>
          <li>• Use asymmetrical layouts for visual interest (60/40 splits)</li>
          <li>• Alternate image placement (left/right) for content sections</li>
        </ul>
      </div>
    </section>
  );
}
