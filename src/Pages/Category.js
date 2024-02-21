import React from 'react'
import '../components/category/category.css'
import Dates from '../components/category/Dates';
import Citrus from '../components/category/Citrus';
import Mangos from '../components/category/Mangos';
import Figs from '../components/category/Figs';
import Pomegarante from '../components/category/Pomegarante';


const Category = () => {
  return (
    <>
      <div className="category">
        <div className="container">
          <Dates />
          <Citrus />
          <Mangos />
          <Figs />
          <Pomegarante />
        </div>
      </div>
    </>
  )
}

export default Category
