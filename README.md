# Chatty Pete

Chatty Pete is a chat application powered by ChatGPT, created using Next.js, OpenAI API with GPT-3.5 turbo model, Tailwind CSS for styling, MongoDB for persistence, and Auth0 by Okta for authorization.

## Features

- **Chat with ChatGPT:** Engage in natural language conversations with ChatGPT, powered by the OpenAI GPT-3.5 turbo model.

- **Persistent Chats:** All your chat history is stored in MongoDB, allowing you to pick up conversations where you left off.

- **Secure Authorization:** Auth0 by Okta is used for secure user authentication and authorization.

- **Responsive UI:** The UI is designed using Tailwind CSS to ensure a responsive and visually appealing experience on various devices.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/chatty-pete.git
   ```

2. Install dependencies:

   ```bash
   cd chatty-pete
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory with the following variables:

   ```env
   OPENAI_API_KEY=your_openai_api_key
   MONGODB_URI=your_mongodb_uri
   AUTH0_DOMAIN=your_auth0_domain
   AUTH0_CLIENT_ID=your_auth0_client_id
   AUTH0_CLIENT_SECRET=your_auth0_client_secret
   ```

   Replace the placeholder values with your actual API keys and credentials.

4. Run the development server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to access Chatty Pete.

## Deployment

Chatty Pete is deployed on Vercel. Simply push your changes to the `main` branch, and Vercel will automatically deploy the latest version.

Visit the deployed site: [Chatty Pete](https://chatty-pete-ecru.vercel.app/)

## Credits

Special thanks to [Tom Phillips](https://github.com/tomphill) for the helpful guidance in learning Next.js.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
