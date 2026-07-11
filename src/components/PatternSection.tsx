import { PROJECT_PATTERN_CARDS } from "../data";

export default function PatternSection() {
  return (
    <section className="px-5 sm:px-8 md:px-10 py-16 sm:py-20 md:py-24 relative">
      <div className=" mx-auto rounded-[32px] sm:rounded-[40px] border border-[#D7E2EA]/15 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 sm:p-8 md:p-10 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage:
            "linear-gradient(rgba(215,226,234,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(215,226,234,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }} />

        <div className="relative z-10 item-center text-center flex flex-col gap-4 sm:gap-6 md:gap-8">
          <div className="">
            <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-[#D7E2EA]/60 mb-3 text-center">
              Projects pattern
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#D7E2EA] text-center">
              The underlying blueprint of the projects:
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#D7E2EA]/70 leading-relaxed text-center">
              Each project is shaped by a clear process of exploration, execution, and refinement so the final result feels polished and purposeful.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {PROJECT_PATTERN_CARDS.map((card) => (
              <div
                key={card.id}
                className="rounded-[24px] border border-[#D7E2EA]/10 bg-white p-5 backdrop-blur-sm"
              >
                <h4 className="text-lg font-semibold uppercase tracking-wide text-black">
                  {card.title}
                </h4>
                <hr className="text-gray-300"></hr>
                <p className="mt-2 text-sm leading-relaxed text-black">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
