function clearTable() {
    $(`#resultTitle1`).html("")
    $(`#resultTitle2`).html("")
    $(`#resultTitle3`).html("")
    for (let i = 0; i < 10; i++) {
        $(`#resultRow${i}1`).html("");
        $(`#resultRow${i}2`).html("");
        $(`#resultRow${i}3`).html("");

    }

}
$('#btnNeighbours').on.click(function (event) {

    $.ajax({
        url: "libs/php/getNeighbours.php",
        type: 'POST',
        dataType: 'json',
        data: {
            country: $('#selCountry').val()
        },
        success: function (result) {
            console.log(JSON.stringify(result));

            if (result.status.name == "ok") {
                clearTable()
                const data = result["data"]
                $(`#resultTitle1`).html("Neighbour Name")
                for (let i = 0; i < data.length && i < 10; i++) {
                    $(`#resultRow${i}1`).html(data[i]['name']);

                }

            }

        },
        error: function (jqXHR, textStatus, errorThrown) {
            // your error code
            console.log("error")
            console.log($('#selCountry').val())
        }
    });

});
$('#btnNearby').on.submit(function (event) {
    event.preventDefault()
    $.ajax({
        url: "libs/php/getCountry.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lat: $('#lat').val(),
            long: $('#long').val()
        },
        success: function (result) {

            if (result.status.name == "ok") {
                clearTable()
                const data = result["data"]
                $(`#resultTitle1`).html("Name")
                $(`#resultTitle2`).html("Region")
                $(`#resultTitle3`).html("Code")
                $(`#resultRow01`).html(data[0]['countryName']);
                $(`#resultRow02`).html(data[0]['adminName1']);
                $(`#resultRow03`).html(data[0]['geonameId']);

            }

        },
        error: function (jqXHR, textStatus, errorThrown) {
            // your error code
            console.log("error" + errorThrown + textStatus + jqXHR)
            console.log($('#lat').val())
            console.log($('#long').val())


        }
    });

});

$('#btnAdd').onzzzz(function () {
    event.preventDefault()
    $.ajax({
        url: "libs/php/getAddress.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lat: $('#latAdd').val(),
            long: $('#longAdd').val()
        },
        success: function (result) {

            if (result.status.name == "ok") {
                clearTable()
                const data = result["data"]
                $(`#resultTitle1`).html("Country Code")
                $(`#resultTitle2`).html("Street")
                $(`#resultTitle3`).html("Postcode")
                $(`#resultRow01`).html(data['countryCode']);
                $(`#resultRow02`).html(data['street']);
                $(`#resultRow03`).html(data['postalcode']);

            }

        },
        error: function (jqXHR, textStatus, errorThrown) {
            // your error code
            console.log("error" + errorThrown + textStatus + jqXHR)
            console.log($('#latAdd').val())
            console.log($('#longAdd').val())


        }
    });

});