import { useState, useEffect, useContext } from 'react';
import { assets } from '../../assets/assets';
import './MyOrders.css';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles
import Loader from '../../components/Loader/Loader';

const MyOrders = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { url, token, setToken } = useContext(StoreContext);

    const fetchOrders = async () => {
        try {
            const response = await axios.post(`${url}/api/order/userorders`, {}, {
                headers: { token },
            });
            setData(response.data.data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token]);

    if (isLoading) {
        return <Loader/>;
    }

    return (
        <div className="my-orders">
            <h2>My Orders</h2>
            <div className="container">
                {data.length > 0 ? (
                    data.map((order, index) => (
                        <div key={index} className="my-orders-order">
                            <img src={assets.parcel_icon} alt="Parcel" />
                            <p>
                                {order.items.map((item, idx) =>
                                    `${item.name} x ${item.quantity}${idx === order.items.length - 1 ? '' : ', '}`
                                )}
                            </p>
                            <p>₹{order.amount}</p>
                            <p>Items: {order.items.length}</p>
                            <p>
                                <span>&#x25cf;</span>
                                <b>{order.status}</b>
                            </p>
                        </div>
                    ))
                ) : (
                    <p>No orders found.</p>
                )}
            </div>
        </div>
    );
};

export default MyOrders;
