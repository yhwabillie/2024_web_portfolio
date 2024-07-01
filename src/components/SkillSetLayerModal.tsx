import * as React from 'react'
import { MODAL } from '@/types/enums'
import { useModalStateStore } from '@store/storehooks'

export default function SkillSetLayerModal() {
  const { setModalState } = useModalStateStore()

  const handleResetModal = () => setModalState(MODAL.RESET)

  return (
    <div className="overflow-y-auto flex flex-col items-start fixed top-0 left-0 w-full h-full bg-black-layer backdrop-blur-md z-0">
      <div className="flex-1 flex items-center my-50 mx-auto">
        <div className="w-300 min-h-600 xs:w-375 md:min-w-600 box-border text-black bg-white p-30 rounded-md shadow-xl">
          <div>Skillset</div>
          <button onClick={handleResetModal}>close</button>
        </div>
      </div>
    </div>
  )
}
