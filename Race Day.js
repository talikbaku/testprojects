let raceNumber = Math.floor(Math.random() * 1000);
let registerTime = 'early'||'late';
let runnerAge = 18;
if (runnerAge > 18 && registerTime == 'early'){
    raceNumber += 1000
};
if (runnerAge > 18 && registerTime == 'early'){
    console.log(`Dear runner with number ${raceNumber}, your race will start at 9:30 am`)
}
else if (runnerAge > 18 && registerTime == 'late'){
    console.log(`Dear runner with number ${raceNumber}, your race will start at 11:00 am`)
}
else if (runnerAge < 18){
    console.log(`Dear runner with number ${raceNumber}, your race will start at 12:30 pm`)
} else {console.log('focus on the boss!')}
