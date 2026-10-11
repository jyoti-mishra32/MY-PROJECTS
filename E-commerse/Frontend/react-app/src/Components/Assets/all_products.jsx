// Product Images
import p1_img from './image_1.png'
import p2_img from './image_2.png'
import p3_img from './image_3.png'
import p4_img from './image_4.png'
import p5_img from './image_5.png'
import p6_img from './image_6.png'
import p7_img from './image_7.png'
import p8_img from './image_8.png'
import p9_img from './image_9.png'
import p10_img from './image_10.png'
import p11_img from './image_11.png'
import p12_img from './image_12.png'
import p13_img from './image_13.png'
import p14_img from './image_14.png'
import p15_img from './image_15.png'
import p16_img from './image_16.png'
import p17_img from './image_17.png'
import p18_img from './image_18.png'
import p19_img from './image_19.png'
import p20_img from './image_20.png'
import p21_img from './image_21.png'
import p22_img from './image_22.png'
import p23_img from './image_23.png'
import p24_img from './image_24.png'
import p25_img from './image_25.png'
import p26_img from './image_26.png'
import p27_img from './image_27.png'
import p28_img from './image_28.png'
import p29_img from './image_29.png'
import p30_img from './image_30.png'
import p31_img from './image_31.png'
import p32_img from './image_32.png'
import p33_img from './image_33.png'
import p34_img from './image_34.png'
import p35_img from './image_35.png'
import p36_img from './image_36.png'

// All Products Data
let all_products = [

  {
    id: 1,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p1_img,
    new_price: 50.00,
    old_price: 80.50,
    stock: 10
  },

  {
    id: 2,
    name: "Women Solid Casual Top",
    category: "women",
    image: p2_img,
    new_price: 60.00,
    old_price: 90.50,
    stock: 8
  },

  {
    id: 3,
    name: "Women Floral Print Dress",
    category: "women",
    image: p3_img,
    new_price: 70.00,
    old_price: 110.50,
    stock: 9
  },

  {
    id: 4,
    name: "Women Casual Summer Dress",
    category: "women",
    image: p4_img,
    new_price: 421.00,
    old_price: 446.50,
    stock: 5
  },

  {
    id: 5,
    name: "Women Elegant Party Dress",
    category: "women",
    image: p5_img,
    new_price: 561.00,
    old_price: 600.00,
    stock: 0
  },

  {
    id: 6,
    name: "Women Printed Casual Shirt",
    category: "women",
    image: p6_img,
    new_price: 327.00,
    old_price: 350.00,
    stock: 10
  },

  {
    id: 7,
    name: "Women Casual T-Shirt",
    category: "women",
    image: p7_img,
    new_price: 189.00,
    old_price: 200.50,
    stock: 2
  },

  {
    id: 8,
    name: "Women Stylish Crop Top",
    category: "women",
    image: p8_img,
    new_price: 189.00,
    old_price: 200.50,
    stock: 3
  },

  {
    id: 9,
    name: "Women Denim Jacket",
    category: "women",
    image: p9_img,
    new_price: 526.00,
    old_price: 600.00,
     stock: 7
  },

  {
    id: 10,
    name: "Women Casual Hoodie",
    category: "women",
    image: p10_img,
    new_price: 361.00,
    old_price: 400.00,
     stock: 6
  },

  {
    id: 11,
    name: "Men Green Solid Zippered Full-Zip Bomber Jacket",
    category: "men",
    image: p11_img,
    new_price: 688.00,
    old_price: 700.00,
     stock: 12
  },

  {
    id: 12,
    name: "Men Casual Printed Shirt",
    category: "men",
    image: p12_img,
    new_price: 299.00,
    old_price: 300.50,
     stock: 8
  },

  {
    id: 13,
    name: "Men Slim Fit Casual Shirt",
    category: "men",
    image: p13_img,
    new_price: 288.00,
    old_price: 350.00,
     stock: 5
  },

  {
    id: 14,
    name: "Men Casual Cotton T-Shirt",
    category: "men",
    image: p14_img,
    new_price: 278.00,
    old_price: 300.50,
     stock: 10
  },

  {
    id: 15,
    name: "Men Classic Denim Jacket",
    category: "men",
    image: p15_img,
    new_price: 522.00,
    old_price: 600.00,
     stock: 4
  },

  {
    id: 16,
    name: "Men Casual Hoodie",
    category: "men",
    image: p16_img,
    new_price: 375.00,
    old_price: 400.00,
     stock: 0
  },

  {
    id: 17,
    name: "Men Regular Fit Jeans",
    category: "men",
    image: p17_img,
    new_price: 490.00,
    old_price: 550.00,
     stock: 9
  },

  {
    id: 18,
    name: "Men Casual Sports Jacket",
    category: "men",
    image: p18_img,
    new_price: 739.00,
    old_price: 800.50,
     stock: 6
  },

  {
    id: 19,
    name: "Men Full Sleeve Casual Shirt",
    category: "men",
    image: p19_img,
    new_price: 273.00,
    old_price: 300.50,
     stock: 11
  },

  {
    id: 20,
    name: "Men Solid Casual T-Shirt",
    category: "men",
    image: p20_img,
    new_price: 309.00,
    old_price: 350.50,
     stock: 7
  },

  {
    id: 21,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kids",
    image: p21_img,
    new_price: 268.00,
    old_price: 300.50,
     stock: 10
  },

  {
    id: 22,
    name: "Kids Casual Printed T-Shirt",
    category: "kids",
    image: p22_img,
    new_price: 124.00,
    old_price: 200.00,
     stock: 5
  },

  {
    id: 23,
    name: "Kids Comfortable Cotton Dress",
    category: "kids",
    image: p23_img,
    new_price: 221.00,
    old_price: 250.50,
     stock: 8
  },

  {
    id: 24,
    name: "Kids Casual Hoodie",
    category: "kids",
    image: p24_img,
    new_price: 184.00,
    old_price: 200.50,
     stock: 0
  },

  {
    id: 25,
    name: "Kids Stylish Denim Jacket",
    category: "kids",
    image: p25_img,
    new_price: 388.00,
    old_price: 400.00,
     stock: 6
  },

  {
    id: 26,
    name: "Kids Printed Summer Dress",
    category: "kids",
    image: p26_img,
    new_price: 206.00,
    old_price: 250.50,
     stock: 9
  },

  {
    id: 27,
    name: "Kids Casual Full Sleeve Shirt",
    category: "kids",
    image: p27_img,
    new_price: 284.00,
    old_price: 300.50,
     stock: 4
  },

  {
    id: 28,
    name: "Kids Comfortable Jogger Set",
    category: "kids",
    image: p28_img,
    new_price: 321.00,
    old_price: 400.00,
     stock: 12
  },

  {
    id: 29,
    name: "Kids Casual Party Wear",
    category: "kids",
    image: p29_img,
    new_price: 340.00,
    old_price: 400.50,
     stock: 7
  },

  {
    id: 30,
    name: "Kids Winter Sweatshirt",
    category: "kids",
    image: p30_img,
    new_price: 215.00,
    old_price: 250.50,
     stock: 5
  },

  {
    id: 31,
    name: "Women Casual Printed Top",
    category: "women",
    image: p31_img,
    new_price: 287.00,
    old_price: 300.50,
     stock: 10
  },

  {
    id: 32,
    name: "Men Casual Printed Hoodie",
    category: "men",
    image: p32_img,
    new_price: 403.00,
    old_price: 450.50,
     stock: 3
  },

  {
    id: 33,
    name: "Kids Colourblocked Sweatshirt",
    category: "kids",
    image: p33_img,
    new_price: 179.00,
    old_price: 250.00,
     stock: 0
  },

  {
    id: 34,
    name: "Women Stylish Casual Jacket",
    category: "women",
    image: p34_img,
    new_price: 326.00,
    old_price: 400.00,
     stock: 8
  },

  {
    id: 35,
    name: "Men Classic Casual Jacket",
    category: "men",
    image: p35_img,
    new_price: 418.00,
    old_price: 450.50,
     stock: 6
  },

  {
    id: 36,
    name: "Kids Casual Winter Jacket",
    category: "kids",
    image: p36_img,
    new_price: 856.00,
    old_price: 900.50,
     stock: 4
  },

];

export default all_products;