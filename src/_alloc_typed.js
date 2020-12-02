import assert from 'assert';

export default function* _alloc_typed (d, w, TypedArray=Float64Array) {
	assert(d >= 1);
	assert(w >= 1);
	const b = TypedArray.BYTES_PER_ELEMENT;
	assert(b >= 1);
	const bytes = b * d * w;
	const buffer = new ArrayBuffer(bytes);
	for (let j = 0; j < d; ++j) yield new TypedArray(buffer, b * j * w, w);
}
