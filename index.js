import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { STRINGS } from "../utils/strings";
import Image from "next/image";

export default function Home(){
  const [lang,setLang] = useState('hi');
  const s = STRINGS[lang];

  return (
    <>
      <Header lang={lang} setLang={setLang}/>
      <main>
        <section id="home" className="container hero">
          <div>
            <h2>{s.heroTitle}</h2>
            <p>{s.heroDesc}</p>
            <div style={{display:'flex',gap:10,marginTop:16}}>
              <a className="btn primary" href="/download">{s.downloadBtn}</a>
              <a className="btn" href="/form">How it works</a>
            </div>
          </div>
          <div className="card">
            <Image src="/preview.png" alt="preview" width={420} height={300}/>
          </div>
        </section>

        <section id="services" className="container section">
          <h3>Services</h3>
          <div className="grid">
            {[
              {t:"Aadhaar Card", d:"Apply, update or request corrections for Aadhaar."},
              {t:"PAN Card", d:"PAN apply / corrections and download support docs."},
              {t:"Driving Licence", d:"Apply/renew DL, correction requests."},
              {t:"Voter ID", d:"Enroll or correct voter information."},
              {t:"Ayushman Card", d:"Apply/check benefits and printable PDF."},
              {t:"RC / Vehicle", d:"RC copy and correction support."}
            ].map((c,i)=>(
              <div className="card" key={i}>
                <h4>{c.t}</h4>
                <p>{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="support" className="container section">
          <h3>Support</h3>
          <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
            <div className="card" style={{minWidth:220}}>
              <h4>WhatsApp</h4>
              <p><a href="https://wa.me/919999999999" target="_blank" rel="noreferrer">Chat on WhatsApp</a></p>
            </div>
            <div className="card" style={{minWidth:220}}>
              <h4>Email</h4>
              <p><a href="mailto:help@indianportal.example">help@indianportal.example</a></p>
            </div>
            <div className="card" style={{minWidth:220}}>
              <h4>Demo</h4>
              <p><a href="/demo-thumbnail.jpg" target="_blank">Watch demo (thumbnail)</a></p>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}
