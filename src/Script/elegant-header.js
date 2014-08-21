;document.addEventListener("DOMContentLoaded", function() { "use strict";

var
	timeout,
$;

function headerScroll(header, forceHide) {
	var
		diff = header.elegantScrollY - window.scrollY,
		top = parseInt(header.style.top, 10) + diff,
	$;

	top = Math.max(-header.elegantHeight, Math.min(top, 0));

	if(diff > 0) {
		header.style.opacity = 1;
	}

	if(window.scrollY > header.elegantHeight) {
		header.style.boxShadow = "0 0 16px rgba(0, 0, 0, 0.2)";

		if(forceHide) {
			top = -header.elegantHeight;
		}

		if(diff < 0) {
			header.style.opacity = 1 +
				(header.elegantHeight - (header.elegantHeight - top)) /
				header.elegantHeight;
		}
	}
	else {
		header.style.boxShadow = "none";
	}

	if(timeout) {
		clearTimeout(timeout);
	}
	if(top != 0) {
		timeout = setTimeout(function() {
			hide(header);
		}, 1000);
	}

	header.style.top = top + "px";
	header.elegantScrollY = window.scrollY;
}

function hide(header) {
	header.style.webkitTransition
		= header.style.transition
		= "margin-top 0.25s ease-in-out, opacity 0.25s";
	header.style.marginTop = (-header.elegantHeight) + "px";
	header.style.opacity = "0.0";

	setTimeout(function() {
		header.style.webkitTransition
			= header.style.transition
			= "none";
		header.style.top = header.style.marginTop;
		header.style.marginTop = 0;
		header.style.opacity = 1;
	}, 250);
}

[].forEach.call(document.querySelectorAll("header.elegant"), function(header) {
	var
		style = window.getComputedStyle(header),
		padding = document.createElement("div"),
	$;

	// Create a padding element to sit where the header should be at the top
	// of the page:
	padding.style.height = style.height;
	padding.style.padding = style.padding;
	padding.style.margin = style.margin;
	padding.style.border = style.border;
	padding.style.borderColor = "transparent";

	header.parentNode.insertBefore(padding, header);

	header.style.position = "fixed";
	header.style.top = "0";
	header.style.left = "0";
	header.style.right = "0";
	header.elegantScrollY = window.scrollY;
	header.elegantHeight =
		parseInt(style.height, 10)
		+ parseInt(style.paddingTop, 10)
		+ parseInt(style.paddingBottom, 10)
		+ parseInt(style.marginTop, 10)
		+ parseInt(style.marginBottom, 10)
		+ parseInt(style.borderTopWidth, 10)
		+ parseInt(style.borderBottomWidth, 10);

	header.style.webKitTransform = "rotateZ(0)";
	header.style.transform = "rotateZ(0)";

	headerScroll(header, true);
	window.addEventListener("scroll", function(e) {
		headerScroll(header);
	});
});

});