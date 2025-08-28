import Link from 'next/link';

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
            <Link href="/" className="nav-button active">
              Home
            </Link>
            <Link href="/work" className="nav-button">
              Work
            </Link>
            <Link href="/projects" className="nav-button">
              Projects
            </Link>
            <Link href="/contact" className="nav-button">
              Contact
            </Link>
          </div>

        <section className="section">
          <h2>Hi! I&apos;m Yash</h2>
          <p>
            I&apos;m a smart contract engineer who loves studying and building DeFi protocols.
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
            Lately, I&apos;ve been expanding into other blockchain ecosystems like
            Sui and Aptos, experimenting with new smart contract paradigms and
            understanding how different platforms approach programmability in
            decentralized systems.
          </p>
          
          <p><strong>Right now my interests are in:</strong></p>
          <ul>
            <li>AMMs &amp; Uniswap V4 Hooks — custom hooks, liquidity strategies, etc.</li>
            <li>Cross-Chain protocols — intents, bridges, etc.</li>
            <li>DeFi on non-EVM chains — new DeFi protocols on chains like Sui and Aptos.</li>
          </ul>
          
          <p>On this website you can find my <Link href="/work">work experience</Link>, <Link href="/projects">personal projects</Link>, and ways to <Link href="/contact">get in touch</Link> with me.</p>
        </section>
      </main>
    </>
  );
}
