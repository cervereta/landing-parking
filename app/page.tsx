import { Header } from "@/components/layout/Header";
import { HeroCinematic, Stats, DualFeatures, HowItWorksCinematic, TrustSection, Testimonials, CTASection, Footer } from "@/components/landing";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroCinematic />
        <Stats />
        <DualFeatures />
        <HowItWorksCinematic />
        <TrustSection />
        <Testimonials />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
