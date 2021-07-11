export const formatDate = (date) =>{
    let newDate = new Date(date)
    return `${newDate.getDate()}-${newDate.getMonth()+1}-${newDate.getFullYear()}`
}