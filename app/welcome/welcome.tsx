import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import waveAnimation from "../assets/wave-animation.gif";

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-8 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <img src="assets/logo.png" alt="Precious Guard" />
        </header>
        <div className="max-w-[300px] w-full space-y-6 px-4"></div>
      </div>
    </main>
  );
}
