import axios from "axios";

export default async function handler(req, res) {
  const { text } = req.body;

  const options = {
    method: "POST",
    url: "https://plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com/plagiarism",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "9a26b8c98emsh11e9fcaf5622951p17f35bjsn146ed62cba53",
      "X-RapidAPI-Host":
        "plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com",
    },
    data: {
      text: text,
      language: "en",
      includeCitations: false,
      scrapeSources: false,
    },
  };

  try {
    const response = await axios.request(options);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
}
