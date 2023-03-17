// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(whatDo = 'go to the office'){
    return `This Monday, I will ${whatDo}.`
}

function wrapAdjective(string = '*'){
    return function(value = "special"){
   return `You are ${string}${value}${string}!`}
}
