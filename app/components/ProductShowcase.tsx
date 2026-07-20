import { ShoppingCart, Package, BarChart3, Receipt, ScanLine, Users } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

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
              Product
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

        {/* Main desktop mockup */}
        <AnimateOnScroll variant="scale" delay={200}>
          <DesktopMockup />
        </AnimateOnScroll>

        {/* Device trio */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <AnimateOnScroll variant="scale" delay={100}>
            <DeviceCard
              label="Tablet"
              caption="ขายหน้าร้าน"
              className="h-44"
              inner={<TabletInner />}
            />
          </AnimateOnScroll>
          <AnimateOnScroll variant="scale" delay={300}>
            <DeviceCard
              label="Mobile"
              caption="เช็คสต็อก"
              className="h-44"
              inner={<MobileInner />}
            />
          </AnimateOnScroll>
          <AnimateOnScroll variant="scale" delay={500}>
            <DeviceCard
              label="Desktop"
              caption="ดูรายงาน"
              className="h-44"
              inner={<DesktopInner />}
            />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Main desktop mockup — full POS window                                      */
/* -------------------------------------------------------------------------- */
function DesktopMockup() {
  const tiles = [
    { icon: ShoppingCart, label: "ขายสินค้า" },
    { icon: Package, label: "สต็อก" },
    { icon: BarChart3, label: "รายงาน" },
    { icon: Receipt, label: "ใบเสร็จ" },
    { icon: ScanLine, label: "Barcode" },
    { icon: Users, label: "พนักงาน" },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-violet-100 bg-white shadow-2xl">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-violet-50 bg-violet-50/50 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-400" />
        <div className="h-3 w-3 rounded-full bg-yellow-400" />
        <div className="h-3 w-3 rounded-full bg-green-400" />
        <span className="ml-3 text-xs font-medium text-gray-400">Dino POS — ร้านค้าของฉัน</span>
      </div>

      {/* Body */}
      <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-[200px_1fr]">
        {/* Sidebar */}
        <div className="hidden flex-col gap-2 sm:flex">
          {["หน้าหลัก", "ขาย", "สินค้า", "รายงาน", "ตั้งค่า"].map((item, i) => (
            <div
              key={item}
              className={`rounded-lg px-3 py-2 text-xs font-medium ${
                i === 0
                  ? "bg-dino-primary text-white"
                  : "text-gray-500 hover:bg-violet-50"
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Tiles */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {tiles.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center gap-2 rounded-xl border border-violet-50 bg-gradient-to-br from-violet-50 to-white p-4"
            >
              <Icon className="h-6 w-6 text-dino-primary" />
              <span className="text-xs font-medium text-dino-dark">{label}</span>
            </div>
          ))}
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
      <div className={`flex w-full items-center justify-center rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 to-white p-4 ${className}`}>
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
    <div className="flex h-full w-full max-w-[180px] flex-col gap-1.5 rounded-lg border border-violet-200 bg-white p-2">
      <div className="flex items-center justify-between">
        <span className="text-[8px] font-bold text-dino-primary">POS</span>
        <ShoppingCart className="h-3 w-3 text-dino-primary" />
      </div>
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-1 rounded bg-violet-50 px-1.5 py-1">
          <Package className="h-2 w-2 text-dino-secondary" />
          <div className="h-1 flex-1 rounded-full bg-violet-100" />
          <span className="text-[7px] text-gray-400">฿{(i * 50)}</span>
        </div>
      ))}
      <div className="mt-auto rounded bg-dino-primary px-2 py-1 text-center text-[8px] font-semibold text-white">
        ชำระเงิน
      </div>
    </div>
  );
}

function MobileInner() {
  return (
    <div className="flex h-full w-16 flex-col gap-1 rounded-xl border-2 border-violet-200 bg-white p-1.5">
      <div className="mx-auto h-1 w-4 rounded-full bg-violet-200" />
      <div className="mt-1 flex flex-col gap-1">
        <div className="flex items-center gap-1 rounded bg-violet-50 px-1 py-0.5">
          <Package className="h-2 w-2 text-dino-secondary" />
          <div className="h-0.5 flex-1 rounded-full bg-violet-100" />
        </div>
        <div className="flex items-center gap-1 rounded bg-violet-50 px-1 py-0.5">
          <Package className="h-2 w-2 text-dino-secondary" />
          <div className="h-0.5 flex-1 rounded-full bg-violet-100" />
        </div>
      </div>
      <div className="mt-auto rounded bg-dino-primary px-1 py-0.5 text-center text-[6px] font-semibold text-white">
        +
      </div>
    </div>
  );
}

function DesktopInner() {
  return (
    <div className="flex h-full w-full max-w-[200px] flex-col gap-1.5 rounded-lg border border-violet-200 bg-white p-2">
      <div className="flex items-center justify-between">
        <BarChart3 className="h-3 w-3 text-dino-primary" />
        <span className="text-[8px] font-semibold text-gray-500">รายงาน</span>
      </div>
      <div className="flex items-end gap-1">
        {[40, 65, 50, 80, 70].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t bg-gradient-to-t from-dino-primary to-dino-secondary"
            style={{ height: `${h * 0.4}px` }}
          />
        ))}
      </div>
    </div>
  );
}
