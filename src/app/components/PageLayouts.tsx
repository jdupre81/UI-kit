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

import bgPattern3 from "/src/imports/global_background3.png";

export function PageLayouts() {
  return (
    <section className="space-y-12">

      {/* HERO */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-[#000000] dark:text-white">
          HERO SECTION: IMAGE + CONTENT
        </h3>

        <div className="bg-white dark:bg-[#2d2d2d] border border-[#E5E5E5] dark:border-[#404040] overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div
              className="h-96"
              style={{
                backgroundImage: `url(${bgPattern3})`,
                backgroundSize: "cover",
                backgroundPosition: "left center",
                backgroundBlendMode: "overlay",
              }}
            />

            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">
                Lorem Ipsum Dolor Sit Amet Consectetur
              </h2>

              <p className="mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              <button className="px-6 py-3 bg-[#5461a6] text-white">
                Learn More <ArrowRight className="w-4 h-4 inline" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURE GRID 3 */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold">FEATURE GRID: 3-COLUMN</h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white">
            <Beaker />
            <h4>Lorem Ipsum</h4>
            <p>Sed do eiusmod tempor</p>
          </div>

          <div className="p-6 bg-white">
            <BookOpen />
            <h4>Dolor Sit</h4>
            <p>Ut enim ad minim veniam</p>
          </div>

          <div className="p-6 bg-white">
            <Users />
            <h4>Amet</h4>
            <p>Duis aute irure dolor</p>
          </div>
        </div>
      </div>

      {/* FEATURE GRID 4 */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold">FEATURE GRID: 4-COLUMN</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <Lightbulb />
            <p>Lorem</p>
          </div>

          <div className="text-center">
            <GraduationCap />
            <p>Ipsum</p>
          </div>

          <div className="text-center">
            <Globe />
            <p>Adipiscing</p>
          </div>

          <div className="text-center">
            <Rocket className="text-[#ffffff]" />
            <p>Eiusmod</p>
          </div>
        </div>
      </div>

      {/* FEATURE GRID 2 */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold">FEATURE GRID: 2-COLUMN</h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-white">
            <Database />
            <h4 className="text-xl font-bold">Lorem Ipsum Dolor</h4>
            <p>Consectetur adipiscing elit sed do.</p>
          </div>

          <div className="p-8 bg-white">
            <Cpu />
            <h4 className="text-xl font-bold">Sit Amet</h4>
            <p>Ut enim ad minim veniam quis nostrud.</p>
          </div>
        </div>
      </div>

      {/* KEY NUMBERS */}
      <div className="bg-[#26245c] text-white p-12 text-center">
        <h2 className="text-3xl font-bold mb-8">Lorem Ipsum Dolor</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-5xl font-bold">150+</div>
            <p>Lorem Ipsum</p>
          </div>
          <div>
            <div className="text-5xl font-bold">30+</div>
            <p>Dolor Sit</p>
          </div>
          <div>
            <div className="text-5xl font-bold">500+</div>
            <p>Amet</p>
          </div>
          <div>
            <div className="text-5xl font-bold">12</div>
            <p>Elit</p>
          </div>
        </div>
      </div>

      {/* SIDEBAR LAYOUT */}
      <div className="grid md:grid-cols-[280px_1fr] border">
        <aside className="p-6 bg-gray-100">
          <h4 className="font-bold mb-4">LOREM IPSUM</h4>
          <nav className="space-y-2 text-sm">
            <a href="#">Dolor sit</a>
            <a href="#">Amet</a>
            <a href="#">Adipiscing</a>
          </nav>
        </aside>

        <main className="p-8">
          <h2 className="text-3xl font-bold mb-4">Content Area</h2>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </main>
      </div>

      {/* LIST */}
      <div className="space-y-3">
        <h3 className="font-bold text-lg">LIST LAYOUT</h3>

        {[
          "Lorem ipsum dolor sit amet",
          "Sed do eiusmod tempor",
          "Ut enim ad minim veniam",
          "Duis aute irure dolor",
        ].map((item, i) => (
          <div key={i} className="flex gap-2">
            <Circle className="w-2 h-2 mt-2" />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================
   EVENT INDEX (SEPARADO)
========================= */

export function EventIndex() {
  return (
    <section className="space-y-6">

      <h3 className="text-lg font-bold">EVENT INDEX</h3>

      <div className="space-y-6">

        {[1, 2, 3].map((e, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row gap-6 border-b pb-6"
          >
            <div className="w-32 text-center bg-[#5461a6] text-white p-4">
              <div className="text-3xl font-bold">
                {["15", "22", "05"][i]}
              </div>
              <div className="text-sm">JUN 2026</div>
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-bold">
                Event Title {i + 1}
              </h3>

              <div className="flex gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Zurich
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  Speaker
                </div>
              </div>

              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}