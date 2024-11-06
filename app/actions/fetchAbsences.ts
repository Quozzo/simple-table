export function fetchAbsences<T>(filters?: Record<string, string>): Promise<T> {
	const urlFilters = new URLSearchParams(filters).toString()
	return fetch(`https://front-end-kata.brighthr.workers.dev/api/absences?${urlFilters}`).then((response) => response.json()).catch(e => console.log(e)) as Promise<T>
}