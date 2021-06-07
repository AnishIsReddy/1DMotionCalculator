document.getElementById("plot").addEventListener("click", function() {
    let dist = document.getElementById("dist").value;
    let iVel = document.getElementById("vel").value;
    let accel = document.getElementById("accel").value;

    let time = [0,1,2,3,4,5,6,7,8,9,10];
    dist ? dist : dist= 0.0
    iVel ? iVel : iVel = 0.0
    accel ? accel : accel = 0.0

    pos = []
    for (let i = 0; i < time.length; i++) {
        pos[i] = (iVel * time[i]) + ((0.5 * accel) * (time[i] ** 2.0))
        console.log("(" + time[i] + ", " + pos[i] + ")")
    };
    console.log(dist)
    let posi = pos.map(x => parseFloat(x))

    const fVel =  Math.sqrt((iVel**2.0)+(2.0*accel*dist));
    const dTime = Math.round(1000*(fVel-iVel)/accel)/1000;
    var eTime = "Time it takes for displacement to occur: " + dTime + " seconds";

    const timeX = document.querySelector(".timeX");
    timeX.innerHTML = eTime;


    let position = new Chart(document.getElementById("position"), {
    type: 'line',
    data: {
        labels: time,
        datasets: [
            {
            data: posi,
            label: "Displacement",
            borderColor: "#3e95cd",
            fill: false
            }
        ]
    }
});
velo = []
    for (let i = 0; i < time.length; i++) {
    velo[i] = parseFloat(iVel) + (parseFloat(accel) * time[i])
    }
    let velocity = new Chart(document.getElementById("velocity"), {
    type: 'line',
    data: {
        labels: time,
        datasets: [
            {
            data: velo,
            label: "Velocity",
            borderColor: "#00FF7F",
            fill: false
            }
        ]
    }
});
acce = []
    for (let i = 0; i < time.length; i++) {
    acce[i] = accel
    }
    let acceleration = new Chart(document.getElementById("acceleration"), {
    type: 'line',
    data: {
        labels: time,
        datasets: [
            {
            data: acce,
            label: "Acceleration",
            borderColor: "#ff4655",
            fill: false
            }
        ]
    }
});
// const dist = document.querySelector(".position").value;
// const iVel = document.querySelector(".velocity").value;
// const accel = document.querySelector(".acceleration").value;


});
