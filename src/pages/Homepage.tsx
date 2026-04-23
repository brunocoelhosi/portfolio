import Hero from "./hero";
import Projects from "./projects";
import Contact from "./contact";

type Props = {
  isDark: boolean;
  onToggleTheme: () => void;
};

export default function HomePage({ isDark, onToggleTheme }: Props) {
  return (
    <main
      className={` relative min-h-screen ${
        isDark ? "bg-slate-950 text-slate-100" : "bg-slate-100 text-slate-900"
      }`}
    >
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-14 md:px-10 md:py-20">
        <div
          className={`absolute inset-0 -z-10 ${
            isDark
              ? "bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_45%)]"
              : "bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.18),transparent_45%)]"
          }`}
        />

        <Hero isDark={isDark} onToggleTheme={onToggleTheme} />
        <Projects isDark={isDark} />
        <Contact isDark={isDark} />
      </section>
    </main>
  );
}
