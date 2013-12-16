/**
 * TinyMCE Integration
 */

(function () {
	"use strict";
	if (typeof (tinymce) != "undefined") {
		tinymce.create('tinymce.plugins.browsershots', {
			init: function (ed, url) {
				ed.addButton('browsershots', {
					title: 'Browser Shots',
					image: url.replace('/js', '/images') + '/browsershots-icon.png',
					onclick: function () {

						// Dialog prompt's
						var width = prompt("Screenshot width:", "600");
						var height = prompt("Screenshot height:", "450");
						var website = prompt("What's the URL of the website?", "http://www.kevinleary.net");

						// Build shortcode tag
						if (website !== null && website !== '') {
							var shortcode = '[browser-shot url="' + website + '"';
							if (width !== null && width !== '') {
								shortcode += ' width="' + width + '"';
							} else if (height !== null && height !== '') {
								shortcode += ' height="' + height + '"';
							}
							shortcode += ']';
							ed.execCommand('mceInsertContent', false, shortcode);
						}
					}
				});
			},
			createControl: function () {
				return null;
			},
			getInfo: function () {
				return {
					longname: "Browser Shots",
					author: 'Kevin Leary',
					authorurl: 'http://www.kevinleary.net',
					infourl: 'http://wordpress.org/extend/plugins/browser-shots/',
					version: "1.2"
				};
			}
		});
		tinymce.PluginManager.add('browsershots', tinymce.plugins.browsershots);
	}
})();