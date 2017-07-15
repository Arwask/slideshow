{
	var domStuff = {};

	domStuff.makeSlides = function(imgObj)
	{
		for(let i=0; i<imgObj.length; i++)
		{
			$("#mainDiv").append(`<div class="slideDiv" id="div-${i}"><img src="${imgObj[i].url}" id="img-${i}"><p class="name">${imgObj[i].name}</p><section class="caption">${imgObj[i].caption}</section></div>`);
			
		}
	}
	$('#autoRotate').on('click', function()
	{
		if($('#autoRotate').is(':checked'))
		{
			console.log('checked');
			make1Slidevisible();
		}
		else
		{
			console.log('unchecked')
			defaultSlides();
		}
	})

	function defaultSlides()
	{
		for(let i=0; i<$('#mainDiv').length; i++)
		{
			if(i === 0)
			{
				$(`#div-${i}`).addClass('notHidden')
			}
			else
			{
				$(`#div-${i}`).addClass('isHidden')
			}
		}
	}

	function make1Slidevisible()
	{
		$("#mainDiv > div:gt(0)").hide();

		setInterval(function() { 
		$('#mainDiv > div:first')
		.fadeOut(0)
		.next()
		.fadeIn(1000)
		.end()
		.appendTo('#mainDiv');
		},  3000);
	}
	
	window.slideshow = window.slideshow || {};
	slideshow.domStuff = domStuff;
}