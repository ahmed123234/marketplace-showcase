import React from 'react'
import styles from '../styles/Global'
import assets from '../assets'
import Button from './Button'
import classNames from 'classnames'
function SectionWrapper({ title, description , showBtn,  mockupImg, banner, reverse }) {
  return (
    <div className={classNames(`min-h-screen ${styles.section}  ${banner}`, {
      [styles.bgWhite]:!!reverse,
      [styles.bgPrimary]: !reverse 
    })}>
      <div className={classNames(`flex items-center w-11/12 sm:w-full minmd:w-3/4 `, {
        [styles.boxClass]: !reverse,
        [styles.boxReverseClass]: !!reverse
      })}>
        <div className={classNames(`${styles.descDiv}`, {
          'fadeLeftMini': !reverse,
          'fadeRightMini': !!reverse, 
          [styles.textRight]: !!reverse,
          [styles.textLeft]: !reverse
        })}>
          <h1 className={classNames(`${styles.h1Text}`, {
            [styles.blackText]: !!reverse,
            [styles.whiteText]: !reverse
          })}>{title}</h1>
          <p className={classNames(`${styles.descriptionText}`, {
            [styles.blackText]: !!reverse,
            [styles.whiteText]: !reverse
          })}>{description}</p>
          {showBtn && (
            <Button 
              assetUrl={assets.expo}
              link='https://expo.dev/@ahmadghnnam/marketplace-app?serviceType=classic&distribution=expo-go'
            />
          )}
        </div>

        <div 
          className={` flex-1 ${styles.flexCenter} p-8 sm:px-0`}
        >
                <img src={mockupImg} alt="mokup image"  className={classNames(`${styles.sectionImg}`, {
                  'fadeLeftMini': !!reverse,
                  'fadeRightMini': !reverse, 
                })}/>

        </div>
      
      </div>
      
      
      <h1>{showBtn}</h1>
      
    </div>
  )
}

export default SectionWrapper