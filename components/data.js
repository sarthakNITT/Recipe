export const initialIngredients = [
    { id: 1, image: require('./images/onion.png'), iname: 'Onions', backgroundImage: require('./images/onionbg.jpeg'), rating: '4.5', level: 'Medium', calorie: '40 kcal', time: '3:00' },
    { id: 2, image: require('./images/tomato.png'), iname: 'Tomatoes', backgroundImage: require('./images/tomatobg.jpeg'), rating: '4.4', level: 'Easy', calorie: '18 kcal', time: '2:00' },
    { id: 3, image: require('./images/garlic.png'), iname: 'Garlic', backgroundImage: require('./images/garlicbg.jpeg'), rating: '4.2', level: 'Hard', calorie: '149 kcal', time: '2:00' },
    { id: 4, image: require('./images/pepper.png'), iname: 'Paneer', backgroundImage: require('./images/paneer.jpeg'), rating: '4.5', level: 'Medium', calorie: '265 kcal', time: '1:00' },
    { id: 5, image: require('./images/spinach.png'), iname: 'Spinach', backgroundImage: require('./images/spinachbg.jpeg'), rating: '4.0', level: 'Medium', calorie: '23 kcal', time: '2:00' },
    { id: 6, image: require('./images/potato.png'), iname: 'Potatoes', backgroundImage: require('./images/potatobg.jpeg'), rating: '4.1', level: 'Hard', calorie: '87 kcal', time: '3:00' },
    { id: 7, image: require('./images/green peas.png'), iname: 'Green Peas', backgroundImage: require('./images/green peasbg.jpeg'), rating: '3.8', level: 'Easy', calorie: '81 kcal', time: '1:00' },
    { id: 8, image: require('./images/carrot.png'), iname: 'Daal', backgroundImage: require('./images/daal.jpeg'), rating: '4.7', level: 'Easy', calorie: '116 kcal', time: '3:00' },
    { id: 9, image: require('./images/coriender.png'), iname: 'Coriander', backgroundImage: require('./images/corianderbg.jpeg'), rating: '4.1', level: 'Easy', calorie: '23 kcal', time: '1:00' },
    { id: 10, image: require('./images/chickpeas.png'), iname: 'Chickpeas', backgroundImage: require('./images/chickpeasbg.jpeg'), rating: '4.0', level: 'Hard', calorie: '164 kcal', time: '1:00' }
];

export const recipes = [
    {
        id: 1,
        iname: 'Aloo Masala',
        ingredients: ['•Tomatoes  ', '•Onions  ', '•Garlic  ', '•Green Peas  ', '•Potatoes  '],
        backgroundImage: require('./images/aloomasala.jpg'),
        rating: '4.3', level: 'Easy', calorie: '200 kcal', time: '40:00',
        favoriteadd: 'Tap and hold to add Recipe to favourites',
        remove: 'Tap and hold to remove from favourites',
        procedure: 'Tap to view procedure of recipe'
    },
    {
        id: 2,
        iname: 'Chana Masala',
        ingredients: ['•Tomatoes  ', '•Onions  ', '•Garlic  ', '•Chickpeas  '],
        backgroundImage: require('./images/chanamasala.jpg'),
        rating: '4.2', level: 'Medium', calorie: '300 kcal', time: '55:00',
        favoriteadd: 'Tap and hold to add Recipe to favourites',
        remove: 'Tap and hold to remove from favourites',
        procedure: 'Tap to view procedure of recipe'
    },
    {
        id: 3,
        iname: 'Palak Paneer',
        ingredients: ['•Tomatoes  ', '•Onions  ', '•Garlic  ', '•Spinach  ', '•Paneer '],
        backgroundImage: require('./images/palakpaneer.jpg'),
        rating: '4.4', level: 'Medium', calorie: '350 kcal', time: '40:00',
        favoriteadd: 'Tap and hold to add Recipe to favourites',
        remove: 'Tap and hold to remove from favourites',
        procedure: 'Tap to view procedure of recipe'
    },
    {
        id: 4,
        iname: 'Mixed Vegetable Sabzi',
        ingredients: ['•Tomatoes  ', '•Onions  ', '•Garlic  ', '•Spinach  ', '•Potatoes  ', '•Green Peas  ', '•Paneer'],
        backgroundImage: require('./images/mixedveg.jpg'), 
        rating: '4.1', level: 'Easy', calorie: '200 kcal', time: '35:00',
        favoriteadd: 'Tap and hold to add Recipe to favourites',
        remove: 'Tap and hold to remove from favourites',
        procedure: 'Tap to view procedure of recipe'
    },
    {
        id: 5,
        iname: 'Dal Tadka',
        ingredients: ['•Tomatoes  ', '•Onions  ', '•Garlic  ','•Daal'],
        backgroundImage: require('./images/daltadka.jpg'), 
        rating: '4.4', level: 'Easy', calorie: '250 kcal', time: '40:00',
        favoriteadd: 'Tap and hold to add Recipe to favourites',
        remove: 'Tap and hold to remove from favourites',
        procedure: 'Tap to view procedure of recipe'
    }
];

export let favorites = [];

export const updateFavorites = (newFavorites) => {
    favorites = newFavorites;
  };