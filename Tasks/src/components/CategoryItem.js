import React from "react"; // Required for JSX

const CategoryItem = ({item, applyCategory}) =>
    <button
        type="button"
        className="btn btn-secondary"
        onClick={(event) => applyCategory(item.id)}>{item.label}</button>;

export default CategoryItem;