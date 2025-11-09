import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { STRINGS } from "../utils/strings";

export default function Download(){
  const [lang,setLang] = useState('hi');
  const s = STRINGS[lang];
  const APK = process.env.NEXT_PUBLIC_APK_LINK || "#";

  return (
    <>
      <Header lang={lang} setLang={setLang}/>
      <main className="container section">
        <h2>Download</h2>
        <p>Install the Indian Portal app on your Android device. Follow the steps below.</p>

        <div className="card">
          <a className="btn primary large" href={APK} target="_blank" rel="noreferrer">Download Indian Portal APK</a>
          <div style={{marginTop:12}}>
            <h4>Install Instructions</h4>
            <ol>
              <li>Allow installs from unknown sources for your browser (Settings → Security).</li>
              <li>Tap downloaded APK and Install.</li>
              <li>Open app and use services.</li>
            </ol>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}
