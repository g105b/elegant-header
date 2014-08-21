elegant-header
==============

My take on the scroll-up-to-reveal website header

507 bytes gzipped (1.15KB uncompressed)

Features
--------
* [x] Adds a 'padding' element adjacent to the original header element, with identical height.
* [x] Sets the original header's position to `fixed`.
* [x] Moves the `top` offset of the header in relation to the scroll amount.
* [x] Fades the header out as it is hidden.
* [x] Adds a subtle box shadow when the header is displayed anywhere other than its original location at the top of the page.
* [ ] Uses a timeout to cancel any half-scrolled headers after a second or two.