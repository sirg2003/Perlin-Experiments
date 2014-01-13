define (['jquery'], function ($) {
	var pX = 0;
	var pY = 0;
	var up = 0,
			left = 0,
			right = 0,
			down = 0;

	$(window).on('keydown', function () {
		switch (event.keyCode) {
			case 37 :
				left = 1;
				break;
			case 38:
				up = 1;
				break;
			case 39:
				right = 1;
				break;
			case 40:
				down = 1;
				break;
		}
	});
	$(window).on('keyup', function () {
		switch (event.keyCode) {
			case 37 :
				left = 0;
				break;
			case 38:
				up = 0;
				break;
			case 39:
				right = 0;
				break;
			case 40:
				down = 0;
				break;
		}
	});

	return {
		update : function () {
			if (left) pX -= params.moveSpeed;
			if (right) pX += params.moveSpeed;
			if (up) pY -= params.moveSpeed;
			if (down) pY += params.moveSpeed;
		},
		x : pX,
		y : pY
	};
});