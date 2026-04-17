function ProductCart({ product, addToCart }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img
        src={product.imagem}
        alt={product.nome}
        className="w-full h-100 object-cover rounded mb-2"
      />
      <h1 className="text-lg font-bold">{product.nome}</h1>
      <h2 className="text-orange-600 font-semibold text-lg">
        {product.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </h2>
      <p className="text-gray-600">{product.descricao}</p>

      <button
        onClick={() => addToCart(product)}
        className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

export default ProductCart;
