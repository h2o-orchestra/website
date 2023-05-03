import React from 'react';
import {Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";
import LoginLink from "./LoginLink";
import NavBar from "./NavBar";

type LayoutProps = {
    children: React.ReactNode
}

export const Layout = ({children}: LayoutProps) => {
    return (
        <div className="container mx-auto flex flex-col h-screen">
            <NavBar />
            <div className="flex-1 overflow-y-auto p-4">{children}</div>
        </div>
    );
};
