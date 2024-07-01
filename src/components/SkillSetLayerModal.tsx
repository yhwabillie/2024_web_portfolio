import * as React from 'react'
import { MODAL } from '@/types/enums'
import { useModalStateStore } from '@store/storehooks'
import { IoIosCloseCircleOutline } from 'react-icons/io'

export default function SkillSetLayerModal() {
  const { setModalState } = useModalStateStore()

  const handleResetModal = () => setModalState(MODAL.RESET)

  return (
    <div className="overflow-y-auto flex flex-col items-start fixed top-0 left-0 w-full h-full bg-black-layer backdrop-blur-md z-0">
      <div className="flex-1 flex items-center my-50 mx-auto">
        <div className="mx-20 xs:mx-0 min-h-600 xs:w-400 sm:w-600 md:min-w-600 box-border text-black bg-white p-20 sm:p-30 rounded-md shadow-xl">
          <button onClick={handleResetModal} className="block ml-auto">
            <span className="sr-only">모달 창 닫기 버튼</span>
            <IoIosCloseCircleOutline className="text-30 xs:text-40 text-[#333]" />
          </button>
          <h3 className="text-center block mb-30">
            <span className="block text-20 tracking-tighter text-[#999]">Skill Set</span>
            <span className="block text-18 xs:text-25 tracking-tighter font-[600]">저는 이런 작업을 수행할 수 있습니다.</span>
          </h3>

          <div>
            <div className="mb-30">
              <h4 className="text-20 font-[600] tracking-tighter block mb-10">👩‍💻 웹 프론트엔드</h4>
              <div className="pl-14 bg-blue-4 py-15 rounded-xxs">
                <div className="mb-10">
                  <strong className="font-[600] tracking-tighter">01) Form 데이터 예외처리</strong>
                  <p className="tracking-tighter pl-20 pr-10">react-hook-form 라이브러리를 사용한 인풋 데이터의 validation 및 관련 UI 컨트롤</p>
                </div>
                <div className="mb-10">
                  <strong className="font-[600] tracking-tighter">02) Context API, Recoil, Zustand</strong>
                  <p className="tracking-tighter pl-20 pr-10">
                    상태관리 라이브러리와 Context API를 이용하여 컴포넌트간 데이터 통신 및 전역, 지역 데이터를 분리하여 관리
                  </p>
                </div>
                <div className="mb-10">
                  <strong className="font-[600] tracking-tighter">02) Local Storage의 활용</strong>
                  <p className="tracking-tighter pl-20 pr-10">로컬스토리지를 활용하여 필요한 데이터를 저장, 가져와서 활용 및 삭제</p>
                </div>
                <div className="mb-10">
                  <strong className="font-[600] tracking-tighter">03) 국제화</strong>
                  <p className="tracking-tighter pl-20 pr-10">next-intl 라이브러리를 활용한 NextJS 프로젝트 국제화 작업 (한국어/일본어)</p>
                </div>
                <div className="mb-10">
                  <strong className="font-[600] tracking-tighter">04) SEO (Google Search에 인덱싱되기위한 기술적인 SEO 작업)</strong>
                  <p className="tracking-tighter leading-1.6 pl-20 pr-10">
                    NextJS 환경에서 루트 layout.tsx의 metadata 객체에 필요한 속성 작성, 하위 경로 상속 및 template을 활용한 타이틀 포멧 적용
                  </p>
                  <p className="tracking-tighter leading-1.6 pl-20 pr-10">metadata 다국어 적용</p>
                  <p className="tracking-tighter leading-1.6 pl-20 pr-10">sitemap.xml에 필요한 경로들을 빌드시점에 루트에 생성</p>
                  <p className="tracking-tighter leading-1.6 pl-20 pr-10">Google Lighthouse를 사용하여 웹 최적화 점수 확인 및 피드백</p>
                </div>
                <div className="mb-10">
                  <strong className="font-[600] tracking-tighter">05) UI 컴포넌트 문서화</strong>
                  <p className="tracking-tighter pl-20 pr-10">
                    자주 사용되는 react-hook-form과 연결된 Form 컴포넌트들을 Storybook을 활용하여 props, props type, 컴포넌트의 용도와 유즈케이스 등을
                    문서화
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-30">
              <h4 className="text-20 font-[600] tracking-tighter block mb-10">👩‍🎨 웹 퍼블리싱</h4>
              <div className="pl-14 bg-blue-4 py-15 rounded-xxs">
                <div className="mb-10">
                  <strong className="font-[600] tracking-tighter">01) 시멘틱 마크업</strong>
                  <p className="tracking-tighter pl-20 pr-10">코드 가독성과 웹 표준, 웹 접근성을 준수하기위한 시멘틱 마크업 작업</p>
                </div>
                <div className="mb-10">
                  <strong className="font-[600] tracking-tighter">02) 크로스 브라우징 작업</strong>
                  <p className="tracking-tighter pl-20 pr-10">Chrome, Edge, Safari, Firefox의 브라우저 화면을 고려한 퍼블리싱</p>
                </div>
                <div className="mb-10">
                  <strong className="font-[600] tracking-tighter">03) 유틸리티 퍼스트 CSS 프레임워크</strong>
                  <p className="tracking-tighter pl-20 pr-10">
                    tailwindcss, bootstrap과 같은 프레임워크를 활용하여 웹사이트 화면 구축 및 다양한 해상도 반응형 작업 가능
                  </p>
                </div>
                <div className="mb-10">
                  <strong className="font-[600] tracking-tighter">04) CSS-in-JS</strong>
                  <p className="tracking-tighter pl-20 pr-10">
                    styled-components의 theme 기능을 활용하여 1개의 컴포넌트에 여러가지 디자인을 분리하여 퍼블리싱 디자인 적용, 화면 구축 및 다양한
                    해상도 반응형 작업 가능
                  </p>
                </div>
                <div className="mb-10">
                  <strong className="font-[600] tracking-tighter">05) 데이터 시각화</strong>
                  <p className="tracking-tighter pl-20 pr-10">
                    apexchart.js 와 plotly.js를 활용하여 백엔드에서 데이터를 받아 다양한 그래프로 표현 및 디자인에 맞는 커스텀 작업
                  </p>
                </div>
                <div className="mb-10">
                  <strong className="font-[600] tracking-tighter">06) 인터랙티브 웹 애니메이션 구현</strong>
                  <p className="tracking-tighter pl-20 pr-10">GSAP, Framer Motion, React-Spring를 활용한 인터랙티브 스크롤 애니메이션 구축</p>
                </div>
              </div>
            </div>

            <div className="mb-30">
              <h4 className="text-20 font-[600] tracking-tighter block mb-10">🤝 협업</h4>
              <div className="pl-14 bg-blue-4 py-15 rounded-xxs">
                <div className="mb-10">
                  <strong className="font-[600] tracking-tighter">01) 스프린트 보드 작성</strong>
                  <p className="tracking-tighter pl-20 pr-10">
                    팀원들과 협업하기위해 Notion을 활용하여 스프린트 보드, 일정관리 및 백로그 템플릿을 작성하여 공유
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className="text-shadow font-[600] block mt-30 text-15 xs:text-18 tracking-tighter bg-blue-5 text-white py-15 px-30 w-full rounded-xxs">
            관련 작업 및 프로젝트 보러가기
          </button>
        </div>
      </div>
    </div>
  )
}
