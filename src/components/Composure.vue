<template>
	<div class="hello">
		<button @click="runGrades()">gradeTests... </button>
			average {{average}} results {{results}}
	</div>
</template>

<script>
export default {
	name: "Composure",
	props: {
		msg: String
	},
	data: () => ({
		average: null,
		results: null,
		topGrade: 1
	}),
	methods: {
		runGrades() {
			this.results = this.gradeTests([0.1, 0.5, 1]);
		},
		mapScoresToGrades(tests, average) {
			let getGradetest = average => testScore =>
				testScore >= this.topGrade ? "A" : "F";
			let gradeTest = getGradetest(average);
			return tests.map(gradeTest);
		},
		getAverage(tests) {
			return tests.reduce((acc, elem) => acc + elem); // tests.lengt
		},
		gradeTests(tests) {
			this.average = this.getAverage(tests);
			return this.mapScoresToGrades(tests, this.average);
		}
	}
};
</script>