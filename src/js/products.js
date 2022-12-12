class Products extends React.Component {
    render() {
        const products = JSON.parse(this.props.products);
        return (
            <div>
            <h1>Hello World</h1>
                <table>
                    <tbody>
                        <tr>
                            <td>id</td>
                            <td>nom</td>
                            <td>bio</td>
                            <td>quantity</td>
                        </tr>
                        {
                            products.map(product => {
                            return (
                                <tr>
                                    <td>{product.id}</td>
                                    <td>{product.nom}</td>
                                    <td>{product.bio}</td>
                                    <td>{product.quantity}</td>
                                </tr>
                            )})
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

const domContainer = document.querySelector("#root");
const products = domContainer.innerHTML;
ReactDOM.render(<Products products={products}/>, domContainer);