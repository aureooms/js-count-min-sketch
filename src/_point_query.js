import assert from 'assert';

const _point_query = (d, h, cm, i) => {
	assert(d >= 1);
	assert(h.length === d);
	assert(cm.length === d);
	const w = h[0](i);
	let estimation = cm[0][w];
	for (let j = 1; j < d; ++j) {
		const w = h[j](i);
		estimation = Math.min(estimation, cm[j][w]);
	}
	return estimation;
};

export default _point_query;
