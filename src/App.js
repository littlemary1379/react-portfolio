/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import './App.css';
import * as MathUtil from './util/MathUtil.js';
import {fabric} from 'fabric';

var circle;
var topPosition;
var leftPositon;

const App = () => {

  const [canvas, setCanvas] = useState('');
  //const [circle, setCircle] = useState('');
  // const [top, setTop] = useState('');
  // const [left, setLeft] = useState('');

  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  // useEffect(() => {
  //   setTop(randomTop())
  // }, [])

  // useEffect(() => {
  //   setLeft(randomLeft())
  // }, [])

  const initCanvas = () => {
    const canvas = new fabric.Canvas('canvas', {
      height : 800,
      width : 800,
      backgroundColor : 'rgb(250,250,250)',
      selection : false
    })

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

    canvas.add(circle)
    canvas.renderAll()

    lotation()
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

  }

  const randomTop = () => {
    const top = Math.random()*800;
    console.log("??????"+ top);
    MathUtil.randomPosition(50)
    return top
  }

  const randomLeft = () => {
    const left = Math.random()*800;
    console.log("??????"+ left);
    return left
  }

  return (
    <div>
      <h1>Fabricjs example</h1>
      <canvas id = "canvas"/>
    </div>
  )
}

export default App;