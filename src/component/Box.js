import React from 'react'

const Box = (props) => {
  const borderColor = props.result === 'win' ? 'green' : props.result === 'lose' ? 'red' : 'black';

  const boxStyle = {
    border: `10px solid ${borderColor}`,
    width: '500px',
    height: '600px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px',
  };

  return (
    <div style={boxStyle}>
      <h1>{props.title}</h1>
      <img className='item-img' src={props.item && props.item.img} alt="" />
      <h2>{props.result}</h2>
    </div>
  )
}

export default Box