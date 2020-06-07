import React, { useEffect, useState } from "react";
import "../styles.css";
import Item from "../components/Item";
import axios from "axios";
export function HomeScreen(props) {

  const [product, setProduct] = useState([]);
  useEffect(() => {
    console.log('useEffectuseEffectuseEffect')
    const fetchdata = async () => {
      const { data } = await axios.get("http://localhost:4000/product/")
      setProduct(data)
    }
    if (product.length == 0) {
      fetchdata();
    }
  })
  console.log(product)

  return (
    <ul className="products">
      {product.map(product => (
        <Item key={product._id} item={product} />
      ))}
    </ul>
  );
}
class HomeScreen2 extends React.PureComponent  {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     product: []
  //   }
  // }
  // async componentDidMount() {
  //   console.log('componentDidMount')
  //   // const { data } = await axios.get("http://localhost:4000/product/")
  //   // this.setState({
  //   //   product: data
  //   // })
  // }
  // componentDidUpdate() {
  //   console.log('componentDidUpdate')
  // }
  // componentWillUpdate(){
  //   console.log('componentWillUpdate')
  // }

  render() {
    console.log('render functin')
    console.log('render functin2')
    return (
      // <ul className="products">
      //   {this.state.product.map(product => (
      //     <Item key={product._id} item={product} />
      //   ))}
      // </ul>
      <div>asdfsdf</div>
    );
  }
}
export default HomeScreen2