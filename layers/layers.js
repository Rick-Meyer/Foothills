var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_FoothillsWard_1 = new ol.format.GeoJSON();
var features_FoothillsWard_1 = format_FoothillsWard_1.readFeatures(json_FoothillsWard_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FoothillsWard_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FoothillsWard_1.addFeatures(features_FoothillsWard_1);
var lyr_FoothillsWard_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FoothillsWard_1, 
                style: style_FoothillsWard_1,
                interactive: true,
                title: '<img src="styles/legend/FoothillsWard_1.png" /> Foothills Ward'
            });
var format_BeehiveHome_2 = new ol.format.GeoJSON();
var features_BeehiveHome_2 = format_BeehiveHome_2.readFeatures(json_BeehiveHome_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BeehiveHome_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BeehiveHome_2.addFeatures(features_BeehiveHome_2);
var lyr_BeehiveHome_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BeehiveHome_2, 
                style: style_BeehiveHome_2,
                interactive: true,
                title: '<img src="styles/legend/BeehiveHome_2.png" /> Beehive Home'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_FoothillsWard_1.setVisible(true);lyr_BeehiveHome_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_FoothillsWard_1,lyr_BeehiveHome_2];
lyr_FoothillsWard_1.set('fieldAliases', {'Name': 'Name', 'Children': 'Children', 'Address': 'Address', 'Phone #': 'Phone #', });
lyr_BeehiveHome_2.set('fieldAliases', {'Unit 1': 'Unit 1', 'Unit 2': 'Unit 2', 'Unit 3': 'Unit 3', 'Unit 4': 'Unit 4', 'Unit 5': 'Unit 5', 'Unit 6': 'Unit 6', 'Unit 7': 'Unit 7', 'Unit 8': 'Unit 8', 'Unit 9': 'Unit 9', 'Unit 10': 'Unit 10', 'Unit 11': 'Unit 11', 'Unit 12': 'Unit 12', 'Unit 13': 'Unit 13', 'Unit 14': 'Unit 14', 'Unit15': 'Unit15', });
lyr_FoothillsWard_1.set('fieldImages', {'Name': '', 'Children': '', 'Address': '', 'Phone #': '', });
lyr_BeehiveHome_2.set('fieldImages', {'Unit 1': '', 'Unit 2': '', 'Unit 3': '', 'Unit 4': '', 'Unit 5': '', 'Unit 6': '', 'Unit 7': '', 'Unit 8': '', 'Unit 9': '', 'Unit 10': '', 'Unit 11': '', 'Unit 12': '', 'Unit 13': '', 'Unit 14': '', 'Unit15': '', });
lyr_FoothillsWard_1.set('fieldLabels', {'Name': 'inline label', 'Children': 'inline label', 'Address': 'inline label', 'Phone #': 'inline label', });
lyr_BeehiveHome_2.set('fieldLabels', {'Unit 1': 'inline label', 'Unit 2': 'inline label', 'Unit 3': 'inline label', 'Unit 4': 'inline label', 'Unit 5': 'inline label', 'Unit 6': 'inline label', 'Unit 7': 'inline label', 'Unit 8': 'inline label', 'Unit 9': 'no label', 'Unit 10': 'no label', 'Unit 11': 'no label', 'Unit 12': 'no label', 'Unit 13': 'no label', 'Unit 14': 'no label', 'Unit15': 'no label', });
lyr_BeehiveHome_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});