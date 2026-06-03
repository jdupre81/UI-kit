export function ContentHierarchy() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2 text-[#000000] dark:text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Content Hierarchy & Labels</h2>
        <p className="text-sm text-[#848484] dark:text-gray-300">
          Typographic hierarchy and structured content labeling system
        </p>
      </div>

      {/* Typographic Hierarchy */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <span className="text-[#848484] dark:text-gray-300 text-sm font-bold">〇</span>
          <h3 className="text-base font-bold text-[#000000] dark:text-white">TYPOGRAPHIC HIERARCHY</h3>
        </div>

        <div className="bg-white dark:bg-[#2d2d2d] rounded-none border border-[#E5E5E5] dark:border-[#404040] p-8 space-y-8">
          {/* Page Title */}
          <div className="space-y-2">
            <p className="text-xs font-semibold text-[#848484] dark:text-gray-300 uppercase tracking-wide">
              PAGE TITLE
            </p>
            <h1 className="text-[48px] font-bold text-[#000000] dark:text-white leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Enabling data-driven science & innovation
            </h1>
            <p className="text-xs text-[#848484] dark:text-gray-300" style={{ fontFamily: 'Switzer, sans-serif' }}>
              48px / Space Grotesk Bold / #000000
            </p>
          </div>

          <div className="h-px bg-[#E5E5E5]"></div>

          {/* Section Title */}
          <div className="space-y-2">
            <p className="text-xs font-semibold text-[#848484] dark:text-gray-300 uppercase tracking-wide" style={{ fontFamily: 'Switzer, sans-serif' }}>
              SECTION TITLE
            </p>
            <h2 className="text-[32px] font-bold text-[#000000] dark:text-white leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              The Swiss Data Science Center
            </h2>
            <p className="text-xs text-[#848484] dark:text-gray-300" style={{ fontFamily: 'Switzer, sans-serif' }}>
              32px / Space Grotesk Bold / #000000
            </p>
          </div>

          <div className="h-px bg-[#E5E5E5]"></div>

          {/* Subsection Title */}
          <div className="space-y-2">
            <p className="text-xs font-semibold text-[#848484] dark:text-gray-300 uppercase tracking-wide" style={{ fontFamily: 'Switzer, sans-serif' }}>
              SUBSECTION TITLE
            </p>
            <h3 className="text-[24px] font-semibold text-[#000000] dark:text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Research & Development Projects
            </h3>
            <p className="text-xs text-[#848484] dark:text-gray-300" style={{ fontFamily: 'Switzer, sans-serif' }}>
              24px / Space Grotesk Semibold / #000000
            </p>
          </div>

          <div className="h-px bg-[#E5E5E5]"></div>

          {/* Body Text */}
          <div className="space-y-2">
            <p className="text-xs font-semibold text-[#848484] dark:text-gray-300 uppercase tracking-wide" style={{ fontFamily: 'Switzer, sans-serif' }}>
              BODY TEXT
            </p>
            <p className="text-[16px] text-[#000000] dark:text-white leading-relaxed" style={{ fontFamily: 'Switzer, sans-serif' }}>
              This is the standard body text used throughout the interface. It should be clear, readable, and maintain adequate line height for comfortable reading. Text can include <a href="#" className="text-[#5461a6] dark:text-[#93c5fd] hover:text-[#26245c] dark:hover:text-white transition-colors">hyperlinks in blue (#5461a6)</a> for navigation and references.
            </p>
            <p className="text-xs text-[#848484] dark:text-gray-300" style={{ fontFamily: 'Switzer, sans-serif' }}>
              16px / Switzer Regular / #000000 • Links: #5461a6
            </p>
          </div>

          <div className="h-px bg-[#E5E5E5]"></div>

          {/* Secondary Text */}
          <div className="space-y-2">
            <p className="text-xs font-semibold text-[#848484] dark:text-gray-300 uppercase tracking-wide" style={{ fontFamily: 'Switzer, sans-serif' }}>
              SECONDARY TEXT
            </p>
            <p className="text-[14px] text-[#848484] dark:text-gray-300" style={{ fontFamily: 'Switzer, sans-serif' }}>
              Secondary information, captions, metadata, and supporting text
            </p>
            <p className="text-xs text-[#848484] dark:text-gray-300" style={{ fontFamily: 'Switzer, sans-serif' }}>
              14px / Switzer Regular / #848484
            </p>
          </div>
        </div>
      </div>

      {/* Content Label Pattern */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <span className="text-[#848484] dark:text-gray-300 text-sm font-bold">〇</span>
          <h3 className="text-base font-bold text-[#000000] dark:text-white">CONTENT LABEL PATTERN</h3>
        </div>

        <p className="text-sm text-[#000000] dark:text-white">
          Structured content sections use a three-level hierarchy: Label → Title → Body
        </p>

        <div className="bg-white dark:bg-[#2d2d2d] rounded-none border border-[#E5E5E5] dark:border-[#404040] p-8 space-y-8">
          {/* Example 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-[#848484] dark:text-gray-300 text-sm font-medium" style={{ fontFamily: 'Switzer, sans-serif' }}>〇</span>
              <p className="text-sm font-medium text-[#848484] dark:text-gray-300 uppercase tracking-wide" style={{ fontFamily: 'Switzer, sans-serif' }}>ABOUT</p>
            </div>
            <h3 className="text-2xl font-bold text-[#000000] dark:text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              The Swiss Data Science Center
            </h3>
            <p className="text-base text-[#000000] dark:text-white leading-relaxed" style={{ fontFamily: 'Switzer, sans-serif' }}>
              We bring together expertise from across Switzerland to enable cutting-edge research and development in data science and artificial intelligence. Our collaborative approach bridges academia and industry. <a href="#" className="text-[#5461a6] dark:text-[#93c5fd] hover:text-[#26245c] dark:hover:text-white transition-colors">Learn more about our mission →</a>
            </p>
          </div>

          <div className="h-px bg-[#E5E5E5]"></div>

          {/* Example 2 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-[#848484] dark:text-gray-300 text-sm font-medium" style={{ fontFamily: 'Switzer, sans-serif' }}>〇</span>
              <p className="text-sm font-medium text-[#848484] dark:text-gray-300 uppercase tracking-wide" style={{ fontFamily: 'Switzer, sans-serif' }}>SERVICES</p>
            </div>
            <h3 className="text-2xl font-bold text-[#000000] dark:text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              What We Offer
            </h3>
            <p className="text-base text-[#000000] dark:text-white leading-relaxed" style={{ fontFamily: 'Switzer, sans-serif' }}>
              From research collaboration to training programs, we provide comprehensive support for data-driven innovation across multiple sectors including healthcare, climate science, and social research.
            </p>
          </div>

          <div className="h-px bg-[#E5E5E5]"></div>

          {/* Example 3 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-[#848484] dark:text-gray-300 text-sm font-medium" style={{ fontFamily: 'Switzer, sans-serif' }}>〇</span>
              <p className="text-sm font-medium text-[#848484] dark:text-gray-300 uppercase tracking-wide" style={{ fontFamily: 'Switzer, sans-serif' }}>CONTACT</p>
            </div>
            <h3 className="text-2xl font-bold text-[#000000] dark:text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Get In Touch
            </h3>
            <p className="text-base text-[#000000] dark:text-white leading-relaxed" style={{ fontFamily: 'Switzer, sans-serif' }}>
              Have questions about our programs or want to explore collaboration opportunities? <a href="#" className="text-[#5461a6] dark:text-[#93c5fd] hover:text-[#26245c] dark:hover:text-white transition-colors">Contact our team →</a>
            </p>
          </div>
        </div>

        {/* Pattern Breakdown */}
        <div className="bg-[#dddeec] dark:bg-[#1a1a1a] rounded-none border border-[#E5E5E5] dark:border-[#404040] p-6 space-y-4">
          <h4 className="text-sm font-bold text-[#000000] dark:text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Content Label Pattern Structure
          </h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="bg-white dark:bg-[#2d2d2d] rounded px-2 py-1 text-xs font-bold text-[#000000] dark:text-white" style={{ fontFamily: 'Switzer, sans-serif' }}>1</div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-[#000000] dark:text-white mb-1" style={{ fontFamily: 'Switzer, sans-serif' }}>Label with Circle Prefix</p>
                <p className="text-sm text-[#000000] dark:text-white" style={{ fontFamily: 'Switzer, sans-serif' }}>
                  〇 + LABEL TEXT in grey (#848484), uppercase, Switzer Medium, 14px. Circle and text same weight.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-white dark:bg-[#2d2d2d] rounded px-2 py-1 text-xs font-bold text-[#000000] dark:text-white" style={{ fontFamily: 'Switzer, sans-serif' }}>2</div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-[#000000] dark:text-white mb-1" style={{ fontFamily: 'Switzer, sans-serif' }}>Section Title</p>
                <p className="text-sm text-[#000000] dark:text-white" style={{ fontFamily: 'Switzer, sans-serif' }}>
                  Space Grotesk Bold, 32px, black (#000000)
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-white dark:bg-[#2d2d2d] rounded px-2 py-1 text-xs font-bold text-[#000000] dark:text-white" style={{ fontFamily: 'Switzer, sans-serif' }}>3</div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-[#000000] dark:text-white mb-1" style={{ fontFamily: 'Switzer, sans-serif' }}>Body Content</p>
                <p className="text-sm text-[#000000] dark:text-white" style={{ fontFamily: 'Switzer, sans-serif' }}>
                  Switzer Regular, 16px, black (#000000) with hyperlinks in #5461a6
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacing Guidelines */}
      <div className="bg-[#F7F7F8] dark:bg-[#1a1a1a] rounded-none border border-[#E5E5E5] dark:border-[#404040] p-6">
        <h4 className="text-sm font-semibold mb-4 text-[#000000] dark:text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Spacing Guidelines
        </h4>
        <ul className="text-sm space-y-2 text-[#000000] dark:text-white" style={{ fontFamily: 'Switzer, sans-serif' }}>
          <li>• <span className="font-semibold">Label to Title:</span> 12px (0.75rem)</li>
          <li>• <span className="font-semibold">Title to Body:</span> 16px (1rem)</li>
          <li>• <span className="font-semibold">Between Sections:</span> 48-64px (3-4rem)</li>
          <li>• <span className="font-semibold">Line Height Body Text:</span> 1.6 (25.6px for 16px text)</li>
          <li>• <span className="font-semibold">Line Height Headings:</span> 1.2-1.3</li>
        </ul>
      </div>
    </section>
  );
}
