<!DOCTYPE html>
<html>
<head>
	<title>Exun Clan</title>
	<meta charset='utf-8' />
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/intro.css">
	<link rel="stylesheet" type="text/css" href="css/material.css">
	<link rel="stylesheet" type="text/css" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
	<script type="text/javascript" src="js/jquery.js"></script>
	<script type="text/javascript" src="js/material.js"></script>
	<script type="text/javascript" src="js/script.js"></script>
	<script>window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
 
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
 
  return t;
}(document, "script", "twitter-wjs"));</script>
</head>
<body>
	<div class="logocontainer">
		<div class="logo"><span>Exun</span></div>
		<div class="small">2015</div>
	</div>
	
	<nav>
		<img src="img/logo.png" class="header_logo">
		<ul>
				<li><a href="#home">Home</a></li>
				<li><a href="#about">About</a></li>
				<li><a href="#members">Members</a></li>
				<li><a href="#achievements">Achievements</a></li>
				<li><a href="#contact">Contact Us</a></li>
		</ul>
	</nav>
 	<a class="btn-floating btn-large waves-effect waves-light" style="background:#16C2C2; position:fixed; bottom:45px; right:45px;"><i class="fa fa-twitter"></i></a>
 	<div class="card twitter">
 		<a class="twitter-timeline"
	 		data-widget-id="600720083413962752"
	 		href="https://twitter.com/lnexun"
	 		width="300"
	 		height="300">
			Tweets by @lnexun
	</a>
 	</div>
	<div class="panel" id="home">
		<canvas id="canvas" style='position:relative; z-index:-1;'>
		</canvas>
		<div class="content" id="about">
			<h1 class="welcome">Welcome</h1>
		</div>
	</div>
	<div class="panel" id="about">
		<div class="wrapper">
			<center>
				<h1>About</h1>
			</center>
		</div>
	</div>
	<script type="text/javascript" src="js/const.js"></script>
</body>
</html>