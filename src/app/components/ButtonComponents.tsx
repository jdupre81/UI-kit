import { ArrowLeft, ArrowDown } from "lucide-react";

interface ButtonExampleProps {
  label: string;
  description: string;
  children: React.ReactNode;
}

function ButtonExample({
  label,
  description,
  children,
}: ButtonExampleProps) {
  return (
    <div className="space-y-3">
      <div>
        <p className="text-sm">{label}</p>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
      <div className="flex flex-wrap gap-3">{children}</div>
    </div>
  );
}

export function ButtonComponents() {
  return (
    <section className="space-y-6">
      <div>
        <h3 className="text-lg font-bold mb-2 text-[#000000] dark:text-white">
          Buttons
        </h3>
        <p className="text-sm text-[#848484] dark:text-gray-300">
          Button system with interactive states. Try interacting
          with these buttons to see the hover, focus, and active
          states
        </p>
      </div>

      <div className="space-y-8">
        {/* Primary Button */}
        <ButtonExample
          label="Primary Button"
          description="Main call-to-action, primary interactions"
          className="text-black dark:text-white"
        >
          <button
            style={{ fontFamily: "Switzer, sans-serif" }}
            className="uppercase px-6 py-3 bg-[#5461a6] text-white rounded-none hover:bg-[#26245c] active:bg-[#4B4B7F] transition-all shadow-sm hover:shadow-md focus:outline-2 focus:outline-offset-2 focus:outline-[#5461a6]"
          >
            Normal (hover me)
          </button>
          <div>
            <button
              style={{ fontFamily: "Switzer, sans-serif" }}
              className="uppercase px-6 py-3 bg-[#4B4B7F] text-white rounded-none shadow-lg focus:outline-2 focus:outline-offset-2 focus:outline-[#5461a6]"
            >
              Hovered (press me)
            </button>
          </div>
          <button
            style={{ fontFamily: "Switzer, sans-serif" }}
            className="uppercase px-6 py-3 bg-[#999999] text-white rounded-none opacity-50 cursor-not-allowed"
          >
            Disabled
          </button>
        </ButtonExample>

        {/* Secondary Button */}
        <ButtonExample
          label="Secondary Button"
          description="Secondary actions, less prominent"
        >
          <button
            style={{ fontFamily: "Switzer, sans-serif" }}
            className="uppercase px-6 py-3 bg-white dark:bg-[#2d2d2d] text-[#5461a6] dark:text-[#93c5fd] border-2 border-[#5461a6] rounded-none hover:bg-[#F7F7F8] dark:bg-[#1a1a1a] active:bg-[#E5E5E5] transition-all"
          >
            Normal (hover me)
          </button>
          <button
            style={{ fontFamily: "Switzer, sans-serif" }}
            className="uppercase px-6 py-3 bg-[#E5E5E5] text-[#5461a6] dark:text-[#93c5fd] border-2 border-[#5461a6] rounded-none focus:outline-2 focus:outline-offset-2 focus:outline-[#5461a6]"
          >
            Hovered (press me)
          </button>
          <button
            style={{ fontFamily: "Switzer, sans-serif" }}
            className="uppercase px-6 py-3 bg-white dark:bg-[#2d2d2d] text-[#999999] dark:text-gray-400 border-2 border-[#E5E5E5] dark:border-[#404040] rounded-none opacity-50 cursor-not-allowed"
          >
            Disabled
          </button>
        </ButtonExample>

        {/* Text Button */}
        <ButtonExample
          label="Text Button"
          description="Minimal style, tertiary actions"
        >
          <button
            style={{ fontFamily: "Switzer, sans-serif" }}
            className="uppercase px-4 py-2 text-[#5461a6] dark:text-[#93c5fd] hover:bg-[#F7F7F8] dark:bg-[#1a1a1a] rounded-none transition-colors"
          >
            Normal
          </button>
          <button
            style={{ fontFamily: "Switzer, sans-serif" }}
            className="uppercase px-4 py-2 text-[#26245c] dark:text-[#26245c] bg-[#F7F7F8] dark:bg-[#1a1a1a] rounded-none"
          >
            Hover
          </button>
          <button
            style={{ fontFamily: "Switzer, sans-serif" }}
            className="uppercase px-4 py-2 text-[#999999] dark:text-gray-400 rounded-none cursor-not-allowed opacity-50"
          >
            Disabled
          </button>
        </ButtonExample>

        {/* Icon Button */}
        <ButtonExample
          label="Icon Button"
          description="Button with icon for enhanced context"
        >
          <button
            style={{ fontFamily: "Switzer, sans-serif" }}
            className="uppercase flex items-center gap-2 px-6 py-3 bg-[#5461a6] text-white rounded-none hover:bg-[#26245c] transition-all shadow-sm hover:shadow-md"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>

          <button
            style={{ fontFamily: "Switzer, sans-serif" }}
            className="uppercase uppercase text-lg flex items-center gap-2 px-6 py-3 bg-white dark:bg-[#2d2d2d] text-[#5461a6] dark:text-[#93c5fd] border-2 border-[#5461a6] rounded-none hover:bg-[#F7F7F8] dark:bg-[#1a1a1a] active:bg-[#E5E5E5] transition-all"
          >
            Continue
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </button>
        </ButtonExample>

        {/* Round Icon Button */}
        <ButtonExample
          label="Round Icon Button"
          description="Floating actions or compact UI elements"
        >
          <button
            style={{ fontFamily: "Switzer, sans-serif" }}
            className="uppercase w-14 h-14 bg-[#5461a6] text-white rounded-full flex items-center justify-center hover:bg-[#26245c] active:scale-95 transition-all shadow-lg hover:shadow-xl"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </ButtonExample>

        {/* Size Variants */}
        <ButtonExample
          label="Size Variants"
          description="Different button sizes for various contexts"
        >
          <button
            style={{ fontFamily: "Switzer, sans-serif" }}
            className="btn-xs uppercase px-4 py-2 bg-[#5461a6] text-white rounded-none hover:bg-[#26245c] transition-colors"
          >
            Button Small
          </button>
          <button
            style={{ fontFamily: "Switzer, sans-serif" }}
            className="uppercase px-6 py-3 bg-[#5461a6] text-white rounded-none hover:bg-[#26245c] transition-colors"
          >
            Medium
          </button>
          <button
            style={{ fontFamily: "Switzer, sans-serif" }}
            className="btn btn-lg uppercase px-8 py-4 text-lg bg-[#5461a6] text-white rounded-none hover:bg-[#26245c] transition-colors"
          >
            Large
          </button>
        </ButtonExample>
      </div>

      <div className="bg-[#F7F7F8] dark:bg-[#1a1a1a] rounded-none border border-[#E5E5E5] dark:border-[#404040] p-6 mt-8">
        <h3 className="text-sm font-semibold mb-3 text-[#000000] dark:text-white">
          Button Guidelines
        </h3>
        <ul className="text-sm space-y-2 text-[#666666]dark:text-white">
          <li>
            • All button labels must be displayed in uppercase.
          </li>
          <li>
            • Use primary buttons for the main action on a page
          </li>
          <li>
            • Use outline buttons for subtle call-to-actions or
            tertiary actions
          </li>
          <li>
            • Maintain min-width of 120px for text buttons
            (except icon-only)
          </li>
          <li>
            • Ensure a minimum touch target size of 44 × 44 px
            for mobile interactions.
          </li>
          <li>
            • Apply a 2px focus outline in #5461A6 for keyboard
            accessibility.
          </li>
          <li>
            • Use Switzer Regular font for all button text
          </li>
          <li>
            • Maintain consistent spacing and sizing across
            button variants (Small, Medium, and Large).
          </li>
        </ul>
      </div>
    </section>
  );
}