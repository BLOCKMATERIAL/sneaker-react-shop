import './App.scss';

function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2 className="mb-30">Корзина</h2>

          <div className="cartItem d-flex align-center mb-20">
           <div  
            style={{backgroundImage: 'url(img/sneakers/1.jpg)'}}  
            className="cartItemImg"> </div>

          <div className="mr-20 flex">
             <p className="mb-5">Мужские кроссовки Nike Air Max 2021</p>
             <b>12 999 грн</b>
          </div>
          <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
    </div>
    </div>
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img height={40} width={40} src="/img/logo.png"/>
          <div className="logoText">
            <h3 className="text-uppercase">Sneaker Studio</h3>
            <p className="opacity-5">Buy only casual sneakers</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30"> 
          <img height={18} width={18} src="/img/cart.svg"/>
            <span>
              1205грн
            </span>
          </li>
          <li>
          <img  height={18} width={18} src="/img/user.svg"/>         
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
           <h1 className="">Все кроссовки</h1>
           <div className="search-block">
            <img src='/img/search.svg' alt='Seacrh'></img>
            <input placeholder="Поиск"></input>
           </div>
        </div>
       
        <div className="card">
          <div className="favorite">
               <img src="/img/heart-unliked.svg" alt="Unliked"></img>
          </div>
        <img  width={133} height={112} src="/img/sneakers/1.jpg" alt="" />
        <h5>Мужские кроссовки Nike Blade</h5>
        <div className="d-flex  justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>14 000 uah</b>
          </div>
          <button className="button">
            <img width="11" height="11" src="/img/plus.svg" alt="Plus" />
          </button>
        </div>
        </div>
      </div>

    </div>


  );
}

export default App;
