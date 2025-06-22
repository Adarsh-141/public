# 🎬 Mini YouTube Clone (Frontend Project)

## 📌 Overview

This project is a **Mini YouTube Clone** built using **React JS** and **Bootstrap 5**. It is a **frontend-only** implementation that mimics essential features of YouTube such as browsing video cards, liking videos, saving to "Watch Later", and tracking how long the user has spent on the platform.

There is **no backend/database** used. Instead, the app simulates persistent behavior using the browser's `sessionStorage`.

---

## ✅ Key Functionalities

- **Video Feed (Home Page)**
  - Displays a grid of video cards with thumbnails, titles, channel names, view counts, and upload time.
  - Each card has:
    - ❤️ Like button
    - ➕ "Watch Later" toggle button

- **Watch Later Page**
  - Displays only the videos the user marked for "Watch Later"
  - Option to remove from list

- **Navbar**
  - Site logo/title
  - Dummy search input
  - “Watch Later” button (shows count dynamically)

- **Session Timer**
  - Displays live time spent on the site using `useEffect` and `setInterval`

- **Data Persistence**
  - All user actions (like/watch later) are saved in `sessionStorage`
  - State is retained on page refresh but **clears when the tab/browser is closed**

---

## 🛠️ Tech Stack & Tools

| Technology         | Purpose                                       |
|--------------------|-----------------------------------------------|
| **React JS**       | Frontend framework for UI and state handling  |
| **Bootstrap 5**    | CSS framework for responsive layout and UI    |
| **React Router DOM** | Page navigation between Home and Watch Later |
| **JavaScript (ES6+)** | Logic for like, watch later, and timer     |
| **sessionStorage** | Simulated local data persistence (no backend) |
| **Custom CSS**     | Minor styling enhancements (e.g., hover effects)


---

## 🚀 How to Run

1. **Clone this repository**
   ```bash
   git clone 
   cd youtube-clone




