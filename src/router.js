//withAuth : 로그인 여부
import MyPage from 'pages/MyPage';
import Main from 'pages/MainPage';
import RecommandVariableName  from 'pages/RecommandVariableNamePage';
import RefactorCode from 'pages/RefactorCodePage';
import AddComment from 'pages/AddCommentPage';
import KakaoRedirect from 'components/Login/KakaoRedirect';
import { createBrowserRouter } from 'react-router-dom';
import Header from 'components/Header/Header';
import SolveAlgorithm from 'pages/SolveAlgorithmPage';
import Bookmark from 'pages/Bookmark';
import VariableBookmark from 'components/Bookmark/VariableBookmark';
import AlgorithmsBookmark from 'components/Bookmark/AlgorithmsBookmark';
import RefactorBookmark from 'components/Bookmark/RefactorBookmark';
import AddComentBookmark from 'components/Bookmark/AddComentBookmark';



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
    path: '/solve-algorithm',
    element: <SolveAlgorithm />,
    withAuth: false,
    label: '알고리즘 문제 해설[BETA]',
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
    path: '/kakao/user',
    element: <KakaoRedirect />,
    withAuth: false
  },
  {
    id: 6,
    path: '/mypage',
    element: <MyPage />,
    withAuth: true
  },
  {
    id: 7,
    path: '/bookmark',
    element: <Bookmark />,
    withAuth: true
  },
  {
    id: 8,
    path: '/bookmark/variableBookmark',
    element: <VariableBookmark />,
    withAuth: true
  },
  {
    id: 9,
    path: '/bookmark/AlgorithmsBookmark',
    element: <AlgorithmsBookmark />,
    withAuth: true
  },
  {
    id: 10,
    path: '/bookmark/refactorBookmark',
    element: <RefactorBookmark />,
    withAuth: true
  },
  {
    id: 11,
    path: '/bookmark/addcomentBookmark',
    element: <AddComentBookmark />,
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