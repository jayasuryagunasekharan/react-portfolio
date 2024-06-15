import React, { useRef, useEffect } from 'react';

const GlitteringSea = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const XRef = useRef(null);
  const YRef = useRef(null);
  let shapes = [];
  const shapeNum = 300;

  useEffect(() => {
    const canvas = canvasRef.current;
    ctxRef.current = canvas.getContext('2d');
    XRef.current = canvas.width = window.innerWidth;
    YRef.current = canvas.height = window.innerHeight;

    // Random Number Generator
    const rand = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    // Shape Class
    class Shape {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = rand(10, 25);
        this.ga = Math.random() * Math.random() * Math.random() * Math.random();
        this.v = {
          x: Math.random(),
          y: -1
        };
        this.l = rand(0, 20);
        this.sl = this.l;
      }

      updateParams() {
        this.l -= 1;
        if (this.l < 0) {
          this.x = XRef.current * (Math.random() + Math.random()) / 2;
          this.y = rand(0, YRef.current);
          this.l = rand(0, 20);
          this.sl = this.l;
          this.r = rand(10, 25);
          this.ga = Math.random() * Math.random() * Math.random() * Math.random();
        }
      }

      updatePosition() {
        this.x += Math.random();
        this.y += -Math.random();
      }

      draw() {
        const ctx = ctxRef.current;
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        ctx.globalAlpha = this.ga;
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.restore();
      }

      render() {
        this.updatePosition();
        this.updateParams();
        this.draw();
      }
    }

    // Render Function
    const render = () => {
      const ctx = ctxRef.current;
      const X = XRef.current;
      const Y = YRef.current;
      ctx.clearRect(0, 0, X, Y);
      for (let i = 0; i < shapes.length; i++) {
        shapes[i].render();
      }
      requestAnimationFrame(render);
    };

    // Initial Shape Creation
    const initializeShapes = () => {
      for (let i = 0; i < shapeNum; i++) {
        const s = new Shape(XRef.current * (Math.random() + Math.random()) / 2, rand(0, YRef.current));
        shapes.push(s);
      }
    };

    // Resize Event Handler
    const onResize = () => {
      XRef.current = canvas.width = window.innerWidth;
      YRef.current = canvas.height = window.innerHeight;
    };

    // Event Listeners
    window.addEventListener('resize', onResize);

    // Initialize Shapes and Start Animation
    initializeShapes();
    render();

    // Cleanup on Unmount
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={canvasRef} id="canvas">Canvas not supported.</canvas>;
};

export default GlitteringSea;
