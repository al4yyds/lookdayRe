import './Rank.scss';

const ranklists = [
  [
    { id: 1, name: 'Product A1', rank: 1 },
    { id: 2, name: 'Product B1', rank: 2 },
    { id: 3, name: 'Product C1', rank: 3 },
    // Add more products as needed
  ],
  [
    { id: 4, name: 'Product A2', rank: 1 },
    { id: 5, name: 'Product B2', rank: 2 },
    { id: 6, name: 'Product C2', rank: 3 },
    // Add more products as needed
  ],
  [
    { id: 7, name: 'Product A3', rank: 1 },
    { id: 8, name: 'Product B3', rank: 2 },
    { id: 9, name: 'Product C3', rank: 3 },
    // Add more products as needed
  ],
];

const Rank = () => {
  return (
    <section className="sectionRank">
      <h2 className="rank-title">Top Ranked Products</h2>
      <p className="rank-subtitle">Explore our most popular products.</p>
      <div className="product-rankings">
        {ranklists.map((ranklist, index) => (
          <div key={index} className="product-ranking">
            <h2>Top {index + 1}</h2>
            <ul>
              {ranklist.map((product) => (
                <li key={product.id} className="product-item">
                  <span className="rank">#{product.rank}</span>
                  <span className="name">{product.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rank;
