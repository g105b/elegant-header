;document.addEventListener("DOMContentLoaded", function() { "use strict";

function headerScroll(header) {
	var
		diff = header.elegantScrollY - window.scrollY,
		top = parseInt(header.style.top, 10) + diff,
	$;

	if(top < -header.elegantHeight) {
		top = -header.elegantHeight;
	}
	if(top > 0) {
		top = 0;
	}
	if(diff > 0) {
		header.style.opacity = 1;
	}

	if(window.scrollY > header.elegantHeight) {
		header.style.boxShadow = "0 0 16px rgba(0, 0, 0, 0.2)";

		if(diff < 0) {
			header.style.opacity = 1 +
				(header.elegantHeight - (header.elegantHeight - top)) /
				header.elegantHeight;
		}
	}
	else {
		header.style.boxShadow = "none";
	}

	header.style.top = top + "px";

	header.elegantScrollY = window.scrollY;
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

	window.addEventListener("scroll", function(e) {
		headerScroll(header);
	});
});

});