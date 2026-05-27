function ProductList() {
  const plants = [
    { id: 1, name: "Aloe Vera", price: "$10" },
    { id: 2, name: "Snake Plant", price: "$15" },
    { id: 3, name: "Peace Lily", price: "$20" },
    { id: 4, name: "Spider Plant", price: "$12" },
    { id: 5, name: "Money Plant", price: "$18" },
    { id: 6, name: "Cactus", price: "$8" }
  ];

  return (
    <div>
      <h2>Plant Products</h2>

      {plants.map((plant) => (
        <div key={plant.id}>
          <h3>{plant.name}</h3>
          <p>{plant.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
