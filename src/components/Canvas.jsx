import React from 'react';
import { useDrop } from 'react-dnd';
import { elementMaker } from '../data/Items.jsx';

function Canvas({ temp, items, setItems }) {

  
  const [, drop] = useDrop(() => ({
    accept: 'ELEMENT',
    drop: (draggedItem) => {
      const newItem = { ...draggedItem, index: items.length };
      setItems((prevItems) => [...prevItems, newItem]);
    },
  }));

  return (
    <div className='w-2/3 h-screen p-2'>
      <h2 className='text-white text-3xl text-center font-bold w-full'>Canvas</h2>
      <div
        ref={drop}
        className={`${temp === 2 ? 'Canvas flex flex-wrap items-center gap-2 justify-evenly' : temp === 1 ? 'Canvas flex flex-col items-center gap-0.5' : 'Canvas'} w-full h-[calc(100vh-60px)] bg-black overflow-y-auto rounded-4xl mt-2`}
      >
        {items.map((item, index) => (
          elementMaker(item, index)
        ))}
      </div>
    </div>
  );
}

export default Canvas;