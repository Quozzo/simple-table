export type AbsenceParams = {
		defaultAbsences: AbsenceType[];
};

export enum AbsenceLeaveType {
	ANNUAL_LEAVE = "Annual Leave",
	SICKNESS = "Sickness",
	MEDICAL = "Medical",
}

export type AbsenceType = {
	id: string,
   startDate: string,
   days: number,
   absenceType: AbsenceLeaveType,
   employee: {
      firstName: string,
      lastName: string,
      id: string
   },
	approved: boolean;
};