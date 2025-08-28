export default function Home() {
  return (
    <>
      <header>
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "1.5rem 2rem",
          }}
        >
          <h1>Yash Goyal</h1>
          <h2>Smart Contract Engineer</h2>
        </div>
      </header>

      <main>
        <div className="nav-buttons">
          <a href="/" className="nav-button active">
            Home
          </a>
          <a href="/work" className="nav-button">
            Work
          </a>
          <a href="/projects" className="nav-button">
            Projects
          </a>
          <a href="/contact" className="nav-button">
            Contact
          </a>
        </div>

        <section className="section">
          <h2>Hi! I'm Yash</h2>
          <p>
            I’m a smart contract engineer who loves building DeFi protocols.
            Most of my work has been focused on developing smart contracts for
            EVM-based chains.
          </p>
          <p>
            I enjoy diving into different codebases and exploring new patterns
            to keep my skills sharp. Auditing and learning from other projects
            helps me stay on top of best practices in smart contract
            development.
          </p>
          <p>
            Lately, I've been expanding into other blockchain ecosystems like
            Sui and Aptos, experimenting with new smart contract paradigms and
            understanding how different platforms approach programability in
            decentralized systems.
          </p>
        </section>
      </main>
    </>
  );
}
