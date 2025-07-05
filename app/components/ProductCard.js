import React from 'react'
import ReadMore from './ReadMore'
import styles from './ProductCard.module.css';


function ProductCard() {
  return (
    <div className={styles.card}>
      <ReadMore/>
    </div>
  )
}

export default ProductCard
