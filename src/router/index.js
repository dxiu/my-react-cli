import Home from '../views/home.jsx'
import News from '../views/news.jsx'
import Not from '../views/404.jsx'
const router = [
  {
    path: '/',
    exac: true,
    component:  Home
  },
  {
    path: '/news',
    component: News
  },
  {
    path: '*',
    component: Not
  }
]
export default router