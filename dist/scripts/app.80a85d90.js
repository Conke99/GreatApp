// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"i5Wi":[function(require,module,exports) {
// slider start
var myslide = document.querySelectorAll(".myslider");
dot = document.querySelectorAll(".dot");
var slideCounter = 1;
slidefun();
var timer = setInterval(autoslide, 3000);

function autoslide() {
  slideCounter += 1;
  slidefun();
}

function prevSlide() {
  slideCounter--;
  if (slideCounter === 0) slideCounter = 4;
  slidefun();
  resetTimer();
}

function nextSlide() {
  slideCounter++;
  if (slideCounter === 5) slideCounter = 1;
  slidefun();
  resetTimer();
}

function currentSlide(n) {
  slideCounter = n;
  slidefun();
  resetTimer();
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoslide, 3000);
}

function slidefun() {
  var i;

  for (i = 0; i < myslide.length; i++) {
    myslide[i].style.display = "none";
  }

  for (i = 0; i < dot.length; i++) {
    dot[i].classList.remove("active");
  }

  if (slideCounter > myslide.length) {
    slideCounter = 1;
  }

  if (slideCounter < 1) {
    slideCounter = myslide.length;
  }

  myslide[slideCounter - 1].style.display = "block";
  dot[slideCounter - 1].classList.add("active");
} // slider end
// counter section start


var counters = document.querySelectorAll(".counter");
var speed = 1600;
counters.forEach(function (counter) {
  var updateCount = function updateCount() {
    var target = +counter.getAttribute("data-target");
    var count = +counter.innerText;
    var inc = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      count.innerText = target;
    }
  }; // start counter when the user reaches a certain height


  var startCount = function startCount(position, counting) {
    window.addEventListener("scroll", function (e) {
      scroll_position = window.scrollY;

      if (scroll_position > position) {
        counting();
      }
    });
  };

  startCount(3929, updateCount); //
}); // counter section end
//Sticky Header

window.onscroll = function () {
  stickyHeader();
};

var header = document.querySelector(".bottomNav");
var sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
},{}]},{},["i5Wi"], null)
//# sourceMappingURL=/scripts/app.80a85d90.js.map