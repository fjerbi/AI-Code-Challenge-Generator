import  ClerkProviderWithRoutes  from "./auth/ClerkProviderWithRoutes.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./layout/Layout";
import { ChallengeGenerator } from "./challenge/ChallengeGenerator";
import { AuthenticationPage } from "./auth/AuthenticationPage";
import { HistoryPanel } from "./history/HistoryPanel";

function App() {
  return (
    <ClerkProviderWithRoutes>
      <Routes>
        <Route path="/sign-in/*" element={<AuthenticationPage />} />
        <Route path="/sign-up" element={<AuthenticationPage />} />
        <Route element={<Layout />}>
          <Route path="/" element={<ChallengeGenerator />} />
          <Route path="/history" element={<HistoryPanel />} />
        </Route>
      </Routes>
    </ClerkProviderWithRoutes>
  );
}

export default App;
