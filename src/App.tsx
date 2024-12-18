// import reactLogo from './assets/react.svg' // assets
// import viteLogo from '/vite.svg' // public
import logo from "./assets/logo-3.png";
import "./App.css";

function App() {
  return (
    <main className="flex items-center justify-center pt-8 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <img src={logo} alt="Precious Guard" />
        </header>
        <div className="max-w-[600px] w-full space-y-6 px-4"></div>
      </div>
    </main>
  );
}

export default App;
