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
    let random = Math.round(Math.random()*3)
      console.log("???????"+random);
      var intervalTime = 20;

      setInterval(() => {

        if(random===0) {
     
            topPosition = topPosition+5
            leftPositon = leftPositon+5
            circle.set({
              top : topPosition,
              left : leftPositon
            })
  
            outCanvas.add(circle)
            outCanvas.renderAll()

            if(topPosition < 0 || topPosition > 800-100 || leftPositon < 0 || leftPositon > 800-100) {
              console.log("벽을 만낫음")

              if(topPosition > 800-100) {
                random = 2
              } else if(leftPositon > 800-100) {
                random = 1
              }
            }
          
        } else if(random===1) {
          
            topPosition = topPosition+5
            leftPositon = leftPositon-5
  
            circle.set({
              top : topPosition,
              left : leftPositon
            })

            outCanvas.add(circle)
            outCanvas.renderAll()

            if(topPosition < 0 || topPosition > 800-100 || leftPositon < 0 || leftPositon > 800-100) {
              console.log("벽을 만낫음")

              if(topPosition > 800-100) {
                random = 3
              } else if(leftPositon < 0) {
                random = 0
              }
            }
          
        } else if(random===2) {
        
          topPosition = topPosition-5
          leftPositon = leftPositon+5
  
          circle.set({
            top : topPosition,
            left : leftPositon
          })

          outCanvas.add(circle)
          outCanvas.renderAll()

          if(topPosition < 0 || topPosition > 800-100 || leftPositon < 0 || leftPositon > 800-100) {
            console.log("벽을 만낫음")

            
            if(topPosition < 0) {
              random = 0
            } else if(leftPositon > 800-100) {
              random = 3
            }
          }
        
        } else {
          
            topPosition = topPosition-5
            leftPositon = leftPositon-5
  
            circle.set({
              top : topPosition,
              left : leftPositon
            })
  
            outCanvas.add(circle)
            outCanvas.renderAll()

            if(topPosition < 0 || topPosition > 800-100 || leftPositon < 0 || leftPositon > 800-100) {
              console.log("벽을 만낫음")

              if(topPosition < 0) {
                random = 1
              } else if(leftPositon < 0) {
                random = 2
              }
            }
    
        }

      }, intervalTime)
      
  }

  return (
    <div>
      <h1>Fabricjs example</h1>
      <canvas id = "canvas"/>
    </div>
  )
}

export default App;