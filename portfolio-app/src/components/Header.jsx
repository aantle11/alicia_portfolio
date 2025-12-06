export default function Header() {
  return (
    <header style={{ backgroundColor: "#ffe6f0", padding: "1rem 2rem" }}>
      <h1 style={{ color: "#ff9fcf" }}>Alicia's Portfolio</h1>
      <nav>
        <a href="#about" style={{ margin: "0 1rem" }}>
          About
        </a>
        <a href="#projects" style={{ margin: "0 1rem" }}>
          Projects
        </a>
        <a href="#contact" style={{ margin: "0 1rem" }}>
          Contact
        </a>
      </nav>
    </header>
  );
}
