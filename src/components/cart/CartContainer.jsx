import { FaWindowClose } from "react-icons/fa";
import FoodCart from "./FoodCart";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const CartContainer = ({ handleCart }) => {
    const foodItems = useSelector((state) => state.cart.cart);
    const navigate = useNavigate();

    const handleCheckout = () => {
        // If only one item, navigate to checkout
        if (foodItems.length > 0) {
            navigate("/success");
        } else {
            // Handle multiple items or show some message if needed
            console.log("Multiple items in the cart. Proceed to cart or checkout page.");
        }
    };

    // Calculate total amount correctly
    const totalAmount = foodItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <div className="fixed right-0 shadow-md bg-white top-0 w-full md:w-[60vh] text-black p-10 h-screen z-20">
            <div className="flex justify-between items-center">
                <h2 className="capitalize font-bold text-[#184D47]">my orders</h2>
                <FaWindowClose
                    onClick={handleCart}
                    className="text-[#184D47] size-6 transition delay-150 duration-300 ease-in-out"
                />
            </div>
            <div className="border border-[#184D47] my-5 border-dashed"></div>

            {/* Map food cart */}
            <div
                className={`space-y-10 max-h-[60vh] py-10 ${
                    foodItems.length < 2 ? "overflow-y-hidden" : "overflow-y-scroll"
                }`}
            >
                {foodItems.length > 0 ? (
                    foodItems.map((item) => <FoodCart key={item.id} item={item} />)
                ) : (
                    <h2>No cart added</h2>
                )}
            </div>

            <div className="sticky bottom-0 bg-white py-5 w-full space-y-2">
                <div className="border border-[#184D47] my-5 border-dashed"></div>
                <h2 className="capitalize font-semibold text-[#184D47]">total items: {foodItems.length}</h2>
                <h2 className="capitalize font-semibold text-[#184D47]">
                    Total Amount: {totalAmount} tk
                </h2>
                <button
                    className="capitalize font-bold text-white bg-[#184D47] w-[400px] md:w-[300px] px-2 py-2 rounded "
                    onClick={() => {
                        handleCheckout(); // Call checkout handler
                        handleCart(false); // Close cart
                    }}
                    disabled={foodItems.length === 0}
                >
                    Check out
                </button>
            </div>
        </div>
    );
};

export default CartContainer;
