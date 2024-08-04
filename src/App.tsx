import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tracker from "./pages/Tracker";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/shared/Layout";
import ExerciseTracker from "./pages/ExerciseTracker";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="tracker" element={<Tracker />} />
          <Route path="exercise" element={<ExerciseTracker />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


