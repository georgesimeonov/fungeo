// map-interactions.js - Common map interaction functions for the geography quiz game

/**
 * Adds hover effects to map country layers
 * @param {Object} layer - The Leaflet layer representing the country
 * @param {boolean} isGameActive - Whether the game is currently active
 */
function addCountryHoverEffects(layer, isGameActive = true) {
    // Add hover effect with yellow highlight
    layer.on('mouseover', function () {
        if (isGameActive) {
            layer.setStyle({
                fillColor: '#FFFF99', // Light yellow color
                fillOpacity: 0.5
            });
        }
    });

    // Reset style on mouseout
    layer.on('mouseout', function () {
        if (isGameActive) {
            layer.setStyle({
                fillOpacity: 0.1,
                fillColor: '#f0f0f0'
            });
        }
    });
}

/**
 * Reset all map layers to their default state
 * @param {Object} geoJsonLayer - The GeoJSON layer containing all countries
 */
function resetMapLayers(geoJsonLayer) {
    if (geoJsonLayer) {
        geoJsonLayer.setStyle({
            fillColor: '#f0f0f0',
            fillOpacity: 0,
            color: '#000',
            weight: 1,
            opacity: 1
        });
    } else {
        console.warn('GeoJson layer is not provided.');
    }
}