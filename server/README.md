# Server (Agentic AI) - Personalized Academic & Career Guidance

## Overview
This server provides a simple AgentManager that coordinates two agents (academic advisor & career counselor).
It accepts POST /api/query with JSON: {"user_id": "u1", "message": "..."}

## Setup & Run (local)

1. Create a Python virtual environment and activate it:
   ```bash
   python -m venv .venv
   source .venv/bin/activate   # Windows: .venv\\Scripts\\activate
   ```

2. Install requirements:
   ```bash
   pip install -r requirements.txt
   ```

3. Set environment variables (at minimum, to use Gemini set GEMINI_API_KEY):
   ```bash
   export GEMINI_API_KEY="<your-google-ai-studio-key>"
   # optionally set GEMINI_API_URL to the exact endpoint required by Google
   ```

4. Run the server:
   ```bash
   uvicorn app.main:app --reload --port 8000
   ```

5. Test with curl:
   ```bash
   curl -X POST http://localhost:8000/api/query -H 'Content-Type: application/json' -d '{"user_id":"student1","message":"Which major should I choose?"}'
   ```

## Notes
- The `llm_client` uses environment variables and falls back to a mock response if no keys are present.
- For production, secure your keys and use a managed vector DB (Pinecone/Weaviate) instead of the simple JSON store in `server/data`.
