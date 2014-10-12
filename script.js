function planetRotate(event) {
	var step = 5;
	var rotate = Math.round(event.gamma / step) * step;
	document.getElementById('planet').style.transform = 'rotate(' + rotate + 'deg)';
}

function randomStars(nb) {
		var sky = document.getElementById('sky');
		var size = ['small', 'medium', 'big'];
		var star;

		for (i = 0; i < nb; i++) { 
			star = document.createElement('div');
			star.setAttribute('class', 'star ' + size[Math.floor((Math.random() * 3))]);
			star.setAttribute('style', 'top:' + Math.floor((Math.random() * 100)) + '%; left:' + Math.floor((Math.random() * 100)) + '%;');
			sky.appendChild(star);
		}
}
		
if(window.DeviceOrientationEvent) {
	window.addEventListener('deviceorientation', planetRotate, true);
}

randomStars(40);