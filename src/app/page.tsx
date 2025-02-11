import Navbar from "@/components/global/navbar";
import {ContainerScroll} from "@/components/global/container-scroll-animation";
import {Button} from "@/components/ui/button";
import React from "react";
import {InfiniteMovingCards} from "@/components/global/infinite-moving-cards";
import {clients, products} from "@/lib/constant";
import {ConnectParallax} from "@/components/global/connect-parallax";

export default function Home() {
  return (
    <main>

      <Navbar></Navbar>

      <section
        className={"h-screen w-full bg-neutral-950 rounded-md overflow-visible relative flex flex-col items-center"}
      >
        <div
          className={"absolute inset-0 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"}
        ></div>
        <div className={"flex flex-col mt-[-100px] md:mt-[-50px]"}>
          <ContainerScroll
            titleComponent={
              <div className={"flex flex-col items-center justify-center"}>
                <Button
                  size={'lg'}
                  className={"p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D]  bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"}
                >
                  <span
                    className={"bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600 md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-black"}
                  >Start For Free Day</span>
                </Button>

                <h1
                  className={"text-5xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold"}
                >
                  Automate Your Work With Fuzzie
                </h1>
              </div>
            }
          ></ContainerScroll>
        </div>
      </section>

      <InfiniteMovingCards
        items={clients}
        className={"w-full mt-[25rem]"}
        direction={"right"}
        speed={"slow"}
      ></InfiniteMovingCards>

      <section>
        <ConnectParallax products={products}></ConnectParallax>
      </section>
    </main>
  );
}
