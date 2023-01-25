import * as React from 'react';
import FruitFilter from './FruitFilter';
import FruitList from './FruitList';
import './style.css';

const fruitList = [
  "Acai",
  "Aceola",
  "Apple",
  "Apricots",
  "Avocado",
  "Banana",
  "Blackberry",
  "Blueberries",
  "Camu Camu berry",
  "Cherries",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Currents",
  "Dates",
  "Durian",
  "Fig",
  "Goji berries",
  "Gooseberry",
  "Grapefruit",
  "Grapes",
  "Jackfruit",
  "Kiwi",
  "Kumquat",
  "Lemon",
  "Lime",
  "Lucuma",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Melon",
  "Mulberry",
  "Nectarine",
  "Orange",
  "Papaya",
  "Passion Fruit",
  "Peach",
  "Pear",
  "Pineapple",
  "Plum",
  "Pomegranate",
  "Pomelo",
  "Prickly Pear",
  "Prunes",
  "Raspberries",
  "Strawberries",
  "Tangerine/Clementine",
  "Watermelon",
];

export default function App() {
  const [fruitsToDisplay, setFruitsToDisplay] = React.useState(fruitList);
  const [fruitsToNotDisplay, setFruitsToNotDisplay] = React.useState([""]);

  const handleFilterChange = (event) => {
    event.preventDefault();
    let filterValue  = event.target.value;

    const filteredFruitList = fruitList.filter((fruit) => fruit.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()));
    const filteredNotFruitList = fruitList.filter((fruit) => !fruit.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()));

    setFruitsToDisplay(filteredFruitList);
    setFruitsToNotDisplay(filteredNotFruitList);
  }


  return (
    <div>
      <FruitFilter onChange={handleFilterChange}/>
      <p> FRUITS TO DISPLAY </p>
      <FruitList fruits = {fruitsToDisplay} />
      <p> FRUITS NOT TO DISPLAY </p>
      <FruitList fruits = {fruitsToNotDisplay} /> 
    </div>
  );
}