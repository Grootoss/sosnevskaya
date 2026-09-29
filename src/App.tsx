import { Contacts } from "./components/Contacts";
import { Features } from "./components/Features";
import { Flats } from "./components/Flats";
import { Footer } from "./components/Footer";
import { Infrastructure } from "./components/Infrastructure";
import { Location } from "./components/Location";
import { Mortgage } from "./components/Mortgage";
import { Promo } from "./components/Promo";

function App() {
  return (
    <>
      <Promo />
      <Features />
      <Flats />
      <Infrastructure />
      <Mortgage />
      <Location />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
