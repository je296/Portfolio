import { Braces, Code2, Database, Layers, Network, Palette, Server } from "lucide-react";

function stackIcon(technology: string) {
  if (/sql|database|convex|redis|mongo/i.test(technology)) return Database;
  if (/graphql|grpc|api/i.test(technology)) return Network;
  if (/node|express|java|spring|\bgo\b|gin/i.test(technology)) return Server;
  if (/tailwind|css/i.test(technology)) return Palette;
  if (/shadcn|platform/i.test(technology)) return Layers;
  if (/angular|next|react|vue/i.test(technology)) return Braces;
  return Code2;
}

export function TechStack({ stack }: { stack: readonly string[] }) {
  if (stack.length === 0) return null;

  return (
    <section className="stack-strip" aria-label="Technology stack">
      <ul className="wrap stack-list">
        {stack.map((technology, index) => {
          const Icon = stackIcon(technology);
          return (
            <li key={`${technology}-${index}`}>
              <Icon size={18} aria-hidden="true" />
              <span>{technology}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
