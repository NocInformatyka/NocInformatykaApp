/*
* Autor: Damian Wtorek
* */

function liczBiorytm() {
    var dd = document.getElementById('result');
    var day = parseInt(document.getElementById('datepicker').value.substr(0,2));
    var month = parseInt(document.getElementById('datepicker').value.substr(3,5));
    var year = parseInt(document.getElementById('datepicker').value.substr(6,11));

    var t_day = new Date().getDate();
    var t_month = new Date().getMonth() + 1;
    var t_year = new Date().getFullYear();

    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    var fd = new Date(year,month,day);
    var sd = new Date(t_year,t_month,t_day);

    var diff = Math.round(Math.abs((fd.getTime() - sd.getTime())/(oneDay)));

    var bf = Math.sin((2 * Math.PI * diff) / 23 );
    var bp = Math.sin((2 * Math.PI * diff) / 28 );
    var bu = Math.sin((2 * Math.PI * diff) / 33 );

    dd.innerHTML =
        'biorytm fizyczny: '   + round(bf) +'%' +'<br />' +
        'biorytm psychiczny: ' + round(bp) + '%' + '<br />' +
        'biorytm umysłowy:   ' + round(bu) + '%' + '<br />';
};
function round(n) {
    var factor = Math.pow(10, 2);
    return Math.round(n*factor)/factor;
}
function isInt(x) {
    var y = parseInt(x, 10);
    return !isNaN(y) && x == y && x.toString() == y.toString();
}

function checkConnection() {
    var networkState = navigator.connection.type;
    var myConnect = document.getElementById('Connection');

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    myConnect.innerHTML = 'Connection type: ' + states[networkState];

}
function initialize() {
    var position = new google.maps.LatLng(50.0685092,19.9550793);
    var myOptions = {
        zoom: 15,
        center: position,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(
        document.getElementById("mapka"),
        myOptions);

    var marker = new google.maps.Marker({
        position: position,
        map: map,
        title:"UEK"
    });
}
function test(){
    var val = true;
    if (val){
        initialize();
    } else {
        var testowa = document.getElementById('Connection');
        var testowa2 = document.getElementById('mapka');
        testowa.innerHTML = 'coś nie dziala';
        testowa2.innerHTML = '';
    }
}
function scanBarcode(){
    cordova.plugins.barcodeScanner.scan(
        function (result) {
            alert("We got a barcode\n" +
            "Result: " + result.text + "\n" +
            "Format: " + result.format + "\n" +
            "Cancelled: " + result.cancelled);
        },
        function (error) {
            alert("Scanning failed: " + error);
        }
    );
}