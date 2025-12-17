import React, { useState } from "react";

const App: React.FC = () => {
  const [showVinInput, setShowVinInput] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      <header className="sticky top-0 z-30 bg-neutral-950/80 backdrop-blur border-b border-neutral-800">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-lime-500" />
            <span className="font-semibold tracking-wide uppercase text-sm">
              SingleTrack F450
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#truck" className="hover:text-lime-400 transition">
              The Truck
            </a>
            <a href="#conversion" className="hover:text-lime-400 transition">
              Conversion
            </a>
            <a href="#gallery" className="hover:text-lime-400 transition">
              Gallery
            </a>
            <a href="#process" className="hover:text-lime-400 transition">
              How It Works
            </a>
            <a href="#faq" className="hover:text-lime-400 transition">
              FAQ
            </a>
            {/* <a href="/inventory" className="hover:text-lime-400 transition">
              Inventory
            </a> */}
          </nav>

          <a
            href="#inquire"
            className="rounded-full border border-lime-400 px-4 py-2 text-xs font-semibold tracking-wide uppercase hover:bg-lime-400 hover:text-black transition"
          >
            Build My F-450
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('/IMG_1243.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        <div className="relative mx-auto max-w-6xl px-4 py-20 lg:py-28 flex flex-col lg:flex-row items-center gap-10">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.25em] text-lime-400 uppercase mb-3">
              Ford F-450 Single Wheel Conversions
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
              Built to Work.
              <br />
              Tuned for the Edge of the Map.
            </h1>
            <p className="text-sm sm:text-base text-neutral-200/90 mb-6">
              Turn your Ford F-450 into a single wheel, super-duty platform with
              real payload, real towing, and real off-road capability. We build
              turn-key trucks and full conversions with pricing available by
              custom quote only.
            </p>

            <div className="flex flex-wrap gap-3 mb-4">
              <a
                href="#inquire"
                className="rounded-full bg-lime-400 px-5 py-2.5 text-xs font-semibold tracking-wide uppercase text-black hover:bg-lime-300 transition"
              >
                Start My Build
              </a>
              <a
                href="#conversion"
                className="rounded-full border border-neutral-600 px-5 py-2.5 text-xs font-semibold tracking-wide uppercase text-neutral-100 hover:border-lime-400 hover:text-lime-300 transition"
              >
                View Conversion Details
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-xs text-neutral-300">
              <div>
                <p className="font-semibold text-neutral-50">
                  38–41&quot; Super Singles
                </p>
                <p>Engineered for traction, clearance & control.</p>
              </div>
              <div>
                <p className="font-semibold text-neutral-50">
                  Heavy Payload Ready
                </p>
                <p>Spec'd around real work, not brochure numbers.</p>
              </div>
            </div>

            <p className="mt-4 text-[11px] text-neutral-400">
              Not affiliated with or endorsed by Ford Motor Company. Ford® and
              F-450® are trademarks of their respective owners.
            </p>
          </div>

          <div className="w-full max-w-md lg:max-w-lg">
            <div className="aspect-video rounded-3xl border border-neutral-700 bg-neutral-900/80 overflow-hidden relative">
              <img
                src="/IMG_1249.jpg"
                alt="F-450 single wheel conversion"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 text-[11px] text-neutral-400">
              Sample build shown. Actual specifications and appearance will vary
              by customer configuration.
            </p>
          </div>
        </div>
      </section>

      <section id="truck" className="border-t border-neutral-900 bg-black">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div className="aspect-video rounded-3xl bg-neutral-900 border border-neutral-800 overflow-hidden">
            <img
              src="/IMG_1255.jpg"
              alt="F-450 platform"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
              The Platform: Ford F-450
            </h2>
            <p className="text-sm text-neutral-300 mb-5">
              The F-450 is the ultimate foundation for high-payload, heavy tow
              builds. Our single wheel conversions are engineered specifically
              around this chassis to keep the truck working hard while driving
              better loaded and unloaded.
            </p>

            <dl className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4">
                <dt className="text-neutral-400 mb-1">Target Payload Band</dt>
                <dd className="font-semibold text-neutral-50">
                  9,000–12,000 lb+
                </dd>
              </div>
              <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4">
                <dt className="text-neutral-400 mb-1">Towing Capacity</dt>
                <dd className="font-semibold text-neutral-50">
                  25,000–30,000 lb+*
                </dd>
              </div>
              <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4">
                <dt className="text-neutral-400 mb-1">
                  Configuration Options
                </dt>
                <dd className="font-semibold text-neutral-50">
                  Customer truck or turn-key truck
                </dd>
              </div>
              <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-4">
                <dt className="text-neutral-400 mb-1">Use Cases</dt>
                <dd className="font-semibold text-neutral-50">
                  Work, camper, overland, toy-hauler, fleet
                </dd>
              </div>
            </dl>

            <p className="mt-3 text-[11px] text-neutral-500">
              *Final payload and tow ratings depend on completed configuration
              and equipment. We design around your intended use case and
              reference factory ratings.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-900 bg-neutral-950">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
            Why Single Wheel Conversion?
          </h2>
          <p className="text-sm text-neutral-300 mb-8 max-w-2xl">
            Super-single rear conversions replace six dually tires with four
            tall, aggressive tires on purpose-built wheels. The result is a
            truck that rides better, tracks better off-road, and actually fits
            into the terrain you&apos;re driving through.
          </p>

          <div className="grid md:grid-cols-4 gap-4 text-xs sm:text-sm">
            {[
              {
                title: "Off-Road Traction",
                body: "Larger contact patch, true off-road tread patterns, and better sidewall flex where you need it most.",
              },
              {
                title: "Ride Quality",
                body: "Standard truck tires can be run at more appropriate pressures for dramatically improved ride.",
              },
              {
                title: "Real Clearance",
                body: "38–41\" diameter options with trimmed and re-worked fenders for proper articulation.",
              },
              {
                title: "Simplified Footprint",
                body: "Four corners to manage instead of six, with tire and wheel options available worldwide.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-neutral-800 bg-black/40 p-4"
              >
                <h3 className="font-semibold mb-1 text-neutral-50">
                  {item.title}
                </h3>
                <p className="text-neutral-300 text-[13px]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-900 bg-black" id="packages">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
                Build Packages
              </h2>
              <p className="text-sm text-neutral-300 max-w-xl">
                Whether you&apos;re building a dedicated work rig or a
                go-anywhere overland truck, we tune each package around your
                payload, tow, and terrain requirements. Pricing is available by
                inquiry only.
              </p>
            </div>
            <p className="text-[11px] text-neutral-500">
              All packages are fully customizable. Specs shown are starting
              points only.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                name: "Work Series",
                tagline: "Daily work truck, leveled stance.",
                bullets: [
                  "38\" super singles",
                  "Minimal lift, optimized steering geometry",
                  "Front & rear bumper upgrades optional",
                  "Perfect for flatbeds, service bodies & fleets",
                ],
              },
              {
                name: "Overland Series",
                tagline: "Off-grid travel, camper-ready.",
                bullets: [
                  "38–40\" tires with tuned suspension",
                  "Armor, winch, steps & lighting",
                  "Camper and flatbed integration support",
                  "Onboard air & recovery options",
                ],
              },
              {
                name: "Premier Edition",
                tagline: "Maximum capability, signature build.",
                bullets: [
                  "41\" tires on premium wheels",
                  "Full armor, lighting & custom details",
                  "Interior upgrades & electronics",
                  "Limited build slots per year",
                ],
              },
            ].map((pkg) => (
              <div
                key={pkg.name}
                className="rounded-3xl border border-neutral-800 bg-neutral-950/80 p-5 flex flex-col"
              >
                <h3 className="text-lg font-semibold mb-1 text-neutral-50">
                  {pkg.name}
                </h3>
                <p className="text-[13px] text-neutral-300 mb-4">
                  {pkg.tagline}
                </p>
                <ul className="space-y-2 text-[13px] text-neutral-300 mb-5 flex-1">
                  {pkg.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-lime-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() =>
                    document
                      .getElementById("inquire")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="mt-auto rounded-full border border-lime-400 px-4 py-2 text-[11px] font-semibold tracking-wide uppercase text-lime-300 hover:bg-lime-400 hover:text-black transition"
                >
                  Inquire about {pkg.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="conversion"
        className="border-t border-neutral-900 bg-neutral-950"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
            Conversion Details
          </h2>
          <p className="text-sm text-neutral-300 max-w-2xl mb-8">
            Every build starts with your VIN, intended payload, and terrain.
            From there, we spec wheels, tires, suspension, armor, and systems to
            keep the truck safe, controlled, and usable in the real world.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-4">
              <DetailBlock
                label="Wheels & Tires"
                body="Super-single wheel packages designed for proper track width and load rating, matched with 38–41&quot; tires chosen for your application (work, snow, desert, mixed-use)."
              />
              <DetailBlock
                label="Suspension"
                body="Options from minimal lift with tuned shocks to full smart-suspension systems. We focus on loaded ride quality, stability, and articulation — not just stance."
              />
              <DetailBlock
                label="Body & Armor"
                body="Front and rear bumpers, steps, underbody protection and winch setups that actually work in the field, not just in photos."
              />
            </div>
            <div className="space-y-4">
              <DetailBlock
                label="Brakes & Driveline"
                body="We respect factory systems and integrate carefully, with attention to braking performance, ABS, and driveline angles."
              />
              <DetailBlock
                label="Electrical & Lighting"
                body="High-output lighting, clean switch integration, and the wiring discipline required for long-term reliability."
              />
              <DetailBlock
                label="Camper & Bed Integration"
                body="Flatbeds, service bodies, camper beds and boxes. We coordinate with your bed/camper manufacturer to make the entire system work together."
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="gallery"
        className="border-t border-neutral-900 bg-black/95"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
                Gallery
              </h2>
              <p className="text-sm text-neutral-300 max-w-xl">
                Real trucks working in the field. From coastal beaches to mountain trails to desert terrain.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2 aspect-video rounded-3xl border border-neutral-800 bg-neutral-900 overflow-hidden">
              <img
                src="/IMG_1243.jpg"
                alt="F-450 on beach"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] rounded-3xl border border-neutral-800 bg-neutral-900 overflow-hidden">
              <img
                src="/IMG_1246.jpg"
                alt="F-450 in mountains"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="aspect-video rounded-3xl border border-neutral-800 bg-neutral-900 overflow-hidden">
              <img
                src="/IMG_1249.jpg"
                alt="F-450 in ranch setting"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-2 aspect-video rounded-3xl border border-neutral-800 bg-neutral-900 overflow-hidden">
              <img
                src="/IMG_1255.jpg"
                alt="F-450 on desert rocks"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="process"
        className="border-t border-neutral-900 bg-neutral-950"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
            How It Works
          </h2>
          <p className="text-sm text-neutral-300 max-w-2xl mb-8">
            We&apos;ve built a structured process so you know what&apos;s
            happening to your truck at every stage — from first inquiry to final
            hand-off.
          </p>

          <div className="grid md:grid-cols-4 gap-4 text-xs sm:text-sm">
            {[
              {
                step: "01",
                title: "Inquire",
                body: "Send us your truck specs and intended use. We review fitment, ratings, and your goals.",
              },
              {
                step: "02",
                title: "Design Review",
                body: "We propose a configuration, timeline, and estimated range. You sign off before parts move.",
              },
              {
                step: "03",
                title: "Build & Test",
                body: "Conversion, alignment, and shakedown testing. We verify function loaded and unloaded.",
              },
              {
                step: "04",
                title: "Delivery",
                body: "Pickup or transport, final walkthrough, and documentation of your completed build.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative rounded-3xl border border-neutral-800 bg-black/50 p-4"
              >
                <p className="text-[11px] font-semibold text-lime-400 mb-1">
                  {item.step}
                </p>
                <h3 className="font-semibold text-neutral-50 mb-1">
                  {item.title}
                </h3>
                <p className="text-neutral-300 text-[13px]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="border-t border-neutral-900 bg-black">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-neutral-300 max-w-2xl mb-8">
            Common questions about single wheel conversions and our build process.
          </p>

          <div className="space-y-4 text-sm">
            {[
              {
                q: "Can you convert my existing F-450?",
                a: "Yes. Most clients ship or drive their existing truck to us. During the inquiry we'll confirm model year, wheelbase, and any existing modifications.",
              },
              {
                q: "Do you sell complete trucks as well?",
                a: "We maintain limited slots for turn-key trucks. If you don't have an F-450 yet, select 'I need a truck sourced' in the inquiry form.",
              },
              {
                q: "How long does a build take?",
                a: "Timelines depend on parts availability and scope. Typical conversions range from several weeks to a few months from the time parts are in-house.",
              },
              {
                q: "Do you publish pricing?",
                a: "No. Every build is spec'd around your truck and your workload. We provide written quotes after we review your inquiry.",
              },
              {
                q: "What happens to my OEM wheels and tires?",
                a: "Most clients have us palletize the OEM wheels and tires for pickup or shipping. We can also assist with resale options if requested.",
              },
              {
                q: "Is my factory warranty affected?",
                a: "Any modification can affect factory warranty. We recommend speaking with your dealer and reading your warranty documentation. Our quotes will outline what we provide warranty coverage on.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-neutral-800 bg-neutral-950/80 p-4"
              >
                <p className="font-semibold text-neutral-50 mb-1">{item.q}</p>
                <p className="text-neutral-300 text-[13px]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="inquire"
        className="border-t border-neutral-900 bg-neutral-950"
      >
        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-16">
          <div className="max-w-xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
              Inquire About a Build
            </h2>
            <p className="text-sm text-neutral-300">
              Tell us about your F-450, how you use it, and what you want it to
              do. We'll follow up with questions, a draft spec, and quote
              ranges — no automated pricing, ever.
            </p>
          </div>

          <form
            className="grid md:grid-cols-2 gap-4 text-sm"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="md:col-span-1 rounded-2xl border border-neutral-700 bg-black/60 px-3 py-2 outline-none focus:border-lime-400"
              placeholder="Full name"
            />
            <input
              className="md:col-span-1 rounded-2xl border border-neutral-700 bg-black/60 px-3 py-2 outline-none focus:border-lime-400"
              placeholder="Email"
            />
            <input
              className="md:col-span-1 rounded-2xl border border-neutral-700 bg-black/60 px-3 py-2 outline-none focus:border-lime-400"
              placeholder="Phone"
            />
            <input
              className="md:col-span-1 rounded-2xl border border-neutral-700 bg-black/60 px-3 py-2 outline-none focus:border-lime-400"
              placeholder="City / State"
            />

            <div className="md:col-span-1 rounded-2xl border border-neutral-700 bg-black/60 px-3 py-2">
              <label className="block text-[11px] text-neutral-400 mb-1">
                Truck Details
              </label>
              <select
                className="w-full bg-transparent text-sm outline-none"
                onChange={(e) => setShowVinInput(e.target.value === "Provide My Own Truck")}
              >
                <option value="" className="text-black">Select one</option>
                <option className="text-black">NEW 2026 Ford F450 Lariat</option>
                <option className="text-black">NEW 2026 Ford F450 King Ranch</option>
                <option className="text-black">NEW 2026 Ford F450 Platinum</option>
                <option className="text-black">Provide My Own Truck</option>
              </select>
            </div>

            {showVinInput && (
              <div className="md:col-span-1 rounded-2xl border border-neutral-700 bg-black/60 px-3 py-2">
                <label className="block text-[11px] text-neutral-400 mb-1">
                  VIN
                </label>
                <input
                  className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-500"
                  placeholder="Enter your vehicle VIN"
                />
              </div>
            )}

            <div className="md:col-span-1 rounded-2xl border border-neutral-700 bg-black/60 px-3 py-2">
              <label className="block text-[11px] text-neutral-400 mb-1">
                Intended Use
              </label>
              <input
                className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-500"
                placeholder="Work / overland / camper / toy-hauler / other"
              />
            </div>

            <div className="md:col-span-1 rounded-2xl border border-neutral-700 bg-black/60 px-3 py-2">
              <label className="block text-[11px] text-neutral-400 mb-1">
                Timeline
              </label>
              <select className="w-full bg-transparent text-sm outline-none ">
                <option value="" className="text-black">Select one</option>
                <option className="text-black">0–3 months</option>
                <option className="text-black">3–6 months</option>
                <option className="text-black">6+ months</option>
                <option className="text-black">Just researching</option>
              </select>
            </div>

            <div className="md:col-span-1 rounded-2xl border border-neutral-700 bg-black/60 px-3 py-2">
              <label className="block text-[11px] text-neutral-400 mb-1">
                Package Interest
              </label>
              <select className="w-full bg-transparent text-sm outline-none">
                <option value="" className="text-black">Not sure yet</option>
                <option className="text-black">Work Series</option>
                <option className="text-black">Overland Series</option>
                <option className="text-black">Premier Edition</option>
              </select>
            </div>

            <div className="md:col-span-2 rounded-2xl border border-neutral-700 bg-black/60 px-3 py-2">
              <label className="block text-[11px] text-neutral-400 mb-1">
                Describe your ideal build
              </label>
              <textarea
                className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-500 min-h-[120px]"
                placeholder="Payload target, camper/bed details, terrain, must-have gear, etc."
              />
            </div>

            <label className="md:col-span-2 flex items-start gap-2 text-[11px] text-neutral-400">
              <input type="checkbox" className="mt-[3px]" />
              <span>
                I understand that pricing is provided by custom quote and may
                vary based on final configuration and parts availability.
              </span>
            </label>

            <div className="md:col-span-2 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                className="rounded-full bg-lime-400 px-6 py-2.5 text-xs font-semibold tracking-wide uppercase text-black hover:bg-lime-300 transition"
              >
                Send My Build Specs
              </button>
              <p className="text-[11px] text-neutral-500">
                By submitting, you agree to be contacted about build options
                and scheduling.
              </p>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-neutral-900 bg-black">
        <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] text-neutral-500">
          <div>
            <p className="font-semibold text-neutral-200">
              SingleTrack F450
            </p>
            <p>
              Custom Ford F-450 single wheel conversions and turn-key trucks for
              work and off-grid travel.
            </p>
          </div>
          <div className="text-right space-y-1">
            <p>Email: custom@premierfleets.com</p>
            {/* <p>Instagram / YouTube / Facebook</p> */}
            <p>
              Not affiliated with Ford Motor Company or any OEM. All trademarks
              belong to their respective owners.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

type DetailBlockProps = {
  label: string;
  body: string;
};

const DetailBlock: React.FC<DetailBlockProps> = ({ label, body }) => (
  <div className="rounded-2xl border border-neutral-800 bg-black/50 p-4">
    <p className="text-[11px] font-semibold text-neutral-400 mb-1">
      {label}
    </p>
    <p className="text-[13px] text-neutral-200">{body}</p>
  </div>
);

export default App;
