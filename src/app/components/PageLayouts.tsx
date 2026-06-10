import {
  ArrowRight,
  Beaker,
  BookOpen,
  Users,
  Lightbulb,
  GraduationCap,
  Globe,
  Rocket,
  Database,
  Cpu,
  Circle,
  Check,
  MapPin,
  User,
} from "lucide-react";

//import bgPattern3 from "src/imports/bg-pattern-3.png";

export function PageLayouts() {
  return (
    <section className="space-y-12">
      {/* Hero Section: Image + Content */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-[#000000] dark:text-white">
          HERO SECTION: IMAGE + CONTENT
        </h3>
        <p className="text-sm text-[#848484] dark:text-gray-300">
          Two-column layout with image and content, commonly
          used for landing pages
        </p>

        <div className="bg-white dark:bg-[#2d2d2d] rounded-none border border-[#E5E5E5] dark:border-[#404040] overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div
              className="h-96 bg-gradient-to-br from-[#26245c] to-[#5461a6] flex items-center justify-center"
              style={{
                //backgroundImage: `url(${bgPattern3})`,
                backgroundSize: "cover",
                backgroundPosition: "left center",
                backgroundBlendMode: "overlay",
              }}
            />

            <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#848484] dark:text-gray-300 text-sm font-bold">
                  〇
                </span>
                <p className="text-sm font-medium text-[#848484] dark:text-gray-300 uppercase tracking-wide">
                  LOREM IPSUM
                </p>
              </div>
              <h2 className="text-3xl font-bold text-[#000000] dark:text-black mb-4">
                Lorem Ipsum Dolor Sit Amet Consectetur
              </h2>
              <p className="text-base text-[#000000] dark:text-black mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <button
                style={{ fontFamily: "Switzer, sans-serif" }}
                className="uppercase px-6 py-3 bg-[#5461a6] text-white rounded-none hover:bg-[#26245c] transition-colors inline-flex items-center gap-2 self-start"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Grid: 2-Column */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-[#000000] dark:text-white">
          FEATURE GRID: 2-COLUMN
        </h3>
        <p className="text-sm text-[#848484] dark:text-gray-300">
          Two-column grid for detailed feature showcases or
          side-by-side comparisons
        </p>

        <div className="bg-[#dddeec] rounded-none p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-[#2d2d2d] rounded-none p-8 space-y-4">
              <div className="w-12 h-12 bg-[#5461a6] bg-opacity-10 rounded-none flex items-center justify-center">
                <Database className="w-6 h-6 text-[#ffffff] dark:text-[#ffffff]" />
              </div>
              <h4 className="text-xl font-bold text-[#000000] dark:text-white">
                Lorem Ipsum Dolor
              </h4>
              <p className="text-base text-[#000000] dark:text-white leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="bg-white dark:bg-[#2d2d2d] rounded-none p-8 space-y-4">
              <div className="w-12 h-12 bg-[#5461a6] bg-opacity-10 rounded-none flex items-center justify-center">
                <Cpu className="w-6 h-6 text-[#ffffff] dark:text-[#ffffff]" />
              </div>
              <h4 className="text-xl font-bold text-[#000000] dark:text-white">
                Sit Amet Consectetur
              </h4>
              <p className="text-base text-[#000000] dark:text-white leading-relaxed">
                Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Grid: 3-Column */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-[#000000] dark:text-white">
          FEATURE GRID: 3-COLUMN
        </h3>
        <p className="text-sm text-[#848484] dark:text-gray-300">
          Three-column grid layout for showcasing features,
          services, or content categories
        </p>

        <div className="bg-[#dddeec] rounded-none p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-[#2d2d2d] rounded-none p-6 space-y-4">
              <div className="w-10 h-10 bg-[#5461a6] bg-opacity-10 rounded-none flex items-center justify-center">
                <Beaker className="w-5 h-5 text-[#ffffff] dark:text-[#ffffff]" />
              </div>
              <h4 className="text-lg font-bold text-[#000000] dark:text-white">
                Lorem Ipsum
              </h4>
              <p className="text-sm text-[#000000] dark:text-white">
                Sed do eiusmod tempor incididunt ut labore
              </p>
            </div>
            <div className="bg-white dark:bg-[#2d2d2d] rounded-none p-6 space-y-4">
              <div className="w-10 h-10 bg-[#5461a6] bg-opacity-10 rounded-none flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-[#ffffff] dark:text-[#ffffff]" />
              </div>
              <h4 className="text-lg font-bold text-[#000000] dark:text-white">
                Dolor Sit
              </h4>
              <p className="text-sm text-[#000000] dark:text-white">
                Ut enim ad minim veniam quis nostrud
              </p>
            </div>
            <div className="bg-white dark:bg-[#2d2d2d] rounded-none p-6 space-y-4">
              <div className="w-10 h-10 bg-[#5461a6] bg-opacity-10 rounded-none flex items-center justify-center">
                <Users className="w-5 h-5 text-[#ffffff] dark:text-[#ffffff]" />
              </div>
              <h4 className="text-lg font-bold text-[#000000] dark:text-white">
                Amet Consectetur
              </h4>
              <p className="text-sm text-[#000000] dark:text-white">
                Duis aute irure dolor in reprehenderit
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Grid: 4-Column */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-[#000000] dark:text-white">
          FEATURE GRID: 4-COLUMN
        </h3>
        <p className="text-sm text-[#848484] dark:text-gray-300">
          Four-column grid for compact feature showcases or
          icon-based services
        </p>

        <div className="bg-white dark:bg-[#2d2d2d] rounded-none border border-[#E5E5E5] dark:border-[#404040] p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-[#5461a6] bg-opacity-10 rounded-none flex items-center justify-center mx-auto">
                <Lightbulb className="w-6 h-6 text-[#ffffff] dark:text-[#ffffff]" />
              </div>
              <h4 className="text-base font-bold text-[#000000] dark:text-white">
                Lorem
              </h4>
              <p className="text-sm text-[#848484] dark:text-gray-300">
                Dolor sit amet
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-[#5461a6] bg-opacity-10 rounded-none flex items-center justify-center mx-auto">
                <GraduationCap className="w-6 h-6 text-[#ffffff] dark:text-[#ffffff]" />
              </div>
              <h4 className="text-base font-bold text-[#000000] dark:text-white">
                Ipsum
              </h4>
              <p className="text-sm text-[#848484] dark:text-gray-300">
                Consectetur
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-[#5461a6] bg-opacity-10 rounded-none flex items-center justify-center mx-auto">
                <Globe className="w-6 h-6 text-[#ffffff] dark:text-[#ffffff]" />
              </div>
              <h4 className="text-base font-bold text-[#000000] dark:text-white">
                Adipiscing
              </h4>
              <p className="text-sm text-[#848484] dark:text-gray-300">
                Elit sed do
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-[#5461a6] bg-opacity-10 rounded-none flex items-center justify-center mx-auto">
                <Rocket className="w-6 h-6 text-[#ffffff] dark:text-[ffffff]" />
              </div>
              <h4 className="text-base font-bold text-[#000000] dark:text-white">
                Eiusmod
              </h4>
              <p className="text-sm text-[#848484] dark:text-gray-300">
                Tempor incididunt
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width Banner */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-[#000000] dark:text-white">
          FULL-WIDTH BANNER
        </h3>
        <p className="text-sm text-[#848484] dark:text-gray-300">
          Full-width banners without rounded corners for
          announcements or calls-to-action
        </p>

        <div className="bg-[#dddeec] px-8 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#000000] mb-4">
              Lorem Ipsum Dolor Sit Amet
            </h2>
            <p className="text-base text-[#000000] mb-6">
              Consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua
            </p>
            <button
              style={{ fontFamily: "Switzer, sans-serif" }}
              className="uppercase px-8 py-3 bg-[#5461a6] text-white rounded-none hover:bg-[#26245c] transition-colors"
            >
              Lorem Ipsum
            </button>
          </div>
        </div>

        <div className="bg-[#26245c] px-8 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Dolor Sit Amet Consectetur?
            </h2>
            <p className="text-base text-white opacity-90 mb-6">
              Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua
            </p>
            <button
              style={{ fontFamily: "Switzer, sans-serif" }}
              className="uppercase px-8 py-3 bg-white dark:bg-[ffffff] text-[#26245c] rounded-none hover:bg-opacity-90 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}

export function KeyNumbers() {
  return (
    <section className="space-y-12">

      {/* Key Numbers */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-[#000000] dark:text-white">
          KEY NUMBERS
        </h3>
        <p className="text-sm text-[#848484] dark:text-gray-300">
          Highlight important statistics, metrics, or
          achievements with large numbers
        </p>

        <div className="bg-[#26245c] rounded-none p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-3">
              Lorem Ipsum Dolor
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">
                150+
              </div>
              <p className="text-base text-white opacity-90">
                Lorem Ipsum
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">
                30+
              </div>
              <p className="text-base text-white opacity-90">
                Dolor Sit
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">
                500+
              </div>
              <p className="text-base text-white opacity-90">
                Amet Consectetur
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">
                12
              </div>
              <p className="text-base text-white opacity-90">
                Adipiscing Elit
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FullWidthBanner() {
  return (
    <section className="space-y-12">

      {/* Full-Width Banner */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-[#000000] dark:text-white">
          FULL-WIDTH BANNER
        </h3>
        <p className="text-sm text-[#848484] dark:text-gray-300">
          Full-width banners without rounded corners for
          announcements or calls-to-action
        </p>

        <div className="bg-[#dddeec] px-8 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#000000] mb-4">
              Lorem Ipsum Dolor Sit Amet
            </h2>
            <p className="text-base text-[#000000] mb-6">
              Consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua
            </p>
            <button
              style={{ fontFamily: "Switzer, sans-serif" }}
              className="uppercase px-8 py-3 bg-[#5461a6] text-white rounded-none hover:bg-[#26245c] transition-colors"
            >
              Lorem Ipsum
            </button>
          </div>
        </div>

        <div className="bg-[#26245c] px-8 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Dolor Sit Amet Consectetur?
            </h2>
            <p className="text-base text-white opacity-90 mb-6">
              Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua
            </p>
            <button
              style={{ fontFamily: "Switzer, sans-serif" }}
              className="uppercase px-8 py-3 bg-white dark:bg-[ffffff] text-[#26245c] rounded-none hover:bg-opacity-90 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}

export function ListLayout() {
  return (
    <section className="space-y-12">
      
      {/* List Layout */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-[#000000] dark:text-white">
          LIST LAYOUT
        </h3>
        <p className="text-sm text-[#848484] dark:text-gray-300">
          Structured lists for displaying steps, features, or
          sequential information
        </p>

        <div className="bg-white dark:bg-[#2d2d2d] rounded-none border border-[#E5E5E5] dark:border-[#404040] p-8">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-[#000000] dark:text-white mb-6">
              Lorem Ipsum Dolor
            </h2>

            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <Circle className="w-2 h-2 text-[#5461a6] dark:text-[#93c5fd] flex-shrink-0 mt-2 fill-current" />
                <p className="text-base text-[#000000] dark:text-white">
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit
                </p>
              </div>

              <div className="flex gap-3 items-start">
                <Circle className="w-2 h-2 text-[#5461a6] dark:text-[#93c5fd] flex-shrink-0 mt-2 fill-current" />
                <p className="text-base text-[#000000] dark:text-white">
                  Sed do eiusmod tempor incididunt ut labore et
                  dolore
                </p>
              </div>

              <div className="flex gap-3 items-start">
                <Circle className="w-2 h-2 text-[#5461a6] dark:text-[#93c5fd] flex-shrink-0 mt-2 fill-current" />
                <p className="text-base text-[#000000] dark:text-white">
                  Ut enim ad minim veniam, quis nostrud
                  exercitation
                </p>
              </div>

              <div className="flex gap-3 items-start">
                <Circle className="w-2 h-2 text-[#5461a6] dark:text-[#93c5fd] flex-shrink-0 mt-2 fill-current" />
                <p className="text-base text-[#000000] dark:text-white">
                  Duis aute irure dolor in reprehenderit in
                  voluptate
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#dddeec] rounded-none p-8">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-[#000000] mb-6">
              Dolor Sit Amet
            </h3>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <Check className="w-4 h-4 text-[#5461a6] dark:text-[#93c5fd] flex-shrink-0 mt-0.5" />
                <p className="text-base text-[#000000]">
                  Lorem ipsum dolor sit amet consectetur
                  adipiscing elit
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <Check className="w-4 h-4 text-[#5461a6] dark:text-[#93c5fd] flex-shrink-0 mt-0.5" />
                <p className="text-base text-[#000000]">
                  Sed do eiusmod tempor incididunt ut labore
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <Check className="w-4 h-4 text-[#5461a6] dark:text-[#93c5fd] flex-shrink-0 mt-0.5" />
                <p className="text-base text-[#000000]">
                  Ut enim ad minim veniam quis nostrud
                </p>
              </div>
              <div className="flex gap-3 items-start">
                <Check className="w-4 h-4 text-[#5461a6] dark:text-[#93c5fd] flex-shrink-0 mt-0.5" />
                <p className="text-base text-[#000000]">
                  Duis aute irure dolor in reprehenderit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export function Sidebar() {
  return (
    <section className="space-y-12">

      {/* Content + Sidebar */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-[#000000] dark:text-white">
          CONTENT + SIDEBAR
        </h3>
        <p className="text-sm text-[#848484] dark:text-gray-300">
          Asymmetric layout with main content area and sidebar
          for navigation or additional information
        </p>

        <div className="bg-white dark:bg-[#2d2d2d] rounded-none border border-[#E5E5E5] dark:border-[#404040] overflow-hidden">
          <div className="grid md:grid-cols-[280px_1fr] gap-0">
            <div className="bg-[#F7F7F8] dark:bg-[#1a1a1a] p-6 border-r border-[#E5E5E5] dark:border-[#404040]">
              <h4 className="text-sm font-bold text-[#000000] dark:text-white mb-4">
                LOREM IPSUM
              </h4>
              <nav className="space-y-2">
                <a
                  href="#"
                  className="block text-sm text-[#5461a6] dark:text-[#93c5fd]"
                >
                  Dolor sit
                </a>
                <a
                  href="#"
                  className="block text-sm text-[#000000] dark:text-white hover:text-[#5461a6] dark:text-[#93c5fd] transition-colors"
                >
                  Amet consectetur
                </a>
                <a
                  href="#"
                  className="block text-sm text-[#000000] dark:text-white hover:text-[#5461a6] dark:text-[#93c5fd] transition-colors"
                >
                  Adipiscing elit
                </a>
                <a
                  href="#"
                  className="block text-sm text-[#000000] dark:text-white hover:text-[#5461a6] dark:text-[#93c5fd] transition-colors"
                >
                  Sed do eiusmod
                </a>
              </nav>
            </div>

            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-[#000000] dark:text-white mb-4">
                Lorem Ipsum Dolor
              </h2>
              <p className="text-base text-[#000000] dark:text-white mb-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
                ullamco laboris.
              </p>
              <p className="text-base text-[#000000] dark:text-white leading-relaxed">
                Duis aute irure dolor in reprehenderit in
                voluptate velit esse.{" "}
                <a
                  href="#"
                  className="text-[#5461a6] dark:text-[#93c5fd] hover:text-[#26245c] dark:hover:text-white transition-colors"
                >
                  Lorem ipsum →
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export function EventIndex() {
  return (
    <section className="space-y-12">
      {/* Event Index */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-[#000000] dark:text-white">
          EVENT INDEX
        </h3>
        <p className="text-sm text-[#848484] dark:text-gray-300">
          Chronological event listing with dates, images,
          titles, and metadata
        </p>

        <div className="bg-white dark:bg-[#2d2d2d] rounded-none border border-[#E5E5E5] dark:border-[#404040] p-8">
          <div className="space-y-6">
            {/* Event 1 */}
            <div className="flex flex-col md:flex-row gap-6 pb-6 border-b border-[#E5E5E5] dark:border-[#404040]">
              <div className="flex-shrink-0 w-32">
                <div className="bg-[#5461a6] text-white rounded-none p-4 text-center">
                  <div className="text-3xl font-bold">15</div>
                  <div className="text-sm">JUN 2026</div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#000000] dark:text-white mb-3">
                  Lorem Ipsum Dolor Sit Amet Workshop
                </h3>
                <div className="flex flex-wrap gap-4 mb-3 text-sm text-[#848484] dark:text-gray-300">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Zürich, Switzerland</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>Dr. Lorem Ipsum</span>
                  </div>
                </div>
                <p className="text-base text-[#000000] dark:text-white mb-4">
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <button
                  style={{ fontFamily: "Switzer, sans-serif" }}
                  className="uppercase px-4 py-2 bg-[#5461a6] text-white rounded-none hover:bg-[#26245c] transition-colors text-sm"
                >
                  Register
                </button>
              </div>
            </div>

            {/* Event 2 */}
            <div className="flex flex-col md:flex-row gap-6 pb-6 border-b border-[#E5E5E5] dark:border-[#404040]">
              <div className="flex-shrink-0 w-32">
                <div className="bg-[#26245c] text-white rounded-none p-4 text-center">
                  <div className="text-3xl font-bold">22</div>
                  <div className="text-sm">JUN 2026</div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#000000] dark:text-white mb-3">
                  Consectetur Adipiscing Elit Conference
                </h3>
                <div className="flex flex-wrap gap-4 mb-3 text-sm text-[#848484] dark:text-gray-300">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Lausanne, Switzerland</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>Prof. Dolor Sit</span>
                  </div>
                </div>
                <p className="text-base text-[#000000] dark:text-white mb-4">
                  Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation.
                </p>
                <button
                  style={{ fontFamily: "Switzer, sans-serif" }}
                  className="uppercase px-4 py-2 bg-[#5461a6] text-white rounded-none hover:bg-[#26245c] transition-colors text-sm"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Event 3 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0 w-32">
                <div className="bg-[#5461a6] text-white rounded-none p-4 text-center">
                  <div className="text-3xl font-bold">05</div>
                  <div className="text-sm">JUL 2026</div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#000000] dark:text-white mb-3">
                  Sed Do Eiusmod Tempor Symposium
                </h3>
                <div className="flex flex-wrap gap-4 mb-3 text-sm text-[#848484] dark:text-gray-300">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Basel, Switzerland</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>Dr. Amet Consectetur</span>
                  </div>
                </div>
                <p className="text-base text-[#000000] dark:text-white mb-4">
                  Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur.
                </p>
                <button
                  style={{ fontFamily: "Switzer, sans-serif" }}
                  className="uppercase px-4 py-2 bg-[#5461a6] text-white rounded-none hover:bg-[#26245c] transition-colors text-sm"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export function ArticleGrid() {
  return (
    <section className="space-y-12">
      {/* Article Grid */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-[#000000] dark:text-white">
          ARTICLE GRID
        </h3>
        <p className="text-sm text-[#848484] dark:text-gray-300">
          Three-column grid layout for articles, blog posts, or
          news items with images and metadata
        </p>

        <div className="bg-[#F7F7F8] dark:bg-[#1a1a1a] rounded-none p-8">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Article 1 */}
            <div className="bg-white dark:bg-[#2d2d2d] rounded-none overflow-hidden border border-[#E5E5E5] dark:border-[#404040]">
              <div className="h-48 bg-gradient-to-br from-[#5461a6] to-[#26245c]"></div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-[#5461a6] dark:text-[#93c5fd] uppercase tracking-wide">
                    Research
                  </span>
                  <span
                    className="text-xs text-[#848484] dark:text-gray-300"
                    style={{
                      fontFamily: "Switzer, sans-serif",
                    }}
                  >
                    •
                  </span>
                  <span className="text-xs text-[#848484] dark:text-gray-300">
                    May 1, 2026
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#000000] dark:text-white">
                  Lorem Ipsum Dolor Sit Amet
                </h4>
                <p className="text-sm text-[#000000] dark:text-white">
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor
                  incididunt.
                </p>
                <a
                  href="#"
                  className="text-sm text-[#5461a6] dark:text-[#93c5fd] hover:text-[#26245c] dark:hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  Read More <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Article 2 */}
            <div className="bg-white dark:bg-[#2d2d2d] rounded-none overflow-hidden border border-[#E5E5E5] dark:border-[#404040]">
              <div className="h-48 bg-gradient-to-br from-[#26245c] to-[#5461a6]"></div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-[#5461a6] dark:text-[#93c5fd] uppercase tracking-wide">
                    Innovation
                  </span>
                  <span
                    className="text-xs text-[#848484] dark:text-gray-300"
                    style={{
                      fontFamily: "Switzer, sans-serif",
                    }}
                  >
                    •
                  </span>
                  <span className="text-xs text-[#848484] dark:text-gray-300">
                    May 3, 2026
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#000000] dark:text-white">
                  Consectetur Adipiscing Elit
                </h4>
                <p className="text-sm text-[#000000] dark:text-white">
                  Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua ut enim ad minim.
                </p>
                <a
                  href="#"
                  className="text-sm text-[#5461a6] dark:text-[#93c5fd] hover:text-[#26245c] dark:hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  Read More <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Article 3 */}
            <div className="bg-white dark:bg-[#2d2d2d] rounded-none overflow-hidden border border-[#E5E5E5] dark:border-[#404040]">
              <div className="h-48 bg-gradient-to-br from-[#5461a6] to-[#26245c]"></div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-[#5461a6] dark:text-[#93c5fd] uppercase tracking-wide">
                    Education
                  </span>
                  <span
                    className="text-xs text-[#848484] dark:text-gray-300"
                    style={{
                      fontFamily: "Switzer, sans-serif",
                    }}
                  >
                    •
                  </span>
                  <span className="text-xs text-[#848484] dark:text-gray-300">
                    May 7, 2026
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#000000] dark:text-white">
                  Ut Enim Ad Minim Veniam
                </h4>
                <p className="text-sm text-[#000000] dark:text-white">
                  Quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat.
                </p>
                <a
                  href="#"
                  className="text-sm text-[#5461a6] dark:text-[#93c5fd] hover:text-[#26245c] dark:hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  Read More <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

