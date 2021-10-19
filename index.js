var demand 
var orderingCost
var carrringCost


function EOQ(a,o,c) {
    
    a = demand
    o = orderingCost
    c = carrringCost

    return Math.sqrt(2*a*o/c)
    
}

//Getting input from html
var inputDemand = document.getElementById("inputDemand")
var inputOrderingCost = document.getElementById("inputOrderingCost")
var inputCarryingCost = document.getElementById("inputCarryingCost")

var results = document.getElementById("results")

// Function to capture the input and pass it to the EOQ Function
function calculate(Event){ 
    
    if (!inputDemand.value || !inputOrderingCost.value || !inputCarryingCost.value){
        alert("Enter Some data")
    }

    else{
    demand = parseFloat(inputDemand.value)
    orderingCost = parseFloat(inputOrderingCost.value)
    carrringCost = parseFloat(inputCarryingCost.value)
    Event.preventDefault()
    var result =Math.round(EOQ(demand,orderingCost,carrringCost))

    console.log(result)
    results.innerText = result

    }
}

//action listener
form.preventDefault
form.addEventListener('submit',calculate )