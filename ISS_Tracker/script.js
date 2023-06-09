const iLat = document.getElementById('iLat')
const iLon = document.getElementById('iLon')
const uLat = document.getElementById('uLat')
const uLon = document.getElementById('uLon')
const iss = document.getElementById("iss")
const uLoc = document.getElementById("userLoc")

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            uLat.innerHTML = 'User Latitude: ' + position.coords['latitude'].toFixed(4)
            uLon.innerHTML = 'User Longitude: ' + position.coords['longitude'].toFixed(4)
            uLoc.style.top = `${convLat(parseFloat(position.coords['latitude']))}%`
            uLoc.style.left = `${convLon(parseFloat(position.coords['longitude']))}%`
          })
    } 
    else {
        uLat.innerHTML = 'Location Permissions Denied'
        uLon.innerHTML = 'Location Permissions Denied'
    }

}

getLocation()

async function getIssPosition() {
    try {
        const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544')
        const data = await response.json()
        return data
    }
    catch (err) {
        console.log(err)
    }
}

function updateLatLon() {
    getIssPosition()
        .then(data => {
        iLat.innerHTML = 'ISS Latitude: ' + data['latitude'].toFixed(4)
        iss.style.top = `${convLat(data['latitude'])}%`
        iLon.innerHTML = 'ISS Longitude: ' + data['longitude'].toFixed(4)
        iss.style.left = `${convLon(data['longitude'])}%`
        })
        .catch(error => console.log(error))
        setTimeout(updateLatLon, 5000)
    }

updateLatLon();

function convLat (num) {
    let lat = 50 - (parseFloat(num) * (5/9))
    return lat
}

function convLon (num) {
    let lon = (parseFloat(num) * (5/18)) + 50
    return lon
}


// Mark user location on map