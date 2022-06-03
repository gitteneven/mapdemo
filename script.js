let userLat;
let userLong;



const init = ()=> {
    console.log('map loaded')
    const map = new ol.Map({
            target: 'map',
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([3.263068, 50.831396]),
                zoom: 18
            })
        });

    const layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: [
                new ol.Feature({
                    geometry: new ol.geom.Point(ol.proj.fromLonLat([3.263068, 50.831396]))
                })
            ]
        })
    });
    map.addLayer(layer);

    const layer2 = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: [
                new ol.Feature({
                    geometry: new ol.geom.Point(ol.proj.fromLonLat([4.484396, 51.922437]))
                })
            ]
        })
    });
    map.addLayer(layer2);

        const succesCallback = (position) => {
            userLat = position.coords.latitude;
            document.getElementById('latitude').textContent= userLat;
            userLong = position.coords.longitude;
            document.getElementById('longitude').textContent= userLong;

            console.log(userLat, userLong)
            const user = new ol.layer.Vector({
                    source: new ol.source.Vector({
                        features: [
                            new ol.Feature({
                                geometry: new ol.geom.Point(ol.proj.fromLonLat([userLong, userLat]))
                            })
                        ]
                    }),
                    style: new Style({
                        fill: new Fill({
                            color:'red'
                        })
                    })
                }); 
            map.addLayer(user);
        };

        const errorCallback = (error) => {
            console.log(error);
        };

       const watchId =  navigator.geolocation.watchPosition(succesCallback, errorCallback);


    
        
        


};

window.onload=init();

