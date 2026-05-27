function ProductList() {

  const plants = [
    {
      id: 1,
      name: "Aloe Vera",
      price: "$10",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Snake Plant",
      price: "$15",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      name: "Peace Lily",
      price: "$20",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 4,
      name: "Spider Plant",
      price: "$12",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 5,
      name: "Money Plant",
      price: "$18",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 6,
      name: "Cactus",
      price: "$8",
      image: "https://via.placeholder.com/150"
    }
  ];

  return (
    <div>
      <h1>Plant Products</h1>

      <div>
        {plants.map((plant) => (
          <div key={plant.id}>
            <img
              src={plant.image}
              alt={plant.name}
              width="150"
            />

            <h3>{plant.name}</h3>

            <p>{plant.price}</p>

            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
