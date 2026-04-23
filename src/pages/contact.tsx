type ProjectsProps = {
  isDark: boolean;
};

export function Contact({ isDark }: ProjectsProps) {
  return (
    <section className="grid gap-6 md:grid-cols-2">
      <article
        className={`rounded-2xl border p-6 ${
          isDark
            ? "border-slate-800 bg-slate-900/60 shadow-lg shadow-slate-950/25"
            : "border-slate-200 bg-white shadow-sm"
        }`}
      >
        <h2 className="mb-3 text-2xl font-semibold">Sobre mim</h2>
        <p
          className={`text-sm leading-relaxed md:text-base ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          Trabalho com desenvolvimento de interfaces responsivas e sistemas
          completos, equilibrando design, usabilidade e performance para
          entregar experiencias digitais com qualidade.
        </p>
      </article>

      <article
        className={`rounded-2xl border p-6 ${
          isDark
            ? "border-slate-800 bg-slate-900/60 shadow-lg shadow-slate-950/25"
            : "border-slate-200 bg-white shadow-sm"
        }`}
      >
        <h2 className="mb-3 text-2xl font-semibold">Contato</h2>
        <ul
          className={`space-y-3 text-sm md:text-base ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          <li>
            Email:
            <a
              className={`ml-2 transition ${
                isDark
                  ? "text-cyan-300 hover:text-cyan-200"
                  : "text-sky-700 hover:text-sky-600"
              }`}
              href="mailto:bruno@email.com"
            >
              brunocoelho.si@outlook.com
            </a>
          </li>
          <li>
            WhatsApp:
            <a
              className={`ml-2 transition ${
                isDark
                  ? "text-cyan-300 hover:text-cyan-200"
                  : "text-sky-700 hover:text-sky-600"
              }`}
              href="https://wa.me/5534991880240"
              target="_blank"
              rel="noreferrer"
            >
              +55 (34) 991880240
            </a>
          </li>
          <li>
            LinkedIn:
            <a
              className={`ml-2 break-all transition ${
                isDark
                  ? "text-cyan-300 hover:text-cyan-200"
                  : "text-sky-700 hover:text-sky-600"
              }`}
              href="https://www.linkedin.com/in/bruno-coelho-13009a207/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/bruno-coelho-13009a207
            </a>
          </li>
        </ul>
      </article>
    </section>
  );
}
export default Contact;
