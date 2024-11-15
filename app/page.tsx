import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center bg-homeBg w-screen h-screen">
      <h1 className="uppercase font-roboto sm:text-[12vw] lg:text-[140px] text-[52px] text-white text-shadow-lg">whiteboard</h1>
      <div className="mt-[-7%] sm:mt-[-8%] lg:mt-[-90px] w-[90%] max-w-[1000px] sm:h-[70%] h-[400px] max-h-[500px] rounded-3xl 
      bg-slate-200 flex flex-col justify-around items-center bg-gradient-to-b from-gray-100 to-gray-300 opacity-95 shadow-lg shadow-black">
        <h1 className="uppercase font-montserrat sm:text-[11vw] lg:text-9xl text-5xl text-homeBg text-shadow-lg">WELCOME</h1>
        <div className="flex sm:flex-row flex-col justify-center items-center gap-7">
          <Link href={"/board"} className={`${buttonVariants({ variant: "greenBt", size: "greenBt" })} bg-homeBg`}>Try Out</Link>
          <Link href={"/board"} className={buttonVariants({ variant: "greenBt", size: "greenBt" })}>Login</Link>
        </div>
      </div>
    </main>
  );
}
