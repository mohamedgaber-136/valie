import { Tabs } from 'antd';
import ProfileData from '@/pages/pages/UserProfile/ProfileData';
import { UserOutlined, CreditCardOutlined } from "@ant-design/icons";
import { useGetItemsQuery } from '@/Redux/api';

const TabsData = () => {
  const { data, isSuccess, isLoading } = useGetItemsQuery('user/profile');

  // Ensure `user` is always an object
  const user = isSuccess && data?.data ? data.data : {};

  const items = [
    {
      key: '1',
      label: <span style={{ color: '#0C2A33' }}>Profile Information</span>,
      children: <ProfileData user={user} isLoading={isLoading} />,
      icon: <UserOutlined style={{ color: '#0C2A33' }} />
    },
    // {
    //   key: '2',
    //   label: 'Payments',
    //   children: 'Content of Tab Pane 2',
    //   icon: <CreditCardOutlined />
    // },
  ];

  const onChange = (key) => { };

  return <Tabs defaultActiveKey="1" animated={true} items={items} onChange={onChange} />;
};

export default TabsData;
