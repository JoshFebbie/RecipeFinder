// import React, { useState } from "react";
// import styles from "./NewRecipe.module.css";
// import { Formik } from "formik";
// import axios from "axios";

// const NewRecipeScreen = () => {
//   const [ingredients, setIngredients] = useState([]);
//   const [name, setName] = useState("");
//   const [quantity, setQuantity] = useState("");
//   const url = "https://recipes.devmountain.com";

//   const addIngredient = () => {
//     setIngredients([...ingredients, { name, quantity }]);
//     setName("");
//     setQuantity("");
//   };

//   const initialValues = {
//     type: "",
//     recipeName: "",
//     imageURL: "",
//     prepTime: "",
//     cookTime: "",
//     serves: "",
//     ingredients: [],
//     instructions: "",
//   };

//   const onSubmit = (values) => {
//     values.ingredients = ingredients;
//     console.log(values);

//     axios
//       .post(`https://recipes.devmountain.com/recipes`, values)
//       .then((res) => {
//         console.log(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   // const ingredientDisplay = ingredients.map((ing) => {
//   //   return (
//   //     <li>
//   //       {ing.quantity} {ing.name}
//   //     </li>
//   //   );
//   //   });

//   const ingredientDisplay = ingredients.map((ing, index) => {
//     const handleDelete = () => {
//       const newIngredients = [...ingredients];
//       newIngredients.splice(index, 1);
//       setIngredients(newIngredients);
//     };
//     return (
//       <li>
//         {ing.quantity} {ing.name}
//         <button class="new-btn" onClick={handleDelete}>
//           Remove
//         </button>
//       </li>
//     );
//   });

//   return (
//     <section>
//       <h1 id="newh1">Tell us about your Recipe!</h1>
//       <Formik initialValues={initialValues} onSubmit={onSubmit}>
//         {({ values, handleChange, handleSubmit }) => {
//           return (
//             <form onSubmit={handleSubmit}>
//               <div className={styles.input_container}>
//                 <input
//                   placeholder="Title your Recipe!"
//                   value={values.recipeName}
//                   onChange={handleChange}
//                   name="recipeName"
//                 />
//                 <input
//                   placeholder="Paste an Image URL"
//                   value={values.imageURL}
//                   onChange={handleChange}
//                   name="imageURL"
//                 />
//               </div>
//               <div className={styles.radio_container}>
//                 <span>
//                   <input
//                     type="radio"
//                     value="Cook"
//                     onChange={handleChange}
//                     name="type"
//                   />
//                   <h5>Cook</h5>
//                 </span>
//                 <span>
//                   <input
//                     type="radio"
//                     value="Bake"
//                     onChange={handleChange}
//                     name="type"
//                   />
//                   <h5>Bake</h5>
//                 </span>
//                 <span>
//                   <input
//                     type="radio"
//                     value="Drink"
//                     onChange={handleChange}
//                     name="type"
//                   />
//                   <h5>Drink</h5>
//                 </span>
//               </div>
//               <div className={styles.input_container}>
//                 <input
//                   placeholder="Prep Time"
//                   value={values.prepTime}
//                   onChange={handleChange}
//                   name="prepTime"
//                 />
//                 <input
//                   placeholder="Cook Time"
//                   value={values.cookTime}
//                   onChange={handleChange}
//                   name="cookTime"
//                 />
//                 <input
//                   placeholder="Serves"
//                   value={values.serves}
//                   onChange={handleChange}
//                   name="serves"
//                 />
//               </div>
//               <h4>Ingredients</h4>
//               <div className={styles.input_container}>
//                 <div className={styles.ingredient_inputs}>
//                   <input
//                     placeholder="Ingredient"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                   />
//                   <input
//                     placeholder="Quantity"
//                     value={quantity}
//                     onChange={(e) => setQuantity(e.target.value)}
//                   />
//                 </div>
//                 <ul>{ingredientDisplay}</ul>
//               </div>
//               <button
//                 type="button"
//                 className="orange-btn"
//                 onClick={addIngredient}
//               >
//                 Add Ingredient
//               </button>
//               <textarea
//                 placeholder="Type your instructions"
//                 rows={5}
//                 value={values.instructions}
//                 onChange={handleChange}
//                 name="instructions"
//               />
//               <button type="submit" className="blue-btn">
//                 Submit
//               </button>
//             </form>
//           );
//         }}
//       </Formik>
//     </section>
//   );
// };
// export default NewRecipeScreen;

//================newCode====================//

// import React, { useState } from "react";
// import styles from "./NewRecipe.module.css";
// import { Formik } from "formik";
// import axios from "axios";

// const NewRecipeScreen = () => {
//   const [ingredients, setIngredients] = useState([]);
//   const [name, setName] = useState("");
//   const [quantity, setQuantity] = useState("");
//   const url = "https://recipes.devmountain.com";

//   const addIngredient = () => {
//     setIngredients([...ingredients, { name, quantity }]);
//     setName("");
//     setQuantity("");
//   };

//   const initialValues = {
//     type: "",
//     recipeName: "",
//     imageURL: "",
//     prepTime: "",
//     cookTime: "",
//     serves: "",
//     ingredients: [],
//     instructions: "",
//   };

//   const handleSubmit = (values, { resetForm }) => {
//     values.ingredients = ingredients;
//     console.log(values);

//     axios
//       .post(`${url}/recipes`, values)
//       .then((res) => {
//         console.log(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//     // Clear form inputs
//     setIngredients([]);
//     resetForm({ values: "" });
//   };

//   const handleDeleteIngredient = (index) => {
//     const newIngredients = [...ingredients];
//     newIngredients.splice(index, 1);
//     setIngredients(newIngredients);
//   };

//   const ingredientDisplay = ingredients.map((ing, index) => {
//     return (
//       <li key={index}>
//         {ing.quantity} {ing.name}
//         <button
//           className="new-btn"
//           onClick={(e) => {
//             e.preventDefault();
//             handleDeleteIngredient(index);
//           }}
//         >
//           Remove
//         </button>
//       </li>
//     );
//   });

//   return (
//     <section>
//       <h1 id="newh1">Tell us about your Recipe!</h1>
//       <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//         {({ values, handleChange, handleSubmit }) => {
//           return (
//             <form onSubmit={handleSubmit}>
//               <div className={styles.input_container}>
//                 <input
//                   placeholder="Title your Recipe!"
//                   value={values.recipeName}
//                   onChange={handleChange}
//                   name="recipeName"
//                 />
//                 <input
//                   placeholder="Paste an Image URL"
//                   value={values.imageURL}
//                   onChange={handleChange}
//                   name="imageURL"
//                 />
//               </div>
//               <div className={styles.radio_container}>
//                 <span>
//                   <input
//                     type="radio"
//                     value="Cook"
//                     onChange={handleChange}
//                     name="type"
//                   />
//                   <h5>Cook</h5>
//                 </span>
//                 <span>
//                   <input
//                     type="radio"
//                     value="Bake"
//                     onChange={handleChange}
//                     name="type"
//                   />
//                   <h5>Bake</h5>
//                 </span>
//                 <span>
//                   <input
//                     type="radio"
//                     value="Drink"
//                     onChange={handleChange}
//                     name="type"
//                   />
//                   <h5>Drink</h5>
//                 </span>
//               </div>
//               <div className={styles.input_container}>
//                 <input
//                   placeholder="Prep Time"
//                   value={values.prepTime}
//                   onChange={handleChange}
//                   name="prepTime"
//                 />
//                 <input
//                   placeholder="Cook Time"
//                   value={values.cookTime}
//                   onChange={handleChange}
//                   name="cookTime"
//                 />
//                 <input
//                   placeholder="Serves"
//                   value={values.serves}
//                   onChange={handleChange}
//                   name="serves"
//                 />
//               </div>
//               <h4>Ingredients</h4>
//               <div className={styles.input_container}>
//                 <div className={styles.ingredient_inputs}>
//                   <input
//                     placeholder="Ingredient"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                   />
//                   <input
//                     placeholder="Quantity"
//                     value={quantity}
//                     onChange={(e) => setQuantity(e.target.value)}
//                   />
//                 </div>
//                 <ul>{ingredientDisplay}</ul>
//               </div>
              
//               <button
//                 type="button"
//                 className="orange-btn"
//                 onClick={addIngredient}
//               >
               
//                 Add Ingredient
//               </button>
//               <textarea
//                 placeholder="Type your instructions"
//                 rows={5}
//                 value={values.instructions}
//                 onChange={handleChange}
//                 name="instructions"
//               />
//               <button type="submit" className="blue-btn">
//                 Submit
//               </button>
//             </form>
//           );
//         }}
//       </Formik>
//     </section>
//   );
// };
// export default NewRecipeScreen;

//================newCode====================//

import React, { useState } from "react";
import styles from "./NewRecipe.module.css";
import { Formik } from "formik";
import axios from "axios";

const Modal = () => {
  return (
    <div className={styles.modal}>
      <h2>Submission successful!</h2>
      <p>Your recipe has been submitted successfully.</p>
    </div>
  );
};

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [showModal, setShowModal] = useState(false); // Add new state variable
  const url = "https://recipes.devmountain.com";

  const addIngredient = () => {
    setIngredients([...ingredients, { name, quantity }]);
    setName("");
    setQuantity("");
  };

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    values.ingredients = ingredients;
    console.log(values);

    axios
      .post(`${url}/recipes`, values)
      .then((res) => {
        console.log(res.data);
        setShowModal(true);// Show modal after successful post request
      })
      .catch((err) => {
        console.log(err);
      });

    // Clear form inputs
    setIngredients([]);
    resetForm({ values: "" });
  };

  const handleDeleteIngredient = (index) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  const ingredientDisplay = ingredients.map((ing, index) => {
    return (
      <li key={index}>
        {ing.quantity} {ing.name}
        <button
          className="new-btn"
          onClick={(e) => {
            e.preventDefault();
            handleDeleteIngredient(index);
          }}
        >
          Remove
        </button>
      </li>
    );
  });

  const handleModal = () => {
    setShowModal(true);
  };

  return (
    <section>
      <h1 id="newh1">Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, handleChange, handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className={styles.input_container}>
                <input
                  placeholder="Title your Recipe!"
                  value={values.recipeName}
                  onChange={handleChange}
                  name="recipeName"
                />
                <input
                  placeholder="Paste an Image URL"
                  value={values.imageURL}
                  onChange={handleChange}
                  name="imageURL"
                />
              </div>
              <div className={styles.radio_container}>
                <span>
                  <input
                    type="radio"
                    value="Cook"
                    onChange={handleChange}
                    name="type"
                  />
                  <h5>Cook</h5>
                </span>
                <span>
                  <input
                    type="radio"
                    value="Bake"
                    onChange={handleChange}
                    name="type"
                  />
                  <h5>Bake</h5>
                </span>
                <span>
                  <input
                    type="radio"
                    value="Drink"
                    onChange={handleChange}
                    name="type"
                  />
                  <h5>Drink</h5>
                </span>
              </div>
              <div className={styles.input_container}>
                <input
                  placeholder="Prep Time"
                  value={values.prepTime}
                  onChange={handleChange}
                  name="prepTime"
                />
                <input
                  placeholder="Cook Time"
                  value={values.cookTime}
                  onChange={handleChange}
                  name="cookTime"
                />
                <input
                  placeholder="Serves"
                  value={values.serves}
                  onChange={handleChange}
                  name="serves"
                />
              </div>
              <h4>Ingredients</h4>
              <div className={styles.input_container}>
                <div className={styles.ingredient_inputs}>
                  <input
                    placeholder="Ingredient"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
                <ul>{ingredientDisplay}</ul>
              </div>
              
              <button
                type="button"
                className="orange-btn"
                onClick={addIngredient}
              >
               
                Add Ingredient
              </button>
              <textarea
                placeholder="Type your instructions"
                rows={5}
                value={values.instructions}
                onChange={handleChange}
                name="instructions"
              />
              <button type="submit" className="blue-btn">
                Submit
              </button>
            </form>
          );
        }}
      </Formik>
    </section>
  );
};
export default NewRecipeScreen;
