import { useNavigate } from "react-router-dom";
import { useUserStore } from "../stores/user-store";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

function Login(){

    const canAccess = useUserStore(state => state.canAccess)
    const setCanAccess = useUserStore(state => state.SetCanAccess);
    
    const [password, setPassword] = useState<string>('')

    const navigate = useNavigate();

    const checkPassword = () => {
        if(!password) return toast.error('Ingrese una contraseña')
        let isPalindrome = false
        const cleanPassword = password.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()        
        for(let i = 0; i < cleanPassword.length; i++){
            if(cleanPassword[i] !== cleanPassword[cleanPassword.length - 1 - i]){
                isPalindrome = false
                break;
            }
            isPalindrome = true
        }
        if(isPalindrome){
            return toast.error('Contraseña incorrecta, no puede ser un palíndromo')
        }
        toast.success('Bienvenido :)')
        setCanAccess(true)
        navigate('/')
    }

    useEffect(() => {
        if(canAccess){
          navigate('/dashboard')
        }
      },[canAccess])  
    
    return (
        <div className="bg-primary min-h-screen flex flex-col items-center justify-center">
            <div className="flex flex-col bg-white px-20 py-14 rounded-lg shadow-2xl">
                <h1 className="text-3xl font-medium text-primary pb-4">Login</h1>
                <label className="">Password</label>
                <input 
                name="password"
                className="border border-gray-300 p-2 rounded-md mt-1"
                type="text" 
                value={password} 
                onChange={(e) => {
                    setPassword(e.target.value?.toLowerCase())
                }}
                placeholder="Password"
                />
                <button
                className="bg-primary text-white p-2 rounded-md mt-4"
                onClick={checkPassword}
                >
                    Ingresar
                </button>
            </div>
        </div>
    )
}

export default Login