import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

const projects = [
  { id: 1, title: "Project One", description: "Description of project one" },
  { id: 2, title: "Project Two", description: "Description of project two" },
  { id: 3, title: "Project Three", description: "Description of project three" }
];

function Projects() {
  return (
    <section id="projects" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center">Projects</h2>
      <div className="flex flex-wrap justify-center mt-4">
        {projects.map((project) => (
          <div key={project.id} className="m-4 p-4 border rounded bg-white shadow-lg">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p>{project.description}</p>
            <Link to={`/projects/${project.id}`} className="text-blue-500">View Project</Link>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <p className="text-center text-red-500">Project not found</p>;
  }

  return (
    <section className="p-8 bg-white text-center">
      <h2 className="text-3xl font-bold">{project.title}</h2>
      <p className="mt-2">{project.description}</p>
      <Link to="/" className="text-blue-500">Back to Projects</Link>
    </section>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
