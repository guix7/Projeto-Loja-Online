import {useState, useEffect} from 'react';
import { getProducts } from '../services/api.js';

function Home(){
    const [products, setProducts] = useState([]);
    const [erro, setErro] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() =>{
        async function fetchProducts(){
            setLoading(true);
            setErro("");

            try{
                const response = await getProducts();
                console.log(response);
                setProducts(response.data);
            }catch(error){
                setErro(error.message)
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, [])

    return(
        <div>
            <h1>Produtos</h1>

            {loading && <p>Carregando...</p>}
            {erro && <p>{erro}</p>}

            {products.map((product) =>(
                <div key={product.id}>
                    <h1>{product.nome}</h1>
                    <h2>{product.preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</h2>
                    <p>{product.descricao}</p>
                </div>
            ))}
        </div>
    )
}

export default Home;