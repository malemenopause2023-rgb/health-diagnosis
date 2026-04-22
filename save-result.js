// api/save-result.js
// GAS（Googleスプレッドシート）にデータを送る

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const GAS_URL = process.env.GAS_URL;
  if (!GAS_URL) {
    return res.status(500).json({ error: "GAS_URL not set" });
  }

  try {
    const response = await fetch(GAS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const text = await response.text();
    res.status(200).json({ success: true, gas: text });
  } catch (e) {
    console.error("GAS error:", e);
    res.status(500).json({ error: e.message });
  }
};
