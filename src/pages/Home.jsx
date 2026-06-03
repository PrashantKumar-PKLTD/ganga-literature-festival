import Hero from "../components/Hero";
import About from "../components/About";
import Speakers from "../components/Speakers";
import Schedule from "../components/Schedule";
import ProgrammeSteps from "../components/ProgrammeSteps";
import StudyDestinations from "../components/StudyDestinations";
import FestivalTextRows from "../components/FestivalTextRows";
import Registration from "../components/RegistrationForm";
import FAQ from "../components/FAQ";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <main>
      <Hero />
      <Reveal><About /></Reveal>
      <Reveal><Speakers /></Reveal>
      <Reveal><Schedule /></Reveal>
      <Reveal><ProgrammeSteps /></Reveal>
      <Reveal><StudyDestinations /></Reveal>
      <FestivalTextRows />
      <Reveal><Registration /></Reveal>
      <Reveal><FAQ /></Reveal>
    </main>
  );
}
