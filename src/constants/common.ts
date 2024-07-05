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
      'postgresql',
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
    company_desc: `대한민국 육군을 위한 위문편지 플랫폼 [더캠프] 서비스 스타트업입니다. 육군과 MOU를 체결하여 훈련병을 위한 편지 보내기, 전역일 계산기, 식단 확인하기, 오퍼월 포인트 적립, 커뮤니티 서비스 및 인앱 쇼핑몰을 운영하고 있습니다.`,
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
