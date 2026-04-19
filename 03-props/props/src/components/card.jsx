import React from 'react'

const Card = (props) => {
  return (
    <div>
       <div className="card">
        <img src={props.img} alt="" />
        <h2>{props.title}</h2>
        <p>{props.user}, Age: {props.age}</p>
        <p>lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View profile</button>
      </div>
    </div>
  )
}

export default Card
