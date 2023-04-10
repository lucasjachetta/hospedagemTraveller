const key = "NgseBTB8vYw0qBBFM4X0XB1bZDj5sSnZ";



function openMap() {
    positionOnMap();
}

function positionOnMap(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(getPosition);
    } else {
        alert("Não conseguimos obter sua localização.")
    }
}

function getPosition(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    callMapQuest(latitude, longitude)
}

function callMapQuest(latitude, longitude) {
    const url = `https://www.mapquestapi.com/staticmap/v5/map?key=${key}&locations=${latitude},${longitude}&size=700,250@2x&defaultMarker=marker-sm-22407F-3B5998&size=600,400@2x`;
    const img = document.createElement("img");
    img.src = url;
    document.getElementById("map").appendChild(img);
}


function navigateToLocation(){
    const locationURL = `https://www.google.com.br/maps/`;
    const locationLink = document.querySelector('#map');
    const newTab = window.open(locationURL, '_blank');
    newTab.focus();
    locationLink.addEventListener('click', () => {
        navigateToLocation(locationURL)
    })

}
function navigateToNearbyRestaurants(){
    const restaurantsURL = `https://www.google.com.br/maps/search/Restaurantes/data=!3m1!4b1`;
    const buttonRestaurants = document.querySelector('#buttonRestaurants');
    const newTab = window.open(restaurantsURL, '_blank');
    newTab.focus();
    buttonRestaurants.addEventListener('click', () => {
        navigateToNearbyRestaurants(restaurantsURL)
    })

}

function navigateToNearbySpots(){
    const spotsURL = `https://www.google.com.br/maps/search/Coisas+legais+para+fazer`;
    const buttonSpots = document.querySelector('#buttonSpots');
    const newTab = window.open(spotsURL, '_blank');
    newTab.focus();
    buttonSpots.addEventListener('click', () => {
        navigateToNearbySpots(spotsURL)
    })

}


function navigateToIBIS(){
    const ibisURL = `https://www.booking.com/hotel/br/ibis-styles-sao-paulo-anhembi.pt-br.html`;
    const buttonIbis = document.querySelector('#buttonIBIS');
    const newTab = window.open(ibisURL, '_blank');
    newTab.focus();
    buttonIbis.addEventListener('click', () => {
        navigateToNearbySpots(ibisURL)
    })
}

function navigateToIberapuera(){
    const IberapueraURL = `https://www.booking.com/hotel/br/comfort-ibirapuera.pt-br.html`;
    const buttonIberapuera = document.querySelector('#buttonIberapuera');
    const newTab = window.open(IberapueraURL, '_blank');
    newTab.focus();
    buttonIberapuera.addEventListener('click', () => {
        navigateToNearbySpots(IberapueraURL)
    })
}

function navigateToBlueTree(){
    const blueTreeURL = `https://www.booking.com/hotel/br/blue-tree-premium-morumbi.pt-br.html`;
    const buttonBlueTree = document.querySelector('#buttonBlueTree');
    const newTab = window.open(blueTreeURL, '_blank');
    newTab.focus();
    buttonBlueTree.addEventListener('click', () => {
        navigateToNearbySpots(blueTreeURL)
    })
}