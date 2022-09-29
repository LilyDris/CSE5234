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
    description: 'A large phone with one of the best screens'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: 'The most basic experience you can dream of'
  },
  {
    id: 4,
    name: 'Phone Pro Max',
    price: 899,
    description: 'The best of the best'
  },
  {
    id: 5,
    name: 'Headphone',
    price: 99,
    description: 'The best heaphones you don\'t own'
  }
];


  