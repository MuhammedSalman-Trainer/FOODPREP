import {useContext,useEffect}from 'react'
import './Verify.css'
import {useSearchParams,useNavigate} from "react-router-dom";
import {StoreContext} from '../../Context/StoreContext'
import axios from 'axios'
import Loader from '../../components/Loader/Loader'
const Verify = () => {
    const [searchParams,setSearchParams] = useSearchParams();
    const success = searchParams.get('success');
    const orderId= searchParams.get('orderId');
    const {url} = useContext(StoreContext)
    const navigate = useNavigate()
    const verifyPayment = async () => {
        const response = await axios.post(url+"/api/order/verify",{success,orderId})
        if(response.data.success)
            navigate("/myorders")
        else
            navigate("/")
    }
    useEffect(()=>{
        verifyPayment()
    },[])

  return (
    <Loader/>
  )
}

export default Verify