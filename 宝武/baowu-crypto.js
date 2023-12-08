var  CryptoJS = require('crypto-js');

function get_h(n) {
    var r = {
        "x-user": "0/56f5cff3cad14853a44782c2c689ab2a",
        "x-nonce": Math.random().toString(36).substr(3, 10),
        "x-date": (new Date).getTime() / 1e3 | 0,
        "Content-Md5": CryptoJS.MD5(n).toString(CryptoJS.enc.Hex),
    }
    o = "".concat("post".toUpperCase(), "\n").concat('/v1/web/api/content/list?domainId=3', '\nx-user:').concat(r["x-user"], "\nx-nonce:").concat(r["x-nonce"], "\nx-date:").concat(r["x-date"], "\nContent-Md5:").concat(r["Content-Md5"], "\n");
    // console.log('o------------',o)
    r["x-signature"] = CryptoJS.HmacSHA1(o, "13ade1de1eff43ffb821735f352a4148").toString().toUpperCase()
    return r
}