import Image from "next/image";

function FeatureBox() {
  return (
    <section className="mt-20 mx-4 min-[375px]:mx-8 min-[425px]:mx-11 font-sans border-t border-stone-100 pt-12">
      {/* 1. Main Heading — Ultra-Direct Main Life Benefit */}
      <div className="mb-10">
        <h2 className="text-xl font-normal tracking-tight text-stone-950 sm:text-2xl">
          Reclaim Your Attention Span
        </h2>
        <p className="mt-2.5 max-w-xl text-xs leading-relaxed text-stone-500 font-normal">
          A physical antidote to mindless phone-scrolling and desk restlessness.
          Ground your hands with a premium stainless steel anchor so your mind
          can lock completely into deep focus.
        </p>
      </div>

      {/* 2. Technical Features Matrix — Split into ultra-short, punchy fragments */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 border-t border-stone-100 pt-8">
        {/* Block 1: The Ace Significance */}
        <div className="space-y-1.5">
          <h3 className="font-medium text-xs tracking-wider uppercase text-stone-950 font-mono flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-stone-950 block rounded-none" />
            Stay Composed Under Pressure
          </h3>
          <p className="text-xs leading-relaxed text-stone-500 pl-3.5 max-w-sm">
            Deeply etched Ace of Spades lines turn nervous tics into a
            confident, grounding ritual that keeps you calm and focused during
            high-stakes work calls.
          </p>
        </div>

        {/* Block 2: Heavy Metal Build */}
        <div className="space-y-1.5">
          <h3 className="font-medium text-xs tracking-wider uppercase text-stone-950 font-mono flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-stone-400 block rounded-none" />
            Snap Out of Screen Fatigue
          </h3>
          <p className="text-xs leading-relaxed text-stone-500 pl-3.5 max-w-sm">
            Ditch flimsy plastic gadgets for a solid, heavy stainless steel
            block that provides a satisfying weight to break you away from
            virtual exhaustion.
          </p>
        </div>

        {/* Block 3: Magnetic Sound/Feel */}
        <div className="space-y-1.5">
          <h3 className="font-medium text-xs tracking-wider uppercase text-stone-950 font-mono flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-stone-400 block rounded-none" />
            Zone Into Your Workspace Flow
          </h3>
          <p className="text-xs leading-relaxed text-stone-500 pl-3.5 max-w-sm">
            Internal magnetic tracks deliver a crisp, deep click-clack sound
            that naturally channels stress away while your eyes stay locked on
            your code or design terminal.
          </p>
        </div>

        {/* Block 4: Texture / Smudge */}
        <div className="space-y-1.5">
          <h3 className="font-medium text-xs tracking-wider uppercase text-stone-950 font-mono flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-stone-400 block rounded-none" />
            Keep Your Setup Immaculate
          </h3>
          <p className="text-xs leading-relaxed text-stone-500 pl-3.5 max-w-sm">
            The raw sandblasted matte texture blocks fingerprint smudges
            completely, maintaining a clean look right at home next to custom
            mechanical keyboards.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeatureBox;
