'use client';

import {usePathname} from "next/navigation";
import Link from "next/link";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {menuOptions} from "@/lib/constant";
import {clsx} from "clsx";
import {Separator} from "@/components/ui/separator";
import {Database, GitBranch, LucideMousePointerClick} from "lucide-react";

const Sidebar = () => {

  const pathName = usePathname();

  return (
    <nav className={"dark:bg-black h-screen overflow-scroll justify-between flex items-center flex-col gap-10 py-6 px-2"}>
      <div className={"flex items-center justify-center flex-col gap-8"}>
        <Link
          href={"/"}
          className={"flex font-bold flex-row"}
        >
          fuzzie.
        </Link>
        <TooltipProvider>
          {menuOptions.map((menu, index) => (
            <ul key={index}>
              <Tooltip delayDuration={0}>
                <TooltipTrigger>
                  <li>
                    <Link
                      href={menu.href}
                      className={clsx('group h-8 w-8 flex items-center justify-center scale-[1.5] rounded-lg p-[3px] cursor-pointer', {'dark:bg-[#2F006B] bg-[#EEE0FF]': pathName === menu.href})}
                    >
                      <menu.component selected={pathName === menu.href}/>
                    </Link>
                  </li>
                </TooltipTrigger>
                <TooltipContent
                  side={'right'}
                  className={'bg-black/10 backdrop-blur-xl'}
                >
                  <p>{menu.name}</p>
                </TooltipContent>
              </Tooltip>
            </ul>
          ))}
        </TooltipProvider>

        <Separator/>

        <div className={"flex flex-col items-center gap-9 dark:bg-[#353346]/30 py-4 px-2 rounded-full h-56 overflow-scroll border-[1px]"}>
          <div className={"relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]"}>
            <LucideMousePointerClick
              className={"dark:text-white"}
              size={18}
            >
              <div className={"border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]"}></div>
            </LucideMousePointerClick>

            {/*<div className={"border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]"}></div>*/}
          </div>

          <div className={"relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]"}>
            <GitBranch
              className={"dark:text-white"}
              size={18}
            ></GitBranch>

            <div className={"border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]"}></div>
          </div>


          <div className={"relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]"}>
            <Database
              className={"dark:text-white"}
              size={18}
            ></Database>

            <div className={"border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]"}></div>
          </div>

          <div className={"relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]"}>
            <GitBranch
              className={"dark:text-white"}
              size={18}
            ></GitBranch>
          </div>

        </div>

        {/* TODO fixed this */}
        {/*<div className={"flex items-center justify-center flex-col gap-8"}>*/}
        {/*  <ModeToggle></ModeToggle>*/}
        {/*</div>*/}

      </div>
    </nav>
  )
}

export default Sidebar;