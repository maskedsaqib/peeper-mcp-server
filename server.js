const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Peeper MCP Server' });
});

// MCP API routes
app.get('/api/models', (req, res) => {
  // Mock response with available models
  const models = [
    { id: 'gpt-4', name: 'GPT-4', provider: 'OpenAI' },
    { id: 'claude-3-opus', name: 'Claude 3 Opus', provider: 'Anthropic' },
    { id: 'llama-3', name: 'Llama 3', provider: 'Meta' }
  ];
  
  res.json({ models });
});

app.post('/api/completion', (req, res) => {
  const { modelId, prompt } = req.body;
  
  if (!modelId || !prompt) {
    return res.status(400).json({ error: 'Model ID and prompt are required' });
  }
  
  // Mock response - in a real implementation, this would call the actual model API
  res.json({
    modelId,
    completion: `This is a mock response from the MCP server for model: ${modelId}\n\nPrompt: ${prompt}\n\nIn a production environment, this would connect to the actual model provider.`
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`MCP Server running on port ${PORT}`);
});