import data from "../data/PantryItems.json";
import '../styles/IngredientsBox.css'

export default function IngredientsBox() {
  const all_items = data;

  // for testing only, remove and pass any list of ingredients
  const items_list = [
    "avacado", // mispelled on purpose
    "meat",
    "mustard",
    "onion",
    "panko",
    "pesto",
    "roma tomatoes",
  ];
  
  // filters PantryItems by name, return image URL
  const getItemImageUrl = ((name) => {
    if (!Object.values(all_items.data).filter(item => item.name === name)[0]) {
      return 'no.png'
    } else {
      const ingredient = Object.values(all_items.data).filter(item => item.name === name)[0]
      return ingredient.image
    }
  })

  return (
    <div className="IngredientsBox">
      <ul className="IngredientsBox-items">
        {items_list.map((item, index) => (
          <li key={index}>
            <div className="item">
              {
                <img
                  src={`https://spoonacular.com/cdn/ingredients_100x100/${getItemImageUrl(item)}`}
                  alt={item}
                />
              }
              {item}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
