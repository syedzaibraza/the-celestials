// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Loading from "./components/Loading";

function App() {
  const Home = React.lazy(() => import("./pages/Home"));
  const TheCelestials = React.lazy(() => import("./pages/TheCelestials"));
  const SoundTrack = React.lazy(() => import("./pages/SoundTracks"));
  const Team = React.lazy(() => import("./pages/TheTeam"));
  const Hola = React.lazy(() => import("./pages/Hola"));
  const BoredPumaXSplash = React.lazy(() => import("./pages/BoredPumaXSplash"));

  return (
    <Router>
      <React.Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/the-celestials" element={<TheCelestials />} />
            <Route path="/sound-tracks" element={<SoundTrack />} />
            <Route path="/about/the-team" element={<Team />} />
            <Route path="/hola" element={<Hola />} />
            <Route
              path="/about/boredpuma-x-splash"
              element={<BoredPumaXSplash />}
            />
          </Route>
        </Routes>
      </React.Suspense>
    </Router>
  );
}

export default App;
