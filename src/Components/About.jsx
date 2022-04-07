import React from "react"

const About = () => {
  const pastExperience = [
    {
      title: "Software Engineer",
      job: "IntelliHR - Australia",
      date: "August 2021 - Present",
    },
    {
      title: "Software Engineer",
      job: "FoundU - Australia",
      date: "November 2020 - August 2021",
    },
    {
      title: "Frontend Developer",
      job: "Outfit ",
      date: "April 2020 - November 2020",
    },
  ]

  return (
    <>
      <div className="flex flex-row items-baseline mt-14 mb-10">
        <div className="flex-1 mr-20">
          <p className="heading-color text-black text-2xl font-semibold mb-4">
            About Me
          </p>
          <div className="text-sm leading-relaxed">
            <p>
              In 2015 I graduated from Queensland University of Technology (QUT)
              where I received a Bachelor of Games and Interactive
              Entertainment. Throughout my time at QUT I learned the game
              development lifecycle including releasing and publishing a game on
              IndieDB. Along with programming/scripting, 3D art, rigging and
              animation.
            </p>
            <p className="mt-4">add more</p>
          </div>
        </div>
        <div>
          <div>
            <p className="heading-color  text-xl mb-4">Past Experience</p>
            <div className="text-sm">
              {pastExperience.map((experience) => {
                return (
                  <>
                    <ul className="mb-5 leading-relaxed" key={experience.title}>
                      <li className="font-semibold heading-color">
                        {experience.title}
                      </li>
                      <li>{experience.job}</li>
                      <li>{experience.date}</li>
                    </ul>
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </>
  )
}

export default About
