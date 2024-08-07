import { NavItemType } from '@/types/globalTypes'

export const navList: NavItemType[] = [
  {
    href: '#visual_view',
    title: '💡 소개',
  },
  {
    href: '#career',
    title: '💼 경력',
  },
  {
    href: '#project',
    title: '🧑‍💻 개인 프로젝트',
  },
  {
    href: '#problem',
    title: '🙋‍♀️ Problem Solving',
  },
]

export const careerList = [
  {
    color: 'career-1',
    name: '진스토리 코리아',
    sub_name: 'Genestory korea',
    period: '2023.08.14 ~ 2024.05.30',
    company_desc: `생애주기 유형별 심리검사를 통한 맞춤형 교육 및 진로지도 리포트 서비스 Menabi를 제공하는 스타트업입니다. 
                        학교 및 교육기관을 통해 B2B 서비스를 제공하고 있습니다.`,
    links: [
      {
        title: '회사 홈페이지',
        url: 'https://www.genestorykr.com/',
      },
      {
        title: 'Menabi 서비스',
        url: 'https://menabi.ai/ko',
      },
    ],
    icon: '🧠',
    year: '2023~2024',
    role: '웹 프론트 개발 & 웹 퍼블리싱',
    role_desc:
      '서비스 화면 구축과 UI 컴포넌트 설계를 담당했습니다. 24년 3월 1차 구축을 완료한 후, 5월 동경 한국 학교에 B2B로 Menabi를 제공하여 255명의 학생이 검사를 완료하였습니다.',
    team: ['백엔드&인프라(2)', '웹 프론트&퍼블리싱(1)'],
    team_tech: [
      'Next.js(v13,appRouter)',
      'TypeScript',
      'styled-components',
      'tailwindCSS',
      'Recoil',
      'Zustand',
      'Context API',
      'Prisma',
      'PostgreSQL',
      'Storybook',
      'Jest',
      'Yarn berry',
      'VScode',
      'Webstorm',
    ],
  },
  {
    color: 'career-2',
    name: '인에이블다온소프트',
    sub_name: 'EnableDaonSoft',
    period: '2021.09.06 ~ 2023.03.01',
    company_desc: `누적 580만 다운로드 육군 위문편지 플랫폼 [더캠프] 서비스 스타트업입니다. 육군과 MOU를 체결하여 훈련병을 위한 편지 보내기, 훈련소 소식, 전역일 계산기, 식단 확인하기, 커뮤니티 및 인앱 쇼핑몰을 운영하고 있습니다.`,
    links: [
      {
        title: '회사소개 홈페이지',
        url: 'https://www.thecamp.or.kr/main/company.do',
      },
      {
        title: '[더캠프] WEB',
        url: 'https://www.thecamp.or.kr/login/main.do',
      },
      {
        title: '[더캠프] 플레이스토어',
        url: 'https://play.google.com/store/apps/details?id=com.enabledaonsoft.thecamp',
      },
      {
        title: '[더캠프] 앱스토어',
        url: 'https://apps.apple.com/kr/app/the-camp/id1364855523',
      },
      {
        title: '[캠프몰] 카페24 쇼핑몰',
        url: 'https://thecampmall.co.kr/index.html',
      },
    ],
    icon: '💌🪖',
    year: '2021~2023',
    role: '웹 퍼블리싱',
    role_desc: '더캠프 서비스의 Mobile, Web, 백오피스, 카페24 쇼핑몰 스킨 퍼블리싱 유지보수 및 신규 화면 구축을 담당했습니다.',
    team: ['백엔드&인프라(1)', '백엔드&프론트(2)', '웹 퍼블리싱(1)'],
    team_tech: ['하이브리드 앱', 'Spring MVC', 'JSP', 'CSS3', 'JavaScript', 'jQuery', 'MariaDB', 'MySQL', 'MyBatis', 'intelliJ'],
  },
]

//더미 데이터
const workExperienceDummy = [
  {
    id: '1',
    category: 'work-experience',
    slug: 'offerwall-service',
    company: '인에이블다온소프트',
    product: '더캠프',
    role: ['웹 퍼블리싱'],
    title: '오퍼월 포인트 획득 서비스',
    startDate: '2022-11',
    endDate: '2022-11',
    tags: ['신규 서비스', '크로스 플랫폼'],
    thumbnail_path: 'career_seo.png',
    description: '더캠프 서비스와 연계된 캠프몰 유입을 늘리기 위한 오퍼월 포인트 서비스 구축 프로젝트입니다.',
  },
  {
    id: '2',
    category: 'work-experience',
    slug: 'celeb-soldier-service',
    company: '인에이블다온소프트',
    product: '더캠프',
    role: ['프론트 개발'],
    title: '추천 스타군인 서비스',
    startDate: '2022-12',
    endDate: '2022-12',
    tags: ['신규 서비스'],
    thumbnail_path: 'career_seo.png',
    description: '대규모 회원 유입을 목표로한 연예인 입대 이벤트 활성화 서비스입니다.',
  },
  {
    id: '3',
    category: 'work-experience',
    slug: 'missing-soldier-card-renewal',
    company: '인에이블다온소프트',
    product: '더캠프',
    role: ['웹 퍼블리싱'],
    title: '보고싶은 군인 카드 UI 리뉴얼',
    startDate: '2022-12',
    endDate: '2023-01',
    tags: ['리팩토링', '운영'],
    thumbnail_path: 'career_seo.png',
    description: 'Front와 Back단의 레거시 코드를 리팩토링하고 새로운 UI 디자인을 도입한 리뉴얼 프로젝트입니다.',
  },
  {
    id: '4',
    category: 'work-experience',
    slug: 'mini-assessment-biss',
    company: '진스토리 코리아',
    product: '메나비 (Menabi)',
    role: ['프론트 개발', '웹 퍼블리싱'],
    title: 'BISS 심리검사 체험용 웹 페이지 개발',
    startDate: '2023-08',
    endDate: '2023-09',
    tags: ['신규 서비스'],
    thumbnail_path: 'career_seo.png',
    description: '데이터를 수집하기위한 체험용 후킹 미니 심리검사 웹 페이지입니다.',
  },
  {
    id: '6',
    category: 'work-experience',
    slug: 'main-intro-interactive-ui',
    company: '진스토리 코리아',
    product: '메나비 (Menabi)',
    role: ['웹 퍼블리싱'],
    title: 'Menabi 메인 페이지, 소개 페이지 퍼블리싱',
    startDate: '2023-08',
    endDate: '2023-08',
    tags: ['신규 서비스', '스크롤 애니메이션'],
    thumbnail_path: 'career_seo.png',
    description: 'Menabi 서비스 메인 페이지와 소개 페이지 퍼블리싱 작업입니다.',
  },
  {
    id: '7',
    category: 'work-experience',
    slug: 'assessment-pifigure-ui',
    company: '진스토리 코리아',
    product: '메나비 (Menabi)',
    role: ['프론트 개발', '웹 퍼블리싱'],
    title: 'piFigure WEB 심리검사 구축',
    startDate: '2023-09',
    endDate: '2024-03',
    tags: ['UI 애니메이션', '데이터 시각화', '문서화', '신규 서비스'],
    thumbnail_path: 'career_seo.png',
    description: '메인 프로덕트인 piFigure의 청소년, 성인용 WEB 심리검사 및 결과 리포트 개발 프로젝트입니다.',
  },
  {
    id: '8',
    category: 'work-experience',
    slug: 'search-engine-optimization',
    company: '진스토리 코리아',
    product: '메나비 (Menabi)',
    role: ['프론트 개발'],
    title: '웹 사이트 검색엔진 최적화 작업',
    startDate: '2024-03',
    endDate: '2024-03',
    tags: ['SEO'],
    thumbnail_path: 'career_seo.png',
    description: 'Menabi 키워드의 검색 엔진 최적화를 위한 metadata 작성 및 국제화 웹 페이지 최적화',
  },
  {
    id: '9',
    category: 'work-experience',
    slug: 'yarn-berry-migration',
    company: '진스토리 코리아',
    product: '메나비 (Menabi)',
    role: ['프론트 개발'],
    title: 'Yarn Berry 마이그레이션, Zero-Install 도입',
    startDate: '2024-03',
    endDate: '2024-04',
    tags: ['마이그레이션'],
    thumbnail_path: 'career_seo.png',
    description: '빌드 시간을 단축하고 신규 버전의 라이브러리를 사용하기 위한 Yarn 버전 마이그레이션입니다.',
  },
  {
    id: '10',
    category: 'work-experience',
    slug: 'email-template-ui',
    company: '진스토리 코리아',
    product: '메나비 (Menabi)',
    role: ['웹 퍼블리싱'],
    title: '발송 이메일 template 퍼블리싱',
    startDate: '2024-02',
    endDate: '2024-02',
    tags: ['신규 서비스'],
    thumbnail_path: 'career_seo.png',
    description: '다양한 엔드포인트와 WEB/Mobile에 대응한 이메일 템플릿 퍼블리싱 작업입니다.',
  },
  {
    id: '11',
    category: 'work-experience',
    slug: 'storybook-ui-doc',
    company: '진스토리 코리아',
    product: '메나비 (Menabi)',
    role: ['프론트 개발', '웹 퍼블리싱'],
    title: 'Storybook 도입 및 자주 사용되는 컴포넌트 UI 문서화',
    startDate: '2024-05',
    endDate: '2024-05',
    tags: ['문서화', '운영'],
    thumbnail_path: 'career_seo.png',
    description: '자주 사용되는 react-hook-form이 적용된 Form 컴포넌트의 props와 type을 문서화하였습니다.',
  },
]
