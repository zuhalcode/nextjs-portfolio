import img1 from "../public/assets/portfolio1.png";
import img2 from "../public/assets/portfolio3.jpg";
import img3 from "../public/assets/portfolio2.jpg";
import img4 from "../public/assets/portfolio4.png";
import img5 from "../public/assets/anjay.png";

export const portfolios = [
  {
    title: "Petona Online Shop",
    img: img1,
    github: true,
    liveDemo: true,
    gitUrl: "https://github.com/zuhalcode/laravel-petona-project",
    liveUrl: "https://petona.id",
  },
  {
    title: "Ruesto Restaurant Website",
    img: img2,
    github: true,
    gitUrl: "https://github.com/zuhalcode/nextjs-restaurant-web",
    liveDemo: true,
    liveUrl: "https://ruesto-app.netlify.app/",
  },
  {
    title: "Restaurant Mobile Application",
    img: img3,
    github: true,
    liveDemo: false,
    gitUrl: "https://github.com/zuhalcode/ruesto-apk",
  },
  {
    title: "Bookly Online Booking System",
    img: img4,
    liveDemo: true,
    liveUrl: "https://bookly.boothlab.id/bookly",
  },
  {
    title: "Restaurant REST API",
    img: img5,
    github: true,
    gitUrl: "https://github.com/zuhalcode/ruesto-api",
  },
];
