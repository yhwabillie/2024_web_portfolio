import { create } from 'zustand'

//메인페이지 section별 DOM Element 저장
export const useSectionRefStore = create((set) => ({
  refArray: [],
  setRefArray: (ref: any) => set({ refArray: ref }),
}))

//메인페이지 section별 스크롤 isIntersecting 상태값 저장
export const useIntersectingStore = create((set) => ({
  isIntersectingObj: {},
  setIsIntersectingObj: (state: object) => set({ isIntersectingObj: state }),
}))

//모바일 사이드메뉴 isShow 상태값 저장
export const useIsShowSideMenuStore = create((set) => ({
  isShowSideMenu: false,
  setIsShowSideMenu: (state: boolean) => set({ isShowSideMenu: state }),
}))
