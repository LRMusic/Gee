import { useState } from 'react';
import { createItem } from '../api';
export default function ItemForm({ onItemAdded }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [serialNumber, setSerialNumber] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createItem({ name, description, price, serialNumber });
        setName('');
        setDescription('');
        setPrice('');
        setSerialNumber('');
        onItemAdded();
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>

            <h2>Add New Item</h2>
            <div>
                <input
                    placeholder="Item name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <input
                    placeholder="Description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    required />
            </div>
            <div>
                <input
                    placeholder="Price"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    required />
            </div>
            <div>
                <input
                    placeholder="Serial Number "
                    value={serialNumber}
                    onChange={e => setSerialNumber(e.target.value)}
                    required />
            </div>

            {/* TODO: Add price input here */}
            <button type="submit">Add Item</button>
        </form>
    );
}