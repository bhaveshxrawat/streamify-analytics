import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";

const App = () => (
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

export default App;
