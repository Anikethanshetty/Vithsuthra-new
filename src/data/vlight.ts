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
      { name: "LED Bulb", spec: "9W / 18W / 50W", icon: "bulb" },
      { name: "Tube Light", spec: "20W", icon: "tube" },
      { name: "Panel Light", spec: "9W / 20W / 30W / 40W", icon: "panel" },
    ],
  },
  {
    id: "decorative",
    label: "Decorative",
    products: [
      { name: "COB Light", spec: "Warm & cool variants", icon: "cob" },
      { name: "Focus Light", spec: "Recessed spot", icon: "focus" },
      { name: "Track Light", spec: "Adjustable head", icon: "track" },
    ],
  },
  {
    id: "outdoor",
    label: "Outdoor",
    products: [
      { name: "Flood Light", spec: "30W / 50W / 100W / 200W", icon: "flood" },
      { name: "Street Light", spec: "30W / 36W / 50W / 100W", icon: "street" },
      { name: "Solar Street Light", spec: "30AH / 60AH", icon: "solar" },
    ],
  },
];

export const vlightStats = [
  { value: "3+", label: "Product Segments" },
  { value: "15+", label: "SKUs Manufactured" },
  { value: "100%", label: "In-house QC Tested" },
  { value: "IP65", label: "Outdoor Rated Range" },
];
