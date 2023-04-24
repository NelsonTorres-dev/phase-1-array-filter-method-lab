// Code your solution here

// function findMatching(drivers, string){
//     const newDrivers = [];

//     for(const driver of drivers){
//         if(driver.toLowerCase() === string.toLowerCase() ){
         
//            newDrivers.push(driver)
//         } 

//     }
//    return newDrivers
// }


const findMatching = (drivers, string) => drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
 


 const fuzzyMatch = (drivers, string) => drivers.filter((driver) => driver.toLowerCase().indexOf(string.toLowerCase()) === 0)



const matchName = (drivers, string) =>  drivers.filter( (driver) => driver.name === string)
















