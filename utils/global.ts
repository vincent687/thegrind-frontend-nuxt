
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

export const sessionSet = (key, value, expirationInMin = 10) => {
    let expirationDate = new Date(new Date().getTime() + (60000 * expirationInMin))
      let newValue = {
      value: value,
      expirationDate: expirationDate.toISOString()
    }
    sessionStorage.setItem(key, JSON.stringify(newValue))
}


export const  sessionGet = (key) => {
    let stringValue = sessionStorage.getItem(key)
    debugger
      if (stringValue !== null) {
        let value = JSON.parse(stringValue)
          let expirationDate = new Date(value.expirationDate)
          if (expirationDate > new Date()) {
            return value.value
          } else {
            sessionStorage.removeItem(key)
          }
      }
      return null
}