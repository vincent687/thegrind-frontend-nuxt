interface ResponseType<T> {
  code: number
  data: T
  message: string
}

export function successFn<T>(result: T, message = 'Ok'): ResponseType<T> {
  return {
    code: 0,
    data: result,
    message,
  }
}

export default {
  successFn,
}
