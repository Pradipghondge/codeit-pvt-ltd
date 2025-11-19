import Footer from "@/components/footer";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import Questions from "@/components/Questions";
import Testimonials from "@/components/Testimonials";
import Address from "@/components/address";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Testimonials />
      <Questions />
      <Address />
      <Footer/>
    </main>
  );
}
