import React from 'react'

function IndicesCard(props) {
  return (
    <div className='indicesCard'>
        {props.name}
        <p>
        {props.price}
        </p>
    </div>
  )
}

export default IndicesCard