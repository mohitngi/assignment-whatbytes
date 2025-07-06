export type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  brand: string;
  rating: number;
  description: string;
};

export const products: Product[] = [
  {
    id: '1',
    title: 'Running Shoes',
    price: 99,
    image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/APRIL/7/RjsnWzez_023d9235815e433dbfcd8cdced7a81d7.jpg',
    category: 'Clothing',
    brand: 'Nike',
    rating: 4.5,
    description: 'Comfortable running shoes for everyday use.',
  },
  {
    id: '2',
    title: 'Wireless Headphones',
    price: 199,
    image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/30348918/2025/4/25/9ad42b80-28a2-4e81-8da0-6ac765dacf041745573505996-BOULT-AUDIO-Shadow-Bluetooth-Earbuds-with-40H-Playtime-ENC-M-1.jpg',
    category: 'Electronics',
    brand: 'Sony',
    rating: 4.7,
    description: 'Noise-cancelling wireless headphones with long battery life.',
  },
  {
    id: '3',
    title: 'Backpack',
    price: 129,
    image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17865246/2022/5/28/ef743e69-bd08-42ea-a684-7b2ed9237c5b1653727865857SkybagsUnisexGreenBrandLogoPrintBackpack1.jpg',
    category: 'Clothing',
    brand: 'Adidas',
    rating: 4.2,
    description: 'Durable backpack for travel and daily use.',
  },
  {
    id: '4',
    title: 'Smartwatch',
    price: 249,
    image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/22266764/2023/7/25/7ac2b16e-935e-4c51-8b28-0e1bdf0b61911690269977453BoultBlackDriftSmartWatch1.jpg',
    category: 'Electronics',
    brand: 'Apple',
    rating: 4.8,
    description: 'Feature-rich smartwatch with health tracking.',
  },
  {
    id: '5',
    title: 'Sunglasses',
    price: 149,
    image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JANUARY/22/yLO3duPF_35c218f8a20a43dfa421a2336e892555.jpg',
    category: 'Clothing',
    brand: 'Ray-Ban',
    rating: 4.3,
    description: 'Stylish sunglasses with UV protection.',
  },
  {
    id: '6',
    title: 'Digital Camera',
    price: 499,
    image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/28234278/2024/3/14/c6f43885-50ab-4280-8f7d-71c3e68019d01710388987205Cameras3.jpg',
    category: 'Electronics',
    brand: 'Canon',
    rating: 4.6,
    description: 'High-resolution digital camera for photography.',
  },
  {
    id: '7',
    title: 'T-shirt',
    price: 29,
    image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2024/SEPTEMBER/6/YnXL68Es_6d03328e3bb14c778e4fae4ed81f7532.jpg',
    category: 'Clothing',
    brand: 'Uniqlo',
    rating: 4.1,
    description: 'Soft cotton t-shirt in various colors.',
  },
  {
    id: '8',
    title: 'Smartphone',
    price: 699,
    image: 'https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2025/JANUARY/27/6NSgpmae_592362e7672e480aa6a22609df75bc4a.jpg',
    category: 'Electronics',
    brand: 'Samsung',
    rating: 4.9,
    description: 'Latest generation smartphone with advanced features.',
  },
]; 