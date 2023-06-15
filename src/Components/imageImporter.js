function importAll(r) {
	let images = {};
  console.log('r is', r)
  console.log('r keys', r.keys())
  r.keys().forEach(item => { 
      console.log('constructed keys from regex is', item.replace(/\.\/|.png/g, ''))
      images[item.replace(/\.\/|.png/g, '')] = r(item)
    })
  console.log('images returned by importAll', images)
	return images
}

const card = (suit, number, images ) => {
  console.log('suit and number', suit, number)
  const combo = (number) ? `${suit}${number}` : 'alternate';
  console.log('combo is', combo)
  return (
    images[`${combo}`]
  );
}

export { importAll, card }