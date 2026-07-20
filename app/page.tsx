import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductShowcase from "./components/ProductShowcase";
import StorySection from "./components/StorySection";
import FeaturesSection from "./components/FeaturesSection";
import PricingSection from "./components/PricingSection";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="no-scrollbar">
        {/* Hero — mascot + headline + CTA */}
        <Hero />

        {/* Product Showcase — โชว์ทันที หลัง hero (อยากรู้ภายใน 3 วินาที) */}
        <ProductShowcase />

        {/* Story — scroll storytelling: 700/เดือน → Cloud → อยู่บนเครื่อง */}
        <StorySection />

        {/* Features — ครบทุกอย่าง + Dino ชี้ */}
        <FeaturesSection />

        {/* Pricing — FREE vs Add-ons + Dino แจกของ */}
        <PricingSection />

        {/* CTA — Download ใหญ่ + Dino ทักทาย */}
        <CTASection />
      </main>
    </>
  );
}
