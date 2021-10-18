var demand 
var orderingCost
var carrringCost


function EOQ(a,o,c) {
    
    a = demand
    o = orderingCost
    c = carrringCost

    return Math.sqrt(2*a*o/c)
    
}

demand = 100
orderingCost = 60.50
carrringCost = 0.25

console.log(EOQ(demand,orderingCost,carrringCost))