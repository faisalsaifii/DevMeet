import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Meet from "./components/Meet";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/meet" element={<Meet />} />
      </Routes>
    </Router>
  );
};

export default App;
