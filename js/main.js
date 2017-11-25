$(document).ready(function() {


  // video
  const backgroundVideo = new BackgroundVideo('.bv-video', {
    src: [
      'assets/video.mp4',
      'assets/video.webm'
    ],
    onReady: function() {
      // Use onReady() to prevent flickers or force loading state
      const vidParent = document.querySelector(`.${this.bvVideoWrapClass}`);
      vidParent.classList.add('bv-video-wrap--ready');
    }
  });

//chart
$(function(){
  
  $('.target-chart').easyPieChart({
      animate: 4000,
      lineWidth: 15,
      scaleColor: false,
      size: 300,
      onStep: function(value) {
        this.$el.find('.target-percentage-number').text(Math.round(value));
      },
      onStop: function(value, to) {
        this.$el.find('.target-percentage-number').text(Math.round(to));
      },
      barColor: "#f16c6f"
  });
});

// line chart

var ctx = document.getElementById("myChart");
Chart.defaults.global.defaultFontColor = 'white';
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"],
        datasets: [{
            label: '# of Interns',
            data: [174, 190, 216, 252, 262, 475, 1035, 1538, 1855],
            backgroundColor: "rgba(255,255,255,0.5)",
            borderColor: "white",
            borderWidth: 5
        }]
    },
    options: {
      title: {
        display: true,
            text: 'Historical Enrollment Data 2009–2017',
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
   }
});

var options = {
  maintainAspectRatio: false,
  scales: {
    yAxes: [{
      stacked: true,
      gridLines: {
        display: true,
        color: "rgba(255,99,132,0.2)"
      }
    }],
    xAxes: [{
      gridLines: {
        display: false
      }
    }],
    
  }
};





  // variables
  var $header_top = $('.header-top');
  var $nav = $('nav');



  // toggle menu 
  $header_top.find('a').on('click', function() {
    $(this).parent().toggleClass('open-menu');
  });



  // fullpage customization
  $('#fullpage').fullpage({
    sectionsColor: ['#63c5bd', '#63c5bd', '#63c5bd', '#63c5bd', '#63c5bd'],
    sectionSelector: '.vertical-scrolling',
    slideSelector: '.horizontal-scrolling',
    navigation: true,
    slidesNavigation: true,
    css3: true,
    controlArrows: false,
    anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection'],
    menu: '#menu',
    lazyLoad: true,

// afterRender: function(anchorLink,index) {
// if(index === 'firstSection'){
//     animateAnchor: true;
// }
// if(index === 'secondSection'){
//     animateAnchor: true;
// }
//  if(index === 'thirdSection'){
//     animateAnchor: true;
// }
//  if(index === 'fourthSection'){
//     animateAnchor: true;
// }
//  if(index === 'fifthSection'){
//     animateAnchor: true;
// }
// },





//events
    onLeave: function(index, nextIndex, direction){},
    afterLoad: function(anchorLink, index){
      console.log("afterLoad: sectionIndex " + index);
    },
    afterRender: function(){},
    afterResize: function(){},
    afterResponsive: function(isResponsive){},
    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
    onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){},


    afterLoad: function(anchorLink, index) {
      $header_top.css('background', 'rgba(0, 47, 77, .3)');
      $nav.css('background', 'rgba(0, 47, 77, .25)');
      if (index == 3) {
        $('#fp-nav').hide();
      }
    },

    onLeave: function(index, nextIndex, direction) {
      if (index == 3) {
        $('#fp-nav').show();
      }
    },

    afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
      if (anchorLink == 'thirdSection' && slideIndex == 1) {
        $.fn.fullpage.setAllowScrolling(false, 'up');
        $header_top.css('background', 'transparent');
        $nav.css('background', 'transparent');
        $(this).css('background', '#374140');
        $(this).find('h2').css('color', 'white');
        $(this).find('h3').css('color', 'white');
        $(this).find('p').css(
          {
            'color': '#DC3522',
            'opacity': 1,
            'transform': 'translateY(0)'
          }
        );
      }
    },

    onSlideLeave: function( anchorLink, index, slideIndex, direction) {
      if (anchorLink == 'thirdSection' && slideIndex == 1) {
        $.fn.fullpage.setAllowScrolling(true, 'up');
        $header_top.css('background', 'rgba(0, 47, 77, .3)');
        $nav.css('background', 'rgba(0, 47, 77, .25)');
      }
    } 

    
  }); 
});


