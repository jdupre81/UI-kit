import { Check, X } from "lucide-react";

interface ExampleProps {
  children: React.ReactNode;
  label: string;
  type: "do" | "dont";
}

function Example({ children, label, type }: ExampleProps) {
  return (
    <div className="space-y-2">
      <div className={`rounded-none border-2 p-4 ${
        type === "do"
          ? "border-[#2e7d32] bg-[#2e7d32] bg-opacity-5"
          : "border-[#d32f2f] bg-[#d32f2f] bg-opacity-5"
      }`}>
        {children}
      </div>
      <div className={`flex items-center gap-2 text-sm ${
        type === "do" ? "text-[#2e7d32]" : "text-[#d32f2f]"
      }`}>
        {type === "do" ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
        <span>{label}</span>
      </div>
    </div>
  );
}

export function DosAndDonts() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="mb-2">8. Design Do's & Don'ts</h2>
        <p className="text-sm text-[#666666]">Best practices and common mistakes to avoid</p>
      </div>

      <div className="space-y-12">
        {/* Typography Do's & Don'ts */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#000000] dark:text-white">
            Typography
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Example type="do" label="Use Space Grotesk for headings">
              <div>
                <h3 className="text-2xl font-bold text-[#000000] dark:text-white">
                  Data Science Research
                </h3>
                <p className="text-sm text-[#666666] mt-2">
                  Using proper font hierarchy creates clear visual structure
                </p>
              </div>
            </Example>

            <Example type="dont" label="Don't mix too many font families">
              <div>
                <h3 className="text-2xl font-bold text-[#000000] dark:text-white" style={{ fontFamily: 'Times New Roman, serif' }}>
                  Data Science Research
                </h3>
                <p className="text-sm text-[#666666] mt-2" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                  Using random fonts breaks visual consistency
                </p>
              </div>
            </Example>

            <Example type="do" label="Maintain proper text hierarchy">
              <div className="space-y-3">
                <h4 className="text-lg font-bold text-[#000000] dark:text-white">Primary Heading</h4>
                <h5 className="text-base font-semibold text-[#000000] dark:text-white">Secondary Heading</h5>
                <p className="text-sm text-[#666666]">Body text with appropriate sizing</p>
              </div>
            </Example>

            <Example type="dont" label="Don't use similar sizes for different hierarchy levels">
              <div className="space-y-3">
                <h4 className="text-base font-bold text-[#000000] dark:text-white">Primary Heading</h4>
                <h5 className="text-base font-semibold text-[#000000] dark:text-white">Secondary Heading</h5>
                <p className="text-base text-[#666666]">Body text same size as headings</p>
              </div>
            </Example>
          </div>
        </div>

        {/* Color Do's & Don'ts */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#000000] dark:text-white">
            Color Usage
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Example type="do" label="Use brand colors consistently">
              <div className="flex gap-2">
                <button style={{ fontFamily: 'Switzer, sans-serif' }} className="uppercase px-4 py-2 bg-[#5461a6] text-white rounded-none text-sm">
                  Primary Action
                </button>
                <button style={{ fontFamily: 'Switzer, sans-serif' }} className="uppercase px-4 py-2 bg-white dark:bg-[#2d2d2d] text-[#5461a6] dark:text-[#93c5fd] border-2 border-[#5461a6] rounded-none text-sm">
                  Secondary
                </button>
              </div>
            </Example>

            <Example type="dont" label="Don't use arbitrary colors">
              <div className="flex gap-2">
                <button style={{ fontFamily: 'Switzer, sans-serif' }} className="uppercase px-4 py-2 bg-orange-500 text-white rounded-none text-sm">
                  Primary Action
                </button>
                <button style={{ fontFamily: 'Switzer, sans-serif' }} className="uppercase px-4 py-2 bg-pink-400 text-white rounded-none text-sm">
                  Secondary
                </button>
              </div>
            </Example>

            <Example type="do" label="Ensure proper contrast for accessibility">
              <div className="bg-[#5461a6] p-4 rounded-none">
                <p className="text-white">
                  White text on purple background (WCAG AA compliant)
                </p>
              </div>
            </Example>

            <Example type="dont" label="Don't use low contrast combinations">
              <div className="bg-[#E5E5E5] p-4 rounded-none">
                <p className="text-[#999999] dark:text-gray-400">
                  Light gray text on light background (poor contrast)
                </p>
              </div>
            </Example>
          </div>
        </div>

        {/* Spacing Do's & Don'ts */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#000000] dark:text-white">
            Spacing & Layout
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Example type="do" label="Use consistent spacing scale">
              <div className="space-y-4">
                <div className="bg-white dark:bg-[#2d2d2d] border border-[#E5E5E5] dark:border-[#404040] p-6 rounded-none">
                  <h4 className="font-semibold mb-2">Card Title</h4>
                  <p className="text-sm text-[#666666]">Content with proper spacing</p>
                </div>
                <div className="bg-white dark:bg-[#2d2d2d] border border-[#E5E5E5] dark:border-[#404040] p-6 rounded-none">
                  <h4 className="font-semibold mb-2">Another Card</h4>
                  <p className="text-sm text-[#666666]">Consistent spacing throughout</p>
                </div>
              </div>
            </Example>

            <Example type="dont" label="Don't use random spacing values">
              <div className="space-y-2">
                <div className="bg-white dark:bg-[#2d2d2d] border border-[#E5E5E5] dark:border-[#404040] p-2 rounded-none">
                  <h4 className="font-semibold mb-1">Card Title</h4>
                  <p className="text-sm text-[#666666]">Cramped spacing</p>
                </div>
                <div className="bg-white dark:bg-[#2d2d2d] border border-[#E5E5E5] dark:border-[#404040] p-10 rounded-none">
                  <h4 className="font-semibold mb-6">Another Card</h4>
                  <p className="text-sm text-[#666666]">Excessive spacing</p>
                </div>
              </div>
            </Example>

            <Example type="do" label="Align elements to grid">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#5461a6] h-16 rounded-none"></div>
                <div className="bg-[#5461a6] h-16 rounded-none"></div>
                <div className="bg-[#5461a6] h-16 rounded-none"></div>
              </div>
            </Example>

            <Example type="dont" label="Don't misalign elements">
              <div className="space-y-2">
                <div className="bg-[#5461a6] h-12 rounded-none w-1/3"></div>
                <div className="bg-[#5461a6] h-12 rounded-none w-2/3 ml-8"></div>
                <div className="bg-[#5461a6] h-12 rounded-none w-1/2 ml-4"></div>
              </div>
            </Example>
          </div>
        </div>

        {/* Button Do's & Don'ts */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#000000] dark:text-white">
            Buttons & Interactive Elements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Example type="do" label="Use clear, action-oriented labels">
              <div className="flex gap-3">
                <button style={{ fontFamily: 'Switzer, sans-serif' }} className="uppercase px-6 py-3 bg-[#5461a6] text-white rounded-none">
                  Download Report
                </button>
                <button style={{ fontFamily: 'Switzer, sans-serif' }} className="uppercase px-6 py-3 bg-[#5461a6] text-white rounded-none">
                  Contact Us
                </button>
              </div>
            </Example>

            <Example type="dont" label="Don't use vague button text">
              <div className="flex gap-3">
                <button style={{ fontFamily: 'Switzer, sans-serif' }} className="uppercase px-6 py-3 bg-[#5461a6] text-white rounded-none">
                  Click Here
                </button>
                <button style={{ fontFamily: 'Switzer, sans-serif' }} className="uppercase px-6 py-3 bg-[#5461a6] text-white rounded-none">
                  Submit
                </button>
              </div>
            </Example>

            <Example type="do" label="Show clear hover states">
              <button style={{ fontFamily: 'Switzer, sans-serif' }} className="uppercase px-6 py-3 bg-[#5461a6] hover:bg-[#26245c] text-white rounded-none transition-colors">
                Hover over me
              </button>
            </Example>

            <Example type="dont" label="Don't hide interactive feedback">
              <button style={{ fontFamily: 'Switzer, sans-serif' }} className="uppercase px-6 py-3 bg-[#5461a6] text-white rounded-none cursor-pointer">
                No hover state
              </button>
            </Example>
          </div>
        </div>

        {/* Card & Component Do's & Don'ts */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#000000] dark:text-white">
            Cards & Components
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Example type="do" label="Group related content in cards">
              <div className="bg-white dark:bg-[#2d2d2d] border border-[#E5E5E5] dark:border-[#404040] rounded-none p-5 space-y-3">
                <h4 className="font-semibold text-[#000000] dark:text-white">Research Project</h4>
                <p className="text-sm text-[#666666]">Machine learning for climate modeling</p>
                <div className="flex gap-2 text-xs text-[#999999] dark:text-gray-400">
                  <span>2026</span>
                  <span>•</span>
                  <span>Active</span>
                </div>
              </div>
            </Example>

            <Example type="dont" label="Don't overcrowd cards with unrelated content">
              <div className="bg-white dark:bg-[#2d2d2d] border border-[#E5E5E5] dark:border-[#404040] rounded-none p-5 space-y-1">
                <h4 className="font-semibold text-[#000000] dark:text-white text-xs">Research</h4>
                <p className="text-xs text-[#666666]">ML climate</p>
                <p className="text-xs text-[#000000] dark:text-white">Team: 5 people</p>
                <p className="text-xs text-[#000000] dark:text-white">Budget: CHF 500k</p>
                <p className="text-xs text-[#999999] dark:text-gray-400">Status: Active Location: Zurich Start: Jan</p>
              </div>
            </Example>

            <Example type="do" label="Use consistent border radius">
              <div className="space-y-3">
                <div className="bg-[#5461a6] h-12 rounded-none"></div>
                <div className="bg-[#5B7FBF] h-12 rounded-none"></div>
                <div className="bg-[#2E3B5C] h-12 rounded-none"></div>
              </div>
            </Example>

            <Example type="dont" label="Don't mix different border styles">
              <div className="space-y-3">
                <div className="bg-[#5461a6] h-12 rounded-none"></div>
                <div className="bg-[#5B7FBF] h-12 rounded-full"></div>
                <div className="bg-[#2E3B5C] h-12 rounded-3xl"></div>
              </div>
            </Example>
          </div>
        </div>

        {/* Content & Imagery Do's & Don'ts */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#000000] dark:text-white">
            Content & Imagery
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Example type="do" label="Use high-quality images with purpose">
              <div className="bg-gradient-to-br from-[#6B6B9F] to-[#5B7FBF] rounded-none h-32 flex items-center justify-center">
                <span className="text-white text-sm">Relevant, high-quality image</span>
              </div>
            </Example>

            <Example type="dont" label="Don't use low-quality or stretched images">
              <div className="bg-gray-300 rounded-none h-32 flex items-center justify-center">
                <span className="text-gray-600 text-xs">Pixelated or stretched image</span>
              </div>
            </Example>

            <Example type="do" label="Write clear, concise copy">
              <div className="space-y-2">
                <h4 className="font-semibold text-[#000000] dark:text-white">Join Our Workshop</h4>
                <p className="text-sm text-[#666666]">
                  Learn cutting-edge data science techniques from industry experts.
                </p>
              </div>
            </Example>

            <Example type="dont" label="Don't use overly long or vague text">
              <div className="space-y-2">
                <h4 className="font-semibold text-[#000000] dark:text-white">Event</h4>
                <p className="text-sm text-[#666666]">
                  This is an opportunity to potentially participate in an event where various topics might be covered and you could learn things.
                </p>
              </div>
            </Example>
          </div>
        </div>
      </div>

      {/* Summary Guidelines */}
      <div className="bg-gradient-to-r from-[#2E3B5C] to-[#6B6B9F] rounded-none p-8 text-white mt-12">
        <h3 className="text-xl font-bold mb-4">
          Key Principles to Remember
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-semibold opacity-90">Design Consistency</h4>
            <ul className="text-sm space-y-2 opacity-80">
              <li>• Use the established color palette</li>
              <li>• Maintain spacing system</li>
              <li>• Follow typography hierarchy</li>
              <li>• Keep component styles uniform</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold opacity-90">User Experience</h4>
            <ul className="text-sm space-y-2 opacity-80">
              <li>• Ensure accessibility (WCAG AA)</li>
              <li>• Provide clear feedback on interactions</li>
              <li>• Optimize for mobile responsiveness</li>
              <li>• Write clear, action-oriented content</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
