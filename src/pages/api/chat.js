export default async function handler(req, res) {
    if (req.method === "POST") {
        const { message } = req.body;
        // Mock AI response logic
        const aiResponse = `AI Response to: "${message}"`;
        res.status(200).json({ reply: aiResponse });
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
}