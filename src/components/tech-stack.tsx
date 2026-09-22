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
    <section className="border-y border-border bg-background" aria-label="Technology stack">
      <ul className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-x-4 gap-y-5 px-5 py-7 sm:grid-cols-3 sm:gap-6 sm:px-8 lg:grid-cols-4 lg:px-12 xl:grid-cols-6">
        {stack.map((technology, index) => {
          const Icon = stackIcon(technology);
          return (
            <li className="flex min-w-0 items-start gap-2.5 text-sm font-normal text-muted-foreground" key={`${technology}-${index}`}>
              <Icon className="mt-0.5 size-4.5 shrink-0 text-highlight" aria-hidden="true" />
              <span className="wrap-anywhere">{technology}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
