import { CiSearch } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";
import { Product } from "../interfaces";
import { View } from "../interfaces";
import { useEffect, useState } from "react";

interface Props {
    actualView: View;
    setActualView: (view: View) => void;
    products: Product[];
    filteredProducts: Product[];
    setFilteredProducts: (products: Product[]) => void;
}

const Filters = ({actualView, setActualView, products, filteredProducts, setFilteredProducts} : Props) => {

    const [searchValue, setSearchValue] = useState<string>('')
    
    const handleSearch = (searchValue: string) => {
        if (!searchValue) {
          setFilteredProducts(products)
          return
        }
        const filteredProducts = products.filter((product: any) => {
          const searchLower = searchValue.toLowerCase();
          return product.title.toLowerCase().includes(searchLower) ||
                 product.description.toLowerCase().includes(searchLower) ||
                 product.category.toLowerCase().includes(searchLower) ||
                 product.price.toString().includes(searchValue);
        });
        setFilteredProducts(filteredProducts)
      }

    useEffect(() => {
    handleSearch(searchValue)
  }, [searchValue])
    
    return (
        <div className={`flex items-center ${actualView === 'list' ? 'justify-between' : 'justify-end'} w-full`}>
        {
          actualView === 'list' && (
            <div className="w-72 rounded-lg text-sm flex items-center pl-2 bg-white">
            <CiSearch className="text-table" size={24}/>
            <input
            value={searchValue}
            type="text" 
            className="text-sm w-full py-2 px-4 rounded-lg text-headers" 
            placeholder="Buscar producto" 
            onChange={(e) => setSearchValue(e.target.value)}/>
            {
              filteredProducts?.length === 0 && searchValue !== '' && (
                <button 
                onClick={() => {
                  setSearchValue('')
                }}
                className="bg-white text-primary py-1.5 px-4 rounded-lg">
                  <FaTrash/>
                </button>
              )
            }
          </div>
          )
        }
        <button onClick={() => {
          setActualView(actualView === 'list' ? 'categories' : 'list')
        }} 
        className="bg-white text-primary py-1.5 px-4 rounded-lg">
          {actualView === 'list' ? 'Ver por categorías' : 'Ver productos'}
          </button>
      </div>
    );
}

export default Filters;