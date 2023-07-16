import { Download, Features, SectionWrapper } from "./Components"
import assets from './assets'
import styles from "./styles/Global"
const App = () => {

  return (
    <>
      {/* <Download />
       <Features /> */}
      <SectionWrapper
        title="Your own store of nifty NFTs. Start Selling & Growing"
        description="Buy, store, collect NFTS, exchange & earn crypto. Join 25+ 
        million peopleusing ProNef marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />

      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experince a buttery UI of ProNef NFT Marketplace. 
        Smooth constant colors of a fluent UI-desigh."
        showBtn={false}
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />

      <SectionWrapper
        title="Deployment"
        description="ProNef is built using Expo which runs natively on all users' devices.
        You can easily get your app into people's hands"
        mockupImg={assets.feature}
        reverse
      />

      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen lists all NFTs
        while the second one shows the details of a specific NFT."
        showBtn={false}
        mockupImg={assets.mockup}
        banner='banner02'
      />
      <Download />

      <div className="px-4 py-2  text-center banner04 bg-primary">
      <p className={`${styles.pText} ${styles.whiteText}`}>Made with love by { " " } {/** just a space */}
       <span className="bold">Ahmed Ghannam</span>
      </p>
      </div>
    </>
  )
}

export default App
