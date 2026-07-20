"use client";

import { useState } from "react";
import Image from "next/image";
import { ShoppingCart, Package, Settings, Receipt, LayoutGrid } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

const SHOWCASE_ITEMS = [
  {
    id: "home",
    label: "ขายหน้าร้าน",
    icon: ShoppingCart,
    image: "/assets/home-screen.webp",
    description: "หน้าจอ POS สำหรับคิดเงินหน้าร้าน ใช้งานง่าย รวดเร็ว",
  },
  {
    id: "stock",
    label: "จัดการสต็อก",
    icon: Package,
    image: "/assets/stock.webp",
    description: "ระบบเช็คและอัปเดตจำนวนสินค้าคงคลังแบบเรียลไทม์",
  },
  {
    id: "setting",
    label: "ตั้งค่าระบบ",
    icon: Settings,
    image: "/assets/setting.webp",
    description: "ปรับแต่งข้อมูลร้านค้าและสิทธิ์การใช้งานของพนักงาน",
  },
  {
    id: "receipt",
    label: "ตั้งค่าใบเสร็จ",
    icon: Receipt,
    image: "/assets/receipt-setting.webp",
    description: "ออกแบบหัว/ท้ายใบเสร็จและโลโก้ร้านตามต้องการ",
  },
  {
    id: "overview",
    label: "ภาพรวมระบบ",
    icon: LayoutGrid,
    image: "/assets/sale-page.webp",
    description: "หน้าต่างการทำงานหลักของ Dino POS",
  },
];

export default function ProductShowcase() {
  return (
    <section
      id="product"
      className="section-bg-white relative overflow-hidden px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <AnimateOnScroll>
            <span className="text-sm font-semibold uppercase tracking-widest text-dino-primary">
              Product Showcase
            </span>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-dino-dark sm:text-6xl">
              หน้าตาเป็น<span className="text-gradient">ยังไง?</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="mx-auto mt-4 max-w-xl text-lg text-gray-500">
              เรียบง่าย เร็ว สวย พร้อมใช้งาน — ออกแบบมาให้ร้านค้าเล็กใช้งานได้ทันที
            </p>
          </AnimateOnScroll>
        </div>

        {/* Main desktop mockup with interactive tabs */}
        <AnimateOnScroll variant="scale" delay={200}>
          <DesktopMockup />
        </AnimateOnScroll>

        {/* Device duo */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <AnimateOnScroll variant="scale" delay={100} className="sm:col-span-2">
            <DeviceCard
              label="Tablet"
              caption="ขายหน้าร้าน"
              className="h-[320px] sm:h-[380px]"
              inner={<TabletInner />}
            />
          </AnimateOnScroll>
          <AnimateOnScroll variant="scale" delay={300} className="sm:col-span-1">
            <DeviceCard
              label="Mobile"
              caption="เช็คสต็อก"
              className="h-[320px] sm:h-[380px]"
              inner={<MobileInner />}
            />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Main desktop mockup — full POS window with interactive screenshot tabs     */
/* -------------------------------------------------------------------------- */
function DesktopMockup() {
  const [activeId, setActiveId] = useState("home");
  const activeItem =
    SHOWCASE_ITEMS.find((item) => item.id === activeId) || SHOWCASE_ITEMS[0];

  return (
    <div className="overflow-hidden rounded-2xl border border-violet-100 bg-white shadow-2xl">
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-violet-100 bg-violet-50/50 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
          <span className="ml-3 text-xs font-medium text-gray-500">
            Dino POS — {activeItem.label}
          </span>
        </div>
        <span className="hidden text-xs font-medium text-gray-400 sm:inline-block">
          {activeItem.description}
        </span>
      </div>

      {/* Body */}
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-[200px_1fr] sm:p-6">
        {/* Sidebar tabs */}
        <div className="flex flex-row gap-1.5 overflow-x-auto pb-2 sm:flex-col sm:overflow-x-visible sm:pb-0">
          {SHOWCASE_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = item.id === activeId;
            return (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`flex items-center gap-2.5 whitespace-nowrap rounded-xl px-3.5 py-2.5 text-xs font-semibold transition-all duration-200 ${isActive
                  ? "bg-dino-primary text-white shadow-md shadow-violet-500/20"
                  : "text-gray-600 hover:bg-violet-50 hover:text-dino-primary"
                  }`}
              >
                <Icon
                  className={`h-4 w-4 ${isActive ? "text-white" : "text-dino-primary"
                    }`}
                />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Screenshot preview area */}
        <div className="relative min-h-[300px] w-full overflow-hidden rounded-xl border border-violet-100 bg-gray-900/5 shadow-inner sm:min-h-[440px]">
          <Image
            key={activeItem.id}
            src={activeItem.image}
            alt={`Dino POS - ${activeItem.label} (${activeItem.description})`}
            fill
            sizes="(max-width: 1200px) 100vw, 800px"
            className="object-contain object-center p-1 sm:p-2 transition-opacity duration-300"
            priority
          />
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Device cards                                                               */
/* -------------------------------------------------------------------------- */
function DeviceCard({
  label,
  caption,
  className,
  inner,
}: {
  label: string;
  caption: string;
  className: string;
  inner: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`flex w-full items-center justify-center rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 to-white p-4 ${className}`}
      >
        {inner}
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm font-semibold text-dino-dark">{label}</p>
        <p className="text-xs text-gray-400">{caption}</p>
      </div>
    </div>
  );
}

function TabletInner() {
  return (
    <div className="relative w-full max-w-[480px] aspect-[16/10] overflow-hidden rounded-xl border-4 border-slate-800 bg-slate-900 shadow-xl transition-transform duration-300 hover:scale-[1.01]">
      {/* Tablet top camera dot */}
      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-slate-700 z-10" />
      <Image
        src="/assets/sale-page.webp"
        alt="Dino POS Tablet Edition - ระบบขายหน้าร้านรองรับแท็บเล็ต"
        fill
        sizes="(max-width: 768px) 100vw, 500px"
        className="object-cover object-top"
      />
    </div>
  );
}

function MobileInner() {
  return (
    <div className="relative h-full max-h-[270px] sm:max-h-[300px] aspect-[9/19.5] overflow-hidden rounded-[24px] border-4 border-slate-800 bg-slate-900 shadow-xl transition-transform duration-300 hover:scale-[1.03]">
      {/* Mobile camera notch / island */}
      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 h-2 w-10 rounded-full bg-slate-800 z-10 flex items-center justify-center">
        <div className="h-1 w-1 rounded-full bg-slate-600 ml-auto mr-2" />
      </div>
      <Image
        src="/assets/sale-page-mobile.webp"
        alt="Dino POS Mobile Edition - ระบบเช็คสต็อกสินค้าบนมือถือ"
        fill
        sizes="(max-width: 768px) 100vw, 200px"
        className="object-cover object-top"
      />
    </div>
  );
}
