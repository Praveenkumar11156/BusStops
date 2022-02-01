// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  
  [77.34818901927216,11.098328539797839],
      [77.3340698681723,11.059121796310777],
      [77.31618082141581,11.040226383292973],
      [77.28307918601305,10.994350078644636],
      [77.21932052658723,11.002392409202388],
      [77.18402590843613,11.01713128339071],
      [77.13275136056671,11.02804780373641],
];
 
// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1IjoicHJhdmVlbjExMTU2IiwiYSI6ImNreDk2b2oyODB3YXgybm1ua2MwcWtqMncifQ.GBB4P-kRZ2AYeavAR53zWg';
 
// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/satellite-streets-v11',
  center: [77.3340698681723,11.059121796310777],
  zoom: 10,
});
 
// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
 var marker = new mapboxgl.Marker({ "color": "#b40219" })
 .setLngLat([77.35335118543591,11.127744033591801])
 .addTo(map);
// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
  setTimeout(() =>  {
    if(counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  }, 1000);
} 
 
