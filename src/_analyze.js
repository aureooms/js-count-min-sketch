const _analyze = (d, w, storage=Array) => {
	assert(d >= 1);
	assert(w >= 1);
	const b = storage === Array ? 8 : storage.BYTES_PER_ELEMENT;
	assert(b >= 1);
	const epsilon = Math.E/w;
	const delta = 1/Math.pow(Math.E,d);
	const bytes = b * d * w;
	return {epsilon, delta, bytes};
};

export default _analyze;
