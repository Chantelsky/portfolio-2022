import React from "react";

const Skills = () => {
  const skillList = [
    "C++",
    "JavaScript",
    "ReactJS",
    "HTML5",
    "CSS",
    "TypeScript",
    "GraphQL",
    "NodeJS",
    "PHP",
    "MYSQL",
    "Unity Engine",
    "Unreal Engine",
    "Unreal Engine Blueprints",
    "3D Animation",
    "3D Sculpting",
    "Texturing",
    "Retopology",
    "UV Mapping",
  ];
  return (
    <>
      <p className="heading-color text-black text-2xl font-semibold mb-4 mt-8">
        Skills
      </p>
      <div className="flex flex-row overflow-hidden flex-wrap text-sm mb-10">
        {skillList.map((skill) => {
          return (
            <ul key={skill}>
              <li className="border border-black-300 ml-2 mb-2 p-1" key={skill}>{skill}</li>
            </ul>
          );
        })}
      </div>
      <div className="divider"></div>
    </>
  );
};

export default Skills;
