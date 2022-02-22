/*
//import React from "react";
// import Carousel from "react-material-ui-carousel";
// import E1 from "../images/E1.jpg";
// import E2 from "../images/E2.jpg";
// import "../App.css"

// export default function Carousell(props) {
  */
//   const items = [{ image: [E1] }, { image: [E2] }];

//   return (
//     <>
//     <Carousel className="car">
//       {items.map((item) => (
//         <img style={{ height: "100px"}} src={item.image} />
//       ))}
//     </Carousel>
//     <Carousel className="car">
//       {items.map((item) => (
//         <img style={{ align: "center",height: "100px"}} src={item.image} />
//       ))}
//     </Carousel>
//     </>
//   );
// }

import { Carousel } from 'react-carousel-minimal';
import E1 from "../images/E1.jpg";
import E2 from "../images/E2.jpg";
import E3 from "../images/E3.jpeg";
import E4 from "../images/E4.jpg";
import E5 from "../images/E5.jpg";
import E8 from "../images/E8.jpg";
import E9 from "../images/E9.jpg";
import E11 from "../images/E11.jpg";
import E12 from "../images/E13.jpg";
import E13 from "../images/E15.jpg";

function Car() {
  const data = [
    {
      data: [
        {
          image: [E1]
        },
        {
          image: [E2]
        },
      ],
      image: [E4],
      name: "iphone-13-pro-max",
      description:
        "Highlights :-1 TB ROM  17.02 cm (6.7 inch) Super Retina XDR Display  12MP + 12MP + 12MP  12MP Front Camera A15 Bionic Chip Processor  colors :-Gold,Graphite,Sierra Blue,Silver",
      price: 179900,
    },
    {
      data: [
        {
          image: [E1]
        },
        {
          image: [E2]
        },
      ],
      image: [E2],
      name: "Samsung Galaxy M32 5G",
      description:
        "Highlights :-8 GB RAM | 128 GB ROM | Expandable Upto 1 TB | 16.51 cm (6.5 inch) HD+ Display | 48MP + 8MP + 5MP + 2MP | 13MP Front Camera | 5000 mAh Battery | Dimensity 720 5G Processor",
      price: 23500,
    },
    {
      data: [
        {
          image: [E1]
        },
        {
          image: [E2]
        },
      ],
      image: [E13],
      name: "Vivo V23 5G",
      description:
        "8 GB RAM | 128 GB ROM | 16.36 cm (6.44 inch) Full HD+ Display | 64MP + 8MP + 2MP | 50MP + 8MP Dual Front Camera | 4200 mAh Lithium Battery | Mediatek Dimensity 920 Processo | colors :- Sunshine Gold,StarDust Black",
      price: 29900,
    },
    {
      data: [
        {
          image: [E1]
        },
        {
          image: [E2]
        },
      ],
      image: [E8],
      name: "Oppo Reno7 Pro 5G",
      description:
        "12 GB RAM | 256 GB ROM | 16.51 cm (6.5 inch) Full HD+ AMOLED Display | 50MP + 8MP + 2MP | 32MP Front Camera | 4500 mAh Lithium-ion Polymer Battery | MediaTek Dimensity 1200-Max Processor | 65W SuperVOOC | OPPO Sony IMX766 Flagship Rear Camera Sensor | Aircraft-Grade Shooting Star Design | OPPO Glow",
      price: 39999,
    },
    {
      data: [
        {
          image: [E1]
        },
        {
          image: [E2]
        },
      ],
      image: [E2],
      name: "DELL Inspiron Core i5 11th Gen",
      description:
        "(8 GB/256 GB SSD/Windows 10) Inspiron 3511 Thin and Light Laptop  (15.6 inch, Carbon, 1.85 kg, With MS Office) | Highlights :-Stylish & Portable Thin and Light Laptop | 15.6 inch Full HD Anti Glare | Light Laptop without Optical Disk Drive ",
      price: 56190,
    },
    {
      data: [
        {
          image: [E1]
        },
        {
          image: [E2]
        },
      ],
      image: [E3],
      name: "HP Pavilion Ryzen 5 Hexa Core 5600H",
      description:
        "(8 GB/512 GB SSD/Windows 10 Home/4 GB Graphics/NVIDIA GeForce GTX 1650/144 Hz) 15-ec2004AX Gaming Laptop  (15.6 inch, Shadow Black, 1.98 kg) |Highlights :- NVIDIA GeForce GTX 1650 | 15.6 inch Full HD WLED-Backlit IPS Anti-glare Micro-edge Display (Brightness: 250 nits, 141 PPI, Color Gamut: 45% NTSC) | Light Laptop without Optical Disk Drive | Pre-installed Genuine Windows 10 OS",
      price: 60990,
    },
    {
      data: [
        {
          image: [E1]
        },
        {
          image: [E2]
        },
      ],
      image: [E1],
      name: "acer Swift 5 Core i7 11th Gen Intel EVO",
      description:
        "(16 GB/1 TB SSD/Windows 10 Home) SF514-55TA-72VG Thin and Light Laptop  (14 inch, Mist Green, 1.05 kg) | Stylish & Portable Thin and Light Laptop | 14 inch Full HD LED Backlit ComfyView IPS Touch Display (340 nits Brightness, 100% sRGB Color Gamut, 16:9 Aspect Ratio) | Finger Print Sensor for Faster System Access | Light Laptop without Optical Disk Drive",
      price: 94190,
    },
    {
      data: [
        {
          image: [E1]
        },
        {
          image: [E2]
        },
      ],
      image: [E9],
      name: "realme Buds",
      description:
        "With Mic:Yes | Bluetooth version: 5.0 | Wireless range: 10 m | Battery life: 22 hrs | Charging time: 50 mins | 13.6mm Bass Boost Driver | Active Noise Cancellation | Vocplus AI Noise Cancellation for Calls | IPX5 Water Resistant | 88ms Low Latency Gaming model | Dart Charge ( 10min charge = 12hrs Playtime) | Magnetic Earbuds | Google Fast Pair | Works with realme Link app",
      price: 2300,
    },
    {
      data: [
        {
          image: [E1]
        },
        {
          image: [E2]
        },
      ],
      image: [E12],
      name: "SONY WF-XB700",
      description:
        "With Mic:Yes | Bluetooth version: 5 | Wireless range: 10 m | Battery life: 9 hrs | Charging time: 2.5 hrs | colors :- Blue,Black",
      price: 8010,
    },
  ];
// //  const data = [
// //     {
// //       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
// //       caption: "San Francisco"
// //     },
// //     {
// //       image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
// //       caption: "Scotland"
// //     },
// //     {
// //       image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
// //       caption: "Darjeeling"
// //     },
// //     {
// //       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
// //       caption: "San Francisco"
// //     },
// //     {
// //       image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
// //       caption: "Scotland"
// //     },
// //     {
// //       image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
// //       caption: "Darjeeling"
// //     },
// //     {
// //       image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
// //       caption: "San Francisco"
// //     },
// //     {
// //       image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
// //       caption: "Scotland"
// //     },
// //     {
// //       image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
// //       caption: "Darjeeling"
// //     }
// //   ];

  return (

          <>
          {/* <Carousel
            data={data}
            time={2000}
            width="400px"
            height="300px"
            radius="10px"
            slideNumber={true}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          /> */}
          <Carousel
          data={data}
          time={2000}
          width="400px"
          height="300px"
          radius="10px"
          slideNumber={true}
          captionPosition="bottom"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          style={{
            textAlign: "center",
            maxWidth: "850px",
            maxHeight: "500px",
            margin: "40px auto",
          }}
        />
        </>
  );
}

export default Car  ;

// import React from "react";
// import "../images";

// export default function Carousell() {
//   return (
//     <>
//       <div
//         id="carouselExampleSlidesOnly"
//         class="carousel slide"
//         data-bs-ride="carousel"
//       >
//         <div class="carousel-inner">
//           <div class="carousel-item active">
//             <img src="../images/E1" class="d-block w-100" />
//           </div>
//           <div class="carousel-item">
//             <img src="../images/E1" class="d-block w-100" />
//           </div>
//           <div class="carousel-item">
//             <img src="../images/E1" class="d-block w-100"/>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }