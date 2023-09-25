import {useState} from 'react'
import  Canvas  from 'canvas';
const test3 = () => {
    const [shapes, setShapes] = useState<any>([]);

    const generateShape = () => {
      const shape:any = {
        type: "polygon",
        points: [],
        color: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)})`,
      };
  
      for (let i = 0; i < Math.floor(Math.random() * 10) + 3; i++) {
        shape.points.push({
          x: Math.floor(Math.random() * 500),
          y: Math.floor(Math.random() * 500),
        });
      }
  
      setShapes([...shapes, shape]);
    };
  
    return (
      <div>
        <button onClick={generateShape}>Generate Random Shape</button>
        <Canvas
        >
          {shapes.map((shape:any, index:any) => (
            <polygon
              key={index}
              points={shape.points.map((point:any) => `${point.x},${point.y}`).join(
                " "
              )}
              fill={shape.color}
            />
          ))}
        </Canvas>
      </div>
    );
  };

export default test3
