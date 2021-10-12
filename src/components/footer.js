/* eslint-disable prettier/prettier */
import React from "react"

import github from "~/images/github.svg"
import twitter from "~/images/twitter.svg"
import facebook from "~/images/facebook.svg"

const Footer = () => {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <footer className="flex justify-between pb-4">
      // eslint-disable-next-line prettier/prettier
      <p className="text-sm font-semibold text-gray-600">
      projet TCPL Groupe 17 
      </p>
      <div className="flex gap-3 ml-4">
        <a href="https://twitter.com/strapijs" className="max-w-xs ml-4">
          <img src={twitter} alt="Twitter" />
        </a>
        <a href="https://facebook.com/strapijs" className="ml-3">
          <img src={facebook} alt="Facebook" />
        </a>
        <a
          href="github.com/thiere18"
          className="ml-3"
        >
          <img src={github} alt="GitHub" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
