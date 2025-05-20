import React, { Suspense, lazy, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


const LazyGallery = lazy(() => import("./Components/Gallery"));

function App() {

  useEffect(() => {
    import("./Components/Gallery");
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar />

      <main>
        <Home />
        <Suspense fallback={<div>Loading Gallery...</div>}>
          <LazyGallery />
        </Suspense>

        <AboutUs />
        <Services />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
