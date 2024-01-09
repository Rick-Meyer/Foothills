var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_FOOTHILLSWARDBOUNDARY_1 = new ol.format.GeoJSON();
var features_FOOTHILLSWARDBOUNDARY_1 = format_FOOTHILLSWARDBOUNDARY_1.readFeatures(json_FOOTHILLSWARDBOUNDARY_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FOOTHILLSWARDBOUNDARY_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FOOTHILLSWARDBOUNDARY_1.addFeatures(features_FOOTHILLSWARDBOUNDARY_1);
var lyr_FOOTHILLSWARDBOUNDARY_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FOOTHILLSWARDBOUNDARY_1, 
                style: style_FOOTHILLSWARDBOUNDARY_1,
                interactive: true,
                title: '<img src="styles/legend/FOOTHILLSWARDBOUNDARY_1.png" /> FOOTHILLS WARD BOUNDARY'
            });
var format_QUAILVALLEYWARD_2 = new ol.format.GeoJSON();
var features_QUAILVALLEYWARD_2 = format_QUAILVALLEYWARD_2.readFeatures(json_QUAILVALLEYWARD_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QUAILVALLEYWARD_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QUAILVALLEYWARD_2.addFeatures(features_QUAILVALLEYWARD_2);
var lyr_QUAILVALLEYWARD_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_QUAILVALLEYWARD_2, 
                style: style_QUAILVALLEYWARD_2,
                interactive: true,
                title: '<img src="styles/legend/QUAILVALLEYWARD_2.png" /> QUAIL VALLEY WARD'
            });
var format_STONECLIFFWARD_3 = new ol.format.GeoJSON();
var features_STONECLIFFWARD_3 = format_STONECLIFFWARD_3.readFeatures(json_STONECLIFFWARD_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STONECLIFFWARD_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STONECLIFFWARD_3.addFeatures(features_STONECLIFFWARD_3);
var lyr_STONECLIFFWARD_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_STONECLIFFWARD_3, 
                style: style_STONECLIFFWARD_3,
                interactive: true,
                title: '<img src="styles/legend/STONECLIFFWARD_3.png" /> STONE CLIFF WARD'
            });
var format_SERENITYHILLSWARD_4 = new ol.format.GeoJSON();
var features_SERENITYHILLSWARD_4 = format_SERENITYHILLSWARD_4.readFeatures(json_SERENITYHILLSWARD_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SERENITYHILLSWARD_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SERENITYHILLSWARD_4.addFeatures(features_SERENITYHILLSWARD_4);
var lyr_SERENITYHILLSWARD_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SERENITYHILLSWARD_4, 
                style: style_SERENITYHILLSWARD_4,
                interactive: true,
                title: '<img src="styles/legend/SERENITYHILLSWARD_4.png" /> SERENITY HILLS WARD'
            });
var format_SAGEHOLLOWWARD_5 = new ol.format.GeoJSON();
var features_SAGEHOLLOWWARD_5 = format_SAGEHOLLOWWARD_5.readFeatures(json_SAGEHOLLOWWARD_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAGEHOLLOWWARD_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAGEHOLLOWWARD_5.addFeatures(features_SAGEHOLLOWWARD_5);
var lyr_SAGEHOLLOWWARD_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SAGEHOLLOWWARD_5, 
                style: style_SAGEHOLLOWWARD_5,
                interactive: true,
                title: '<img src="styles/legend/SAGEHOLLOWWARD_5.png" /> SAGE HOLLOW WARD'
            });
var format_CRIMSONCLIFFSWARD_6 = new ol.format.GeoJSON();
var features_CRIMSONCLIFFSWARD_6 = format_CRIMSONCLIFFSWARD_6.readFeatures(json_CRIMSONCLIFFSWARD_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CRIMSONCLIFFSWARD_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CRIMSONCLIFFSWARD_6.addFeatures(features_CRIMSONCLIFFSWARD_6);
var lyr_CRIMSONCLIFFSWARD_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CRIMSONCLIFFSWARD_6, 
                style: style_CRIMSONCLIFFSWARD_6,
                interactive: true,
                title: '<img src="styles/legend/CRIMSONCLIFFSWARD_6.png" /> CRIMSON CLIFFS WARD'
            });
var format_BeehiveHome_7 = new ol.format.GeoJSON();
var features_BeehiveHome_7 = format_BeehiveHome_7.readFeatures(json_BeehiveHome_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BeehiveHome_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BeehiveHome_7.addFeatures(features_BeehiveHome_7);
var lyr_BeehiveHome_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BeehiveHome_7, 
                style: style_BeehiveHome_7,
                interactive: true,
                title: '<img src="styles/legend/BeehiveHome_7.png" /> Beehive Home'
            });
var format_FoothillsWard_8 = new ol.format.GeoJSON();
var features_FoothillsWard_8 = format_FoothillsWard_8.readFeatures(json_FoothillsWard_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FoothillsWard_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FoothillsWard_8.addFeatures(features_FoothillsWard_8);
var lyr_FoothillsWard_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FoothillsWard_8, 
                style: style_FoothillsWard_8,
                interactive: true,
                title: '<img src="styles/legend/FoothillsWard_8.png" /> Foothills Ward'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_FOOTHILLSWARDBOUNDARY_1.setVisible(true);lyr_QUAILVALLEYWARD_2.setVisible(true);lyr_STONECLIFFWARD_3.setVisible(true);lyr_SERENITYHILLSWARD_4.setVisible(true);lyr_SAGEHOLLOWWARD_5.setVisible(true);lyr_CRIMSONCLIFFSWARD_6.setVisible(true);lyr_BeehiveHome_7.setVisible(true);lyr_FoothillsWard_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_FOOTHILLSWARDBOUNDARY_1,lyr_QUAILVALLEYWARD_2,lyr_STONECLIFFWARD_3,lyr_SERENITYHILLSWARD_4,lyr_SAGEHOLLOWWARD_5,lyr_CRIMSONCLIFFSWARD_6,lyr_BeehiveHome_7,lyr_FoothillsWard_8];
lyr_FOOTHILLSWARDBOUNDARY_1.set('fieldAliases', {'Ward': 'Ward', 'Bishop': 'Bishop', 'Bshp Ph #': 'Bshp Ph #', });
lyr_QUAILVALLEYWARD_2.set('fieldAliases', {'Ward': 'Ward', 'Bishop': 'Bishop', 'Bshp Ph #': 'Bshp Ph #', });
lyr_STONECLIFFWARD_3.set('fieldAliases', {'Ward': 'Ward', 'Bishop': 'Bishop', 'Bshp Ph #': 'Bshp Ph #', });
lyr_SERENITYHILLSWARD_4.set('fieldAliases', {'Ward': 'Ward', 'Bishop': 'Bishop', 'Bshp Ph #': 'Bshp Ph #', });
lyr_SAGEHOLLOWWARD_5.set('fieldAliases', {'Ward': 'Ward', 'Bishop': 'Bishop', 'Bshp Ph #': 'Bshp Ph #', });
lyr_CRIMSONCLIFFSWARD_6.set('fieldAliases', {'Ward': 'Ward', 'Bishop': 'Bishop', 'Bshp Ph #': 'Bshp Ph #', });
lyr_BeehiveHome_7.set('fieldAliases', {'Unit 1': 'Unit 1', 'Unit 2': 'Unit 2', 'Unit 3': 'Unit 3', 'Unit 4': 'Unit 4', 'Unit 5': 'Unit 5', 'Unit 6': 'Unit 6', 'Unit 7': 'Unit 7', 'Unit 8': 'Unit 8', 'Unit 9': 'Unit 9', 'Unit 10': 'Unit 10', 'Unit 11': 'Unit 11', 'Unit 12': 'Unit 12', 'Unit 13': 'Unit 13', 'Unit 14': 'Unit 14', 'Unit15': 'Unit15', });
lyr_FoothillsWard_8.set('fieldAliases', {'Name': 'Name', 'Children': 'Children', 'Address': 'Address', 'Phone #': 'Phone #', });
lyr_FOOTHILLSWARDBOUNDARY_1.set('fieldImages', {'Ward': 'TextEdit', 'Bishop': 'TextEdit', 'Bshp Ph #': 'TextEdit', });
lyr_QUAILVALLEYWARD_2.set('fieldImages', {'Ward': 'TextEdit', 'Bishop': 'TextEdit', 'Bshp Ph #': 'TextEdit', });
lyr_STONECLIFFWARD_3.set('fieldImages', {'Ward': 'TextEdit', 'Bishop': 'TextEdit', 'Bshp Ph #': 'TextEdit', });
lyr_SERENITYHILLSWARD_4.set('fieldImages', {'Ward': 'TextEdit', 'Bishop': 'TextEdit', 'Bshp Ph #': 'TextEdit', });
lyr_SAGEHOLLOWWARD_5.set('fieldImages', {'Ward': 'TextEdit', 'Bishop': 'TextEdit', 'Bshp Ph #': 'TextEdit', });
lyr_CRIMSONCLIFFSWARD_6.set('fieldImages', {'Ward': 'TextEdit', 'Bishop': 'TextEdit', 'Bshp Ph #': 'TextEdit', });
lyr_BeehiveHome_7.set('fieldImages', {'Unit 1': '', 'Unit 2': '', 'Unit 3': '', 'Unit 4': '', 'Unit 5': '', 'Unit 6': '', 'Unit 7': '', 'Unit 8': '', 'Unit 9': '', 'Unit 10': '', 'Unit 11': '', 'Unit 12': '', 'Unit 13': '', 'Unit 14': '', 'Unit15': '', });
lyr_FoothillsWard_8.set('fieldImages', {'Name': 'TextEdit', 'Children': 'TextEdit', 'Address': 'TextEdit', 'Phone #': 'TextEdit', });
lyr_FOOTHILLSWARDBOUNDARY_1.set('fieldLabels', {'Ward': 'inline label', 'Bishop': 'inline label', 'Bshp Ph #': 'inline label', });
lyr_QUAILVALLEYWARD_2.set('fieldLabels', {'Ward': 'inline label', 'Bishop': 'inline label', 'Bshp Ph #': 'inline label', });
lyr_STONECLIFFWARD_3.set('fieldLabels', {'Ward': 'inline label', 'Bishop': 'inline label', 'Bshp Ph #': 'inline label', });
lyr_SERENITYHILLSWARD_4.set('fieldLabels', {'Ward': 'inline label', 'Bishop': 'inline label', 'Bshp Ph #': 'inline label', });
lyr_SAGEHOLLOWWARD_5.set('fieldLabels', {'Ward': 'inline label', 'Bishop': 'inline label', 'Bshp Ph #': 'inline label', });
lyr_CRIMSONCLIFFSWARD_6.set('fieldLabels', {'Ward': 'inline label', 'Bishop': 'inline label', 'Bshp Ph #': 'inline label', });
lyr_BeehiveHome_7.set('fieldLabels', {'Unit 1': 'no label', 'Unit 2': 'no label', 'Unit 3': 'no label', 'Unit 4': 'no label', 'Unit 5': 'no label', 'Unit 6': 'no label', 'Unit 7': 'no label', 'Unit 8': 'no label', 'Unit 9': 'no label', 'Unit 10': 'no label', 'Unit 11': 'no label', 'Unit 12': 'no label', 'Unit 13': 'no label', 'Unit 14': 'no label', 'Unit15': 'no label', });
lyr_FoothillsWard_8.set('fieldLabels', {'Name': 'inline label', 'Children': 'inline label', 'Address': 'inline label', 'Phone #': 'inline label', });
lyr_FoothillsWard_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});