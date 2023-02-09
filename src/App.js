// import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Alert from "./components/Alert";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alerts/AlertContext";
import NotFound from "./pages/NotFound";
import Footer from "../src/components/Footer";

function App() {
  // const MyComponent = lazy(() => import('./MyComponent'));

  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <Alert />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/user/:login" element={<Profile />} />
            {/* <Route path="/user" element={<Profile />} /> */}
            <Route path="/notfound" element={NotFound} />
          </Routes>
          <Footer />
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
