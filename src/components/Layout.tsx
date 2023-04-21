import React from 'react';
import {Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";

type LayoutProps = {
    children: React.ReactNode
}

export const Layout = ({children}: LayoutProps) => {
    return (
        <div className="flex flex-col h-screen">
            <nav className="flex items-center justify-between flex-wrap p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <StaticImage src="../images/logo-circle.png" alt="H2O Logo" width={80}/>
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
                            <a href="#responsive-header"
                               className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
                                L'orchestre
                            </a>
                        </div>
                        <div className="lg:w-24 text-center">
                            <a href="#responsive-header"
                               className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
                                Concerts
                            </a>
                        </div>
                        <div className="lg:w-24 text-center">
                            <a href="#responsive-header"
                               className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
                                Contact
                            </a>
                        </div>
                        <div className="lg:w-24 text-center">
                            <Link to="/membres">Membres</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="flex-1 overflow-y-auto p-4">{children}</div>
        </div>
    );
};
