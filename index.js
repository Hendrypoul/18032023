var score;
function OpeningCeremony (callBack1, callBack2, callBack3, callBack4) {
    setTimeOut(function () {
        console.log("Let the game begin");
        score = {red: 0, blue: 0, green: 0, yellow: 0};
        callBack1(score, callBack2, callBack3, callBack4);
    }, 1000);
}
function Race100M (score, callBack1, callBack2, callBack3) {
    setTimeOut(function () {
        var redSecond = Math.floor(Math.random() * 6) + 10;
        var blueSecond = Math.floor(Math.random() * 6) + 10;
        var greenSecond = Math.floor(Math.random() * 6) + 10;
        var yellowSecond = Math.floor(Math.random() * 6) + 10;
        var scores = [{ Seconds: redSecond, color: "red" },
                      { Seconds: blueSecond, color: "blue" },
                      { Seconds: greenSecond, color: "green" },
                      { Seconds: greenSecond, color: "yellow" }
        ];
        console.log("Race100M -> current Score", score);
        scores.sort(function (a, b) {
            return a.Seconds-b.Seconds;
        });
        score[scores[0].color] += 50;
        score[scores[1].color] += 25;
        console.log("Race100M ->Updated Score", score);
        callBack1(score, callBack2, callBack3);
    }, 3000);
}
function LongJump (score, callBack1, callBack2) {
    setTimeOut( function() {
        var colors = ['red', 'green', 'yellow', 'blue'];
        var randomIndex = Math.floor(Math.random() * 4);
        var selectedColor = colors[randomIndex];
        console.log("Long Jump -> current Score", score);
        score[selectedColor] += 150;
        console.log("Long Jump -> Updated Score", score);
        callBack1(score, callBack2);
    }, 2000);
}
function HighJump (score, callBack) {
    var colors = ['red', 'green', 'yellow', 'blue'];
    var color = prompt("Enter winner color").trim();
    console.log("High Jump Color", color);
    console.log("High Jump -> current Score", score);
    if(color && colors.includes(color)) {
        score[color] += 100;
    }
    else {
        console.log("Event was cancelled");
    }
    console.log("High Jump -> Updated Score", score);
    callBack(score);
}
function AwardCeremony (score) {
    var scoresArray = [
        { score: score.red, color: "Red" },
        { score: score.green, color: "green" },
        { score: score.yellow, color: "yellow" },
        { score: score.blue, color: "blue" },
    ];
    console.log(" Award Ceremony Score", score);
    scoresArray.sort(function (a, b) { return b.score-a.score});
    console.log(`${scoresArray[0].color} came first ${scoresArray[0].score}`);
    console.log(`${scoresArray[1].color} came second ${scoresArray[1].score}`);
    console.log(`${scoresArray[2].color} came third ${scoresArray[2].score}`);

}
OpeningCeremony(Race100M, LongJump, HighJump, AwardCeremony);