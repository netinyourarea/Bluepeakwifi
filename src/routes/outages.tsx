import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/outages")({
  beforeLoad: () => {
    throw redirect({ to: "/internet", hash: "outages", replace: true });
  },
});
