import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";
import { NotFound } from "../pages/NotFound";

export const Paths = () => {
  return (
    <>
        <Router>
            <Routes>
                <Route  path="/" element={<Home/>} />
                <Route  path="/contact"element={<Contact/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
      </Router>
    </>
  );
};
