import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import FoodCard from "./FoodCard";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../../redux/categorySlice";
import { setSearch } from "../../redux/searchSlice";

const CardContainer = () => {
    const [foodItems, setFoodItems] = useState([]);
    const dispatch = useDispatch();

    // Get Redux state values
    const selectedCategory = useSelector((state) => state.category.category);
    const searchQuery = useSelector((state) => state.search.search).trim().toLowerCase();
     // Get search term from Redux

    // Fetch food items from JSON file
    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((data) => setFoodItems(data));
    }, []);

    // Filter food items based on search query and selected category

    const filteredItems = foodItems.filter(
        (item) =>
            // includes startsWith

            item.name.toLowerCase().includes(searchQuery) &&
            (selectedCategory === "All" || item.category === selectedCategory)
    );

    
    
    
    

    // Extract unique categories from foodItems (not filteredItems)
    const filterCategoryObject = new Set(foodItems.map((item) => item.category));
    const filterCategory = ["All", ...filterCategoryObject];

    return (
        <div className="w-[90%] mx-auto">
            {/* Search Input */}
            <div className="flex justify-center my-5">
                <div className="relative">
                    <input
                        type="search"
                        className="border-2 border-[#184D47] rounded-md py-1 px-5 outline-none pr-12"
                        placeholder="Search food here"
                        value={searchQuery}
                        onChange={(e) => dispatch(setSearch(e.target.value))} // Update Redux state
                    />
                    <IoIosSearch
                        className="absolute top-1/2 right-3 -translate-y-1/2 text-[#184D47]"
                        size={25}
                    />
                </div>
            </div>

            {/* Category Buttons */}
            <div>
                <h1 className="text-center md:text-start font-semibold text-[#184D47] capitalize text-xl">
                    Total food item: {filteredItems.length}
                </h1>
                <div>
                    <h2 className="capitalize font-semibold text-center text-[#184D47] text-2xl">
                        Our Menu Category
                    </h2>
                    <div className="flex flex-wrap justify-center my-2 gap-5">
                        {filterCategory.map((item, index) => (
                            <button
                                key={index}
                                className={`capitalize border-2 border-[#184D47] px-3 py-1 font-bold rounded-md ${
                                    selectedCategory === item
                                        ? "bg-[#184D47] text-white"
                                        : "text-[#184D47]"
                                }`}
                                onClick={() => dispatch(setSelectedCategory(item))}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Display Food Cards */}
                <div className="my-5 grid md:grid-cols-3 gap-5 justify-center">
                    {filteredItems.map((item) => (
                        <FoodCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardContainer;
