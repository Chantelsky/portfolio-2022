import React from "react"
import gameIcon from "../Assets/gameIcon.svg"
import githubIcon from "../Assets/githubIcon.svg"
import twitterIcon from "../Assets/twitterIcon.svg"
import linkedinIcon from "../Assets/linkedinIcon.svg"

const Footer = () => {
  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-row w-100 mt-8 w-3/5 justify-between">
        <a href="https://chantelsky.itch.io/" target="_blank" rel="noreferrer">
          <img src={gameIcon} alt="itchio" />
        </a>
        <a
          href="https://github.com/Chantelsky"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="github" />
        </a>
        <a
          href="https://twitter.com/chantelskydev"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitterIcon} alt="twitter" />
        </a>
        <a
          href="https://www.linkedin.com/in/chantel-laver-2805a9189/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="linkedin" />
        </a>
      </div>
    </div>
  )
}

export default Footer
