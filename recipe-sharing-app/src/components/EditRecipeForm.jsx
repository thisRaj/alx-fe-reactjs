import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ existingRecipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(existingRecipe.title);
  const [description, setDescription] = useState(existingRecipe.description);

  const handleUpdate = (event) => {
    event.preventDefault(); // 👍 This prevents form submission from reloading the page
    updateRecipe({ id: existingRecipe.id, title, description });
  };

  return (
    <form onSubmit={handleUpdate}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;