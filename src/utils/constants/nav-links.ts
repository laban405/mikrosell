import { FileText, HelpCircleIcon, NewspaperIcon, QrCodeIcon, Rotate3D, WaypointsIcon, CarIcon, ShoppingCartIcon, CodeIcon } from "lucide-react";

export const NAV_LINKS = [
    {
        title: "Work",
        href: "/work",
    },
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Contact",
        href: "/contact",
    },
    {
        title: "Products",
        href: "/products",
        menu: [
            {
                title: "Mikrosell Carwash POS",
                tagline: "Built for modern car wash businesses with real-time tracking and mobile payments.",
                href: "/products/carwash-pos",
                icon: CarIcon,
            },
            {
                title: "Next.js SEO Blog Platform",
                tagline: "Core Web Vitals optimized with blazing speed and unbeatable rankings.",
                href: "/products/seo-blog",
                icon: FileText,
            },
            {
                title: "Zuri Household E-commerce",
                tagline: "Mobile-first marketplace with full payment integration.",
                href: "/products/ecommerce",
                icon: ShoppingCartIcon,
            },
            {
                title: "Custom Software Development",
                tagline: "Mobile apps, web apps, SaaS platforms, and enterprise systems.",
                href: "/products/custom-software",
                icon: CodeIcon,
            },
        ],
    },
];
