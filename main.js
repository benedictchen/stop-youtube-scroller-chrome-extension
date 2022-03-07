function freshNode(oldElement) {
	let newElement = oldElement.cloneNode(true);
	oldElement.parentNode.replaceChild(newElement, oldElement);
}

if (/youtube\.com/.test(window.location.hostname)) {
	console.log("YouTube detected");
	
	setTimeout(() => {
		Array.from(window.document.body.querySelectorAll('video')).forEach((element) => {
			freshNode(element);
		});			
	}, 2000);

	window.document.body.addEventListener('yt-navigate-finish', () => {
		setTimeout(() => {
			Array.from(window.document.body.querySelectorAll('video')).forEach((element) => {
				freshNode(element);
				setTimeout(() => {
					document.querySelector('.ytp-scrubber-container').click();
					element.currentTime = 0;
					element.play();
				});
			});	
		}, 2000);
	});
} else {
	console.log('Not YouTube.');
}

