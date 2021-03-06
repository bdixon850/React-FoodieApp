import React from 'react';

function Form(props) {
    return (
        <form onSubmit={props.getRecipe} style={{ marginBottom: '2rem' }}>
            <input type="text" name="recipeName" className="form-input" placeholder="Search for a recipe...." />
        </form>
    )
}

export default Form;