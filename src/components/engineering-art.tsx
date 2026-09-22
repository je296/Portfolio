import {
  ArrowDown,
  ArrowRight,
  Braces,
  Check,
  Database,
  GitBranch,
  Layers3,
  Server,
  Terminal,
} from "lucide-react";

function WindowBar({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
      <div className="flex gap-1.5" aria-hidden="true">
        <span className="size-2 rounded-full bg-zinc-600" />
        <span className="size-2 rounded-full bg-zinc-600" />
        <span className="size-2 rounded-full bg-zinc-600" />
      </div>
      <span className="ml-2 font-mono text-[10px] tracking-wide text-zinc-400">
        {label}
      </span>
    </div>
  );
}

export function EngineeringArt() {
  return (
    <div className="relative w-full min-w-0 overflow-hidden rounded-2xl border border-zinc-800 bg-[#101114] text-zinc-100 shadow-2xl shadow-black/20">
      <WindowBar label="workspace / system-design" />
      <div className="p-5 sm:p-7">
        <div className="mb-5 flex items-center justify-between gap-3">
          <span className="flex items-center gap-2 font-mono text-[11px] text-zinc-400">
            <Terminal size={14} className="text-blue-400" /> engineering.ts
          </span>
          <span className="rounded border border-zinc-700 px-2 py-1 font-mono text-[9px] text-zinc-400">
            CONCEPT
          </span>
        </div>
        <div
          className="space-y-1.5 font-mono text-[11px] leading-relaxed sm:text-[13px]"
          aria-label="Illustrative software engineering code"
        >
          <p>
            <span className="mr-3 text-zinc-600">01</span>
            <span className="text-blue-400">const</span> engineer = {"{"}
          </p>
          <p>
            <span className="mr-3 text-zinc-600">02</span>
            <span className="ml-3 text-zinc-400">focus:</span>{" "}
            <span className="text-blue-200">
              &quot;build reliable systems&quot;
            </span>
            ,
          </p>
          <p>
            <span className="mr-3 text-zinc-600">03</span>
            <span className="ml-3 text-zinc-400">approach:</span>{" "}
            <span className="text-blue-200">
              &quot;measure, then scale&quot;
            </span>
          </p>
          <p>
            <span className="mr-3 text-zinc-600">04</span>
            {"};"}
          </p>
        </div>
        <div className="mt-7 border-t border-zinc-800 pt-5">
          <div className="mb-4 flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] text-zinc-500">
            <GitBranch size={13} /> SCALING THE DATA LAYER
          </div>
          <div className="grid grid-cols-[1fr_22px_1fr] items-center gap-1.5 text-center">
            <div className="rounded-lg border border-zinc-700 bg-zinc-900 px-2 py-3">
              <Server className="mx-auto mb-1.5 text-zinc-400" size={18} />
              <span className="text-xs">API service</span>
            </div>
            <ArrowRight
              size={17}
              className="mx-auto text-blue-400"
              aria-hidden="true"
            />
            <div className="rounded-lg border border-blue-400/25 bg-blue-400/5 px-2 py-3">
              <Layers3 className="mx-auto mb-1.5 text-blue-400" size={18} />
              <span className="text-xs">Cache layer</span>
            </div>
          </div>
          <div className="flex justify-center py-2">
            <ArrowDown size={18} className="text-zinc-600" aria-hidden="true" />
          </div>
          <div className="grid grid-cols-[1fr_22px_1fr] items-center gap-1.5 text-center">
            <div className="rounded-lg border border-blue-400/25 bg-blue-400/5 px-2 py-3">
              <Database className="mx-auto mb-1.5 text-blue-400" size={18} />
              <span className="text-xs">Primary DB</span>
            </div>
            <ArrowRight
              size={17}
              className="mx-auto text-zinc-600"
              aria-hidden="true"
            />
            <div className="rounded-lg border border-zinc-700 bg-zinc-900 px-2 py-3">
              <div className="mb-1.5 flex justify-center gap-2 text-zinc-400">
                <Database size={18} />
                <Database size={18} />
              </div>
              <span className="text-xs">Read replicas</span>
            </div>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-zinc-800 pt-4 font-mono text-[10px] text-zinc-500">
          <span>CODE → SYSTEMS → SCALE</span>
          <span className="text-blue-400">always iterating_</span>
        </div>
      </div>
    </div>
  );
}

export function ProjectArtwork({
  index,
  name,
}: {
  index: number;
  name: string;
}) {
  return (
    <div
      className="flex min-h-[260px] w-full min-w-0 items-center justify-center rounded-md bg-[#111216] p-3 text-zinc-100"
      role="img"
      aria-label={`${name}: illustrative ${index % 3 === 0 ? "code editor" : index % 3 === 1 ? "database topology" : "audit workflow"}`}
    >
      <div
        className="w-full max-w-[310px] overflow-hidden rounded-lg border border-zinc-700/80 bg-[#17181d] shadow-xl shadow-black/25"
        aria-hidden="true"
      >
        <WindowBar
          label={
            index % 3 === 0
              ? "src / application.ts"
              : index % 3 === 1
                ? "database / topology"
                : "pipeline / audit"
          }
        />
        {index % 3 === 0 ? (
          <div className="space-y-3 break-words p-3 font-mono text-[10px] leading-relaxed">
            <div className="flex items-center gap-2 text-blue-400">
              <Braces size={15} />
              <span>buildSomethingUseful()</span>
            </div>
            <p className="text-zinc-500">{"// from an idea to production"}</p>
            <p>
              <span className="text-blue-400">export async function</span> run(){" "}
              {"{"}
            </p>
            <p className="pl-3 text-zinc-400">
              await design();
              <br />
              await build();
              <br />
              await improve();
            </p>
            <p>{"}"}</p>
          </div>
        ) : index % 3 === 1 ? (
          <div className="p-5 text-center">
            <div className="mx-auto w-fit rounded-lg border border-blue-400/30 bg-blue-400/5 px-6 py-3">
              <Database size={23} className="mx-auto mb-1 text-blue-400" />
              <span className="font-mono text-[10px] text-zinc-300">
                primary
              </span>
            </div>
            <div className="mx-auto h-5 w-px bg-zinc-600" />
            <div className="mx-auto h-4 w-3/5 rounded-t border-x border-t border-zinc-600" />
            <div className="grid grid-cols-2 gap-4">
              {["read replica 01", "read replica 02"].map((label) => (
                <div
                  key={label}
                  className="rounded-lg border border-zinc-700 bg-zinc-900 px-1 py-3"
                >
                  <Database size={18} className="mx-auto mb-2 text-zinc-400" />
                  <span className="font-mono text-[9px] text-zinc-400">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-3 p-5">
            <div className="mb-4 flex items-center gap-2 font-mono text-[10px] text-blue-400">
              <GitBranch size={15} /> review → validate → ship
            </div>
            {[
              "Inspect changes",
              "Validate behavior",
              "Deploy with confidence",
            ].map((label, itemIndex) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded border border-zinc-700/70 bg-zinc-900 p-2.5"
              >
                <span className="font-mono text-[9px] text-zinc-600">
                  0{itemIndex + 1}
                </span>
                <span className="flex-1 text-[11px] text-zinc-300">
                  {label}
                </span>
                <Check size={13} className="text-blue-400" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

