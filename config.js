export const TYPE = {
	BREAKFAST: 1,
	LUNCH: 2,
	DINNER: 3,
	CAR_RENTAL: 4,
}
/**
	* we can define some properties such as name, threshold
	* if the backend returns all the properties like name, we don't need to define this here
*/
export const EXPENSE_DETAILS = [
	{
		name: 'Breakfast',
		value: TYPE.BREAKFAST,
		threshold: 20,
		type: 'meal',
	},
	{
		name: 'Lunch',
		value: TYPE.LUNCH,
		threshold: 50,
		type: 'meal',
	},
	{
		name: 'Dinner',
		value: TYPE.DINNER,
		threshold: 100,
		type: 'meal',
	},
	{
		name: 'Car rental',
		value: TYPE.CAR_RENTAL,
		threshold: 300,
		type: 'rent'
	}
]
