function translate(str) {
	const StrArray = str.split(' ');
	const newArray = []
	const vowels = "aieou";
	const digraphs = 'blbrchckclcrdrflfrghglgrngphplprquscshskslsmsnspstswthtrtwwh,wr'
	const trigraphs = "nthschscrshrsplsprsqustrthr"
	StrArray.forEach(word => {
		let tempWord = word
		if (!vowels.includes(word[0].toLowerCase())) {
			if (trigraphs.includes(word.toLowerCase().substring(0,3))) {
				tempWord = word.substring(3) + word.substring(0,3);
			} else if (digraphs.includes(word.toLowerCase().substring(0,2))) {
				tempWord = word.substring(2) + word.substring(0,2);
			} else {tempWord = word.substring(1) + word[0];}
		}
		newArray.push(tempWord + 'ay')
	})

	return newArray.join(' ');

	
}

module.exports = {
	translate
}

