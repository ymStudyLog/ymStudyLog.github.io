:eyes: _Go back to github profile to check the other repositories_ :eyes:
[![github-profile](https://img.shields.io/badge/Github-Profile-blue?style=flat&logo=Git&logoColor=F05032)](https://github.com/ymStudyLog)

# 포트폴리오 링크

http://ymStudyLog.github.io

# 스팩

- React
- tailwindCSS
- Swiper.js

# 성과

  - tailwindCSS 프레임워크를 직접 사용해본 후 느낀점 : 프레임워크라 스타일이 정해져 있는 것이 장점이자 단점이었다. 다양한 디바이스에서도 어색하지 않게 반응형으로 구현하고 싶었으나 media query의 breakpoints가 다소 단순하게 정해져 있어서 커스텀은 필수였다. 하지만 tailwind CSS 공식 문서가 매우 잘 만들어져 있어서 참고하기 편했고 그에 따라 커스텀도 어렵지 않았다. 클래스가 많아져서 지저분한 코드를 싫어하면 별로겠지만 개인적으로는 너무 잘 사용했고 이후 다른 프로젝트 진행시에도 활용할 의향이 있다.
  
  - 커스텀 breakpoints : 최상위 디렉토리의 tailwind.config.js에서 커스텀. https://www.nextree.co.kr/p8622/를 참고했으며 작은 디바이스들 위주로 세분화 시켰다.
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

 - gh-pages 패키지를 사용해서 github 블로그 배포
 
# 향후 계획

- Projects에서 스팩 부분에 애니메이션 효과를 넣어 지루하지 않게 스타일링
- 프로젝트들을 시연하는 짧은 영상 클립 디스플레이도 고려 중

