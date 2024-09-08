import { useMemo } from 'react';
import { TabsProps } from 'antd';
import { Link } from 'react-router-dom';

import { BsPersonVcardFill } from "react-icons/bs";
import { RiKeyFill } from "react-icons/ri";

import { Page, Tabs } from "@components";
import { GeneralTab, SecurityTab } from './components';

import { useProfileController } from './useProfileController';

export function Profile() {
  const { translate, translateRoute } = useProfileController();

  const items: TabsProps['items'] = useMemo(() => [
    {
      key: '1',
      label: 'General',
      icon: <BsPersonVcardFill size={24} />,
      children: <GeneralTab />,
    },
    {
      key: '2',
      label: 'Security',
      icon: <RiKeyFill size={24} />,
      children: <SecurityTab />,
    },
  ], [])

  return (
    <Page size="default">
      <Page.Header
        title={translate('title')}
        breadcrumb={[
          { title: <Link to="/">{translateRoute('home')}</Link> },
          { title: translateRoute('profile') }
        ]}
      />

      <Tabs defaultActiveKey="1" items={items} />
    </Page>
  )
}
