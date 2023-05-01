import React from 'react';
import {Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";
import LoginLink from "./LoginLink";

type LayoutProps = {
    children: React.ReactNode
}

export const Layout = ({children}: LayoutProps) => {
    return (
        <div className="container mx-auto flex flex-col h-screen">
            <nav className="flex items-center justify-between flex-wrap p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <StaticImage src="../images/logo-circle.svg" alt="H2O Logo" width={80}/>
                </div>
                <div className="block lg:hidden">
                    <button
                        className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
                        <svg className="h-3 w-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 7h20v2H0v-2zm0 7h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>
                <div className="w-full hidden lg:block lg:flex lg:flex-row lg:justify-end lg:w-auto">
                    <div className="lg:flex lg:flex-row text-sm divide-y lg:divide-y-0 lg:divide-x divide-amber-500">
                        <div className="lg:w-24 text-center">
                            <Link to="/orchestre">
                                L'orchestre
                            </Link>
                        </div>
                        <div className="lg:w-24 text-center">
                            <Link to="/concerts">
                                Concerts
                            </Link>
                        </div>
                        <div className="lg:w-24 text-center">
                            <Link to="/contact">
                                Contact
                            </Link>
                        </div>
                        <div className="lg:w-24 text-center">
                            <LoginLink />
                        </div>
                    </div>
                </div>
            </nav>
            <div className="flex-1 overflow-y-auto p-4">{children}</div>
        </div>
    );
};
