'use client'

import React, { useState } from 'react'
import { AbsenceParams, AbsenceType } from './types'
import Table from '../components/table/Table'
import { headers } from './constants'

export default function Absences({ defaultAbsences }: AbsenceParams) {
	const [absences] = useState(defaultAbsences)

	return <Table<AbsenceType> data={absences} headers={headers} />
}
