import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Quotes from "./components/Quotes";

export default function Home() {
  return (
    <>
      {/* Add Loading...
      Maybe Icon on text */}
      <Header />

      <MainPage />
      <Quotes />
      <Footer />

    </>
  );
}
