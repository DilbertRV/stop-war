import NotWar from './components/NotWar';
import { useEffect } from "react";
import ReactGA from "react-ga4";

function App() {

  useEffect(() => {
    ReactGA.initialize("G-N5J234WRCZ");
    ReactGA.send("pageview");
  }, []);

  return (
    <>
      <NotWar />
    </>
  );
}

export default App;
