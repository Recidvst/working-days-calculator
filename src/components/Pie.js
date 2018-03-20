import React, { Component } from 'react';

import { degsToRadians } from './../helpers/Maths';

class Pie extends Component {
      
      static defaultProps = {
        colors: ['green', 'red'],
        size: 500,
        lineWidth: 15
      };
      
      componentDidMount() {
        this.draw();
      }
      componentDidUpdate() {
        this.draw();        
      }
      
      draw() {
        const c = this.refs.canvas.getContext('2d');
        const center = this.props.size / 2;
        const lineWidth = this.props.lineWidth;
        const radius = center - (lineWidth / 2);
        c.lineWidth = lineWidth;
        
        const data = this.props.data;
        const dataTotal = data.reduce((r, dataPoint) => r + dataPoint, 0);
        let startAngle = degsToRadians(-90);
        let colorIndex = 0;
        this.props.data.forEach((dataPoint, i) => {
          const section = dataPoint / dataTotal * 360;
          const endAngle = startAngle + degsToRadians(section);
          const color = this.props.colors[colorIndex];
          colorIndex++;
          if (colorIndex >= this.props.colors.length) {
            colorIndex = 0;
          }
          c.strokeStyle = color;
          c.beginPath();
          c.arc(center, center, radius, startAngle, endAngle);
          c.stroke();
          startAngle = endAngle;    
        });
      }
    
      render() {
        return (
            <div className="pie-component">
              <canvas
                  ref="canvas"
                  height={this.props.size}
                  width={this.props.size}
              />
            </div>
        );
      }
}

export default Pie;
  
  