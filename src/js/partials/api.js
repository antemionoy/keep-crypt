function GetAPI(endpoint, data, callback) {
    var xhr = new XMLHttpRequest();
    var params = ""
    Object.keys(data).forEach(function (x) {
        if (params == "") {
            params += "?" + encodeURIComponent(x) + "=" + encodeURIComponent(data[x])
        } else {
            params += "&" + encodeURIComponent(x) + "=" + encodeURIComponent(data[x])
        }
    })


    //  xhr.open('GET', 'http://crypto-fund.org/api/'+endpoint, false);
    xhr.open('GET', '/api/' + endpoint + params, false);
    xhr.send();

    if (xhr.status != 200) {
        //      alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
    } else {
        callback(JSON.parse(xhr.responseText)); // responseText -- текст ответа.
    }
}

function PostAPI(endpoint, data, callback) {

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) return;
        //       alert(xhr.responseText)
        if (xhr.status == 200) {
            callback(JSON.parse(xhr.responseText))
        }
    }

    xhr.open('POST', '/api/' + endpoint, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(JSON.stringify(data));
}

function APIPasswordRecoveryRequest(email, callback) {
    PostAPI("recovery_request", { email:email, options:{}}, function(response){
        callback(response);
    });
}

function APIPasswordRecoveryGet(ticket, callback) {
    PostAPI("recovery_get", { ticket:ticket}, function(response){
        callback(response);
    });
}

function APIPasswordRecoverySet(ticket, password, callback) {
    PostAPI("recovery_set", { ticket:ticket, password:password, options:{} }, function(response){
        callback(response);
    });
}

function APIEmailConfirm(ticket, callback) {
    PostAPI("email_confirm", { ticket:ticket }, function(response){
        callback(response);
    });
}

function APIGetConfig( callback) {
    PostAPI("config_get", { }, function(response){
        callback(response);
    });
}

function APIRates(callback) {
    GetAPI("rates", {}, function (response) {
        callback(response);
    });
}

function APIPortfolio(callback) {
    GetAPI("portfolio", {}, function (response) {
        callback(response);
    });
}

function APIGetTokenData(token, callback) {
    GetAPI("tokendata", { token: token }, function (response) {
        callback(response);
    });
}

function APIGetIcoInfo( callback) {
    GetAPI("icoinfo", {}, function (response) {
        callback(response);
    });
}


function APIGetTokenOperationDates(token, callback) {
    GetAPI("tokenoperationdates", { token: token }, function (response) {
        callback(response);
    });
}

function APIReportTransaction(user, session_key, data, callback) {
    PostAPI("reporttransaction", { user: user, session_key: session_key, data:data }, function (response) {
        callback(response);
    });
}



function APIGetTokenBlock(user, session_key, token, time, callback) {
    PostAPI("gettokenblock", { user: user, session_key: session_key, token: token, time: time }, function (response) {
        callback(response);
    });
}




function APIRegister(user, password, parameters={}, callback) {
    PostAPI("register", { user: user, password: password, parameters:parameters }, function (response) {
        callback(response);
    });
}

function APILogin(user, password, callback) {
    PostAPI("login", { user: user, password: password }, function (response) {
        callback(response);
    });
}

function APICheckSession(user, session_key, callback) {
    PostAPI("checksession", { user: user, session_key: session_key }, function (response) {
        callback(response);
    });
}

function APIChangePassword(user, session_key, old_password, new_password, callback) {
    PostAPI("changepassword", { user: user, session_key: session_key, old_password: old_password, new_password : new_password }, function (response) {
        callback(response);
    });
}


function APISetUserData(user, session_key, userdata, callback) {
    PostAPI("setuserdata", { user: user, session_key: session_key, userdata: userdata }, function (response) {
        callback(response);
    });
}

function APIGetDeposits(user, session_key, token, callback) {
    PostAPI("getdeposits", { user: user, session_key: session_key, token : token }, function (response) {
        callback(response);
    });
}


function APIGetCashflow(user, session_key, token, callback) {
    PostAPI("cashflow", { user: user, session_key: session_key, token: token }, function (response) {
        callback(response);
    });
}

function APIGetValueflow(user, session_key, token, callback) {
    PostAPI("valueflow", { user: user, session_key: session_key, token: token }, function (response) {
        callback(response);
    });
}

function APIGetWallets(user, session_key, callback) {
    PostAPI("wallets", { user: user, session_key: session_key }, function (response) {
        callback(response);
    });
}

function APIGetWallet(user, session_key, currency, wallet_type, callback) {
    PostAPI("getwallet", { user: user, session_key: session_key, currency: currency, wallet_type: wallet_type }, function (response) {
        callback(response);
    });
}

function APIGetDirectbuyWallet(user, session_key, token, currency, wallet_type, callback) {
    PostAPI("getdirectbuywallet", { user: user, session_key: session_key, token: token, currency : currency, wallet_type: wallet_type }, function (response) {
        callback(response);
    });
}

function APIAddWallet(user, session_key, addr, pubkey, privkey, currency, wallet_type, description, callback) {
    PostAPI("addwallet", { user: user, session_key: session_key, addr: addr, pubkey: pubkey, privkey: privkey, currency: currency, wallet_type: wallet_type, description: description }, function (response) {
        callback(response);
    });
}


function APIGetTransactions(user, session_key, callback) {
    PostAPI("transactions", { user: user, session_key: session_key }, function (response) {
        callback(response);
    });
}

function APIGetTokenArray(user, session_key, callback) {
    PostAPI("tokenarray", { user: user, session_key: session_key }, function (response) {
        callback(response);
    });
}

function APIGetTokenInfo(user, session_key, token, callback) {
    PostAPI("tokeninfo", { user: user, session_key: session_key, token: token }, function (response) {
        callback(response);
    });
}

function APIGetUserTokenArray(user, session_key, callback) {
    PostAPI("usertokenarray", { user: user, session_key: session_key }, function (response) {
        callback(response);
    });
}

function APIGetTokenAccount(user, session_key, account, callback) {
    PostAPI("tokenaccount", { user: user, session_key: session_key, account: account }, function (response) {
        callback(response);
    });
}

function APIAddTokenAccount(user, session_key, token, account, callback) {
    PostAPI("tokenaddaccount", { user: user, session_key: session_key, token: token, account: account }, function (response) {
        callback(response);
    });
}

function APISaveTokenAccount(user, session_key, account, callback) {
    PostAPI("tokensaveaccount", { user: user, session_key: session_key, account: account }, function (response) {
        callback(response);
    });
}

function APIGetTokenAccountWallets(user, session_key, token, account, callback) {
    PostAPI("tokenaccountwallets", { user: user, session_key: session_key, token: token, account: account }, function (response) {
        callback(response);
    });
}

function APIAddTokenAccountWallet(user, session_key, account, wallet, callback) {
    PostAPI("tokenaddaccountwallet", { user: user, session_key: session_key, account: account, wallet: wallet }, function (response) {
        callback(response);
    });
}

function APISaveTokenAccountWallet(user, session_key, wallet, callback) {
    PostAPI("tokensaveaccountwallet", { user: user, session_key: session_key, wallet: wallet }, function (response) {
        callback(response);
    });
}


function APIGetTokenWallet(user, session_key, wallet, callback) {
    PostAPI("tokenwallet", { user: user, session_key: session_key, wallet: wallet }, function (response) {
        callback(response);
    });
}



function APIGetToken(user, session_key, token, callback) {
    PostAPI("token", { user: user, session_key: session_key, token: token }, function (response) {
        callback(response);
    });
}

function APISaveToken(user, session_key, token, parameters, callback) {
    PostAPI("savetoken", { user: user, session_key: session_key, token: token, parameters: parameters }, function (response) {
        callback(response);
    });
}

function APIAddToken(user, session_key, token, parameters, callback) {
    PostAPI("addtoken", { user: user, session_key: session_key, token: token, parameters: parameters }, function (response) {
        callback(response);
    });
}

function APIDeleteToken(user, session_key, token, callback) {
    PostAPI("deletetoken", { user: user, session_key: session_key, token: token }, function (response) {
        callback(response);
    });
}

function APIDeleteAccount(user, session_key, account, callback) {
    PostAPI("deleteaccount", { user: user, session_key: session_key, account: account }, function (response) {
        callback(response);
    });
}


function APIDeleteWallet(user, session_key, wallet, callback) {
    PostAPI("deletewallet", { user: user, session_key: session_key, wallet: wallet }, function (response) {
        callback(response);
    });
}


function APIGetDatafeeds(user, session_key, callback) {
    PostAPI("datafeeds", { user: user, session_key: session_key }, function (response) {
        callback(response);
    });
}

function APIGetDatafeedBalance(user, session_key, wallet_id, callback) {
    PostAPI("datafeedbalance", { user: user, session_key: session_key, wallet_id: wallet_id }, function (response) {
        callback(response);
    });
}

function APIGetDatafeedBalances(user, session_key, account_id, callback) {
    PostAPI("datafeedbalances", { user: user, session_key: session_key, account_id: account_id }, function (response) {
        callback(response);
    });
}

function APIGetKycStatus(user, session_key, callback) {
    PostAPI("kyc_status", { user: user, session_key: session_key }, function (response) {
        callback(response);
    });
}

function APIUploadKycFile(user, session_key, type, content, callback) {
    PostAPI("kyc_upload_file", { user: user, session_key: session_key, type: type, content : content }, function (response) {
        callback(response);
    });
}

function APISetKyc(user, session_key, kyc, callback) {
    PostAPI("kyc_set", { user: user, session_key: session_key, kyc: kyc }, function (response) {
        callback(response);
    });
}

function APISaveReferralToken(user, session_key, token, referral_config, callback) {
    PostAPI("savereferraltoken", { user: user, session_key: session_key, token: token, referral_config: referral_config}, function (response) {
        callback(response);
    });
}

function APIGetCommonSettings(user, session_key, callback) {
    PostAPI("getcommonsetting", { user: user, session_key: session_key}, function (response) {
        callback(response);
    })
}

function APIGetPublicSettings(callback) {
    PostAPI("getpublicsetting", {}, function (response) {
        callback(response);
    })
}

function APISaveSettings(user, session_key, settings, callback) {
    PostAPI("savesetting", { user: user, session_key: session_key, settings: settings}, function (response) {
        callback(response);
    })
}

function APISaveBountyToken(user, session_key, token, bounty_config, callback) {
    PostAPI("savebountytoken", {user: user, session_key: session_key, token: token, bounty_config: bounty_config}, function (response) {
        callback(response);
    })
}

function APISaveBountyLink(user, session_key, bounty_link, callback) {
    PostAPI("savebountylink", {user: user, session_key: session_key, bounty_link: bounty_link}, function (response) {
        callback(response);
    })
}

function APIGetBountyLinkList(user, session_key, token, callback) {
    PostAPI("getbountylinklist", {user: user, session_key: session_key, token: token}, function (response) {
        callback(response);
    })
}

function APIGetBountyLinkFullList(user, session_key, token, callback) {
    PostAPI("getbountylinkfulllist", {user: user, session_key: session_key, token: token}, function (response) {
        callback(response);
    })
}

function APISaveBountyAction(user, session_key, token, action_data, callback) {
    PostAPI("savebountyaction", {user: user, session_key: session_key, token: token, action_data: action_data}, function (response) {
        callback(response);
    })
}