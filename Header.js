import Link from "next/link";
import Image from "next/image";

export default function Header({ lang, setLang }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <Image src="/logo.png" alt="logo" width={56} height={56}/>
          <div>
            <div style={{fontWeight:700}}>Indian Portal</div>
            <small style={{color:'#5b6b82'}}>Aapka Digital India Partner</small>
          </div>
        </div>
        <div style={{display:'flex',gap:12,alignItems:'center'}}>
          <nav className="nav">
            <Link href="#home">Home</Link>
            <Link href="#services">Services</Link>
            <Link href="/download">Download</Link>
            <Link href="/form">Forms</Link>
            <Link href="#support">Support</Link>
          </nav>
          <select value={lang} onChange={e=>setLang(e.target.value)}>
            <option value="hi">हिन्दी</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
    </header>
  )
}
