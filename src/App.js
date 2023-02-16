import { BrowserRouter, Routes } from "react-router-dom"
import { Suspense } from "react";


import './App.css';

import renderRoutes from "./routes";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          {renderRoutes()}
          {/* HomeTemplates */}
          {/* <Route path="" element={<HomeTemplate />}>
          <Route path="home" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="tichketRoom/:id" element={<TicketRoom />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route> */}

          {/* AdminTemplates */}
          {/* <Route path="admin/films" element={<AdminTemplates />}>
          <Route path="addnew" element={<AddFilms />} />
          <Route path="adduser" element={<AddUsers />} />
        </Route> */}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
