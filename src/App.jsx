import {
	About,
	Contact,
	Features,
	Footer,
	Hero,
	Navbar,
	Season,
} from "./components/index";
const App = () => {
	return (
		<main className="relative min-h-screen w-screen overflow-x-hidden ">
			<Navbar />
			<Hero />
			<About />
			<Features />
			<Season />
			<Contact />
			<Footer />
		</main>
	);
};

export default App;
