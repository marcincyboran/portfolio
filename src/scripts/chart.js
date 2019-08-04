var ctx1 = document.querySelector('#skills-frontend').getContext('2d');
var ctx2 = document.querySelector('#skills-backend').getContext('2d');
var ctx3 = document.querySelector('#skills-general').getContext('2d');

Chart.defaults.polarArea.animation.animateScale = false;

var data = {
    frontendData: {
        labels: ["HTML", "CSS", "JavaScript", "jQuery", "TypeScript", "Angular", "React", "RWD"],
        datasets: [
          {
            backgroundColor: [
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(93,94,201, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(165, 223, 223, 0.6)',
            ],
            data: [90,90,70,65,70,65,30,80]
          }
        ]
    },
    backendData: {
        labels: ["PHP", "Node.js", "Express.js", "MongoDB", "Mongoose"],
        datasets: [
          {
            backgroundColor: [
                'rgba(255, 206, 86, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(75, 192, 192, 0.6)',
            ],
            data: [30,70,60,50,50]
          }
        ]
    },
    generalData: {
        labels: ["Design", "Git", "Webpack", "Photoshop", "NPM", "Wordpress", "English"],
        datasets: [
          {
            backgroundColor: [
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(165, 223, 223, 0.6)',
            ],
            data: [40,65,50,60,50,60,65]
          }
        ]
    }
};

var options = {
    responsive: true,
    startAngle: 5,
    legend: {
        display: true,
        position: 'bottom',
        labels: {
            usePointStyle: true,
            fontColor: '#4C4DC3',
        }
    },
    scale: {
        ticks: {
            max: 100,
            stepSize: 20,
            callback: function(value) {
                return (value < 100 && value > 0 ) ? " " + value + " %" : value + " %";
            },
        }
    },
    animation: {
        duration: 2000
    },
    pointLabels :{
        fontSize: 18,
        fontStyle: "bold",
    }
};

var frontendChart = new Chart(ctx1, {
    type: 'polarArea',
    data: data.frontendData,
    options: options
});

var backendChart = new Chart(ctx2, {
    type: 'polarArea',
    data: data.backendData,
    options: Object.assign({}, options, {
        animation: {
            duration: 3000
        },
        startAngle: 4, 
    })
});

var generaltChart = new Chart(ctx3, {
    type: 'polarArea',
    data: data.generalData,
    options: Object.assign({}, options, {
        animation: {
            duration: 4000
        },
        startAngle: 4, 
    })
});