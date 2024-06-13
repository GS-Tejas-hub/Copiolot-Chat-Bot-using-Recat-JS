const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Configuration, OpenAIApi } = require("openai");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const configuration = new Configuration({
  apiKey: 'your-openai-api-key {I cannot paste my OpenAI API key here because Open AI will strike out the key for sharing}',
});
const openai = new OpenAIApi(configuration);

app.post('/api/debug', async (req, res) => {
  const { message } = req.body;

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `I am a coding assistant. Please help me debug the following code:\n${message}\n`,
      max_tokens: 150,
    });

    res.json({ reply: completion.data.choices[0].text.trim() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
