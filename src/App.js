import React from 'react'
import {useEffect, useState} from 'react'

const width = 8
const candyColor = [
"blue",
"green",
"orange",
"purple",
"red",
"yellow"
]

const App = () => {

 const [currentColorArrangement, setCurrentColorArrangement] = useState([])

  const createBoard = () => {

    const randomColorArrangement = []

    for (let i = 0; i < width * width; i++) {
      const randomColorsFromOto5 = Math.floor(Math.random() * candyColor.length)
      const randomColor = candyColor[randomColorsFromOto5]
      randomColorArrangement.push(randomColor)

    }
     setCurrentColorArrangement(randomColorArrangement)
  }

  useEffect(() => {
    createBoard()
  }, [])

    console.log(currentColorArrangement)

  return (
    <div className = "app">
    <div className = "game">
    {currentColorArrangement.map((candyColor, index: number) => (
      <img
      key= {index}
      style= {{backgroundColor: candyColor}}

      />

    ))}
    </div>

    </div>
  );
}

export default App
