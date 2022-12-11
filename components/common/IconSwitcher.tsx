import { TbBrandGithub, TbDeviceMobileMessage , TbIcons, TbMoodHappy, TbSitemap, TbLayoutGrid, TbAffiliate, TbTriangleSquareCircle, TbDeviceAnalytics, TbDevices, TbFaceId } from "react-icons/tb";
import {BsAppIndicator} from "react-icons/bs";
import {IoLogoDocker} from "react-icons/io5";
import Logo from 'public/vector/logo.svg';
import {SiApostrophe} from "react-icons/si";
import styles from "./iconswitcher.module.css";
import { HiOutlineLightBulb } from "react-icons/hi";

export const iconKeys = { 
  github: <TbBrandGithub />,
  icons: <TbIcons />,
  flow: <TbTriangleSquareCircle />,
  digitalproduct: <HiOutlineLightBulb />,

  docker: <IoLogoDocker />,  
  appindicator: <BsAppIndicator />,
  applogo: <Logo/>
};

export interface Props {
  name: string;
}
const IconSwitcher: React.FC<Props> = ({ name }) => {
  const key = name as string;

  return <>{iconKeys[key as keyof typeof iconKeys]}</>;
};
export default IconSwitcher;
