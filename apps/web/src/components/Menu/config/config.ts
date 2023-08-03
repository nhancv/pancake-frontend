import {
  MenuItemsType,
  SwapIcon,
  SwapFillIcon,
  EarnFillIcon,
  EarnIcon,
  TrophyIcon,
  TrophyFillIcon,
  MoreIcon,
  DropdownMenuItems,
} from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (
  t: ContextApi['t'],
  isDark: boolean,
  languageCode?: string,
  chainId?: number,
) => ConfigMenuItemsType[] = (t, isDark, languageCode, chainId) =>
  [
    {
      label: t('Swap'),
      icon: SwapIcon,
      fillIcon: SwapFillIcon,
      href: '/swap',
      showItemsOnMobile: false,
      items: [].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('Liquidity'),
      href: '/liquidity',
      icon: EarnIcon,
      fillIcon: EarnFillIcon,
      image: '/images/decorations/pe2.png',
      items: [].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: '',
      href: '/',
      icon: MoreIcon,
      supportChainIds: [],
      disabled: true,
      items: [],
    },
  ].map((item) => addMenuItemSupported(item, chainId))

export default config
