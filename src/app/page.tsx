import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
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

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header wrap">
        <a className="wordmark" href="#" aria-label="Nutta home">
          <Code2 aria-hidden="true" /> Portfolio (K. Earth)
        </a>
        <Navigation />
      </header>
      <main id="main">
        <section className="hero wrap mb-16" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" /> Performance Enthusias
            </div>
            <h2 id="hero-title">
              Full-Stack Software Engineer
              <br />
              <span>Built to scale.</span>
            </h2>
            <p>{profile.introduction}</p>
            <div className="hero-foot">
              <span>
                <MapPin size={14} /> {profile.location.toUpperCase()}
              </span>
            </div>
            <div className="hero-actions">
              <Button asChild size="lg">
                <a href="#work">
                  Explore my work <ArrowDownRight />
                </a>
              </Button>
              <a className="text-link" href="#about">
                About me <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <Image
            src={profilePicture}
            alt={`Portrait of ${profile.name}`}
            className="hero-portrait"
            sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 900px) calc(100vw - 64px), (max-width: 1100px) calc((100vw - 94px) / 2), (max-width: 1352px) calc((100vw - 176px) / 2), 588px"
            placeholder="blur"
            preload
          />
        </section>
        <TechStack stack={profile.stack} />
        <section id="work" className="work-section wrap">
          <div className="section-heading">
            <div>
              <div className="eyebrow">01 / WORK</div>
              <h2>
                Systems that I built.
              </h2>
              <p>
                Application Details 
              </p>
            </div>
          </div>
          <div className="project-articles">
            {projects.map((project) => (
              <article key={project.slug} className="project-article" aria-labelledby={`project-${project.slug}`}>
                <header className="project-article-header">
                  <div className="project-article-meta">
                    <span>{project.type}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 id={`project-${project.slug}`}>{project.name}</h3>
                  <p className="project-article-category">{project.category}</p>
                </header>
                <div className="project-article-body">
                  {project.tagline?.trim() && <p className="project-article-lead">{project.tagline}</p>}
                  {project.description?.trim() && <p>{project.description}</p>}
                  {project.challenge?.trim() && (
                    <section className="project-article-detail">
                      <h4>The challenge</h4>
                      <p>{project.challenge}</p>
                    </section>
                  )}
                  {project.approach?.trim() && (
                    <section className="project-article-detail">
                      <h4>The approach</h4>
                      <p>{project.approach}</p>
                    </section>
                  )}
                  {project.stack.length > 0 && (
                    <ul className="project-article-stack" aria-label={`${project.name} technology stack`}>
                      {project.stack.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="about" className="about-section">
          <div className="wrap about-content">
            <div>
              <div className="eyebrow">02 / About Me</div>
              <h2 className="about-heading">
                Hi, I’m <span>Earth.</span>
              </h2>
              <p className="about-subtitle">
                {profile.name} · {profile.role}
              </p>
            </div>
            <div className="about-copy">
              <p>
                I currently obsess in present era of software engineering  
                with LLM accelerate process, the speed of shipping product has become faster than before and 
                make it easier for leaning new stack and knowledge in this career more than ever. I&apos;m looking 
                forward to working with you in the future if my skill got your interest and I&apos;m not have some 
                skill that require for working with I&apos;m assure you I can learn and adapt fast which you can see in my work experience 
                I&apos;m always into something new please.
              </p>
              <div className="skills">
                <span>
                  <Code2 size={17} /> Team Worker
                </span>
                <span>
                  <Code2 size={17} /> Fast Learner
                </span>
                <span>
                  <Code2 size={17} /> Data & scaling
                </span>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="contact-section wrap">
          <div className="eyebrow">03 / Contact Me</div>
          <h2>Contact for work</h2>
          <p className="contact-intro">
            For job opportunities or project enquiries, email me at:
          </p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            <Mail size={24} aria-hidden="true" />
            <span>{profile.email}</span>
            <ArrowUpRight size={22} aria-hidden="true" />
          </a>
        </section>
      </main>
      <footer className="wrap">
        <a href="#" className="wordmark">
          <Code2 aria-hidden="true" /> Portfolio
        </a>
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </p>
        <a href="#">
          Back to top <ArrowUpRight size={15} />
        </a>
      </footer>
    </>
  );
}

