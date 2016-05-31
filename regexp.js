var string_temp = response.headers.Cookie;
log (string_temp);
var expr = new RegExp(/code=(.*)&?/); // parse from "/code=" to "?" (don't forget about escaping /string/ :) )
var string_new = expr.exec(string_temp).pop(); //pop() write last symbol to var
log (sting_new);
variables.set("clearCookie",string_new);