import { Product } from "../interfaces"

interface Props {
    products: Product[]
}

const ProductTable = ({products} : Props) => {
    return (
                    <table className="mt-4 w-full">
            <thead className="border-b sticky top-0 bg-white">
                <tr className="rounded-md">
                  <td className="font-semibold text-headers">Título</td>
                  <td className="font-semibold text-headers px-2">Descripción</td>
                  <td className="font-semibold text-headers px-2">Precio</td>
                  <td className="font-semibold text-headers">Categoría</td>
                </tr>
              </thead>
              <tbody>
                {products?.map((product: Product) => (
                  <tr key={product.id} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    <td className="text-table font-light py-2">{product.title}</td>
                    <td className="text-table font-light px-2">{product.description}</td>
                    <td className="text-table font-light px-2">${product.price}</td>
                    <td className="text-table font-light">{product.category}</td>
                  </tr>
                ))}
                {
                  products?.length === 0 && (
                    <tr>
                      <td colSpan={4} className="text-center py-2 text-red-500">No se encontraron productos con la búsqueda realizada</td>
                    </tr>
                  )
                }
              </tbody>
            </table>
    )
}

export default ProductTable;