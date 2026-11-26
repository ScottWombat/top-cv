import Lottie from 'react-lottie-player'
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

//import lottieJson from './lotties_1.json'
import lottieJson from './bicycle.json'
//import lottieJson from './techno.json';
//import lottieJson from './office2.json';
//import lottieJson from './office3.json'
//import lottieJson from './relax_cat.json'
//import lottieJson from './sitting_man.json';
//import lottieJson from './radius.json';
//import lottieJson from './printer.json';
const Office = () =>{
    return(
        <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 300, height: 300 }}
    />
    )
}
export default Office;