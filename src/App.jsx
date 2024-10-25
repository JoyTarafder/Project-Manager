import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <main className="flex-1 overflow-y-auto overflow-x-hidden">
        <Header />
      </main>
    </div>
  );
}
