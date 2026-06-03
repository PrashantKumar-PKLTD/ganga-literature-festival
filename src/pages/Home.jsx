import Hero from "../components/Hero";
import About from "../components/About";
import Speakers from "../components/Speakers";
import Schedule from "../components/Schedule";
import ProgrammeSteps from "../components/ProgrammeSteps";
import ExecutiveTeam from "../components/ExecutiveTeam";
import StudyDestinations from "../components/StudyDestinations";
import FestivalTextRows from "../components/FestivalTextRows";
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
      <Reveal><ExecutiveTeam /></Reveal>
      <Reveal><StudyDestinations /></Reveal>
      <FestivalTextRows />
      <Reveal><FAQ /></Reveal>
    </main>
  );
}
