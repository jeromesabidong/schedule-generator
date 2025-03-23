import "./App.css";
import AppShell from "./components/AppShell";
import Calendar from "./sections/Calendar";
import Navbar from "./sections/Navbar";
import Items from "./sections/Items";

function App() {
  return <AppShell top={<Navbar />} left={<Items />} right={<Calendar />} />;
}

export default App;
