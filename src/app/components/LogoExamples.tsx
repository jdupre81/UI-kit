import logoColor from "/src/imports/SDSC_logo_horizontal_rgb_colors.png";
import logoWhite from "/src/imports/SDSC_logo_horizontal_rgb_white.png";
        {/* Logo Compact version */}
import logoCompactColor from "/src/imports/SDSC_LogoCompact_RGB.png";
import logoCompactWhite from "/src/imports/SDSC_LogoCompact_White.png";

        {/* Logo short version */}
import logoShortColor from "/src/imports/SDSC_Logo_RGB.png";
import logoShortWhite from "/src/imports/SDSC_Logo_White.png";

        {/* Partner logos screenshot Lucid */}
import screenshotLucid from "/src/imports/screenshot_lucid.png";

        {/* Partner logos screenshot Imaging Plaza */}
import screenshotImagingPlaza from "/src/imports/screenshot_imagingPlaza.png";

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

<div>
        {/* Logo short version */}

        <div className="space-y-3">
          <div>

         <p className="text-sm font-semibold text-[#000000] dark:text-white">
            Short version (primary logo)
          </p>
          <div>
            <p className="text-sm text-[#000000] dark:text-white">
              The short version is the preferred and primary logo. It should be used whenever space allows, as it best represents the SDSC brand in a clear and recognisable way. Prioritise this version in all standard applications such as headers, marketing materials, and digital interfaces where legibility is not constrained.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Logo on White Background */}
          <div className="space-y-2">
            <div className="bg-white dark:bg-[#2d2d2d] rounded-none border border-[#E5E5E5] dark:border-[#404040] p-8 flex flex-col items-center gap-3">
              <img
                src={logoShortColor}
                alt="SDSC Logo Compact - Color"
                className="h-16"
              />
              <p className="text-xs text-[#848484] dark:text-gray-300">
                Logo (short version) on white background
              </p>
            </div>
            <a
              href={logoShortWhite}
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
                src={logoShortWhite}
                alt="SDSC Logo Short - White"
                className="h-16"
              />
              <p className="text-xs text-gray-400">
                Logo (short version) on dark background
              </p>
            </div>
            <a
              href={logoShortWhite}
              download
              className="text-xs text-[#5461a6] dark:text-[#93c5fd] hover:text-[#26245c] dark:hover:text-white transition-colors inline-flex items-center gap-1"
            >
              Download →
            </a>
          </div>
        </div>

          </div>
</div>

      <div className="space-y-8">
        {/* Logo Compact Version */}
        <div className="space-y-3">
          <div>

         <p className="text-sm font-semibold text-[#000000] dark:text-white">
            Compact version (alternative option)
          </p>
          <div>
            <p className="text-sm text-[#000000] dark:text-white">
              The compact version is the recommended alternative when horizontal or vertical space is limited. It maintains brand recognition while adapting to tighter layouts. Use it in UI components, toolbars, small headers, or situations where the short version would feel visually crowded or exceed available space.
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
              Long version (full logo)
            </p>
              <p className="text-sm text-[#000000] dark:text-white">
              The long version is the most complete expression of the logo and should be used in contexts where full brand presentation is important and space is not restricted. It is best suited for formal applications such as cover pages, presentations, editorial layouts, or institutional documents where the full name reinforces clarity and brand presence.
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
            Project Partner Logos
          </p>
          <p className="text-sm text-[#000000] dark:text-white">
            Indicating the creators of the project / platform. If the application or platform being built is a collaborative project of SDSC with another partners or more than one partner, please display the partner logos in footer section in equal size on one line next to each other (from left to right). As a rule of thumb, the main project owner / partner - if not SDSC - should be listed first on the left. If thre's more than 10 logos, exceeding one line - the logo line should continue on a 2nd or 3rd line
          </p>

          {/* Partner logos on white */}
          <div className="bg-white dark:bg-[#2d2d2d] rounded-none border border-[#E5E5E5] dark:border-[#404040] p-8">
            <div className="flex flex-wrap items-center justify-center gap-12">
              
              <img
                src={screenshotLucid}
                alt="Lucid"
              />
               <img
                src={screenshotImagingPlaza}
                alt="Imaging"
              />
            </div>
          </div>

        {/* Partner Logo Guidelines */}
        <div className="bg-[#dddeec] rounded-none p-6">
          <h4 className="text-sm font-bold text-[#000000] mb-3">
            General Partner Logo Guidelines
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