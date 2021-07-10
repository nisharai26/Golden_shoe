import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name:'Nisha',
      email:'admin@example.com',
      password: bcrypt.hashSync('1234',8),
      isAdmin:true,
    },
    {
      name:'James',
      email:'James@example.com',
      password: bcrypt.hashSync('1234',8),
      isAdmin:false,
    },
  ],
    products: [
      {
        
        name: 'Nike shoe',
        category: 'Shoe',
        image: '/images/shoe1.jpg',
        price: 78,
        countInStock: 10,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
       
        name: 'Hiking Shoes',
        category: 'Shoes',
        image: '/images/shoe2.jpg',
        price: 46,
        countInStock: 20,
        brand: 'Cat Footwear',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        
        name: 'GAXmi Womens Air Cushion Running Shoes',
        category: 'Sneakers',
        image: '/images/shoe3.jpg',
        price: 220,
        countInStock: 0,
        brand: 'GAXmi',
        rating: 4.8,
        numReviews: 17,
        description: 'high quality product',
      },
      {
        
        name: 'NIKE Women Running Shoes',
        category: 'Running Shoe ',
        image: '/images/shoe4.jpg',
        price: 45,
        countInStock: 15,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
      },
      {
       
        name: 'Skechers Women',
        category: 'Trainers',
        image: '/images/shoe5.jpg',
        price: 105,
        countInStock: 5,
        brand: 'Skechers',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        
        name: 'Knit House Shoes',
        category: 'Slippers',
        image: '/images/shoe6.jpg',
        price: 16,
        countInStock: 12,
        brand: 'EverFoams Store',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
    ],
  };
  export default data;