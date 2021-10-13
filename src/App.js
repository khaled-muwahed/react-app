import { FetchData } from "./utils/Fetch";
import { HomePageHeader } from "./components/header";
import { AppWrapper } from "./styles/style";

function App() {
  return (
    <AppWrapper>
      <div className="App">
        <HomePageHeader />
        <FetchData />
      </div>
    </AppWrapper>
  );
}

export default App;
