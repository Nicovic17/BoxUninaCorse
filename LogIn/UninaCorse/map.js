
        map = new OpenLayers.Map("mapdiv");
        map.addLayer(new OpenLayers.Layer.OSM());

        var lonLat = new OpenLayers.LonLat(10.022154, 44.680667)
            .transform(
                new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
                map.getProjectionObject() // to Spherical Mercator Projection
            );

        var zoom = 16;

        let markers = new OpenLayers.Layer.Markers("Markers");
        map.addLayer(markers);

        markers.addMarker(new OpenLayers.Marker(lonLat));

        map.setCenter(lonLat, zoom);

        let trimmer=0;

        
        function move() {
            

            markers.destroy();
            

            if(trimmer==1)
            {
                
                newMarker(10.022154,44.680667);
                trimmer--;
            }
            else
            if(trimmer==0)
            {
                
                newMarker(10.027399,44.681493);
                trimmer++;
            }
            
        }

        
        function newMarker(lon,lat) {
             
            var lonLat = new OpenLayers.LonLat(lon, lat)
                .transform(
                    new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
                    map.getProjectionObject() // to Spherical Mercator Projection
                );

            var zoom = 16;

            markers = new OpenLayers.Layer.Markers("Markers");
            map.addLayer(markers);

            markers.addMarker(new OpenLayers.Marker(lonLat));
            map.setCenter(lonLat, zoom);
        }
    