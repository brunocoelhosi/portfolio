import fotoBruno from "../assets/fotobruno.png";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaSun,
  FaMoon,
} from "react-icons/fa";

type HeroProps = {
  isDark: boolean;
  onToggleTheme: () => void;
};

export function Hero({ isDark, onToggleTheme }: HeroProps) {
  return (
    <section>
      <div
        className={`absolute inset-0 -z-10 ${
          isDark
            ? "bg-[radial-gradient(circle_at_top,theme(colors.cyan.400/18%),transparent_45%)]"
            : "bg-[radial-gradient(circle_at_top,theme(colors.sky.500/18%),transparent_45%)]"
        }`}
      />

      <section>
        <header
          className={`grid items-center gap-10 rounded-3xl border p-6 backdrop-blur md:grid-cols-[auto_1fr] md:p-10 ${
            isDark
              ? "border-slate-800/80 bg-slate-900/60 shadow-lg shadow-slate-950/25"
              : "border-slate-200 bg-white/90 shadow-sm"
          }`}
        >
          <img
            src={fotoBruno}
            alt="Bruno Coelho"
            className={`h-36 w-36 rounded-full border-3 object-contain md:h-44 md:w-44 ${
              isDark
                ? "border-cyan-400/50 shadow-lg shadow-cyan-900/50"
                : "border-sky-700/70 shadow-md shadow-sky-200"
            }`}
          />

          <div className="space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p
                className={`text-xs font-semibold uppercase tracking-[0.25em] ${
                  isDark ? "text-cyan-400" : "text-sky-800"
                }`}
              >
                Portfólio
              </p>

              <button
                type="button"
                role="switch"
                aria-checked={isDark}
                aria-label={
                  isDark
                    ? "Tema escuro ativo; alternar para claro"
                    : "Tema claro ativo; alternar para escuro"
                }
                onClick={onToggleTheme}
                className={`relative inline-flex h-8 w-[3.25rem] shrink-0 items-center rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                  isDark
                    ? "border-slate-600 bg-slate-800 focus-visible:ring-cyan-400 focus-visible:ring-offset-slate-950"
                    : "border-sky-700/70 bg-sky-100 focus-visible:ring-sky-500 focus-visible:ring-offset-white"
                }`}
              >
                <span
                  className={`pointer-events-none absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-200 ease-out ${
                    isDark ? "translate-x-[1.375rem]" : "translate-x-0"
                  }`}
                >
                  {isDark ? (
                    <FaMoon
                      className="h-3.5 w-3.5 text-slate-700"
                      aria-hidden
                    />
                  ) : (
                    <FaSun className="h-3.5 w-3.5 text-amber-500" aria-hidden />
                  )}
                </span>
              </button>
            </div>
            <h1 className="text-3xl font-bold leading-tight md:text-5xl">
              Bruno Coelho
            </h1>
            <h2
              className={`text-base font-medium md:text-lg ${
                isDark ? "text-cyan-200" : "text-sky-800"
              }`}
            >
              Desenvolvedor Full Stack
            </h2>

            <p
              className={`max-w-3xl text-sm leading-relaxed md:text-base ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Desenvolvo sites e sistemas web com foco em performance,
              usabilidade e design profissional, com backends robustos, APIs bem
              estruturadas e arquitetura preparada para crescer, transformando
              ideias em produtos digitais que geram resultados.
            </p>

            <div className="flex flex-wrap gap-2">
              <a
                href="https://github.com/brunocoelhosi"
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition ${
                  isDark
                    ? "border-slate-700 text-slate-200 hover:border-cyan-400/50 hover:text-cyan-200"
                    : "border-slate-300 bg-white text-slate-700 hover:border-sky-400 hover:text-sky-700"
                }`}
              >
                <FaGithub className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/bruno-coelho-13009a207/"
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition ${
                  isDark
                    ? "border-slate-700 text-slate-200 hover:border-cyan-400/50 hover:text-cyan-200"
                    : "border-slate-300 bg-white text-slate-700 hover:border-sky-400 hover:text-sky-700"
                }`}
              >
                <FaLinkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="mailto:brunocoelho.si@outlook.com"
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition ${
                  isDark
                    ? "border-slate-700 text-slate-200 hover:border-cyan-400/50 hover:text-cyan-200"
                    : "border-slate-300 bg-white text-slate-700 hover:border-sky-400 hover:text-sky-700"
                }`}
              >
                <FaEnvelope className="h-4 w-4" />
                Email
              </a>
              <a
                href="https://wa.me/5534991880240"
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition ${
                  isDark
                    ? "bg-cyan-500 text-slate-950 hover:bg-cyan-400"
                    : "bg-sky-700 text-white hover:bg-sky-600"
                }`}
              >
                <FaWhatsapp className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </header>
      </section>
    </section>
  );
}

export default Hero;
