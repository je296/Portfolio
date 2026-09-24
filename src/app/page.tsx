import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Languages,
  Users,
  BookOpen,
  Lightbulb,
  Mail,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile, projects } from "@/lib/portfolio";
import {
  Navigation,
} from "@/components/portfolio-interactions";
import Image from "next/image";
import profilePicture from "./assets/profile-pic.jpg";
import { TechStack } from "@/components/tech-stack";
import { SystemArchitecture } from "@/components/system-architecture";

export default function Home() {
  return (
    <>
      <a href="#main" className="fixed -top-24 left-4 z-100 bg-primary px-5 py-3 text-primary-foreground focus:top-4">
        Skip to content
      </a>
      <header className="flex h-20 w-full items-center justify-between gap-4 border-b px-5 sm:h-25 sm:px-8 lg:px-12">
        <a className="inline-flex items-center text-lg leading-none font-medium tracking-tight sm:text-2xl" href="#" aria-label="Portfolio home">
          <Code2 className="mr-2.5 size-6 shrink-0 text-highlight" aria-hidden="true" /> Portfolio
        </a>
        <Navigation />
      </header>
      <main id="main">
        <section className="bg-background" aria-labelledby="hero-title">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-9 px-5 pt-10 pb-16 sm:px-8 sm:pt-16 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:pt-19">
            <div className="min-w-0">
              <div className="flex items-center gap-2.5 text-[10px] font-normal tracking-widest text-muted-foreground sm:text-xs">
                <span className="size-2 shrink-0 rounded-full bg-highlight ring-4 ring-highlight/10" /> Performance Enthusiast
              </div>
              <h1 id="hero-title" className="mt-5 text-3xl leading-tight font-normal tracking-tight sm:text-4xl xl:text-[44px]">
                Full-Stack Software Engineer
                <br />
                <span className="text-muted-foreground">Focused on reliable systems.</span>
              </h1>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-[17px] sm:leading-[1.85]">{profile.introduction}</p>
              <div className="my-6 flex flex-wrap gap-4 text-[10px] font-normal tracking-wider text-muted-foreground sm:text-xs">
                <span className="flex items-center gap-2">
                  <MapPin size={14} aria-hidden="true" /> {profile.location.toUpperCase()}
                </span>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-6 sm:mt-8">
                <Button asChild size="lg" className="h-12 gap-5 rounded-md px-6 font-normal">
                  <a href="#work">
                    Explore my work <ArrowDownRight />
                  </a>
                </Button>
                <a className="flex items-center gap-2 text-sm font-normal text-muted-foreground hover:text-foreground" href="#about">
                  About me <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
            <Image
              src={profilePicture}
              alt={`Portrait of ${profile.name}`}
              className="block aspect-square h-auto w-[85%] max-w-[480px] min-w-0 justify-self-center rounded-full border object-cover"
              sizes="(min-width: 1280px) 476px, (min-width: 1024px) calc((100vw - 160px) * 0.425), (min-width: 640px) 480px, min(480px, calc((100vw - 40px) * 0.85))"
              placeholder="blur"
              preload
            />
          </div>
        </section>
        <TechStack stack={profile.stack} />
        <section id="about" className="border-y bg-surface py-14 sm:py-20">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-6 px-5 sm:gap-7 sm:px-8 lg:px-12">
            <div>
              <div className="text-[10px] font-normal tracking-widest text-muted-foreground sm:text-xs">01 / About Me</div>
              <h2 className="mt-5 text-3xl leading-tight font-normal tracking-tight sm:text-4xl lg:text-[44px]">
                Hi, I’m <span className="text-highlight">Earth.</span>
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {profile.name} · {profile.role}
              </p>
            </div>
            <div className="w-full max-w-[85ch]">
              <p className="text-base leading-[1.9] text-muted-foreground sm:text-[17px]">
                I enjoy learning new tools and applying them to practical problems. Working on banking and internal business systems has taught me to adapt to unfamiliar stacks, collaborate with teammates, and keep improving through feedback. I use AI tools to speed up research and experimentation while staying responsible for the work I deliver.
              </p>
              <div className="mt-7 flex flex-wrap gap-x-7 gap-y-4 text-sm text-secondary-foreground">
                <span className="inline-flex items-center gap-2">
                  <Languages size={17} className="shrink-0 text-highlight" aria-hidden="true" /> Communication in English
                </span>
                <span className="inline-flex items-center gap-2">
                  <Users size={17} className="shrink-0 text-highlight" aria-hidden="true" /> Teamwork
                </span>
                <span className="inline-flex items-center gap-2">
                  <BookOpen size={17} className="shrink-0 text-highlight" aria-hidden="true" /> Quick learner
                </span>
                <span className="inline-flex items-center gap-2">
                  <Lightbulb size={17} className="shrink-0 text-highlight" aria-hidden="true" /> Open-minded
                </span>
              </div>
            </div>
          </div>
        </section>
        <section id="work" className="bg-background py-14 sm:py-22">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="mb-7 sm:mb-10">
              <div>
                <div className="text-[10px] font-normal tracking-widest text-muted-foreground sm:text-xs">02 / WORK</div>
                <h2 className="mt-5 text-3xl leading-tight font-normal tracking-tight sm:text-4xl lg:text-[44px]">
                  Systems I’ve helped build.
                </h2>
                <p className="mt-2 text-base text-muted-foreground">
                  Projects and my contributions
                </p>
              </div>
            </div>
            <div className="border-t">
              {projects.map((project) => (
                <article key={project.slug} className="grid grid-cols-1 gap-6 border-b py-8 lg:grid-cols-3 lg:gap-16 lg:py-11" aria-labelledby={`project-${project.slug}`}>
                  <header className="min-w-0">
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs tracking-wide text-muted-foreground">
                      <span>{project.type}</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 id={`project-${project.slug}`} className="mt-4 text-2xl leading-snug font-normal tracking-tight sm:text-[28px]">{project.name}</h3>
                    <p className="mt-2.5 text-sm text-muted-foreground">{project.category}</p>
                    {project.architecture && (
                      <SystemArchitecture architecture={project.architecture} projectSlug={project.slug} projectName={project.name} />
                    )}
                  </header>
                  <div className="min-w-0 max-w-[72ch] wrap-anywhere lg:col-span-2">
                    {project.tagline?.trim() && <p className="text-lg leading-7 whitespace-pre-line text-secondary-foreground">{project.tagline}</p>}
                    {project.description?.trim() && <p className="text-base leading-[1.9] whitespace-pre-line text-muted-foreground [&:not(:first-child)]:mt-5">{project.description}</p>}
                    {project.responsibility?.trim() && (
                      <section className="mt-7">
                        <h4 className="mb-2 text-base font-medium">My contributions</h4>
                        <p className="text-base leading-[1.9] whitespace-pre-line text-muted-foreground">{project.responsibility}</p>
                      </section>
                    )}
                    {project.challenge?.trim() && (
                      <section className="mt-7">
                        <h4 className="mb-2 text-base font-medium">The challenge</h4>
                        <p className="text-base leading-[1.9] whitespace-pre-line text-muted-foreground">{project.challenge}</p>
                      </section>
                    )}
                    {project.approach?.trim() && (
                      <section className="mt-7">
                        <h4 className="mb-2 text-base font-medium">The approach</h4>
                        <p className="text-base leading-[1.9] whitespace-pre-line text-muted-foreground">{project.approach}</p>
                      </section>
                    )}
                    {project.stack.length > 0 && (
                      <ul className="mt-7 flex list-none flex-wrap gap-2" aria-label={`${project.name} technology stack`}>
                        {project.stack.map((item) => <li key={item} className="rounded-md border bg-card px-2.5 py-1.5 text-xs text-secondary-foreground sm:text-sm">{item}</li>)}
                      </ul>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="border-y bg-surface py-14 sm:py-20">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="text-[10px] font-normal tracking-widest text-muted-foreground sm:text-xs">03 / Contact Me</div>
            <h2 className="mt-5 text-3xl leading-tight font-normal tracking-tight sm:text-4xl lg:text-[44px]">Let’s work together</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              For job opportunities or project inquiries, email me at:
            </p>
            <a className="group mt-6 inline-flex max-w-full items-center gap-3 py-2 text-lg leading-normal text-highlight sm:gap-4 sm:text-2xl lg:text-3xl" href={`mailto:${profile.email}`}>
              <Mail size={24} className="shrink-0" aria-hidden="true" />
              <span className="min-w-0 wrap-anywhere underline-offset-6 group-hover:underline">{profile.email}</span>
              <ArrowUpRight size={22} className="shrink-0" aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
      <footer className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-5 px-5 py-7 sm:px-8 lg:px-12">
        <a href="#" className="inline-flex items-center text-2xl leading-none font-medium tracking-tight">
          <Code2 className="mr-2.5 size-6 text-highlight" aria-hidden="true" /> Portfolio
        </a>
        <p className="order-3 w-full text-xs text-muted-foreground md:order-none md:w-auto">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </p>
        <a href="#" className="flex items-center gap-3 text-xs">
          Back to top <ArrowUpRight size={15} />
        </a>
      </footer>
    </>
  );
}
