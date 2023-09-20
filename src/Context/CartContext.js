import { createContext, useState } from "react";
import baseInstance from "../Networking/baseInstance";
import toast from "react-hot-toast";
export const CartContext = createContext();

const appUrl = window.location.origin;

const CartContextProvider = ({children}) => {
  const [numOfCartItems, setNumOfCartItems] = useState(0);
  const [cartDetails, setCartDetails] = useState(null);
  const [loading, setLoading] = useState(false);


  const headers = {
    token: localStorage.getItem("userToken"),
  };


 
  const AddToCart = async(productId) => {
    try {
      const {data} = await baseInstance.post("cart",
        { productId: productId },
        { headers: headers }
      );
      if (data.status === "success") {
        setCartDetails(data.data)
        setNumOfCartItems(data.numOfCartItems)
        toast.success(data.message, {
          duration: 2000,
          className: "text-main fw-bolder",
        });
      } 
    } catch (error) {
      toast.error(error.response.data.message, {
        duration: 2000,
        className: "text-danger fw-bolder",
      });
    }
    finally{
    }
      
  };

  const getCart = async () => {
    try {
      const {data} = await baseInstance.get(`cart`, {
        headers: headers,
      });
      if (data.status === "success") {

        setCartDetails(data.data)
       
        setNumOfCartItems(data.numOfCartItems)
      } 
    } catch (error) {
      return error
    }
    finally{
    }
  };

  const RemoveItem = async (productId) => {
    try {
      const {data} = await baseInstance.delete(`cart/${productId}`, {
        headers: headers,
      });
      if (data.status) {
        setCartDetails(data.data);
        setNumOfCartItems(data.numOfCartItems)
        toast.success(data.status, {
          duration: 2000,
          className: "text-danger",
                iconTheme: {
                   primary: '#dc3545',
                   secondary: '#fff',
                },
        });
      } 
    } 
    catch (error) {
      toast.error(error.response.data.message, {
        duration: 2000,
        className: "text-danger fw-bolder",
      });
    }
    finally{
    }
 }; 

 const ClearAllProduct = async () => {
  try {
    const {data} = await baseInstance.delete(`cart/`, {
      headers: headers,
    }); 
    if (data.message) {
      setCartDetails(null);
      setNumOfCartItems(0)
      toast.success(data.message, {
        duration: 2000,
        className: "text-danger",
              iconTheme: {
                 primary: '#dc3545',
                 secondary: '#fff',
              },
      });
    } 
  } 
  catch (error) {
    toast.error(error.response.data.message, {
      duration: 2000,
      className: "text-danger fw-bolder",
    });
  }
  finally{
  }
};

  const UpdateProduct = async (productId, count) => {
    try {
      if(count >0){
        const {data} = await baseInstance.put(`cart/${productId}`,
        { count: count },
        { headers: headers }
      );
      toast.success(data.status,{duration:2000,className:"text-success"});
      setCartDetails(data.data)
      setNumOfCartItems(data.numOfCartItems)
    } 
    else{
        RemoveItem(productId);
    }
   
      }
     
    catch (error) {
      toast.error(error.response.data.message, {
        duration: 2000,
        className: "text-danger fw-bolder",
      });
    }
    finally{
    }
  };

 
  const onlinePayment = async (cartDetails, shippingAddress) => {
    try {
      setLoading(true);  
      const {data} = await baseInstance.post(
        `orders/checkout-session/${cartDetails?._id}?url=${appUrl}`,
        { shippingAddress: shippingAddress },
        { headers: headers }
      );
      if (data?.status=== "success") {
        toast.success(data.status,
        {duration:2000,className:"text-success px-4 fw-bolder"});
        window.location.href = data.session.url;
      }
    } 
    catch (error) {
      toast.error(error.response.data.message, { duration: 2000, className: "text-danger px-4 fw-bolder" });
    }
    finally{
      setLoading(false);
    }
  };





  return (
    <CartContext.Provider
      value={{
        AddToCart,
        getCart,
        UpdateProduct,
        RemoveItem,
        ClearAllProduct,
        numOfCartItems,
        setNumOfCartItems,
        onlinePayment,
        cartDetails,
         setCartDetails,
         loading,
         setLoading
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
