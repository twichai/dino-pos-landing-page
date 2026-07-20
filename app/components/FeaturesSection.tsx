import {
  WifiOff,
  Database,
  Search,
  ScanLine,
  Receipt,
  Package,
  BarChart3,
  Landmark,
  Users,
  UtensilsCrossed,
  Printer,
  Cloud,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import DinoCharacter from "./DinoCharacter";

interface Feature {
  icon: LucideIcon;
  label: string;
  desc: string;
}

const FEATURES: Feature[] = [
  { icon: WifiOff, label: "Offline First", desc: "ใช้ได้แม้ออฟไลน์" },
  { icon: Database, label: "SQLite", desc: "เก็บในเครื่อง" },
  { icon: Search, label: "Fast Search", desc: "ค้นหาเร็ว" },
  { icon: ScanLine, label: "Barcode", desc: "สแกนสินค้า" },
  { icon: Receipt, label: "ใบเสร็จ", desc: "พิมพ์ได้เลย" },
  { icon: Package, label: "Inventory", desc: "จัดการสต็อก" },
  { icon: BarChart3, label: "Reports", desc: "รายงานขาย" },
  { icon: Landmark, label: "VAT", desc: "คำนวณภาษี" },
  { icon: Users, label: "Employee", desc: "จัดการพนักงาน" },
  { icon: UtensilsCrossed, label: "Kitchen", desc: "ส่ง order ครัว" },
  { icon: Printer, label: "Printer", desc: "เชื่อมปริ้นเตอร์" },
  { icon: Cloud, label: "Cloud Backup", desc: "เสริมเมื่อต้องการ" },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="section-bg-base relative overflow-hidden px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading row with mascot */}
        <div className="mb-16 flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div className="max-w-2xl">
            <AnimateOnScroll>
              <span className="text-sm font-semibold uppercase tracking-widest text-dino-primary">
                Features
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll delay={100}>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-dino-dark sm:text-6xl">
                ครบทุกอย่าง
                <br />
                ที่ร้านต้องการ
              </h2>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll variant="scale" delay={200}>
            <DinoCharacter variant="pointing" size={180} />
          </AnimateOnScroll>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {FEATURES.map((f, i) => (
            <AnimateOnScroll
              key={f.label}
              variant="scale"
              delay={Math.min((i % 4) * 100, 400)}
            >
              <div className="group flex h-full flex-col gap-3 rounded-2xl border border-violet-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-100 to-purple-100 transition-colors group-hover:from-dino-primary group-hover:to-dino-secondary">
                  <f.icon className="h-5 w-5 text-dino-primary transition-colors group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-dino-dark">{f.label}</p>
                  <p className="text-xs text-gray-400">{f.desc}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
