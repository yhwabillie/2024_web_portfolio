import * as React from 'react'
import { useFooterRefStore } from '@store/storehooks'
import { StaticImage } from 'gatsby-plugin-image'
import { IoCopy } from 'react-icons/io5'

export default function Footer() {
  //zustand state
  // const { setFooterRef } = useFooterRefStore()

  // React.useEffect(() => {
  //   setFooterRef(footerRef)
  // }, [])

  return (
    <footer className="relative h-700" style={{ clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 0 100%' }}>
      {/* Sticky Area */}
      <div className="relative h-[calc(100vh+700px)] -top-[100vh]">
        {/* Content */}
        <div className="items-center h-full bg-blue-1">
          <div className="sticky top-[calc(100vh-700px)] h-700">
            <div className="overflow-x-hidden h-full gap-[50px] flex flex-col justify-between py-25 px-50">
              <h2 className="flex flex-nowrap gap-[90px] translate-x-[-40%]">
                <span className="block text-135 font-[500] tracking-tighter leading-1">UI</span>
                <span className="block text-135 font-[500] tracking-tighter leading-1">UX</span>
                <span className="block text-135 font-[500] tracking-tighter leading-1">INTERACTIVE</span>
                <span className="block text-135 font-[500] tracking-tighter leading-1">FRONTEND</span>
                <span className="block text-135 font-[500] tracking-tighter leading-1">DEVELOPER</span>
              </h2>

              <div className="flex flex-grow-[1] flex-col justify-between items-center">
                <div className="flex flex-col justify-center items-center">
                  <StaticImage class="w-200" src="../images/footer_bubble.png" width={400} height={400} alt="footer bubble" />
                  <div className="text-center flex flex-col gap-[20px] justify-center items-center">
                    <div>
                      <h3 className="text-28 font-[600]">Contact Me</h3>
                      <p className="text-16 tracking-tighte">
                        관심이 있으시다면 아래의 이메일을 복사하여 연락해주세요. <br /> 포트폴리오를 확인해주셔서 감사합니다 :&#41;
                      </p>
                    </div>
                    <fieldset className="flex justify-between items-center border border-gray-2">
                      <input
                        type="email"
                        value={'jyjcy501@naver.com'}
                        readOnly={true}
                        className="block text-gray-2 leading-1 py-10 px-20 text-20 tracking-tighter rounded-l-[3px] focus:outline-0"
                      />
                      <button
                        title="이메일 복사하기"
                        className="flex cursor-pointer hover:text-blue-5 items-center bg-theme w-[44px] h-[44px] box-border rounded-r-[3px] shadow-sm"
                      >
                        <span className="sr-only">이메일 복사하기</span>
                        <IoCopy className="text-20 block mx-auto" />
                      </button>
                    </fieldset>
                  </div>
                </div>

                <div className="opacity-50 tracking-tighter">&copy; 2024 Younhwa. All Rights Reserved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
