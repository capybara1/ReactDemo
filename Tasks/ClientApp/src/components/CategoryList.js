import React from "react"; // Required for JSX

import CategoryItem from "./CategoryItem";
import styles from './CategoryList.css';

const CategoryList = ({ categories, applyCategory }) => {
    const mapToItem = (category, applyCategory) =>
        <li className={styles.item}>
            <CategoryItem
                key={category.id.toString()}
                item={category}
                applyCategory={applyCategory}
            />
        </li>;
    const result =
        <div className="card my-1">
            <div className="card-body">
                <h5 className="card-title">Add Tasks from Categories</h5>
                <ul className={styles.list}>
                    {categories.map(i => mapToItem(i, applyCategory))}
                </ul>
            </div>
        </div>;
    return result;
};

export default CategoryList;