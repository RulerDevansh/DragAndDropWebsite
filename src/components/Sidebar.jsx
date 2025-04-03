import React from 'react';
import { useDrag } from 'react-dnd';
import { Allitems, elementMaker } from '../data/Items.jsx';


function DraggableElement({ item, index }) {
  const [, drag] = useDrag(() => ({
    type: 'ELEMENT',
    item: { ...item, index },
  }));

  return (
    <div
      ref={drag}
      className='bg-gray-800 p-1 rounded-4xl shadow-md flex items-center justify-center hover:bg-gray-700'
    >
      {elementMaker(item, index)}
    </div>
  );
}

function Sidebar({items}) {
  const [selectedItem, setSelectedItem] = React.useState(null);

  // Adding event listeners to canvas items
  React.useEffect(() => {
    const canvasElement = document.querySelector('.Canvas');
    if (canvasElement) {
      const children = canvasElement.children;
      for (let child of children) {
        child.addEventListener('click', handleClick);
      }
      return () => {
        for (let child of children) {
          child.removeEventListener('click', handleClick);
        }
      };
    }
  }, [items]);

  const handleClick = (event) => {
    const canvas = document.querySelector('.Canvas');
    if (event.target !== canvas) {
      const selectedItem = event.target;
      if (canvas.contains(selectedItem)) {
        setSelectedItem(itemEditorAdd(selectedItem));
      }
    }
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    const index = event.target.getAttribute('index');

    const canvasElement = document.querySelector('.Canvas');
    if (canvasElement) {
      const targetElement = canvasElement.querySelector(`[id="${id}"][index="${index}"]`);
      if (targetElement) {
        switch (id) {
          case 'text':
            targetElement.textContent = value;
            break;
          case 'image':
            targetElement.src = value;
            break;
          case 'video':
            targetElement.src = value;
            break;
          case 'button':
            targetElement.textContent = value;
            break;
          case 'input':
            targetElement.placeholder = value;
            break;
          case 'select':
            const options = value.split(',').map((option) => option.trim());
            targetElement.innerHTML = '';
            options.forEach((option) => {
              const optionElement = document.createElement('option');
              optionElement.value = option;
              optionElement.textContent = option;
              targetElement.appendChild(optionElement);
            });
            break;
          case 'checkbox':
            targetElement.nextSibling.textContent = value;
            break;
          case 'radio':
            targetElement.nextSibling.textContent = value;
            break;
          default:
            console.log(`No element of id: ${id} exists in canvas.`);
        }
      } else {
        console.log(`Element with id: ${id} and index: ${index} not found in canvas.`);
      }
    }
  };

  // Adding items to Item-editor
  const itemEditorAdd = (item) => {
    const ItemIndex = item.getAttribute('index');
    console.log('ItemIndex: ', ItemIndex);
    switch (item.id) {
      case 'text':
        return (
          <div className='bg-gray-800 p-4 rounded-xl shadow-lg flex items-center justify-center hover:bg-gray-700 flex-col gap-4'>
            <label htmlFor='text' className='text-2xl font-semibold text-gray-300'>Text</label>
            <input
              type='text'
              id='text'
              index={ItemIndex}
              placeholder='Enter Your Text'
              className='w-full p-3 rounded-md border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
              onChange={handleChange}
            />
          </div>
        );
      case 'button':
        return (
          <div className='bg-gray-800 p-4 rounded-xl shadow-lg flex items-center justify-center hover:bg-gray-700 flex-col gap-4'>
            <label htmlFor='button' className='text-2xl font-semibold text-gray-300'>Button</label>
            <input
              type='text'
              id='button'
              index={ItemIndex}
              placeholder='Enter Button Text'
              className='w-full p-3 rounded-md border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
              onChange={handleChange}
            />
          </div>
        );
      case 'input':
        return (
          <div className='bg-gray-800 p-4 rounded-xl shadow-lg flex items-center justify-center hover:bg-gray-700 flex-col gap-4'>
            <label htmlFor='input' className='text-2xl font-semibold text-gray-300'>Input</label>
            <input
              type='text'
              id='input'
              index={ItemIndex}
              placeholder='Enter Input Placeholder'
              className='w-full p-3 rounded-md border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
              onChange={handleChange}
            />
          </div>
        );
      case 'select':
        return (
          <div className='bg-gray-800 p-4 rounded-xl shadow-lg flex items-center justify-center hover:bg-gray-700 flex-col gap-4'>
            <label htmlFor='select' className='text-2xl font-semibold text-gray-300'>Select</label>
            <input
              type='text'
              id='select'
              index={ItemIndex}
              placeholder='Option 1,Option 2,Option 3'
              className='w-full p-3 rounded-md border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
              onChange={handleChange}
            />
          </div>
        );
      case 'checkbox':
        return (
          <div className='bg-gray-800 p-4 rounded-xl shadow-lg flex items-center justify-center hover:bg-gray-700 flex-col gap-4'>
            <label htmlFor='checkbox' className='text-2xl font-semibold text-gray-300'>Checkbox</label>
            <input
              type='text'
              id='checkbox'
              index={ItemIndex}
              placeholder='Enter Checkbox Label'
              className='w-full p-3 rounded-md border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
              onChange={handleChange}
            />
          </div>
        );
      case 'radio':
        return (
          <div className='bg-gray-800 p-4 rounded-xl shadow-lg flex items-center justify-center hover:bg-gray-700 flex-col gap-4'>
            <label htmlFor='radio' className='text-2xl font-semibold text-gray-300'>Radio</label>
            <input
              type='text'
              id='radio'
              index={ItemIndex}
              name='radio'
              placeholder='Enter Radio Label'
              className='w-full p-3 rounded-md border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
              onChange={handleChange}
            />
          </div>
        );
      case 'image':
        return (
          <div className='bg-gray-800 p-4 rounded-xl shadow-lg flex items-center justify-center hover:bg-gray-700 flex-col gap-4'>
            <label htmlFor='image' className='text-2xl font-semibold text-gray-300'>Image</label>
            <input
              type='text'
              id='image'
              index={ItemIndex}
              placeholder='Enter Image URL'
              className='w-full p-3 rounded-md border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
              onChange={handleChange}
            />
          </div>
        );
      case 'video':
        return (
          <div className='bg-gray-800 p-4 rounded-xl shadow-lg flex items-center justify-center hover:bg-gray-700 flex-col gap-4'>
            <label htmlFor='video' className='text-2xl font-semibold text-gray-300'>Video</label>
            <input
              type='text'
              id='video'
              index={ItemIndex}
              placeholder='Enter Video URL'
              className='w-full p-3 rounded-md border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
              onChange={handleChange}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className='flex flex-col w-1/3 h-screen bg-gray-900'>
      <h2 className='text-white text-3xl font-bold m-1.5 text-center'>Elements</h2>
      <div className='flex flex-col gap-2 pr-4 pl-4 pb-4 overflow-y-auto h-2/3'>
        {Allitems.map((item, index) => (
          <DraggableElement key={item.id} item={item} index={index} />
        ))}
      </div>
      <div className='w-full mt-3'>
        <h2 className='text-white text-3xl font-bold text-center'>Edit Canvas Items</h2>
        {selectedItem && (
          <div className='flex flex-col gap-2 pr-4 pl-4 pb-4'>
            {selectedItem}
          </div>
        )}
      </div>
    </div>
  );
}


export default Sidebar;