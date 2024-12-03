import { About, Features, Hero, Navbar, Story } from "./components/index";
const App = () => {
	return (
		<main className="relative min-h-screen w-screen overflow-x-hidden ">
			<Navbar />
			<Hero />
			<About />
			<Features />
			<Story />
		</main>
	);
};

export default App;
