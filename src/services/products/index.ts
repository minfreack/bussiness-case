

export const getProducts = async () => {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()    
    return data
}