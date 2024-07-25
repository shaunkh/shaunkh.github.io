import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-20 p-12">
      <div className="z-10 max-w-5xl w-full items-center justify-evenly font-mono text-sm lg:flex">
        <div className="flex flex-col w-full">
          <div className="flex w-full justify-evenly -mb-8">
            <Image
              className="relative dark:invert"
              src="/Shaun Logo-02.png"
              alt="Shaun Logo"
              width={180}
              height={50}
              priority
            />
          </div>

          <div className="z-10 flex w-full justify-center">
            <div className="flex w-1/2 justify-center text-xl space-x-4">
              {/* TODO add work */}
              {/* <Link href="/" target="_blank">
                <h1>Work</h1>
              </Link> */}
              <a href="https://shaunkh.xyz/" target="_blank">
                <h1>blog</h1>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex w-full place-items-center font-mono justify-center">
        <Image
          className="relative"
          src="/shaunPFP.png"
          alt="Shaun PFP"
          width={250}
          height={37}
          priority
        />
        <div className="flex flex-col text-xl">
          <h1>hi, my name&apos;s shaun.</h1>
          <h1>
            i build stuff at{" "}
            <a
              className="text-[#AA00FF] hover:underline"
              href="https://elixir.xyz/"
              target="_blank"
            >
              elixir
            </a>
            .
          </h1>
          <h1>usually in new york.</h1>

          <div className="flex w-full space-x-2 pt-2">
            <a href="https://twitter.com/0xshad0wr" target="_blank">
              <FaTwitter />
            </a>
            <a href="https://github.com/shaunkh/" target="_blank">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/shaunkhundker/" target="_blank">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
