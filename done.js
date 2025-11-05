var mistakes = [5,8,6,8,6,9,4,9,7,8,6,4];
var high = 9;

function main() {
    showStats();
}

function showStats() {
    alert(showErrors());
} 

function showErrors() {
   return "The highest factor with the most errors was " + statsAnalysis() + ". Study tables for it!"
}

function statsAnalysis() {
    let mostErrors = 0, highFactor = 0, frequency = []; 
    for (let i = 0; i <= high; i++) {
        frequency.push(0);
    }
    for (let factor = 0; factor < mistakes.length; factor ++){
        error = mistakes[factor];
        frequency[error]++;
    }
    for (let ef = 0; ef < frequency.length; ef++) {
        if (frequency[ef] >= mostErrors) {
            mostErrors = frequency[ef];
            highFactor = ef;
        }
    }
    return highFactor;
} 
