$(window).resize(function() {
  function drawBkg() {
    context.fillStyle = "rgba(23, 85, 169, 1)", 
      context.fillRect(0, 0, width, height)
  }
  function Star() {
    this.x = Math.random() * width, 
      this.y = Math.random() * height, 
      this.velocityX = -0.5 + Math.random(), 
      this.velocityY = -0.5 + Math.random(), 
      this.radius = 2, 
      this.draw = function() {
      context.fillStyle = "rgba(255, 255, 255, 0.5)", 
        context.beginPath(), 
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI), 
        context.fill(),
        context.closePath();
    }
  }
  function drawConstellation() {
    drawBkg();
    for (var i = 0; i < stars.length; i++) {
      stars[i].draw();
    }
    update();
  }
  function update() {
    for (var i = 0; i < stars.length; i++) {
      stars[i].x += stars[i].velocityX, 
        stars[i].y += stars[i].velocityY, 
        stars[i].x + stars[i].radius > width ? stars[i].x = stars[i].radius : stars[i].x - stars[i].radius < 0 && (stars[i].x = width - stars[i].radius), 
        stars[i].y + stars[i].radius > height ? stars[i].y = stars[i].radius : stars[i].y - stars[i].radius < 0 && (stars[i].y = height - stars[i].radius);
      for (var j = i + 1; j < stars.length; j++){ 
        superCloseStar = stars[j], makeLineConstellation(stars[i], superCloseStar)
      }
    }
  }
  function makeLineConstellation(star1, star2) {
    var squareHypotenuse, 
        distanceX = star1.x - star2.x;
    distanceY = star1.y - star2.y;
    if (squareHypotenuse = Math.sqrt(distanceX * distanceX + distanceY * distanceY), proximity >= squareHypotenuse) {
      context.beginPath(), 
        //context.strokeStyle = "rgba(255, 255, 255," + (1 - squareHypotenuse / proximity) + ")", 
        context.strokeStyle = "rgba(255, 255, 255,0.1)";
        context.moveTo(star1.x, star1.y), 
        context.lineTo(star2.x, star2.y), 
        context.stroke(), 
        context.closePath();
      var distanceTempX = distanceX / 5e4,
          distanceTempY = distanceY / 9e4;
      star1.velocityX -= distanceTempX, 
        star1.velocityY -= distanceTempY, 
        star2.velocityX += distanceTempX, 
        star2.velocityY += distanceTempY
    }
  }
  function init() {
    drawConstellation(), 
      requestAnimFrame(init)
  }
  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame    ||
      function( callback ){
      window.setTimeout(callback, 1000 / 60);
    };
  })();
  var canvas = document.getElementById("canvas"),
      context = canvas.getContext("2d"),
      width = window.innerWidth,
      height = window.innerHeight;
  canvas.width = width, 
    canvas.height = height;
  for (var starsQuantity = 90, stars = [], proximity = 60, i = 0; starsQuantity > i; i++) {
    stars.push(new Star)
  };
  init();
}).resize();