function importAll(r) {
	let images = {};
    console.log('images', images, 'r', r.keys())
  r.keys().forEach(item => { 
      console.log('regex is', item.replace(/\.\/|.png/g, ''))
      images[item.replace(/\.\/|.png/g, '')] = '../assets/' + item.replace('./', '')
    })
  console.log('images', images)
	return images
}

const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));

const card = (suit, number ) => {
console.log('suit and number', suit, number)
const combo = (number) ? `${suit}${number}` : 'alternate';
console.log('combo is', combo)

  return (
		images[`${combo}`]
  );
}

export default card