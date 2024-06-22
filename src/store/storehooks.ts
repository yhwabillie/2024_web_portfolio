import { MutableRefObject } from 'react'
import { create } from 'zustand'

//메인페이지 section별 DOM Element 저장
interface SectionRefState {
  refArray: MutableRefObject<HTMLElement | null>[]
  setRefArray: (ref: MutableRefObject<HTMLElement | null>[]) => void
}

export const useSectionRefStore = create<SectionRefState>((set) => ({
  refArray: [],
  setRefArray: (ref: MutableRefObject<HTMLElement | null>[]) => set({ refArray: ref }),
}))

//메인페이지 section별 스크롤 isIntersecting 상태값 저장
export const useIntersectingStore = create((set) => ({
  isIntersectingObj: {},
  setIsIntersectingObj: (state: object) => set({ isIntersectingObj: state }),
}))

//모바일 사이드메뉴 isShow 상태값 저장
interface SideMenuState {
  isShowSideMenu: boolean
  setIsShowSideMenu: (state: boolean) => void
}

export const useIsShowSideMenuStore = create<SideMenuState>((set) => ({
  isShowSideMenu: false,
  setIsShowSideMenu: (state: boolean) => set({ isShowSideMenu: state }),
}))
