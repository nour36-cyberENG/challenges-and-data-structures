import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./Pages/About";
import Welcom from "./Pages/Home";
import Team from "./components/Team/Team";
import TeamDetails from "./components/TeamDetails/TeamDetails";
import LikedUsers from "./components/LinkUsers";
import NotFound from "./Pages/NotFound";
import Layout  from "./components/Layout";

function App() {
  return (
    <div className="App">

      
  
      <BrowserRouter>
      <Layout>
      <Routes>
        <Route path="/" element={<Welcom/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/team" element={<Team />}/>
        <Route path="/team/:id" element={<TeamDetails />}/>
  <Route path="/liked-users" element={<LikedUsers />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>

      </Layout>
      </BrowserRouter>
  
    
    </div>
  );
}

export default App;