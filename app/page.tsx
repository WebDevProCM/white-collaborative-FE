import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center bg-homeBg w-screen h-screen">
      <h1 className="uppercase font-roboto text-9xl text-white text-shadow-lg">whiteboard</h1>
      <div className="mt-[-50px] w-[800px] h-[400px] rounded-3xl bg-slate-200 flex flex-col justify-around 
        items-center bg-gradient-to-r from-gray-100 to-gray-300 opacity-95 shadow-lg shadow-black">
        <h1 className="uppercase font-montserrat text-[110px] text-homeBg text-shadow-lg">WELCOME</h1>
        <div className="flex justify-center items-center gap-7">
          <Link href={"/board"} className={`${buttonVariants({ variant: "greenBt", size: "greenBt" })} bg-homeBg`}>Try Out</Link>
          <Link href={"/board"} className={buttonVariants({ variant: "greenBt", size: "greenBt" })}>Login</Link>
        </div>
      </div>
    </main>
  );
}
