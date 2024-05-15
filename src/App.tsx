import "./App.scss";
import { AppBar, Button, Toolbar } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useEffect, useState } from "react";

import productsJSON from "./products.json";

function App() {
	type Product = {
		id: number;
		name: string;
		price: number;
		img: string;
	};

	const [products, setProducts] = useState<Product[]>();
	useEffect(() => {
		setProducts(productsJSON);
	}, []);

	return (
		<>
			<AppBar>
				<Toolbar>
					<h2>Sunwear</h2>
					<div style={{ flexGrow: 1 }}></div>
					<ShoppingCartIcon />
				</Toolbar>
			</AppBar>
			<center>
				<h1>Udlejning/køb af badeudstyr</h1>
			</center>
			<div className="Produkter">
				<h2>Products</h2>
				<div className="productCarousel">
					{products?.map((product) => (
						<div key={product.id} className="product">
							<img src={product.img} alt="product" />
							<h3>{product.name}</h3>
							<p>${product.price}</p>
							<Button variant="contained">Add to Cart</Button>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default App;
