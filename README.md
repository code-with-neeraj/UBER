# Project Documentation

---

## Overview
This project is a ride-hailing application similar to Uber. It consists of a backend (Node.js) and a frontend (React.js) styled using SCSS and Tailwind CSS.

### Features
- User and Captain authentication.
- Real-time ride updates using Socket.IO.
- Integration with Gomaps API for geocoding and distance calculations.
- Interactive map for live tracking.
- Modern styling using SCSS and Tailwind CSS.

### Documentation
- [Backend Documentation](README.md)
- [Frontend Documentation](README.md)

### How to Run
1. **Backend**
   - Navigate to the `Backend/` folder.
   - Install dependencies: `npm install`.
   - Start the server: `npx nodemon`.

2. **Frontend**
   - Navigate to the `frontend/` folder.
   - Install dependencies: `npm install`.
   - Start the development server: `npm run dev`.

3. **Environment Variables**
   - Backend: `.env` file with the following variables:
     ```
     PORT=5000
     ConnectionDB_CONNECT=<MongoDB__String>
     JWT_SECRET=<Your_Secret_Key>
     GOMAPS_API=<Google_Maps_API_Key>
     ```
   - Frontend: `.env` file with the following variable:
     ```
     VITE_BASE_URL=<Backend_Base_URL>
     ```

---

# Backend Documentation

## Overview
The backend is built using Node.js and Express.js. It provides APIs for user and captain authentication, ride management, and map services.

### Key Features
- User and Captain registration/login/logout.
- Ride creation, fare calculation, and status updates.
- Integration with Gomaps API for geocoding, distance, and autocomplete suggestions.
- Real-time communication using Socket.IO.

### Folder Structure

Backend/
├── app.js
├── server.js
├── socket.js
├── controllers/
├── models/
├── routes/
├── services/
├── middlewares/
└── db/


### Key Files
1. **`app.js`**: Initializes Express, connects to MongoDB, and sets up routes.
2. **`server.js`**: Starts the HTTP server and initializes Socket.IO.
3. **`socket.js`**: Manages real-time communication between users and captains.
4. **`controllers/`**: Contains logic for handling API requests.
5. **`models/`**: Defines MongoDB schemas for users, captains, and rides.
6. **`routes/`**: Defines API endpoints for users, captains, rides, and maps.
7. **`services/`**: Contains business logic for rides, maps, and user management.
8. **`middlewares/`**: Authentication middleware for users and captains.

### API Endpoints
- **Users**
  - `POST /users/register`: Register a new user.
  - `POST /users/login`: Login a user.
  - `GET /users/profile`: Get user profile.
  - `GET /users/logout`: Logout a user.

- **Captains**
  - `POST /captains/register`: Register a new captain.
  - `POST /captains/login`: Login a captain.
  - `GET /captains/profile`: Get captain profile.
  - `GET /captains/logout`: Logout a captain.

- **Rides**
  - `POST /rides/create`: Create a new ride.
  - `GET /rides/get-fare`: Get fare estimates.
  - `POST /rides/confirm`: Confirm a ride.
  - `GET /rides/start-ride`: Start a ride.
  - `POST /rides/end-ride`: End a ride.

- **Maps**
  - `GET /maps/get-coordinates`: Get coordinates for an address.
  - `GET /maps/get-distance-time`: Get distance and time between two locations.
  - `GET /maps/get-suggestions`: Get autocomplete suggestions.

---

# Frontend Documentation

## Overview
The frontend is built using React.js and Vite. It provides a user-friendly interface for users and captains to interact with the system.

### Key Features
- User and Captain authentication.
- Real-time ride updates using Socket.IO.
- Interactive map for live tracking using Leaflet.js.
- Dynamic panels for ride creation and confirmation.
- Modern styling using SCSS and Tailwind CSS.

### Folder Structure

frontend/  
├── public/  
├── src/  
│   ├── components/  
│   ├── context/  
│   ├── pages/  
│   ├── styles/  
│   ├── App.jsx  
│   ├── main.jsx  
│   └── index.css  
└── vite.config.js  


### Key Files
1. **[App.jsx](http://_vscodecontentref_/3)**: Defines the main routes for the application.
2. **`pages/`**: Contains pages like [Home](http://_vscodecontentref_/4), [UserLogin](http://_vscodecontentref_/5), [UserSignup](http://_vscodecontentref_/6), etc.
3. **`components/`**: Reusable components like [LiveTracking](http://_vscodecontentref_/7), [VehiclePanel](http://_vscodecontentref_/8), etc.
4. **`context/`**: Context providers for managing global state (e.g., [UserContext](http://_vscodecontentref_/9), [SocketContext](http://_vscodecontentref_/10)).
5. **`styles/`**: SCSS files for modular and reusable styling.
6. **`vite.config.js`**: Configuration for Vite.

### Key Pages
- **[Home.jsx](http://_vscodecontentref_/11)**: Main page for users to find and book rides.
- **[UserLogin.jsx](http://_vscodecontentref_/12)**: Login page for users.
- **[UserSignup.jsx](http://_vscodecontentref_/13)**: Signup page for users.
- **[CaptainHome.jsx](http://_vscodecontentref_/14)**: Dashboard for captains to view and accept rides.

### Key Components
- **[LiveTracking.jsx](http://_vscodecontentref_/15)**: Displays a live map with the user's location.
- **[VehiclePanel.jsx](http://_vscodecontentref_/16)**: Allows users to select a vehicle type.
- **[ConfirmRide.jsx](http://_vscodecontentref_/17)**: Displays ride details for confirmation.

---

## Styling Documentation

### SCSS
The project uses SCSS for modular and reusable styling. SCSS files are organized by components and pages.

#### Installation
```bash
npm install -g sass
```

#### Folder Structure
src/
├── components/
│   ├── LiveTracking.scss
│   ├── VehiclePanel.scss
│   └── ConfirmRide.scss
├── pages/
│   ├── Home.scss
│   ├── UserLogin.scss
│   ├── UserSignup.scss
│   └── CaptainHome.scss
└── global.scss

#### Example Usage
```scss
// Example SCSS file for LiveTracking component
.LiveTracking {
  position: relative;
  width: 100%;
  height: 400px;
  .map {
    border-radius: 10px;
  }
}
```

### Tailwind CSS
Tailwind CSS is used for utility-first styling. It is configured in the `tailwind.config.js` file.

#### Installation
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

#### Configuration
```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

#### Example Usage
```html
<div class="flex items-center justify-center h-screen bg-gray-100">
  <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
    Confirm Ride
  </button>
</div>
```

---

### Summary of Updates
1. Added **SCSS** documentation with folder structure, examples, and usage.
2. Added **Tailwind CSS** documentation with installation, configuration, and examples.
3. Updated the [README.md](http://_vscodecontentref_/1) to reflect the use of SCSS and Tailwind CSS for styling.

---

# Project Flowchart

## Overview
The flowchart illustrates the interaction between the frontend, backend, and external services (e.g., Gomaps API).

## Flowchart
1. **User Flow**
   - User opens the app and logs in.
   - User enters pickup and destination locations.
   - User selects a vehicle type and confirms the ride.
   - User waits for a captain to accept the ride.
   - User tracks the ride in real-time.

2. **Captain Flow**
   - Captain logs in and updates their location.
   - Captain receives ride requests in real-time.
   - Captain accepts a ride and starts the trip.
   - Captain ends the trip and updates the status.

3. **Backend Flow**
   - Handles API requests for user and captain authentication.
   - Manages ride creation, fare calculation, and status updates.
   - Communicates with the frontend using Socket.IO.
   - Integrates with Gomaps API for geocoding and distance calculations.

---
````
