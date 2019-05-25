/* @flow */

// Load npm modules.
import React from 'react';

export default () => (
	<script dangerouslySetInnerHTML={{ __html: `
		(function() {
			function toggleClass(el, className) {
				if (el.classList) {
					el.classList.toggle(className);
				} else {
					var classes = el.className.split(' ');
					var existingIndex = classes.indexOf(className);

					if (existingIndex >= 0) {
						classes.splice(existingIndex, 1);
					} else {
						classes.push(className);
					}

					el.className = classes.join(' ');
				}
			}

			function rollableCallback(e) {
				var target = e.currentTarget;
				toggleClass(target.nextElementSibling, 'hidden');
				target.querySelectorAll('span.rollable-toggle').forEach(function (el) {
					toggleClass(el, 'hidden');
				});
			};

			document.querySelector('#docs-container').querySelectorAll('.rollable-header').forEach(function (el) {
				el.onclick = rollableCallback;
			});
		})();
	` }} />
);
