// api/save-result.js
// Supabaseのhealth_resultsテーブルに保存する

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { answers, scores, typeKey, infoMod, shareUrl, timestamp, gender, age } = req.body;

  const SUPABASE_URL     = process.env.SUPABASE_URL;
  const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/health_results`, {
      method: "POST",
      headers: {
        "Content-Type":  "application/json",
        "apikey":        SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        "Prefer":        "return=minimal",
      },
      body: JSON.stringify({
        type_key:  typeKey,
        info_mod:  infoMod,
        score_c:   scores.consciousness,
        score_a:   scores.action,
        score_i:   scores.info,
        answers:   answers,
        share_url: shareUrl,
        gender:    gender || null,
        age_group: age    || null,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      return res.status(500).json({ error: err });
    }

    res.status(200).json({ success: true });
  } catch (e) {
    console.error("Supabase error:", e);
    res.status(500).json({ error: e.message });
  }
};
