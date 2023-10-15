//withAuth : 로그인 여부
import MyPage from 'pages/MyPage';
import Main from 'pages/MainPage';
import Home from 'components/Home';
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
    withAuth: false
  },
  {
    id: 2,
    path: '/change-language',
    element: <ChangeCodeLanguage />,
    withAuth: false
  },
  {
    id: 3,
    path: '/refactor',
    element: <RefactorCode />,
    withAuth: false
  },
  {
    id: 4,
    path: '/add-comment',
    element: <AddComment />,
    withAuth: false
  },
  {
    id: 5,
    path: '/recommand-content',
    element: <RecommandContent />,
    withAuth: false
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