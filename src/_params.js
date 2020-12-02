const _params = (epsilon, delta) => {
	assert(epsilon > 0);
	assert(0 < delta && delta < 1);
	// Using the following parameters the estimate e has probability at least
	// 1-delta to approximate the data vector a as follows:
	// e - epsilon N <= a <= e
	// where N is the l1-norm of a.
	// TODO Check numerical accuracy requirements.
	const w = Math.ceil(Math.E/epsilon) | 0;
	const d = Math.ceil(Math.log(1/delta)) | 0;
	return [d, w];
};
