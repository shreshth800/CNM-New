import React from 'react'
import Styles from './GalleryCard.module.css'

export default function GalleryCard({imageUrl}) {
  return (
    <div className={Styles.imageContainer}>
      <img className={Styles.image} src={imageUrl} alt="dish image"/>
    </div>
  )
}
