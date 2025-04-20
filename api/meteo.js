export default async function handler(req, res) {
    const apiKey = process.env.WEATHER_API_KEY;
  
    const { q, days } = req.query;
  
    if (!q || !days) {
      return res.status(400).json({ error: "Parametri mancanti: q e days sono obbligatori." });
    }
  
    const endpoint = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${q}&days=${days}&hourly=1`;
  
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
  
      if (!response.ok) {
        return res.status(response.status).json({ error: data.error || "Errore API" });
      }
  
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: "Errore nel server: " + error.message });
    }
  }
  