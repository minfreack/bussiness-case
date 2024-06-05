import { useQuery } from "react-query"
import { getProducts } from "../services/products"
import { useEffect, useState } from "react"
import { Product, CategorySummaryMap, CategorySummary, View } from "../interfaces"
import ProductTable from "../components/ProductsTable"
import CategoriesTable from "../components/CategoriesTable"
import Filters from "../components/Filters"
import { useUserStore } from "../stores/user-store"
import { useNavigate } from "react-router-dom"

function Dashboard() {

  const canAccess = useUserStore(state => state.canAccess)

  const navigate = useNavigate();

  const [actualView, setActualView] = useState<View>('list')

  const {data} = useQuery('products', getProducts)
  
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

  const [categoriesSumary, setCategoriesSumary] = useState<CategorySummary[]>()

  useEffect(() => {
    setFilteredProducts(data?.products)
    setCategoriesSumary(data?.products.reduce((summary: CategorySummaryMap, product: Product) => {
      if (!summary[product.category]) {
        summary[product.category] = { count: 0, totalPrice: 0 };
      }
      summary[product.category].count += 1;
      summary[product.category].totalPrice += product.price;
      return summary;
    }, {}))
  },[data?.products])

  useEffect(() => {
    if(!canAccess){
      navigate('/login')
    }
  },[canAccess])  
  
  return (
    <div className="bg-primary min-h-screen flex flex-col gap-y-2 px-20 py-10">
      <h1 className="text-3xl font-medium text-white pb-4">Productos</h1>
      <Filters
      actualView={actualView}
      setActualView={setActualView}
      products={data?.products || []}
      filteredProducts={filteredProducts}
      setFilteredProducts={setFilteredProducts}
      />
      <div className="bg-white px-6 shadow-2xl rounded-lg border">
        {
          actualView === 'categories' && <CategoriesTable categories={categoriesSumary}/>
        }
        {
          actualView === 'list' && <ProductTable products={filteredProducts || []}/>
        }
      </div>
    </div>

  )
}

export default Dashboard
