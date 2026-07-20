import { Check, Plus, Sparkles } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import DinoCharacter from "./DinoCharacter";

const FREE_FEATURES = [
  "ขายสินค้า",
  "จัดการสต็อก",
  "คำนวณ VAT",
  "รายงานขาย",
  "พิมพ์ใบเสร็จ",
  "สแกน Barcode",
  "Offline First",
  "ไม่จำกัดจำนวนสินค้า",
];

const ADDONS = [
  { name: "Upload รูปสินค้า", desc: "เพิ่มรูปให้สินค้าทุกชิ้น" },
  { name: "Backup Database", desc: "สำรองข้อมูลอัตโนมัติ" },
  { name: "Cloud Database", desc: "เก็บข้อมูลบน Cloud" },
  { name: "Multi-device", desc: "ใช้หลายเครื่องพร้อมกัน" },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="section-bg-light relative overflow-hidden px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <AnimateOnScroll>
            <span className="text-sm font-semibold uppercase tracking-widest text-dino-primary">
              Pricing
            </span>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-dino-dark sm:text-6xl">
              จ่ายเฉพาะสิ่งที่
              <span className="text-gradient">คุณต้องการ</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="mx-auto mt-4 max-w-lg text-lg text-gray-500">
              เริ่มฟรี ใช้ฟรีตลอดชีพ จ่ายเฉพาะบริการ Cloud ที่คุณเลือกใช้
            </p>
          </AnimateOnScroll>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* FREE plan — hero card */}
          <AnimateOnScroll variant="scale">
            <div className="relative overflow-hidden rounded-3xl border-2 border-dino-primary bg-white p-8 shadow-xl">
              {/* glow blob */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-200/40 blur-3xl" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-dino-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                      <Sparkles className="h-3 w-3" />
                      Free Forever
                    </span>
                    <h3 className="mt-4 text-5xl font-bold text-dino-dark">฿0</h3>
                    <p className="mt-1 text-sm text-gray-500">ใช้ฟรีตลอดชีพ · ไม่จำกัดเวลา</p>
                  </div>
                  <DinoCharacter variant="giving" size={120} />
                </div>

                <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {FREE_FEATURES.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-dino-dark">
                      <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-dino-primary/10">
                        <Check className="h-3 w-3 text-dino-primary" />
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>

                <a
                  href="#cta"
                  className="mt-8 block rounded-full bg-dino-primary py-4 text-center text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:bg-violet-700"
                >
                  เริ่มใช้ฟรี
                </a>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Add-ons card */}
          <AnimateOnScroll variant="scale" delay={200}>
            <div className="flex h-full flex-col rounded-3xl border border-violet-200 bg-white p-8 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-dino-primary">
                    Add-ons
                  </span>
                  <h3 className="mt-4 text-5xl font-bold text-dino-dark">
                    แบบ<span className="text-gradient">เลือก</span>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">เพิ่มเติมเมื่อต้องการ · จ่ายรายครั้ง</p>
                </div>
                <DinoCharacter variant="carrying" size={120} />
              </div>

              <ul className="mt-8 flex-1 space-y-4">
                {ADDONS.map((addon) => (
                  <li
                    key={addon.name}
                    className="flex items-start gap-3 rounded-2xl bg-violet-50/50 p-4"
                  >
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-dino-secondary text-white">
                      <Plus className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-dino-dark">{addon.name}</p>
                      <p className="text-xs text-gray-500">{addon.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-center text-xs text-gray-400">
                ราคาและแพ็กเกจจะประกาศเร็ว ๆ นี้
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
