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
		initialProperties: {
			qHyperCubeDef: {
				qDimensions: [],
				qMeasures: [],
				qInitialDataFetch: [
					{
						qWidth: 2,			//col limit
						qHeight: 1000		//row limit
					}
				]
			}
		},
		definition: {
			type: "items",
			component: "accordion",
			items: {
				dimensions: {
					uses: "dimensions",
					min: 1,
					max: 1
				},
				sorting: {
					uses: "sorting"
				},
				appearance: {
					uses: "settings",
				}
			}
		},		
		paint: function ($element, layout) {

			var hc = layout.qHyperCube;
			
			//add your rendering code here
			html  = "<canvas height='500' id='myCanvas' width='500'></canvas>";
			html += "<div class='myCanvasContainer'>";
			html += "<div id='tags'>";
			html += "<ul hidden>";
			
			for (var r = 0; r < hc.qDataPages[0].qMatrix.length; r++) {
				html += "<li><a href='#' >" + hc.qDataPages[0].qMatrix[r][0].qText + "</a></li>" + "\n"; 
			}
			
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

