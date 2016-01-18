// Find the number of whole weeks between two given months of the same year
// weeks start from Monday
// To do so I will calculate the number of whole weeks 
// starting from the fisrt Monday of the given range
function solution(Y, A, B, W) {
    
    // return true in case of leap year and false otherwise
    function isLeapYear(y){
        return (!Boolean(y%4));
    }
    
    // return the number of days between two dates - start and end dates inclusive
    // dates can be passed in "m/d/yyyy", "mm/dd/yyyy", "mm,dd,yyyy", "m,d,yyyy" formats  
    function dateDiff(d1, d2) {
        var date1 = new Date(d1);
        var date2 = new Date(d2);
        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
        var dayDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
        return dayDiff + 1;
    }
    
    // return Date object of the first date of the given weekday by start date
    function getDateOfFirstWeekday(startDate, weekDayIndex) {
        var d = new Date(startDate);
        for (var i = 0; i < 7; i++){
            if (d.getDay() === weekDayIndex) return d;
            else d.setDate(d.getDate() + 1);
        }
    }
    
    // create a JS object of months with index of the month and number of days
    // note: JS objects are stored in random order in the memory 
    // therefore explicitely saving the index of the month is crutial 
    var months = {
        "January" : [1, 31],
        "February" : [2, 28],
        "March": [3, 31],
        "April": [4, 30],
        "May": [5, 31], 
        "June": [6, 30],
        "July": [7, 31],
        "August": [8, 31],
        "September":[9, 30],
        "October": [10, 31],
        "November":[11, 30],
        "December": [12, 31]
    };
    // fix the months obj for leap years
    if (isLeapYear(Y)) months.February[1] = 29;
    
    // first date of the Month A
    var dateA = months[A][0] + "," + 1 + "," + Y;
    // last date of the month B
    var dateB = months[B][0] + "," + months[B][1] + "," + Y;
    
    // find the number of total days between dateA and dateB
    var numberOfTotalDays = dateDiff(dateA, dateB);
    console.log(numberOfTotalDays);
    
    // find the date of the first Monday from dateA
    var dateOfFirstMonday = getDateOfFirstWeekday(dateA, 1);
    console.log(dateOfFirstMonday);
    console.log(dateDiff(dateA, dateOfFirstMonday));
    
    // calculate the number of whole weeks using Monday as starting point 
    var numOfWeeks = Math.floor((numberOfTotalDays - dateDiff(dateA, dateOfFirstMonday))/7);

    return numOfWeeks;
}

solution(2016, "October", "November", "Friday");



// return the first equilibrium index of a given array 
// equilibrium index - sum of elements before the index element = sum of elements after the index element
// return -1 if no equilibrium index was found
// sum of 0 elements equals 0
function solution(A) {
    // check if the passed argument is an array
    if (!Array.isArray(A)) return "the passed argument is not an array";
    
    // define the starting right and left sums
    var sumLeft = 0;
    var sumRight = A.slice(1).reduce(function(a, b) {return a + b;}, 0);
    // loop through array and compare the right and left sums 
    for (var i = 0; i < A.length -1; i++) {
        if (sumLeft === sumRight) {
            return i;
        }
        sumLeft += A[i];
        sumRight -= A[i+1];
    }
    
    // return -1 if no equilibrium index was found
    return -1;
}

 solution([1, 4, -4]);
