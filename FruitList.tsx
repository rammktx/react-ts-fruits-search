import * as React from 'react';

export default function FruitList(props) {
  return (
    <ul>
      {props.fruits.map((fruit) => (
        <li> {fruit} </li>
      ))}
    </ul>
  );
}
