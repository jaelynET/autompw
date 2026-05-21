import { SORT_OPTIONS } from "@/app/constants";

export const tubsConfig = {
  filters: [
    {
      type: "range",
      filterKey: "width",
      label: "Width",
      presets: [
        {
          label: "Up to 59 in",
          min: 0,
          max: 59,
        },
        {
          label: "60-64 in",
          min: 60,
          max: 64,
        },
        {
          label: "65-69 in",
          min: 65,
          max: 69,
        },
        {
          label: "70 in and above",
          min: 70,
          max: 1000,
        },
      ],
    },
    {
      type: "range",
      filterKey: "length",
      label: "Length",
      presets: [
        {
          label: "Up to 59 in",
          min: 0,
          max: 59,
        },
        {
          label: "60-64 in",
          min: 60,
          max: 64,
        },
        {
          label: "65-69 in",
          min: 65,
          max: 69,
        },
        {
          label: "70 in and above",
          min: 70,
          max: 1000,
        },
      ],
    },
    {
      type: "range",
      filterKey: "height",
      label: "Height",
      presets: [
        {
          label: "Up to 20 in",
          min: 0,
          max: 20,
        },
        {
          label: "21-22 in",
          min: 21,
          max: 22,
        },
        {
          label: "23-24 in",
          min: 23,
          max: 24,
        },
        {
          label: "25 in and above",
          min: 25,
          max: 1000,
        },
      ],
    },

    {
      type: "range",
      filterKey: "capacity",
      label: "Capacity",
      presets: [
        {
          label: "Up to 20 gal",
          min: 0,
          max: 20,
        },
        {
          label: "20-29 gal",
          min: 20,
          max: 29,
        },
        {
          label: "30-39 gal",
          min: 30,
          max: 39,
        },
        {
          label: "40-49 gal",
          min: 40,
          max: 49,
        },
        {
          label: "50-59 gal",
          min: 50,
          max: 59,
        },
        {
          label: "60 gal and above",
          min: 60,
          max: 1000,
        },
      ],
    },
    {
      type: "range",
      filterKey: "price",
      label: "Price",
      presets: [
        {
          label: "Up to $800",
          min: 0,
          max: 800,
        },
        {
          label: "$800-1000",
          min: 800,
          max: 1000,
        },
        {
          label: "$1000-$1400",
          min: 1000,
          max: 1400,
        },
        {
          label: "1900 and above",
          min: 1900,
          max: 100000,
        },
      ],
    },
    {
      type: "enum",
      filterKey: "drain",
      label: "Drain Placement",
      options: [
        { label: "Center Drain", value: "center" },
        { label: "Left Drain", value: "left" },
        { label: "Right Drain", value: "right" },
      ],
    },
    {
      type: "enum",
      filterKey: "color",
      label: "Color",
      options: [
        { label: "white", value: "white" },
        { label: "matte white", value: "matte white" },
        { label: "black", value: "black" },
        { label: "gray", value: "gray" },
      ],
    },
  ],
  sorts: SORT_OPTIONS,
};
