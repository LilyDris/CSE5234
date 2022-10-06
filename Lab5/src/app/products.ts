export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    image: 'https://ss7.vzw.com/is/image/VerizonWireless/iphone14-blue-fall22-a?hei=400&fmt=webp'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    image: 'https://ss7.vzw.com/is/image/VerizonWireless/apple-iphone-13-mini-blue?hei=400&fmt=webp'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: 'The most basic experience you can dream of',
    image: 'https://ss7.vzw.com/is/image/VerizonWireless/google-pixel-4-6-2-8-2-5-white?hei=400&fmt=webp'
  },
  {
    id: 4,
    name: 'Phone Pro Max',
    price: 899,
    description: 'The best of the best',
    image: 'https://ss7.vzw.com/is/image/VerizonWireless/apple-iphone-13-pro-max-gold?hei=400&fmt=webp'
  },
  {
    id: 5,
    name: 'Headphone',
    price: 99,
    description: 'The best heaphones you don\'t own',
    image: 'https://ss7.vzw.com/is/image/VerizonWireless/apple-airpods-pro-2nd-generation-mqd83am-a-iset?hei=400&fmt=webp'
  }
];


  