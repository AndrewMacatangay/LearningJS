function pow(x, n)
{
	let result = 1;
	for(let i = 0; i++ < n; result *= x);
	return result;
}
