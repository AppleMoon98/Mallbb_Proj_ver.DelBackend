import {RouterProvider} from "react-router-dom";
import root from "./router/root";

/** App.js + 기초 이론
 * 
 * 1. react-router-dom ( 참고하면 좋음 : https://www.reddit.com/r/webdev/comments/1e8d25d )
 * React Router는 SPA(Single Page Application)에서 페이지 전환을 구현하기 위한 표준 라이브러리
 * 
 * SPA가 나오기 전에는 SSR(Server Side Rendering) 방식을 사용했었지만,
 * SSR 방식은 서버가 렌더링 역할을 하기 때문에 새로운 페이지를 요청할 때
 * 정적 리소스를 다시 다운로드해야하고 전체 페이지를 렌더링하게 되는 단점이 있다.
 * 따라서 사용자 동작에 따라서 페이지 갱신에 필요한 데이터만을 전달 받아
 * 페이지를 갱신하는 SPA 방식을 사용하여 전체적인 트래픽을 감소시키려고 함.
 * 
 * 대신 단점으로 모든 정적 리소스를 처음에 다운 받기 때문에 초기 구동이 느림.
 * SEO(검색 엔진 최적화) 이슈가 있음.
 * 
 * 2. RouterProvider ( 공식 사이트 : https://reactrouter.com/ )
 * React Router 6.4 이상에서 도입된 데이터 중심 라우팅(data router) 기능의 핵심 컴포넌트
 * 기존에는 <BrowserRouter> + <Routes> + <Route> 조합으로 라우트를 설정했지만,
 * 지금은 라우터 객체를 미리 생성해서 <RouterProvider>로 감싸는 방식으로 바뀜.
 * 이 코드에서는 중앙 라우터 객체 역할을 root가 맡아주고 있음.
 * 
 * 3. root -> 이 프로젝트의 라우터 객체
 * 
 * 4. App 컴포넌트
 * 앱의 최상위 컴포넌트로, 라우터 전역 설정을 담당.
 * <RouterProvider>를 걸어놔서 React Router가 URL을 검사하고 맞는 주소로 연결시켜줌
 * 
 * >>> 다음은 root.js >>>
 */

function App() {
  return (
    <RouterProvider router={root} />
  );
}

export default App;
