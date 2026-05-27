import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { useState } from "react";

function ProductList() {

  const dispatch = useDispatch();

  const [addedItems, setAddedItems] = useState([]);

  const plants = {

    Indoor: [
      {
        id: 1,
        name: "Snake Plant",
        price: 15,
        image: "https://via.placeholder.com/150"
      },
      {
        id: 2,
        name: "Peace Lily",
        price: 20,
        image: "https://via.placeholder.com/150"
      }
    ],

    Outdoor: [
      {
        id: 3,
        name: "Rose Plant",
        price: 25,
        image: "https://via.placeholder.com/150"
      },
      {
        id: 4,
        name: "Aloe Vera",
        price: 10,
        image: "https://via.placeholder.com/150"
      }
    ],

    Medicinal: [
      {
        id: 5,
        name: "Tulsi",
        price: 12,
        image: "https://via.placeholder.com/150"
      },
      {
        id: 6,
        name: "Neem",
        price: 18,
        image: "https://via.placeholder.com/150"
      }
    ]
  };

  const handleAddToCart = (plant) => {

    dispatch(addItem(plant));

    setAddedItems([...addedItems, plant.id]);
  };

  return (
    <div>

      <nav>
        <h1>Paradise Nursery</h1>
      </nav>

      <h1>Plant Products</h1>

      {Object.entries(plants).map(
        ([category, items]) => (

          <div key={category}>

            <h2>{category}</h2>

            {items.map((plant) => (

              <div key={plant.id}>

                <img
                  src={plant.image}
                  alt={plant.name}
                  width="150"
                />

                <h3>{plant.name}</h3>

                <p>${plant.price}</p>

                <button
                  disabled={
                    addedItems.includes(plant.id)
                  }
                  onClick={() =>
                    handleAddToCart(plant)
                  }
                >
                  {
                    addedItems.includes(plant.id)
                    ? "Added to Cart"
                    : "Add to Cart"
                  }
                </button>

              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
}

export default ProductList;
