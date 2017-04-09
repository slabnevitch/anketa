$(document).ready(function() {

	(function() {

		var stamp = document.querySelector('.header-stamp');
		setTimeout(function() {
			stamp.classList.add('tada');
			stamp.classList.remove('header-stamp-no-visible');
		}, 1000);

		function Skills() {
			var __self = this;
			var item = window.document.body;
			var pointer = document.querySelector('.pointer');
	 		var counter = document.querySelector('.jsskills-counter');
	 		var scale = document.querySelector('.scale-wrap');
	 		var body = document.body;

	 		
	 		this.init = function() {
	 			this.regListeners();
			}

			this.regListeners = function() {
				scale.addEventListener('mouseenter', enterHandler);
				scale.addEventListener('mouseleave', leaveHandler);
				scale.addEventListener('click', clickHandler);
				body.addEventListener('click', bodyClickHandler);
			}

			this.countActivation = function(e){
	 			var scaleWidth = scale.offsetWidth,
		 			deg = scaleWidth/180,
		 			coords = scale.getBoundingClientRect(),
		 			origin = coords.left,
		 			countItem = scaleWidth/1000;
		 			cursorX = e.pageX - origin,
		 			currentDeg = cursorX/deg,
		 			currentDegCorrecton = currentDeg - 90,
		 			counterValue = cursorX/countItem; 
				
	 			this.rotatePointer(currentDegCorrecton);
	 			counter.innerText = counterValue.toFixed();
	 			
	 			return counter.innerText;
			}

			this.rotatePointer = function(currentDegCorrecton) {
	 			pointer.style.transform = 'rotate('+ currentDegCorrecton + 'deg)';
	 			
			}
			
			this.resetCounter = function() {
					pointer.classList.add('pointer-animated');
					counter.innerText = '000';
			}

			this.animateCounter = function(counterText) {
				var num = +counterText,
					nextNum = 0;
				counter.innerText = 000;

				var timer = setInterval(function() {
					nextNum++;
					if(nextNum > 1000){
						nextNum = 1000;
					}
					counter.innerText = nextNum;
					if(nextNum == num){
						 clearInterval(timer);
					}
				}, 1);
			}

			function bodyClickHandler(e) {
				if(e.target.className !== 'scale'){
					__self.resetCounter();
					
				}
			}

			function clickHandler(e){
				pointer.classList.remove('pointer-animated');
				scale.removeEventListener('mousemove', mooveHandler);
	 			
	 			__self.animateCounter(__self.countActivation(e));
				
			}

			function enterHandler(e) {
				pointer.classList.remove('pointer-animated');
	  			scale.addEventListener('mousemove', mooveHandler);
				
	 		}

	 		function leaveHandler(e) {
	 				
	    		scale.removeEventListener('mousemove', mooveHandler);
	    		__self.resetCounter();
	 		}
			
	 		function mooveHandler(e) {
	 			__self.countActivation(e);

	 		}
		}

		var skill = new Skills();
		skill.init();
	 })();

});