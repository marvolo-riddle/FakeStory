import MainLayout from "../../components/Layout";
import ProductsList from '../../components/Products/ProductsList';
import {useGetAllProductsQuery} from "../../redux/slices/productsSlice.js";

const HomePage = () => {

  const {data: products, isLoading, isError, error} = useGetAllProductsQuery();

  return (
      <MainLayout>
        <ProductsList
            products={products}
            error={error}
            isError={isError}
            isLoading={isLoading}>
        </ProductsList>
      </MainLayout>
  )
}

export default HomePage;