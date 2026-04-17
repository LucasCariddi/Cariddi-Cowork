import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import ElMomento from "@/components/ElMomento";
import FotosEspacio from "@/components/FotosEspacio";
import Comunidad from "@/components/Comunidad";
import Planes from "@/components/Planes";
import Eventos from "@/components/Eventos";
import Reviews from "@/components/Reviews";
import SociosEstrategicos from "@/components/SociosEstrategicos";
import FAQ from "@/components/FAQ";
import Founders from "@/components/Founders";
import CTAWaitlist from "@/components/CTAWaitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <ElMomento />
        <FotosEspacio />
        <Comunidad />
        <Planes />
        <Eventos />
        <Reviews />
        <SociosEstrategicos />
        <FAQ />
        <Founders />
        <CTAWaitlist />
      </main>
      <Footer />
    </>
  );
}
