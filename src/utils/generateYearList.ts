export function generateYearList() {
    const startYear = 2021
    const startMonth = 9
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const currentMonth = currentDate.getMonth() + 1

    let maxYear = currentYear
    if (currentMonth < startMonth) {
        maxYear = currentYear - 1
    }

    const yearList = []
    const suffix = ['st', 'nd', 'rd', 'th']

    for (let i = startYear; i <= maxYear; i++) {
        const year = i - startYear + 1
        const titleSuffix = year <= 3 ? suffix[year - 1] : suffix[3]

        yearList.push({
            year: String(year),
            year_kor: `${year}기`,
            title: `${year}${titleSuffix}`,
        })
    }

    return yearList
}
const yearList = generateYearList()
//   '1기' | '2기' | '3기' | '4기'
export type MEMBER_YEAR = (typeof yearList)[number]['year_kor']
export function getLatestYear() {
    return yearList.at(-1)?.year ?? yearList[yearList.length - 1].year
}
