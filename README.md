# NestJS Gemini Angular API

A simple backend API built with NestJS that integrates with Google's Gemini AI models to provide AI-powered content generation capabilities.

## 🚀 Features

- **Gemini AI Integration**: Direct integration with Google's Gemini 2.5 Pro model
- **RESTful API**: Clean and well-documented REST endpoints
- **Swagger Documentation**: Auto-generated API documentation available at `/api`
- **Type Safety**: Full TypeScript support for robust development
- **Testing Suite**: Comprehensive unit and e2e testing setup
- **CORS Enabled**: Ready for frontend integration
- **Environment Configuration**: Secure API key management

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Google Gemini API Key

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nestjs-gemini-angular
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   PORT=3000
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Get your Gemini API Key**
   - Visit [Google AI Studio](https://aistudio.google.com/)
   - Generate an API key
   - Add it to your `.env` file

## 🏃‍♂️ Running the Application

### Development Mode
```bash
npm run start:dev
```

### Production Mode
```bash
npm run build
npm run start:prod
```

### Debug Mode
```bash
npm run start:debug
```

The API will be available at `http://localhost:3000`

## 📚 API Documentation

Once the application is running, visit `http://localhost:3000/api` to access the interactive Swagger documentation.

### Available Endpoints

#### 🏠 Base Endpoints
- `GET /` - Returns a simple hello world message

#### 🤖 Gemini AI Endpoints
- `GET /gemini` - Generate AI content using Gemini 2.5 Pro model
- `GET /gemini/models` - List available Gemini models

### Example Responses

**GET /gemini**
```json
{
  "candidates": [
    {
      "content": {
        "parts": [
          {
            "text": "Bonjour ! Comment allez-vous aujourd'hui ?"
          }
        ]
      }
    }
  ]
}
```

**GET /gemini/models**
```json
{
  "models": [
    {
      "name": "models/gemini-2.5-pro",
      "displayName": "Gemini 2.5 Pro",
      "description": "High-intelligence model for complex reasoning tasks"
    }
  ]
}
```

## 🧪 Testing

### Run Unit Tests
```bash
npm run test
```

### Run E2E Tests
```bash
npm run test:e2e
```

### Run Tests with Coverage
```bash
npm run test:cov
```

### Watch Mode
```bash
npm run test:watch
```

## 🔧 Development Tools

### Linting
```bash
npm run lint
```

### Code Formatting
```bash
npm run format
```

## 📁 Project Structure

```
src/
├── app.controller.ts        # Main application controller
├── app.module.ts           # Root application module
├── app.service.ts          # Main application service
├── main.ts                 # Application entry point
└── gemini/
    ├── gemini.controller.ts # Gemini AI endpoints
    └── gemini.controller.spec.ts # Gemini controller tests

test/
├── app.e2e-spec.ts         # End-to-end tests
└── jest-e2e.json          # E2E test configuration

NestGemini/                 # Bruno API collection
├── Gemini.bru             # Gemini endpoint tests
├── Models.bru             # Models endpoint tests
└── Hello.bru              # Hello endpoint tests
```

## 🔑 Configuration

The application uses environment variables for configuration:

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `3000` |
| `GEMINI_API_KEY` | Google Gemini API key | Required |

## 🤝 API Testing

The project includes Bruno API collections in the `NestGemini/` directory for easy API testing:

1. Install [Bruno](https://www.usebruno.com/)
2. Open the `NestGemini` folder as a Bruno collection
3. Run the predefined requests to test the API endpoints

## 🚀 Deployment

### Building for Production
```bash
npm run build
```

The compiled JavaScript files will be in the `dist/` directory.

### Docker Deployment
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY dist/ ./dist/
EXPOSE 3000
CMD ["node", "dist/main"]
```

## 📝 License

This project is [UNLICENSED](LICENSE).

## 🛡️ Security

- Keep your Gemini API key secure and never commit it to version control
- Use environment variables for sensitive configuration
- Regularly update dependencies to patch security vulnerabilities

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support and questions, please open an issue in the repository.

---

Built with ❤️ using NestJS and Google Gemini AI
