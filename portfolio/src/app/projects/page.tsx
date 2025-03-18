import Image from "next/image";

const projects = [
  { title: "AI Cat Project", description: "An AI project featuring cat images.", image: "/ai_cat_pic.jpg", link: "#" },
  { title: "Cat Meme Generator", description: "A fun meme generator powered by AI.", image: "/cat_meme.webp", link: "#" },
  { title: "Interactive Cat Play", description: "A JavaScript game where cats chase objects.", image: "/cat_play.png", link: "#" },
  { title: "Minimalist Cat Design", description: "A UI/UX project featuring a cat theme.", image: "/just_cat.jpg", link: "#" },
  { title: "Small Cat Project", description: "A microservice architecture demo.", image: "/small_cat.jpg", link: "#" },
];

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center min-h-screen px-6 md:px-12 lg:px-24">
      <h1 className="text-4xl font-bold text-white mt-16 md:mt-24">Projects</h1>
      <p className="text-gray-400 mt-4 text-lg text-center max-w-2xl">
        Here are some of my projects. Click on any to learn more!
      </p>

      <section className="mt-12 w-full max-w-5xl space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* Project Image */}
            <div className="w-full md:w-1/3">
              <Image src={project.image} alt={project.title} width={300} height={200} className="rounded-lg shadow-lg" />
            </div>

            {/* Project Details */}
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
              <p className="text-gray-400 mt-2">{project.description}</p>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline mt-2 inline-block">
                  View Project →
                </a>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Add padding at the bottom for spacing */}
      <div className="h-32"></div>
    </main>
  );
}
