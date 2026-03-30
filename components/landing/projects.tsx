import { FaArrowRight } from 'react-icons/fa6';
import { projects, works } from '@/data';
import Button from '@/components/ui/button';
import Container from '@/components/layout/container';
import ProjectCard from '@/components/projects/project-card';

export default function Projects() {
  const featuredProjects = [...works, ...projects].slice(0, 4);

  return (
    <section id="projects" className="w-full bg-background pt-32 pb-40">
      <Container className="mb-24">
        <h2 className="text-5xl md:text-7xl font-black text-foreground mb-6 tracking-tighter">
          Selected <span className="text-primary italic">Works</span>
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
          Showcasing digital products built with obsessive attention to detail,
          performance, and user experience.
        </p>
      </Container>

      <Container className="flex flex-col gap-24">
        {featuredProjects.map((project, idx) => (
          <ProjectCard key={project.slug} project={project} idx={idx} />
        ))}
      </Container>

      <div className="w-full flex justify-center mt-24">
        <Button
          href="/projects"
          variant="secondary"
          size="lg"
          className="font-extrabold text-lg shadow-xl"
        >
          View All Projects <FaArrowRight />
        </Button>
      </div>
    </section>
  );
}
