import logoColor from "/src/imports/SDSC_logo_horizontal_rgb_colors.png";
import logoWhite from "/src/imports/SDSC_logo_horizontal_rgb_white.png";
import logoCompactColor from "/src/imports/SDSC_LogoCompact_RGB.png";
import logoCompactWhite from "/src/imports/SDSC_LogoCompact_White.png";
import ethLogo from "/src/imports/eth_logo_kurz_pos.png";
import epflLogo from "/src/imports/EPFL_Logo_Digital_RGB_PROD.png";
import psiLogo from "/src/imports/PSI_Logo_01_Standard_Positive_RGB.png";
import biopoleLogo from "/src/imports/Biopo_le_Lausanne_idca14LYxL_1.png";

export function LogoExamples() {
  return (
    <section className="space-y-6">
      <div>
        <h2
          className="text-2xl font-bold mb-2 text-[#000000] dark:text-white"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          Logo Guidelines
        </h2>
        <p className="text-sm text-[#848484] dark:text-gray-300">
          Official logo and brand identity guidelines
        </p>
      </div>
      <div className="space-y-8">
        {/* Logo */}
        <div className="space-y-3">
          <div>

         <p className="text-sm font-semibold text-[#000000] dark:text-white">
            Logo (Compact version)
          </p>
          <div>
            <p className="text-sm text-[#000000] dark:text-white">
              Use the short SDSC logo in situations where space
              is limited or legibility of the full logo may be
              compromised. Typical applications include
              favicons, social media profile images, small
              digital interfaces, merchandise, and other compact
              formats. Ensure the logo remains clear,
              recognizable, and maintains sufficient clear space
              around it.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Logo on White Background */}
          <div className="space-y-2">
            <div className="bg-white dark:bg-[#2d2d2d] rounded-none border border-[#E5E5E5] dark:border-[#404040] p-8 flex flex-col items-center gap-3">
              <img
                src={logoCompactColor}
                alt="SDSC Logo Compact - Color"
                className="h-16"
              />
              <p className="text-xs text-[#848484] dark:text-gray-300">
                Logo (short version) on white background
              </p>
            </div>
            <a
              href={logoCompactColor}
              download
              className="text-xs text-[#5461a6] dark:text-[#93c5fd] hover:text-[#26245c] dark:hover:text-white transition-colors inline-flex items-center gap-1"
            >
              Download →
            </a>
          </div>

          {/* Logo short version on dark */}
          <div className="space-y-2">
            <div className="bg-[#000000] rounded-none border border-[#E5E5E5] dark:border-[#404040] p-8 flex flex-col items-center gap-3">
              <img
                src={logoCompactWhite}
                alt="SDSC Logo Compact - White"
                className="h-16"
              />
              <p className="text-xs text-gray-400">
                Logo (short version) on dark background
              </p>
            </div>
            <a
              href={logoCompactWhite}
              download
              className="text-xs text-[#5461a6] dark:text-[#93c5fd] hover:text-[#26245c] dark:hover:text-white transition-colors inline-flex items-center gap-1"
            >
              Download →
            </a>
          </div>
        </div>

      <div className="space-y-8">
        {/* Logo */}
        <div className="space-y-3">
          <div>

         <p className="text-sm font-semibold text-[#000000] dark:text-white">
            Logo (Compact version)
          </p>
          <div>
            <p className="text-sm text-[#000000] dark:text-white">
              Use the short SDSC logo in situations where space
              is limited or legibility of the full logo may be
              compromised. Typical applications include
              favicons, social media profile images, small
              digital interfaces, merchandise, and other compact
              formats. Ensure the logo remains clear,
              recognizable, and maintains sufficient clear space
              around it.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Logo on White Background */}
          <div className="space-y-2">
            <div className="bg-white dark:bg-[#2d2d2d] rounded-none border border-[#E5E5E5] dark:border-[#404040] p-8 flex flex-col items-center gap-3">
              <img
                src={logoCompactColor}
                alt="SDSC Logo Compact - Color"
                className="h-16"
              />
              <p className="text-xs text-[#848484] dark:text-gray-300">
                Logo (compact version) on white background
              </p>
            </div>
            <a
              href={logoCompactColor}
              download
              className="text-xs text-[#5461a6] dark:text-[#93c5fd] hover:text-[#26245c] dark:hover:text-white transition-colors inline-flex items-center gap-1"
            >
              Download →
            </a>
          </div>

          {/* Logo short version on dark */}
          <div className="space-y-2">
            <div className="bg-[#000000] rounded-none border border-[#E5E5E5] dark:border-[#404040] p-8 flex flex-col items-center gap-3">
              <img
                src={logoCompactWhite}
                alt="SDSC Logo Compact - White"
                className="h-16"
              />
              <p className="text-xs text-gray-400">
                Logo (compact version) on dark background
              </p>
            </div>
            <a
              href={logoCompactWhite}
              download
              className="text-xs text-[#5461a6] dark:text-[#93c5fd] hover:text-[#26245c] dark:hover:text-white transition-colors inline-flex items-center gap-1"
            >
              Download →
            </a>
          </div>
        </div>

          </div>
          {/* Logo Long Version */}
          <div className="space-y-3">
            <p className="text-sm font-semibold text-[#000000] dark:text-white">
              Logo (long version)
            </p>
            <p className="text-sm text-[#000000] dark:text-white">
              If possible, use long logo version in first
              appearance and then continue with short logo
              version. However, depending on the platform
              parameters and partnership agreement, we might not
              have enough space or need to list more than one
              partner logo next to SDSC - in this case: the
              short logo version is preferred.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Logo on White Background */}
              <div className="space-y-2">
                <div className="bg-white dark:bg-[#2d2d2d] rounded-none border border-[#E5E5E5] dark:border-[#404040] p-8 flex flex-col items-center gap-3">
                  <img
                    src={logoColor}
                    alt="SDSC Logo - Color"
                    className="h-10"
                  />
                  <p className="text-xs text-[#848484] dark:text-gray-300">
                    Logo (long version) on white background
                  </p>
                </div>
                <a
                  href={logoColor}
                  download
                  className="text-xs text-[#5461a6] dark:text-[#93c5fd] hover:text-[#26245c] dark:hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  Download →
                </a>
              </div>

              {/* Logo on Dark Background */}
              <div className="space-y-2">
                <div className="bg-[#000000] rounded-none border border-[#E5E5E5] dark:border-[#404040] p-8 flex flex-col items-center gap-3">
                  <img
                    src={logoWhite}
                    alt="SDSC Logo - White"
                    className="h-10"
                  />
                  <p className="text-xs text-gray-400">
                    Logo (long version) on dark background
                  </p>
                </div>
                <a
                  href={logoWhite}
                  download
                  className="text-xs text-[#5461a6] dark:text-[#93c5fd] hover:text-[#26245c] dark:hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  Download →
                </a>
              </div>
            </div>
          </div>

          {/* Logo Clear Space */}
          <div className="space-y-3">
            <p className="text-sm font-semibold text-[#000000] dark:text-white">
              Clear Space & Sizing
            </p>
            <div className="bg-white dark:bg-[#2d2d2d] rounded-none border border-[#E5E5E5] dark:border-[#404040] p-8">
              <div className="relative inline-block">
                <div className="p-4 border-2 border-dashed border-[#5461a6] dark:border-[#93c5fd]">
                  <img
                    src={logoColor}
                    alt="SDSC Logo - Clear Space"
                    className="h-16"
                  />
                </div>
                <div
                  className="absolute -top-4 left-0 text-xs text-[#5461a6] dark:text-[#93c5fd]"
                  style={{ fontFamily: "Switzer, sans-serif" }}
                >
                  ← X
                </div>
                <div
                  className="absolute -left-4 top-0 text-xs text-[#5461a6] dark:text-[#93c5fd]"
                  style={{ fontFamily: "Switzer, sans-serif" }}
                >
                  X ↑
                </div>
              </div>
              <p
                className="text-xs text-[#848484] dark:text-gray-300 mt-4"
                style={{ fontFamily: "Switzer, sans-serif" }}
              >
                Maintain clear space of X (height of logo)
                around all sides
              </p>
            </div>
          </div>

        {/* Logo Guidelines */}
        <div className="bg-[#F7F7F8] dark:bg-[#1a1a1a] rounded-none border border-[#E5E5E5] dark:border-[#404040] p-6">
          <h3 className="text-sm font-semibold mb-3 text-[#000000] dark:text-white">
            Logo Usage Guidelines
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4
                className="text-sm font-semibold text-[#2e7d32] mb-2"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                }}
              >
                ✓ Do
              </h4>
              <ul className="text-sm space-y-2 text-[#000000] dark:text-white">
                <li>
                  • Use official logo files provided (long
                  version: SDSC_logo_horizontal_rgb_colors.png,
                  SDSC_logo_horizontal_rgb_white.png; short
                  version: SDSC_LogoCompact_RGB.png,
                  SDSC_LogoCompact_White.png)
                </li>
                <li>• Maintain aspect ratio when scaling</li>
                <li>
                  • Ensure adequate clear space around logo
                </li>
                <li>
                  • Use color logo on white/light backgrounds,
                  white logo on dark backgrounds
                </li>
                <li>• Minimum size: 32px height for digital</li>
              </ul>
            </div>
            <div>
              <h4
                className="text-sm font-semibold text-[#d32f2f] mb-2"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                }}
              >
                ✗ Don't
              </h4>
              <ul className="text-sm space-y-2 text-[#000000] dark:text-white">
                <li>• Don't stretch or distort the logo</li>
                <li>• Don't change logo colors arbitrarily</li>
                <li>
                  • Don't add effects (shadows, gradients,
                  outlines)
                </li>
                <li>• Don't place on busy backgrounds</li>
                <li>• Don't use outdated logo versions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="space-y-3">
          <p className="text-sm font-semibold text-[#000000] dark:text-white">
            Partner Logos
          </p>
          <p className="text-sm text-[#848484] dark:text-gray-300">
            Main partner logos to display in footer sections
          </p>

          {/* Partner logos on white */}
          <div className="bg-white dark:bg-[#2d2d2d] rounded-none border border-[#E5E5E5] dark:border-[#404040] p-8">
            <div className="flex flex-wrap items-center justify-center gap-12">
              <img
                src={ethLogo}
                alt="ETH Zürich"
                className="h-6"
              />
              <img src={epflLogo} alt="EPFL" className="h-9" />
              <img src={psiLogo} alt="PSI" className="h-11" />
              <img
                src={biopoleLogo}
                alt="Biopôle Lausanne"
                className="h-7"
              />
            </div>
          </div>

          {/* Partner logos on dark */}
          <div className="bg-[#000000] rounded-none border border-[#E5E5E5] dark:border-[#404040] p-8">
            <div className="flex flex-wrap items-center justify-center gap-12">
              <img
                src={ethLogo}
                alt="ETH Zürich"
                className="h-6"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <img
                src={epflLogo}
                alt="EPFL"
                className="h-9"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <img
                src={psiLogo}
                alt="PSI"
                className="h-11"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <img
                src={biopoleLogo}
                alt="Biopôle Lausanne"
                className="h-7"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
          </div>
        </div>

        {/* Partner Logo Guidelines */}
        <div className="bg-[#dddeec] rounded-none p-6">
          <h4 className="text-sm font-bold text-[#000000] mb-3">
            Partner Logo Guidelines
          </h4>
          <ul className="text-sm space-y-2 text-[#000000]">
            <li>
              •{" "}
              <span className="font-semibold">
                Footer Requirement:
              </span>{" "}
              Always display all 4 main partner logos (ETH
              Zürich, EPFL, PSI, Biopôle) in the footer along
              with the Swiss Data Science Center logo
            </li>
            <li>
              •{" "}
              <span className="font-semibold">
                On Light Backgrounds:
              </span>{" "}
              Use original colored versions of partner logos
            </li>
            <li>
              •{" "}
              <span className="font-semibold">
                On Dark Backgrounds:
              </span>{" "}
              Ensure all logos are shown in a light color (white
              or light gray).
            </li>
            <li>
              • <span className="font-semibold">Size:</span>{" "}
              Ensure all partner logos appear the same visual
              size for a consistent presentation.
            </li>
            <li>
              • <span className="font-semibold">Spacing:</span>{" "}
              Maintain 48px (3rem) gap between partner logos
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}