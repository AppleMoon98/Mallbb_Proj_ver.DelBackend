// routes/root.js
import { createBrowserRouter } from "react-router-dom"
import Register from "../pages/member/Register"
import Loginseller from "../pages/member/LoginSeller"
import Registerseller from "../pages/member/RegisterSeller"
import noticeRouter from "./noticeRouter"
import memberRouter from "./memberRouter"
import { lazy, Suspense } from "react"
import reviewRouter from "./reviewRouter"
import questionRouter from "./questionRouter"
import freeRouter from "./freeRouter"
import ChatPage from "../pages/ChatPage"
import ReservationListPage from "../pages/reservationList"

/** root.js
 * 1. createBrowserRouter ( 공식 : https://reactrouter.com/6.30.1/routers/create-browser-router )
 * React Router v6에서 도입된 API로, 브라우저 히스토리를 기반으로 라우팅을 수행하는 함수
 * 앞서 말했다 싶이 <BrowserRouter> + <Routes> + <Route> 로 주소를 잡아줬었다.
 * 필자의 취향에는 해당 코드가 더 맞지만, 너무 길어지는 문제가 있어 줄이고자 한 것 같다.
 * 
 * 2. lazy, Suspense
 * ( lazy 공식 : https://ko.react.dev/reference/react/lazy )
 * lazy는 처음 렌더링될 때, 지연되는 것을 표시할 수 있음. / 지연 로딩
 * 속성 값으로 컴포넌트를 호출하면 지연되는 동안 해당 컴포넌트를 표시함.
 * 
 * ( Suspense 공식 : https://ko.react.dev/reference/react/Suspense )
 * Suspense는 자식(children) 컴포넌트를 가져오기 전까지 화면에 대체 UI(fallback)를 표시함.
 * 로딩이 완료되면 자식 컴포넌트를 표시합니다.
 * 
 * 다만 자식 컴포넌트 로딩에 한 번 들어가면, 렌더링이 완료 될 때까지 다른 작동이 멈추는 듯.
 * 어차피 우리 코드는 자식 컴포넌트에 모든 State가 있기 때문에 큰 문제는 아닌 것으로 추정.
 * 
 * <<< 이전은 App.js <<<
 * >>> 다음은 main.js >>>
 * 
 * ../pages/main
 */


const Loading = <div>Loading......</div>
const Main = lazy(() => import("../pages/main"))
const NoticeIndex = lazy(() => import("../pages/notice/IndexPage"))
const ReviewIndex = lazy( () => import("../pages/review/IndexPage"))
const FreeIndex = lazy( () => import("../pages/free/IndexPage"))
const QuestionIndex = lazy( () => import("../pages/question/IndexPage"))
const Reservation = lazy(()=>import("../pages/reservation"))
const Map = lazy(()=>import("../pages/map"))
const WebInfo = lazy(()=>import("../pages/webinfo"))
const ReservationConfirm = lazy(()=> import("../pages/reservationConfirm"))

const root = createBrowserRouter([
  {
    path: "/",
    element: <Suspense fallback={Loading}><Main /></Suspense>
  },
  {
    path: "login/seller",
    element: <Loginseller />
  },
  {
    path: "register",
    element: <Register />
  },
  {
    path: "register/seller",
    element: <Registerseller />
  },
  {
    path: "notice",
    element: <Suspense fallback={Loading}><NoticeIndex /></Suspense>,
    children: noticeRouter()
  },
  {
    path: "member",
    children: memberRouter()
  },
  {
    path: "review",
    element: <Suspense fallback={Loading}><ReviewIndex/></Suspense>,
    children: reviewRouter()
  },
  {
    path: "question",
    element: <Suspense fallback={Loading}><QuestionIndex/></Suspense>,
    children: questionRouter()
  },
  {
    path: "free",
    element: <Suspense fallback={Loading}><FreeIndex/></Suspense>,
    children: freeRouter()
  },
  {
    path: "reservation",
    element:<Suspense fallback={Loading}><Reservation/></Suspense>    
  },
  {
    path: "map",
    element:<Suspense fallback={Loading}><Map/></Suspense>
  },
  {
    path: "webinfo",
    element:<Suspense fallback={Loading}><WebInfo/></Suspense>
  },
  {
    path:"chat",
    element:<ChatPage/>
  },
  {
    path: "reservationconfirm",
    element:<Suspense fallback={Loading}><ReservationConfirm/></Suspense>    
  },
  {
    path: "reservationlist",
    element: <Suspense fallback={Loading}><ReservationListPage/></Suspense>
  }
])


export default root;