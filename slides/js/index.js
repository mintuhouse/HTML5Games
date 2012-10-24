(function() {
  'use strict';
  /*global Reveal:true */

  var TRANSITION  = 'default' // default/cube/page/concave/linear(2d)
    , THEME       = 'simple'
    , hasMarkdown = !!document.querySelector('[data-markdown]');

  // Initialize presentation
  Reveal.initialize({
    controls: true        // controls in bottom right
  , progress: true        // presentation progress bar
  , history: true         // push each slide change to browser history
  , keyboard: true        // allow keyboard nav
  , loop: false           // loop presentation
  , autoSlide: 0          // ms before auto-advance (0 to disable)
  , mouseWheel: false     // mouse wheel nav
  , rollingLinks: true    // apply 3D roll to link hover
  , transition: TRANSITION
  , theme: THEME
  , dependencies: [
      { // Syntax highlight for <code> elements
        src: 'lib/js/highlight.js'
      , async: true
      , callback: function() {
          window.hljs.initHighlightingOnLoad();
        }
      }
    , { // Cross-browser shim that fully implements classList - https://github.com/eligrey/classList.js/
        src: 'lib/js/classList.js'
      , condition: function() {
          return !document.body.classList;
        }
      }
    , { // Interpret Markdown in <section> elements
        src: 'lib/js/data-markdown.js'
      , condition: hasMarkdown
      }
    , { // Dependency for data-markdown.js
        src: 'lib/js/showdown.js'
      , condition: hasMarkdown
      }
    , { 
        src: 'plugin/zoom-js/zoom.js'
      , condition: function() { 
          return !!document.body.classList; 
        } 
      }
    , { 
        src: '/socket.io/socket.io.js'
      , async: true
      , condition: function() { 
          return window.location.host === 'localhost:1947'; 
        } 
      }
    , { 
        src: 'plugin/speakernotes/client.js'
      , async: true
      , condition: function() { 
          return window.location.host === 'localhost:1947'; 
        } 
      }
    ]
  });

}).call(this);
