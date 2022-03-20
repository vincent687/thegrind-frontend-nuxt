
export const toFullDate = (date) => {
    debugger;
    const d = new Date(date)
    const day = d.getDate() >= 10 ? d.getDate() : '0' + d.getDate()
    const m =
        d.getMonth() + 1 >= 10
            ? d.getMonth() + 1
            : '0' + (d.getMonth() + 1)
    const y = d.getFullYear()
    return y + '/' + m + '/' + day
}
    

export const checkIfEmpty = (testObject) => 
{
    debugger;
    return !!(testObject && testObject.id);
}


export const isMobile = () =>
{
    debugger;
    if(navigator != null)
    {
         if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          return true
        } else {
          return false
        }
    }
    else{
        return false
    }

}
