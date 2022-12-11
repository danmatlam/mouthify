import { Tabs } from "antd";

interface iProfileTabs {
  label: string;
  key: string;
  children: React.ReactNode;
}

export interface Props {
  profileTabs: iProfileTabs[];
}
const ProfileTabs: React.FC<Props> = (props) => {
  const onChange = (key: string) => {
    console.log(key);
  };


  const items = props.profileTabs.map((item) => {
    return {
      label: item.label,
      key: item.key,
      children: item.children,
    };
  });

  return (
    <Tabs
      defaultActiveKey="1"
      onChange={onChange}
      items={items}
      style={{width: '100%', height: '100%', padding: "0"}}
    />
  );
};
export default ProfileTabs;
