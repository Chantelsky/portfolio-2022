import React from "react"
import gameIcon from "../Assets/gameIcon.svg"
import githubIcon from "../Assets/githubIcon.svg"
import twitterIcon from "../Assets/twitterIcon.svg"
import linkedinIcon from "../Assets/linkedinIcon.svg"
import hashnode from "../Assets/hashnode.svg"

const socialMediaIcons = [
  {
    name: "github",
    link: "https://github.com/Chantelsky",
    image: githubIcon,
  },
  {
    name: "hashnode",
    link: "https://chantelsky.hashnode.dev/",
    image: hashnode,
  },
  {
    name: "itchio",
    link: "https://chantelsky.itch.io/",
    image: gameIcon,
  },
  {
    name: "twitter",
    link: "https://twitter.com/chantelskydev",
    image: twitterIcon,
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/chantel-laver-2805a9189/",
    image: linkedinIcon,
  }
]

const Footer = () => {
  return (
    <div className="flex flex-column justify-center">
      <div className="flex flex-row w-100 mt-8 mb-5 w-3/5 justify-between w-5/6 lg:w-full">
        {socialMediaIcons.map((icon) => {
          return (
            <a href={icon.link} target="_blank" rel="noopener noreferrer" key={icon.name}>
              <img src={icon.image} alt={icon.name} className="w-8 h-8" />
              </a>
          )
        })}
      </div>
    </div>
  )
}

export default Footer
