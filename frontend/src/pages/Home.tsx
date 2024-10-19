import { motion } from "framer-motion";
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
    <div className="h-screen w-screen overflow-x-hidden">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="h-[40rem] flex justify-center items-center px-4">
            <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
              With
              <FlipWords words={words} /> <br />
              Websites by Axyl1410
            </div>
          </div>
        </motion.div>
      </AuroraBackground>
    </div>
  );
}
