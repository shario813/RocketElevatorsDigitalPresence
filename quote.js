const residentialButton = document.getElementById("residential-button");
const commercialButton = document.getElementById("commercial-button");
const industrialButton = document.getElementById("industrial-button");

const divApartments = document.getElementById("div-apartments");
const divfloors = document.getElementById("div-floors");
const divNumberElevator = document.getElementById("div-Number of Elevator");
const divMaximumOccupancy = document.getElementById("div-maximum Occupancy");

//user input 
const inputapartments = document.getElementById("apartments.input");
const inputnumberfloors = document.getElementById("numberfloors.input");
const inputnumberelevators = document.getElementById("numberelevators.input");
const inputmaximumoccupancy = document.getElementById("maximumoccupancy.input");

//
const standard = document.getElementById("standard");
const premium = document.getElementById("premium");
const excelium = document.getElementById("excellium");
const ElevatorRequired = document.getElementById("Elevator Required");
const CostPerUnit = document.getElementById("Cost Per Unit");
const InstillationFees = document.getElementById("Instillation Fees");
const Totalcost = document.getElementById("Total cost");

divApartments.style.display = "none";
divfloors.style.display = "none";
divNumberElevator.style.display = "none";
divMaximumOccupancy.style.display = "none";

residentialButton.addEventListener("click", () => {
  divfloors.style.display = "block";
  divApartments.style.display = "block";
  divMaximumOccupancy.style.display = "none";
  divNumberElevator.style.display = "none";
});

commercialButton.addEventListener("click", () => {
  divfloors.style.display = "block";
  divMaximumOccupancy.style.display = "block";
  divApartments.style.display = "none";
  divNumberElevator.style.display = "none";
});

industrialButton.addEventListener("click", () => {
  divApartments.style.display = "none";
  divMaximumOccupancy.style.display = "none";
  divNumberElevator.style.display = "block";
  divfloors.style.display = "none";
});


//The industrial() function updates the value of the ElevatorRequired field with 
// the value entered in the inputnumberelevators field. It is likely part of a 
// process where the user inputs a value, and that value is then displayed or used elsewhere in the page.
const industrial =() => {

  ElevatorRequired.value=inputnumberelevators.value

}


const residentialMath = () =>{

    //getting the value (what the user typed into) of our apartments input field
   const numberOfApartments = inputapartments.value
    
    //getting the value (what the user typed into) of our floors input field
    const numberOfFloors = inputnumberfloors.value
    
    const averageApartmentsPerFloor = numberOfApartments/numberOfFloors
    
    const requiredElevators = averageApartmentsPerFloor/6
    
    const elevatoBanks = numberOfFloors/20
    
    const totalElevators = requiredElevators*elevatoBanks
    ElevatorRequired.value=totalElevators
 }

    //This function Commercial() is designed to calculate
    //  the total number of elevators required for a commercial building based on the maximum occupancy per floor,
    //  the number of floors, and some assumptions (such as 200 people per elevator and 10 floors per elevator bank).
    //  After performing the calculations,
    //  it updates an element (likely a form field or display area) with the calculated total number of elevators.
const  Commercial = () => {

  const maximumoccupancy=inputmaximumoccupancy.value
  const numberOfFloors = inputnumberfloors.value
  const TotalnumberofOccupancy=numberOfFloors*maximumoccupancy
  const elevatorRequired=TotalnumberofOccupancy/200
  const banks=numberOfFloors/10
  const totalElevators= banks*elevatorRequired +banks
  ElevatorRequired.value=totalElevators

}

inputnumberelevators.addEventListener("input",()=> {

  industrial()

});

//Whenever the user types into or changes the value in the inputapartments field, the input event is triggered, and the residentialMath() function is called. The residentialMath() function likely performs some logic or calculation related to apartments, but 
// the specific details would depend on how residentialMath() is implemented in your code.
inputapartments.addEventListener("input",() => {

  residentialMath ()

});

//Whenever the user types or interacts with the inputmaximumoccupancy element 
// (presumably an input field), the event listener triggers the Commercial() function.
inputmaximumoccupancy.addEventListener("input", ()=> {

    Commercial ()

});


inputnumberfloors.addEventListener("input", () => {

  if (residentialButton.checked ) {
    residentialMath ()
  } else  if (commercialButton.checked){ 
    Commercial ()
  }

});
  
standard.addEventListener("click",() =>  {

  const totalElevators=ElevatorRequired.value

  // Calculate the base cost (end cost) for the elevators
  const endCost = totalElevators* 8000;

  // Calculate the installation fee (10% of end cost)
  const standardFee = endCost * 0.10;

  // Calculate the total cost including the installation fee
  const finalPrice = endCost + standardFee;

  CostPerUnit.value=endCost
  InstillationFees.value=standardFee
  Totalcost.value=finalPrice

})

premium.addEventListener("click",() =>  {
  const totalElevators=ElevatorRequired.value

  // Calculate the base cost (end cost) for the elevators
  const endCost = totalElevators* 12000;

  // Calculate the installation fee (10% of end cost)
  const standardFee = endCost * 0.15;

  // Calculate the total cost including the installation fee
  const finalPrice = endCost + standardFee;

  CostPerUnit.value=endCost
  InstillationFees.value=standardFee
  Totalcost.value=finalPrice

 })
 

excelium.addEventListener("click",() =>  {
  const totalElevators=ElevatorRequired.value

  // Calculate the base cost (end cost) for the elevators
  const endCost = totalElevators* 15000;

  // Calculate the installation fee (10% of end cost)
  const standardFee = endCost * 0.20;

  // Calculate the total cost including the installation fee
  const finalPrice = endCost + standardFee;

  CostPerUnit.value=endCost
  InstillationFees.value=standardFee
  Totalcost.value=finalPrice

 })

 