import classNames from "classnames"
import assets from "../assets"
import styles from "../styles/Global"

const FeatureCard =({ iconUrl, iconText }) => (
  <div className={` ${styles.featureCard}`}>
    <img src={iconUrl} alt="icon"  className={`${styles.featureImg}`}/>
    <p className={`${styles.featureText}`}>{iconText}</p>
  </div>
)
function Features() {
  return (
    <div className={classNames(`${styles.section} ${styles.bgPrimary} banner03`)}>
      <div className={classNames(`${styles.subSection} flex-col text-center`)}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>Technologies</h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>ProNef has been developed using across-platform technology, React Native</p>
        </div>

        <div className={` ${styles.flexWrap}`}>
          <FeatureCard iconText='React Native' iconUrl={assets.react}/>
          <FeatureCard iconText="Javascript"   iconUrl={assets.javascript}/>
        </div>
      </div>

    </div>
  )
}

export default Features