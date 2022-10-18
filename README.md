# 개인 포트폴리오 페이지

### http://ymStudyLog.github.io

gh-pages 패키지를 사용해서 github 블로그로 배포

### 스팩

- React
- tailwindCSS
- Swiper.js

### 성과

  - tailwindCSS 프레임워크를 직접 사용해본 후 느낀점 
    - 세밀한 반응형 디자인을 원한다면 breakpoints 커스텀은 필수
    - 아주 잘 만들어진 tailwind CSS 공식 문서
    - styled-components에 익숙해져서 긴 클래스명이 매우 거슬림
    - 단순 개인 프로젝트라면 사용해보기 좋음
  
  - 커스텀 breakpoints : 최상위 디렉토리의 tailwind.config.js에서 커스텀
    ```
    module.exports = {
        content: ['./src/**/*.{js,jsx,ts,tsx}'],
        theme: {
            screens: {
                'card': {'max':'319px'},
                /* smaller than mobile-vertical 
                 * @media (max-width: 320px) {...}
                 */
                'mobile': {'min':'320px'},
                /* mobile-vertical && mobile-horizontal
                 * @media (min-width: 321px and max-width: 480px) { ... }
                 */
                'special': { 'max': '465px'},
                /* Breakpoint for only used in src/components/Contact.jsx 
                 * Except that components, Using this point might cause some conflicts with other breakpoints.
                 */
                'mobile-extra': {'min':'481px'},
                /* bigger than mobile && smaller than tablet
                 * @media (min-width: 481px and max-width: 767px) { ... }
                 */
                'tablet': {'min':'768px'},
                /* bigger than tablet-vertical && smaller than tablet-horizontal
                 * @media (min-width: 768px and max-width: 1024px) { ... }
                */
                'desktop': {'min':'1025px'},
                /* all devices bigger than tablet incl.desktop,monitor
                 * @media (min-width: 1224px) { ... }
                 */
      },
        plugins: [],
    };
    ```
 
### 향후 수정 계획

- Projects에서 스팩 부분에 애니메이션 효과를 넣어 지루하지 않게 스타일링
- 프로젝트들을 시연하는 짧은 영상 클립 디스플레이도 고려 중

:eyes: _Go back to github profile to check the other repositories_ :eyes:
[![github-profile](https://img.shields.io/badge/Github-Profile-blue?style=flat&logo=Git&logoColor=F05032)](https://github.com/ymStudyLog?tab=repositories)
