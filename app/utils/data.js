import colors from "../config/colors";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../../app/assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T1",
    description: "D1",
    image: require("../../app/assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "T1",
    description: "D1",
    image: require("../../app/assets/mosh.jpg"),
  },
];

const IconData = {
  name: "email",
  iconColor: "primary",
  size: 30,
  backgroundColor: colors.medium,
};

const menuItems = [
  {
    id: 1,
    title: "My Listings",
    description: "",
    image: require("../../app/assets/mosh.jpg"),
    icon: IconData,
  },
  {
    id: 2,
    title: "My Listings",
    description: "",
    image: require("../../app/assets/mosh.jpg"),
    icon: IconData,
  },
  {
    id: 3,
    title: "My Listings",
    description: "",
    image: require("../../app/assets/mosh.jpg"),
    icon: IconData,
  },
];

const categories = [
  {
    label: "My Listings",
    iconColor: "primary",
    size: 30,
    value: 1,
    backgroundColor: colors.primary,
  },
  {
    label: "My  Clothingd",
    iconColor: "primary",
    size: 30,
    value: 1,
    backgroundColor: colors.secondary,
  },
  {
    label: "My Wearables",
    iconColor: "primary",
    size: 30,
    value: 1,
    backgroundColor: colors.medium,
  },
  {
    label: "My Furnitures",
    iconColor: "primary",
    size: 30,
    value: 1,
    backgroundColor: colors.tomato,
  },
];

export { initialMessages, menuItems, categories };
