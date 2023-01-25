import * as React from 'react';

export default function FruitFilter(props) {
  return (
    <div>
      <label>Filter these fruits: </label>
      <input type="text" name="fruit-filter" onChange={props.onChange} />
    </div>
  );
}
