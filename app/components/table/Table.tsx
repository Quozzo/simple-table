import React, { ReactNode } from 'react'

import styles from './styles.module.css'
import Image from 'next/image'

interface TableProps<T> {
	data: (T & { id: string })[]
	headers: { key: string; label: string; renderer?: (row: T) => ReactNode; onSort: (a: T, b: T) => number }[]
}

export default function Table<T>({ data, headers }: TableProps<T>) {
	const [sortKey, setSortKey] = React.useState('')
	const [sortDirection, setSortDirection] = React.useState('asc')

	const handleSort = (key: string) => {
		if (sortKey !== key) {
			setSortKey(key)
			setSortDirection('asc')
		} else {
			setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
		}
	}

	const sortedData = React.useMemo(() => {
		const sorted = data.toSorted((a, b) => {
			const header = headers.find(header => header.key === sortKey)
			if (!header) return 0
			return (sortDirection === 'asc' ? 1 : -1) * header.onSort(a, b)
		})
		return sorted
	}, [data, sortKey, sortDirection, headers])

	return (
		<table>
			<thead>
				<tr>
					{headers.map(header => (
						<th className={`${styles.cell} ${styles.header}`} key={header.key} onClick={() => handleSort(header.key)}>
							<span>{header.label}</span>
							{header.key === sortKey && (
								<Image className={`light:invert inline ml-2 ${sortDirection === 'desc' ? 'rotate-180' : ''}`} src='/vercel.svg' alt='Vercel logomark' width={10} height={10} />
							)}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{sortedData.map(row => (
					<tr key={row.id}>
						{headers.map(header => {
							if (header.renderer) {
								return (
									<td className={styles.cell} key={header.key}>
										{header.renderer(row)}
									</td>
								)
							}
						})}
					</tr>
				))}
			</tbody>
		</table>
	)
}
