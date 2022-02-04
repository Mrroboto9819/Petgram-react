import React , {useEffect, useState}from 'react';
import { Category } from '../Categorys';
// import { categories } from '../../../api/db.json';
import {List, Item} from './styles';

export const ListOfCoategorys = () => {
  const [categories, setCategories] = useState([
    {
      "id": 1,
      "name": "cats",
      "emoji": "🐱",
      "cover": "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg",
      "path": "/photos/cats"
    },
    {
      "id": 2,
      "name": "dogs",
      "emoji": "🐶",
      "cover": "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_dogs.jpg",
      "path": "/photos/dogs"
    },
    {
      "id": 3,
      "name": "hamsters",
      "emoji": "🐹",
      "cover": "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_hamsters.jpg",
      "path": "/photos/hamsters"
    },
    {
      "id": 4,
      "name": "rabbits",
      "emoji": "🐰",
      "cover": "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_rabbits.jpg",
      "path": "/photos/rabbits"
    },
    {
      "id": 5,
      "name": "birds",
      "emoji": "🐦",
      "cover": "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_birds.jpg",
      "path": "/photos/birds"
    },
    {
      "id": 6,
      "name": "fishes",
      "emoji": "🐠",
      "cover": "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_fishes.jpg",
      "path": "/photos/fishes"
    }
  ])
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const ListofCat = (fixed) => (
    <List  fixed={fixed}>
      {
        categories.map((category, key) => <Item key={category.id}><Category {...category}/></Item>)
      }
    </List>
  )

  return (
    <>
    {ListofCat()}
    {showFixed && ListofCat(true)}
    </>
  );
};

