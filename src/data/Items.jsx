export const Allitems = [
    { id: "text", name: "Text", type: "text", content: "Your Text Here" },
    { id: "button", name: "Button", type: "button", content: "Click Me" },
    { id: "input", name: "Input", type: "input", placeholder: "Your Input Here" },
    { id: "image", name: "Image", type: "image", src: "https://picsum.photos/200" },
    { id: "select", name: "Select", type: "select", options: ["Option 1", "Option 2", "Option 3"] },
    { id: "checkbox", name: "Checkbox", type: "checkbox", label: "Check Me" },
    { id: "radio", name: "Radio", type: "radio", label: "Select Me" },
    { id: "video", name: "Video", type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
];



export const elementMaker = (item, index) => {
  switch (item.type) {
    case 'text':
      return (
        <p
          index={index}
          id={item.id}
          key={index}
          className='text-white m-1 text-3xl italic'
        >
          {item.content}
        </p>
      );
    case 'image':
      return (
        <img
          index={index}
          id={item.id}
          key={index}
          src={item.src}
          alt={item.name}
          className='w-64 h-64 rounded-2xl'
        />
      );
    case 'button':
      return (
        <button
          index={index}
          id={item.id}
          key={index}
        >
          {item.content}
        </button>
      );
    case 'input':
      return (
        <input
          index={index}
          id={item.id}
          key={index}
          type="text"
          placeholder={item.placeholder}
          className='border p-2 rounded'
        />
      );
    case 'select':
      return (
        <select
          index={index}
          id={item.id}
          key={index}
          className='border p-2 rounded bg-gray-950'
        >
          {item.options.map((option, optionIndex) => (
            <option
              index={optionIndex}
              id={item.id}
              key={optionIndex}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>
      );
    case 'checkbox':
      return (
        <label
          index={index}
          key={index}
          className='flex items-center'
        >
          <input
            id="checkbox"
            index={index}
            type="checkbox"
            className='mr-2'
          />
          {item.label}
        </label>
      );
    case 'radio':
      return (
        <label
          index={index}
          key={index}
          className='flex items-center'
        >
          <input
            index={index}
            id="radio"
            type="radio"
            name="radio"
            className='mr-2'
          />
          {item.label}
        </label>
      );
    case 'video':
      return (
        <video
          index={index}
          id={item.id}
          key={index}
          src={item.src}
          controls
          className='w-64 h-auto rounded-2xl'
        />
      );
    default:
      return null;
  }
};