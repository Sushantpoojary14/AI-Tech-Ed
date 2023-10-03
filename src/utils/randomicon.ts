import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import icons from '@fortawesome/free-solid-svg-icons'
import * as Icons from '@fortawesome/free-solid-svg-icons';
import { fas, faB } from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core"

library.add(fas)
library.add(faB)

const randomicon = () => {
        
    const iconList: any = Object.keys(Icons)
        .filter((key: any) => key !== 'fas' && key !== 'prefix')
        .map((icon: any) => Icons[icon]);
        // console.log(iconList.length);
        
    const iconTypes = iconList;
    const iconType = iconTypes[Math.floor(Math.random() * iconTypes.length)];
    const allColor = ["red", "blue", "green"]
    const color = allColor[Math.floor(Math.random() * allColor.length)];
    // console.log({ type: iconType, color });
    return { type: iconType, color }


}

export default randomicon
