<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		?? {{progressValue}}
		<button @click="init()">test functional programming... </button>
		<button @click="testFactorial(5)">test factorial of 5 {{factnum}}</button>
		<div >functionComposition: {{functionComposition(5)}}</div>
		<div >functionComposition: {{functionComposition2(5)}}</div>

	</div>
</template>

<script>
import AsyncHelperLib from "@/components/classes/async-helper-lib";

const asyncHelperLib = new AsyncHelperLib();

console.log("asyncHelperLib.url", asyncHelperLib.url);
asyncHelperLib.url = "ciao";
console.log("asyncHelperLib.url", asyncHelperLib.url);

export default {
	name: "HelloWorld",
	props: {
		msg: String
	},

	data: () => ({
    interval: {},
    factnum: 0,
		progressValue: asyncHelperLib.url
	}),
	created() {
		//  console.log ('created...')
	},
	methods: {
	 
		functionComposition(val) {
			const compose = (f, g) => x => f ( g( x ) )
			const double = x => 2 *x;
			const pluseOne = x => x + 1;
			const toString = x => `Result ${x}`
			// compose (double, pluseOne) (val)

			return double (pluseOne(val))
		},
		functionComposition2(val) {
			const compose = (f, g) => x => f ( g( x ) )
			const double = x => 2 *x;
			const pluseOne = x => x + 1;
			const toString = x => `Ciao Result ${x}`
			
			// alt same result different order return compose ( compose ( toString, double), pluseOne) (val)
			return compose ( toString , compose (double, pluseOne)) (val)

		 
		},
    testFactorial(num) {
        // console.log ('here test factorial', num)
        const factorial = (num) => {
        return  this.factnum = num <= 1? 1: num * factorial(num-1);
        }

      factorial(num)

    },
		createInvoice(invoiceNumber) {
			return {
				invoiceNumber,
				items: []
			};
		},
		clone(o) {
			return JSON.parse(JSON.stringify(o));
		},
		addItem(invoice, quantity, itemPrice, description) {
			const newInvoice = this.clone(invoice);
			newInvoice.items.push({
				quantity,
				itemPrice,
				description
      });
			return newInvoice;
		},
		calculateSum(invoice) {
      let acc = null;
      let items = null;
       ( {acc, items} = { acc: invoice.invoiceNumber, items: invoice.items } )
			const logReducer = (acc, item) => {
				console.log("~~~~logReducer acc, item:", acc, item);
				return acc + item.quantity * item.itemPrice;
      };
      
 
			const reducer = (acc, item) => {
				acc + item.quantity * item.itemPrice;
				return invoice.items.reduce(logReducer, 0);
      };
      
     return reducer(acc, items)
    
		},
		init() {
		 
			const invoice1a = this.createInvoice(1);
			const invoice2a = this.createInvoice(2);

			const invoice1b = this.addItem(invoice1a, 2, 10, "t-shirt");
      const invoice1 = this.addItem(invoice1b, 3, 25, "bag");
      
			const invoice2b = this.addItem(invoice2a, 10, 1, "bulb");
			const invoice2 = this.addItem(invoice2b, 2, 10, "pillow");

			console.log("invoice1 sum", this.calculateSum(invoice1) );
			console.log("invoice2 sum", this.calculateSum(invoice2));
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
