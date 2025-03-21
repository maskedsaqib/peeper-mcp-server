# Peeper MCP Server

A Model Control Panel (MCP) server for the Peeper application. This server provides a unified API to interact with various language models.

## Features

- Unified API for different AI model providers
- Model discovery endpoint
- Text completion endpoint
- Easy to extend for additional models

## Setup

1. Clone this repository
   ```
   git clone https://github.com/maskedsaqib/peeper-mcp-server.git
   cd peeper-mcp-server
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Create a `.env` file based on the example
   ```
   cp .env.example .env
   ```

4. Add your API keys to the `.env` file

5. Start the server
   ```
   npm start
   ```

   For development with auto-restart:
   ```
   npm run dev
   ```

## API Endpoints

### GET /api/models

Returns a list of available models.

### POST /api/completion

Generates text completion for the given prompt using the specified model.

Request body:
```json
{
  "modelId": "gpt-4",
  "prompt": "Your prompt here"
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.