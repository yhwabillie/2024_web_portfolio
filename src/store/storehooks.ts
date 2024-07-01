//zustand 상태와 액션을 저장
import { create } from 'zustand'
import { MODAL, SIDEBAR_STATUS } from '@/types/enums'

//메인페이지 섹션별 Ref DOM Element 배열에 저장
type MainPageRefsType = {
  mainPageRefs: React.RefObject<HTMLElement | HTMLDivElement>[]
  setMainPageRefs: (ref: React.RefObject<HTMLElement | HTMLDivElement>[]) => void
}

export const useMainPageRefsStore = create<MainPageRefsType>((set) => ({
  mainPageRefs: [],
  setMainPageRefs: (ref) => set({ mainPageRefs: ref }),
}))

//푸터 Ref DOM Element 저장
type FooterRefType = {
  footerRef: React.RefObject<HTMLElement>
  setFooterRef: (ref: React.RefObject<HTMLElement>) => void
}

export const useFooterRefStore = create<FooterRefType>((set) => ({
  footerRef: { current: null },
  setFooterRef: (ref) => set({ footerRef: ref }),
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

//메인페이지 모달 상태값 저장
type ModalType = MODAL.SKILL_SET | MODAL.RESET

type ModalState = {
  modalState: ModalType
  setModalState: (state: ModalType) => void
}

export const useModalStateStore = create<ModalState>((set) => ({
  modalState: MODAL.RESET,
  setModalState: (state: ModalType) => set({ modalState: state }),
}))
