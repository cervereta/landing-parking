import { Header } from "@/components/layout/Header";
import { Hero, DualFeatures, HowItWorks, TrustSection, CTASection, Footer } from "@/components/landing";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <DualFeatures />
        <HowItWorks />
        <TrustSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
