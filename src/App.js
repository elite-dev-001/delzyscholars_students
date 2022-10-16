import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseDetails from "./pages/CourseDetails";
import Error from "./pages/Error";
import LearnTab from "./pages/LearnTab";
import MyCourses from "./pages/MyCourses";



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/:id" element={ <MyCourses /> } />
          <Route path="/details:id" element={ <CourseDetails /> } />
          <Route path="/learning:id" element={ <LearnTab />} />
          <Route path="*" element={ <Error /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App