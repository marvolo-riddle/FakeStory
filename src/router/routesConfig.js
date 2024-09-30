import routeNames from './routeNames';
import HomePage from '../pages/HomePage'
import CategoryPage from '../pages/CategoryPage'
import FavoritesPage from "../pages/FavoritesPage"
import ProductDetailPage from '../pages/ProductDetailPage'
import CheckoutPage from '../pages/CheckoutPage'


const routesConfig = [
  {
    path: routeNames.homePage,
    component: HomePage
  },

  {
    path: routeNames.categoryPage,
    component: CategoryPage
  },

  {
    path: routeNames.favoritesPage,
    component: FavoritesPage,
  },

  {
    path: routeNames.productDetailPage,
    component: ProductDetailPage,
  },

  {
    path: routeNames.checkoutPage,
    component: CheckoutPage
  }
]

export default routesConfig;