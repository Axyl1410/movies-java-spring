import Anchor from "../components/common/Anchor";
import { AuroraBackground } from "../components/ui/aurora-background";
import { FlipWords } from "../components/ui/flip-words";

export default function Home() {
  const words = [
    "Spring Boot",
    "Vite",
    "Tailwind",
    "Framer Motion",
    "Aceternity UI",
  ];
  return (
    <AuroraBackground>
      <div className="relative flex flex-col items-center justify-center gap-4 px-4">
        <div className="flex h-[40rem] items-center justify-center px-4">
          <div className="mx-auto text-4xl font-normal text-neutral-600 dark:text-neutral-400">
            With
            <FlipWords words={words} /> <br />
            Websites by Axyl1410 <br />
            <Anchor
              href="/movies"
              text="Get Started"
              className="after:bg-blue-500"
            />
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}
