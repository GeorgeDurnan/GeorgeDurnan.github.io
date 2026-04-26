//------
//Initial variables
//------
let lat
let long
let border
let bounds
let country
let flagCode
let currency
let chosenIndex
let firstLoad = true
let isLoading = false
let timeoutTime = 5000
//------
//Data storage
//------
let currencyData
let infoData
let musicData
let weatherData
let locationData
let wikiData
let hospitalData
let airportData
let capitalData
let museumData

//----
//Easy buttons 
//----
let musicButton
let infoButton
let currencyButton
let weatherButton
let locationButton
let wikiButton
//-----
//Pins
//-----
let mainPin
//---------
//Svg's
//--------

const musicIcon = '<svg xmlns="http://www.w3.org/1999/xlink" viewBox="0 0 1200 1200"><path d="M365 80l-30 791c-41-21-92-30-146-22-117 17-200 104-188 196 13 92 118 153 234 136 103-15 181-85 188-165l0 0 0-1 0-6c4-82 31-708 31-708l652-67-29 563c-42-23-96-34-152-26-116 16-200 104-187 196 13 92 118 153 234 136 105-15 184-88 188-170l0 0c2-101 39-950 40-980L365 80z"/></svg>'
const infoIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0V11a1 1 0 0 0-1-1Zm0-4a1.25 1.25 0 1 0 1.25 1.25A1.25 1.25 0 0 0 12 6Z"/></svg>'
const currencyIcon = '<svg viewBox="0 0 48 48" fill="none" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M19 16l5 6 5-6 M9 14c0 0 7.5-11.5 20.5-7 13 4.5 12.5 17.5 12.5 17.5 M39 34c0 0-6 11-19.5 7.5C6 38 6 24 6 24 M42 8v16 M6 24v16 M18 28h12 M18 22h12 M24 22v12"/></svg>'
const weatherIcon = '<svg  viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#000000" fill-rule="evenodd" d="M92.603 56.375a38.999 38.999 0 0 1 41.38 23.584c-.262.063-.523.13-.783.2a6 6 0 0 0-4.242 7.348 6 6 0 0 0 7.348 4.243 22.002 22.002 0 0 1 26.747 27.636A22.003 22.003 0 0 1 142 135H28.518a35.006 35.006 0 0 1 32.313-28.933 6 6 0 1 0-.743-11.976c-.36.022-.72.048-1.08.079a39.001 39.001 0 0 1 33.595-37.795ZM47.032 96.796a51 51 0 0 1 99.492-17.494 33.995 33.995 0 0 1 24.349 15.743A34 34 0 0 1 142 147H22a6 6 0 0 1-5.995-6.24 6.034 6.034 0 0 1-.002-.241 47.002 47.002 0 0 1 31.029-43.723Z" clip-rule="evenodd"/></svg>'
const locationIcon = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c-4.4 0-8 3.6-8 8 0 5.4 7 11.5 7.3 11.8.2.1.5.2.7.2.2 0 .5-.1.7-.2.3-.3 7.3-6.4 7.3-11.8 0-4.4-3.6-8-8-8zm0 17.7c-2.1-2-6-6.3-6-9.7 0-3.3 2.7-6 6-6s6 2.7 6 6-3.9 7.7-6 9.7zM12 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="#0D0D0D"/></svg>'
const wikiIcon = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15.562 19.478-3.07-7.238q-.258.51-1.652 3.182t-2.068 4.057c-.051.006-.11.009-.17.009-.041 0-.082-.002-.122-.005h.005c-.019.001-.04.001-.062.001-.075 0-.15-.006-.222-.018l.008.001q-.854-2.01-2.662-6.114t-2.704-6.209c-.193-.428-.425-.796-.699-1.128l.007.008c-.315-.396-.669-.741-1.063-1.035l-.015-.011c-.287-.248-.653-.411-1.055-.447l-.007-.001q0-.052-.005-.25t-.005-.282h6.073v.521c-.301.018-.582.077-.846.173l.021-.007c-.275.092-.508.246-.692.447l-.001.001c-.104.103-.168.246-.168.403 0 .096.024.187.066.266l-.002-.003q.271.614 2.255 5.2t2.453 5.626q.32-.635 1.458-2.776t1.364-2.578q-.198-.406-1.313-2.926t-1.416-3.073q-.396-.72-2.094-.74v-.523l5.343.01v.49c-.012 0-.026 0-.04 0-.345 0-.667.096-.942.263l.008-.005q-.349.24-.13.72.344.73.906 1.974t.895 1.953q1.146-2.229 1.802-3.781.25-.573-.103-.826c-.34-.178-.742-.282-1.169-.282-.061 0-.121.002-.181.006h.008c.007-.065.011-.14.011-.216 0-.015 0-.03 0-.045v.002-.25q.666 0 1.776-.005l2.834-.015v.51c-.457.016-.882.142-1.253.351l.014-.007c-.382.203-.697.486-.931.828l-.006.009-2.219 4.604q.135.344 1.328 3.021t1.266 2.854l4.594-10.593c-.103-.271-.282-.494-.511-.648l-.005-.003c-.193-.143-.419-.256-.663-.324l-.015-.004c-.17-.043-.369-.071-.572-.08h-.006v-.524l4.792.042.01.021-.01.458c-.965.014-1.782.633-2.089 1.495l-.005.016q-5.482 12.666-5.824 13.447z"/></svg>'
const hospitalIcon = '<svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M12.5,16.5h-1a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm0-4h-1a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-5,4h-1a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm0-4h-1a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm14-6h-3v-4a.99974.99974,0,0,0-1-1H6.5a.99974.99974,0,0,0-1,1v4h-3a.99974.99974,0,0,0-1,1v14a.99974.99974,0,0,0,1,1h19a.99974.99974,0,0,0,1-1V7.5A.99974.99974,0,0,0,21.5,6.5Zm-1,14H3.5V8.5h3a.99974.99974,0,0,0,1-1v-4h9v4a.99974.99974,0,0,0,1,1h3Zm-4-8a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2ZM13.5,7H13V6.5a1,1,0,0,0-2,0V7h-.5a1,1,0,0,0,0,2H11v.5a1,1,0,0,0,2,0V9h.5a1,1,0,0,0,0-2Zm4,9.5h-1a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Z"/></svg>'
const airportIcon = '<svg fill="#000000" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" overflow="inherit"><path d="M48.049 36.31c.523.169.951-.142.951-.692v-3.494c0-.55-.387-1.23-.859-1.512l-18.282-10.895c-.472-.281-.859-.962-.859-1.511v-12.206c0-.55-.168-1.417-.374-1.928 0 0-1.091-2.708-3-3.01-.204-.036-.411-.062-.619-.062h-.01c-.241-.002-.479.028-.713.072l-.216.048-.328.102c-1.588.53-2.406 2.835-2.406 2.835-.184.519-.334 1.393-.334 1.943v12.206c0 .55-.387 1.23-.859 1.512l-18.282 10.894c-.472.282-.859.962-.859 1.512v3.494c0 .55.428.861.951.691l18.098-5.875c.523-.169.951.142.951.692v9.533c0 .55-.36 1.271-.8 1.601l-2.4 1.802c-.44.33-.8 1.051-.8 1.601v2.337c0 .55.433.876.961.724l6.075-1.745c.528-.152 1.394-.152 1.922 0l6.081 1.745c.528.152.961-.174.961-.724v-2.338c0-.55-.36-1.271-.8-1.601l-2.4-1.802c-.439-.33-.8-1.051-.8-1.601v-9.533c0-.55.428-.861.951-.691l18.098 5.876z"/></svg>'
const capitalIcon = '<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M29.5 9.1l-13-7a1 1 0 00-1 0l-13 7A1 1 0 002 10v3h28v-3a1 1 0 00-.5-.9z"/><rect x="6" y="15" width="4" height="9" rx="1"/><rect x="14" y="15" width="4" height="9" rx="1"/><rect x="22" y="15" width="4" height="9" rx="1"/><rect x="2" y="25" width="28" height="5" rx="1"/></g></svg>'
const museumIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256,0C157.193,0,76.8,80.384,76.8,179.2c0,64.068,34.671,123.238,89.6,155.042V486.4c0,14.14,11.46,25.6,25.6,25.6h128 c14.14,0,25.6-11.46,25.6-25.6V334.242c54.929-31.804,89.6-90.974,89.6-155.042C435.2,80.384,354.807,0,256,0z M320,486.4H192 v-51.2h128V486.4z M320,318.703V409.6h-51.2V228.582c22.016-5.726,38.4-25.591,38.4-49.382c0-28.228-22.972-51.2-51.2-51.2 s-51.2,22.972-51.2,51.2c0,23.791,16.384,43.657,38.4,49.382V409.6H192v-90.897c-52.838-24.294-89.6-77.542-89.6-139.503 c0-84.83,68.77-153.6,153.6-153.6s153.6,68.77,153.6,153.6C409.6,241.161,372.838,294.409,320,318.703z M256,204.8 c-14.14,0-25.6-11.46-25.6-25.6s11.46-25.6,25.6-25.6c14.14,0,25.6,11.46,25.6,25.6S270.14,204.8,256,204.8z"/></svg>'
//---------------
//Helper functions
//----------------
//TODO: Implement this more
function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1)
}
//-----
//Helper functions
//-------
function initialize() {
    initaliseButtons()
    initializeChoices()
    initializeListeners()
}
function clear() {
    $("#flag").html()
    try {
        if (!firstLoad) {
            musicButton.remove()
            infoButton.remove()
            currencyButton.remove()
            weatherButton.remove()
            locationButton.remove()
            wikiButton.remove()

        }
    } catch (error) {
        console.log("Couldn't find one of the buttons")
        console.log(error)
    }

}
//Rest countries goes down often so I need to inform the user
function errorOut(data) {
    let message = ""
    for (const datum of data) {
        if (datum[1]["status"] === "rejected") {
            message += `- ${datum[0]} API is not responding and timed out\n`
        } else if (datum[1]["value"]["status"]["code"] === 500) {
            message += `- ${datum[0]} API is not responding \n`
        }
    }
    if (message !== "") {
        alert("One or more of the API's is not functioning as normal, please try refreshing or trying again later - the API's not working are: \n" + message)
    }
}

//--------------------
//Sets up the map
//--------------------

const map = L.map('map').setView([62.505, -0.09], 0.5)
const normal = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy  <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map)
const satellite = L.tileLayer('https://api.maptiler.com/maps/hybrid/256/{z}/{x}/{y}.jpg?key=GZzWKnrhd8ITeDkyxYVf', {
    maxZoom: 19,
    attribution: '&copy <a href="https://www.maptiler.com/copyright/">MapTiler</a> | &copy <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
})

const maps = { Normal: normal, Satellite: satellite }
//------------
//Overlay intialization
//------------
let hospitalCluster = L.markerClusterGroup()
let airportCluster = L.markerClusterGroup()
let museumCluster = L.markerClusterGroup()
let capitalCluster = L.markerClusterGroup()

const overlays = {
    Hospitals: hospitalCluster,
    Airports: airportCluster,
    Capital: capitalCluster,
    Museums: museumCluster

}
L.control.layers(maps, overlays, {
    position: 'topleft'
}).addTo(map)
//-----------------
//Retreives the location
//-----------------

function load() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error)
    } else {
        alert("Geolocation is not supported by this browser.")
    }
}

//If location found

async function success(position) {
    lat = position.coords.latitude
    long = position.coords.longitude
    const results = await Promise.allSettled([
        $.ajax({
            url: "libs/php/getCurrency.php",
            type: "GET",
            timeout: timeoutTime,
            dataType: "json",
            data: {
                country: country,
            }
        }),
        $.ajax({
            url: "./libs/php/getCountry.php",
            type: 'POST',
            timeout: timeoutTime,
            dataType: 'json',
            data: {
                lat: lat,
                long: long
            }
        })
    ])
    errorOut([["OpenCurrencyExchange", results[0]], ["OpenCage", results[1]]]);
    [currencyData, locationData] = results.map(result => result.status === "fulfilled" ? result?.["value"] : null)

    if (locationData.status.name == "ok") {

        const data = locationData["data"][0]
        const code = data["components"]["ISO_3166-1_alpha-2"]
        country = borderData[code]["properties"]["name"]
        createBorder(code)
        clear()
        createPin()
        //For first load
        if (firstLoad) {
            initialize()
            firstLoad = false
        }

    }

}
//If no location found
function error() {
    alert("No country found")
}

//-----------
//Creates the border
//-----------
function createBorder(code) {
    //Removes border before new border loaded
    if (border) {
        map.removeLayer(border)
    }
    border = L.geoJSON(borderData[code], {
        style: {
            fillColor: "yellow",
            color: "blue",
            weight: 1.5,
            fillOpacity: 0.2,
        }
    })
    map.addLayer(border)


    bounds = border.getBounds()


    map.fitBounds(bounds, {
        padding: [50, 50],
        duration: 2,
    })
}
//----
//Country select
//-------
const initializeChoices = () => {
    for (let i = 0; i < selectData.length; i++) {
        //Ensures the initial selected country is the current country
        if (selectData[i].name === country) {
            chosenIndex = i
        }
        $("#countries").append(
            $("<option>", {
                value: selectData[i].value,
                text: selectData[i].name,
            })
        )
    }
    document.getElementById("countries").selectedIndex = chosenIndex
}

//-------
//Easy buttons
//-------
async function initaliseButtons() {
    //If it is already loading it does not initalise buttons
    if (isLoading) {
        return
    }
    isLoading = true
    //Deletes previous buttons
    clear()
    createPin()
    await getData()
    loadFlag()
    addMarkers()

    musicButton = L.easyButton(
        //Button icon
        musicIcon,
        function () {
            $("#music-list-body").empty()
            //If request timed out or if request failed
            if (musicData == null || musicData["status"]["code"] !== "200" || musicData["tracks"]["track"].length == 0) {
                $("#music-list").hide()
                $("#music-message").show()
            } else {
                $("#music-list").show()
                $("#music-message").hide()
                const data = musicData["tracks"]["track"]
                //If data is less than 10
                for (let index = 0; index < 10 && index < data.length; index++) {
                    const song = data[index]
                    const row = $("<tr>")
                    const diamondNo = $("<div class='music-no'>").html("<h6>" + (index + 1) + "</h6>")
                    row.append($("<td>").append(diamondNo))
                    row.append($("<td>").text(song["name"]))
                    row.append($("<td>").text(song["artist"]["name"]))
                    $("#music-list-body").append(row);
                }
            }
            $("#music-title").text(country)
            // Show the music modal popup window
            new bootstrap.Modal(document.getElementById('musicModal')).show()
        },
        //Tool tip
        "Music Country Information"
    ).addTo(map)

    infoButton = L.easyButton(
        //Icon of button
        infoIcon,
        function () {
            $("#info-list-title").empty()
            $("#info-list-body").empty()
            if (infoData == null || infoData["status"]["code"] !== "200") {
                $("#info-table").hide()
                $("#info-message").show()
            } else {
                $("#info-table").show()
                $("#info-message").hide()
                const data = infoData["data"]
                const [{ symbol, name }] = Object.values(data["currencies"])
                $("#info-capital").text(data["capital"])
                $("#info-drive").text(capitalizeFirstLetter(data["car"]["side"]))
                $("#info-continent").text(data["continents"][0])
                $("#info-population").text(data["population"])
                $("#info-currency").text(capitalizeFirstLetter(name))
                $("#info-symbol").text(symbol)
                for (let index = 0; index < data["borders"].length; index++) {
                    if (index == 0) {
                        $("#info-list-title").text(`Neighbours of ${country}`)
                    }
                    if (convert[data["borders"][index]]?.["name"]) {
                        $("#info-list-body").append($("<li>").text(convert[data["borders"][index]]["name"]))
                    } else {
                        console.log("Unrecognised neighbour")
                    }

                }
            }
            $("#info-title").text(country)
            // Show the info modal popup window
            new bootstrap.Modal(document.getElementById('infoModal')).show()

        },
        //Tool tip
        "Country information"
    ).addTo(map)
    currencyButton = L.easyButton(
        //Icon of button
        currencyIcon,
        function () {
            $("#currency-list").empty()
            if (currency == null || currencyData == null || currencyData["status"]["code"] !== "200") {
                $("#currency-table").hide()
                $("#currency-message").show()
            } else {
                $("#currency-table").show()
                $("#currency-message").hide()
                const [{ symbol, name }] = Object.values(infoData["data"]["currencies"])
                const data = currencyData["data"]
                $("#currency-name").text(name)
                $("#currency-symbol").text(symbol)
                $("#currency-code").text(currency)
                $("#currency-rate").text(data[currency].toFixed(2))
            }
            $("#currency-title").text(country)
            // Show the currency modal popup window
            new bootstrap.Modal(document.getElementById('currencyModal')).show()
        },
        //Tool tip
        "Currency Country Information"
    ).addTo(map)
    weatherButton = L.easyButton(
        //Icon of button
        weatherIcon,
        function () {
            $("#weather-list").empty()
            if (weatherData == null || weatherData["status"]["code"] !== "200") {
                //Hides the table if request fails
                $("#weather-table").hide()
                $("#weather-message").show()
                $("#weather-title").text(country)

            } else {
                const data = weatherData["data"]
                //Deletes message and shows table if response succeeds
                $("#weather-icon").html(`<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png">`)

                $("#weather-table").show()
                $("#weather-message").hide()
                //Extra rain gif
                if (data["weather"][0]["description"] == "light rain") {
                    $('#weather-modal').css('background-image', `url("./libs/images/light-rain.gif")`);

                } else {
                    $('#weather-modal').css('background-image', `url("./libs/images/${(data["weather"][0]["main"]).toLowerCase()}.gif")`);
                }
                $("#weather-name").text(data["weather"][0]["main"])
                $("#weather-desc").text(capitalizeFirstLetter(data["weather"][0]["description"]))
                //Temperature is in kelvin
                $("#weather-temp").text((data["main"]["temp"] - 273.15).toFixed(0) + "°C")
                $("#weather-speed").text(`${data["wind"]["speed"]} mph wind`)
                $("#weather-title").text(data["name"])
            }
            // Show the weather modal popup window
            new bootstrap.Modal(document.getElementById('weatherModal')).show()
        },
        //Tool tip
        "Weather Country Information"
    ).addTo(map)
    //Location
    locationButton = L.easyButton(
        //Icon of button
        locationIcon,
        function () {
            $("#location-list").empty()
            if (locationData == null || locationData["status"]["code"] !== "200") {
                //Hides the table if request fails
                $("#location-table").hide()
                $("#location-message").show()
                $("#location-title").text(country)

            } else {
                const data = locationData["data"][0]
                //Deletes message and shows table if response succeeds
                $("#location-table").show()
                $("#location-message").hide()

                $("#location-address").text(data?.["formatted"] || "No data")

                //Because the pin can go anywhere some countries don't have counties so other options are necessary
                if (data["components"]?.["county"]) {
                    $("#location-county").text(capitalizeFirstLetter(data["components"]["county"]))
                    $("#location-county-title").text("County")
                } else if (data["components"]?.["municipality"]) {
                    $("#location-county").text(capitalizeFirstLetter(data["components"]["municipality"]))
                    $("#location-county-title").text("Municipality")
                } else if (data["components"]?.["state_district"]) {
                    $("#location-county").text(capitalizeFirstLetter(data["components"]["state_district"]))
                    $("#location-county-title").text("State District")
                } else {
                    $("#location-county").text(capitalizeFirstLetter(data["components"]["_category"]))
                    $("#location-county-title").text("Category")
                }
                $("#location-state").text(data["components"]?.["state"] || "No data")
                $("#location-type").text(capitalizeFirstLetter(data["components"]?.["road_type"] || data["components"]?.["_type"] || "No data"))
            }
            // Show the location modal popup window
            new bootstrap.Modal(document.getElementById('locationModal')).show()
        },
        //Tool tip
        "Location Information"
    ).addTo(map)
    //Wiki button
    wikiButton = L.easyButton(
        //Icon of button
        wikiIcon,
        function () {
            $("#wiki-list").empty()
            if (wikiData == null || wikiData["status"]["code"] !== "200" || wikiData["data"].length == 0) {
                $("#wiki-list").hide()
                $("#wiki-message").show()
            } else {
                $("#wiki-list").show()
                $("#wiki-message").hide()
                const data = wikiData["data"]
                let count = 0
                //Incase wikipedia has less results
                for (let index = 0; index < 5 && index < data.length; index++) {
                    const image = data[index]?.["thumbnail"]?.["source"] ?? "./libs/images/Wikipedia-logo.png"
                    const imageDesc = data[index]?.["thumbnail"]?.["pageimage"] ?? "Wikipedia logo"
                    $("#wiki-list").append(`<div class="wiki-container"> <div class="wiki-img-container"><img class="wiki-image" src="${image}" alt="${imageDesc}"></img></div><a href="${data[index]["fullurl"]}" target="_blank">${data[index]["title"]}</a><h6 id="wiki-list-title">${data[index]["extract"]}</h6></div>`)

                }
            }
            $("#wiki-title").text(country)
            // Show the wiki modal popup window
            new bootstrap.Modal(document.getElementById('wikiModal')).show()
        },
        //Tool tip
        "wiki Country Information"
    ).addTo(map)
    //After all buttons are loaded it allows the click to work
    isLoading = false
}
//----------
//Listeners
//----------
function initializeListeners() {
    //This stops a bug where changing the name over and over causes multiple buttons
    //This also stops a bug which keeps the phantomn choice when it hasn't switched due to the check
    $("#countries").on("change", function (event) {
        if (!isLoading) {
            country = $(this).find("option:selected").text()
            chosenIndex = this.selectedIndex
            createBorder($(this).val())
            const center = bounds.getCenter()
            lat = center.lat
            long = center.lng
            initaliseButtons()
        } else {
            document.getElementById("countries").selectedIndex = chosenIndex
            console.log("Switched countries too quickly")
        }
    })
    //Switches country when country clicked
    map.on('click', function (event) {
        //This check exists to ensure there can't be multiple buttons if you switch too quickly
        //Due to a async race
        if (!isLoading) {

            lat = event.latlng.lat
            long = event.latlng.lng
            //If you click a country on a different map it will adjust the longitude
            while (long > 180 || long < -180) {
                if (long > 180) {
                    long -= 360
                } else {
                    long += 360
                }
            }
            $.ajax({
                url: "./libs/php/getCountry.php",
                type: 'POST',
                timeout: timeoutTime,
                dataType: 'json',
                data: {
                    lat: lat,
                    long: long
                },
                success: function (result) {
                    //If country isn't found it doesn't change anything
                    if (result.status.code == 200) {
                        const data = result["data"][0]
                        const code = data["components"]["ISO_3166-1_alpha-2"]

                        //Checks if we have the code in our data
                        if (borderData[code]) {
                            country = borderData[code]["properties"]["name"]
                            createBorder(code)
                            initaliseButtons()
                            initializeChoices()
                        } else {
                            console.log("Unknown country clicked")
                        }
                        //If it returns negative on finding a country
                    } else {
                        console.log("Non country clicked")
                    }
                },
            })
        } else {
            console.log("Moved too quickly")
        }
    })


}


//------
//Data loaders
//------
//
async function getData() {
    //Fixes a error where some location data would be remembered
    //Have reset all other datas to ensure this bug doesn't continue
    infoData = null
    musicData = null
    weatherData = null
    wikiData = null
    hospitalData = null
    airportData = null
    museumData = null
    capitalData = null
    locationData = null

    try {
        //Done seperately as it contains the required information
        try {
            locationData = await $.ajax({
                url: "./libs/php/getCountry.php",
                type: 'POST',
                dataType: 'json',
                timeout: timeoutTime,
                data: {
                    lat: lat,
                    long: long
                }
            })
        } catch (error) {
            console.log("Open cage timed out.")
        }

        if (locationData?.["data"]?.[0]?.["components"]?.["ISO_3166-1_alpha-2"]) {
            flagCode = locationData["data"][0]["components"]["ISO_3166-1_alpha-2"]
        }
        //Settled to allow code to continue if one API fails (usually rest countries)
        const results = await Promise.allSettled([
            //Get country info - rest countries
            $.ajax({
                url: "libs/php/getCountryInfo.php",
                type: "GET",
                dataType: "json",
                timeout: timeoutTime,
                data: {
                    country: flagCode,
                }
            }),

            //Music -FM Api
            $.ajax({
                url: "libs/php/getTopTrack.php",
                type: "GET",
                dataType: "json",
                timeout: timeoutTime,
                data: {
                    country: country,
                }
            }),
            //Weather OpenWeather
            $.ajax({
                url: "libs/php/getWeather.php",
                type: "GET",
                dataType: "json",
                timeout: timeoutTime,
                data: {
                    lat: lat,
                    long: long
                }
            }),
            //Wikipedia - geonames
            $.ajax({
                url: "libs/php/getWikipedia.php",
                type: "GET",
                dataType: "json",
                timeout: timeoutTime,
                data: {
                    country
                }
            }),
            //Hospitals - Geonames
            $.ajax({
                url: "libs/php/getFeature.php",
                type: "GET",
                dataType: "json",
                timeout: timeoutTime,
                data: {
                    code: flagCode,
                    feature: "hospital",
                    limit: 50
                }
            }),
            //Airport - Geonames
            $.ajax({
                url: "libs/php/getFeature.php",
                type: "GET",
                dataType: "json",
                timeout: timeoutTime,
                data: {
                    code: flagCode,
                    feature: "airport",
                    limit: 50
                }
            }),
            $.ajax({
                url: "libs/php/getFeature.php",
                type: "GET",
                dataType: "json",
                timeout: timeoutTime,
                data: {
                    code: flagCode,
                    feature: "museum",
                    limit: 50
                }
            }),
            $.ajax({
                url: "libs/php/getFeature.php",
                type: "GET",
                dataType: "json",
                timeout: timeoutTime,
                data: {
                    code: flagCode,
                    feature: "PPLC",
                    limit: 1
                }
            }),






        ])
        errorOut([["Rest countries", results[0]], ["Audioscrobbler", results[1]], ["Open Weather", results[2]], ["Wikipedia", results[3]], ["GeoName Search Endpoint - Hospital", results[4]], ["GeoName Search Endpoint - Airport", results[5]], ["GeoName Search Endpoint - Museum", results[6]], ["GeoName Search Endpoint - Capital", results[7]]]);
        //Gets data from results if they passed
        [infoData, musicData, weatherData, wikiData, hospitalData, airportData, museumData, capitalData] = results.map(result => result.status === "fulfilled" ? result.value : null);
        //Get currency from info
        if (infoData?.["data"]?.["currencies"]) {
            currency = Object.keys(infoData["data"]["currencies"])[0]
        } else {
            currency = null
        }
    } catch (error) {
        console.log("An error getting data occured")
        console.log(error)
    }


}
//------
//Pin
//------
function createPin() {
    if (mainPin) {
        mainPin.remove()
    }
    mainPin = L.marker([lat, long]).addTo(map)
}
//----
//Flag
//----
function loadFlag() {
    $("#flag").empty()
    //Changes Iranian flag to non authoritarian flag
    if (country && country == "Iran") {
        $("#flag").html(`<img src="https://cdn.britannica.com/77/282777-050-1C34DFF8/Historical-Flag-of-Iran-before-1979-Revolution.jpg" alt="Flag of Iran">`)
    } else {
        const unknown = "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
        $("#flag").html(`<img src="${infoData?.["data"]?.["flags"]?.["png"] || unknown}" alt="Flag of ${country}">`)
    }

}

//----
//Markers
//------
function addMarkers() {
    addMarkersToMap(hospitalData, hospitalCluster, hospitalIcon)
    addMarkersToMap(airportData, airportCluster, airportIcon)
    addMarkersToMap(capitalData, capitalCluster, capitalIcon)
    addMarkersToMap(museumData, museumCluster, museumIcon)
}

function addMarkersToMap(data, cluster, icon) {
    data = data["data"]
    cluster.clearLayers()

    for (let i = 0; i < data.length; i++) {

        // Latitude
        const markerLat = data[i].lat
        // Longitude
        const markerLong = data[i].lng
        // name                   
        const name = data[i].toponymName
        // Feature                   
        const feature = data[i].fclName
        const marker = L.divIcon({
            html: icon,
            //prevents default
            className: '',
            iconSize: [24, 24],
            //Centres
            iconAnchor: [12, 24],
            //Above Icon
            popupAnchor: [0, -24]
        })

        const popUpContent =
            "Name:  " + name + "<br/>" + "Country Code:  " + feature + "<br/>" + "Latitude:  " +
            markerLat + "<br/>" + "Longitude:  " + markerLong


        const pin = L.marker([markerLat, markerLong], { icon: marker })

        pin.addTo(cluster).bindPopup(popUpContent)
    }

    map.addLayer(cluster)
}
//-----
//Main
//-----
load()
