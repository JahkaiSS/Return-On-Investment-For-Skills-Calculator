function print(m){console.log(m)}
function int(x){return parseInt(x)}

alert("Welcome to the ROI calculator")
alert("You will be prompted to enter units of time next...")
alert("Available units of time")
alert("seconds(s), minutes(m), hours(h)")

const unitsToGet = prompt("What time unit for 'time to obtain skill'?")
print(unitsToGet)
const unitsPerUse = prompt("What time unit for 'time saved per use'?")
print(unitsPerUse)


var timeToGet = prompt(`How long did it take to get?`)
print(timeToGet)
var timeSavedPerUse = prompt(`How much time will it save per use?`)
print(timeSavedPerUse)


timeToGet = int(timeToGet)
timeSavedPerUse = int(timeSavedPerUse)
timePerUseCopy = timeSavedPerUse
timeToGetCopy = timeToGet

let unitsConvertedToUse = 0
let unitsConvertedToGet = 0


if (unitsPerUse == "s"){
    unitsConvertedToUse = 1
    timeSavedPerUse = unitsConvertedToUse * timeSavedPerUse
}

else if (unitsPerUse == "seconds"){
    unitsConvertedToUse = 1
    timeSavedPerUse = unitsConvertedToUse * timeSavedPerUse
}
else if (unitsPerUse == "minutes"){
    unitsConvertedToUse = 60
    timeSavedPerUse = unitsConvertedToUse * timeSavedPerUse
}

else if (unitsPerUse == "m"){
    unitsConvertedToUse = 60
    timeSavedPerUse = unitsConvertedToUse * timeSavedPerUse
}
else if (unitsPerUse == "hours"){
    unitsConvertedToUse = 3600
    timeSavedPerUse = unitsConvertedToUse * timeSavedPerUse
}

else if (unitsPerUse == "h"){
    unitsConvertedToUse = 3600
    timeSavedPerUse = unitsConvertedToUse * timeSavedPerUse
}



if (unitsToGet == "s"){
    unitsConvertedToGet = 1
    timeToGet = unitsConvertedToGet * timeToGet
}

else if (unitsToGet == "seconds"){
    unitsConvertedToGet = 1
    timeToGet = unitsConvertedToGet * timeToGet
}
else if (unitsToGet == "minutes"){
    unitsConvertedToGet = 60
    timeToGet = unitsConvertedToGet * timeToGet
}

else if (unitsToGet == "m"){
    unitsConvertedToGet = 60
    timeToGet = unitsConvertedToGet * timeToGet
}
else if (unitsToGet == "hours"){
    unitsConvertedToGet = 3600
    timeToGet = unitsConvertedToGet * timeToGet  
}

else if (unitsToGet == "h"){
    unitsConvertedToGet = 3600
    timeToGet = unitsConvertedToGet * timeToGet
}



var returnOnInvestment = timeToGet / timeSavedPerUse
// returnOnInvestment = time(s) / time(s) => answer in seconds



alert(`You'll get that time back after ${returnOnInvestment} runs, if you're saving ${timePerUseCopy} ${unitsPerUse} per run, after taking ${timeToGetCopy} ${unitsToGet} time to obtain that skill`)