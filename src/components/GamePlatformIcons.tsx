import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from "react-icons/fa"
import {SiNintendo} from "react-icons/si";
import {MdPhoneIphone} from "react-icons/md";
import {BsGlobe} from "react-icons/bs";
import {Platform} from "@/hooks/usePlatforms.ts";

interface Props {
    platform: Platform;
}

const GamePlatformIcons = ({platform}: Props) => {
    switch (platform.slug) {
        case "pc":
            return <FaWindows/>
        case "playstation":
            return <FaPlaystation/>
        case 'xbox':
            return <FaXbox/>
        case "nintendo":
            return <SiNintendo/>;
        case "mac":
            return <FaApple/>
        case "linux" :
            return <FaLinux/>;
        case "ios":
            return <MdPhoneIphone/>;
        case "android":
            return <FaAndroid/>;
        case "web":
            return <BsGlobe/>;
        default:
            return null;

    }
};

export default GamePlatformIcons;