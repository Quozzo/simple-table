import { AbsenceLeaveType, AbsenceType } from "./types"

export const headers = [
	{
		key: 'name',
		label: 'Name',
		renderer: (row: AbsenceType) => `${row.employee.firstName} ${row.employee.lastName}`,
		onSort: (a: AbsenceType, b: AbsenceType) => `${a.employee.firstName} ${a.employee.lastName}`.localeCompare(`${b.employee.firstName} ${b.employee.lastName}`),
	},
	{
		key: 'startDate',
		label: 'Start Date',
		renderer: (row: AbsenceType) => new Date(row.startDate).toLocaleDateString(),
		onSort: (a: AbsenceType, b: AbsenceType) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
	},
	{
		key: 'endDate',
		label: 'End Date',
		renderer: (row: AbsenceType) => {
			const d = new Date(row.startDate)
			d.setDate(d.getDate() + row.days)
			return d.toLocaleDateString()
		},
		onSort: (a: AbsenceType, b: AbsenceType) => {
			const d = new Date(a.startDate)
			d.setDate(d.getDate() + a.days)
			const e = new Date(b.startDate)
			e.setDate(e.getDate() + b.days)
			return d.getTime() - e.getTime()
		},
	},
	{ key: 'type', label: 'Type', renderer: (row: AbsenceType) => AbsenceLeaveType[row.absenceType], onSort: (a: AbsenceType, b: AbsenceType) => a.absenceType.localeCompare(b.absenceType) },
	{
		key: 'approved',
		label: 'Approved',
		renderer: (row: AbsenceType) => (row.approved ? 'Yes' : 'No'),
		onSort: (a: AbsenceType, b: AbsenceType) => (a.approved ? 1 : 0) - (b.approved ? 1 : 0),
	},
]