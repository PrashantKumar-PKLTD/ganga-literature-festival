import Hero from "../components/Hero";
import About from "../components/About";
import Speakers from "../components/Speakers";
import Schedule from "../components/Schedule";
import Gallery from "../components/Gallery";
import Sponsorship from "../components/Sponsorship";
import Registration from "../components/RegistrationForm";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <main>
      <Hero />
      <Reveal><About /></Reveal>
      <Reveal><Speakers /></Reveal>
      <Reveal><Schedule /></Reveal>
      <Reveal><Gallery /></Reveal>
      <Reveal><Sponsorship /></Reveal>
      <Reveal><Registration /></Reveal>
      <Reveal><FAQ /></Reveal>
      <Reveal><Contact /></Reveal>
    </main>
  );
}
