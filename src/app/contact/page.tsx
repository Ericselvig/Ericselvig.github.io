import Link from 'next/link';

export default function Contact() {
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
          <Link href="/work" className="nav-button">Work</Link>
          <Link href="/projects" className="nav-button">Projects</Link>
          <Link href="/contact" className="nav-button active">Contact</Link>
        </div>

        <section className="section">
          <h2>Contact</h2>
          <p>
            Whether you want to discuss DeFi innovations, Web3 technologies, or general tech topics, 
            I&apos;d love to connect and chat. Feel free to reach out through any of the channels below.
          </p>
          <ul>
            <li><a href="mailto:yashgoyaldev@gmail.com">Email</a></li>
            <li><a href="https://x.com/0xericselvig" target="_blank" rel="noopener noreferrer">X</a></li>
            <li><a href="https://t.me/ericselvig" target="_blank" rel="noopener noreferrer">Telegram</a></li>
          </ul>
        </section>
      </main>
    </>
  )
}
