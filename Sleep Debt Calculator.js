const getSleepHours = day => {
    switch (day) {
        case 'monday':
            return 8;
            break;
        case 'tuesday':
            return 5;
            break;
        case 'wednesday':
            return 2;
            break;
        case 'thursday':
            return 4;
            break;
        case 'friday':
            return 11;
            break
        case 'saturday':
            return 3;
            break;
        case 'sunday':
            return 12;
            break;
    }
}
//console.log(getSleepHours('tuesday'))

const getActualSleepHours = () => {
    return getSleepHours('monday') +
        getSleepHours('tuesday') +
        getSleepHours('wednesday') +
        getSleepHours('thursday') +
        getSleepHours('friday') +
        getSleepHours('saturday') +
        getSleepHours('sunday')
};

const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * ;
};

console.log(getActualSleepHours())
console.log(getIdealSleepHours())

const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours){
        console.log(`you have perfect night and you sleep ${actualSleepHours}.`)
    } else if (actualSleepHours > idealSleepHours){
        console.log('you have sleep more than you need for '+(actualSleepHours-idealSleepHours))
    } else if (actualSleepHours < idealSleepHours){
        console.log('you need sleep more for '+(idealSleepHours-actualSleepHours) +' per week')
    } else {return console.log('focus on the boss!')}
}

calculateSleepDebt()










