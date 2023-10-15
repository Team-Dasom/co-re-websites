//withAuth : 로그인 여부
import MyPage from 'pages/MyPage';
import Main from 'pages/MainPage';
import RecommandVariableName  from 'pages/RecommandVariableNamePage';
import ChangeCodeLanguage from 'pages/ChangeCodeLanguagePage';
import RefactorCode from 'pages/RefactorCodePage';
import AddComment from 'pages/AddCommentPage';
import RecommandContent from 'pages/RecommandContentPage';
import KakaoRedirect from 'components/Login/KakaoRedirect';
import { createBrowserRouter } from 'react-router-dom';
import Header from 'components/Header/Header';


const routerData = [
  {
    id: 0,
    path: '/',
    element: <Main />,
    withAuth: false
  },
  {
    id: 1,
    path: '/recommand-variable-name',
    element: <RecommandVariableName />,
    withAuth: false,
    label: '변수명 추천',
    isMenu: true,
  },
  {
    id: 2,
    path: '/change-language',
    element: <ChangeCodeLanguage />,
    withAuth: false,
    label: 'Code 언어 변경',
    isMenu: true,
  },
  {
    id: 3,
    path: '/refactor',
    element: <RefactorCode />,
    label: 'Code 리팩토링',
    withAuth: false,
    isMenu: true,
  },
  {
    id: 4,
    path: '/add-comment',
    element: <AddComment />,
    label: 'Code 주석 생성',
    withAuth: false,
    isMenu: true,
  },
  {
    id: 5,
    path: '/recommand-content',
    element: <RecommandContent />,
    label: '컨텐츠 추천',
    withAuth: false,
    isMenu: true,
  },
  {
    id: 6,
    path: '/kakao/user',
    element: <KakaoRedirect />,
    withAuth: false
  },
  {
    id: 7,
    path: '/mypage',
    element: <MyPage />,
    withAuth: true
  },
]

export const routers = createBrowserRouter(
  routerData.map((router) => {
    return {
      path: router.path,
      element:  <><Header></Header>{ router.element }</>
    }
  })
)

export const headerContent = routerData.filter((router) => router.isMenu)