import { Code, User, Briefcase } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Student
            </h3>

            <p className="text-muted-foreground">
              I’m a second-year student specializing in web development, focused
              on creating modern and user-friendly websites. I’m constantly
              learning new tools and technologies and love turning ideas into
              functional digital experiences. Currently, I’m sharpening my
              skills through personal projects and hands-on practice.
            </p>

            <p className="text-muted-foreground">
              I enjoy solving problems and paying attention to detail while
              building web interfaces. My goal is to grow as a developer by
              improving both my technical skills and my understanding of good
              design and user experience. I’m actively looking for opportunities
              to learn, collaborate, and gain real-world exposure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="#contact"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive websites and applications using modern
                    frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Creating intuitive interfaces and seamless user experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Managing projects from concept to completion using agile
                    workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
