mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12', // Add comma here
    center: listing.geometry.coordinates,
    zoom: 9
  });
  
// console.log(coordinates);
  const marker = new mapboxgl.Marker({color:"red"})
  .setLngLat(listing.geometry.coordinates)//Listing.geometry.coordinate
  .setPopup(new mapboxgl.Popup({offset: 25}
    .setHTML(`<h3>Welcome to ${listing.location} </h3>`)))
  .addTo(map);
