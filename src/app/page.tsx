import Landing from "@/components/Landing";
import Hero from "@/components/Hero";
import Questions from "@/components/Questions";
import Testimonials from "@/components/Testimonials";
import Address from "@/components/address";

export default function Home() {
  return (
    <main>
      <Landing />
      <Hero />
      <Testimonials />
      <Questions />
      <Address />
    </main>
  );
}
