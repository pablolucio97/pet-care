function formatNumber(n: number){
    return n.toFixed(0)
}


function formatDate(date: number | Date){
    const format = Intl.DateTimeFormat('pt-BR').format(date)
    return format
}

export { formatNumber, formatDate } 