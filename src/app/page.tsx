import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-20 p-12">
      <div className="z-10 max-w-5xl w-full items-center justify-evenly font-mono text-sm lg:flex">
        <div className="flex flex-col w-full">
          <div className="flex w-full justify-evenly pb-2">
            <Image
              src="/aokiji-ascii.png"
              alt="Shaun Logo"
              width={500}
              height={80}
              priority
            />
          </div>

          <div className="z-10 flex w-full justify-center">
            <div className="flex w-1/2 justify-center text-xl space-x-4">
              <a
                className="text-[#add8e6] hover:underline"
                href="https://shaunkh.bearblog.dev/"
                target="_blank"
              >
                <h1>blog</h1>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex w-full place-items-center font-mono justify-center">
        <div className="flex flex-col text-xl">
          <h1>hi, my name&apos;s shaun.</h1>
          <h1>
            i build stuff at{" "}
            <a
              className="text-[#add8e6] hover:underline"
              href="https://elixir.xyz/"
              target="_blank"
            >
              elixir
            </a>
            .
          </h1>
          <h1>usually in new york.</h1>
          <h1>
            if you want to reach out: {""}
            <a
              className="text-[#add8e6] hover:underline"
              href="https://twitter.com/0xshxdow"
              target="_blank"
            >
              @0xshad0wr{" "}
            </a>
          </h1>
          <div className="flex w-full space-x-2 pt-2">
            <a
              className="text-[#add8e6]"
              href="https://github.com/shaunkh/"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              className="text-[#add8e6]"
              href="https://www.instagram.com/shaunkhundker/"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
