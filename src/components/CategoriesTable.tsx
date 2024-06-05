import { CategorySummary } from "../interfaces"

interface Props {
    categories: CategorySummary[] | undefined
}

const CategoriesTable = ({categories}: Props) => {
    return (
        <table className="mt-4 w-full">
        <thead className="border-b sticky top-0 bg-white">
          <tr className="rounded-md">
            <td className="font-semibold text-headers">Categoría</td>
            <td className="font-semibold text-headers px-2">Cantidad de productos</td>
            <td className="font-semibold text-headers px-2">Precio total</td>
          </tr>
        </thead>
        <tbody>
          {Object.entries(categories || {}).map(([category, summary]) => (
            <tr key={category} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
              <td className="text-table font-light py-2">{category}</td>
              <td className="text-table font-light px-2">{summary.count}</td>
              <td className="text-table font-light px-2">${summary.totalPrice.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
}

export default CategoriesTable;