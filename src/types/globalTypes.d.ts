import { MODAL, TOOLTIP } from './enums'

export type NavItemType = {
  href: string
  title: string
}

export type TooltipType = TOOLTIP.MAIL | TOOLTIP.THEME | TOOLTIP.RESET

export type ModalType = MODAL.SKILL_SET | MODAL.RESET

export type ThemeModeStateType = string | null
