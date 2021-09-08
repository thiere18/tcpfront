import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import StrapiLogo from "~/images/logo.png"
import xc from "../images/favicon.png"
const Header = ({ setOpenModal }) => {
  return (
    <header className="p-8">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center md:flex-row">
          <Link className="mx-2 text-lg w-40 mb-4" to="/">
            <img src={xc} alt="strapi catalog logo" />
          </Link>
          <Link className="mx-2 mb-2 md:mb-0 text-lg" to="/">
            Categories
          </Link>
          <Link className="mx-2 mb-2 md:mb-0 text-lg" to="/products">
            Biens
          </Link>

          <button
            className="mx-2 mb-2 md:mb-0 text-lg"
            onClick={() => setOpenModal(true)}
          >
            Rechercher
          </button>
          <Link className="mx-2 mb-2 md:mb-0 text-lg" to="/contact">
            Contacts
          </Link>
        </div>
      </div>
      <hr className="mt-6 m-auto w-24 border-t-4" />
    </header>
  )
}

Header.propTypes = {
  siteName: PropTypes.string,
}

Header.defaultProps = {
  siteName: `trouveruntoit`,
}

export default Header
