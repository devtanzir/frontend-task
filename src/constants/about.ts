import { createId } from "@/lib/utils";

export const services = [
    {
        id: createId(),
        photo: "/images/parcel-box.png",
        title: "Fast Delivery",
        description: "Within 30 minutes",
      },
      {
        id: createId(),
        photo: "/images/badge.png",
        title: "Best Quality",
        description: "Premium quality ingredients",
      },
      {
        id: createId(),
        photo: "/images/bag.png",
        title: "Eco-Friendly",
        description: "Sustainable packaging",
      },
]