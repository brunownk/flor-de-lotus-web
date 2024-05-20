import { Flex } from "antd";
import { Header as HeaderAnt } from "antd/es/layout/layout";

import {
  HEADER_HEIGHT,
  SIDER_COLLAPSED_WIDTH,
  SIDER_WIDTH
} from "@config/app-keys";

import { useSider } from "@hooks/useSider";

import { Options } from "./components/Options";
import { Configs } from "./components/Configs";
import { Locales } from "./components/Locales";
import { SearchPage } from "./components/SearchPage";

import "./styles.scss"

export function Header() {
  const { isCollapse } = useSider();

  return (
    <HeaderAnt
      style={{
        left: isCollapse ? `${SIDER_COLLAPSED_WIDTH}px` : `${SIDER_WIDTH}px`,
        width: `calc(100% - ${isCollapse ? `${SIDER_COLLAPSED_WIDTH}px` : `${SIDER_WIDTH}px`})`,
        height: HEADER_HEIGHT,
      }}
    >
      <div className="header-content">
        <SearchPage />

        <Flex
          className="right-header-content"
          align="center"
          gap={16}
        >
          <Locales />
          <Configs />
          <Options />
        </Flex>
      </div>
    </HeaderAnt>
  )
}

