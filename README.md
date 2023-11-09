# Chatty Pete

Chatty Pete is a chat application powered by ChatGPT, a language model developed by OpenAI using the GPT-3.5 turbo model. This application is built with Next.js for the frontend, utilizing the OpenAI API for natural language processing. The UI is styled with Tailwind CSS, providing a clean and responsive design.

## Features

- **Chat with ChatGPT:** Engage in conversations with ChatGPT, a powerful language model that can generate human-like text based on the input it receives.

- **Persistent Chats:** All your conversations are stored using MongoDB, ensuring that you can pick up where you left off even if you close or refresh the page.

## Getting Started

To run Chatty Pete locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/adihex/chatty-pete.git
cd chatty-pete
```

2. Install dependencies:

```bash
npm install
```

3. Set up your environment variables:

   Create a `.env.local` file in the root directory and add the following:

   ```env
   OPENAI_API_KEY=your_openai_api_key
   MONGODB_URI=your_mongodb_uri
   ```

   Replace `your_openai_api_key` with your OpenAI API key and `your_mongodb_uri` with your MongoDB connection string.

4. Run the application:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to start chatting with Pete!

## Deployment

Chatty Pete is deployed on Vercel and can be accessed at [chatty-pete-ecru.vercel.app](https://chatty-pete-ecru.vercel.app/).

## Contributing

Feel free to contribute to Chatty Pete by submitting issues or pull requests. Your feedback and contributions are highly appreciated!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- OpenAI for providing the powerful GPT-3.5 turbo model.
- The Next.js, Tailwind CSS, and MongoDB communities for their amazing tools and resources.

Happy chatting with Chatty Pete!
