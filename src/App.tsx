import Home from "./pages/Home";
import Header from "./components/home/Header";
import Footer from "./components/home/Footer";

export default function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-1 justify-center bg-[#fefefe]">
          <Home />
        </main>
        <Footer />
      </div>
    </>
  );
};