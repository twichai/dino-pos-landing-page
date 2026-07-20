import { Cloud, HardDrive, Coins } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

/**
 * StorySection — scroll storytelling.
 *
 * Three acts, each as a full-viewport beat:
 *   1. ร้านค้าเล็ก ไม่ควรจ่าย 700/เดือน
 *   2. จ่ายเฉพาะ Cloud
 *   3. ทุกอย่างยังอยู่บนเครื่องคุณ
 */
export default function StorySection() {
  return (
    <section id="story" className="relative">
      {/* Act 1 — light background */}
      <article className="section-bg-light relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-32 text-center">
        <AnimateOnScroll variant="blur">
          <Coins className="mb-8 h-12 w-12 text-dino-secondary" />
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <p className="text-xl font-medium text-gray-500 sm:text-2xl">ร้านค้าเล็ก</p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={200}>
          <h2 className="mt-4 max-w-4xl text-5xl font-bold leading-tight text-dino-dark sm:text-7xl">
            ไม่ควรต้องจ่าย
            <br />
            <span className="text-gradient">700 บาท</span>ทุกเดือน
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={400}>
          <p className="mt-8 max-w-md text-lg text-gray-500">
            POS ส่วนใหญ่เก็บเงินรายเดือนเพื่อฟีเจอร์ที่คุณไม่ได้ใช้
            <br />
            เราเปลี่ยนเรื่องนี้
          </p>
        </AnimateOnScroll>
      </article>

      {/* Act 2 — dark background, hero word */}
      <article className="section-bg-dark relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-32 text-center">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl animate-blob" />
          <div className="absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl animate-blob [animation-delay:5s]" />
        </div>

        <div className="relative z-10">
          <AnimateOnScroll variant="blur">
            <Cloud className="mb-8 h-14 w-14 text-dino-secondary" />
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <p className="text-xl font-medium text-violet-200/70 sm:text-2xl">คุณจ่าย</p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={300}>
            <h2 className="mt-2 text-7xl font-bold leading-none text-white sm:text-9xl">
              เฉพาะ
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={500}>
            <h2 className="text-gradient text-8xl font-bold leading-none sm:text-[10rem]">
              Cloud
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={700}>
            <p className="mt-8 max-w-md text-lg text-violet-200/70">
              เท่านั้น — เมื่อคุณต้องการมันจริง ๆ
            </p>
          </AnimateOnScroll>
        </div>
      </article>

      {/* Act 3 — light background, reassurance */}
      <article className="section-bg-white relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-32 text-center">
        <AnimateOnScroll variant="blur">
          <HardDrive className="mb-8 h-12 w-12 text-dino-primary" />
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <h2 className="max-w-3xl text-4xl font-bold leading-tight text-dino-dark sm:text-6xl">
            ทุกอย่าง
            <br />
            ยังอยู่<span className="text-gradient">บนเครื่องคุณ</span>
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={300}>
          <p className="mt-8 max-w-md text-lg text-gray-500">
            ข้อมูล สต็อก รายงาน ใบเสร็จ — เก็บใน SQLite บนเครื่องของคุณ
            <br />
            ทำงานได้แม้ไม่มีอินเทอร์เน็ต
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={500} variant="scale">
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {["SQLite", "Offline First", "สต็อก", "รายงาน", "ใบเสร็จ"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-dino-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </AnimateOnScroll>
      </article>
    </section>
  );
}
