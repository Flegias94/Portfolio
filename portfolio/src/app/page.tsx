import ProjectCard from "./components/ProjectCard";

export default function Home() {
  const projects = [
    { title: "Project One", description: "A cool project.", link: "#" },
    { title: "Project Two", description: "Another cool project.", link: "#" },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">My Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </main>
  );
}
