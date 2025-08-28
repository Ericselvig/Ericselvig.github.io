export default function Projects() {
  return (
    <>
      <header>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1.5rem 2rem' }}>
          <h1>Yash Goyal</h1>
          <h2>Smart Contract Engineer</h2>
        </div>
      </header>

      <main>
        <div className="nav-buttons">
          <a href="/" className="nav-button">Home</a>
          <a href="/work" className="nav-button">Work</a>
          <a href="/projects" className="nav-button active">Projects</a>
          <a href="/contact" className="nav-button">Contact</a>
        </div>

        <section className="section">
          <h2>Projects</h2>
          
          <h3><a href="https://github.com/Suryansh-23/fission/" target="_blank" rel="noopener noreferrer">Fission ↗</a></h3>
          <p>A comprehensive cross-chain swap extension for 1inch Fusion+ that enables seamless bi-directional swaps between EVM chains and Sui. Features a robust dual-escrow architecture using HTLCs for atomicity and secure fund recovery, with a fully interoperable Go-based relayer service.</p>

          <h3><a href="https://github.com/Suryansh-23/liquidity-oracle" target="_blank" rel="noopener noreferrer">Liquidity Oracle ↗</a></h3>
          <p>A decentralized analytics system that monitors and quantifies liquidity behavior in Uniswap v4 pools. Leverages EigenLayer AVS for crypto-economically secured validation of liquidity metrics, delivering real-time insights for LPs, market makers, and risk managers. Won prizes in EigenLayer and Uniswap Foundation tracks at UHI-4 Hookathon.</p>

          <h3><a href="https://github.com/Ericselvig/KairoSwap" target="_blank" rel="noopener noreferrer">KairoSwap ↗</a></h3>
          <p>A DeFi solution using Uniswap v4 hooks for Just-In-Time (JIT) liquidity provisioning and yield optimization. Enables zero-slippage markets for large trades while allowing smaller LPs to participate in JIT liquidity, with idle liquidity automatically routed to yield-farming protocols for additional returns.</p>
        </section>
      </main>
    </>
  )
}
