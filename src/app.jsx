import { Router } from "preact-router";
import Home from "./pages/home";
import ExtraPage from "./pages/extrapage";
import Header from "./components/header";
import Footer from "./components/footer";
export function App() {
  const routes = [
    { path: "/", name: "Home" },
    { path: "/extrapage", name: "Extra page" },
  ];
  return (
    <div className="flex flex-col min-h-screen relative bg-neutral-900 to-100%">
      <Header routes={routes} />
      <main className="flex-1">
        <Router>
          <Home path="/" />
          <ExtraPage path="/extrapage" />
        </Router>
      </main>
      <Footer links={routes} />
    </div>
  );
}
