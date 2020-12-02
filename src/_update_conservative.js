import assert from 'assert';
import _point_query from './_point_query';

const _update_conservative = (d, h, cm, i, c) => {
	assert(h.length === d);
	assert(cm.length === d);
	const estimate = _point_query(d, h, cm, i);
	for (let j = 0; j < d; ++j) {
		const w = h[j](i);
		cm[j][w] = Math.max(cm[j][w], estimate + c);
	}
};

export default _update_conservative;
