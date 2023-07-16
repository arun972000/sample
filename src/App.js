import './App.css';
import Head from './header';
import Card from './cards';
import React, { useState } from 'react';

function App() {
  let data = [
    { id:1,title: "Fancy Product", price: "$40.00 - $80.00",star:5 },
    { id:2,title: "Special Item", price: "$18.00" ,star:5},
    { id:3,title: "Sale Item", price: "$25.00" ,star:4},
    { id:4,title: "Popular Item", price: "$40.00 - $80.00" ,star:5},
    { id:5,title: "Fancy Product", price: "$40.00 - $80.00",star:3 },
    { id:6,title: "Special Item", price: "$18.00" ,star:5},
    { id:7,title: "Sale Item", price: "$25.00" ,star:4},
    { id:8,title: "Popular Item", price: "$40.00 - $80.00",star:5 }
  ];
  let [incWishlist, decWishlist] = useState([]);

  function addWishlist(item) {
    decWishlist([...incWishlist, item]);
  }

  function decreaseWishlist(item) {
    decWishlist(incWishlist.filter(i => item !== i));
  }

  return (
    <div className="App">
      <Head count={incWishlist.length} />
      <div className="container mt-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          {data.map(item => {
            return (
              <Card key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                increase={addWishlist}
                decrease={decreaseWishlist}
                star={item.star}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
