import styles from './Carrinho.module.css';

const Carrinho = ({ carrinho }) => {
    const total = carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

    return (
        <div className={styles.containerCarrinho}>
            <h2>Meu Carrinho</h2>

            <div className={styles.listaProdutos}>
                {carrinho.map((item) => (
                    <div className={styles.cardItem} key={item.id}>
                        <img src={item.imagem} alt={item.nome} className={styles.fotoProduto} />
                        <div className={styles.infoProduto}>
                            <h3>{item.nome}</h3>
                            <p>Quantidade: {item.quantidade}</p>
                            <p>Preço unitário: R$ {item.preco.toFixed(2)}</p>
                        </div>
                        <div className={styles.precoBox}>
                            R$ {(item.preco * item.quantidade).toFixed(2)}
                        </div>
                    </div>
                ))}
            </div>

            <hr className={styles.linhaDivisoria} />

            <div className={styles.totalBox}>
                <span>Total:</span>
                <strong className={styles.valorDestaque}>R$ {total.toFixed(2)}</strong>
            </div>

            <button type='button' className={styles.botaoFinalizar}>
                Finalizar Compra
            </button>
        </div>
    );
};

export default Carrinho;
