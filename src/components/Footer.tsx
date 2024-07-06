import * as React from 'react'
import { useFooterRefStore } from '@store/storehooks'
import { StaticImage } from 'gatsby-plugin-image'
import { IoCopy } from 'react-icons/io5'
import Lottie from 'react-lottie-player'
import checkLottieJson from '@images/lottie/check_lottie.json'

export default function Footer() {
  const emailRef = React.useRef<HTMLInputElement>(null)
  const checkLottieRef = React.useRef<any>(null)
  const [isCopied, setIsCopied] = React.useState(false)

  const handleEmailCopy = () => {
    if (!emailRef.current) return

    navigator.clipboard.writeText(emailRef.current.value)
    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

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
                      <p className="text-16 tracking-tighter">
                        관심이 있으시다면 아래의 이메일을 복사하여 연락해주세요. <br /> 포트폴리오를 확인해주셔서 감사합니다 :&#41;
                      </p>
                    </div>

                    {/* Copy&Paste */}
                    <fieldset className="flex justify-between items-center rounded-[5px] overflow-hidden shadow-lg">
                      <input
                        ref={emailRef}
                        type="email"
                        value={'jyjcy501@naver.com'}
                        readOnly={true}
                        className="block text-gray-2 w-[calc(100%-44px)] leading-1 py-10 px-20 text-20 tracking-tighter focus:outline-0"
                      />

                      <button
                        title="이메일 복사하기"
                        onClick={handleEmailCopy}
                        className="flex cursor-pointer bg-theme-hover items-center w-[44px] h-[44px] box-border"
                      >
                        <span className="sr-only">이메일 복사하기</span>
                        {!isCopied ? (
                          <IoCopy className="text-20 text-gray-2 block mx-auto" />
                        ) : (
                          <Lottie
                            className="w-30 h-30 block mx-auto"
                            ref={checkLottieRef}
                            loop={false}
                            animationData={checkLottieJson}
                            play={isCopied}
                          />
                        )}
                      </button>
                    </fieldset>
                    {isCopied && <p className="text-16 tracking-tighter">복사 완료되었습니다.</p>}
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
