import { useState } from "react";
import { Copy, Check } from "lucide-react";

// Fallback copy function that works without Clipboard API
const copyToClipboard = (text: string): boolean => {
  try {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    const successful = document.execCommand("copy");
    document.body.removeChild(textArea);
    return successful;
  } catch (err) {
    console.error("Failed to copy:", err);
    return false;
  }
};

interface ColorSwatchProps {
  name: string;
  hex: string;
  description?: string;
}

function ColorSwatch({
  name,
  hex,
  description,
}: ColorSwatchProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const success = copyToClipboard(hex);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={handleCopy}
        className="w-24 h-24 rounded-none shadow-sm border border-gray-200 relative group cursor-pointer hover:border-[#5461a6] transition-colors"
        style={{ backgroundColor: hex }}
        title={`Click to copy ${hex}`}
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
          {copied ? (
            <div className="bg-white dark:bg-[#2d2d2d] rounded-none px-2 py-1 flex items-center gap-1">
              <Check className="w-3 h-3 text-green-600" />
              <span className="text-xs font-semibold text-green-600">
                Copied!
              </span>
            </div>
          ) : (
            <div className="bg-white dark:bg-[#2d2d2d] rounded-none px-2 py-1 flex items-center gap-1">
              <Copy className="w-3 h-3 text-[#5461a6] dark:text-[#93c5fd]" />
              <span className="text-xs font-semibold text-[#5461a6] dark:text-[#93c5fd]">
                Copy
              </span>
            </div>
          )}
        </div>
      </button>
      <div>
        <p className="text-xs font-semibold">{name}</p>
        <p className="text-xs text-[#848484] dark:text-gray-300">
          {hex.toUpperCase()}
        </p>
        {description && (
          <p className="text-xs text-[#848484] dark:text-gray-300 mt-1">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

interface ColorScaleProps {
  title: string;
  baseColor: string;
  colors: Array<{ name: string; hex: string }>;
}

function ColorScaleItem({
  color,
}: {
  color: { name: string; hex: string };
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const success = copyToClipboard(color.hex);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex-1">
      <button
        onClick={handleCopy}
        className="w-full h-20 rounded-none shadow-sm border border-gray-200 relative group cursor-pointer hover:border-[#5461a6] transition-colors"
        style={{ backgroundColor: color.hex }}
        title={`Click to copy ${color.hex}`}
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
          {copied ? (
            <div className="bg-white dark:bg-[#2d2d2d] rounded-none px-2 py-1 flex items-center gap-1">
              <Check className="w-3 h-3 text-green-600" />
              <span className="text-xs font-semibold text-green-600">
                Copied!
              </span>
            </div>
          ) : (
            <div className="bg-white dark:bg-[#2d2d2d] rounded-none px-2 py-1 flex items-center gap-1">
              <Copy className="w-3 h-3 text-[#5461a6] dark:text-[#93c5fd]" />
              <span className="text-xs font-semibold text-[#5461a6] dark:text-[#93c5fd]">
                Copy
              </span>
            </div>
          )}
        </div>
      </button>
      <p className="text-xs mt-2 font-semibold">{color.name}</p>
      <p className="text-xs text-[#848484] dark:text-gray-300">
        {color.hex.toUpperCase()}
      </p>
    </div>
  );
}

function ColorScale({
  title,
  baseColor,
  colors,
}: ColorScaleProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-[#000000] dark:text-white">
        {title}
      </h3>
      <div className="flex gap-2">
        {colors.map((color) => (
          <ColorScaleItem key={color.hex} color={color} />
        ))}
      </div>
    </div>
  );
}

function SurfaceColorItem({
  color,
}: {
  color: { name: string; hex: string };
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const success = copyToClipboard(color.hex);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex-1">
      <button
        onClick={handleCopy}
        className="w-full h-24 rounded-none shadow-sm border border-gray-200 relative group cursor-pointer hover:border-[#5461a6] transition-colors"
        style={{ backgroundColor: color.hex }}
        title={`Click to copy ${color.hex}`}
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
          {copied ? (
            <div className="bg-white dark:bg-[#2d2d2d] rounded-none px-2 py-1 flex items-center gap-1">
              <Check className="w-3 h-3 text-green-600" />
              <span className="text-xs font-semibold text-green-600">
                Copied!
              </span>
            </div>
          ) : (
            <div className="bg-white dark:bg-[#2d2d2d] rounded-none px-2 py-1 flex items-center gap-1">
              <Copy className="w-3 h-3 text-[#5461a6] dark:text-[#93c5fd]" />
              <span className="text-xs font-semibold text-[#5461a6] dark:text-[#93c5fd]">
                Copy
              </span>
            </div>
          )}
        </div>
      </button>
      <p className="text-xs mt-2 font-semibold text-center">
        {color.name}
      </p>
      <p className="text-xs text-[#848484] dark:text-gray-300 text-center">
        {color.hex.toUpperCase()}
      </p>
    </div>
  );
}

export function ColorPalette() {
  const primaryColors = [
    {
      name: "Dark Blue",
      hex: "#26245c",
      description:
        "Primary brand color, buttons hover, banners",
    },
    {
      name: "Light Blue",
      hex: "#5461a6",
      description:
        "Primary buttons, links, interactive elements",
    },
  ];

  const secondaryColors = [
    {
      name: "Green",
      hex: "#90ca42",
      description: "Accent color, highlights, CTAs",
    },
  ];

  const neutralColors = [
    {
      name: "Grey",
      hex: "#848484",
      description: "Labels, secondary text, icons",
    },
    {
      name: "Light Blue Background",
      hex: "#dddeec",
      description: "Banners, section backgrounds",
    },
    {
      name: "Black",
      hex: "#000000",
      description: "Text, headings, footers",
    },
    {
      name: "White",
      hex: "#FFFFFF",
      description: "Backgrounds, cards, text on dark",
    },
  ];

  const surfaceColors = [
    { name: "50", hex: "#fafafa" },
    { name: "100", hex: "#f5f5f5" },
    { name: "200", hex: "#e5e5e5" },
    { name: "300", hex: "#d4d4d4" },
    { name: "400", hex: "#a3a3a3" },
    { name: "500", hex: "#737373" },
    { name: "600", hex: "#525252" },
    { name: "700", hex: "#404040" },
    { name: "800", hex: "#262626" },
    { name: "900", hex: "#171717" },
  ];

  const darkBlueScale = [
    { name: "Lighter", hex: "#4a4889" },
    { name: "Light", hex: "#383673" },
    { name: "Base", hex: "#26245c" },
    { name: "Dark", hex: "#1e1c4a" },
    { name: "Darker", hex: "#161438" },
  ];

  const lightBlueScale = [
    { name: "Lighter", hex: "#8a94c9" },
    { name: "Light", hex: "#6f7ab8" },
    { name: "Base", hex: "#5461a6" },
    { name: "Dark", hex: "#434e85" },
    { name: "Darker", hex: "#323b64" },
  ];

  const greenScale = [
    { name: "Lighter", hex: "#b8e186" },
    { name: "Light", hex: "#a4d564" },
    { name: "Base", hex: "#90ca42" },
    { name: "Dark", hex: "#73a235" },
    { name: "Darker", hex: "#567928" },
  ];

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2 text-[#000000] dark:text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Colors</h2>
        <p className="text-sm text-[#848484] dark:text-gray-300">
          System color palette with primary colors and their
          variations for flexible UI design
        </p>
      </div>

      {/* Primary Colors */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-[#848484] dark:text-gray-300 text-sm font-bold">
            〇
          </span>
          <h3 className="text-base font-bold text-[#000000] dark:text-white">
            PRIMARY COLORS
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {primaryColors.map((color) => (
            <ColorSwatch
              key={color.hex}
              name={color.name}
              hex={color.hex}
              description={color.description}
            />
          ))}
        </div>
      </div>

      {/* Secondary Colors */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-[#848484] dark:text-gray-300 text-sm font-bold">
            〇
          </span>
          <h3 className="text-base font-bold text-[#000000] dark:text-white">
            SECONDARY COLOR
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {secondaryColors.map((color) => (
            <ColorSwatch
              key={color.hex}
              name={color.name}
              hex={color.hex}
              description={color.description}
            />
          ))}
        </div>
      </div>

      {/* Neutral Colors */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-[#848484] dark:text-gray-300 text-sm font-bold">
            〇
          </span>
          <h3 className="text-base font-bold text-[#000000] dark:text-white">
            NEUTRAL COLORS
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {neutralColors.map((color) => (
            <ColorSwatch
              key={color.hex}
              name={color.name}
              hex={color.hex}
              description={color.description}
            />
          ))}
        </div>
      </div>
      {/* Color Scales for Primary Colors */}
      <div className="space-y-6 bg-white dark:bg-[#2d2d2d] rounded-none border border-[#E5E5E5] dark:border-[#404040] p-6">
        <div>
          <h3 className="text-sm font-bold text-[#000000] dark:text-white mb-1">
            Color Variations
          </h3>
          <p className="text-xs text-[#848484] dark:text-gray-300">
            Lighter and darker tints for UI flexibility (hover
            states, borders, backgrounds)
          </p>
        </div>

        <ColorScale
          title="Dark Blue Scale"
          baseColor="#26245c"
          colors={darkBlueScale}
        />

        <ColorScale
          title="Light Blue Scale"
          baseColor="#5461a6"
          colors={lightBlueScale}
        />

        <ColorScale
          title="Green Scale"
          baseColor="#90ca42"
          colors={greenScale}
        />
      </div>
      {/* Surface Colors */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-[#848484] dark:text-gray-300 text-sm font-bold">
            〇
          </span>
          <h3 className="text-base font-bold text-[#000000] dark:text-white">
            GRAYSCALE PALETTE
          </h3>
        </div>
        <p className="text-sm text-[#848484] dark:text-gray-300">
          Neutral grayscale palette for backgrounds, cards,
          borders, and subtle UI elements
        </p>
        <div className="bg-white dark:bg-[#2d2d2d] rounded-none border border-[#E5E5E5] dark:border-[#404040] p-6">
          <div className="flex gap-1">
            {surfaceColors.map((color) => (
              <SurfaceColorItem key={color.hex} color={color} />
            ))}
          </div>
          <div className="mt-4 p-4 bg-[#F7F7F8] dark:bg-[#1a1a1a] rounded-none">
            <h4 className="text-sm font-semibold text-[#000000] dark:text-white mb-2">
              Surface Color Usage
            </h4>
            <ul className="text-sm space-y-1 text-[#000000] dark:text-white">
              <li>
                • <span className="font-semibold">50-200:</span>{" "}
                Light backgrounds, subtle borders, disabled
                states
              </li>
              <li>
                •{" "}
                <span className="font-semibold">300-500:</span>{" "}
                Medium grays for dividers, placeholder text,
                secondary borders
              </li>
              <li>
                •{" "}
                <span className="font-semibold">600-900:</span>{" "}
                Dark text, strong borders, overlay backgrounds
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Semantic Colors */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-[#848484] dark:text-gray-300 text-sm font-bold">
            〇
          </span>
          <h3 className="text-base font-bold text-[#000000] dark:text-white">
            SEMANTIC COLORS
          </h3>
        </div>
        <p className="text-sm text-[#848484] dark:text-gray-300">
          Status and feedback colors for interactive states,
          alerts, and notifications
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <ColorSwatch
            name="Success"
            hex="#10b981"
            description="Success states, confirmations, positive actions"
          />
          <ColorSwatch
            name="Warning"
            hex="#f59e0b"
            description="Warning messages, caution states"
          />
          <ColorSwatch
            name="Error"
            hex="#ef4444"
            description="Error states, destructive actions, alerts"
          />
          <ColorSwatch
            name="Info"
            hex="#3b82f6"
            description="Informational messages, help text"
          />
        </div>
      </div>

      {/* Semantic Color Scales */}
      <div className="space-y-6 bg-white dark:bg-[#2d2d2d] rounded-none border border-[#E5E5E5] dark:border-[#404040] p-6">
        <div>
          <h3 className="text-sm font-bold text-[#000000] dark:text-white mb-1">
            Semantic Color Variations
          </h3>
          <p className="text-xs text-[#848484] dark:text-gray-300">
            Lighter and darker shades for hover states,
            backgrounds, and borders
          </p>
        </div>

        <ColorScale
          title="Success Scale"
          baseColor="#10b981"
          colors={[
            { name: "Lighter", hex: "#6ee7b7" },
            { name: "Light", hex: "#34d399" },
            { name: "Base", hex: "#10b981" },
            { name: "Dark", hex: "#059669" },
            { name: "Darker", hex: "#047857" },
          ]}
        />

        <ColorScale
          title="Warning Scale"
          baseColor="#f59e0b"
          colors={[
            { name: "Lighter", hex: "#fcd34d" },
            { name: "Light", hex: "#fbbf24" },
            { name: "Base", hex: "#f59e0b" },
            { name: "Dark", hex: "#d97706" },
            { name: "Darker", hex: "#b45309" },
          ]}
        />

        <ColorScale
          title="Error Scale"
          baseColor="#ef4444"
          colors={[
            { name: "Lighter", hex: "#fca5a5" },
            { name: "Light", hex: "#f87171" },
            { name: "Base", hex: "#ef4444" },
            { name: "Dark", hex: "#dc2626" },
            { name: "Darker", hex: "#b91c1c" },
          ]}
        />

        <ColorScale
          title="Info Scale"
          baseColor="#3b82f6"
          colors={[
            { name: "Lighter", hex: "#93c5fd" },
            { name: "Light", hex: "#60a5fa" },
            { name: "Base", hex: "#3b82f6" },
            { name: "Dark", hex: "#2563eb" },
            { name: "Darker", hex: "#1d4ed8" },
          ]}
        />
      </div>

      {/* Color Usage Guidelines */}
      <div className="bg-[#F7F7F8] dark:bg-[#1a1a1a] rounded-none border border-[#E5E5E5] dark:border-[#404040] p-6">
        <h3 className="text-sm font-semibold mb-4 text-[#000000] dark:text-white">
          Color Usage Guidelines
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-[#000000] dark:text-white">
              Primary Usage
            </h4>
            <ul className="text-sm space-y-2 text-[#000000] dark:text-white">
              <li>
                •{" "}
                <span className="font-semibold">
                  Dark Blue (#26245c):
                </span>{" "}
                Button hover states, banner backgrounds, dark
                sections
              </li>
              <li>
                •{" "}
                <span className="font-semibold">
                  Light Blue (#5461a6):
                </span>{" "}
                Primary buttons, hyperlinks, interactive
                elements
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-[#000000] dark:text-white">
              Secondary Usage
            </h4>
            <ul className="text-sm space-y-2 text-[#000000] dark:text-white">
              <li>
                •{" "}
                <span className="font-semibold">
                  Green (#90ca42):
                </span>{" "}
                Accent color, highlights, dividers.
              </li>
            </ul>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-[#E5E5E5] dark:border-[#404040]">
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-[#000000] dark:text-white">
              Neutral Colors
            </h4>
            <ul className="text-sm space-y-2 text-[#000000] dark:text-white">
              <li>
                •{" "}
                <span className="font-semibold">
                  Grey (#848484):
                </span>{" "}
                Labels with circle prefix, secondary text, icons
              </li>
              <li>
                •{" "}
                <span className="font-semibold">
                  Light Blue BG (#dddeec):
                </span>{" "}
                Section banners, highlighted content areas
              </li>
              <li>
                •{" "}
                <span className="font-semibold">
                  Black (#000000):
                </span>{" "}
                Headings, body text, footers
              </li>
              <li>
                •{" "}
                <span className="font-semibold">
                  White (#FFFFFF):
                </span>{" "}
                Card backgrounds, text on dark backgrounds
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-[#000000] dark:text-white">
              Usage Notes
            </h4>
            <ul className="text-sm space-y-2 text-[#000000] dark:text-white">
              <li>
                •{" "}
                <span className="font-semibold">
                  Hyperlinks:
                </span>{" "}
                Always use #5461a6 for text links
              </li>
              <li>
                •{" "}
                <span className="font-semibold">Footers:</span>{" "}
                Always use black (#000000) background
              </li>
            </ul>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-[#E5E5E5] dark:border-[#404040]">
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-[#000000] dark:text-white">
              Surface Colors
            </h4>
            <ul className="text-sm space-y-2 text-[#000000] dark:text-white">
              <li>
                •{" "}
                <span className="font-semibold">
                  Light (50-200):
                </span>{" "}
                Page backgrounds, card surfaces, subtle dividers
              </li>
              <li>
                •{" "}
                <span className="font-semibold">
                  Medium (300-500):
                </span>{" "}
                Borders, disabled states, placeholder text
              </li>
              <li>
                •{" "}
                <span className="font-semibold">
                  Dark (600-900):
                </span>{" "}
                Text on light backgrounds, strong borders,
                overlays
              </li>
              <li>
                • <span className="font-semibold">Usage:</span>{" "}
                Provides neutral foundation without competing
                with brand colors
              </li>
            </ul>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-[#E5E5E5] dark:border-[#404040]">
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-[#000000] dark:text-white">
              Semantic Colors
            </h4>
            <ul className="text-sm space-y-2 text-[#000000] dark:text-white">
              <li>
                •{" "}
                <span className="font-semibold">
                  Success (#10b981):
                </span>{" "}
                Success messages, completed states, positive
                confirmations
              </li>
              <li>
                •{" "}
                <span className="font-semibold">
                  Warning (#f59e0b):
                </span>{" "}
                Warning alerts, caution messages, attention
                needed
              </li>
              <li>
                •{" "}
                <span className="font-semibold">
                  Error (#ef4444):
                </span>{" "}
                Error messages, validation failures, destructive
                actions
              </li>
              <li>
                •{" "}
                <span className="font-semibold">
                  Info (#3b82f6):
                </span>{" "}
                Informational content, help text, tips and
                guidance
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-[#000000] dark:text-white">
              Best Practices
            </h4>
            <ul className="text-sm space-y-2 text-[#000000] dark:text-white">
              <li>
                • Use semantic colors consistently across all
                components
              </li>
              <li>
                • Pair semantic colors with appropriate icons
                for accessibility
              </li>
              <li>
                • Use lighter shades for backgrounds, darker for
                borders
              </li>
              <li>
                • Ensure sufficient contrast (WCAG AA minimum)
                with text
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}