


import { useState} from 'react';
import './Rating.scss'

const range = (min, max) =>
  Array(max - min + 1).fill().map((_, i) => min + i)

const RatingItem  = ({ checked, colored, onChange, value }) => (
  <label className={`rating__item ${colored ? 'rating__item--selected' : ''}`}>
    <input
      checked={checked}
      className='rating__input'
      onChange={(e) => onChange(value)}
      type="radio"
      value={value}
    />
  </label>
)

const Rating = ({ min, max, onChange, value }) => {
    
  return (
    <div className='rating'>
      {
        range(min, max).map(item => (
          <RatingItem
            colored={value >= item}
            checked={value === item}
            value={item}
            onChange={onChange}
          />
        ))
      }
    </div>
  )
}



export const Rating2 = ()=>{
    const [ count, setCount ] = useState(0)
    console.log(count)
    return(
        <Rating
        min={1}
        max={5}
        onChange={(rating) => setCount(rating)}
        value={count}
      />
    )
}
