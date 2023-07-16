import styles from '../styles/Global'
function Button({ assetUrl, link }) {
  return (
    <div className={styles.btnBlack}
      onClick={() => window.open(link, '_blank')}
    >
      <img src={assetUrl} alt='expo_icon' className={styles.btnIcon}/>
      <div className=' flex flex-col items-start justify-start ml-4'>
      <p className={`${styles.btnText} font-normal text-xs`}>View it on</p>
        <p className={`${styles.btnText} font-bold text-sm`}>Expo Store</p>
      </div>
    </div>
  )
}

export default Button