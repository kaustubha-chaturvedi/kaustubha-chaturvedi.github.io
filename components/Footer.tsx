"use client"

export default function Footer() {
  return (
    <footer className="w-full py-10 sm:py-12 px-4 sm:px-8 md:px-12 bg-[#0e0e0e] border-t border-white/5 overflow-x-clip">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-screen-2xl mx-auto gap-8">
        <div className="font-label text-[8px] sm:text-[10px] tracking-widest sm:tracking-[0.3em] uppercase text-white/30 order-2 md:order-1 text-center md:text-left">
          © 2024 SYSTEM_STABLE // ARCHITECT_LOG_V1
        </div>
        <div className="flex gap-6 sm:gap-12 order-1 md:order-2 flex-wrap justify-center">
          <a
            className="text-white/40 hover:text-accent transition-colors font-label text-[9px] sm:text-[10px] tracking-[0.08em] sm:tracking-widest uppercase"
            href="https://github.com/kaustubha-chaturvedi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            className="text-white/40 hover:text-accent transition-colors font-label text-[9px] sm:text-[10px] tracking-[0.08em] sm:tracking-widest uppercase"
            href="https://linkedin.com/in/kaustubha-chaturvedi"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-white/40 hover:text-accent transition-colors font-label text-[9px] sm:text-[10px] tracking-[0.08em] sm:tracking-widest uppercase"
            href="mailto:kaustubhachaturvedi@gmail.com"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
