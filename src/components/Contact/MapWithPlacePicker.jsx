import { useEffect } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const MapWithPlacePicker = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://ajax.googleapis.com/ajax/libs/@googlemaps/extended-component-library/0.6.11/index.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const map = document.querySelector('gmp-map');
      const marker = document.querySelector('gmp-advanced-marker');
      const placePicker = document.querySelector('gmpx-place-picker');
      const infowindow = new google.maps.InfoWindow();

      map.innerMap.setOptions({
        mapTypeControl: false
      });

      placePicker.addEventListener('gmpx-placechange', () => {
        const place = placePicker.value;

        if (!place.location) {
          alert(`No details available for input: '${place.name}'`);
          infowindow.close();
          marker.position = null;
          return;
        }

        if (place.viewport) {
          map.innerMap.fitBounds(place.viewport);
        } else {
          map.center = place.location;
          map.zoom = 17;
        }

        marker.position = place.location;
        infowindow.setContent(
          `<strong>${place.displayName}</strong><br>
           <span>${place.formattedAddress}</span>`
        );
        infowindow.open(map.innerMap, marker);
      });
    };
  }, []);

  return (
    <div className="h-screen">
      <Wrapper apiKey="YOUR_GOOGLE_MAPS_API_KEY" render={(status) => {
        if (status === Status.LOADING) return <p>Loading...</p>;
        if (status === Status.FAILURE) return <p>Error loading map.</p>;
      }}>
        <gmp-map center="40.749933,-73.98633" zoom="13" map-id="DEMO_MAP_ID">
          <div slot="control-block-start-inline-start" className="place-picker-container p-5">
            <gmpx-place-picker placeholder="Enter an address" className="w-full max-w-md" />
          </div>
          <gmp-advanced-marker></gmp-advanced-marker>
        </gmp-map>
      </Wrapper>
    </div>
  );
};

export default MapWithPlacePicker;
