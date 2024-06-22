import { MutableRefObject } from 'react'
import { create } from 'zustand'
import { SIDEBAR_STATUS } from '../types/enums'

//zustand 상태와 액션을 저장

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

//모바일 사이드바 메뉴 상태값 저장
type SidebarType = SIDEBAR_STATUS.OPEN | SIDEBAR_STATUS.CLOSE

type SideMenuState = {
  sidebarStatus: SidebarType
  setSidebarStatus: (state: SidebarType) => void
}

export const useSidebarStatusStore = create<SideMenuState>((set) => ({
  sidebarStatus: SIDEBAR_STATUS.CLOSE,
  setSidebarStatus: (state: SidebarType) => set({ sidebarStatus: state }),
}))
