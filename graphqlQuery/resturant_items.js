export const menuItemsQuery = `{
    items {
        name
        otherName
        regularPrice
        mealTime
    }
}`

export const menuItemsQueryByMealTime = (mealTime) => {
    `items(where: {mealTime: ${mealTime}}) {
        mealTime
        otherName
        name
        regularPrice
    }`
}