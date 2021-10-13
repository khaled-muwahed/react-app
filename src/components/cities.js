import { AppWrapper } from "../styles/style"
export default function RenderCities({cityData}){
 
    return(
      <div className="tiles">
         
          
        
            <span className="text">City name: </span> <span className="text-info">{ cityData.name }, </span>  
            <span className="text">City count: </span> 
             <span className="text-info">{cityData.count}, </span>
            <span className="text">City Locations: </span>
            <span className="text-info">{cityData.locations}, </span >
             <span className="text">Country: </span> <span className="text-info"> {cityData.country}</span> 
                   
              
         
      </div>
    )
  }