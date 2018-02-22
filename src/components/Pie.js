import React, { Component } from 'react';

import { degsToRadians } from './../helpers/Maths';

class Pie extends Component {
      
      static defaultProps = {
        colors: ['green', 'red'],
        size: 250,
        lineWidth: 7
      };
      
      componentDidMount() {
        this.draw();
      }
      
      draw() {
        const c = this.refs.canvas.getContext('2d');
        const center = this.props.size / 2;
        const lineWidth = this.props.lineWidth;
        const radius = center - (lineWidth / 2);
        c.lineWidth = lineWidth;
        
        const dataTotal = this.props.data.reduce((r, dataPoint) => r + dataPoint, 0);
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
          c.fillStyle = color;
          c.beginPath();
          c.lineTo(radius,radius,radius);
          c.arc(center, center, radius, startAngle, endAngle);
          c.lineTo(radius,radius,radius);
          c.stroke();
          c.fill();
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
  
  