import './App.css';
import {useState} from 'react'
const products=[
{
  "index": 0,
  "isSale": false,
  "price": "$49.99",
  "productImage": "Product_1.jpeg",
  "productName": "Pure Blonde Crate",
  "type": "Beer"
  },
  {
  "index": 1,
  "isSale": true,
  "price": "$14.99",
  "productImage": "Product_2.jpeg",
  "productName": "Victoria Bitter 4x6x375ml",
  "type": "Beer"
  },
  {
  "index": 2,
  "isSale": false,
  "price": "$24.99",
  "productImage": "Product_3.jpeg",
  "productName": "Kirin Megumi 4x6x330ml",
  "type": "Beer"
  },
  {
  "index": 3,
  "isSale": true,
  "price": "$4.99",
  "productImage": "Product_4.jpeg",
  "productName": "Panhead CH Johnny Octane Can",
  "type": "Beer"
  },
  {
  "index": 4,
  "isSale": false,
  "price": "$25.99",
  "productImage": "Product_5.jpeg",
  "productName": "Aquila Spark SauvB Bottle",
  "type": "Wine"
  },
  {
  "index": 5,
  "isSale": true,
  "price": "$29.99",
  "productImage": "Product_6.jpeg",
  "productName": "Bernadino Spumante Bottle",
  "type": "Wine"
  }
  ,
  {
  "index": 6,
  "isSale": true,
  "price": "$69.99",
  "productImage": "Product_7.jpeg",
  "productName": "Grey Goose Orginal 10x12x50ml",
  "type": "Spirits"
  },
  {
  "index": 7,
  "isSale": false,
  "price": "$49.99",
  "productImage": "Product_8.jpeg",
  "productName": "Scrumpy RBerry 6x1.25L",
  "type": "Cider"
  }
 ]
function App() {
  const [filter, setFilter] = useState("All");
  const filterOptions = ["All", "Beer", "Wine","Spirits","Cider"];
  const filteredProducts = filter === "All" ? products : products.filter((p) => p.type === filter);
  return (
    <div>     
      <div className="filter">
        Filter by 
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          {filterOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
      <div id="img-wrapper">
          {filteredProducts.map((product) => (

            product.isSale === true ?
             
             <div id="boxit">
              <div  key={product.id}>
                {console.log(product.productImage)}
                <div className = "head-text">
                  <div className = "head-image">
                      <img src={`./pics/${product.productImage}`} alt="drinks" width="100" height="100"/>
                  </div>
                  <div class='text-on-image'><h3> ON SALE </h3></div> 
                </div>
                <h3>{product.productName}</h3>
                <p>{product.price}</p>
              </div>
            </div>

            :

            <div id="boxit">
              <div  key={product.id}>
                {console.log(product.productImage)}
                      <img src={`./pics/${product.productImage}`} alt="drinks" width="100" height="100"/>                  
                <h3>{product.productName}</h3>
                <p>{product.price}</p>
              </div>
            </div>

            
          ))}
          </div>
        </div>
      </div>
  );
    
  
}

export default App;
