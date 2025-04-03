import React from 'react';
import { useNavigate } from 'react-router-dom';

function Template() {
    const navigate = useNavigate();
    const teplateCard = [
        {
            id: 1,
            title: "Template 1",
            description: "Canvas With Flex-Column",
            items: [
                { id: "text", name: "Text", type: "text", content: "Template 1 Text" },
                { id: "image", name: "Image", type: "image", src: "https://picsum.photos/200" },
                { id: "button", name: "Button", type: "button", content: "Template 1 Button" },
            ]
        },
        {
            id: 2,
            title: "Template 2",
            description: "Canvas With Flex-Row",
            items: [
                { id: "text", name: "Text", type: "text", content: "Template 2 Text" },
                { id: "select", name: "Select", type: "select", options: ["Option 1", "Option 2", "Option 3"] },
                { id: "video", name: "Video", type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
            ]
        },
    ];

    const handleCardClick = (id,items) => {
        navigate('/dashboard', { state: { templateId: id , templateItems : items} }); // Pass the template ID as state
    };

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className="text-2xl font-bold">Choose a Template</h1>
            <div className="flex mt-3 items-center justify-evenly">
                {teplateCard.map((template) => (
                    <div
                        key={template.id}
                        className="border p-4 cursor-pointer m-2"
                        onClick={() => handleCardClick(template.id,template.items)} // Pass the template ID
                    >
                        <h2 className="text-xl font-bold">{template.title}</h2>
                        <p>{template.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Template;