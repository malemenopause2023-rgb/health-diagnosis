// api/check-code.js
// participant_codesテーブルでコードの存在を確認する

module.exports = async (req, res) => {
  const code = req.query.code;
  if (!code) return res.status(400).json({ exists: false });

  const SUPABASE_URL      = process.env.SUPABASE_URL;
  const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/participant_codes?code=eq.${encodeURIComponent(code)}&select=code`,
      {
        headers: {
          "apikey":        SUPABASE_ANON_KEY,
          "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        },
      }
    );
    const data = await response.json();
    res.status(200).json({ exists: Array.isArray(data) && data.length > 0 });
  } catch(e) {
    res.status(500).json({ exists: false });
  }
};
