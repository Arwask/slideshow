{
	var getStuff = {};
	let imgArray = [];
	let request = new XMLHttpRequest();

	request.addEventListener('load', function()
	{
		var imgArray = JSON.parse(event.target.responseText).imageList;
		slideshow.domStuff.makeSlides(imgArray);
	})

	request.open('GET', 'images.json');
	request.send();

	getStuff.getImages = function()
	{
		console.log(imgArray);
		return imgArray;
	}
	window.slideshow = window.slideshow || {};
	slideshow.getStuff = getStuff;
}