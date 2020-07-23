import React, { useState } from "react";
import { AddCategory } from "./componets/AddCategory";
import { GifGrid } from "./componets/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([`Batman`]);
  // const agregarCategory = () => {
  // setCategories([...categories, `Superman`, `CapitanAmerica`]);
  // setCategories((categorie) => [...categories, `Superman`]);

  return (
    <>
      <h2>Gif Expert App</h2>

      <AddCategory setCategories={setCategories} />

      <hr />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
