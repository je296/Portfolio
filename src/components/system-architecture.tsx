import { ArrowDown, ArrowLeftRight, ArrowRight, Cloud, Network, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type ArchitectureNode = {
  name: string;
  description: string;
};

type BaseArchitecture = {
  summary: string;
  actor: string;
  environment: string;
  application: ArchitectureNode;
  database: ArchitectureNode;
  authentication?: ArchitectureNode;
  accessControl?: ArchitectureNode;
};

type RequestArchitecture = BaseArchitecture & {
  kind?: "request";
  service: ArchitectureNode;
  dataAccess: ArchitectureNode;
  externalDatabase?: boolean;
  flow?: {
    applicationToService: string;
    serviceToData: string;
    serverOnlyDataAccess: boolean;
  };
  cache?: ArchitectureNode;
  batch?: {
    orchestrator: ArchitectureNode;
    worker: ArchitectureNode;
    databaseConnection: string;
  };
};

type ReactiveArchitecture = BaseArchitecture & {
  kind: "reactive";
  backendEnvironment: string;
  service: ArchitectureNode;
};

export type Architecture = RequestArchitecture | ReactiveArchitecture;

function Node({ node }: { node: ArchitectureNode }) {
  return (
    <div className="min-w-0 rounded-md border bg-background px-3 py-3 sm:px-4">
      <p className="text-sm font-medium">{node.name}</p>
      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{node.description}</p>
    </div>
  );
}

function Connection({ label, namedTarget = false }: { label: string; namedTarget?: boolean }) {
  return (
    <div className="flex items-center justify-center gap-2 py-3 text-xs text-muted-foreground">
      <ArrowDown size={16} className={`shrink-0 text-highlight ${namedTarget ? "-rotate-90 sm:rotate-0" : ""}`} aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}

function ReactiveFlow({ architecture }: { architecture: ReactiveArchitecture }) {
  return (
    <>
      <div className="rounded-lg border border-dashed bg-surface p-3 sm:p-5">
        <p className="mb-4 flex items-center gap-2 text-xs font-medium tracking-wide text-muted-foreground">
          <Cloud size={16} className="shrink-0" aria-hidden="true" />
          {architecture.environment}
        </p>
        <Node node={architecture.application} />
      </div>
      <div className="flex items-center justify-center gap-3 py-4 text-xs text-muted-foreground">
        <ArrowDown size={18} className="shrink-0 text-highlight" aria-hidden="true" />
        <div>
          <p>Queries and mutations to {architecture.backendEnvironment}</p>
          <p className="mt-1">Reactive updates to {architecture.application.name}</p>
        </div>
      </div>
      <div className="rounded-lg border border-dashed bg-surface p-3 sm:p-5">
        <p className="mb-4 flex items-center gap-2 text-xs font-medium tracking-wide text-muted-foreground">
          <Cloud size={16} className="shrink-0" aria-hidden="true" />
          {architecture.backendEnvironment}
        </p>
        <Node node={architecture.service} />
        <Connection label="Read and write application data" />
        <Node node={architecture.database} />
      </div>
    </>
  );
}

function RequestFlow({ architecture }: { architecture: RequestArchitecture }) {
  return (
    <>
      <div className="rounded-lg border border-dashed bg-surface p-3 sm:p-5">
        <p className="mb-4 flex items-center gap-2 text-xs font-medium tracking-wide text-muted-foreground">
          <Cloud size={16} className="shrink-0" aria-hidden="true" />
          {architecture.environment}
        </p>
        <div className={`grid gap-x-4 gap-y-5 sm:gap-y-0 ${architecture.batch ? "sm:grid-cols-2" : ""}`}>
          <div className="flex min-w-0 flex-col sm:row-span-5 sm:grid sm:grid-rows-subgrid">
            <p className="mb-3 text-xs font-medium text-highlight">Online requests</p>
            <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-stretch gap-2 sm:gap-3">
              <Node node={architecture.application} />
              <div className="flex flex-col items-center justify-center gap-1 text-muted-foreground">
                <span className="text-[10px]">{architecture.flow?.applicationToService ?? "API"}</span>
                <ArrowRight size={18} className="text-highlight" aria-hidden="true" />
                <span className="sr-only">{architecture.application.name} calls the {architecture.service.name} interface.</span>
              </div>
              <Node node={architecture.service} />
            </div>
            <div className="grid grid-cols-2">
              {architecture.flow?.serverOnlyDataAccess ? <div /> : <Connection label={architecture.flow?.serviceToData ?? "GraphQL"} />}
              <Connection label={architecture.flow?.serviceToData ?? "GraphQL"} />
            </div>
            <Node node={architecture.dataAccess} />
            <div>
              {!architecture.externalDatabase && (
                <Connection label={`Reads / writes to ${architecture.database.name}`} namedTarget={Boolean(architecture.batch)} />
              )}
            </div>
          </div>
          {architecture.batch && (
            <div className="flex min-w-0 flex-col border-t pt-4 sm:row-span-5 sm:grid sm:grid-rows-subgrid sm:border-t-0 sm:pt-0">
              <p className="mb-3 text-xs font-medium text-highlight">Batch processing</p>
              <Node node={architecture.batch.orchestrator} />
              <Connection label="Orchestrates" />
              <Node node={architecture.batch.worker} />
              <div>
                <Connection label={architecture.batch.databaseConnection} namedTarget />
              </div>
            </div>
          )}
        </div>
        {!architecture.externalDatabase && <Node node={architecture.database} />}
        {architecture.cache && (
          <div className="mt-4 border-t pt-4">
            <p className="mb-3 text-xs font-medium text-highlight">Supporting cache</p>
            <Node node={architecture.cache} />
          </div>
        )}
      </div>
      {architecture.externalDatabase && (
        <div>
          <Connection label={`SQL queries from ${architecture.dataAccess.name}`} />
          <Node node={architecture.database} />
        </div>
      )}
    </>
  );
}

export function SystemArchitecture({ architecture, projectSlug, projectName }: { architecture: Architecture; projectSlug: string; projectName: string }) {
  const captionId = `${projectSlug}-architecture`;
  const diagram = (
    <figure className="min-w-0" aria-labelledby={captionId}>
      <figcaption id={captionId} className="sr-only">High-level architecture</figcaption>
      <div className="flex items-center justify-center gap-2 rounded-md border bg-card px-4 py-3 text-sm">
        <Users size={17} className="shrink-0 text-highlight" aria-hidden="true" />
        {architecture.actor}
      </div>
      <Connection label={`Web access to ${architecture.application.name}`} />
      {architecture.kind === "reactive" ? <ReactiveFlow architecture={architecture} /> : <RequestFlow architecture={architecture} />}
      {architecture.authentication && (
        <div className="mt-5 border-t pt-4">
          <p className="mb-3 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span>{architecture.application.name}</span>
            <ArrowLeftRight size={16} className="text-highlight" aria-hidden="true" />
            <span>{architecture.authentication.name} authentication</span>
          </p>
          <Node node={architecture.authentication} />
        </div>
      )}
      {architecture.accessControl && <div className="mt-3"><Node node={architecture.accessControl} /></div>}
    </figure>
  );
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="mt-5 min-h-11 gap-2 px-4 font-normal">
          <Network aria-hidden="true" />
          View architecture
          <span className="sr-only"> for {projectName}</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[calc(100dvh-2rem)] overflow-y-auto p-5 sm:max-w-3xl sm:p-6 [&>button]:size-10">
        <DialogHeader className="pr-8">
          <DialogTitle className="text-lg leading-snug">{projectName} architecture</DialogTitle>
          <DialogDescription className="leading-relaxed">{architecture.summary}</DialogDescription>
        </DialogHeader>
        {diagram}
      </DialogContent>
    </Dialog>
  );
}
