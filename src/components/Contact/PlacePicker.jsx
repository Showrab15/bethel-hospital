import { useEffect } from "react";

const PlacePicker = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://ajax.googleapis.com/ajax/libs/@googlemaps/extended-component-library/0.6.11/index.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Once the script is loaded, initialize the place picker.
      const placePicker = document.querySelector('gmpx-place-picker');
      placePicker.placeholder = "Enter an address";

      placePicker.addEventListener('gmpx-placechange', () => {
        const place = placePicker.value;
        if (!place.location) {
          alert(`No details available for input: '${place.name}'`);
          return;
        }
        console.log("Place details:", place);
      });
    };
  }, []);

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="text-left">
        <gmpx-api-loader key="YOUR_GOOGLE_MAPS_API_KEY" solution-channel="GMP_GE_placepicker_v2"></gmpx-api-loader>
        <gmpx-place-picker className="w-full max-w-md" placeholder="Enter an address"></gmpx-place-picker>
      </div>
    </div>
  );
};

export default PlacePicker;
