import { SORT_OPTIONS } from "@/app/constants";

export const faucetsConfig = {
  filters: [
    {
      type: "enum",
      filterKey: "finish",
      label: "Finish",
      options: [
        {
          label: "Brushed Gold",
          value: "brushed gold",
        },
        {
          label: "Polished Chrome",
          value: "polished chrome",
        },
        {
          label: "Matte Black",
          value: "matte black",
        },
      ],
    },
    {
      type: "enum",
      filterKey: "mount",
      label: "Mount Type",
      options: [
        {
          label: "Wall Mounted",
          value: "wall",
        },
        {
          label: "Floor Mounted",
          value: "floor",
        },
        {
          label: "Deck Mounted",
          value: "deck",
        },
      ],
    },
    {
      type: "range",
      filterKey: "price",
      label: "Price",
      presets: [
        {
          label: "Under $150",
          min: 0,
          max: 150,
        },
        {
          label: "$150-$200",
          min: 159,
          max: 200,
        },
        {
          label: "$200-$350",
          min: 200,
          max: 350,
        },
        {
          label: "350-$500",
          min: 350,
          max: 500,
        },
        {
          label: "$500-$700",
          min: 500,
          max: 700,
        },
        {
          label: "$700 and above",
          min: 700,
          max: 100000,
        },
      ],
    },
  ],
  sorts: SORT_OPTIONS,
};
