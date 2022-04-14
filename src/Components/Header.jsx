import React from "react"
import Profile from "../Assets/Profile.png"

const Header = () => {
  return (
    <>
      <div className="flex flex-col items-center lg:flex-row">
        <div>
          <img
            src={Profile}
            alt="Chantel"
            className="rounded-full scale-50 bg-contain w-96"
          />
        </div>
        <div className="text-center">
          <div className="heading-color text-3xl font-semibold leading-relaxed">
            <p>Hello! I'm Chantel</p>
            <p>A Software Engineer</p>
          </div>
          <div className="mb-8 lg:flex lg:flex-col lg:mt-1 lg:text-sm">
            <p>I am passionate about building virtual experiences, </p>
            <p>learning new tools and programming languages.</p>
            <div className="mt-5 lg:mt-0">
            <a
              href="mailto:chantel.sky@protonmail.com"
              className="text-black font-semibold"
            >
              <p>Contact me</p>
            </a>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </>
  )
}

export default Header
