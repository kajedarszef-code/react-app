import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Nav } from "./components/nav/nav";
import { Dashboard } from "./pages/dashboard/dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Users } from "./pages/users/users";
import { NewsDetails } from "./pages/newsDetails/newsDetails";
import { ThemeProvider } from "./context/themecontext";
import { Footer } from "./components/footer/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/news/:slug" element={<NewsDetails />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
