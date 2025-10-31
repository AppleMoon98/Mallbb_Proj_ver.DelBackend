import "../css/main.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainSlider from "../slider/Slider";
import MainNav from "../common/MainNav";
import CardSlider from "../slider/CardSlider";

/**main.js
 * 1. 전반적인 역할
 * 홈 화면 역할을 하는 컴포넌트.
 * SPA 구조(root.js)에서 /(루트 경로)로 매핑되어 있어서,
 * 사용자가 처음 사이트에 접속하면 해당 컴포넌트 화면이 보이게 되어있음.
 * 
 * 2. CSS 및 외부 스타일 임포트
 * import "../css/main.css"
 * → 프로젝트 내부의 커스텀 스타일 (그냥 직접 만들었단 얘기)
 * 
 * import "slick-carousel/slick/slick.css"
 * import "slick-carousel/slick/slick-theme.css"
 * → react-slick 라이브러리의 CSS 파일로 슬라이더 UI 구성에 필요함.
 * → 버튼, 점 네비게이션, 전환 애니매이션 등에 사용됨
 * 이 두 CSS를 묶어서 import해야 정상적인 슬라이더 스타일이 적용된다고 함.
 * 
 * 3. MainNav, MainSlider, CardSlider
 * 각자 커스텀 컴포넌트로 위 임포트 주소를 따라 주석을 참고하기 바람.
 * 
 * 4. page-wrap ( 참고 : https://react-pdf.org/advanced )
 * 전체 페이지를 감싸는 최상위 컨테이너
 */
export default function App() {
  return (
    <div className="page-wrap">
      <MainNav/>
      <div className="main-visual-area">
        <MainSlider/>
      </div>
      <main className="main-container">
        <div className="text-4xl font-extrabold">오늘의 추천메뉴</div>
        <CardSlider/>
      </main>
    </div>
  );
}