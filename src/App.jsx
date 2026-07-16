import Background from "./components/Background";
import GlassCard from "./components/GlassCard";
import { useState } from "react";
import BirthdayConfetti from "./components/Confetti";export default function App(){
  const [opened, setOpened] = useState(false);
  return(
    <>
    {opened && <BirthdayConfetti />}
      <Background />

      <main className="min-h-screen flex items-center justify-center">
        <GlassCard
          opened={opened}
          setOpened={setOpened}
/>
      </main>
    </>

  )
}