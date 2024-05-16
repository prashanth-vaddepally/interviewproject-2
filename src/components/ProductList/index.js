import {Component} from 'react'

class ProductList extends Component {
  render() {
    const {productDetails} = this.props
    const {description, price, name, category} = productDetails
    return (
      <div>
        <h1>{name}</h1>
        <h2>{description}</h2>
        <h3>{price}</h3>
        <h4>{category}</h4>
      </div>
    )
  }
}
export default ProductList
