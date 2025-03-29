import "./App.css";
import AppShell from "./components/AppShell";
import Calendar from "./sections/Calendar";
import Navbar from "./sections/Navbar";
import Items from "./sections/Items";
import ScheduleProvider from "./providers/ScheduleProvider";

function App() {
  return (
    <ScheduleProvider>
      <AppShell top={<Navbar />} left={<Items />} right={<Calendar />} />;
    </ScheduleProvider>
  );
}

export default App;
