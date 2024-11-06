import React, { Suspense } from 'react'
import Absences from './Absences'

import styles from './styles.module.css'
import { fetchAbsences } from '../actions/fetchAbsences'
import { AbsenceType } from './types'

export default async function Page() {
	const absences = await fetchAbsences<AbsenceType[]>()

	return (
		<div>
			<h1 className={styles.header}>Absences</h1>
			<Suspense fallback={<div>Loading...</div>}>
				<Absences defaultAbsences={absences} />
			</Suspense>
		</div>
	)
}
