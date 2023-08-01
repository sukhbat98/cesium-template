import { Ion, Viewer, Cartesian3, Math } from "cesium";
import "cesium/Widgets/widgets.css";
import "../scr/css/main.css"

// Your access token can be found at: https://cesium.com/ion/tokens.
// This is the default access token
Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwNGFjZDFkMC02ZmM5LTRiMjAtOTM0Mi02MjRmNGQzNjIxZjUiLCJpZCI6MTQ1Mzk0LCJpYXQiOjE2OTA3OTMyNDV9.6L2oqvobiJgZdHt8U4dQbEqw8OJYf-JuoE3P4ZS0NyY';

// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new Viewer('cesiumContainer', {
    // terrainProvider: createWorldTerrain()
});
