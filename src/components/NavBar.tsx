import React from "react";
import {StaticImage} from "gatsby-plugin-image";
import {Link} from "gatsby";
import LoginLink from "./LoginLink";

const NavBar: () => React.ReactNode = () => {
  return (
      <nav className="flex flex-row items-center justify-between pt-4">
          <StaticImage src="../images/logo-circle.svg" alt="H2O Logo" width={80}/>
          <div className="flex flex-row items-center justify-between">
              <Link to="/" className="px-6">
                  Accueil
              </Link>
              <Link to="/orchestre" className="px-6 border-x-[1px] border-amber-600 flex-1 text-center">
                  L'orchestre
              </Link>
              <Link to="/concerts" className="px-6 border-r-[1px] border-amber-600 flex-1 text-center">
                  Concerts
              </Link>
              <Link to="/contact" className="px-6 border-r-[1px] border-amber-600 flex-1 text-center">
                  Contact
              </Link>
              <Link to="/membres" className="px-6 flex-1 text-center">
                  Membres
              </Link>
          </div>

      </nav>
  )
}

export default NavBar