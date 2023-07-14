(function() {
  window.addEventListener('DOMContentLoaded', function() {
    baguetteBox.run('div.photogrid-component--flexbox-container', {
      filter: /.+/,
      ignoreClass: 'no-baguette'
    });

    baguetteBox.run('div.photo-component--photo', {
      filter: /.+/,
      ignoreClass: 'no-baguette'
    });

    baguetteBox.run('div.grid-component--image-container', {
      filter: /.+/,
      ignoreClass: 'no-baguette'
    });

    baguetteBox.run('div.card-container', {
      filter: /.+/,
      ignoreClass: 'no-baguette'
    });
    if (!window.__testimonials_initialized && !window.EDIT_MODE) {
      (function() {
        var els = document.querySelectorAll('div.testimonials-component--inner')

        function testimonial(el) {
          var pubMode = 'testimonials-component--pub'
          var itemCount = Array.from(el.querySelectorAll('div.testimonials-component--each')).length
          var stepSize = 100 / itemCount
          var startIndex = 0
          var currentIndex

          function init() {
            currentIndex = startIndex;
            el.classList.add(pubMode)
            el.style.width = (100 * itemCount) + 'vw'
          }

          function nextIndex() {
            if (currentIndex + 1 === itemCount) {
              currentIndex = 0
            } else {
              currentIndex++
            }
            return currentIndex;
          }

          function step() {
            var next = nextIndex();
            el.style.transform = 'translateX(' + (next * stepSize * -1) + '%)'
          }
          return {
            init: init,
            step: step
          }
        }
        var testimonials = Array.from(els).map(testimonial)
        testimonials.forEach(function(t) {
          t.init();
        })
        window.setInterval(function() {
          testimonials.forEach(function(t) {
            t.step();
          })
        }, 5000)
        window.__testimonials_initialized = true
      })()
    }
  });
})();
