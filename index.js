let map;

const array = [
    kioto = {lat: -23.7409465, lng:-46.7110488},
    extra = {lat: -23.7403789, lng:-46.7089876},
    extara = {lat: -23.7401898, lng:-46.7127773}
]
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -23.743826, lng: -46.692845 },
    zoom: 13,
  }); 
  
  array.forEach((element) =>{
    const marker = new google.maps.Marker({
        position: element,
        icon: '/icons/carretels.png',
        map: map,
      });
      marker.addListener("click", () => {
        alert(element.lat +" "+ element.lng)

      });
  })
  
}