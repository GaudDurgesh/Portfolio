import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Streaming Platform",
    description:
      "DevStream – A Netflix-inspired full-stack video streaming web app with a modern UI and dynamic movie browsing experience.",
    image: "/projects/DevStream.png",
    tags: ["MERN", "Redux", "Firebase"],
    demoUrl: "https://dev-stream-blue.vercel.app",
    githubUrl: "https://dev-stream-blue.vercel.app/signup",
  },
  {
    id: 2,
    title: "SaaS Landing Page",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Chat Application",
    description:
      "A real-time chat application with instant messaging and a responsive user interface.",
    image: "/projects/ChatApp.png",
    tags: ["Socket.io", "Arcjet", "TailwindCSS"],
    demoUrl: "https://chat-app-js-15e9.onrender.com/signup",
    githubUrl: "https://github.com/GaudDurgesh/Chat-App-JS",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text font-bold mb-4 text-centre">
          Featured <span className="text-primary"> Projects </span>{" "}
        </h2>

        <p className="text-centre text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.F
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      <ExternalLink size={20} /> Demo URL
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      <Github size={20} /> GitHub URL
                    </a>
                  </div>
                </div>{" "}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/GaudDurgesh?tab=repositories"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            {" "}
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
