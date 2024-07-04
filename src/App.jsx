import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import AnimatedRoutes from "./components/AnimatedRoutes";

export default function App() {
    return (
      <HashRouter>
        <AnimatedRoutes></AnimatedRoutes>
      </HashRouter>
    );
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
