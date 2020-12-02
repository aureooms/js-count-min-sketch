import assert from 'assert';

const _update = (d, h, cm, i, c) => {
	assert(h.length === d);
	assert(cm.length === d);
	for (let j = 0; j < d; ++j) {
		const w = h[j](i);
		cm[j][w] += c;
	}
};

export default _update;
