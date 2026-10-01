const address = "1640 Highland Falls, Suite 802, Leander, TX 78641";
const encodedAddress = encodeURIComponent(address);

export const officeLocation = {
  address,
  longitude: -97.8112136,
  latitude: 30.5678292,
  mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`,
} as const;

export const mapLinkAttributes = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
