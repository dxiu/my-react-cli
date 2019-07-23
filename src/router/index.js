import Home from '../views/home.jsx'
import News from '../views/news.jsx'
import User from '../views/user.jsx'
import Not from '../views/404.jsx'
import newsDetail from '../views/newsDetail'
const router = [
  {
    path: '/',
    exact: true,
    component:  Home
  },
  {
    path: '/user',
    exact: true,
    component:  User
  },
  {
    path: '/news',
    component: News,
    children: [
      {
        path: '/newsDetail/:id',
        component: newsDetail
      }
    ]
  },
  {
    path: '*',
    component: Not
  }
]
export default router