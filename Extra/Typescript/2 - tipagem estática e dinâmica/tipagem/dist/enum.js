"use strict";
// enum - tipa o objeto
// a grande vantagem é que esse objeto fica imutável
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["ok"] = 200] = "ok";
    StatusCode[StatusCode["BadRequest"] = 400] = "BadRequest";
    StatusCode[StatusCode["Unauthorized"] = 401] = "Unauthorized";
    StatusCode[StatusCode["Forbidden"] = 500] = "Forbidden";
    StatusCode[StatusCode["NotFound"] = 501] = "NotFound";
})(StatusCode || (StatusCode = {}));
console.log(StatusCode.Unauthorized);
