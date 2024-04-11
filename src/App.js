import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
  return (
    <div className="App">
    {/* <h1>Welcome Abhi Varma</h1> */}
    <Router>
      <AppRoutes />
    </Router>
  </div>
  );
}

export default App;


