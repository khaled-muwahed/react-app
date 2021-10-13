import react, { useState, useEffect } from "react";
import RenderCities from "../components/cities";
import { Spinner } from "../components/LoadingSpinner/Spinner";

export function FetchData() {
  const [isLoading, setIsLoading] = useState(true);
  const [resData, setResData] = useState({});
  useEffect(() => {
    fetch(`https://api.openaq.org/v1/cities?country=GB`)
      .then((response) => response.json())
      .then((response) => {
        setResData(response.results);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading && Spinner()}

      {!isLoading && (
        <div>
          <div>
            {resData.map((cities) => {
              return <RenderCities cityData={cities} />;
            })}
          </div>
        </div>
      )}
    </>
  );
}
