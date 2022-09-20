:eyes: _Go back to github profile to check the other repositories_ :eyes:
[![github-profile](https://img.shields.io/badge/Github-Profile-blue?style=flat&logo=Git&logoColor=F05032)](https://github.com/ymStudyLog)

# 프로젝트 개요

### - 사용한 기술

![react-badge](https://img.shields.io/badge/React-black?style=for-the-badge&logo=React&logoColor=61DAFB)
![tailwindcss-badge](https://img.shields.io/badge/TailwindCSS-yellow?style=for-the-badge&logo=Tailwind%20CSS&logoColor=06B6D4)

### - 목차

- [프로젝트 제목](#프로젝트-제목)
- [프로젝트 목적](#프로젝트-목적)
- [프로젝트 목표](#프로젝트-목표)
- [프로젝트 실적](#프로젝트-실적)
- [프로젝트 평가](#프로젝트-평가)
- [향후 계획](#향후-계획)
- [특이 사항 및 참고 자료](#특이-사항-및-참고-자료)

## 프로젝트 제목

리액트를 사용한 포트폴리오용 웹사이트

## 프로젝트 목적

프론트엔드 개발자 취업을 위해 직접 제작한 프로젝트를 모아서 쉽게 볼 수 있도록 하기 위한 간단한 웹사이트를 제작함.

## 프로젝트 목표

- tailwindCSS 라는 css 프레임워크 사용법 익히기.
- Github 블로그를 활용하여 웹사이트를 배포해보기.

## 프로젝트 실적

- tailwindCSS 라는 css 프레임워크 사용법 익히기.

  - 직접 사용해본 후 느낀점 : 프레임워크라 스타일이 정해져 있는 것이 장점이자 단점이었다. 다양한 디바이스에서도 어색하지 않게 반응형으로 구현하고 싶었으나 media query의 breakpoints가 다소 단순하게 정해져 있어서 커스텀은 필수였다. 하지만 tailwind CSS 공식 문서가 매우 잘 만들어져 있어서 참고하기 편했고 그에 따라 커스텀도 어렵지 않았다. 클래스가 많아져서 지저분한 코드를 싫어하면 별로겠지만 개인적으로는 너무 잘 사용했고 이후 다른 프로젝트 진행시에도 활용할 의향이 있다.
  - 커스텀한 breakpoints
    - 최상위 디렉토리의 tailwind.config.js에서 커스텀 할 수 있다. https://www.nextree.co.kr/p8622/를 참고했으며, 본인은 모바일 기기를 더 자주 다루기 때문에 작은 디바이스들 위주로 세분화 시켰다.
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

- Github 블로그를 활용하여 웹사이트를 배포해보기.
  - gh-pages 패키지 사용. 코드 업데이트시 yarn deploy 명령어로 빌드 + 배포까지 한번에 진행함.

## 프로젝트 평가

- tailwindCSS 라는 css 프레임워크 사용법 익히기. <br />
  _=> 4점/5점 만점_
- Github 블로그를 활용하여 웹사이트를 배포해보기. <br />
  _=> 4.8점/5점 만점_
- 목표 달성률 평균 : **4.4점/5점 만점**

## 향후 계획

- Work 파트에 프로젝트가 2개 이상이 될 경우 react-router를 사용해서 개별 페이지에서 프로젝트 디테일을 확인 할 수 있게 구현하기

## 특이 사항 및 참고 자료

- :thumbsdown:**다음 프로젝트부터는 시간 제한을 두고 제작하기**

- https://www.nextree.co.kr/p8622/
- https://youtu.be/2kg0z1qNrkw
- https://tailwindcss.com/
- https://getform.io/
