<!DOCTYPE html>
<html>
<head>
	<title>Book Store</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script>
		$(document).ready(function(){
			var books = [
				{name: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 15},
				{name: "To Kill a Mockingbird", author: "Harper Lee", price: 12},
				{name: "The Catcher in the Rye", author: "J.D. Salinger", price: 10}
			];

			books.forEach(function(book){
				var book_html = `
					<div class="book">
						<h2>${book.name}</h2>
						<p>Author: ${book.author}</p>
						<p>Price: $${book.price.toLocaleString()}</p>
						<button class="add-to-cart" data-name="${book.name}" data-price="${book.price}">Add to Cart</button>
					</div>
				`;
				$("#book-list").append(book_html);
			});

			var cart = [];

			$("#book-list").on("click", ".add-to-cart", function(){
				var name = $(this).data("name");
				var price = $(this).data("price");
				cart.push({name: name, price: price});
				$("#cart-count").text(cart.length);
			});

			$("#view-cart").click(function(){
				var total = 0;
				var cart_html = "<h2>Shopping Cart</h2>";
				cart.forEach(function(item){
					total += item.price;
					cart_html += `
						<div class="cart-item">
							<h3>${item.name}</h3>
							<p>Price: $${item.price.toLocaleString()}</p>
						</div>
					`;
				});
				cart_html += `<p>Total: $${total.toLocaleString()}</p>`;
				$("#cart").html(cart_html);
			});
		});
	</script>
	<style>
		.book {
			border: 1px solid black;
			padding: 10px;
			margin-bottom: 10px;
		}
		.add-to-cart {
			background-color: green;
			color: white;
			border: none;
			padding: 5px;
			margin-top: 10px;
			cursor: pointer;
		}
		.cart-item {
			border: 1px solid black;
			padding: 10px;
			margin-bottom: 10px;
		}
	</style>
</head>
<body>
	<h1>Book Store</h1>
	<div id="book-list"></div>
	<p><button id="view-cart">View Cart (<span id="cart-count">0</span>)</button></p>
	<div id="cart"></div>
</body>
</html>
