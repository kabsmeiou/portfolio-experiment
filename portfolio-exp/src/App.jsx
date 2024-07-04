import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AnimatedRoutes from "./components/AnimatedRoutes";

export default function App() {
    return (
      <BrowserRouter>
        <AnimatedRoutes></AnimatedRoutes>
      </BrowserRouter>
    );
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
