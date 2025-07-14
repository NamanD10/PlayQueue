🎮 PLAYQUEUE

PlayQueue is a gamer-centric fun web app built with React where users can:

🔍 Search for their favorite games

📋 Maintain lists like Played, Playing, and Wishlist

🧠 View detailed info about each game

💾 Save their lists using browser's localStorage (no signup/login required!)

🕹️ Live Demo

https://play-queue-eight.vercel.app/

✨ Features

🎯 Browse and explore game titles using the RAWG Video Games Database API

🔍 Real-time game search with debouncing

🗂️ Organize games into three customizable lists

💡 Clean and responsive UI using MUI

⚡ Instant navigation between game details and lists

🔒 Works without any backend or database

🛠 Key Architectural Choice:

  •LocalStorage-Based State Management:
    Opted for browser-based localStorage instead of traditional database + auth flows. This allows:
    
  •No login or signup required
  •Instant personalization – games you add stay saved on your device
  •Zero backend dependencies, making the app fast and easy to maintain      
  •Perfect for casual, low-commitment use cases, where fun > formality

🔧 Tech Stack

Frontend: React + TypeScript

Styling: Material UI (MUI)

Routing: React Router

API: RAWG API

🧪 Running the App Locally

git clone https://github.com/your-username/playqueue.git cd playqueue npm install npm run dev

You'll need a RAWG API key. Create a .env file and add:

VITE_RAWG_API_KEY=your_api_key_here

📌 Future Improvements

🎨 Polish UI for a smoother experience

☀ Addition of light/dark theme toggle


🙌 Acknowledgements

RAWG API – Game data
Material UI – UI framework
