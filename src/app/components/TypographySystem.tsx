interface TypeExampleProps {
  label: string;
  size: string;
  weight: string;
  example: string;
  className?: string;
}

function TypeExample({
  label,
  size,
  weight,
  example,
  className = "",
}: TypeExampleProps) {
  return (
    <div className="py-4 border-b border-gray-200 last:border-0">
      <div className="flex items-baseline justify-between mb-2">
        <span className="text-sm text-gray-600">{label}</span>
        <span className="text-xs text-gray-400">
          {size} / {weight}
        </span>
      </div>
      <p className={className}>{example}</p>
    </div>
  );
}

export function TypographySystem() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2 text-[#000000] dark:text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Typography</h2>
        <p className="text-sm text-[#000000] dark:text-gray-300">
          Dual font system: Space Grotesk for headings, Switzer
          for body
        </p>
      </div>

      {/* Font Families */}
      <div className="bg-white rounded-none border border-[#E5E5E5] p-6 space-y-4">
        <div>
          <h3 className="text-sm font-semibold mb-2 text-[#000000]">
            Primary Fonts
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#F7F7F8] rounded-none p-4">
              <p className="text-xs text-[#848484] mb-2">
                Display & Headings
              </p>
              <p className="text-3xl font-bold text-[#000000]">
                Space Grotesk
              </p>
              <p className="text-xs text-[#848484] mt-2 mb-3">
                Bold, modern, geometric
              </p>
              <a
                href="https://fonts.google.com/specimen/Space+Grotesk?preview.script=Latn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#5461a6] hover:text-[#26245c] transition-colors inline-flex items-center gap-1"
                style={{ fontFamily: "Switzer, sans-serif" }}
              >
                Download from Google Fonts →
              </a>
            </div>
            <div className="bg-[#F7F7F8] rounded-none p-4">
              <p className="text-xs text-[#848484] mb-2">
                Body, Buttons & UI
              </p>
              <p className="text-3xl font-bold text-[#000000]">
                Switzer
              </p>
              <p className="text-xs text-[#848484] mt-2 mb-3">
                Clean, readable, versatile
              </p>
              <a
                href="https://www.fontshare.com/?q=Switzer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#5461a6] hover:text-[#26245c] transition-colors inline-flex items-center gap-1"
                style={{ fontFamily: "Switzer, sans-serif" }}
              >
                Download from Fontshare →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Heading Hierarchy - Space Grotesk */}
      <div className="bg-white rounded-none border border-[#E5E5E5] p-6 space-y-6">
        <div>
          <h3 className="text-sm font-semibold mb-4 text-[#000000]">
            Headings – Space Grotesk
          </h3>

          <div className="space-y-6">
            <div className="py-4 border-b border-gray-200">
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-sm text-gray-600">
                  H1 – Display Heading
                </span>
                <span className="text-xs text-gray-600">
                  48px / Bold
                </span>
              </div>
              <h1 className="text-[48px] font-bold tracking-tight text-[#000000]">
                Data-Driven Innovation
              </h1>
            </div>

            <div className="py-4 border-b border-gray-200">
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-sm text-gray-600">
                  H2 – Section Heading
                </span>
                <span className="text-xs text-gray-600">
                  32px / Bold
                </span>
              </div>
              <h2 className="text-[32px] font-bold tracking-tight text-[#000000]">
                Research & Development
              </h2>
            </div>

            <div className="py-4 border-b border-gray-200">
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-sm text-gray-600">
                  H3 – Subsection
                </span>
                <span className="text-xs text-gray-600">
                  24px / Semibold
                </span>
              </div>
              <h3 className="text-[24px] font-semibold text-[#000000]">
                Featured Projects
              </h3>
            </div>

            <div className="py-4">
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-sm text-gray-600">
                  H4 – Component Title
                </span>
                <span className="text-xs text-gray-600">
                  18px / Semibold
                </span>
              </div>
              <h4 className="text-[18px] font-semibold text-[#000000]">
                Team & Collaborators
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* Body Text - Switzer */}
      <div className="bg-white rounded-none border border-[#E5E5E5] p-6 space-y-6">
        <div>
          <h3 className="text-sm font-semibold mb-4 text-[#000000]">
            Body Text – Switzer
          </h3>

          <div className="space-y-6">
            <div className="py-4 border-b border-gray-200">
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-sm text-gray-600">
                  Body Large – Lead Text
                </span>
                <span className="text-xs text-gray-600">
                  18px / Regular
                </span>
              </div>
              <p className="text-[18px] font-normal leading-relaxed text-[#000000]">
                Enabling data-driven science and innovation for
                societal impact across Switzerland.
              </p>
            </div>

            <div className="py-4 border-b border-gray-200">
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-sm text-gray-600">
                  Body – Normal Text
                </span>
                <span className="text-xs text-gray-600">
                  16px / Regular
                </span>
              </div>
              <p className="text-[16px] font-normal leading-relaxed text-[#000000]">
                This is the standard body text used for
                paragraphs and general content throughout the
                interface.
              </p>
            </div>

            <div className="py-4 border-b border-gray-200">
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-sm text-gray-600">
                  Body Small – Supporting Text
                </span>
                <span className="text-xs text-gray-600">
                  14px / Regular
                </span>
              </div>
              <p className="text-[14px] font-normal text-[#000000]">
                Secondary information, captions, and metadata
              </p>
            </div>

            <div className="py-4 border-b border-gray-200">
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-sm text-gray-600">
                  Button Text
                </span>
                <span className="text-xs text-gray-600">
                  14px / Regular / Uppercase
                </span>
              </div>
              <p className="text-[14px] font-normal text-[#000000] uppercase">
                Call to Action
              </p>
            </div>

            <div className="py-4">
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-sm text-gray-600">
                  Caption – Fine Print
                </span>
                <span className="text-xs text-gray-600">
                  12px / Regular
                </span>
              </div>
              <p className="text-[12px] font-normal text-[#000000]">
                Auxiliary text, timestamps, and helper
                information
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Typography in Context */}
      <div className="space-y-3">
        <p className="text-sm font-semibold">
          Typography in Context
        </p>
        <div className="bg-white rounded-none border border-[#E5E5E5] p-8">
          <h2 className="text-3xl font-bold text-[#000000] mb-4">
            The Swiss Data Science Center
          </h2>
          <p className="text-lg text-[#000000] mb-4 leading-relaxed">
            We bring together expertise from across Switzerland
            to enable cutting-edge research and development in
            data science and artificial intelligence.
          </p>
          <p className="text-base text-[#000000] leading-relaxed">
            Through collaboration with academic institutions and
            industry partners, we develop innovative solutions
            that address real-world challenges. Our work spans
            healthcare, climate science, social research, and
            more.
          </p>
          <div className="mt-6">
            <button
              style={{ fontFamily: "Switzer, sans-serif" }}
              className="uppercase px-6 py-3 bg-[#5461a6] text-white rounded-none hover:bg-[#26245c] transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Guidelines */}
      <div className="bg-[#F7F7F8] rounded-none border border-[#E5E5E5] p-6">
        <h3 className="text-sm font-semibold mb-3 text-[#000000]">
          Typography Guidelines
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-semibold mb-2 text-[#000000]">
              Font Usage
            </h4>
            <ul className="text-sm space-y-2 text-[#000000] dark:text-black">
              <li>
                • Use Space Grotesk for all headings (H1-H6)
              </li>
              <li>
                • Use Switzer for body text, buttons, forms, and
                UI elements
              </li>
              <li>
                • Maintain font consistency across the
                application
              </li>
              <li>
                • Load both fonts for complete design system
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-2 text-[#000000]">
              Best Practices
            </h4>
            <ul className="text-sm space-y-2 text-[#000000] dark:text-black">
              <li>
                • Line Height: 1.5-1.6 for body text, 1.2-1.3
                for headings
              </li>
              <li>
                • Letter Spacing: Tight (-0.02em) for large
                headings
              </li>
              <li>
                • Font Smoothing: Antialiased for crisp
                rendering
              </li>
              <li>
                • Max line length: 65-75 characters for
                readability
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}