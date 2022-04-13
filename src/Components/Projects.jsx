import React from "react"
import MisForMutant from "../Assets/MisForMutant.png"

const projects = [
  {
    name: "M is For Mutant",
    description:
      "My role in the team was creating 3D characters, running QA sessions, marketing and post release management.",
    additionalInfo:
      "At the start of the games release, M is For Mutant was featured and reached the top 100 on IndieDB and won best gameplay of QUT showcase in 2015.",
    link: "https://www.indiedb.com/games/m-is-for-mutant",
    image: MisForMutant,
  },
]

const Projects = () => {
  return (
    <>
      <div className="heading-color text-black text-2xl font-semibold mb-4 mt-8">
        Projects
      </div>
      {projects.map((project) => {
        return (
          <>
            <div className="md:w-[50rem] md:h-[20.5rem] w-[20.5rem] h-[40rem] p-4 rounded-2xl bg-white shadow-md dark:shadow-gray-200 flex flex-col ease-linear duration-300 md:flex-row-reverse mt-8 mb-5">
              <div className=" h-full w-full  shadow-md rounded-2xl basis-2/3 relative">
                <div className="h-full w-full relative border-2 border-white rounded-2xl">
                  <img src={project.image} alt={project.name} />
                </div>
              </div>
              <div className=" h-full w-full mr-2 rounded-2xl ">
                <h1 className="m-2">{project.name}</h1>
                <div className="flex flex-row flex-wrap m-2 text-sm">
                  <div className="mb-5">{project.description}</div>
                  <div>{project.additionalInfo}</div>
                  <div className="font-semibold text-black mt-5"><a href={project.link}>Check it out here</a></div>
                </div>
              </div>
            </div>
          </>
        )
      })}
      <div className="divider"></div>
    </>
  )
}

export default Projects
