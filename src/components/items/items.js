import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import NavScrollExample from "../navbar/navbar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './items.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Filter from "../filter/filter";
function Item() {
    const [data, setData] = [
        {
            mens: [
                {
                    id: 1,
                    productName: "Getchi",
                    Price: 498,
                    img: "https://imagescdn.louisphilippe.com/img/app/product/7/794483-9329959.jpg?auto=format",
                    title: "Men's Plain Shiny Solid Full Sleeves Regular Fit Formal Shirts",
                    brand: "gucii",
                    color: "black",
                    type: "mens"
                }
                ,
                {
                    id: 2,
                    productName: "Dennis Lingo",
                    Price: 499,
                    img: "https://imagescdn.louisphilippe.com/img/app/product/7/710038-7748329.jpg?auto=format",
                    title: "Men's Cotton Slim Fit Casual Shirt (C615)",
                    brand: "allen solly",
                    color: "blue",
                    type: "mens"
                }
                ,
                {
                    id: 3,
                    productName: "Diverse",
                    Price: 829,
                    img: "https://imagescdn.louisphilippe.com/img/app/product/6/641574-6399250.jpg?auto=format",
                    title: "Men Casual Shirt",
                    brand: "gucii",
                    color: "grey",
                    type: "mens"
                }
                ,
                {
                    id: 4,
                    productName: "IndoPrimo",
                    Price: 310,
                    img: "https://imagescdn.louisphilippe.com/img/app/product/7/721905-7994133.jpg?auto=format",
                    title: "Men's Cotton Casual Regular Fit Shirt for Men Full Sleeves",
                    brand: "indoprimo",
                    color: "blue",
                    type: "mens"
                }
                ,
                {
                    id: 5,
                    productName: "Dennis Lingo",
                    Price: 555,
                    img: "https://avsaram.in/wp-content/uploads/2022/12/1618467778.AP0048.jpg",
                    title: "Men's Solid Slim Fit Cotton Casual Shirt with Spread Collar & Full",
                    brand: "dennis",
                    color: "blue",
                    type: "mens"
                }
                ,
                {
                    id: 6,
                    productName: "casual shirt",
                    Price: 569,
                    img: "https://avsaram.in/wp-content/uploads/2022/12/07-scaled.jpg",
                    title: "Men's Slim Fit Casual Shirt",
                    brand: "dennis",
                    color: "white",
                    type: "mens"
                }
                ,
                {
                    id: 7,
                    productName: "IndoPrimo",
                    Price: 499,
                    img: "https://images-do.nyc3.cdn.digitaloceanspaces.com/lAVtCJXFVr/product_images/1671864219.WhatsApp_Image_2022-12-24_at_11.37.25_AM.jpeg",
                    title: "Men's Slim Fit Casual Shirt",
                    brand: "indoprimo",
                    color: "white",
                    type: "mens"
                }
                ,
                {
                    id: 8,
                    productName: "printed shirt",
                    Price: 549,
                    img: "https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/2/q/j/m-bnd-070-marmic-fab-original-imaghezgzahvzxfe.jpeg?q=70",
                    title: "Men's Regular Fit Casual Shirt",
                    brand: "indoprimo",
                    color: "blue",
                    type: "mens"
                }
                ,
                {
                    id: 9,
                    productName: "printed shirt",
                    Price: 539,
                    img: "https://images-do.nyc3.cdn.digitaloceanspaces.com/lAVtCJXFVr/product_images/1638351540.AP0015.jpeg",
                    title: "Men's Casual Shirt",
                    brand: "indoprimo",
                    color: "green",
                    type: "mens"
                }
                ,
                {
                    id: 10,
                    productName: "ADiverse",
                    Price: 489,
                    img: "https://images-do.nyc3.cdn.digitaloceanspaces.com/lAVtCJXFVr/product_images/1671863599.WhatsApp_Image_2022-12-24_at_11.37.01_AM.jpeg",
                    title: "Men's Regular Fit formal Shirt",
                    brand: "allen solly",
                    color: "white",
                    type: "mens"
                }
                ,
                {
                    id: 11,
                    productName: "Allen solley",
                    Price: 1056,
                    img: "https://images-do.nyc3.cdn.digitaloceanspaces.com/lAVtCJXFVr/product_images/1637990296.BKT003.jpeg",
                    title: "Men's Regular Fit formal Shirt",
                    brand: "indoprimo",
                    color: "blue",
                    type: "mens"
                }
                ,
                {
                    id: 12,
                    productName: "louise philip",
                    Price: 2500,
                    img: "https://images-do.nyc3.cdn.digitaloceanspaces.com/lAVtCJXFVr/product_images/1670923361.WhatsApp_Image_2022-12-13_at_1.21.59_PM(1).jpeg",
                    title: "Men's Regular Fit formal Shirt",
                    brand: "Allen solley",
                    color: "red",
                    type: "mens"
                }
            ]
            ,
            womens: [
                {
                    id: 1,
                    productName: "Generic",
                    Price: 700,
                    img: "https://cdn.shopify.com/s/files/1/0615/7539/7527/products/manan3086_800x.jpg?v=1668598298",
                    title: "Muse women classic women’s dress black fit and off shoulder",
                    brand: "BIBA",
                    color: "blue",
                    type: "womens"
                }
                ,
                {
                    id: 2,
                    productName: "Uptownie Lite",
                    Price: 622,
                    img: "https://cdn.shopify.com/s/files/1/0615/7539/7527/products/Manan4103_800x.jpg?v=1669877309",
                    title: "Women's Shirt Maxi Dress",
                    brand: "BIBA",
                    color: "grey",
                    type: "womens"
                }
                ,
                {
                    id: 3,
                    productName: "ishin",
                    Price: 998,
                    img: "https://cdn.shopify.com/s/files/1/0613/8622/7909/products/VintageTankGrey-2_1800x1800.jpg?v=1668239213",
                    title: "Women's Cotton Off White Zari Embellished A-Line Dress",
                    brand: "BIBA",
                    color: "blue",
                    type: "womens"
                }
                ,
                {
                    id: 4,
                    productName: "Shasmi",
                    Price: 589,
                    img: "https://cdn.shopify.com/s/files/1/0613/8622/7909/products/SHOT32-0629_1800x1800.jpg?v=1670841954",
                    title: "Women's Black & Rust Orange Floral Print Tiered Midi Fit & Flare",
                    brand: "BIBA",
                    color: "white",
                    type: "womens"
                }
                ,
                {
                    id: 5,
                    productName: "Shasmi",
                    Price: 689,
                    img: "https://cdn.shopify.com/s/files/1/0613/8622/7909/products/RibSkaterDressPink-2_1800x1800.jpg?v=1654603083",
                    title: "Women's Georgette Digital Floral Printed Gown Dress for Women",
                    brand: "ONLY",
                    color: "pink",
                    type: "womens"
                }
                ,
                {
                    id: 6,
                    productName: "Serein",
                    Price: 479,
                    img: "https://cdn.shopify.com/s/files/1/0613/8622/7909/products/SHOT21-0036C11_1800x1800.jpg?v=1668081225",
                    title: "Women's Kaftan Midi Dress (Printed Chiffon Kaftan with Waist",
                    brand: "ONLY",
                    color: "blue",
                    type: "womens"
                }
                ,
                {
                    id: 7,
                    productName: "RARE",
                    Price: 652,
                    img: "https://cdn.shopify.com/s/files/1/0615/7539/7527/products/amara_linen_kurta_mango_-1_800x.jpg?v=1660739572",
                    title: "Women Casual Dress",
                    brand: "ONLY",
                    color: "yellow",
                    type: "womens"
                }
                ,
                {
                    id: 8,
                    productName: "Harpa",
                    Price: 742,
                    img: "https://cdn.shopify.com/s/files/1/0414/3552/9370/products/img_6100_800x.jpg?v=1593523920",
                    title: "Women's Polyester A-Line Knee-Length Dress",
                    brand: "ONLY",
                    color: "blue",
                    type: "womens"
                }
                ,
                {
                    id: 9,
                    productName: "DHRUVI TRENDZ",
                    Price: 395,
                    img: "https://cdn.shopify.com/s/files/1/0414/3552/9370/products/11a_956bf7e0-0051-48da-aa44-7ad6e57d59c2_800x.jpg?v=1651743057",
                    title: "Women Rayon Casual Wear Western Maxi Dress Gown for",
                    brand: "ZARA",
                    color: "yellow",
                    type: "womens"
                }
                ,
                {
                    id: 10,
                    productName: "Greciilooks",
                    Price: 399,
                    img: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011250939-Blue-Indigo-1000011250939_01-2100.jpg",
                    title: "Western Dresses for Women | A-Line Knee-Length Dress | Midi",
                    brand: "ZARA",
                    color: "blue",
                    type: "womens"
                }
                ,
                {
                    id: 11,
                    productName: "Harpa",
                    Price: 742,
                    img: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010832069-Blue-Blue-1000010832069_01-2100.jpg",
                    title: "Women's Polyester A-Line Knee-Length Dress",
                    brand: "ZARA",
                    color: "blue",
                    type: "womens"
                }
                ,
                {
                    id: 12,
                    productName: "DHRUVI TRENDZ",
                    Price: 395,
                    img: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010444516-Grey-Sage-1000010444516_01-2100.jpg",
                    title: "Women Rayon Casual Wear Western Maxi Dress Gown for",
                    brand: "ZARA",
                    color: "white",
                    type: "womens"
                }
            ]
            ,
            kids: [
                {
                    id: 1,
                    productName: "Generic",
                    Price: 700,
                    img: "https://cdn.shopify.com/s/files/1/0457/7519/2217/products/LP20221287_1_1500x1500.jpg?v=1641291400",
                    title: "Muse women classic women’s dress black fit and off shoulder",
                    brand: "Max",
                    color: "green",
                    type: "kids"
                }
                ,
                {
                    id: 2,
                    productName: "Uptownie Lite",
                    Price: 622,
                    img: "https://cdn.shopify.com/s/files/1/0457/7519/2217/products/LP20211234_2_1500x1500.jpg?v=1634804862",
                    title: "Women's Shirt Maxi Dress",
                    brand: "Max",
                    color: "white",
                    type: "kids"
                }
                ,
                {
                    id: 3,
                    productName: "ishin",
                    Price: 998,
                    img: "https://cdn.shopify.com/s/files/1/0457/7519/2217/products/LP20211241_2_1500x1500.jpg?v=1634837357",
                    title: "Women's Cotton Off White Zari Embellished A-Line Dress",
                    brand: "Max",
                    color: "blue",
                    type: "kids"
                }
                ,
                {
                    id: 4,
                    productName: "Shasmi",
                    Price: 589,
                    img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10715291a.webp",
                    title: "Women's Black & Rust Orange Floral Print Tiered Midi Fit & Flare",
                    brand: "Max",
                    color: "blue",
                    type: "kids"
                }
                ,
                {
                    id: 5,
                    productName: "Shasmi",
                    Price: 689,
                    img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11738193a.webp",
                    title: "Women's Georgette Digital Floral Printed Gown Dress for Women",
                    brand: "Lilliput",
                    color: "blue",
                    type: "kids"
                }
                ,
                {
                    id: 6,
                    productName: "Serein",
                    Price: 479,
                    img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/12703784a.webp",
                    title: "Women's Kaftan Midi Dress (Printed Chiffon Kaftan with Waist",
                    brand: "Lilliput",
                    color: "red",
                    type: "kids"
                }
                ,
                {
                    id: 7,
                    productName: "RARE",
                    Price: 652,
                    img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/12691735a.webp",
                    title: "Women Casual Dress",
                    brand: "Lilliput",
                    color: "black",
                    type: "kids"
                }
                ,
                {
                    id: 8,
                    productName: "Harpa",
                    Price: 742,
                    img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/12295884a.webp",
                    title: "Women's Polyester A-Line Knee-Length Dress",
                    brand: "Lilliput",
                    color: "black",
                    type: "kids"
                }
                ,
                {
                    id: 9,
                    productName: "DHRUVI TRENDZ",
                    Price: 395,
                    img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/12296264a.webp",
                    title: "Women Rayon Casual Wear Western Maxi Dress Gown for",
                    brand: "Babyhug",
                    color: "black",
                    type: "kids"
                }
                ,
                {
                    id: 10,
                    productName: "Greciilooks",
                    Price: 399,
                    img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11266902b.webp",
                    title: "Western Dresses for Women | A-Line Knee-Length Dress | Midi",
                    brand: "Babyhug",
                    color: "green",
                    type: "kids"
                }
                ,
                {
                    id: 11,
                    productName: "DHRUVI TRENDZ",
                    Price: 395,
                    img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11288205a.webp",
                    title: "Women Rayon Casual Wear Western Maxi Dress Gown for",
                    brand: "Babyhug",
                    color: "white",
                    type: "kids"
                }
                ,
                {
                    id: 12,
                    productName: "Greciilooks",
                    Price: 399,
                    img: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11534822a.webp",
                    title: "Western Dresses for Women | A-Line Knee-Length Dress | Midi",
                    brand: "Babyhug",
                    color: "green",
                    type: "kids"
                }
            ]
            ,
            electronics: [
                {
                    id: 1,
                    productName: "Samsung galaxy M04",
                    Price: 10499,
                    img: "https://m.media-amazon.com/images/I/21sdeq2G2FL.jpg",
                    title: "4GB RAM, 128GB Storage | Upto 8GB RAM with RAM Plus | MediaTek Helio P35 | 5000 mAh Battery",
                    brand: "Samsung",
                    color: "black",
                    type: "mobile"
                }
                ,
                {
                    id: 2,
                    productName: "samsung galaxy Z fold",
                    Price: 110499,
                    img: "https://i0.wp.com/shopfabcart.com/wp-content/uploads/2022/09/714QNdK8BWL._SX679.jpg?fit=679%2C679&ssl=1",
                    title: "Glass Orange, 4GB RAM, 64GB Storage| 50 MP AI Triple Camera| 2.3 Ghz Octa Core MTK Helio G37 |Side Fingerprint Sensor| Upto 7GB Expandable RAM",
                    brand: "samsung",
                    color: "silver",
                    type: "mobile"
                }
                ,
                {
                    id: 3,
                    productName: "jio phone",
                    Price: 8499,
                    img: "https://i0.wp.com/shopfabcart.com/wp-content/uploads/2022/09/61qacJf-mbL._SX679.jpg?fit=679%2C679&ssl=1",
                    title: "Carbon Black, 4GB RAM, 64GB Storage | Octa-core Helio G35 | 5000 mAh Battery",
                    brand: "jio",
                    color: "blue",
                    type: "mobile"
                }
                ,
                {
                    id: 4,
                    productName: "iq00 Z6",
                    Price: 16999,
                    img: "https://i0.wp.com/shopfabcart.com/wp-content/uploads/2022/09/61ocdmx9Y0L._SY741__2_7ee54f83-9e8f-4401-9825-223ceac936fe.jpg?fit=564%2C741&ssl=1",
                    title: "Matte Black, 6GB RAM, 128GB ROM| Dimensity 810 5G | 33W Pro Fast Charging | Charger Included | Additional Exchange Offers|Get 2 Months of YouTube Premium",
                    brand: "iq00",
                    color: "blue",
                    type: "mobile"
                }
                ,
                {
                    id: 5,
                    productName: "Oppo A77",
                    Price: 7499,
                    img: "https://www.addmecart.com/wp-content/uploads/2022/11/op19-1.jpg",
                    title: "Coral Green, 2GB RAM, 32GB Storage | 2GHz Octa-core Helio G25 Processor | 5000 mAh Battery",
                    brand: "Oppo",
                    color: "blue",
                    type: "mobile"
                }
                ,
                {
                    id: 6,
                    productName: "Redmi Note12",
                    Price: 6199,
                    img: "https://www.addmecart.com/wp-content/uploads/2022/12/sk523.png",
                    title: "Light Blue, 2GB RAM, 32GB Storage | Segment Best AI Dual Cam | 5000mAh Battery | Leather Texture Design | Android 12",
                    brand: "Redmi",
                    color: "white",
                    type: "mobile"
                }
                ,
                {
                    id: 7,
                    productName: "Azus ROG",
                    Price: 6999,
                    img: "https://www.addmecart.com/wp-content/uploads/2022/12/886.png",
                    title: "Carbon Black, 2GB RAM+32GB Storage Octa Core Processor | 6.5| inch Large Display",
                    brand: "Azus",
                    color: "black",
                    type: "mobile"
                }
                ,
                {
                    id: 8,
                    productName: "one plus nord",
                    Price: 1399,
                    img: "https://www.wizekart.com/10856-large_default/oneplus-nord-12gb-256gb-good-refurbished.jpg",
                    title: "Western Dresses for Women | A-Line Knee-Length Dress | Midi",
                    brand: "one plus",
                    color: "grey",
                    type: "mobile"
                }
                ,
                {
                    id: 9,
                    productName: "iphone 14 Pro max ",
                    Price: 11999,
                    img: "https://img5.gadgetsnow.com/gd/images/products/additional/large/G390858_View_1/mobiles/smartphones/apple-iphone-14-pro-max-256-gb-deep-purple-6-gb-ram-.jpg",
                    title: "Aqua Green, 4GB, 64GB Storage | 6000mAh Battery | Upto 8GB RAM with RAM Plus",
                    brand: "iphone",
                    color: "green",
                    type: "mobile"
                }
                ,
                {
                    id: 10,
                    productName: "iphone 14 plus",
                    Price: 18999,
                    img: "https://img4.gadgetsnow.com/gd/images/products/additional/original/G390794_View_1/mobiles/smartphones/apple-iphone-14-plus-128-gb-blue-4-gb-ram-.jpg",
                    title: "Black Dusk, 6GB RAM, 128GB Storage",
                    brand: "iphone",
                    color: "purple",
                    type: "mobile"
                }
                ,
                {
                    id: 11,
                    productName: "iphone 13 pro ",
                    Price: 11999,
                    img: "https://img6.gadgetsnow.com/gd/images/products/additional/large/G306210_View_1/mobiles/smartphones/apple-iphone-13-pro-128-gb-sierra-blue-6-gb-ram-.jpg",
                    title: "Aqua Green, 4GB, 64GB Storage | 6000mAh Battery | Upto 8GB RAM with RAM Plus",
                    brand: "iphone",
                    color: "blue",
                    type: "mobile"
                }
                ,
                {
                    id: 12,
                    productName: "iphone 12",
                    Price: 18999,
                    img: "https://img1.gadgetsnow.com/gd/images/products/additional/large/G201788_View_1/mobiles/smartphones/apple-iphone-12-128-gb-red-6-gb-ram-.jpg",
                    title: "Black Dusk, 6GB RAM, 128GB Storage",
                    brand: "iphone",
                    color: "red",
                    type: "mobile"
                }
                ,
                {
                    id: 13,
                    productName: "asus ROG strix",
                    Price: 30499,
                    img: "https://m.media-amazon.com/images/I/61bwqXfWiaL._SX450_.jpg",
                    title: " 12th Gen Intel Core i5-1235U 15.6 (39.62cm) FHD IPS Anti-Glare (16GB/512GB SDD/Windows 11/Office 2021/Backlit/1Yr Warranty/3months Game Pass/Stor",
                    brand: "asus",
                    color: "black",
                    type: "laptop"
                }
                ,
                {
                    id: 14,
                    productName: "Asus Tuf F15",
                    Price: 21134,
                    img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1663349324/Croma%20Assets/Computers%20Peripherals/Laptop/Images/250229_0_bmvrkc.png/mxw_1440,f_auto",
                    title: "(Renewed) Intel Core i5 6th Gen.6200u Processor 14.1 Inches HD Screen Notebook Computer (8 GB Ram & 256 GB SSD, Windows 10 Pro, 1.71Kg)",
                    brand: "Asus",
                    color: "black",
                    type: "laptop"
                }
                ,
                {
                    id: 15,
                    productName: "Mac book",
                    Price: 95499,
                    img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664423222/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256711_0_cjayuw.png/mxw_1440,f_auto",
                    title: ", 15.6-inch (39.62 cm) HD, Dual Core Intel Celeron N4020, Thin and Light Laptop (4GB RAM/256GB SSD/Integrated Graphics/Windows 11 Home/Transparent",
                    brand: "Mac",
                    color: "silver",
                    type: "laptop"
                }
                ,
                {
                    id: 16,
                    productName: "Asus vivo book",
                    Price: 19419,
                    img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1669461227/Croma%20Assets/Computers%20Peripherals/Laptop/Images/265856_oomoxk.png/mxw_1440,f_auto",
                    title: " 15.6 (39.62 cm) HD 220 nits Antiglare Thin and Light Laptop (4GB RAM/256GB SSD/DOS/Iron Grey/1.85 kg), 82C3A008IH",
                    brand: "Asus",
                    color: "black",
                    type: "laptop"
                }
                ,
                {
                    id: 17,
                    productName: "Lenova ideal pad 1",
                    Price: 29414,
                    img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664418987/Croma%20Assets/Computers%20Peripherals/Laptop/Images/257382_0_njzv7d.png/mxw_1440,f_auto",
                    title: "AMD Athlon Silver 3050U 8GB RAM/512GB SSD 15.6-inches/39.6 cm HD, Micro-Edge Display/Windows 11/AMD Radeon Graphics/Dual Speakers/MSO/Fast Charge/1.69 Kg, 15s-",
                    brand: "Lenovo",
                    color: "silver",
                    type: "laptop"
                }
                ,
                {
                    id: 18,
                    productName: "Lenovo IdeaPad Slim 3",
                    Price: 60199,
                    img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1663607721/Croma%20Assets/Computers%20Peripherals/Laptop/Images/245966_0_tmd50o.png/mxw_1440,f_auto",
                    title: " Intel Celeron N4020 4th Gen 15.6 (39.62cm) HD Thin & Light Laptop (8GB/256GB SSD/Windows 11/Office 2021/2Yr Warranty/3months Game Pass/Platinum",
                    brand: "Lenovo",
                    color: "silver",
                    type: "laptop"
                }
                ,
                {
                    id: 19,
                    productName: "dell inspiron 3000",
                    Price: 32159,
                    img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664432543/Croma%20Assets/Computers%20Peripherals/Laptop/Images/257027_0_zxmn53.png/mxw_1440,f_auto",
                    title: "11Th Gen Intel Core I9/17.3 Inches 4K Uhd Display/64Gb Ddr4 Ram/2Tb Ssd/1Tb HDD/RTX 3080 Graphics/Windows 10 Home/Per Key",
                    brand: "dell",
                    color: "black",
                    type: "laptop"
                }
                ,
                {
                    id: 20,
                    productName: "Dell alien ware",
                    Price: 342099,
                    img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1668596963/Croma%20Assets/Computers%20Peripherals/Laptop/Images/262987_kqgcqv.png/mxw_1440,f_auto",
                    title: "11Th Gen Intel Core I9/17.3 Inches 4K Uhd Display/64Gb Ddr4 Ram/2Tb Ssd/1Tb HDD/RTX 3080 Graphics/Windows 10 Home/Per Key",
                    brand: "dell",
                    color: "black",
                    type: "laptop"
                }
                ,
                {
                    id: 21,
                    productName: "HP 15S",
                    Price: 29822,
                    img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664418078/Croma%20Assets/Computers%20Peripherals/Laptop/Images/257161_0_hvgepf.png/mxw_1440,f_auto",
                    title: " AMD Athlon Silver 3050U, Win11 + Office 21, 8GB GDDR4, 256GB SSD, Radeon Graphics, 15.6 (39.62Cms) HD AG, Black (D560766WIN9BE, 1.68Kgs)",
                    brand: "hp",
                    color: "silver",
                    type: "laptop"
                }
                ,
                {
                    id: 22,
                    productName: "HP Pavilion",
                    Price: 21020,
                    img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1663346855/Croma%20Assets/Computers%20Peripherals/Laptop/Images/250210_0_aw5w7n.png/mxw_1440,f_auto",
                    title: "4GB DDR4 RAM / 1TB HDD / Windows 11 Home/ Black /Narrow Bezel / 1.9 Kg A314-22 with 14 inches (35.5 cm) HD Display Laptop",
                    brand: "hp",
                    color: "silver",
                    type: "laptop"
                }
                ,
                {
                    id: 23,
                    productName: "Mac Book Air 2022",
                    Price: 29822,
                    img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1657282863/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256602_zp9dz9.png/mxw_1440,f_auto",
                    title: " AMD Athlon Silver 3050U, Win11 + Office 21, 8GB GDDR4, 256GB SSD, Radeon Graphics, 15.6 (39.62Cms) HD AG, Black (D560766WIN9BE, 1.68Kgs)",
                    brand: "mac",
                    color: "silver",
                    type: "laptop"
                }
                ,
                {
                    id: 24,
                    productName: "Mac Book Pro 2022",
                    Price: 21020,
                    img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664412955/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256605_0_elrzey.png/mxw_1440,f_auto",
                    title: "4GB DDR4 RAM / 1TB HDD / Windows 11 Home/ Black /Narrow Bezel / 1.9 Kg A314-22 with 14 inches (35.5 cm) HD Display Laptop",
                    brand: "mac",
                    color: "silver",
                    type: "laptop"
                }
            ]
        }
    ]
    // data

    const [productData, setProductData] = useState(data)

    // routing
    const { search } = useLocation()
    const [query, setQuery] = useState(null)
    let params = undefined
    useEffect(() => {
        params = new URLSearchParams(search)
        setQuery(params.get("q"))
        categoryFilter(params.get("q"));
    }, [])

    // search Filter
    function changeHandeler(ans) {
        searchFilter(ans)
    }

    // defaultfilter
    const categoryFilter = (category) => {
        setProductData(data[category]);
    }

    // searchFilter
    function searchFilter(ans) {
        // debugger
        const inputSearch = data[query].filter((val) => {
            if (ans.trim().length === 0) {
                return val
            }
            else if (val.color.toLowerCase().includes(ans.toLowerCase())) {
                return val
            }
            else if (val.brand.toLowerCase().includes(ans.toLowerCase())) {
                return val
            }
            else if (val.productName.toLowerCase().includes(ans.toLowerCase())) {
                return val
            }
            else if (val.type.toLowerCase().includes(ans.toLowerCase())) {
                return val
            }
        })
        setProductData(inputSearch)
    }

    // input filter
    function getColor(value, checked) {


        const color = data[query].filter((val) => {
            if (checked == true) {
                return val.color == value
            }
            else {
                return val
            }
        })
        setProductData(color)


    }
    function getBrand(value, checked) {
        const brand = data[query].filter((val) => {
            if (checked == true) {
                return val.brand === value
            }
            else {
                return val
            }
            
        })
        setProductData(brand)
       
    }


    function getPrice(value, checked) {

        const price = data[query].filter((val) => {
            if (checked == true) {
                if (val.Price < value) {
                    return val
                }
            }
            else {
                return val
            }
            
        })
        setProductData(price)
        console.log(price);
        // console.log(brand);
    }


    return (
        <>
            <NavScrollExample name={changeHandeler} />
            <div className="items-filter">
                <div>
                    <Filter getColor={getColor} type={query} getBrand={getBrand} getPrice={getPrice} />
                </div>
                <div className="row items-sep">
                    {
                        Boolean(query) && productData.map((val, ind) => {
                            return (
                                <>
                                    <div key={ind} className="col items-crd" >
                                        <Card style={{ width: '18rem' }} className="item-card" >
                                            <div className="hide-img">
                                                <Link to={`/singleItem/?id=${val.id}&q=${query}`} ><Card.Img variant="top" src={val.img} height="350" /></Link>
                                            </div>
                                            <Card.Body>
                                                <Card.Title className="product-name">{val.productName}</Card.Title>
                                                <Card.Text className="price">${val.Price}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Item