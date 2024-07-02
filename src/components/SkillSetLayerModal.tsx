import * as React from 'react'
import { MODAL } from '@/types/enums'
import { useModalStateStore } from '@store/storehooks'
import { IoIosCloseCircleOutline } from 'react-icons/io'

export default function SkillSetLayerModal() {
  const { setModalState } = useModalStateStore()

  const handleResetModal = () => setModalState(MODAL.RESET)

  return (
    <div className="w-full h-full fixed top-0 left-0 z-0 overflow-y-auto flex flex-col items-start bg-black-layer backdrop-blur-md">
      <div className="flex flex-1 items-center my-50 mx-auto">
        <div
          className="
            min-h-600 text-black box-border bg-white mx-20 p-20 rounded-md shadow-xl 
            xs:w-400 xs:mx-0 
            sm:w-600 sm:p-30
            md:min-w-600
            "
        >
          <button onClick={handleResetModal} className="block ml-auto">
            <span className="sr-only">모달 창 닫기 버튼</span>
            <IoIosCloseCircleOutline className="text-black-1 text-30 xs:text-40" />
          </button>
          <h3 className="block mb-30 text-center">
            <span className="block text-gray-2 text-20 tracking-tighter">Skill Set</span>
            <span className="block text-18 font-[600] tracking-tighter xs:text-25">저는 이런 작업을 수행할 수 있습니다.</span>
          </h3>

          <div>
            <div className="mb-30">
              <h4 className="block mb-10 text-20 font-[600] tracking-tighter">👩‍💻 웹 프론트엔드</h4>
              <div className="pl-14 py-15 bg-blue-4 rounded-xxs">
                <div className="mb-10">
                  <div className="mb-10">
                    <strong className="font-[600] tracking-tighter">01) Javascript & Typescript</strong>
                    <p className="pl-20 pr-10 tracking-tighter">LocalStorage를 활용한 데이터 관리</p>
                    <p className="pl-20 pr-10 tracking-tighter">interface와 type, enum을 활용한 백엔드와의 원활한 소통을 위한 데이터 type 작성</p>
                  </div>
                  <strong className="font-[600] tracking-tighter">02) Context API, Recoil, Zustand</strong>
                  <p className="pl-20 pr-10 tracking-tighter">
                    상태관리 라이브러리와 Context API를 이용하여 컴포넌트간 데이터 통신 및 전역, 지역 데이터를 분리하여 관리
                  </p>
                </div>
                <div className="mb-10">
                  <strong className="font-[600] tracking-tighter">03) Form 데이터 예외처리 및 DB 전송</strong>
                  <p className="pl-20 pr-10 tracking-tighter">react-hook-form 라이브러리를 사용한 인풋 데이터의 validation 및 관련 UI 컨트롤</p>
                  <p className="pl-20 pr-10 tracking-tighter">NextJS server action을 이용한 DB 데이터의 CRUD 작업</p>
                </div>
                <div className="mb-10">
                  <strong className="font-[600] tracking-tighter">04) 데이터 시각화</strong>
                  <p className="pl-20 pr-10 tracking-tighter">
                    apexchart.js 와 plotly.js를 활용하여 백엔드에서 데이터를 받아 다양한 그래프로 표현 및 디자인에 맞는 커스텀 작업
                  </p>
                </div>
                <div className="mb-10">
                  <strong className="font-[600] tracking-tighter">05) UI 컴포넌트 문서화</strong>
                  <p className="pl-20 pr-10 tracking-tighter">
                    자주 사용되는 컴포넌트의 용도, props의 type 및 유즈케이스 등을 Storybook을 활용하여 문서화
                  </p>
                </div>
                <div className="mb-10">
                  <strong className="font-[600] tracking-tighter">06) 국제화</strong>
                  <p className="pl-20 pr-10 tracking-tighter">next-intl 라이브러리를 활용한 NextJS 프로젝트 국제화 작업</p>
                  <p className="pl-20 pr-10 leading-1.6 tracking-tighter">metadata 다국어 적용</p>
                </div>
                <div className="mb-10">
                  <strong className="font-[600] tracking-tighter">07) SEO (Google Search에 인덱싱되기위한 기술적인 SEO 작업)</strong>
                  <p className="pl-20 pr-10 leading-1.6 tracking-tighter">
                    metadata 필요한 속성 작성, 하위 경로 상속 및 template을 활용한 타이틀 포멧 적용
                  </p>
                  <p className="pl-20 pr-10 leading-1.6 tracking-tighter">sitemap.xml에 필요한 경로들을 빌드시점에 루트에 생성</p>
                  <p className="pl-20 pr-10 leading-1.6 tracking-tighter">Google Lighthouse를 사용한 웹 최적화 점수 확인 및 피드백</p>
                </div>
              </div>
            </div>

            <div className="mb-30">
              <h4 className="block mb-10 text-20 font-[600] tracking-tighter">👩‍🎨 웹 퍼블리싱</h4>
              <div className="py-15 pl-14 bg-blue-4 rounded-xxs">
                <div className="mb-10">
                  <strong className="font-[600] tracking-tighter">01) HTML5 & CSS3</strong>
                  <p className="pl-20 pr-10 tracking-tighter">코드 가독성과 웹 표준, 웹 접근성을 준수하기위한 시멘틱 마크업</p>
                  <p className="pl-20 pr-10 tracking-tighter">keyframe을 이용한 애니메이션</p>
                  <p className="pl-20 pr-10 tracking-tighter">Grid, Flex 활용</p>
                </div>
                <div className="mb-10">
                  <strong className="font-[600] tracking-tighter">02) 크로스 브라우징 작업</strong>
                  <p className="pl-20 pr-10 tracking-tighter">Chrome, Edge, Safari, Firefox의 브라우저 화면을 고려한 퍼블리싱</p>
                </div>
                <div className="mb-10">
                  <strong className="font-[600] tracking-tighter">03) 유틸리티 퍼스트 CSS 프레임워크</strong>
                  <p className="pl-20 pr-10 tracking-tighter">
                    tailwindcss, bootstrap과 같은 프레임워크를 활용하여 웹사이트 화면 구축 및 다양한 해상도 반응형 작업
                  </p>
                </div>
                <div className="mb-10">
                  <strong className="font-[600] tracking-tighter">04) CSS-in-JS</strong>
                  <p className="pl-20 pr-10 tracking-tighter">
                    styled-components의 theme 기능을 활용하여 1개의 컴포넌트에 여러가지 디자인을 분리하여 퍼블리싱 디자인 적용, 화면 구축 및 다양한
                    해상도 반응형 작업
                  </p>
                </div>
                <div className="mb-10">
                  <strong className="font-[600] tracking-tighter">05) 인터랙티브 웹 애니메이션 구현</strong>
                  <p className="pl-20 pr-10 tracking-tighter">GSAP, Framer Motion, React-Spring를 활용한 인터랙티브 스크롤 애니메이션 구축</p>
                </div>
              </div>
            </div>

            <div className="mb-30">
              <h4 className="block mb-10 text-20 font-[600] tracking-tighter">🤝 협업</h4>
              <div className="py-15 pl-14 bg-blue-4 rounded-xxs">
                <div className="mb-10">
                  <strong className="font-[600] tracking-tighter">01) 스프린트 보드 작성</strong>
                  <p className="pl-20 pr-10 tracking-tighter">
                    팀원들과 협업하기위해 Notion을 활용하여 스프린트 보드, 일정관리 및 백로그 템플릿을 작성하여 공유 및 프로젝트별 QA 진행
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className="block w-full py-15 px-30 bg-blue-5 mt-30 text-15 text-white font-[600] tracking-tighter text-shadow rounded-xxs  xs:text-18">
            관련 작업 및 프로젝트 보러가기
          </button>
        </div>
      </div>
    </div>
  )
}
