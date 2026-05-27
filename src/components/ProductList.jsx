import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

function ProductList() {

  const dispatch = useDispatch();

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
    ]
  };

  return (
    <div>

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
                  onClick={() =>
                    dispatch(addItem(plant))
                  }
                >
                  Add to Cart
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
