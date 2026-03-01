var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_MunicipalityofAsuncion_1 = new ol.format.GeoJSON();
var features_MunicipalityofAsuncion_1 = format_MunicipalityofAsuncion_1.readFeatures(json_MunicipalityofAsuncion_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipalityofAsuncion_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipalityofAsuncion_1.addFeatures(features_MunicipalityofAsuncion_1);
var lyr_MunicipalityofAsuncion_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicipalityofAsuncion_1, 
                style: style_MunicipalityofAsuncion_1,
                popuplayertitle: 'Municipality of Asuncion',
                interactive: true,
                title: '<img src="styles/legend/MunicipalityofAsuncion_1.png" /> Municipality of Asuncion'
            });
var format_Riceproductionarea_2 = new ol.format.GeoJSON();
var features_Riceproductionarea_2 = format_Riceproductionarea_2.readFeatures(json_Riceproductionarea_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Riceproductionarea_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Riceproductionarea_2.addFeatures(features_Riceproductionarea_2);
var lyr_Riceproductionarea_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Riceproductionarea_2, 
                style: style_Riceproductionarea_2,
                popuplayertitle: 'Rice production area',
                interactive: true,
                title: '<img src="styles/legend/Riceproductionarea_2.png" /> Rice production area'
            });
var format_Riceareafloodsusceptible_3 = new ol.format.GeoJSON();
var features_Riceareafloodsusceptible_3 = format_Riceareafloodsusceptible_3.readFeatures(json_Riceareafloodsusceptible_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Riceareafloodsusceptible_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Riceareafloodsusceptible_3.addFeatures(features_Riceareafloodsusceptible_3);
var lyr_Riceareafloodsusceptible_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Riceareafloodsusceptible_3, 
                style: style_Riceareafloodsusceptible_3,
                popuplayertitle: 'Rice area flood susceptible',
                interactive: true,
    title: 'Rice area flood susceptible<br />\
    <img src="styles/legend/Riceareafloodsusceptible_3_0.png" /> High Flood Susceptibility<br />\
    <img src="styles/legend/Riceareafloodsusceptible_3_1.png" /> Low Flood Susceptibility<br />\
    <img src="styles/legend/Riceareafloodsusceptible_3_2.png" /> Moderate Flood Susceptibility<br />\
    <img src="styles/legend/Riceareafloodsusceptible_3_3.png" /> Not Applicable<br />\
    <img src="styles/legend/Riceareafloodsusceptible_3_4.png" /> Very High Flood Susceptibility<br />' });
var format_Waterways_4 = new ol.format.GeoJSON();
var features_Waterways_4 = format_Waterways_4.readFeatures(json_Waterways_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waterways_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterways_4.addFeatures(features_Waterways_4);
var lyr_Waterways_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waterways_4, 
                style: style_Waterways_4,
                popuplayertitle: 'Waterways',
                interactive: true,
                title: '<img src="styles/legend/Waterways_4.png" /> Waterways'
            });
var format_Barangayboundary_5 = new ol.format.GeoJSON();
var features_Barangayboundary_5 = format_Barangayboundary_5.readFeatures(json_Barangayboundary_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Barangayboundary_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Barangayboundary_5.addFeatures(features_Barangayboundary_5);
var lyr_Barangayboundary_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Barangayboundary_5, 
                style: style_Barangayboundary_5,
                popuplayertitle: 'Barangay boundary',
                interactive: true,
                title: '<img src="styles/legend/Barangayboundary_5.png" /> Barangay boundary'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_MunicipalityofAsuncion_1.setVisible(true);lyr_Riceproductionarea_2.setVisible(true);lyr_Riceareafloodsusceptible_3.setVisible(true);lyr_Waterways_4.setVisible(true);lyr_Barangayboundary_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_MunicipalityofAsuncion_1,lyr_Riceproductionarea_2,lyr_Riceareafloodsusceptible_3,lyr_Waterways_4,lyr_Barangayboundary_5];
lyr_MunicipalityofAsuncion_1.set('fieldAliases', {'ID': 'ID', 'Municipali': 'Municipali', 'Area_has': 'Area_has', });
lyr_Riceproductionarea_2.set('fieldAliases', {'DN': 'DN', });
lyr_Riceareafloodsusceptible_3.set('fieldAliases', {'FloodSusc': 'FloodSusc', 'SUSC': 'SUSC', 'BARANGAY': 'BARANGAY', 'Area': 'Area', });
lyr_Waterways_4.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'width': 'width', });
lyr_Barangayboundary_5.set('fieldAliases', {'ID': 'ID', 'BARANGAY': 'BARANGAY', 'Yield': 'Yield', });
lyr_MunicipalityofAsuncion_1.set('fieldImages', {'ID': 'TextEdit', 'Municipali': 'TextEdit', 'Area_has': 'TextEdit', });
lyr_Riceproductionarea_2.set('fieldImages', {'DN': 'Range', });
lyr_Riceareafloodsusceptible_3.set('fieldImages', {'FloodSusc': 'TextEdit', 'SUSC': 'TextEdit', 'BARANGAY': 'TextEdit', 'Area': 'TextEdit', });
lyr_Waterways_4.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'width': 'Range', });
lyr_Barangayboundary_5.set('fieldImages', {'ID': 'TextEdit', 'BARANGAY': 'TextEdit', 'Yield': 'TextEdit', });
lyr_MunicipalityofAsuncion_1.set('fieldLabels', {'ID': 'hidden field', 'Municipali': 'hidden field', 'Area_has': 'hidden field', });
lyr_Riceproductionarea_2.set('fieldLabels', {'DN': 'hidden field', });
lyr_Riceareafloodsusceptible_3.set('fieldLabels', {'FloodSusc': 'inline label - visible with data', 'SUSC': 'inline label - visible with data', 'BARANGAY': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_Waterways_4.set('fieldLabels', {'osm_id': 'hidden field', 'name': 'hidden field', 'type': 'hidden field', 'width': 'hidden field', });
lyr_Barangayboundary_5.set('fieldLabels', {'ID': 'hidden field', 'BARANGAY': 'inline label - visible with data', 'Yield': 'inline label - visible with data', });
lyr_Barangayboundary_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});