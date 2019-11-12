<!-- Mobile meta tags to go in head-->
<meta name="HandheldFriendly" content="True">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta name="MobileOptimized" content="320"/>
<meta name="apple-mobile-web-app-capable" content="yes">
<meta http-equiv="cleartype" content="on">

<!--min width to go in head for #map style popup content-->
.leaflet-popup-content {
min-width: 200px;
min-height: 100px;
overflow-y: scroll;
}

<!--Add in #map class to remove vertical scroll bar from map-->
    overflow-y: scroll;

<!--Add Google imagery/street hybrid layer instead of OSM-->

var googleHybrid = L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    opacity: 1.0,
    subdomains:['mt0','mt1','mt2','mt3']
  });

googleHybrid;
map.addLayer(googleHybrid);
function pop_Mussandam_1(feature, layer) {
    layer.on({
        mouseout: function(e) {
            for (i in e.target._eventParents) {
                e.target._eventParents[i].resetStyle(e.target);
            }
        },
        mouseover: highlightFeature,
    });

  <!--Change what's in function popMusandam_1 to the places layer-->
function pop_Mussandam_1(feature, layer) {
    layer.on({
        mouseout: function(e) {
            for (i in e.target._eventParents) {
                e.target._eventParents[i].resetStyle(e.target);
            }
        },
        mouseover: highlightFeature,
    });

<!--code for custom map start point-->

var place = [56.245643, 26.190158];
var map = L.map('map', {
    zoomControl:true, maxZoom:28, minZoom:1
}).setView(place, 6);

<!--sample code for iframe in WordPress-->
<iframe src="https://taylorhixson.github.io/WF/webapp" width="100%" height="550px" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

<!--Optional metadata elements to go in head-->
<meta name="DC.title" content="NYUAD WIDH map" />
<title>NYUAD WIDH map</title>
<meta name="DC.creator" content="Hixson,Taylor" />
<meta name="email:creator" content="taylorhixson@gmail.com" />
<meta name="DC.description" content="A map for visitors to NYU Abu Dhabi during the Winter Institute in Digital Humanities." />
<meta property="description" content="A map for visitors to NYU Abu Dhabi during the Winter Institute in Digital Humanities." />
<meta name="DC.type" content="Text">
<meta property="og:type" content="website" />
<meta name="DC.created" content="2019-10-08">
<meta name="DC.date" content="2019-10-08">
<meta property="og:locale" content="en_US" />
