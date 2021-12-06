import React,{useState} from 'react'

const AuthContext = React.createContext();
AuthContext.displayName = 'AuthContent'
export const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const login = () => {}
    const register = () => {}
    const logout = () => {}
return (
    <AuthContext.Provider
        children={children}
        value={{user,login,register,logout}}
    />
)
}

export const useAuth = () => {
    const context = React.useContext(AuthContext)
    if(!context) {
        throw new Error('useAuth 必须在AuthProvider包裹里使用')
    }
    return context
}
