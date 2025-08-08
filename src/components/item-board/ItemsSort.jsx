import React, { useContext, useEffect } from 'react'
import "./ItemsSort.css"
import { SortContext } from './sortContext'

const ItemsSort = () => {
  const{updateCategory, updateSort} = useContext(SortContext);
  return (
    <div className='sort-panel'>
        <div className='sort-left'>
          <select id="category"
            name="category"
            onChange={(e)=>updateCategory(e.target.value)}
          >
            <option value="all">Все товары</option>
            <option value="beauty">Косметика</option>
            <option value="fragrances">Парфюм</option>
            <option value="groceries">Продукты</option>
            <option value="furniture">Мебель</option>
          </select>
        </div>

        <div className='sort-right'>
            <p>Сортировать по</p>
            <select
              id="sort" 
              name="sort"
              onChange={(e)=>updateSort(e.target.value)}
            >
            <option value="default">Актуальности</option>
            <option value="upPrice">Возрастанию цены</option>
            <option value="dwPrice">Убыванию цены</option>
            <option value="rating">Оценкам</option>
          </select>
        </div>
    </div>
  )
}

export default ItemsSort