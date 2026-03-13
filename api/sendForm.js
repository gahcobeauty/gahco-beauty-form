// /api/sendForm.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxUpOQA_2n_al-a9kTtzYj6DwO6kInxQdIhNDaf-h04jbuCuSaRI6TV7Hc_bejqCg5NXw/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      }
    );

    const data = await response.json();

    res.status(200).json(data);
  } catch (err) {
    console.error("Erro ao enviar para o Apps Script:", err);
    res.status(500).json({ result: "error", message: err.message });
  }
}
