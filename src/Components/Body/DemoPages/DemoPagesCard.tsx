import React from 'react'
import styles from "./cards.module.css"

function DemoPagesCard() {
  return (
    <figure className={`${styles.wrapper} max-md:w-full md:w-[47%] lg:w-[32%] hover:bg-primary transition-all duration-300 cursor-pointer relative`}>
        <div className='w-[13.75rem] h-[13.75rem] border border-white opacity-40 circle translate-x-[50%] -translate-y-[50%] absolute'></div>

    </figure>
  )
}

export default DemoPagesCard