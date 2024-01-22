import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Loader from "./components/Loader";

const Home = lazy(() => import("./components/Home"));
const Result = lazy(() => import("./components/Result"));
const Learn = lazy(() => import("./components/Learn"));
const Quiz = lazy(() => import("./components/Quiz"));
const Login = lazy(() => import("./components/Login"));
const NotFound = lazy(() => import("./components/NotFound"));

const App = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
