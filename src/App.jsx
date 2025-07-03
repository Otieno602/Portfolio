import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <>
      <Helmet>
        <title>BuiltByMangala | Full-Stack Web Developer</title>
        <meta
          name="description"
          content="I'm Mangala, a passionate full-stack web developer creating modern, responsive web experiences for all."
        />
        <meta
          name="keywords"
          content="Mangala, full-stack developer, portfolio, web development, react developer, Kenya"
        />
        <meta name="author" content="Ronald Otieno (Mangala)" />
        <meta
          property="og:title"
          content="BuiltByMangala | Full-Stack Web Developer"
        />
        <meta
          property="og:description"
          content="Discover Mangala's work as a full-stack developer—clean, fast, and user-centered web solutions."
        />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="BuiltByMangala | Full-Stack Web Developer"
        />
        <meta
          name="twitter:description"
          content="Clean, fast, user-centered web solutions by Mangala."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/preview.jpg"
        />
        <meta name="twitter:creator" content="@Ronnie_B001" />
      </Helmet>

      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <Home />
      {/* your Routes will go here */}
      <a
        href="https://wa.me/254708140220"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
      >
        <FaWhatsapp size={24} />
      </a>
    </>
  );
}

export default App;
