import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";


export const plans = [
    {
        name: "Arcade",
        icon: arcade,
        price_per_mo: "9",
        price_per_yr: "90",
        deal: "2"
    },
    {
        name: "Advanced",
        icon: advanced,
        price_per_mo: "12",
        price_per_yr: "120",
        deal: "2"
    },
    {
        name: "Pro",
        icon: pro,
        price_per_mo: "15",
        price_per_yr: "150",
        deal: "2"
    }
];

export const tools = [
    {
        lead: "Online service",
        desc: "Access to multiplayer games",
        price_per_mo: "1",
        price_per_yr: "10",
    },
    {
        lead: "Larger storage",
        desc: "Extra 1TB of cloud save",
        price_per_mo: "2",
        price_per_yr: "20",
    },
    {
        lead: "Customizable profile",
        desc: "Custom theme on your profile",
        price_per_mo: "2",
        price_per_yr: "20",
    }
];