import './App.css';
import data from './data/items.json'
import blank from './data/blank-slug.png'

function App() {
  const pantry_items = data
  const blank_image = blank
  console.log(pantry_items)

  return (
    <div className="App">
      <h1>Picking Items For the Pantry</h1>
      <div>
        <label>Pick an Item</label>
        <input></input>
      </div>
      <div className="Pantry">
        <ul className="Pantry-items" >
          {Object.values(pantry_items.data).map((item, index) => (
            <li key={index}>
              <div className="item">
                {<img src={item.slug ? `https://spoonacular.com/cdn/ingredients_100x100/${item.slug}.jpg` :
                 
                 blank_image} alt={item.name} />}
                {item.name}
              </div>
            </li>
          ))}

        </ul>
      </div>
      
    </div>
  );
}

export default App;
