// Google Map
function initMap() {
  // Map options
  var options = {
    zoom: 12,
    center: { lat: -37.8183, lng: 144.9671 },
    styles: [
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          {
            color: '#e9e9e9',
          },
          {
            lightness: 17,
          },
        ],
      },
      {
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [
          {
            color: '#f5f5f5',
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#ffffff',
          },
          {
            lightness: 17,
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#ffffff',
          },
          {
            lightness: 29,
          },
          {
            weight: 0.2,
          },
        ],
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [
          {
            color: '#ffffff',
          },
          {
            lightness: 18,
          },
        ],
      },
      {
        featureType: 'road.local',
        elementType: 'geometry',
        stylers: [
          {
            color: '#ffffff',
          },
          {
            lightness: 16,
          },
        ],
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [
          {
            color: '#f5f5f5',
          },
          {
            lightness: 21,
          },
        ],
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [
          {
            color: '#dedede',
          },
          {
            lightness: 21,
          },
        ],
      },
      {
        elementType: 'labels.text.stroke',
        stylers: [
          {
            visibility: 'on',
          },
          {
            color: '#ffffff',
          },
          {
            lightness: 16,
          },
        ],
      },
      {
        elementType: 'labels.text.fill',
        stylers: [
          {
            saturation: 36,
          },
          {
            color: '#333333',
          },
          {
            lightness: 40,
          },
        ],
      },
      {
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [
          {
            color: '#f2f2f2',
          },
          {
            lightness: 19,
          },
        ],
      },
      {
        featureType: 'administrative',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#fefefe',
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#fefefe',
          },
          {
            lightness: 17,
          },
          {
            weight: 1.2,
          },
        ],
      },
    ],
    // disable the default User Interface
    disableDefaultUI: true,
    // add back fullscreen, zoom
    zoomControl: true,
    fullscreenControl: true,
  };

  // New map
  var map = new google.maps.Map(document.getElementById('map'), options);

  // Marker options
}

// Form message counter

// Message character limit
const maxLength = 180;
// Reference to form text area
let messageArea = document.getElementById('form-input-message');

// Event listener for characters intered in the form textarea
messageArea.addEventListener('input', (e) => {
  // Update remaining characters
  let messageLength = e.currentTarget.value.length;
  let charRemaining = maxLength - messageLength;

  // Update the character count
  var displayCounter = document.getElementById('message-limit-counter');
  if (displayCounter) {
    displayCounter.textContent = charRemaining;
  }
});

// Form validation
