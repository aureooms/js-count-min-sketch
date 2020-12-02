import assert from 'assert';

export default function* _alloc (d, w) {
	assert(d >= 1);
	assert(w >= 1);
	for (let j = 0; j < d; ++j) yield new Array(w).fill(0);
}
