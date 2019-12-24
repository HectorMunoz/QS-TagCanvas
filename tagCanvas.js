define( [ 
	"qlik",
	"./js/jquery.tagcanvas.min"
],
function ( qlik , tagCanvas) {

	return {
		support : {
			snapshot: true,
			export: true,
			exportData : false
		},
		paint: function ($element, $layout) {
			//add your rendering code here
			html  = "<canvas height='500' id='myCanvas' width='500'></canvas>";
			html += "<div class='myCanvasContainer'>";
			html += "<div id='tags'>";
			html += "<ul><li><a>1</a></li><li><a>2</a></li><li><a>3</a></li><li><a>4</a></li><li><a>5</a></li><li><a>6</a></li><li><a>7</a></li><li><a>8</a></li><li><a>9</a></li><li><a>10</a></li></ul>";
			html += "</div></div>";
			$element.html( html );
			
			options = {
				textColour: '#ff0000',
				outlineColour: '#ff00ff',
				reverse: false,
				depth: 0.8,
				maxSpeed: 0.05
			};
			
			if(!$('#myCanvas').tagcanvas(options,'tags')) {
				$('.myCanvasContainer').s();
			}
			//needed for export
			return qlik.Promise.resolve();
		}
	};

} );

