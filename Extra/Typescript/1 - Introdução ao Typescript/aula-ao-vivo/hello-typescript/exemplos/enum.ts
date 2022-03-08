// enum - tipa o objeto
// a grande vantagem é que esse objeto fica imutável

enum StatusCode {
  ok=200,
  BadRequest=400,
  Unauthorized,
  Forbidden=500,
  NotFound,
}

console.log(StatusCode.Unauthorized)
