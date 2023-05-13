const iLat = document.getElementById('iLat');
const iLon = document.getElementById('iLon');
const uLat = document.getElementById('uLat');
const uLon = document.getElementById('uLon');
const iss = document.getElementById("iss")

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            uLat.innerHTML = 'User Latitude: ' + position.coords['latitude']
            uLon.innerHTML = 'User Longitude: ' + position.coords['longitude']
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
        const response = await fetch('http://api.open-notify.org/iss-now.json')
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
        iLat.innerHTML = 'ISS Latitude: ' + data['iss_position']['latitude']
        convLat(data['iss_position']['latitude'])
        iLon.innerHTML = 'ISS Longitude: ' + data['iss_position']['longitude']
        convLon(data['iss_position']['longitude'])
        })
        .catch(error => console.log(error))
        setTimeout(updateLatLon, 5000)
    }

updateLatLon();

const latslider = document.getElementById("lat")
const lonslider = document.getElementById("lon")

function convLat (num) {
    let lat = 0
    if (num < 0) {
        lat = ((parseFloat(num) + 90) / 90) * 50
    }
    else if (num > 0) {
        lat = (parseFloat(num) * (5/9)) + 50
    }
    iss.style.top = `${lat}%`
}

function convLon (num) {
    let lon = 0
    if (num < 0) { 
        lon = ((parseFloat(num) + 180) / 180) * 50 
    }
    else if (num > 0) { 
        lon = (parseFloat(num) / 180) * 50 + 50
    }
    iss.style.left = `${lon}%`
}


// latslider.oninput = () => {
//     if (latslider.value < 0) {
//         let lat = ((parseFloat(latslider.value) + 90) / 90) * 50
//         console.log('below 0 ' + latslider.value, lat)
//         updateTop(lat)
//     }
//     else if (latslider.value > 0) {
//         let lat = (parseFloat(latslider.value) * (5/9)) + 50
//         console.log(latslider.value, lat)
//         updateTop(lat)
//     }
// }

// lonslider.oninput = () => {
//     if (lonslider.value < 0) {
//         let lon = ((parseFloat(lonslider.value) + 180) / 180) * 50
//         console.log(lonslider.value, lon)
//         updateLeft(lon)
//     }
//     else if (lonslider.value > 0) {
//         let lon = ((parseFloat(lonslider.value) / 180) * 50 + 50)
//         console.log(lonslider.value, lon)
//         updateLeft(lon)
//     }
// // }

// function updateLeft(num) {
//     iss.style.left = `${num}%`
// }

// function updateTop(num) {
//     iss.style.top = `${num}%`
// }

