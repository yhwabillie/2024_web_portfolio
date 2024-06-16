import { create } from 'zustand'

const useSectionRefStore = create((set) => ({
  refArray: [],
  setRefArray: (ref: any) => set({ refArray: ref }),
}))

export default useSectionRefStore
