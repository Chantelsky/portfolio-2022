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
      <div className="flex flex-col lg:flex-row lg:items-baseline lg:mt-14 lg:mb-10 lg:p-0 p-5 lg:mt-14 mt-5">
        <div className="flex-1 lg:mr-20">
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
            <p className="mt-4">Since graduating from university, I started focusing on software engineering and I am currently in the process of building a game in unreal engine.</p>
            <p className="mt-4">When I am not coding, I'm spending time with my dog - Shadow, playing video games and working out.</p>
            <p className="mt-4">Games I'm currently enjoying are: League Of Legends (summoners rift and teamfight tactics), Phasmaphobia and Stardew Valley</p>
          </div>
        </div>
        <div>
          <div>
            <p className="heading-color font-semibold text-xl lg:mb-4 mt-5 lg:mt-0">Past Experience</p>
            <div className="text-sm pt-2 lg:pt-0">
              {pastExperience.map((experience) => {
                return (
                  <>
                    <ul className="mb-5 leading-relaxed" key={experience.title}>
                      <li className="font-semibold heading-color" key={experience.title}>
                        {experience.title}
                      </li>
                      <li key={experience.job}>{experience.job}</li>
                      <li key={experience.date}>{experience.date}</li>
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
