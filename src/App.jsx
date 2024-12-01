import { Hero } from "./components/index";
const App = () => {
	return (
		<main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <section className="z-0 min-h-screen bg-slate-500"/>
		</main>
	);
};

export default App;
