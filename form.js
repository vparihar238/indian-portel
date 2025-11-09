import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { STRINGS } from "../utils/strings";

export default function FormPage(){
  const [lang,setLang] = useState('hi');
  const s = STRINGS[lang];

  const [form,setForm] = useState({
    service:'Aadhaar', name:'', dob:'', idNumber:''
  });
  const [msg,setMsg] = useState('');

  function handleChange(e){
    setForm({...form, [e.target.name]: e.target.value});
  }

  function saveLocal(){
    const list = JSON.parse(localStorage.getItem('ip_forms')||'[]');
    list.push({...form, created:Date.now()});
    localStorage.setItem('ip_forms', JSON.stringify(list));
    setMsg(s.savedMsg);
    setTimeout(()=>setMsg(''),2500);
  }

  async function submitApi(){
    const API = process.env.NEXT_PUBLIC_API_URL || '/api/forms';
    try{
      const res = await fetch(API, {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify(form)
      });
      if(res.ok){
        setMsg(s.submitSuccess);
      } else setMsg(s.submitFail);
    }catch(e){
      console.error(e);
      setMsg(s.submitFail);
    }
    setTimeout(()=>setMsg(''),3000);
  }

  function generateHtml(){
    const html = `<html><head><meta charset="utf-8"><title>Indian Portal</title></head><body>
      <h1>Indian Portal</h1><p>Service: ${form.service}</p><p>Name: ${form.name}</p>
      <p>DOB: ${form.dob}</p><p>ID: ${form.idNumber}</p><footer>Developed by Indian Portal Team</footer>
    </body></html>`;
    const blob = new Blob([html],{type:'text/html'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = `IndianPortal_${form.service}.html`; a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <>
      <Header lang={lang} setLang={setLang}/>
      <main className="container section">
        <h2>Apply / Correction Form</h2>
        <div className="form-grid">
          <form className="service-form">
            <label>Service
              <select name="service" value={form.service} onChange={handleChange}>
                <option>Aadhaar</option><option>PAN</option><option>DL</option><option>Voter</option><option>Ayushman</option><option>RC</option>
              </select>
            </label>

            <label>Full Name<input name="name" value={form.name} onChange={handleChange} /></label>
            <label>Date of Birth<input name="dob" type="date" value={form.dob} onChange={handleChange} /></label>
            <label>ID Number<input name="idNumber" value={form.idNumber} onChange={handleChange} /></label>

            <div style={{display:'flex',gap:8,marginTop:8}}>
              <button type="button" className="btn" onClick={saveLocal}>Save Locally</button>
              <button type="button" className="btn primary" onClick={submitApi}>Submit to Server</button>
              <button type="button" className="btn" onClick={generateHtml}>Generate & Download HTML</button>
            </div>
            <div style={{marginTop:8,color:'#0b6efd'}}>{msg}</div>
          </form>

          <aside className="card">
            <h4>Saved Forms (Local)</h4>
            <ul id="saved-list">
              {/* client can view localStorage via browser devtools - optional to implement */}
            </ul>
          </aside>
        </div>
      </main>
      <Footer/>
    </>
  )
}
