import { Download, Sparkles } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import DinoCharacter from "./DinoCharacter";

export default function Hero() {
  return (
    <section className="section-bg-base relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20">
      {/* Floating background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-violet-300/30 blur-3xl animate-blob" />
        <div className="absolute -right-20 top-40 h-80 w-80 rounded-full bg-purple-300/30 blur-3xl animate-blob [animation-delay:4s]" />
        <div className="absolute bottom-10 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-fuchsia-200/30 blur-3xl animate-blob [animation-delay:8s]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Mascot */}
        <AnimateOnScroll variant="scale">
          <DinoCharacter variant="hero" size={260} className="mb-2" />
        </AnimateOnScroll>

        {/* Badge */}
        <AnimateOnScroll delay={100}>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/70 px-4 py-1.5 text-xs font-medium text-dino-primary backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            ใช้ฟรีตลอดชีพ · ไม่ต้องใช้บัตรเครดิต
          </span>
        </AnimateOnScroll>

        {/* Headline */}
        <AnimateOnScroll delay={200}>
          <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-dino-dark sm:text-7xl md:text-8xl">
            POS ที่ใช้<span className="text-gradient">ฟรี</span>
            <br />
            ตลอดชีพ
          </h1>
        </AnimateOnScroll>

        {/* Quote */}
        <AnimateOnScroll delay={400}>
          <blockquote className="mt-8 max-w-xl text-xl font-medium leading-relaxed text-gray-600 sm:text-2xl">
            &ldquo;ถ้าเราไม่เสียเงิน
            <br className="sm:hidden" /> คุณก็ไม่ต้องเสียเงิน&rdquo;
          </blockquote>
        </AnimateOnScroll>

        {/* CTAs */}
        <AnimateOnScroll delay={500}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#cta"
              className="glow-primary flex items-center gap-2 rounded-full bg-dino-primary px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-violet-700"
            >
              <Download className="h-5 w-5" />
              ดาวน์โหลดฟรี
            </a>
            <a
              href="#product"
              className="rounded-full border border-violet-200 bg-white px-8 py-4 text-base font-semibold text-dino-dark transition-all duration-300 hover:border-violet-400 hover:bg-violet-50"
            >
              ดูตัวอย่าง
            </a>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium text-gray-400">เลื่อนลง</span>
          <div className="flex h-9 w-5 justify-center rounded-full border-2 border-violet-300 p-1">
            <div className="h-2 w-1 animate-bounce rounded-full bg-dino-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}
