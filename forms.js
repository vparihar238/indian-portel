// Simple in-memory store (for demo). For production use Supabase/Postgres
let DB = [];

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { service, name, dob, idNumber } = req.body;
    if(!name || !dob || !idNumber) return res.status(400).json({ error:'missing' });
    const id = Date.now().toString();
    DB.push({ id, service, name, dob, idNumber, created: new Date().toISOString() });
    return res.status(201).json({ id, status: 'saved' });
  }

  if (req.method === 'GET') {
    return res.status(200).json(DB);
  }

  return res.status(405).json({ error: 'method not allowed' });
}
