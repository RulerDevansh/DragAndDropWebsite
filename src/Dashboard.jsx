import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function Dashboard() {
    const location = useLocation();
    const { templateId , templateItems } = location.state || {}; // Extract the template ID from state
    const [items, setItems] = React.useState(templateItems);

    return (
        <DndProvider backend={HTML5Backend}>
            <div className='flex'>
                <Sidebar items={items}/>
                <Canvas temp={templateId} items={items} setItems={setItems}/>
            </div>
        </DndProvider>
    );
}

export default Dashboard;