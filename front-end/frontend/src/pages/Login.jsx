import {useState} from 'react';
import { loginUser } from '../services/api.js';

function Login(){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState("");

   async function handleLogin(){
        setErro("");
        setLoading(true);

        try{
            
            if(!email || !senha){
                throw new Error('Os dados devem ser preenchidos');
            }

            if(senha.length < 6){
                throw new Error('Senha deve ter ao menos 6 caracteres');
            }

            const data = {
                email,
                senha
            }

            const response = await loginUser(data);

            console.log("Login feito:", response);

            //Salvar token

            localStorage.setItem("token", response.token);
            
            setEmail("");
            setSenha("");
            

        }catch(error){
            setErro(error.message)
        } finally{
            setLoading(false)
        }
    }

    return(
        <div>
            <h2>Login</h2>

            <input type="email" placeholder='Digite o Email' value={email} onChange={(e) => {
                setEmail(e.target.value);
                setErro("");
            }} />

            <input type="password" placeholder='Digite a Senha' value={senha} onChange={(e) =>{
                setSenha(e.target.value);
                setErro("");
            }} />

            <button disabled={loading} onClick={handleLogin}>{loading ? "Entrando..." : "Entrar"}</button>
            {erro && <p>{erro}</p>}

        </div>
    )
}

export default Login;