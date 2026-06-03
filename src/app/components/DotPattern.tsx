import { useState } from "react";
import bgPattern2 from "/src/imports/global_background2.png";
import bgPattern3 from "/src/imports/global_background3.png";
import bgPattern4 from "/src/imports/global_background4.png";
import bgPattern2Svg from "/src/imports/global_background2.svg";
import bgPattern3Svg from "/src/imports/global_background3.svg";
import bgPattern4Svg from "/src/imports/global_background4.svg";
import { Download, X } from "lucide-react";

// Download handler to properly download images
const handleDownload = async (
  imageUrl: string,
  filename: string,
) => {
  try {
    const response = await fetch(imageUrl);
    const arrayBuffer = await response.arrayBuffer();

    // Determine the correct MIME type based on file extension
    const isSvg = filename.endsWith(".svg");
    const mimeType = isSvg ? "image/svg+xml" : "image/png";

    const blob = new Blob([arrayBuffer], { type: mimeType });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Download failed:", error);
  }
};

// Handler for external download links (e.g., Google Drive)
const handleExternalDownload = (url: string) => {
  window.open(url, "_blank");
};

interface BackgroundPattern {
  name: string;
  pngUrl: string;
  svgUrl: string;
  svgDownloadUrl: string;
}

export function DotPattern() {
  const [selectedPattern, setSelectedPattern] =
    useState<BackgroundPattern | null>(null);

  const patterns: BackgroundPattern[] = [
    {
      name: "global_background2",
      pngUrl: bgPattern2,
      svgUrl: bgPattern2Svg,
      svgDownloadUrl:
        "https://drive.google.com/uc?export=download&id=11ZdmN7t9C8p6555zwiNSAy3Q6NTeCWwr",
    },
    {
      name: "global_background3",
      pngUrl: bgPattern3,
      svgUrl: bgPattern3Svg,
      svgDownloadUrl:
        "https://drive.google.com/uc?export=download&id=10-SSGoDr9VnQKJClSxsQ0bSVkUDgC9P2",
    },
    {
      name: "global_background4",
      pngUrl: bgPattern4,
      svgUrl: bgPattern4Svg,
      svgDownloadUrl:
        "https://drive.google.com/uc?export=download&id=1M5U3s97jDZv2gwX4Jh1tPP5r3KsFidmz",
    },
  ];

  return (
    <section className="space-y-8">
      <div>
        <h2
          className="text-2xl font-bold mb-2 text-[#000000] dark:text-white"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          Dot Pattern Background
        </h2>
        <p className="text-sm text-[#848484] dark:text-gray-300">
          Subtle dot pattern for hero sections and key content
          areas. Pattern positioned from left or right edge.
        </p>
      </div>

      {/* Pattern Display */}
      <div className="space-y-4">
        <div className="bg-white dark:bg-[#2d2d2d] rounded-none border border-[#E5E5E5] dark:border-[#404040] overflow-hidden">
          <div
            className="h-80 relative"
            style={{
              backgroundImage: `url(${bgPattern2})`,
              backgroundSize: "cover",
              backgroundPosition: "left center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="h-full flex items-center justify-center p-8">
              <div className="bg-white/95 backdrop-blur-sm rounded-none p-8 max-w-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[#848484] dark:text-gray-400 text-sm font-medium">
                    〇
                  </span>
                  <p className="text-sm font-medium text-[#848484] dark:text-gray-400 uppercase tracking-wide">
                    LOREM IPSUM
                  </p>
                </div>
                <h2 className="text-3xl font-bold text-[#000000] dark:text-black mb-3">
                  Lorem Ipsum Dolor Sit
                </h2>
                <p className="text-base text-[#000000] dark:text-black mb-4">
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore.
                </p>
                <button
                  style={{ fontFamily: "Switzer, sans-serif" }}
                  className="uppercase px-6 py-3 bg-[#5461a6] text-white rounded-none hover:bg-[#26245c] transition-colors"
                >
                  Lorem Ipsum
                </button>
              </div>
            </div>
          </div>
        </div>
        <p className="text-xs text-[#848484] dark:text-gray-300">
          Pattern shown above with content overlay
        </p>
      </div>

      {/* Pattern Variations */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-[#000000] dark:text-white">
          Pattern Variations & Downloads
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <div
              onClick={() => setSelectedPattern(patterns[0])}
              className="h-32 rounded-none border border-[#E5E5E5] dark:border-[#404040] relative cursor-pointer hover:border-[#5461a6] transition-colors"
              style={{
                backgroundImage: `url(${bgPattern2})`,
                backgroundSize: "cover",
                backgroundPosition: "left center",
              }}
            >
              <div className="absolute top-2 right-2 group/tooltip">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleExternalDownload(
                      "https://drive.google.com/uc?export=download&id=11ZdmN7t9C8p6555zwiNSAy3Q6NTeCWwr",
                    );
                  }}
                  className="bg-white/90 hover:bg-[#5461a6] p-2 rounded-none border border-[#E5E5E5] dark:border-[#404040] hover:border-[#5461a6] transition-colors cursor-pointer group"
                >
                  <Download className="w-4 h-4 text-[#5461a6] dark:text-[#93c5fd] group-hover:text-white transition-colors" />
                </button>
                <div className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-[#000000] text-white text-xs rounded whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none">
                  Download svg file
                </div>
              </div>
            </div>
            <p
              className="text-xs text-[#848484] dark:text-gray-300"
              style={{ fontFamily: "Switzer, sans-serif" }}
            >
              Global Background 2
            </p>
            <button
              onClick={() =>
                handleDownload(
                  bgPattern2,
                  "global_background2.png",
                )
              }
              className="text-xs text-[#5461a6] dark:text-[#93c5fd] hover:text-[#26245c] dark:hover:text-white transition-colors inline-flex items-center gap-1 cursor-pointer bg-transparent border-none p-0"
              style={{ fontFamily: "Switzer, sans-serif" }}
            >
              Download png →
            </button>
          </div>
          <div className="space-y-2">
            <div
              onClick={() => setSelectedPattern(patterns[1])}
              className="h-32 rounded-none border border-[#E5E5E5] dark:border-[#404040] relative cursor-pointer hover:border-[#5461a6] transition-colors"
              style={{
                backgroundImage: `url(${bgPattern3})`,
                backgroundSize: "cover",
                backgroundPosition: "right center",
              }}
            >
              <div className="absolute top-2 right-2 group/tooltip">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleExternalDownload(
                      "https://drive.google.com/uc?export=download&id=10-SSGoDr9VnQKJClSxsQ0bSVkUDgC9P2",
                    );
                  }}
                  className="bg-white/90 hover:bg-[#5461a6] p-2 rounded-none border border-[#E5E5E5] dark:border-[#404040] hover:border-[#5461a6] transition-colors cursor-pointer group"
                >
                  <Download className="w-4 h-4 text-[#5461a6] dark:text-[#93c5fd] group-hover:text-white transition-colors" />
                </button>
                <div className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-[#000000] text-white text-xs rounded whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none">
                  Download svg file
                </div>
              </div>
            </div>
            <p
              className="text-xs text-[#848484] dark:text-gray-300"
              style={{ fontFamily: "Switzer, sans-serif" }}
            >
              Global Background 3
            </p>
            <button
              onClick={() =>
                handleDownload(
                  bgPattern3,
                  "global_background3.png",
                )
              }
              className="text-xs text-[#5461a6] dark:text-[#93c5fd] hover:text-[#26245c] dark:hover:text-white transition-colors inline-flex items-center gap-1 cursor-pointer bg-transparent border-none p-0"
              style={{ fontFamily: "Switzer, sans-serif" }}
            >
              Download png →
            </button>
          </div>
          <div className="space-y-2">
            <div
              onClick={() => setSelectedPattern(patterns[2])}
              className="h-32 rounded-none border border-[#E5E5E5] dark:border-[#404040] relative cursor-pointer hover:border-[#5461a6] transition-colors"
              style={{
                backgroundImage: `url(${bgPattern4})`,
                backgroundSize: "cover",
                backgroundPosition: "left center",
              }}
            >
              <div className="absolute top-2 right-2 group/tooltip">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleExternalDownload(
                      "https://drive.google.com/uc?export=download&id=1M5U3s97jDZv2gwX4Jh1tPP5r3KsFidmz",
                    );
                  }}
                  className="bg-white/90 hover:bg-[#5461a6] p-2 rounded-none border border-[#E5E5E5] dark:border-[#404040] hover:border-[#5461a6] transition-colors cursor-pointer group"
                >
                  <Download className="w-4 h-4 text-[#5461a6] dark:text-[#93c5fd] group-hover:text-white transition-colors" />
                </button>
                <div className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-[#000000] text-white text-xs rounded whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none">
                  Download svg file
                </div>
              </div>
            </div>
            <p
              className="text-xs text-[#848484] dark:text-gray-300"
              style={{ fontFamily: "Switzer, sans-serif" }}
            >
              Global Background 4
            </p>
            <button
              onClick={() =>
                handleDownload(
                  bgPattern4,
                  "global_background4.png",
                )
              }
              className="text-xs text-[#5461a6] dark:text-[#93c5fd] hover:text-[#26245c] dark:hover:text-white transition-colors inline-flex items-center gap-1 cursor-pointer bg-transparent border-none p-0"
              style={{ fontFamily: "Switzer, sans-serif" }}
            >
              Download png →
            </button>
          </div>
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="bg-[#F7F7F8] dark:bg-[#1a1a1a] rounded-none border border-[#E5E5E5] dark:border-[#404040] p-6">
        <h4 className="text-sm font-semibold mb-4 text-[#000000] dark:text-white">
          Pattern Usage Guidelines
        </h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h5
              className="text-sm font-semibold text-[#2e7d32]"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
              }}
            >
              ✓ Best Uses
            </h5>
            <ul className="text-sm space-y-2 text-[#000000] dark:text-white">
              <li>• Hero sections with primary messaging</li>
              <li>• Featured content areas</li>
              <li>• Call-to-action sections</li>
              <li>
                • Background for cards with important content
              </li>
              <li>• Landing page headers</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h5
              className="text-sm font-semibold text-[#d32f2f]"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
              }}
            >
              ✗ Avoid
            </h5>
            <ul className="text-sm space-y-2 text-[#000000] dark:text-white">
              <li>• Using on small text-heavy sections</li>
              <li>
                • Combining with busy images or complex layouts
              </li>
              <li>
                • Applying to entire pages (use sparingly)
              </li>
              <li>• Layering multiple patterns</li>
              <li>
                • Using without sufficient content overlay
                contrast
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Implementation Notes */}
      <div className="bg-[#dddeec] rounded-none p-6">
        <h4 className="text-sm font-bold text-[#000000] mb-3">
          Implementation Notes
        </h4>
        <ul className="text-sm space-y-2 text-[#000000]">
          <li>
            •{" "}
            <span className="font-semibold">
              Pattern Files:
            </span>{" "}
            Available in 3 variations (global_background2.png,
            global_background3.png, global_background4.png)
          </li>
          <li>
            •{" "}
            <span className="font-semibold">
              Background Size:
            </span>{" "}
            Use `background-size: cover` for consistent scaling
          </li>
          <li>
            •{" "}
            <span className="font-semibold">
              Background Position:
            </span>{" "}
            Use `left center` or `right center` instead of
            `center` for asymmetric positioning
          </li>
          <li>
            •{" "}
            <span className="font-semibold">
              Content Overlay:
            </span>{" "}
            Use white or semi-transparent backgrounds
            (backdrop-blur-sm) for content readability
          </li>
          <li>
            • <span className="font-semibold">Contrast:</span>{" "}
            Ensure text maintains WCAG AA contrast ratios when
            placed over the pattern
          </li>
        </ul>
      </div>

      {/* Preview Modal */}
      {selectedPattern && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPattern(null)}
        >
          <div
            className="bg-white dark:bg-[#2d2d2d] rounded-none max-w-4xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#E5E5E5] dark:border-[#404040]">
              <h3 className="text-lg font-bold text-[#000000] dark:text-white">
                {selectedPattern.name}.png
              </h3>
              <button
                onClick={() => setSelectedPattern(null)}
                className="p-2 hover:bg-[#F7F7F8] dark:bg-[#1a1a1a] rounded-none transition-colors"
              >
                <X className="w-5 h-5 text-[#848484] dark:text-gray-300" />
              </button>
            </div>

            {/* Modal Content - Image Preview */}
            <div className="flex-1 overflow-auto p-8 bg-[#F7F7F8] dark:bg-[#1a1a1a]">
              <div
                className="w-full min-h-[400px] rounded-none border border-[#E5E5E5] dark:border-[#404040] bg-white"
                style={{
                  backgroundImage: `url(${selectedPattern.pngUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>

            {/* Modal Footer - Download Buttons */}
            <div className="flex items-center justify-center gap-4 p-6 border-t border-[#E5E5E5] dark:border-[#404040]">
              <button
                onClick={() =>
                  handleDownload(
                    selectedPattern.pngUrl,
                    `${selectedPattern.name}.png`,
                  )
                }
                className="px-6 py-3 bg-[#5461a6] text-white rounded-none hover:bg-[#26245c] transition-colors inline-flex items-center gap-2"
                style={{ fontFamily: "Switzer, sans-serif" }}
              >
                <Download className="w-4 h-4" />
                Download PNG
              </button>
              <button
                onClick={() =>
                  handleExternalDownload(
                    selectedPattern.svgDownloadUrl,
                  )
                }
                className="px-6 py-3 bg-[#5461a6] text-white rounded-none hover:bg-[#26245c] transition-colors inline-flex items-center gap-2"
                style={{ fontFamily: "Switzer, sans-serif" }}
              >
                <Download className="w-4 h-4" />
                Download SVG
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}