import { ItemType } from "@type/menu-item";

interface IParentKeysReturn {
  parentKeys: string[];
  key: string | undefined;
}

function findParentKeysForPath(items: ItemType[], pathname: string, parentKeys: string[] = []): IParentKeysReturn {
  for (const item of items) {

    if (item?.key === pathname) {
      return { parentKeys, key: item.key };
    }

    if (item?.children) {
      const { parentKeys: updatedParentKeys, key } = findParentKeysForPath(
        item.children,
        pathname,
        [...parentKeys, item.key]
      );

      if (key) {
        return { parentKeys: updatedParentKeys, key }
      }
    }
  }

  return { parentKeys: [], key: undefined };
}

interface IGetDefaultKeysForPathReturn {
  defaultSelectedKey: string[] | undefined,
  defaultOpenKeys: string[]
}

export function getDefaultKeysForPath(items: ItemType[], pathname: string): IGetDefaultKeysForPathReturn {
  const { parentKeys, key } = findParentKeysForPath(items, pathname);

  return {
    defaultSelectedKey: key ? [key] : undefined,
    defaultOpenKeys: parentKeys,
  };
}
