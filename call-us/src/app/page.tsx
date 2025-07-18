
import Link from "next/link";
import StartButton from "./components/StartButton";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-start justify-center  px-8">
      <h1 className="text-6xl font-extrabold tracking-tight leading-tight text-white">
        CALL{' '}
        <span className="text-gradient">US</span>
      </h1>
      <p className="text-[#a3b5bc] text-xl mt-4 mb-8">
        Just relax, our AI will handle it.
      </p>
      <StartButton />
    </main>
  );
}