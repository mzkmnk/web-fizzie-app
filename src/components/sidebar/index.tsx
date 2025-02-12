'use client';

import {usePathname} from "next/navigation";
import Link from "next/link";
import {Tooltip, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {menuOptions} from "@/lib/constant";
import {clsx} from "clsx";

const Sidebar = () => {

    const pathName = usePathname();

    return (
        <div className={"dark:bg-black h-screen overflow-scroll justify-between flex items-center flex-col gap-10 py-6 px-2"}>
            <div className={"flex items-center justify-center flex-col gap-8"}>
                <Link href={"/"} className={"flex font-bold flex-row"}>
                    fuzzie.
                </Link>
                <TooltipProvider>
                    {menuOptions.map((menu,index) => (
                        <ul key={index}>
                            <Tooltip delayDuration={0}>
                                <TooltipTrigger>
                                    <li>
                                        <Link href={menu.href} className={clsx('group h-8 w-8 flex items-center justify-center scale-[1.5] rounded-lg p-[3px] cursor-pointer',{'dark:bg-[#2F006B] bg-[#EEE0FF]':pathName === menu.href})}></Link>
                                    </li>
                                </TooltipTrigger>
                            </Tooltip>
                        </ul>
                    ))}
                </TooltipProvider>
            </div>
        </div>
    )
}

export default Sidebar;