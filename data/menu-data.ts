import type { IMenuDT } from "@/types/menu-d-t";

// menu data 
const menu_data: IMenuDT[] = [
  {
    id: 1,
    title: "Home",
    link: "#",
    home_dropdown: true,
    sub_menus: [
      {link: "/", title: "Home 01", img: '/images/menu/home-1.jpg'},
      {link: "/home-2", title: "Home 02", img:'/images/menu/home-2.jpg' },
      {link: "/home-3", title: "Home 03", img:'/images/menu/home-3.jpg' },
      {link: "/home-4", title: "Home 04", img: '/images/menu/home-4.jpg' },
      {link: "/home-5", title: "Home 05", img: '/images/menu/home-5.jpg' },
      {link: "/home-6", title: "Home 06", img: '/images/menu/home-8.jpg' },
      {link: "/home-7", title: "Home 07", img: '/images/menu/home-7.jpg' },
      {link: "/home-8", title: "Home 08", img: '/images/menu/home-6.jpg' }, 
    ],
    mobile_menus: [
      {link: "/", title: "Freelancer"},
      {link: "/home-2", title: "Interface Designer"},
      {link: "/home-3", title: "Web Developer"},
      {link: "/home-4", title: "Photographer"},
      {link: "/home-5", title: "Fashion Designer"},
      {link: "/home-6", title: "Portfolio Slider 01"},
      {link: "/home-7", title: "Portfolio Slider 02"},
      {link: "/home-8", title: "Portfolio Slider 03"},
    ],
  },
  {
    id: 2,
    title: "About Me",
    link: "/about",
    has_dropdown: false,
  },

  {
    id: 3,
    title: "Services",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: "/service", title: "Service" },
      { link: "/service-details", title: "Service Details" },
    ],
  },
  {
    id: 4,
    title: "Portfolio",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: "/portfolio", title: "Portfolio" },
      { link: "/portfolio-details", title: "Portfolio Details" },
      { link: "/portfolio-details-2", title: "Portfolio Details 02" },
      { link: "/portfolio-details-3", title: "Portfolio Details 03" },
    ],
  },
  {
    id: 5,
    title: "Blog",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: "/blog", title: "Blog List" },
      { link: "/blog-sidebar", title: "Blog Sidebar" },
      { link: "/blog-details/6", title: "Blog Details" },
      { link: "/blog-details-2", title: "Blog Details 02" },
    ],
  },
  {
    id: 6,
    title: "Contact",
    link: "/contact",
    has_dropdown: false,
  },
];
export default menu_data;