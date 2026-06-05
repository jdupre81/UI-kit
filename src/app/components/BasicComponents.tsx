export function FormInputs() {
  return (
    <section className="space-y-6">
      <div>
        <h3 className="text-lg font-bold text-[#000000] dark:text-white mb-2">Form Inputs</h3>
        <p className="text-sm text-[#848484] dark:text-gray-300">
          Standard text inputs, textareas, and select dropdowns
        </p>
      </div>

      <div className="space-y-8">
        {/* Text Input */}
        <div className="space-y-3">
          <p className="text-sm font-semibold text-[#000000] dark:text-white">Text Input</p>
          <div className="bg-white dark:bg-[#2d2d2d] rounded-none border border-[#E5E5E5] dark:border-[#404040] p-6">
            <div className="max-w-md space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#000000] dark:text-white mb-2">
                  Label
                </label>
                <input
                  type="text"
                  placeholder="Enter text..."
                  className="w-full px-4 py-2 border border-[#E5E5E5] dark:border-[#404040] bg-white dark:bg-[#1a1a1a] text-[#000000] dark:text-white placeholder-[#848484] dark:placeholder-gray-500 focus:outline-none focus:border-[#5461a6] dark:focus:border-[#93c5fd] transition-colors"
                  style={{ fontFamily: "Switzer, sans-serif", borderRadius: "4px" }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#000000] dark:text-white mb-2">
                  Disabled State
                </label>
                <input
                  type="text"
                  placeholder="Disabled input"
                  disabled
                  className="w-full px-4 py-2 border border-[#E5E5E5] dark:border-[#404040] bg-[#F7F7F8] dark:bg-[#2d2d2d] text-[#848484] dark:text-gray-500 cursor-not-allowed"
                  style={{ fontFamily: "Switzer, sans-serif", borderRadius: "4px"}}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Textarea */}
        <div className="space-y-3">
          <p className="text-sm font-semibold text-[#000000] dark:text-white">Textarea</p>
          <div className="bg-white dark:bg-[#2d2d2d] rounded-none border border-[#E5E5E5] dark:border-[#404040] p-6">
            <div className="max-w-md">
              <label className="block text-sm font-medium text-[#000000] dark:text-white mb-2">
                Description
              </label>
              <textarea
                rows={4}
                placeholder="Enter description..."
                className="w-full px-4 py-2 border border-[#E5E5E5] dark:border-[#404040] bg-white dark:bg-[#1a1a1a] text-[#000000] dark:text-white placeholder-[#848484] dark:placeholder-gray-400 focus:outline-none focus:border-[#5461a6] dark:focus:border-[#93c5fd] transition-colors resize-vertical"
                style={{ fontFamily: "Switzer, sans-serif", borderRadius: "4px" }}
              />
            </div>
          </div>
        </div>

        {/* Select Dropdown */}
        <div className="space-y-3">
          <p className="text-sm font-semibold text-[#000000] dark:text-white">Select Dropdown</p>
          <div className="bg-white dark:bg-[#2d2d2d] rounded-none border border-[#E5E5E5] dark:border-[#404040] p-6">
            <div className="max-w-md">
              <label className="block text-sm font-medium text-[#000000] dark:text-white mb-2">
                Category
              </label>
              <select
                className="w-full px-4 py-2 border border-[#E5E5E5] dark:border-[#404040] bg-white dark:bg-[#1a1a1a] text-[#000000] dark:text-white focus:outline-none focus:border-[#5461a6] dark:focus:border-[#93c5fd] transition-colors"
                style={{ fontFamily: "Switzer, sans-serif", borderRadius: "4px" }}
              >
                <option>Select an option</option>
                <option>Research</option>
                <option>Development</option>
                <option>Innovation</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Checkboxes() {
  return (
    <section className="space-y-6">
      <div>
        <h3 className="text-lg font-bold text-[#000000] dark:text-white mb-2">Checkboxes</h3>
        <p className="text-sm text-[#848484] dark:text-gray-300">
          Standard checkbox components with different states
        </p>
      </div>

      <div className="bg-white dark:bg-[#2d2d2d] rounded-none border border-[#E5E5E5] dark:border-[#404040] p-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="check1"
              className="w-5 h-5 border-2 border-[#E5E5E5] dark:border-[#404040] text-[#5461a6] focus:ring-2 focus:ring-[#5461a6] dark:focus:ring-[#93c5fd] focus:ring-offset-0 bg-white dark:bg-[#1a1a1a] cursor-pointer"
              style={{ borderRadius: "4px" }}
            />
            <label
              htmlFor="check1"
              className="text-sm text-[#000000] dark:text-white cursor-pointer"
              style={{ fontFamily: "Switzer, sans-serif" }}
            >
              Unchecked checkbox
            </label>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="check2"
              defaultChecked
              className="w-5 h-5 border-2 border-[#E5E5E5] dark:border-[#404040] text-[#5461a6] focus:ring-2 focus:ring-[#5461a6] dark:focus:ring-[#93c5fd] focus:ring-offset-0 bg-white dark:bg-[#1a1a1a] cursor-pointer"
              style={{ borderRadius: "4px" }}
            />
            <label
              htmlFor="check2"
              className="text-sm text-[#000000] dark:text-white cursor-pointer"
              style={{ fontFamily: "Switzer, sans-serif" }}
            >
              Checked checkbox
            </label>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="check3"
              disabled
              className="w-5 h-5 border-2 border-[#E5E5E5] dark:border-[#404040] bg-[#F7F7F8] dark:bg-[#2d2d2d] cursor-not-allowed opacity-50"
              style={{ borderRadius: "4px" }}
            />
            <label
              htmlFor="check3"
              className="text-sm text-[#848484] dark:text-gray-500 cursor-not-allowed"
              style={{ fontFamily: "Switzer, sans-serif" }}
            >
              Disabled checkbox
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Toggles() {
  return (
    <section className="space-y-6">
      <div>
        <h3 className="text-lg font-bold text-[#000000] dark:text-white mb-2">Toggle Switches</h3>
        <p className="text-sm text-[#848484] dark:text-gray-300">
          Toggle switches for binary on/off states
        </p>
      </div>

      <div className="bg-white dark:bg-[#2d2d2d] rounded-none border border-[#E5E5E5] dark:border-[#404040] p-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between max-w-md">
            <span className="text-sm text-[#000000] dark:text-white" style={{ fontFamily: "Switzer, sans-serif" }}>
              Enable notifications
            </span>
            <label className="relative inline-block w-12 h-6 cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-12 h-6 bg-[#E5E5E5] dark:bg-[#404040] rounded-full peer peer-checked:bg-[#5461a6] dark:peer-checked:bg-[#93c5fd] transition-colors"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
            </label>
          </div>

          <div className="flex items-center justify-between max-w-md">
            <span className="text-sm text-[#000000] dark:text-white" style={{ fontFamily: "Switzer, sans-serif" }}>
              Auto-save changes
            </span>
            <label className="relative inline-block w-12 h-6 cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-12 h-6 bg-[#E5E5E5] dark:bg-[#404040] rounded-full peer peer-checked:bg-[#5461a6] dark:peer-checked:bg-[#93c5fd] transition-colors"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
            </label>
          </div>

          <div className="flex items-center justify-between max-w-md opacity-50">
            <span className="text-sm text-[#848484] dark:text-gray-500" style={{ fontFamily: "Switzer, sans-serif" }}>
              Disabled toggle
            </span>
            <label className="relative inline-block w-12 h-6 cursor-not-allowed">
              <input type="checkbox" disabled className="sr-only peer" />
              <div className="w-12 h-6 bg-[#E5E5E5] dark:bg-[#404040] rounded-full"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProgressIndicators() {
  return (
    <section className="space-y-6">
      <div>
        <h3 className="text-lg font-bold text-[#000000] dark:text-white mb-2">Progress Indicators</h3>
        <p className="text-sm text-[#848484] dark:text-gray-300">
          Progress bars and loading indicators
        </p>
      </div>

      <div className="space-y-8">
        {/* Progress Bars */}
        <div className="space-y-3">
          <p className="text-sm font-semibold text-[#000000] dark:text-white">Progress Bars</p>
          <div className="bg-white dark:bg-[#2d2d2d] rounded-none border border-[#E5E5E5] dark:border-[#404040] p-6">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-[#000000] dark:text-white" style={{ fontFamily: "Switzer, sans-serif" }}>
                    Progress (25%)
                  </span>
                  <span className="text-sm text-[#848484] dark:text-gray-300" style={{ fontFamily: "Switzer, sans-serif" }}>
                    25%
                  </span>
                </div>
                <div className="w-full h-2 bg-[#E5E5E5] dark:bg-[#404040] overflow-hidden" style={{ borderRadius: "4px" }}>
                  <div className="h-full bg-[#5461a6] dark:bg-[#93c5fd] transition-all duration-300" style={{ width: "25%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-[#000000] dark:text-white" style={{ fontFamily: "Switzer, sans-serif" }}>
                    Progress (50%)
                  </span>
                  <span className="text-sm text-[#848484] dark:text-gray-300" style={{ fontFamily: "Switzer, sans-serif" }}>
                    50%
                  </span>
                </div>
                <div className="w-full h-2 bg-[#E5E5E5] dark:bg-[#404040] overflow-hidden" style={{ borderRadius: "4px" }}>
                  <div className="h-full bg-[#5461a6] dark:bg-[#93c5fd] transition-all duration-300" style={{ width: "50%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-[#000000] dark:text-white" style={{ fontFamily: "Switzer, sans-serif" }}>
                    Progress (75%)
                  </span>
                  <span className="text-sm text-[#848484] dark:text-gray-300" style={{ fontFamily: "Switzer, sans-serif" }}>
                    75%
                  </span>
                </div>
                <div className="w-full h-2 bg-[#E5E5E5] dark:bg-[#404040] overflow-hidden" style={{ borderRadius: "4px" }}>
                  <div className="h-full bg-[#5461a6] dark:bg-[#93c5fd] transition-all duration-300" style={{ width: "75%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-[#000000] dark:text-white" style={{ fontFamily: "Switzer, sans-serif" }}>
                    Complete
                  </span>
                  <span className="text-sm text-[#848484] dark:text-gray-300" style={{ fontFamily: "Switzer, sans-serif" }}>
                    100%
                  </span>
                </div>
                <div className="w-full h-2 bg-[#E5E5E5] dark:bg-[#404040] overflow-hidden" style={{ borderRadius: "4px" }}>
                  <div className="h-full bg-[#90ca42] transition-all duration-300" style={{ width: "100%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spinner */}
        <div className="space-y-3">
          <p className="text-sm font-semibold text-[#000000] dark:text-white">Loading Spinner</p>
          <div className="bg-white dark:bg-[#2d2d2d] rounded-none border border-[#E5E5E5] dark:border-[#404040] p-6">
            <div className="flex items-center justify-center gap-8">
              <div className="w-8 h-8 border-4 border-[#E5E5E5] dark:border-[#404040] border-t-[#5461a6] dark:border-t-[#93c5fd] rounded-full animate-spin"></div>
              <div className="w-10 h-10 border-4 border-[#E5E5E5] dark:border-[#404040] border-t-[#5461a6] dark:border-t-[#93c5fd] rounded-full animate-spin"></div>
              <div className="w-12 h-12 border-4 border-[#E5E5E5] dark:border-[#404040] border-t-[#5461a6] dark:border-t-[#93c5fd] rounded-full animate-spin"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
