import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CatPet from "./components/CatPet";

function App() {
  return (
    <div>
      <Header />
      <main style={{ padding: "2rem" }}>
        <About />
        <Projects />
        <Contact />
      </main>
      <CatPet />
    </div>
  );
}

export default App;
