
import react, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [resData, setResData] = useState({});

let fetchedData;
  useEffect(() => {
    const data =  fetch(`https://api.openaq.org/v1/cities?country=GB`)
    .then(response => response.json())
    .then(response => {
   
   

      setResData(response.results)
      setIsLoading(false);

    })
  }, []);
 





  return (
    <>
    {isLoading && "loading"}
    
    { !isLoading &&
    <>
   

    <div>{resData.map(cities => {
      return(  cities.name)
    
    })}</div>
      
      </>
    }
</>

  );
}

export default App;
