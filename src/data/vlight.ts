export type VlightProduct = {
  name: string;
  spec: string;
  icon: "bulb" | "tube" | "panel" | "cob" | "focus" | "track" | "flood" | "street" | "solar";
  img?: string;
};

export type VlightSegment = {
  id: string;
  label: string;
  products: VlightProduct[];
};

export const vlightSegments: VlightSegment[] = [
  {
    id: "domestic",
    label: "Domestic",
    products: [
      { name: "LED Bulb", spec: "9W / 18W / 50W", icon: "bulb", img: "/vlight/led-bulb.png" },
      { name: "Tube Light", spec: "20W", icon: "tube", img: "/vlight/tube-light.png" },
      { name: "Panel Light", spec: "9W / 20W / 30W / 40W", icon: "panel", img: "/vlight/panel-light.png" },
    ],
  },
  {
    id: "decorative",
    label: "Decorative",
    products: [
      { name: "COB Light", spec: "Warm & cool variants", icon: "cob", img: "/vlight/cob-light.png" },
      { name: "Focus Light", spec: "Recessed spot", icon: "focus", img: "/vlight/focus-light.png" },
      { name: "Track Light", spec: "Adjustable head", icon: "track", img: "/vlight/track-light.png" },
    ],
  },
  {
    id: "outdoor",
    label: "Outdoor",
    products: [
      { name: "Flood Light", spec: "30W / 50W / 100W / 200W", icon: "flood", img: "/vlight/flood-light.png" },
      { name: "Street Light", spec: "30W / 36W / 50W / 100W", icon: "street", img: "/vlight/street-light.png" },
      { name: "Solar Street Light", spec: "30AH / 60AH", icon: "solar", img: "/vlight/solar-street-light.png" },
    ],
  },
];

export const vlightStats = [
  { value: "3+", label: "Product Segments" },
  { value: "15+", label: "SKUs Manufactured" },
  { value: "100%", label: "In-house QC Tested" },
  { value: "IP65", label: "Outdoor Rated Range" },
];
