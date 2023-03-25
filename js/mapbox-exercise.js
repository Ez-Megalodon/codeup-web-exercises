(function () {
    document.querySelector('#zoomSubmit').addEventListener('click', event => {
    event.preventDefault();
    map.setZoom(document.querySelector('#zoom').value);
});

document.querySelector('#setMarkerButton').addEventListener('click', event => {
    event.preventDefault();
    const address = document.querySelector('#setMarker').value;
    console.log(address);

    geocode(address, MAPBOX_API_TOKEN).then(coords => {
        console.log(coords);
        const newMarker = new mapboxgl.Marker()
            .setLngLat(coords)
            .addTo(map);
        map.setCenter(coords);
    });
});
})();