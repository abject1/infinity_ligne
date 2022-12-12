var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Products = function (_React$Component) {
    _inherits(Products, _React$Component);

    function Products() {
        _classCallCheck(this, Products);

        return _possibleConstructorReturn(this, (Products.__proto__ || Object.getPrototypeOf(Products)).apply(this, arguments));
    }

    _createClass(Products, [{
        key: "render",
        value: function render() {
            var products = JSON.parse(this.props.products);
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Hello World"
                ),
                React.createElement(
                    "table",
                    null,
                    React.createElement(
                        "tbody",
                        null,
                        React.createElement(
                            "tr",
                            null,
                            React.createElement(
                                "td",
                                null,
                                "id"
                            ),
                            React.createElement(
                                "td",
                                null,
                                "nom"
                            ),
                            React.createElement(
                                "td",
                                null,
                                "bio"
                            ),
                            React.createElement(
                                "td",
                                null,
                                "quantity"
                            )
                        ),
                        products.map(function (product) {
                            return React.createElement(
                                "tr",
                                null,
                                React.createElement(
                                    "td",
                                    null,
                                    product.id
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    product.nom
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    product.bio
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    product.quantity
                                )
                            );
                        })
                    )
                )
            );
        }
    }]);

    return Products;
}(React.Component);

var domContainer = document.querySelector("#root");
var products = domContainer.innerHTML;
ReactDOM.render(React.createElement(Products, { products: products }), domContainer);