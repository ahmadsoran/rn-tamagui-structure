import React from "react";
import { ActivityIndicator } from "react-native-paper";
import WebView from "react-native-webview";
type Props = {
  longitude: number;
  latitude: number;
};
export default function Map({ latitude, longitude }: Props) {
  if (longitude && latitude) {
    return (
      <WebView
        style={{ flex: 1 }}
        source={{
          html: `
              <html>
                <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.min.css" />
                </head>
                <body>
                <div id='map' style='height: 100%;'></div>
                
                <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.min.js"></script>
                <script>
                var map = L.map('map').setView([${latitude}, ${longitude}], 20);
     
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    var myIcon = L.icon({
       // red icon marker from imgur
      iconUrl: "https://www.valomnia.com/wp-content/uploads/2017/03/marker.png",
      iconSize: [64, 64],
     });
    
    var marker = L.marker([${latitude}, ${longitude}], {icon: myIcon}).addTo(map)
      .bindPopup('Hello, this is a marker!')
      .on('click', function() {
        alert('Marker clicked!');
      });
                </script>
                </body>
              </html>
              `,
        }}
        startInLoadingState
        renderLoading={() => <ActivityIndicator size="large" />}
        automaticallyAdjustContentInsets
        cacheEnabled
        renderError={() => <ActivityIndicator size="large" />}
      />
    );
  }
  return null;
}
