import {useState} from 'react';
import { registerUser } from '../services/api.js';

function Register(){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleRegister(){
        setErro("");
        setLoading(true);

        try{

            if(!nome || !email || !senha){
                throw new Error("Preencha todos os campos")
            }
    
            if(senha.length < 6){
                throw new Error("Senha deve ter ao menos 6 caracteres");
            }
    
            const data = {
                nome,
                email,
                senha
            };

            const response = await registerUser(data);

            console.log("Usuário criado:", response)
            
                    setNome("");
                    setEmail("");
                    setSenha("");
                    setLoading(false);

        }catch(error){
            setErro(error.message);
        } finally {
            setLoading(false)
        }
       
    }

    return(
        <div>
            <h1>Cadastro</h1>

            <input type="text" placeholder='Digite nome' value={nome} onChange={(e) => {
                setNome(e.target.value);
                setErro("");
            }} />

            <input type="email" placeholder='Digite seu email' value={email} onChange={(e) => {
                setEmail(e.target.value);
                setErro("");
            }} />

            <input type="password" placeholder='Digite a senha' value={senha} onChange={(e) => {
                setSenha(e.target.value);
                setErro("");
            }}/>

            <button disabled={loading} onClick={() => handleRegister()}>{loading ? "Cadastrando..." : "Cadastrar"}</button>

            {erro && <p>{erro}</p>}
           
        </div>
    )
}

export default Register;