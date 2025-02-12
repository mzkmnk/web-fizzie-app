import React from "react";
import Sidebar from "@/components/sidebar";

type Props = {children: React.ReactNode};

const Layout = ({children}:Props) => {
    return (
        <div className={"flex overflow-hidden h-screen"}>
            <Sidebar></Sidebar>
            <div className={"w-full"}>{children}</div>
        </div>
    )
}

export default Layout;