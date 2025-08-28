import Link from 'next/link';

export default function Work() {
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
          <Link href="/" className="nav-button">Home</Link>
          <Link href="/work" className="nav-button active">Work</Link>
          <Link href="/projects" className="nav-button">Projects</Link>
          <Link href="/contact" className="nav-button">Contact</Link>
        </div>

        <section className="section">
          <h2>Work Experience</h2>
          
          <h3>Smart Contract Developer</h3>
          <p className="work-org"><strong>DecentraX</strong></p>
          <p className="work-timeline">Dec 2024 – Present</p>
          <ul>
            <li>Built and optimized DeFi protocols from scratch and enhanced existing ones, ensuring high security, scalability, and gas efficiency for global clients.</li>
            <li>Led end-to-end project delivery — from architecture design through implementation, testing, audits, and mainnet deployment.</li>
            <li>Delivered complex token ecosystems with staking vaults, buy-and-burn strategies, sell taxes, dynamic rewards distribution, and custom ERC20 tokens integrated with Uniswap V2/V3.</li>
            <li>Developed advanced DeFi infrastructure including a Uniswap V4-based token launchpad with dynamic liquidity management, a standardized swap router, and treasury rewards processing systems.</li>
          </ul>

          <h3>Smart Contract Developer</h3>
          <p className="work-org"><strong>Zeru Finance</strong></p>
          <p className="work-timeline">Jun 2024 – Sept 2024</p>
          <ul>
            <li>Developed decentralized, on-chain credit infrastructure enabling under-collateralized and zero-collateral loans with yield-bearing strategies.</li>
            <li>Integrated Uniswap V3 for investment strategies and LayerZero for cross-chain credit score functionality.</li>
            <li>Worked with ERC standards (ERC-721, ERC-20, ERC-1967) and Merkle Trees for data integrity.</li>
            <li>Authored comprehensive test suites (unit, integration, fork, invariant) and deployment automation scripts.</li>
          </ul>

          <h3>Blockchain Developer (Part-Time)</h3>
          <p className="work-org"><strong>Freelance</strong></p>
          <ul>
            <li>Built a staking contract for a DeFi protocol managing a 7-figure TVL.</li>
            <li>Developed multiple types of funds for an AI-agent-based crypto fund manager.</li>
            <li>Developed bots that successfully recovered ~$100K USD in funds and optimized capital efficiency.</li>
          </ul>
        </section>
      </main>
    </>
  )
}
