

export default function RenderCities({cityData}){
 
    return(
      <div>
          <p>________________</p>
          {"City name: " + cityData.name + 
                " , " +
                "City count: " + cityData.count +
                " ," +
                "City Locations: " + cityData.locations +
                ", " +
                "Country: "+ cityData.country}
      </div>
    )
  }