

import { FetchData } from './utils/Fetch';
import { HomePageHeader } from './components/header';



import './App.css';
import { AppWrapper } from './styles/style';

function App() {
  return(
    <div className="App">
      <AppWrapper>


      <HomePageHeader />
  <FetchData />

  </AppWrapper>
  

  </div>
  )
}

export default App;
