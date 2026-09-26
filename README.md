<div align="center">

# 💪 FitLog - Workout Library

<img src="https://img.shields.io/badge/Next.js-16.3.6-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
<img src="https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />

### 🔥 Train with intent. Log every set.

*A dark, no-nonsense gym companion designed to help you track your workouts, plan your sets, and reach your fitness goals efficiently.*

[Live Demo](#) | [Report Bug](#) | [Request Feature](#)

</div>

---

## 📋 Table of Contents

- [About The Project](#-about-the-project)
- [Key Features](#-key-features)
- [Technologies Used](#-technologies-used)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)

---

## 🎯 About The Project

FitLog is a modern workout tracking application built with Next.js 16 that helps fitness enthusiasts manage their training routines. With a sleek dark interface and intuitive design, users can browse a curated library of exercises, plan their daily workouts, and track their progress seamlessly across all devices.

### ✨ Why FitLog?

- 🎨 **Beautiful Dark UI** - Easy on the eyes during late-night gym sessions
- 📱 **Fully Responsive** - Works flawlessly on mobile, tablet, and desktop
- ⚡ **Lightning Fast** - Built with Next.js App Router for optimal performance
- 💾 **Persistent Storage** - Your plans are saved and survive page reloads
- 🔔 **Real-time Feedback** - Toast notifications for every action

---

## 🚀 Key Features

### 1. 📚 Comprehensive Workout Library
Browse through 12 carefully selected exercises covering all major muscle groups. Each workout card displays:
- High-quality exercise illustrations
- Muscle group tags (Chest, Arms, Legs, etc.)
- Complete exercise specifications
- Duration, calories burned, and difficulty ratings

### 2. 📅 Smart Daily Planning
Create your personalized workout plan with a 5-exercise daily cap:
- Add exercises to today's plan with one click
- Real-time metrics tracking (exercises, minutes, calories)
- Visual progress indicators
- Mark exercises as done when completed

### 3. 💾 Save for Later
Build a collection of workouts you want to try:
- Separate "Saved" tab for future workouts
- Quick access from navbar badges
- Easy management with remove functionality

### 4. 📊 Live Dashboard
Track your progress with an interactive metrics dashboard:
- Total exercises counter
- Accumulated workout duration
- Total calories to burn
- Updates in real-time as you add/remove exercises

### 5. 🎨 Responsive Design
Seamless experience across all devices:
- Mobile-optimized layouts
- Touch-friendly interface
- Adaptive navigation
- Consistent dark theme

---

## 🛠️ Technologies Used

<table>
  <tr>
    <td align="center" width="96">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="48" height="48" alt="Next.js" />
      <br>Next.js
    </td>
    <td align="center" width="96">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="48" height="48" alt="React" />
      <br>React 19
    </td>
    <td align="center" width="96">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="48" height="48" alt="TypeScript" />
      <br>TypeScript
    </td>
    <td align="center" width="96">
      <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" width="48" height="48" alt="Tailwind" />
      <br>Tailwind CSS
    </td>
  </tr>
</table>

### Core Technologies
- **Next.js 16.3.6** - React framework with App Router
- **React 19.2.8** - UI library with latest features
- **TypeScript 5** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **DaisyUI 5.7** - Component library for Tailwind

### Additional Libraries
- **FontAwesome** - Professional icon set
- **React Toastify** - Toast notifications
- **Context API** - State management

---

## 🏁 Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/Mrehmanx64/ph-assignment6-Munna.git
cd ph-assignment6-Munna
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

---

## 📱 Usage

### Browse Workouts
1. Navigate to the home page
2. Scroll through the workout library
3. Click on any workout card to view details

### Plan Your Day
1. Click "Add to today's plan" on any workout
2. View your plan from the navbar badge or "My Plan" page
3. Track your metrics in real-time

### Save Workouts
1. Click "Save for later" on workouts you want to try
2. Access saved workouts from the "Saved" tab
3. Add them to your plan when ready

### Manage Your Plan
1. Go to "My Plan" page
2. Switch between "Today's Plan" and "Saved" tabs
3. Mark exercises as done or remove them
4. Sort by duration, calories, or rating

---

## 📁 Project Structure

```
fitlog/
├── public/              # Static assets
├── src/
│   ├── app/            # Next.js App Router pages
│   │   ├── book-details/[id]/  # Workout details page
│   │   ├── my-plan/            # Plan management page
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── not-found.tsx       # 404 page
│   ├── assets/         # Images and media
│   ├── components/     # React components
│   │   ├── homepage/   # Home page components
│   │   └── shared/     # Reusable components
│   ├── context/        # React Context for state
│   └── types/          # TypeScript type definitions
├── package.json
└── README.md
```

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

<div align="center">

## 📝 License

This project is licensed under the MIT License.

## 👨💻 Author

**Munna**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Mrehmanx64)

---

### ⭐ Star this repo if you find it helpful!

Made with ❤️ and 💪

</div>
