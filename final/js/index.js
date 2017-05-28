var app = angular.module('particlesApp', []);
app.controller('particlesCtrl', ['$scope', particlesCtrl]);
app.directive('particlesDrv', ['$window', '$log', particlesDrv]);

function particlesCtrl($scope) {
  $scope.showParticles = true;
}

function particlesDrv($window, $log) {
  return {
    restrict: 'A',
    template: '<div class="particleJs" id="particleJs"></div>',
    link: function(scope, element, attrs, fn) {
      $log.debug('test');
      $window.particlesJS('particleJs', {
        particles: {
          number: {
            value: 17,
            density: {
              enable: true,
              value_area: 100
            }
          },
          color: {
            value: 'ff6666'
          },
          shape: {
            type: "circle",
            polygon: {
              nb_sides: 5
            }
          },
          opacity: {
            value: .7,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 4,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 130,
            color: '#FFFFFF',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 4,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'grab'
            },
            onclick: {
              enable: true,
              mode: 'push'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      });
    }
  };
}


$(document).ready(function() {
  $('.circle-container').find('a').click(function(event) {
    event.preventDefault();
  });
  $('.circle-container').find('li').hover(function() {
    $('.circle-container').find('li').removeClass('active');
    $(this).addClass('active');
    $('.services-container').find('li.active').removeClass('active animated fadeIn');

    $(".services-container").find('li').eq($(this).data('id')).addClass('active animated fadeIn');

  });

});






