import React from 'react'
import ReactDOM from 'react-dom/client'
const URL = "https://dummyjson.com/products";
 const Card = (props) => {
  const {key, thumbnail, title, brand, price}=props //destrctured the props
   return (
     <div className="card" key={key}>
       <img
         src={thumbnail}
         alt=""
       />
       <div className="card-info">
         <h3>{title}</h3>
         <p>{brand}</p>
         <p>${price}</p>
       </div>
     </div>
   );
 };
//  const container = [Card(1), Card(2), Card(3)];
// ReactDOM.createRoot(document.getElementById('root')).render(
// container2
// )
fetch(URL)
  .then((res) => res.json())
  .then((data) => {
    const container=data.products
    // const container2=container.map(product=>Card(product.key))
    const container2 = container.map((product) =>
      // Card(
      //   product.id,
      //   product.thumbnail,
      //   product.title,
      //   product.brand,
      //   product.price,
      // ) ----> here order can affect while passing the data
      Card({
        id:product.id,
        thumbnail:product.thumbnail,
        title:product.title,
        brand:product.brand,
        price:product.price,
      }
      )
    );
    ReactDOM.createRoot(document.getElementById("root")).render(
      <div className='container'>{container2}</div>
    );
  });
