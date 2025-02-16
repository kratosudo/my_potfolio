import React from 'react';

function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Node.js", "Flask", "JSON"];
  return (
    <section id="skills" className="p-8 bg-gray-200">
      <h2 className="text-3xl font-bold text-center">Skills</h2>
      <div className="flex flex-wrap justify-center mt-4">
        {skills.map((skill) => (
          <div key={skill} className="m-2 bg-white p-4 rounded shadow-md">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
