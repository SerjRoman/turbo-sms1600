TurboSMS is a mobile messenger application built with React Native and Expo. The app provides a seamless, real-time communication experience using WebSockets for live messaging and a REST API for data fetching.

✨ Features
User Authentication: Secure user registration and login flow.

Contact Management: View your contact list and add new users.

Chat List: A dedicated screen displaying all active conversations with a preview of the last message and its timestamp.

Real-Time Messaging: Instant message exchange within chat rooms, powered by Socket.IO.

Chat Creation: Start new conversations with users from your contact list.

Avatar Uploads: Utilizes expo-image-picker for profile picture selection (work in progress).

Modern Navigation: A robust, file-based navigation system implemented with Expo Router.

🔧 Tech Stack

Frontend (Client)

Framework: React Native with Expo

Navigation: Expo Router

Forms: React Hook Form

WebSockets: Socket.IO Client

Local Storage: Async Storage

Assets: Expo Image Picker, React Native SVG

Language: TypeScript

Backend (Server)

🚨 Important: This repository contains the client-side code only. A running backend server is required for the application to function correctly.
Backend Repository: https://github.com/SerjRoman/BackendProject1600

🏁 Getting Started
To get a local copy up and running, follow these simple steps.

Prerequisites
Node.js (LTS version recommended)
Git
Expo Go app on your iOS or Android device.
Installation & Launch
Clone and run the backend repository by following the instructions in its README.md.
Clone this (client) repository:
Generated bash
git clone 
Install dependencies
npm install
Set up environment variables:
Create a .env file in the project root:
Generated env
# Point to your local or remote API URL
API_URL=http://localhost:3000
WEBSOCKET_URL=ws://localhost:3000

Use a tunneling service like ngrok if you are testing on a physical device that is not on the same Wi-Fi network as your computer.
Start the development server:
Generated bash

npx expo start

Scan the QR code with the Expo Go app on your phone to launch the app.
🗺️ Roadmap
Here is a list of planned enhancements and features:
Profile & Settings Page: Allow users to edit their profile information and avatar.
UI/UX Enhancements: Refactor styles for the Chat List and Chat screens for a more polished look.
Push Notifications: Notify users of new messages when the app is in the background.
Presence Indicators: Implement "online" and "typing..." indicators in chat rooms.
Advanced Error Handling: Improve handling of network and validation errors.

Some screenshots:
![Simulator Screenshot - iPhone 15 - 2025-07-02 at 21 04 39](https://github.com/user-attachments/assets/751b1b46-b2b0-4bdc-a3fe-98f91ca3a648)
![Simulator Screenshot - iPhone 15 - 2025-07-02 at 21 04 46](https://github.com/user-attachments/assets/83a2d7df-e1f9-4c64-8cda-ed28ce5a7d59)
![Simulator Screenshot - iPhone 15 - 2025-07-02 at 21 04 56](https://github.com/user-attachments/assets/f9f9c1af-add9-428a-9993-197779a289e4)
![Simulator Screenshot - iPhone 15 - 2025-07-02 at 22 28 24](https://github.com/user-attachments/assets/a3a7797c-08ff-46f9-a744-8060dd32b899)
![Simulator Screenshot - iPhone 15 - 2025-07-02 at 22 28 30](https://github.com/user-attachments/assets/1a60ebe4-4a93-4cb6-8521-b66551bb712f)
![Simulator Screenshot - iPhone 15 - 2025-07-02 at 22 28 45](https://github.com/user-attachments/assets/1e9922f6-a319-4720-aa97-ef13710bd347)
![Simulator Screenshot - iPhone 15 - 2025-07-02 at 22 29 04](https://github.com/user-attachments/assets/198c2bf1-9efc-4467-982f-8e0a92b9ab5d)
![Simulator Screenshot - iPhone 15 - 2025-07-02 at 22 29 23](https://github.com/user-attachments/assets/5550ecba-4730-4a54-986b-51527fe8328a)






