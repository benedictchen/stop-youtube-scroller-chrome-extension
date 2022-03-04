function freshNode(oldElement) {
	let newElement = oldElement.cloneNode(true);
	oldElement.parentNode.replaceChild(newElement, oldElement);
}

if (/youtube\.com/.test(window.location.hostname)) {
	console.log("YouTube detected");
	
	Array.from(window.document.body.querySelectorAll('video')).forEach((element) => {
		console.log({element})
		freshNode(element);
	});	
	
	window.document.body.addEventListener('yt-navigate-finish', () => {
		setTimeout(() => {
			Array.from(window.document.body.querySelectorAll('video')).forEach((element) => {
				freshNode(element);
			});	
		}, 1000);
	});
} else {
	console.log('Not YouTube.');
}

