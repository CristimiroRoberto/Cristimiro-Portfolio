import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";
import { Project } from "../pages/Project";
import { NotFound } from "../pages/NotFound";

export const Paths = () => {
  return (
    <>
        <Router>
            <Routes>
                <Route  path="/" element={<Home/>} />
                <Route  path="/contact"element={<Contact/>} />
                <Route  path="/projects/:idProject" element={<Project/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
      </Router>
    </>
  );
};
