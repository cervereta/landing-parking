import { Header } from "@/components/layout/Header";
import { Hero, Stats, DualFeatures, HowItWorks, TrustSection, Testimonials, CTASection, Footer } from "@/components/landing";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <DualFeatures />
        <HowItWorks />
        <TrustSection />
        <Testimonials />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
