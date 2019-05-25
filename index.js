var isViewed = false;

function initializeChart(){
  var ctx = document.getElementById("myChart");

  var myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ["", "12", "13", "14", "15", "16", "17", "18", "20", "21", "22"],
            datasets: [{
              data: [, 38, 40, 20, 0, 21, 61, 77, 58, 39, 50, 75],
              lineTension: 0,
              backgroundColor: 'transparent',
              borderColor: '#2ecc71',
              borderDash: [0, 0],
              pointStyle: 'circle',
              pointBorderColor: '#2ecc71',
              pointBorderWidth: 2,
              pointBackgroundColor: 'white',
              pointRadius: 3,
              pointHoverRadius: 5
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 80,
                    stepSize: 20,
                    display: false
                },
                gridlines: {
                   drawTicks: false,
                   display: false,
                   drawBorder: false,
                   color: "#FFFFFF"
                }
              }],
              xAxes: [{
                ticks: {
                  padding: 20
                },
                gridLines: {
                   drawTicks: false,
                   display: false,
                   drawBorder: false,
                   color: "#FFFFFF"
                }
              }]
            },
            legend: {
              display: false,
            }
          }
  });
};

function isScrolled(object) {
  var top = $(window).scrollTop();
  var bottom = top + $(window).height();

  var oTop = $(object).offset().top;
  var oBottom = oTop + $(object).height();

  return ((oTop <= bottom) && (oTop >= top));
}

// progress bars
function animateProgressBarWithGivenValue(){
    var attributes = $(".progress-bar.given").map(function() {
    return $(this).attr("aria-valuenow");
  }).get();

  for(var i=0; i<3; i++){


    var progress = $('.progress-bar.given[aria-valuenow]').eq(i);
    var percentage = attributes[i] + '%';
    progress.animate({height: percentage}, 1500);

  }
}

function animateProgressBarsWithPercentage(){
    var attributes = $(".progress-bar.percentage-progress").map(function() {
    return $(this).attr("aria-valuenow");
  }).get();

  for(var i=0; i<4; i++){


    var progress = $('.progress-bar.percentage-progress[aria-valuenow]').eq(i);
    var percentage = attributes[i] + '%';
    var btm = -9 + 0.3*attributes[i];
    progress.animate({height: percentage}, 1500);

    progress.children('span').animate({
        bottom: btm
      }, 1500);

  }  
}

function animateNumberWithGivenValue(){
    $('.number').each(function () {
    var $this = $(this);
    jQuery({ number: 0 }).animate({ number: $this.text() }, {
      duration: 1500,
      step: function () {
        $this.text(Math.ceil(this.number));
      }
    });
  });
}


function clickNavbar(){
  $('.sidebar .nav li a').click(function(e) {

          $('.sidebar .nav li a.active').removeClass('active');
          $('.main-nav a').removeClass('active');

          $(this).addClass('active');
          e.preventDefault();
  });
}

//action!

jQuery(document).ready(function($) {
    animateProgressBarsWithPercentage();
    animateNumberWithGivenValue();
    clickNavbar();

    $(document).scroll(function(event) {
      if(isScrolled('#myChart') && !isViewed){
        animateProgressBarWithGivenValue();
        initializeChart();
        isViewed = true;
      }
    }); 
});
