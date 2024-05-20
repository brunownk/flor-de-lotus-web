import { Button } from "antd";
import { Outlet } from "react-router-dom";

import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import {
  HEADER_CONTENT_GAP,
  HEADER_HEIGHT,
  SIDER_COLLAPSED_WIDTH,
  SIDER_WIDTH
  } from "@config/app-keys";
import { menuRoutes } from "@routes/router";
import { useSider } from "@hooks/useSider";

import { Header, Sider, ContentLoader } from "@components";

import "./styles.scss";

export function PrivateLayout() {
  const { isCollapse, toggleCollapse } = useSider()

  return (
    <>
      <Sider items={menuRoutes} />
      <Header />

      <Button
        id="collapse-button"
        type="default"
        icon={isCollapse ? <RightOutlined />: <LeftOutlined />}
        style={{
          top: isCollapse ? HEADER_HEIGHT / 2 - 26 / 2 : HEADER_HEIGHT / 2,
          left: isCollapse ? SIDER_COLLAPSED_WIDTH - 26 / 2 : SIDER_WIDTH - 26 / 2,
        }}
        onClick={toggleCollapse}
      />

      <div
        id="page-content"
        style={{
          maxWidth: `calc(100% - ${isCollapse ? SIDER_COLLAPSED_WIDTH : SIDER_WIDTH}px)`,
          marginLeft: isCollapse ? `${SIDER_COLLAPSED_WIDTH}px` : `${SIDER_WIDTH}px`,
          paddingTop: HEADER_HEIGHT + HEADER_CONTENT_GAP,
        }}
      >
        <ContentLoader />
        <Outlet />
      </div>
    </>
  );
}
