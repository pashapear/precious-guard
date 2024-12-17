import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Precious Guard Official Website" },
    { name: "description", content: "Welcome to our site!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
