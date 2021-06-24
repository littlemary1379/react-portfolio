/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import './App.css';
import * as MathUtil from './util/MathUtil.js';
import {fabric} from 'fabric';

var outCanvas;
var circle;
var topPosition;
var leftPositon;

const App = () => {

  const [canvas, setCanvas] = useState('');


  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  const initCanvas = () => {
    const canvas = new fabric.Canvas('canvas', {
      height : 800,
      width : 800,
      backgroundColor : 'rgb(250,250,250)',
      selection : false
    })

    outCanvas = canvas

    //canvas.onSelect = false

    topPosition = MathUtil.randomPosition(50)
    leftPositon = MathUtil.randomPosition(50)


    circle = new fabric.Circle ({
      id: 1,
      top : topPosition,
      left : leftPositon,
      radius : 50,
      fill : '#eb9f9f'
    })
    
    
    circle.selectable = false

    outCanvas.add(circle)

    lotation(canvas)
    setListener(circle)

    return canvas
    
  }

  const setListener = (circle) => {
      console.log("클릭 리스너" + circle);
      console.log("클릭 리스너" + canvas);
      
      circle.on("mousedown", function(e) {
        console.log("??");
      })
  } 

  const lotation = () => {
    const random = Math.round(Math.random()*3)
      console.log("???????"+random);

      if(random===0) {
        console.log("x 양수 y 양수 이동")
        setInterval(() => {
          topPosition = topPosition+5
          leftPositon = leftPositon+5
          circle.set({
            top : topPosition,
            left : leftPositon
          })

          outCanvas.renderAll()
        },30)
      } else if(random===1) {
        console.log("x 양수 y 음수 이동")
        setInterval(() => {
          topPosition = topPosition+5
          leftPositon = leftPositon-5
          console.log(topPosition);
          console.log(leftPositon);

          circle.set({
            top : topPosition,
            left : leftPositon
          })

          outCanvas.renderAll()
        },30)
      } else if(random===2) {
      console.log("x 음수 y 양수 이동")
      setInterval(() => {
        topPosition = topPosition-5
        leftPositon = leftPositon+5
        console.log(topPosition);
        console.log(leftPositon);

        circle.set({
          top : topPosition,
          left : leftPositon
        })

        outCanvas.renderAll()
      },30)
      } else {
        console.log("x 음수 y 음수 이동")
        setInterval(() => {
          topPosition = topPosition-5
          leftPositon = leftPositon-5
          console.log(topPosition);
          console.log(leftPositon);

          circle.set({
            top : topPosition,
            left : leftPositon
          })

          outCanvas.renderAll()
        },30)
      }
  }

  return (
    <div>
      <h1>Fabricjs example</h1>
      <canvas id = "canvas"/>
    </div>
  )
}

export default App;