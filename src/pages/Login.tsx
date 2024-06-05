import { useNavigate } from "react-router-dom";
import { useUserStore } from "../stores/user-store";
import { useState } from "react";

function Login(){

    const setCanAccess = useUserStore(state => state.SetCanAccess);
    
    const [password, setPassword] = useState<string>('')

    const navigate = useNavigate();

    const checkPassword = () => {
        if(!password) return alert('Ingrese una contraseña')
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
            return alert('Contraseña incorrecta, no puede ser un palíndromo')
        }
        setCanAccess(true)
        navigate('/')
    }
    
    return (
        <div className="bg-primary min-h-screen flex flex-col items-center justify-center">
            <div className="flex flex-col bg-white px-10 py-4 rounded-lg shadow-2xl">
                <h1>Login</h1>
                <input 
                className="border border-gray-300 p-2 rounded-md mt-4"
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