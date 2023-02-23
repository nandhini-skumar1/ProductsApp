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
  },
  {
  "index": 8,
  "isSale": true,
  "price": "$55.99",
  "productImage": "Product_9.jpg",
  "productName": "Carlton Draught 4x6x330ml",
  "type": "Beer"
  },
  {
  "index": 9,
  "isSale": false,
  "price": "$48.99",
  "productImage": "Product_10.jpg",
  "productName": "Mercury Draught 375 ml",
      "type": "Cider"
  },
  {
  "index": 10,
  "isSale": false,
  "price": "$45.95",
  "productImage": "Product_11.jpg",
  "productName": "Smirnoff Red Label Vodka 1.125 L",
  "type": "Spirits"
  },
  {
  "index": 11,
  "isSale": false,
  "price": "$45.95",
  "productImage": "Product_12.jpeg",
  "productName": "Captain Morgan Original Spiced Gold 700ml",
  "type": "Spirits"
  },
  {
  "index": 12,
  "isSale": false,
  "price": "$45.95",
  "productImage": "Product_13.jpg",
  "productName": "Somersby Apple Cider 375ml (Case of 30 Cans)",
  "type": "Cider"
  }
 ]
function App() {
  const [filter, setFilter] = useState("All");
  const filterOptions = ["All", "Beer", "Wine","Spirits","Cider"];
  const filteredProductsByType = filter === "All" ? products : products.filter((p) => p.type === filter);

  const [searchText, setSearchText] = useState("");

  const filteredProducts = filteredProductsByType.filter((product) =>
    product.productName.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>     


      <h1 align="center"> Nandhini's Fine Sprits </h1>
      <td width="30%">
      </td>
      <table align="center" width="95%"> 
      <tbody>
        <tr> 
           <td align="center">Products Search 
           
           <input
                type="text"
                placeholder="  Search by product name  "
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
              />
            </td>
        </tr>
          <tr>                 
           <td align="right" width="37%">
              <div className="filter">
                Filter by Type : 
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                  {filterOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div> 
          </td>

        </tr>
      </tbody>
      </table>

      <br></br>
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
                  <div className='text-on-image'><h3> ON SALE </h3></div> 
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

  );
    
  
}

export default App;
