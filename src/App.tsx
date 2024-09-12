// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ClientList from "./components/ClientList";
import InventaryList from "./components/InventaryList";
import Home from "./components/HomePage";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Mi Aplicación</h1>
            <nav>
              <Link to="/home" className="text-white hover:text-gray-200 mr-4">Inicio</Link>
              <Link to="/clientes" className="text-white hover:text-gray-200 mr-4">Clientes</Link>
              <Link to="/inventario" className="text-white hover:text-gray-200">Inventario</Link>
            </nav>
          </div>
        </header>
        <main className="flex-1 container mx-auto p-4">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/clientes" element={<ClientList />} />
            <Route path="/inventario" element={<InventaryList />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>© 2024 Mi Aplicación. Todos los derechos reservados.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
