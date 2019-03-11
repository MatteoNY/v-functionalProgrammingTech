<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		?? {{progressValue}}
		<button @click="run()">test basket </button>
	 
	   basket {{basket}}

	</div>
</template>

<script>
import AsyncHelperLib from "@/components/classes/async-helper-lib";

const asyncHelperLib = new AsyncHelperLib();

console.log("asyncHelperLib.url", asyncHelperLib.url);
asyncHelperLib.url = "ciao";
console.log("asyncHelperLib.url", asyncHelperLib.url);

export default {
	name: "Basket",
	props: {
		msg: String
	},

	data: () => ({
    interval: {},
    basket: [],
		progressValue: asyncHelperLib.url
	}),
	created() {
		//  console.log ('created...')
	},
	methods: {
    run() {
				console.log ('init..')
				const basket1 = this.addElement(
					this.basket, 'Biscuts', 1
				)
			 
			 	const basket2 = this.addElement(
					this.basket2, 'Tea', 2
				)
			 
			   basket2[0].itemPrice = 2

					console.log ('basket1', basket1[0].itemPrice)
						console.log ('basket2', basket2[0].itemPrice)

				this.basket = basket1;
			 
      

		},
		deepClone( obj )  {
				return JSON.parse(JSON.stringify( obj) );
		},
		addElement(basket, itemName, itemPrice) {
			return this.deepClone(this.basket).concat([ {
				itemName,
				itemPrice
      }] );
			 
		}
		 
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
