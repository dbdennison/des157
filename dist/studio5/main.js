mapboxgl.accessToken = 'pk.eyJ1IjoiZGJkZW5uaXNvbiIsImEiOiJjaXplbG1sNWYyNTlnMzNxcDlzYmxwZWlxIn0._dRze9L0NNdteAowZrpNSg';
var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v9',
	center: [-121.75, 38.54],
	zoom: 14,
});

map.on('load', function() {
	map.addLayer({
		id: 'terrain-data',
		type: 'line',
		source: {
			type: 'vector',
			url: 'mapbox://mapbox.mapbox-terrain-v2'
		},
		'source-layer': 'contour'
	});

	map.addSource("markers", {
		"type": "geojson",
		"data": "assets/points.geojson"
	});

	map.addLayer({
		"id": "points",
		"type": "symbol",
		"source": "markers",
		"layout": {
			"icon-image": "{icon}-15",
			"text-field": "{title}",
			"text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
			"text-offset": [0, 0.6],
			"text-anchor": "top"
		}
	});
});

function changeStyle() {
	let layerList = document.querySelector('.map-menu-style');
	let inputs = layerList.getElementsByTagName('input');

	function switchLayer(layer) {
		let layerId = layer.target.id;
		map.setStyle('mapbox://styles/mapbox/' + layerId + '-v9');
	}

	for (let i = 0; i < inputs.length; i++) {
		inputs[i].onclick = switchLayer;
	}
}