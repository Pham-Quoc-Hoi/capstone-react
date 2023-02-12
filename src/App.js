import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomeTemplate from "./pages/HomeTemplates";
import HomePage from "./pages/HomeTemplates/HomePages"
import AboutPage from "./pages/HomeTemplates/AboutPages"
import TicketRoom from "./pages/HomeTemplates/TicketRoom";
import Register from "./pages/HomeTemplates/Register"
import Login from "./pages/HomeTemplates/Login"
import AdminTemplates from "./pages/AdminTemplates"
import AddFilms from "./pages/AdminTemplates/AddFilm"
import AddUsers from "./pages/AdminTemplates/AddUsers"

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HomeTemplates */}
        <Route path="" element={<HomeTemplate />}>
          <Route path="home" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="tichketRoom/:id" element={<TicketRoom />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>

        {/* AdminTemplates */}
        <Route path="admin/films" element={<AdminTemplates />}>
          <Route path="/admin/films/addnew" element={<AddFilms />} />
          <Route path="/admin/films/adduser" element={<AddUsers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
