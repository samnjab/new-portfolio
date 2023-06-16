function importAll(context) {
	let importedItems = {};
  console.log('context keys', context.keys())
  context.keys().forEach(item => {
    importedItems[item.replace(/\.(png|jpe?g|jpg|svg|mp4)$|\.\//g, '')] = context(item)
    })
  console.log('images returned by importAll', importedItems)
	return importedItems
}

const card = (suit, number=1, items ) => {
  const combo = (number) ? `${suit}${number}` : 'alternate';
  return (
    items[`${combo}`]
  );
}

export { importAll, card }