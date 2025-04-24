🎮 PLAYQUEUE
PlayQueue is a gamer-centric web app built with React where users can:

🔍 Search for their favorite games

📋 Maintain lists like Played, Playing, and Wishlist

🧠 View detailed info about each game

💾 Save their lists using browser's localStorage (no signup/login required!)

✨ Features
  🎯 Browse and explore game titles using the RAWG Video Games Database API

  🔍 Real-time game search with debouncing

  🗂️ Organize games into three customizable lists

  💡 Clean and responsive UI using MUI

  ⚡ Instant navigation between game details and lists

  🔒 Works without any backend or database

🔧 Tech Stack
  Frontend: React + TypeScript

  Styling: Material UI (MUI)

  Routing: React Router

  API: RAWG API

🕹️ Live Demo
Coming soon! (Or add your Vercel/Netlify link here)

🧪 Running the App Locally
  git clone https://github.com/your-username/playqueue.git
  cd playqueue
  npm install
  npm run dev

  You'll need a RAWG API key. Create a .env file and add:
  VITE_RAWG_API_KEY=your_api_key_here


📁 Folder Structure
  src/
  ├── components/        # Reusable UI components
  ├── pages/             # Pages for each route (Home, Search, Lists)
  ├── types/             # TypeScript types and interfaces
  ├── utils/             # Utility functions like localStorage logic
  ├── App.tsx            # Main app component with routing

📌 Future Improvements
  🔒 Add user authentication

  ☁️ Store user data persistently with a backend & DB

  🎨 Polish UI for a smoother experience


🙌 Acknowledgements
  RAWG API – Game data

  Material UI – UI framework

