interface InputExampleProps {
  label: string;
  description: string;
  children: React.ReactNode;
}

function InputExample({ label, description, children }: InputExampleProps) {
  return (
    <div className="space-y-3">
      <div>
        <p className="text-sm">{label}</p>
        <p className="text-xs text-[#666666]">{description}</p>
      </div>
      <div className="space-y-3">
        {children}
      </div>
    </div>
  );
}

export function InputComponents() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="mb-2">4. Inputs</h2>
        <p className="text-sm text-[#666666]">Form input components with validation states</p>
      </div>

      <div className="space-y-8">
        {/* Text Input */}
        <InputExample
          label="Text Input"
          description="Standard text field for names and general text"
        >
          <div className="max-w-md">
            <label className="block text-[14px] font-semibold text-[#000000] dark:text-white mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 bg-white dark:bg-[#2d2d2d] border border-[#E5E5E5] dark:border-[#404040] rounded-none focus:outline-none focus:ring-2 focus:ring-[#6B6B9F] focus:border-transparent transition-all text-[#000000] dark:text-white placeholder:text-[#999999] dark:text-gray-400"
            />
            <p className="text-xs text-[#666666] mt-1">This field is required</p>
          </div>
        </InputExample>

        {/* Email Input */}
        <InputExample
          label="Email Input"
          description="Email field with validation"
        >
          <div className="max-w-md">
            <label className="block text-[14px] font-semibold text-[#000000] dark:text-white mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full px-4 py-3 bg-white dark:bg-[#2d2d2d] border border-[#E5E5E5] dark:border-[#404040] rounded-none focus:outline-none focus:ring-2 focus:ring-[#6B6B9F] focus:border-transparent transition-all text-[#000000] dark:text-white placeholder:text-[#999999] dark:text-gray-400"
            />
          </div>
        </InputExample>

        {/* Textarea */}
        <InputExample
          label="Textarea"
          description="Multi-line text input for longer content"
        >
          <div className="max-w-md">
            <label className="block text-[14px] font-semibold text-[#000000] dark:text-white mb-2">
              Message
            </label>
            <textarea
              placeholder="Enter your message..."
              rows={4}
              className="w-full px-4 py-3 bg-white dark:bg-[#2d2d2d] border border-[#E5E5E5] dark:border-[#404040] rounded-none focus:outline-none focus:ring-2 focus:ring-[#6B6B9F] focus:border-transparent transition-all text-[#000000] dark:text-white placeholder:text-[#999999] dark:text-gray-400 resize-none"
            />
          </div>
        </InputExample>

        {/* Input States */}
        <InputExample
          label="Input States"
          description="Normal, Focus, Error, Success, Disabled"
        >
          <div className="max-w-md space-y-4">
            <div>
              <label className="block text-[14px] font-semibold text-[#000000] dark:text-white mb-2">
                Normal State
              </label>
              <input
                type="text"
                placeholder="Default input"
                className="w-full px-4 py-3 bg-white dark:bg-[#2d2d2d] border border-[#E5E5E5] dark:border-[#404040] rounded-none focus:outline-none text-[#000000] dark:text-white placeholder:text-[#999999] dark:text-gray-400"
              />
            </div>

            <div>
              <label className="block text-[14px] font-semibold text-[#000000] dark:text-white mb-2">
                Focus State
              </label>
              <input
                type="text"
                placeholder="Focused input"
                className="w-full px-4 py-3 bg-white dark:bg-[#2d2d2d] border border-[#E5E5E5] dark:border-[#404040] rounded-none ring-2 ring-[#6B6B9F] text-[#000000] dark:text-white"
              />
            </div>

            <div>
              <label className="block text-[14px] font-semibold text-[#d32f2f] mb-2">
                Error State
              </label>
              <input
                type="text"
                placeholder="Invalid input"
                className="w-full px-4 py-3 bg-white dark:bg-[#2d2d2d] border-2 border-[#d32f2f] rounded-none focus:outline-none focus:ring-2 focus:ring-[#d32f2f] text-[#000000] dark:text-white"
              />
              <p className="text-xs text-[#d32f2f] mt-1 flex items-center gap-1">
                <span>✕</span>
                <span>This field is required</span>
              </p>
            </div>

            <div>
              <label className="block text-[14px] font-semibold text-[#2e7d32] mb-2">
                Success State
              </label>
              <input
                type="text"
                value="valid@email.com"
                className="w-full px-4 py-3 bg-white dark:bg-[#2d2d2d] border-2 border-[#2e7d32] rounded-none focus:outline-none focus:ring-2 focus:ring-[#2e7d32] text-[#000000] dark:text-white"
              />
              <p className="text-xs text-[#2e7d32] mt-1 flex items-center gap-1">
                <span>✓</span>
                <span>Input is valid</span>
              </p>
            </div>

            <div>
              <label className="block text-[14px] font-semibold text-[#999999] dark:text-gray-400 mb-2">
                Disabled State
              </label>
              <input
                type="text"
                placeholder="Disabled field"
                disabled
                className="w-full px-4 py-3 bg-[#F7F7F8] dark:bg-[#1a1a1a] border border-[#E5E5E5] dark:border-[#404040] rounded-none opacity-60 cursor-not-allowed text-[#999999] dark:text-gray-400"
              />
            </div>
          </div>
        </InputExample>

        {/* Select Dropdown */}
        <InputExample
          label="Select Dropdown"
          description="Dropdown selection field"
        >
          <div className="max-w-md">
            <label className="block text-[14px] font-semibold text-[#000000] dark:text-white mb-2">
              Country
            </label>
            <select className="w-full px-4 py-3 bg-white dark:bg-[#2d2d2d] border border-[#E5E5E5] dark:border-[#404040] rounded-none focus:outline-none focus:ring-2 focus:ring-[#6B6B9F] focus:border-transparent transition-all text-[#000000] dark:text-white cursor-pointer">
              <option value="">Select a country</option>
              <option value="ch">Switzerland</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="de">Germany</option>
            </select>
          </div>
        </InputExample>

        {/* Form Example */}
        <InputExample
          label="Complete Form"
          description="Full form with multiple input types"
        >
          <div className="max-w-md bg-white dark:bg-[#2d2d2d] p-6 rounded-none border border-[#E5E5E5] dark:border-[#404040] shadow-sm space-y-4">
            <div>
              <label className="block text-[14px] font-semibold text-[#000000] dark:text-white mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 bg-white dark:bg-[#2d2d2d] border border-[#E5E5E5] dark:border-[#404040] rounded-none focus:outline-none focus:ring-2 focus:ring-[#6B6B9F] text-[#000000] dark:text-white placeholder:text-[#999999] dark:text-gray-400"
              />
            </div>

            <div>
              <label className="block text-[14px] font-semibold text-[#000000] dark:text-white mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full px-4 py-3 bg-white dark:bg-[#2d2d2d] border border-[#E5E5E5] dark:border-[#404040] rounded-none focus:outline-none focus:ring-2 focus:ring-[#6B6B9F] text-[#000000] dark:text-white placeholder:text-[#999999] dark:text-gray-400"
              />
            </div>

            <div>
              <label className="block text-[14px] font-semibold text-[#000000] dark:text-white mb-2">
                Message
              </label>
              <textarea
                placeholder="Your message"
                rows={3}
                className="w-full px-4 py-3 bg-white dark:bg-[#2d2d2d] border border-[#E5E5E5] dark:border-[#404040] rounded-none focus:outline-none focus:ring-2 focus:ring-[#6B6B9F] text-[#000000] dark:text-white placeholder:text-[#999999] dark:text-gray-400 resize-none"
              />
            </div>

            <button className="w-full px-6 py-3 bg-[#5461a6] text-white rounded-none hover:bg-[#26245c] transition-colors font-medium shadow-sm hover:shadow-md">
              Submit
            </button>
          </div>
        </InputExample>
      </div>

      <div className="bg-[#F7F7F8] dark:bg-[#1a1a1a] rounded-none border border-[#E5E5E5] dark:border-[#404040] p-6 mt-8">
        <h3 className="text-sm font-semibold mb-3 text-[#000000] dark:text-white">Input Guidelines</h3>
        <ul className="text-sm space-y-2 text-[#666666]">
          <li>• Always provide clear labels for accessibility</li>
          <li>• Use placeholder text for format examples, not instructions</li>
          <li>• Provide immediate validation feedback (error/success states)</li>
          <li>• Maintain consistent padding (12px horizontal, 12px vertical)</li>
          <li>• Focus ring should be #6B6B9F at 2px width</li>
          <li>• Helper text should be 12px, positioned below the input</li>
        </ul>
      </div>
    </section>
  );
}