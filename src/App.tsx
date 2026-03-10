import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import StatsPage from "./pages/StatsPage";
import ProfilePage from "./pages/ProfilePage";

type RouteKey = "home" | "courses" | "stats" | "profile";

function getRouteFromHash(): RouteKey {
  const hash = window.location.hash.replace(/^#\//, "");
  if (hash === "courses" || hash === "stats" || hash === "profile") {
    return hash;
  }
  return "home";
}

export default function App() {
  const [route, setRoute] = useState<RouteKey>(getRouteFromHash());

  useEffect(() => {
    const onHashChange = () => setRoute(getRouteFromHash());
    window.addEventListener("hashchange", onHashChange);
    if (!window.location.hash) {
      window.location.hash = "/home";
    }
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-app pb-16 font-body text-kerp-text">
      {route === "home" ? <HomePage /> : null}
      {route === "courses" ? <CoursesPage /> : null}
      {route === "stats" ? <StatsPage /> : null}
      {route === "profile" ? <ProfilePage /> : null}
    </div>
  );
}
