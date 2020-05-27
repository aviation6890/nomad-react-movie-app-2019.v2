import React from 'react';

function Food({ name, picture }) {
	console.log(name);
	return (
		<div>
			<h2> i Like {name}</h2>
			<img src={picture} alt={name} />
		</div>
	);
}

const foodILike = [
	{
		name: 'kimchi',
		image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg'
	},
	{
		name: 'ramen',
		image:
			'https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg'
	},
	{
		name: 'samgyopsal',
		image:
			'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb'
	},
	{
		name: 'gimbap',
		image:
			'http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg'
	}
];

function App() {
	return (
		<div>
			<h1>HEllo</h1>
			{foodILike.map((dish) => <Food name={dish.name} picture={dish.image} />)}
		</div>
	);
}

export default App;
