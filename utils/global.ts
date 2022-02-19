
export const toFullDate = (date) => {
    const d = new Date(date)
    const day = d.getDate() >= 10 ? d.getDate() : '0' + d.getDate()
    const m =
        d.getMonth() + 1 >= 10
            ? d.getMonth() + 1
            : '0' + (d.getMonth() + 1)
    const y = d.getFullYear()
    return y + '/' + m + '/' + day
}
    
