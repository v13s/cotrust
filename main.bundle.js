webpackJsonp([1,4],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pojo_constanst__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewCotrustService; });
/**
 *
Copyright 2018 HCL Technologies

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 *
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewCotrustService = (function () {
    function NewCotrustService(router, http, localStorageService) {
        this.router = router;
        this.http = http;
        this.localStorageService = localStorageService;
    }
    /**
     *
     *  Sign Up Service
     *
     * @param userData
     */
    NewCotrustService.prototype.signUp = function (userData) {
        var url = __WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].SIGNUP_URL;
        return this.sendPOSTRequest(url, userData);
    };
    NewCotrustService.prototype.retrieveAllUnapprovedUser = function () {
        var url = __WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].ALL_UNAPPROVED_USERS;
        return this.sendGETRequest(url);
    };
    NewCotrustService.prototype.approveUser = function (postData) {
        var url = __WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].APPROVE_USERS;
        return this.sendPOSTRequest(url, postData);
    };
    NewCotrustService.prototype.confirmMailId = function (confirmMailToken) {
        var url = __WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].CONFIRMMAILID_URL;
        return this.sendPOSTRequest(url, { mailtoken: confirmMailToken });
    };
    NewCotrustService.prototype.loginUserName = function () {
        var userName = "";
        userName = JSON.stringify(this.localStorageService.get(__WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].LOGIN_USER_NAME)).replace(/"/g, "");
        return userName;
    };
    NewCotrustService.prototype.loginUserEmail = function () {
        var userName = "";
        userName = JSON.stringify(this.localStorageService.get(__WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].LOGIN_USER_EMAIL)); //.replace(/"/g,"");
        return userName;
    };
    /**
     *
     *  Login Service
     *
     * @param loginData
     */
    NewCotrustService.prototype.login = function (loginData) {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].LOGIN_URL;
        return new Promise(function (resolve, reject) {
            _this.sendPOSTRequest(url, loginData)
                .then(function (response) {
                if (response.errorCode == 0) {
                    _this.localStorageService.set(__WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].TOKEN, response.token);
                    _this.localStorageService.set(__WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].LOGIN_USER_NAME, response.name);
                    _this.localStorageService.set(__WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].LOGIN_USER_EMAIL, loginData.email);
                }
                return resolve(response);
            }).catch(function (err) {
                return reject(err);
            });
        });
    };
    NewCotrustService.prototype.logout = function () {
        this.localStorageService.remove(__WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].TOKEN, "");
        this.localStorageService.remove(__WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].LOGIN_USER_EMAIL, "");
        this.localStorageService.remove(__WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].LOGIN_USER_NAME, "");
        this.sendGETRequest(__WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].LOGOUT_URL);
        this.router.navigate(['/login']);
    };
    /**
     * #############################################################
     *
     *               FORGOT PASSWORD
     *
     * #############################################################
     *
     */
    NewCotrustService.prototype.sendOTPToMailID = function (postdata) {
        var url = __WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].SENT_OTP_TO_MAILID;
        return this.sendPOSTRequest(url, postdata);
    };
    NewCotrustService.prototype.verifyOTP = function (postdata) {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].VERIFY_OTP;
        return new Promise(function (resolve, reject) {
            _this.sendPOSTRequest(url, postdata)
                .then(function (response) {
                if (response.errorCode == 0) {
                    _this.localStorageService.set(__WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].TOKEN, response.token);
                    _this.localStorageService.set(__WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].LOGIN_USER_NAME, response.name);
                }
                return resolve(response);
            }).catch(function (err) {
                return reject(err);
            });
        });
    };
    /**
     * #######################################
     *          Private key details
     * #######################################
     */
    NewCotrustService.prototype.retrievePrivateKeyDetailsForUser = function (userEmail) {
        var url = __WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].RETRIEVE_PRIVATKEY_DATA_FOR_USER + '/' + userEmail;
        return this.sendGETRequest(url);
    };
    NewCotrustService.prototype.uploadPrivateKey = function (postData) {
        var url = __WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].UPLOAD_PRIVATKEY;
        return this.sendPOSTRequest(url, postData);
    };
    NewCotrustService.prototype.checkPrivateKeyPresent = function (folderName) {
        var url = __WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].CHECK_FILE_IS_PRESENT + '/' + folderName;
        return this.sendGETRequest(url);
    };
    /**
     * #######################################
     *          Network Dashboard
     * #######################################
     */
    NewCotrustService.prototype.retrieveAllnetworkForUser = function () {
        var url = __WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].RETRIEVE_NETWORK_DATA_FOR_USER;
        return this.sendGETRequest(url);
    };
    /**
     * ####################################
     *
     *      Organization Dashboard
     *
     * ####################################
     */
    NewCotrustService.prototype.retrieveNetworkBasicDetails = function (networkid) {
        var url = __WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].RETRIEVE_NETWORK_BASIC_DETAILS + networkid;
        return this.sendGETRequest(url);
    };
    NewCotrustService.prototype.retrieveNetworkDetails = function (networkid) {
        var url = __WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].RETRIEVE_NETWORK_DETAILS + networkid;
        return this.sendGETRequest(url);
    };
    NewCotrustService.prototype.retrieveOrgDashChannelDetails = function (networkid, orgid, peername) {
        var url = __WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].RETRIEVE_ORG_CHANNNEL_NAMES + networkid + "/" + orgid + "/" + peername;
        return this.sendGETRequest(url);
    };
    NewCotrustService.prototype.retrieveOrgDashChaincodeDetails = function (networkid, orgid, peername) {
        var url = __WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].RETRIEVE_ORG_CHAINCODE_DETAILS + networkid + "/" + orgid + "/" + peername;
        return this.sendGETRequest(url);
    };
    NewCotrustService.prototype.retrieveOrgInstantiatedDashChaincodeDetails = function (networkid, orgid, peername, channelName) {
        var url = __WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].RETRIEVE_ORG_INSTANTIATED_CHAINCODE_DETAILS + networkid + "/" + orgid + "/" + peername + "/" + channelName;
        return this.sendGETRequest(url);
    };
    NewCotrustService.prototype.retrieveAllCertificates = function (networkid, orgid) {
        var url = __WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].RETRIEVE_ALL_CERTIFICATES + networkid + "/" + orgid;
        return this.sendGETRequest(url);
    };
    NewCotrustService.prototype.deleteNetwork = function (networkid) {
        var url = __WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].DELETE_NETWORK + networkid;
        return this.sendDeleteRequest(url);
    };
    NewCotrustService.prototype.resetPassword = function (newpassword) {
        var url = __WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].RESET_PASSWORD;
        return this.sendPOSTRequest(url, {
            newpassword: newpassword
        });
    };
    /**
     * #############################################################
     *
     *                      Create Channel
     *
     * #############################################################
     *
     */
    NewCotrustService.prototype.createChannel = function (networkid, orgid, peers, orgIds, channelName) {
        var url = __WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].CREATE_CHANNEL;
        return this.sendPOSTRequest(url, {
            networkId: networkid,
            orgId: orgid,
            orgIdArray: orgIds,
            channelName: channelName,
            peers: peers
        });
    };
    /**
     * #############################################################
     *
     *                      Join Channel
     *
     * #############################################################
     *
     */
    NewCotrustService.prototype.joinChannel = function (networkid, orgid, peers, channelName) {
        var url = __WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].JOIN_CHANNEL;
        return this.sendPOSTRequest(url, {
            networkId: networkid,
            orgId: orgid,
            channelName: channelName,
            peers: peers
        });
    };
    /**
     * #############################################################
     *
     *               Install and Instantiate Chaincode
     *
     * #############################################################
     *
     */
    NewCotrustService.prototype.installAndInstantiateChaincode = function (postData) {
        var url = __WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].INSTALL_AND_INSTANTIATE_CHAINCODE;
        return this.sendPOSTRequest(url, postData);
    };
    NewCotrustService.prototype.installAndInstantiateChaincodeDynamicContract = function (postData) {
        var url = __WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].INSTALL_AND_INSTANTIATE_CHAINCODE_DYNAMIC_CONTRACT;
        return this.sendPOSTRequest(url, postData);
    };
    /**
     * #############################################################
     *
     *               Query Chaincode
     *
     * #############################################################
     *
     */
    NewCotrustService.prototype.queryChaincode = function (postData) {
        var url = __WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].QUERY_CHAINCODE;
        return this.sendPOSTRequest(url, postData);
    };
    /**
     * #############################################################
     *
     *               Invoke Chaincode
     *
     * #############################################################
     *
     */
    NewCotrustService.prototype.invokeChaincode = function (postData) {
        var url = __WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].INVOKE_CHAINCODE;
        return this.sendPOSTRequest(url, postData);
    };
    /**
     * #############################################################
     *
     *               Block Height
     *
     * #############################################################
     *
     */
    NewCotrustService.prototype.blockHeight = function (networkid, orgid, peer, channelname) {
        var url = __WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].BLOCK_HEIGHT_LIST_URL + networkid + "/" + orgid + "/" + peer + "/" + channelname;
        return this.sendGETRequest(url);
    };
    NewCotrustService.prototype.blockDetails = function (networkid, orgid, peer, channelname, blocknumber) {
        var url = __WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].BLOCK_BY_NUMBER_URL + networkid + "/" + orgid + "/" + peer + "/" + channelname + "/" + blocknumber;
        return this.sendGETRequest(url);
    };
    /**
     * #############################################################
     *
     *                      Create User
     *
     * #############################################################
     *
     */
    NewCotrustService.prototype.createUserSecret = function (postData) {
        var url = __WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].CREATE_USER_SECRET;
        return this.sendPOSTRequest(url, postData);
    };
    NewCotrustService.prototype.createUserCertificates = function (postData) {
        var url = __WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].CREATE_USER_CERTIFICATE;
        return this.sendPOSTRequest(url, postData);
    };
    /**
     * #############################################################
     *
     *                      Create Peer
     *
     * #############################################################
     *
     */
    NewCotrustService.prototype.createPeer = function (networkid, orgid) {
        var url = __WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].CREATE_PEER + networkid + "/" + orgid;
        return this.sendPOSTRequest(url, {});
    };
    /**
     * #############################################################
     *
     *                      Create Type
     *
     * #############################################################
     *
     */
    NewCotrustService.prototype.createType = function (typeJSONData) {
        var url = __WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].CREATE_TYPE;
        return this.sendPOSTRequest(url, typeJSONData);
    };
    NewCotrustService.prototype.retrieveAllType = function (networkid) {
        var url = __WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].ALL_TYPE + networkid;
        return this.sendGETRequest(url);
    };
    NewCotrustService.prototype.retrieveTypeByID = function (networkid, typeid) {
        var url = __WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].ALL_TYPE + networkid + "/" + typeid;
        return this.sendGETRequest(url);
    };
    NewCotrustService.prototype.createSmartContract = function (networkid, smartcontractdata) {
        var url = __WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].CREATE_SMARTCONTRACT + networkid;
        return this.sendPOSTRequest(url, smartcontractdata);
    };
    NewCotrustService.prototype.retrieveAllSmartContract = function (networkid) {
        var url = __WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].CREATE_SMARTCONTRACT + networkid;
        return this.sendGETRequest(url);
    };
    NewCotrustService.prototype.retrieveSmartContract = function (networkid, smartcontractid) {
        var url = __WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].CREATE_SMARTCONTRACT + networkid + "/" + smartcontractid;
        return this.sendGETRequest(url);
    };
    /**
     * #############################################################
     *
     *                      UTILITIES
     *
     * #############################################################
     *
     */
    NewCotrustService.prototype.sendPOSTRequest = function (url, postData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'token': _this.localStorageService.get(__WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].TOKEN) });
            console.log("sendPOSTRequest :: ", url, headers, postData);
            return _this.http.post(url, JSON.stringify(postData), { headers: headers })
                .toPromise()
                .then(function (data) {
                console.log("sendPOSTRequest :: ", url, headers, postData, " :: data :: ", data);
                var response = data.json();
                _this.invalidTokenCheck(response);
                return resolve(response);
            })
                .catch(function (err) {
                console.log("sendPOSTRequest :: ", url, headers, postData, " :: err :: ", err);
                return reject(err);
            });
        });
    };
    NewCotrustService.prototype.sendDeleteRequest = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'token': _this.localStorageService.get(__WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].TOKEN) });
            console.log("sendDeleteRequest :: ", url, headers);
            return _this.http.delete(url, { headers: headers })
                .toPromise()
                .then(function (data) {
                console.log("sendPOSTRequest :: ", url, headers, " :: data :: ", data);
                var response = data.json();
                _this.invalidTokenCheck(response);
                return resolve(response);
            })
                .catch(function (err) {
                console.log("sendPOSTRequest :: ", url, headers, " :: err :: ", err);
                return reject(err);
            });
        });
    };
    NewCotrustService.prototype.sendGETRequest = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'token': _this.localStorageService.get(__WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].TOKEN) });
            console.log("sendGETRequest :: ", url, headers);
            return _this.http.get(url, { headers: headers })
                .toPromise()
                .then(function (data) {
                console.log("sendGETRequest :: ", url, headers, " :: data :: ", data);
                var response = data.json();
                _this.invalidTokenCheck(response);
                return resolve(data.json());
            })
                .catch(function (err) {
                console.log("sendGETRequest :: ", url, headers, " :: err :: ", err);
                return reject(err);
            });
        });
    };
    NewCotrustService.prototype.invalidTokenCheck = function (response) {
        if (response.errorCode == 609) {
            console.log("===== Redirecting to Login ========");
            if (this.localStorageService.get(__WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].TOKEN) && this.localStorageService.get(__WEBPACK_IMPORTED_MODULE_4__pojo_constanst__["a" /* Constants */].TOKEN) != "") {
                this.logout();
            }
            return false;
        }
        return true;
    };
    return NewCotrustService;
}());
NewCotrustService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__["LocalStorageService"]) === "function" && _c || Object])
], NewCotrustService);

var _a, _b, _c;
//# sourceMappingURL=newconsole.service.js.map

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__console_config__ = __webpack_require__(114);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
/**
 *
Copyright 2018 HCL Technologies

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 *
 *
 */

var Constants = (function () {
    function Constants() {
    }
    return Constants;
}());

Constants.ORGANIZATION_LIST_URL = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'orglist';
Constants.PEER_LIST_URL = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'peerlist/';
Constants.CHANNEL_LIST_URL = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'channellist/';
Constants.INSTALL_CHAINCODE = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'installchaincode';
Constants.LIST_INSTALLED_CHAINCODE = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'installedchaincode';
Constants.LIST_INSTANTIATED_CHAINCODE = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'instantiatedchaincode';
Constants.CREATE_USER = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'user';
Constants.NETWORK_INSTALL = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'installnetwork';
Constants.NETWORK_UP = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'bringupnetwork';
Constants.NETWORK_DOWN = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'bringdownnetwork';
/****
 *
 * New Service URLS
 *
 *
 */
Constants.TOKEN = "token";
Constants.LOGIN_USER_EMAIL = "LOGIN_USER_EMAIL";
Constants.LOGIN_USER_NAME = "LOGIN_USER_NAME";
Constants.SIGNUP_URL = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'signup';
Constants.CONFIRMMAILID_URL = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'confirmmailid';
Constants.LOGIN_URL = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'login';
Constants.LOGOUT_URL = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'logout';
Constants.RESET_PASSWORD = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'resetpassword';
Constants.ALL_UNAPPROVED_USERS = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'allunapprovedusers';
Constants.APPROVE_USERS = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'approveusers';
Constants.SENT_OTP_TO_MAILID = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'sendotptomailid';
Constants.VERIFY_OTP = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'verifyotp';
Constants.NETWORK_INSTALL_CREDENTIAL_CHECK_URL = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'credentialcheck';
Constants.NETWORK_INSTALL_PREREQUISTIES_URL = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'installprerequesties';
Constants.NETWORK_INSTALL_PREREQUISTIES1_URL = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'installprerequesties1';
Constants.NETWORK_INSTALL_PREREQUISTIES2_URL = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'installprerequesties2';
Constants.NETWORK_INSTALL_PREREQUISTIES3_URL = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'installprerequesties3';
Constants.NETWORK_INSTALL_PREREQUISTIES4_URL = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'installprerequesties4';
Constants.NETWORK_INSTALL_PREREQUISTIES5_URL = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'installprerequesties5';
Constants.NETWORK_INSTALL_PREREQUISTIES6_URL = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'installprerequesties6';
Constants.NETWORK_INSTALL_PREREQUISTIES7_URL = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'installprerequesties7';
Constants.NETWORK_INSTALL_PREREQUISTIES8_URL = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'installenableftp';
Constants.NETWORK_INSTALL_HYPERLEDGER_URL = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'installhyperledgerfabric';
Constants.NETWORK_INSTALL_STARTNETWORK_URL = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'bringupnetwork';
Constants.NETWORK_INSTALL_CREATENETWORKCONFIG_URL = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'createnetworkconfig';
Constants.RETRIEVE_NETWORK_DATA_FOR_USER = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'allnetwork';
Constants.RETRIEVE_PRIVATKEY_DATA_FOR_USER = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'privatekeydetails';
Constants.CHECK_FILE_IS_PRESENT = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'checkfileexist';
Constants.UPLOAD_PRIVATKEY = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'uploadprivatekey';
Constants.RETRIEVE_NETWORK_BASIC_DETAILS = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'networkbasicdetails/';
Constants.RETRIEVE_NETWORK_DETAILS = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'networkfulldetails/';
Constants.RETRIEVE_ORG_CHANNNEL_NAMES = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'channellist/';
Constants.RETRIEVE_ORG_CHAINCODE_DETAILS = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'installedchaincode/';
Constants.RETRIEVE_ORG_INSTANTIATED_CHAINCODE_DETAILS = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'instantiatedchaincode/';
Constants.RETRIEVE_ALL_CERTIFICATES = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'allcerts/';
Constants.RETRIEVE_LOGS = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'readlogs/';
Constants.DELETE_NETWORK = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'deletenetworkconfig/';
Constants.CREATE_CHANNEL = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'createchannel';
Constants.JOIN_CHANNEL = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'joinchannel';
Constants.INSTALL_AND_INSTANTIATE_CHAINCODE = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'installandinstantiatechaincode';
Constants.INSTALL_AND_INSTANTIATE_CHAINCODE_DYNAMIC_CONTRACT = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'installandinstantiatechaincodedynamicsmartcontract';
Constants.QUERY_CHAINCODE = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'query';
Constants.INVOKE_CHAINCODE = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'invoke';
Constants.BLOCK_HEIGHT_LIST_URL = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'blockheight/';
Constants.BLOCK_BY_NUMBER_URL = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'blockbynumber/';
Constants.CREATE_USER_CERTIFICATE = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'user';
Constants.CREATE_USER_SECRET = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'usersecret';
Constants.CREATE_PEER = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'createpeer/';
Constants.CREATE_TYPE = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'type/';
Constants.ALL_TYPE = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'type/';
Constants.CREATE_SMARTCONTRACT = __WEBPACK_IMPORTED_MODULE_0__console_config__["a" /* ConsoleConfig */].HOST_URL + 'smartcontract/';
//# sourceMappingURL=constanst.js.map

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pojo_constanst__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CotrustAuthService; });
/**
 *
Copyright 2018 HCL Technologies

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 *
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CotrustAuthService = (function () {
    function CotrustAuthService(router, localStorageService) {
        this.router = router;
        this.localStorageService = localStorageService;
    }
    CotrustAuthService.prototype.canActivate = function () {
        console.log("CotrustAuthService :: canActivate :: token:: ", this.localStorageService.get(__WEBPACK_IMPORTED_MODULE_3__pojo_constanst__["a" /* Constants */].TOKEN));
        if (this.localStorageService.get(__WEBPACK_IMPORTED_MODULE_3__pojo_constanst__["a" /* Constants */].TOKEN)
            && this.localStorageService.get(__WEBPACK_IMPORTED_MODULE_3__pojo_constanst__["a" /* Constants */].TOKEN) != null
            && this.localStorageService.get(__WEBPACK_IMPORTED_MODULE_3__pojo_constanst__["a" /* Constants */].TOKEN) != "") {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return CotrustAuthService;
}());
CotrustAuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__["LocalStorageService"]) === "function" && _b || Object])
], CotrustAuthService);

var _a, _b;
//# sourceMappingURL=CotrustAuth.service.js.map

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIPage; });
/**
 *
Copyright 2018 HCL Technologies

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 *
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var APIPage = (function () {
    function APIPage(router, consoleService, route) {
        this.router = router;
        this.consoleService = consoleService;
        this.route = route;
        this.functionName = "";
        this.args = "";
        this.result = " -- ";
        this.peerDetailsArray = [];
        this.orgDetailsArray = [];
        this.channelsArray = [];
        this.chaincodeArray = [];
        this.selectedOrg = "0";
        this.selectedPeer = "0";
        this.selectedChannel = "0";
        this.selectedChaincode = "0";
        this.selectedQueryType = "query";
        this.showLoading = false;
        this.showError = false;
        this.errorMessage = "";
    }
    APIPage.prototype.onChangeOrganization = function () {
        console.log("onChangeOrganization :: selectedOrg :: ", this.selectedOrg, " :: peerDetailsArray :: ", this.peerDetailsArray);
        this.selectedPeer = "0";
        this.peerDetailsArray = [];
        this.selectedChannel = "0";
        this.channelsArray = [];
        this.selectedChaincode = "0";
        this.chaincodeArray = [];
        for (var _i = 0, _a = this.orgDetailsArray; _i < _a.length; _i++) {
            var org = _a[_i];
            if (org.orgIdentifier == this.selectedOrg) {
                this.peerDetailsArray = org.peers;
            }
        }
        console.log("onChangeOrganization :: selectedOrg :: ", this.selectedOrg, " :: peerDetailsArray :: ", this.peerDetailsArray);
    };
    APIPage.prototype.onChangePeer = function () {
        this.channelsArray = [];
        this.selectedChannel = "0";
        this.channelsArray = [];
        this.selectedChaincode = "0";
        this.chaincodeArray = [];
        if (this.selectedPeer == "0") {
        }
        else {
            this.retrieveChannels(this.selectedOrg, this.selectedPeer, this.networkid);
        }
    };
    APIPage.prototype.onChangeChannel = function () {
        this.selectedChaincode = "0";
        this.chaincodeArray = [];
        if (this.selectedChannel == "0") {
        }
        else {
            this.selectedChaincode = "0";
            this.retrieveInstantiatedChaincode(this.networkid, this.selectedOrg, this.selectedPeer, this.selectedChannel);
        }
    };
    APIPage.prototype.retrieveNetworkBasicDetails = function (networkid) {
        var _this = this;
        this.showLoading = true;
        this.showError = false;
        this.selectedOrg = "0";
        this.consoleService.retrieveNetworkBasicDetails(networkid)
            .then(function (response) {
            _this.showLoading = false;
            _this.orgDetailsArray = [];
            _this.selectedOrg = "0";
            for (var _i = 0, _a = response.networkbasicdetail; _i < _a.length; _i++) {
                var networdetails = _a[_i];
                var peers = [];
                for (var _b = 0, _c = networdetails.peers; _b < _c.length; _b++) {
                    var tmpPeer = _c[_b];
                    peers.push(tmpPeer);
                }
                _this.orgDetailsArray.push({
                    orgName: networdetails.orgName,
                    orgIdentifier: networdetails.orgIdentifier,
                    peers: peers
                });
            }
            console.log("APIPage :: selectedOrg :: ", _this.selectedOrg, " :: orgDetailsArray :: ", _this.orgDetailsArray);
        })
            .catch(function (err) {
            _this.showLoading = false;
            console.log("APIPage :: retrieveNetworkBasicDetails() :: err ::", err);
            _this.showError = true;
            _this.errorMessage = "Network Error";
        });
    };
    APIPage.prototype.retrieveChannels = function (selectedOrg, peerName, networkid) {
        var _this = this;
        this.showError = false;
        this.showLoading = true;
        this.channelsArray = [];
        this.consoleService.retrieveOrgDashChannelDetails(networkid, selectedOrg, peerName)
            .then(function (response) {
            console.log("retrieveChannelCount() :: response ::", response);
            _this.showLoading = false;
            if (_this.networkid == networkid
                && _this.selectedOrg == selectedOrg
                && _this.selectedPeer == peerName) {
                _this.channelsArray = [];
                for (var _i = 0, _a = response.channelNames; _i < _a.length; _i++) {
                    var channel = _a[_i];
                    _this.channelsArray.push(channel.channelId);
                }
            }
        })
            .catch(function (err) {
            console.log("retrieveChannelCount() :: err ::", err);
            _this.showLoading = false;
            _this.showError = true;
            _this.errorMessage = "Network Error";
        });
    };
    APIPage.prototype.retrieveInstantiatedChaincode = function (networkid, selectedOrg, peerName, channelName) {
        var _this = this;
        this.showLoading = true;
        this.showError = false;
        this.consoleService.retrieveOrgInstantiatedDashChaincodeDetails(networkid, selectedOrg, peerName, channelName)
            .then(function (response) {
            _this.showLoading = false;
            if (_this.networkid == networkid && _this.selectedOrg == selectedOrg
                && _this.selectedPeer == peerName && _this.selectedChannel == channelName) {
                _this.chaincodeArray = [];
                if (response.list && response.list.chaincodes) {
                    for (var _i = 0, _a = response.list.chaincodes; _i < _a.length; _i++) {
                        var chaincode = _a[_i];
                        _this.chaincodeArray.push({
                            chaincodeName: chaincode.name,
                            chaincodeVersion: chaincode.version,
                        });
                    }
                }
            }
        })
            .catch(function (err) {
            console.log("retrieveInstantiatedChaincode() :: err ::", err);
            _this.showLoading = false;
            _this.showError = true;
            _this.errorMessage = "Network Error";
        });
    };
    APIPage.prototype.convertTextToArray = function (arrayString) {
        try {
            var jsonString = '{ "value" : [' + arrayString + ']}';
            console.log("convertTextToArray :: jsonString :: ", jsonString);
            return JSON.parse(jsonString).value;
        }
        catch (err) {
            this.showLoading = false;
            this.showError = true;
            this.errorMessage = "Invalid Arguments";
        }
    };
    APIPage.prototype.validateInputs = function () {
        this.showError = false;
        this.errorMessage = "";
        if (this.selectedOrg == "0") {
            this.showError = true;
            this.errorMessage = "Please select Organization";
            return false;
        }
        if (this.selectedPeer == "0") {
            this.showError = true;
            this.errorMessage = "Please select Peer";
            return false;
        }
        if (this.selectedChannel == "0") {
            this.showError = true;
            this.errorMessage = "Please select Channel";
            return false;
        }
        if (this.selectedChaincode == "0") {
            this.showError = true;
            this.errorMessage = "Please select Chaincode";
            return false;
        }
        if (this.functionName.trim() == "") {
            this.showError = true;
            this.errorMessage = "Please enter Funtion Name";
            return false;
        }
        if (this.args.trim() == "") {
            this.showError = true;
            this.errorMessage = "Please enter Arguments";
            return false;
        }
        return true;
    };
    APIPage.prototype.onClickRequest = function () {
        var _this = this;
        this.showLoading = true;
        this.showError = false;
        this.result = "";
        if (this.validateInputs()) {
            if (this.selectedQueryType == "query") {
                this.consoleService.queryChaincode({
                    networkId: this.networkid,
                    orgId: this.selectedOrg,
                    peer: this.selectedPeer,
                    channelName: this.selectedChannel,
                    chaincodeName: this.selectedChaincode,
                    fcn: this.functionName,
                    args: this.convertTextToArray(this.args)
                }).then(function (response) {
                    _this.showLoading = false;
                    if (response.errorCode == 0) {
                        _this.result = response.msg;
                    }
                    else {
                        _this.result = response.msg;
                        _this.showError = true;
                        _this.errorMessage = response.msg;
                    }
                })
                    .catch(function (err) {
                    _this.showLoading = false;
                    _this.showError = true;
                    _this.errorMessage = "Invalid Arguments";
                });
            }
            else {
                this.consoleService.invokeChaincode({
                    networkId: this.networkid,
                    orgId: this.selectedOrg,
                    peer: [this.selectedPeer],
                    channelName: this.selectedChannel,
                    chaincodeName: this.selectedChaincode,
                    fcn: this.functionName,
                    args: this.convertTextToArray(this.args)
                }).then(function (response) {
                    _this.showLoading = false;
                    if (response.errorCode == 0) {
                        _this.result = response.msg;
                    }
                    else {
                        _this.result = response.msg;
                        _this.showError = true;
                        _this.errorMessage = response.msg;
                    }
                })
                    .catch(function (err) {
                    _this.showLoading = false;
                    _this.showError = true;
                    _this.errorMessage = "Invalid Arguments";
                });
            }
        }
        else {
            this.showLoading = false;
        }
    };
    APIPage.prototype.ngOnInit = function () {
        this.networkid = this.route.snapshot.paramMap.get('networkid');
        console.log("ngOnInit :: APIPage :: networkid :: ", this.networkid);
        this.retrieveNetworkBasicDetails(this.networkid);
    };
    return APIPage;
}());
APIPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'apipage',
        template: __webpack_require__(190),
        styles: [__webpack_require__(166)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__["a" /* NewCotrustService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__["a" /* NewCotrustService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], APIPage);

var _a, _b, _c;
//# sourceMappingURL=apipage.component.js.map

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApproveUsers; });
/**
 *
Copyright 2018 HCL Technologies

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 *
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApproveUsers = (function () {
    function ApproveUsers(router, consoleService, route) {
        this.router = router;
        this.consoleService = consoleService;
        this.route = route;
        this.allUnapprovedUser = [];
        this.showNoData = false;
        this.showLoading = false;
        this.showInfo = false;
        this.showErr = false;
        this.errorMessage = "";
        console.log("ApproveUsers :: ");
        this.retrieveAllUnapprovedUsers();
    }
    ApproveUsers.prototype.approveUser = function (email, withuser) {
        var _this = this;
        console.log("approveUser :: email :: ", email, " :: withuser :: ", withuser);
        this.showNoData = false;
        this.showLoading = true;
        this.showErr = false;
        this.showInfo = false;
        this.consoleService.approveUser({
            emailid: email,
            withemail: withuser
        })
            .then(function (response) {
            _this.showLoading = false;
            if (response && response.errorCode == 0) {
                _this.showInfo = true;
                _this.errorMessage = response.msg;
                _this.retrieveAllUnapprovedUsers();
            }
            else {
                _this.showErr = true;
                _this.errorMessage = response.msg;
            }
        }).catch(function (err) {
            _this.showLoading = false;
            _this.showErr = true;
            _this.errorMessage = "Server Error";
            console.log("approveUser :: err :: ", err);
        });
    };
    ApproveUsers.prototype.retrieveAllUnapprovedUsers = function () {
        var _this = this;
        this.showNoData = false;
        this.showLoading = true;
        this.consoleService.retrieveAllUnapprovedUser()
            .then(function (response) {
            _this.showLoading = false;
            _this.allUnapprovedUser = response.data;
            if (_this.allUnapprovedUser.length == 0) {
                _this.showNoData = true;
            }
            else {
                _this.showNoData = false;
            }
        }).catch(function (err) {
            console.log("retrieveAllUnapprovedUsers :: err :: ", err);
            _this.showLoading = false;
            _this.showInfo = false;
            _this.showErr = true;
            _this.errorMessage = "Service Error";
        });
    };
    return ApproveUsers;
}());
ApproveUsers = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'approveusers',
        template: __webpack_require__(191),
        styles: [__webpack_require__(167)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__["a" /* NewCotrustService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__["a" /* NewCotrustService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], ApproveUsers);

var _a, _b, _c;
//# sourceMappingURL=approveusers.component.js.map

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlocksView; });
/**
 *
Copyright 2018 HCL Technologies

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 *
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlocksView = (function () {
    function BlocksView(router, consoleService, route) {
        this.router = router;
        this.consoleService = consoleService;
        this.route = route;
        this.peerDetailsArray = [];
        this.orgDetailsArray = [];
        this.channelsArray = [];
        this.selectedOrg = "0";
        this.selectedPeer = "0";
        this.selectedChannel = "0";
        this.showLoading = false;
        this.showError = false;
        this.errorMessage = "";
        this.showBlockHeight = false;
        this.blockHeight = 0;
        this.blocknumber = "";
        this.blockResult = "";
    }
    BlocksView.prototype.onChangeOrganization = function () {
        console.log("onChangeOrganization :: selectedOrg :: ", this.selectedOrg, " :: peerDetailsArray :: ", this.peerDetailsArray);
        this.selectedPeer = "0";
        this.peerDetailsArray = [];
        this.selectedChannel = "0";
        this.channelsArray = [];
        for (var _i = 0, _a = this.orgDetailsArray; _i < _a.length; _i++) {
            var org = _a[_i];
            if (org.orgIdentifier == this.selectedOrg) {
                this.peerDetailsArray = org.peers;
            }
        }
        console.log("onChangeOrganization :: selectedOrg :: ", this.selectedOrg, " :: peerDetailsArray :: ", this.peerDetailsArray);
    };
    BlocksView.prototype.onChangePeer = function () {
        this.channelsArray = [];
        this.selectedChannel = "0";
        this.channelsArray = [];
        if (this.selectedPeer == "0") {
        }
        else {
            this.retrieveChannels(this.selectedOrg, this.selectedPeer, this.networkid);
        }
    };
    BlocksView.prototype.retrieveNetworkBasicDetails = function (networkid) {
        var _this = this;
        this.showLoading = true;
        this.showError = false;
        this.selectedOrg = "0";
        this.consoleService.retrieveNetworkBasicDetails(networkid)
            .then(function (response) {
            _this.showLoading = false;
            _this.orgDetailsArray = [];
            _this.selectedOrg = "0";
            for (var _i = 0, _a = response.networkbasicdetail; _i < _a.length; _i++) {
                var networdetails = _a[_i];
                var peers = [];
                for (var _b = 0, _c = networdetails.peers; _b < _c.length; _b++) {
                    var tmpPeer = _c[_b];
                    peers.push(tmpPeer);
                }
                _this.orgDetailsArray.push({
                    orgName: networdetails.orgName,
                    orgIdentifier: networdetails.orgIdentifier,
                    peers: peers
                });
            }
            console.log("APIPage :: selectedOrg :: ", _this.selectedOrg, " :: orgDetailsArray :: ", _this.orgDetailsArray);
        })
            .catch(function (err) {
            _this.showLoading = false;
            console.log("APIPage :: retrieveNetworkBasicDetails() :: err ::", err);
            _this.showError = true;
            _this.errorMessage = "Network Error";
        });
    };
    BlocksView.prototype.retrieveChannels = function (selectedOrg, peerName, networkid) {
        var _this = this;
        this.showError = false;
        this.showLoading = true;
        this.channelsArray = [];
        this.consoleService.retrieveOrgDashChannelDetails(networkid, selectedOrg, peerName)
            .then(function (response) {
            console.log("retrieveChannelCount() :: response ::", response);
            _this.showLoading = false;
            if (_this.networkid == networkid
                && _this.selectedOrg == selectedOrg
                && _this.selectedPeer == peerName) {
                _this.channelsArray = [];
                for (var _i = 0, _a = response.channelNames; _i < _a.length; _i++) {
                    var channel = _a[_i];
                    _this.channelsArray.push(channel.channelId);
                }
            }
        })
            .catch(function (err) {
            console.log("retrieveChannelCount() :: err ::", err);
            _this.showLoading = false;
            _this.showError = true;
            _this.errorMessage = "Network Error";
        });
    };
    BlocksView.prototype.validateInputs = function () {
        this.showError = false;
        this.errorMessage = "";
        if (this.selectedOrg == "0") {
            this.showError = true;
            this.errorMessage = "Please select Organization";
            return false;
        }
        if (this.selectedPeer == "0") {
            this.showError = true;
            this.errorMessage = "Please select Peer";
            return false;
        }
        if (this.selectedChannel == "0") {
            this.showError = true;
            this.errorMessage = "Please select Channel";
            return false;
        }
        return true;
    };
    BlocksView.prototype.onClickRequest = function () {
        var _this = this;
        this.showLoading = true;
        this.showError = false;
        if (this.validateInputs()) {
            this.showBlockHeight = false;
            this.consoleService.blockHeight(this.networkid, this.selectedOrg, this.selectedPeer, this.selectedChannel)
                .then(function (response) {
                _this.showLoading = false;
                if (response.errorCode == 0) {
                    _this.showBlockHeight = true;
                    _this.blockHeight = response.msg;
                }
                else {
                    _this.showBlockHeight = false;
                    _this.showError = true;
                    _this.errorMessage = response.msg;
                }
            })
                .catch(function (err) {
                _this.showLoading = false;
                _this.showError = true;
                _this.errorMessage = "Network Error";
            });
        }
        else {
            this.showLoading = false;
            this.showError = true;
            this.errorMessage = "Invalid Arguments";
        }
    };
    BlocksView.prototype.showBlock = function () {
        var _this = this;
        this.showLoading = true;
        this.showError = false;
        if (this.blocknumber.trim() == "") {
            this.showLoading = false;
            this.showError = true;
            this.errorMessage = "Invalid Block Number";
        }
        else {
            this.consoleService.blockDetails(this.networkid, this.selectedOrg, this.selectedPeer, this.selectedChannel, this.blocknumber)
                .then(function (response) {
                _this.showLoading = false;
                if (response.errorCode == 0) {
                    _this.blockResult = JSON.stringify(response.msg);
                }
                else {
                    _this.blockResult = response.msg;
                }
            }).catch(function (err) {
                _this.showLoading = false;
                _this.showError = true;
                _this.errorMessage = "Network Error";
            });
        }
    };
    BlocksView.prototype.ngOnInit = function () {
        this.networkid = this.route.snapshot.paramMap.get('networkid');
        console.log("ngOnInit :: APIPage :: networkid :: ", this.networkid);
        this.retrieveNetworkBasicDetails(this.networkid);
    };
    return BlocksView;
}());
BlocksView = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'blocksview',
        template: __webpack_require__(192),
        styles: [__webpack_require__(168)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__["a" /* NewCotrustService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__["a" /* NewCotrustService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], BlocksView);

var _a, _b, _c;
//# sourceMappingURL=blocksview.component.js.map

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelPage; });
/**
 *
Copyright 2018 HCL Technologies

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 *
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChannelPage = (function () {
    function ChannelPage(router, consoleService, route) {
        this.router = router;
        this.consoleService = consoleService;
        this.route = route;
        this.channels = [];
        this.modalChaincodeInstallPeer = [];
        this.selectedChannelInInstalledChaincode = "";
        this.newChannelName = "";
        this.selectedOrg = "";
        this.selectedOrgDesc = "-";
        this.showLoading = false;
        this.showError = false;
        this.showInfo = false;
        this.errorMessage = "";
        this.peerInstallChaincodeArray = [];
        this.peerCreateChannelArray = [];
        this.orgCreateChannelArray = [];
        this.peerJoinChannelArray = [];
        this.peerDetailsArray = [];
        this.orgDetailsArray = [];
        this.channelJoinRequestArray = [];
        this.channelJoinRequestDisplayArray = [];
        this.showChannelRequest = false;
        this.showJoinChannelLoading = false;
        this.showJoinChannelError = false;
        this.showJoinChannelInfo = false;
        this.joinChannelErrorMessage = "";
        this.showNewChannelError = false;
        this.showNewChannelInfo = false;
        this.newChannelErrorMessage = "";
        this.showNewChannelLoading = false;
        this.newChaincodeName = "";
        this.newChaincodeVersion = "";
        this.newChaincodeArguments = "";
        this.newChaincodeFileName = "";
        this.newChaincodeFileContent = "";
        this.smartcontractlist = [];
        this.smartContractID = "NA";
        this.iAndiError = false;
        this.iAndiInfo = false;
        this.iAndiErrorMsg = "";
        this.iAndiProcessing = false;
        this.selectedJoinChannelName = "";
        this.channels = [];
    }
    ChannelPage.prototype.noChannelToDisplay = function () {
        if (this.channels && this.channels.length > 0) {
            return false;
        }
        else {
            return true;
        }
    };
    ChannelPage.prototype.onChangeChannelInInstallChaincode = function () {
        console.log("onChangeChannelInInstallChaincode() :: channels :: ", this.channels);
        for (var _i = 0, _a = this.channels; _i < _a.length; _i++) {
            var channel = _a[_i];
            if (this.selectedChannelInInstalledChaincode == channel.channelName) {
                this.modalChaincodeInstallPeer = channel.peers;
            }
        }
    };
    ChannelPage.prototype.retrieveAllSmartContract = function (networkid) {
        var _this = this;
        this.smartcontractlist = [{ smName: "NA", contractID: "NA" }];
        this.consoleService.retrieveAllSmartContract(networkid)
            .then(function (response) {
            console.log("retrieveAllSmartContract() :: response ::", response);
            for (var i = 0; i < response.list.length; i++) {
                _this.smartcontractlist.push(response.list[i]);
            }
        })
            .catch(function (err) {
            _this.showLoading = false;
            console.log("retrieveAllSmartContract() :: err ::", err);
            _this.showInfo = false;
            _this.showError = true;
            _this.errorMessage = "Network Error";
        });
    };
    ChannelPage.prototype.installAndInstantiateChaincode = function () {
        var _this = this;
        this.iAndiError = false;
        this.iAndiInfo = false;
        this.iAndiErrorMsg = "";
        console.log("onChangeChannelInInstallChaincode() :: selectedChannelInInstalledChaincode :: ", this.selectedChannelInInstalledChaincode, ":: modalChaincodeInstallPeer :: ", this.modalChaincodeInstallPeer, ":: newChaincodeName :: ", this.newChaincodeName, ":: newChaincodeVersion :: ", this.newChaincodeVersion, ":: newChaincodeArguments :: ", this.newChaincodeArguments, ":: newChaincodeFileName :: ", this.newChaincodeFileName, ":: newChaincodeFileContent :: ", this.newChaincodeFileContent);
        if (this.validateInstallAndInstantiateChaincode()) {
            this.iAndiProcessing = true;
            if (this.smartContractID == "NA") {
                this.consoleService.installAndInstantiateChaincode({
                    "networkId": this.networkid,
                    "orgId": this.selectedOrg,
                    "peers": this.modalChaincodeInstallPeer,
                    "channelName": this.selectedChannelInInstalledChaincode,
                    "chaincodeName": this.newChaincodeName,
                    "chaincodeVersion": this.newChaincodeVersion,
                    "args": this.convertTextToArray(this.newChaincodeArguments),
                    "filename": this.newChaincodeFileName,
                    "filecontent": this.newChaincodeFileContent
                })
                    .then(function (response) {
                    _this.iAndiProcessing = false;
                    if (response && response.errorCode == 0) {
                        _this.iAndiError = false;
                        _this.iAndiInfo = true;
                        _this.iAndiErrorMsg = response.msg;
                        _this.newChaincodeName = "";
                        _this.newChaincodeVersion = "";
                        _this.newChaincodeArguments = "";
                        _this.newChaincodeFileName = "";
                        _this.newChaincodeFileContent = "";
                        _this.onChangeOrganization();
                    }
                    else if (response && response.errorCode != 0) {
                        _this.iAndiError = true;
                        _this.iAndiInfo = false;
                        _this.iAndiErrorMsg = response.msg + "   " + response.err;
                    }
                    else {
                        _this.iAndiError = true;
                        _this.iAndiInfo = false;
                        _this.iAndiErrorMsg = "Server Error";
                    }
                })
                    .catch(function (err) {
                    _this.iAndiProcessing = false;
                    _this.iAndiError = true;
                    _this.iAndiInfo = false;
                    _this.iAndiErrorMsg = "Network Error";
                });
            }
            else {
                this.consoleService.installAndInstantiateChaincodeDynamicContract({
                    "networkId": this.networkid,
                    "orgId": this.selectedOrg,
                    "peers": this.modalChaincodeInstallPeer,
                    "channelName": this.selectedChannelInInstalledChaincode,
                    "chaincodeName": this.newChaincodeName,
                    "chaincodeVersion": this.newChaincodeVersion,
                    "args": this.convertTextToArray(this.newChaincodeArguments),
                    "smartContractId": this.smartContractID
                })
                    .then(function (response) {
                    _this.iAndiProcessing = false;
                    if (response && response.errorCode == 0) {
                        _this.iAndiError = false;
                        _this.iAndiInfo = true;
                        _this.iAndiErrorMsg = response.msg;
                        _this.newChaincodeName = "";
                        _this.newChaincodeVersion = "";
                        _this.newChaincodeArguments = "";
                        _this.newChaincodeFileName = "";
                        _this.newChaincodeFileContent = "";
                        _this.onChangeOrganization();
                    }
                    else if (response && response.errorCode != 0) {
                        _this.iAndiError = true;
                        _this.iAndiInfo = false;
                        _this.iAndiErrorMsg = response.msg + "   " + response.err;
                    }
                    else {
                        _this.iAndiError = true;
                        _this.iAndiInfo = false;
                        _this.iAndiErrorMsg = "Server Error";
                    }
                })
                    .catch(function (err) {
                    _this.iAndiProcessing = false;
                    _this.iAndiError = true;
                    _this.iAndiInfo = false;
                    _this.iAndiErrorMsg = "Network Error";
                });
            }
        }
    };
    ChannelPage.prototype.convertTextToArray = function (arrayString) {
        var jsonString = '{ "value" : [' + arrayString + ']}';
        console.log("convertTextToArray :: jsonString :: ", jsonString);
        return JSON.parse(jsonString).value;
    };
    ChannelPage.prototype.validateInstallAndInstantiateChaincode = function () {
        this.iAndiError = false;
        this.iAndiInfo = false;
        this.iAndiErrorMsg = "";
        if (this.selectedChannelInInstalledChaincode == "") {
            this.iAndiError = true;
            this.iAndiInfo = false;
            this.iAndiErrorMsg = "Please select Channel ";
            return false;
        }
        if (this.newChaincodeName == "") {
            this.iAndiError = true;
            this.iAndiInfo = false;
            this.iAndiErrorMsg = "Please enter Chaincode Name ";
            return false;
        }
        if (this.newChaincodeVersion == "") {
            this.iAndiError = true;
            this.iAndiInfo = false;
            this.iAndiErrorMsg = "Please enter Chaincode Version ";
            return false;
        }
        if (this.smartContractID == "NA") {
            if (this.newChaincodeFileName == "") {
                this.iAndiError = true;
                this.iAndiInfo = false;
                this.iAndiErrorMsg = "Please Select Chaincode File ";
                return false;
            }
        }
        return true;
    };
    ChannelPage.prototype.fileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file_1 = event.target.files[0];
            console.log("file :: ", file_1);
            reader.readAsDataURL(file_1);
            reader.onload = function () {
                console.log("reader :: ", reader);
                console.log("reader Data :: ", reader.result.split(',')[1]);
                _this.newChaincodeFileName = file_1.name;
                _this.newChaincodeFileContent = reader.result.split(',')[1];
            };
        }
    };
    ChannelPage.prototype.retrieveNetworkBasicDetails = function (networkid) {
        var _this = this;
        this.showLoading = true;
        this.consoleService.retrieveNetworkBasicDetails(networkid)
            .then(function (response) {
            _this.showLoading = false;
            _this.orgDetailsArray = [];
            _this.channelJoinRequestArray = [];
            if (response.channelJoinRequest) {
                _this.channelJoinRequestArray = response.channelJoinRequest;
            }
            for (var _i = 0, _a = response.networkbasicdetail; _i < _a.length; _i++) {
                var networdetails = _a[_i];
                var peers = [];
                for (var _b = 0, _c = networdetails.peers; _b < _c.length; _b++) {
                    var tmpPeer = _c[_b];
                    peers.push(tmpPeer);
                }
                _this.orgDetailsArray.push({
                    orgName: networdetails.orgName,
                    orgIdentifier: networdetails.orgIdentifier,
                    peers: peers
                });
            }
            if (_this.orgDetailsArray.length > 0) {
                _this.selectedOrg = _this.orgDetailsArray[0].orgIdentifier;
                _this.selectedOrgDesc = _this.orgDetailsArray[0].orgName;
                _this.peerDetailsArray = _this.orgDetailsArray[0].peers;
                _this.peerInstallChaincodeArray = [];
                _this.peerCreateChannelArray = [];
                for (var _d = 0, _e = _this.peerDetailsArray; _d < _e.length; _d++) {
                    var tmpPeer = _e[_d];
                    console.log("peerDetailsArray :: tmpPeer :: ", tmpPeer);
                    _this.retrieveChannels(_this.selectedOrg, tmpPeer, _this.networkid);
                }
            }
            _this.channelJoinRequestDisplayArray = [];
            _this.showChannelRequest = false;
            for (var _f = 0, _g = _this.channelJoinRequestArray; _f < _g.length; _f++) {
                var tmpJoinRequest = _g[_f];
                if (tmpJoinRequest.orgId == _this.selectedOrg) {
                    _this.channelJoinRequestDisplayArray.push(tmpJoinRequest.channelName);
                }
            }
            if (_this.channelJoinRequestDisplayArray.length > 0) {
                _this.showChannelRequest = true;
            }
            console.log("Dashboard :: selectedOrg :: ", _this.selectedOrg, " :: orgDetailsArray :: ", _this.orgDetailsArray);
        })
            .catch(function (err) {
            _this.showLoading = false;
            console.log("retrieveNetworkBasicDetails() :: err ::", err);
            _this.showInfo = false;
            _this.showError = true;
            _this.errorMessage = "Network Error";
        });
    };
    ChannelPage.prototype.retrieveJoinChannelNotification = function (networkid) {
        var _this = this;
        this.consoleService.retrieveNetworkBasicDetails(networkid)
            .then(function (response) {
            _this.channelJoinRequestArray = [];
            if (response.channelJoinRequest) {
                _this.channelJoinRequestArray = response.channelJoinRequest;
            }
            _this.channelJoinRequestDisplayArray = [];
            _this.showChannelRequest = false;
            for (var _i = 0, _a = _this.channelJoinRequestArray; _i < _a.length; _i++) {
                var tmpJoinRequest = _a[_i];
                if (tmpJoinRequest.orgId == _this.selectedOrg) {
                    _this.channelJoinRequestDisplayArray.push(tmpJoinRequest.channelName);
                }
            }
            if (_this.channelJoinRequestDisplayArray.length > 0) {
                _this.showChannelRequest = true;
            }
            console.log("Dashboard :: selectedOrg :: ", _this.selectedOrg, " :: channelJoinRequestDisplayArray :: ", _this.channelJoinRequestDisplayArray);
        })
            .catch(function (err) {
            _this.showLoading = false;
            console.log("retrieveJoinChannelNotification() :: err ::", err);
            _this.showInfo = false;
            _this.showError = true;
            _this.errorMessage = "Network Error";
        });
    };
    ChannelPage.prototype.onClickJoinChannel = function (channelname) {
        console.log("onClickJoinChannel() :: selectedOrg ::", this.selectedOrg, " :: channelname :: ", channelname);
        this.selectedJoinChannelName = channelname;
    };
    ChannelPage.prototype.requestJoinChannel = function () {
        var _this = this;
        if (this.peerJoinChannelArray.length == 0) {
            this.showJoinChannelError = true;
            this.showJoinChannelInfo = false;
            this.joinChannelErrorMessage = "Please select minimum one peer ";
        }
        else {
            this.showJoinChannelError = false;
            this.showJoinChannelInfo = false;
            this.showJoinChannelLoading = true;
            this.consoleService.joinChannel(this.networkid, this.selectedOrg, this.peerJoinChannelArray, this.selectedJoinChannelName)
                .then(function (response) {
                _this.showJoinChannelLoading = false;
                if (response && response.errorCode == 0) {
                    _this.showJoinChannelError = false;
                    _this.showJoinChannelInfo = true;
                    _this.joinChannelErrorMessage = response.msg;
                    _this.onChangeOrganization();
                }
                else if (response && response.errorCode != 0) {
                    _this.showJoinChannelError = true;
                    _this.showJoinChannelInfo = false;
                    _this.joinChannelErrorMessage = response.msg;
                }
                else {
                    _this.showJoinChannelError = true;
                    _this.showJoinChannelInfo = false;
                    _this.joinChannelErrorMessage = "Server Error";
                }
            })
                .catch(function (err) {
                _this.showJoinChannelLoading = false;
                console.log("requestJoinChannel() :: err ::", err);
                _this.showJoinChannelError = true;
                _this.showJoinChannelInfo = false;
                _this.joinChannelErrorMessage = "Network Error";
            });
        }
    };
    ChannelPage.prototype.onClickPeerJoinChannel = function (peer) {
        console.log("onClickPeerJoinChannel :: peer :: ", peer);
        var hasPeer = false;
        var newpeerJoinChannelArray = [];
        for (var _i = 0, _a = this.peerJoinChannelArray; _i < _a.length; _i++) {
            var tmpPeer = _a[_i];
            if (tmpPeer == peer) {
                hasPeer = true;
            }
            else {
                newpeerJoinChannelArray.push(tmpPeer);
            }
        }
        if (hasPeer) {
            this.peerJoinChannelArray = newpeerJoinChannelArray;
        }
        else {
            this.peerJoinChannelArray.push(peer);
        }
        console.log("onClickPeerJoinChannel :: peerJoinChannelArray :: ", this.peerJoinChannelArray);
    };
    ChannelPage.prototype.retrieveChannels = function (selectedOrg, peerName, networkid) {
        var _this = this;
        this.showLoading = true;
        this.showInfo = false;
        this.showError = false;
        this.consoleService.retrieveOrgDashChannelDetails(networkid, selectedOrg, peerName)
            .then(function (response) {
            _this.showLoading = false;
            console.log("retrieveChannels() :: response ::", response);
            if (_this.networkid == networkid && _this.selectedOrg == selectedOrg) {
                if (response.channelNames) {
                    for (var _i = 0, _a = response.channelNames; _i < _a.length; _i++) {
                        var channelName = _a[_i];
                        var channelAdded = false;
                        for (var index in _this.channels) {
                            if (_this.channels[index].channelName == channelName.channelId) {
                                channelAdded = true;
                                _this.channels[index].peers.push(peerName);
                                break;
                            }
                        }
                        if (!channelAdded) {
                            _this.channels.push({
                                channelName: channelName.channelId,
                                peers: [peerName],
                                chanicodes: []
                            });
                        }
                        _this.retrieveInstantiatedChaincode(networkid, selectedOrg, peerName, channelName.channelId);
                    }
                }
            }
            console.log("retrieveChannels() :: channels ::", _this.channels);
        })
            .catch(function (err) {
            _this.showLoading = false;
            console.log("retrieveChannelCount() :: err ::", err);
            _this.showInfo = false;
            _this.showError = true;
            _this.errorMessage = "Network Error";
        });
    };
    ChannelPage.prototype.retrieveInstantiatedChaincode = function (networkid, selectedOrg, peerName, channelName) {
        var _this = this;
        this.consoleService.retrieveOrgInstantiatedDashChaincodeDetails(networkid, selectedOrg, peerName, channelName)
            .then(function (response) {
            if (_this.networkid == networkid && _this.selectedOrg == selectedOrg) {
                if (response.list && response.list.chaincodes) {
                    for (var index in _this.channels) {
                        if (_this.channels[index].channelName == channelName) {
                            for (var _i = 0, _a = response.list.chaincodes; _i < _a.length; _i++) {
                                var newChaincode = _a[_i];
                                var alreadyExists = false;
                                for (var _b = 0, _c = _this.channels[index].chanicodes; _b < _c.length; _b++) {
                                    var chaincode = _c[_b];
                                    if (newChaincode.name == chaincode.chaincodeName && newChaincode.version == chaincode.chaincodeVersion) {
                                        alreadyExists = true;
                                        break;
                                    }
                                }
                                if (!alreadyExists) {
                                    _this.channels[index].chanicodes.push({
                                        chaincodeName: newChaincode.name,
                                        chaincodeVersion: newChaincode.version,
                                        chaincodePath: newChaincode.path
                                    });
                                }
                            }
                        }
                    }
                }
            }
        })
            .catch(function (err) {
            _this.showLoading = false;
            console.log("retrieveInstantiatedChaincode() :: err ::", err);
            _this.showInfo = false;
            _this.showError = true;
            _this.errorMessage = "Network Error";
        });
    };
    ChannelPage.prototype.onChangeOrganization = function () {
        this.orgCreateChannelArray = [];
        for (var _i = 0, _a = this.orgDetailsArray; _i < _a.length; _i++) {
            var orgDetails = _a[_i];
            if (orgDetails.orgIdentifier == this.selectedOrg) {
                this.selectedOrg = orgDetails.orgIdentifier;
                this.selectedOrgDesc = orgDetails.orgName;
                this.peerDetailsArray = orgDetails.peers;
                this.channels = [];
                this.peerInstallChaincodeArray = [];
                for (var _b = 0, _c = this.peerDetailsArray; _b < _c.length; _b++) {
                    var tmpPeer = _c[_b];
                    console.log("onChangeOrganization :: tmpPeer :: ", tmpPeer);
                    this.retrieveChannels(this.selectedOrg, tmpPeer, this.networkid);
                }
            }
        }
        this.channelJoinRequestDisplayArray = [];
        this.showChannelRequest = false;
        this.retrieveJoinChannelNotification(this.networkid);
    };
    ChannelPage.prototype.createChannel = function () {
        var _this = this;
        console.log("createChannel :: peerCreateChannelArray :: ", this.peerCreateChannelArray);
        this.showNewChannelLoading = false;
        if (this.newChannelName.trim() == "") {
            this.showNewChannelError = true;
            this.showNewChannelInfo = false;
            this.newChannelErrorMessage = "Invalid Channel Name";
        }
        else if (this.peerCreateChannelArray.length == 0) {
            this.showNewChannelError = true;
            this.showNewChannelInfo = false;
            this.newChannelErrorMessage = "Please select minimum one peer ";
        }
        else {
            this.showNewChannelError = false;
            this.showNewChannelInfo = true;
            this.newChannelErrorMessage = "Creating Channel";
            this.showNewChannelLoading = true;
            this.consoleService.createChannel(this.networkid, this.selectedOrg, this.peerCreateChannelArray, this.orgCreateChannelArray, this.newChannelName)
                .then(function (response) {
                _this.showNewChannelLoading = false;
                if (response && response.errorCode == 0) {
                    _this.showNewChannelError = false;
                    _this.showNewChannelInfo = true;
                    _this.newChannelErrorMessage = response.msg;
                    _this.newChannelName = "";
                    _this.onChangeOrganization();
                }
                else if (response && response.errorCode != 0) {
                    _this.showNewChannelError = true;
                    _this.showNewChannelInfo = false;
                    _this.newChannelErrorMessage = response.msg;
                }
                else {
                    _this.showNewChannelError = true;
                    _this.showNewChannelInfo = false;
                    _this.newChannelErrorMessage = "Server Error";
                }
            })
                .catch(function (err) {
                _this.showNewChannelLoading = false;
                console.log("createChannel() :: err ::", err);
                _this.showNewChannelInfo = false;
                _this.showNewChannelError = true;
                _this.newChannelErrorMessage = "Network Error";
            });
        }
    };
    ChannelPage.prototype.onClickPeerChannel = function (peer) {
        console.log("onClickPeerChannel :: peer :: ", peer);
        var hasPeer = false;
        var newpeerCreateChannelArray = [];
        for (var _i = 0, _a = this.peerCreateChannelArray; _i < _a.length; _i++) {
            var tmpPeer = _a[_i];
            if (tmpPeer == peer) {
                hasPeer = true;
            }
            else {
                newpeerCreateChannelArray.push(tmpPeer);
            }
        }
        if (hasPeer) {
            this.peerCreateChannelArray = newpeerCreateChannelArray;
        }
        else {
            this.peerCreateChannelArray.push(peer);
        }
        console.log("onClickPeerChannel :: peerCreateChannelArray :: ", this.peerCreateChannelArray);
    };
    ChannelPage.prototype.onClickOrgChannel = function (orgid) {
        console.log("onClickOrgChannel :: orgid :: ", orgid);
        var hasOrg = false;
        var newOrgCreateChannelArray = [];
        for (var _i = 0, _a = this.orgCreateChannelArray; _i < _a.length; _i++) {
            var tmpOrgId = _a[_i];
            if (tmpOrgId == orgid) {
                hasOrg = true;
            }
            else {
                newOrgCreateChannelArray.push(tmpOrgId);
            }
        }
        if (hasOrg) {
            this.orgCreateChannelArray = newOrgCreateChannelArray;
        }
        else {
            this.orgCreateChannelArray.push(orgid);
        }
        console.log("onClickOrgChannel :: orgCreateChannelArray :: ", this.orgCreateChannelArray);
    };
    ChannelPage.prototype.ngOnInit = function () {
        this.networkid = this.route.snapshot.paramMap.get('networkid');
        console.log("ngOnInit :: ChannelPage :: networkid :: ", this.networkid);
        this.retrieveNetworkBasicDetails(this.networkid);
        this.retrieveAllSmartContract(this.networkid);
    };
    return ChannelPage;
}());
ChannelPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'channelpage',
        template: __webpack_require__(193),
        styles: [__webpack_require__(169)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__["a" /* NewCotrustService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__["a" /* NewCotrustService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], ChannelPage);

var _a, _b, _c;
//# sourceMappingURL=channelpage.component.js.map

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmMail; });
/**
 *
Copyright 2018 HCL Technologies

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 *
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfirmMail = (function () {
    function ConfirmMail(router, consoleService, route) {
        this.router = router;
        this.consoleService = consoleService;
        this.route = route;
        this.confirmMailToken = "";
        this.showLoading = false;
        this.showError = false;
        this.showInfo = false;
        this.errorMessage = "";
    }
    ConfirmMail.prototype.confirmMailId = function (confirmMailToken) {
        var _this = this;
        this.showLoading = true;
        this.consoleService.confirmMailId(confirmMailToken)
            .then(function (response) {
            _this.showLoading = false;
            if (response && response.errorCode == 0) {
                _this.showInfo = true;
                _this.errorMessage = response.msg;
            }
            else if (response) {
                _this.showError = true;
                _this.errorMessage = response.msg;
            }
            else {
                _this.showError = true;
                _this.errorMessage = "Network Error";
            }
        }).catch(function (err) {
            _this.showLoading = false;
            _this.showError = true;
            _this.errorMessage = "Network Error";
        });
    };
    ConfirmMail.prototype.ngOnInit = function () {
        this.confirmMailToken = this.route.snapshot.paramMap.get('confirmMailToken');
        console.log("ngOnInit :: ConfirmMail :: confirmMailToken :: ", this.confirmMailToken);
        this.confirmMailId(this.confirmMailToken);
    };
    return ConfirmMail;
}());
ConfirmMail = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'confirmmail',
        template: __webpack_require__(194),
        styles: [__webpack_require__(170)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__["a" /* NewCotrustService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__["a" /* NewCotrustService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], ConfirmMail);

var _a, _b, _c;
//# sourceMappingURL=confirmmail.component.js.map

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateType; });
/**
 *
Copyright 2018 HCL Technologies

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 *
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateType = (function () {
    function CreateType(router, consoleService, route) {
        this.router = router;
        this.consoleService = consoleService;
        this.route = route;
        this.typeName = "";
        this.typeDescription = "";
        this.attributeTypeList = ["String", "Number", "Boolean"];
        this.attributeName = "";
        this.attributeType = this.attributeTypeList[0];
        this.attributeList = [];
        this.showError = false;
        this.showInfo = false;
        this.errorMessage = "";
        this.showLoading = false;
    }
    CreateType.prototype.addAttribute = function () {
        console.log("this.attributeName :: " + this.attributeName, " :: this.attributeType :: " + this.attributeType);
        this.showError = false;
        this.errorMessage = "";
        if (this.attributeName.trim() == "") {
            this.showError = true;
            this.errorMessage = "Please enter attribute name";
            return;
        }
        this.attributeList.push({
            name: this.attributeName.trim(),
            type: this.attributeType
        });
        this.attributeName = "";
        this.attributeType = this.attributeTypeList[0];
    };
    CreateType.prototype.save = function () {
        var _this = this;
        this.showLoading = false;
        this.showError = false;
        this.errorMessage = "";
        if (this.typeName.trim() == "") {
            this.showError = true;
            this.errorMessage = "Please enter Type Name";
            return;
        }
        var finalConfig = {
            networkID: this.networkid,
            dataType: "TYPE",
            typeName: this.typeName,
            typeDescription: this.typeDescription,
            attributeList: this.attributeList
        };
        this.showLoading = true;
        this.consoleService.createType(finalConfig)
            .then(function (response) {
            _this.showLoading = false;
            console.log("save() :: response ::", response);
            // this.router.navigate(['/smartcontract/'+this.networkid]);  
        })
            .catch(function (err) {
            _this.showLoading = false;
            console.log("save() :: err ::", err);
            _this.showInfo = false;
            _this.showError = true;
            _this.errorMessage = "Network Error";
        });
    };
    CreateType.prototype.retrieveType = function () {
        var _this = this;
        this.showLoading = false;
        this.showError = false;
        this.errorMessage = "";
        this.showLoading = true;
        this.consoleService.retrieveTypeByID(this.networkid, this.typeid)
            .then(function (response) {
            _this.showLoading = false;
            console.log("retrieveType() :: response ::", response);
            _this.typeName = response.type.typeName;
            _this.typeDescription = response.type.typeDescription;
            _this.attributeList = response.type.attributeList;
        })
            .catch(function (err) {
            _this.showLoading = false;
            console.log("retrieveType() :: err ::", err);
            _this.showInfo = false;
            _this.showError = true;
            _this.errorMessage = "Network Error";
        });
    };
    CreateType.prototype.ngOnInit = function () {
        this.networkid = this.route.snapshot.paramMap.get('networkid');
        this.typeid = this.route.snapshot.paramMap.get('typeid');
        if (this.typeid && this.typeid != null) {
            this.retrieveType();
        }
        console.log("ngOnInit :: CreateType :: networkid :: ", this.networkid, " :: typeid :: ", this.typeid);
    };
    return CreateType;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('networkid'),
    __metadata("design:type", Object)
], CreateType.prototype, "networkid", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('typeid'),
    __metadata("design:type", Object)
], CreateType.prototype, "typeid", void 0);
CreateType = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'createtype',
        template: __webpack_require__(195),
        styles: [__webpack_require__(171)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__["a" /* NewCotrustService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__["a" /* NewCotrustService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], CreateType);

var _a, _b, _c;
//# sourceMappingURL=createtype.component.js.map

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard; });
/**
 *
Copyright 2018 HCL Technologies

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 *
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Dashboard = (function () {
    function Dashboard(router, consoleService, route) {
        this.router = router;
        this.consoleService = consoleService;
        this.route = route;
        this.peerDetailsArray = [];
        this.orgDetailsArray = [];
        this.selectedOrg = "";
        this.selectedOrgDesc = "-";
        this.showLoading = false;
        this.showError = false;
        this.showInfo = false;
        this.errorMessage = "";
        console.log("Dashboard :: networkid :: ", this.networkid);
    }
    Dashboard.prototype.retrieveNetworkBasicDetails = function (networkid) {
        var _this = this;
        this.showLoading = true;
        this.consoleService.retrieveNetworkBasicDetails(networkid)
            .then(function (response) {
            _this.showLoading = false;
            _this.orgDetailsArray = [];
            for (var _i = 0, _a = response.networkbasicdetail; _i < _a.length; _i++) {
                var networdetails = _a[_i];
                var peers = [];
                for (var _b = 0, _c = networdetails.peers; _b < _c.length; _b++) {
                    var tmpPeer = _c[_b];
                    var peer = _this.defaultPeerConfig();
                    peer.peerName = tmpPeer;
                    peer.channelCount = "-";
                    peer.installedChaincode = "-";
                    peers.push(peer);
                }
                _this.orgDetailsArray.push({
                    orgName: networdetails.orgName,
                    orgIdentifier: networdetails.orgIdentifier,
                    peers: peers
                });
            }
            if (_this.orgDetailsArray.length > 0) {
                _this.selectedOrg = _this.orgDetailsArray[0].orgIdentifier;
                _this.selectedOrgDesc = _this.orgDetailsArray[0].orgName;
                _this.peerDetailsArray = _this.orgDetailsArray[0].peers;
                for (var index in _this.peerDetailsArray) {
                    console.log("peerDetailsArray :: index :: ", index, _this.peerDetailsArray[index].peerName);
                    _this.retrieveChaincodeCount(index, _this.selectedOrg, _this.peerDetailsArray[index].peerName, _this.networkid);
                    _this.retrieveChannelCount(index, _this.selectedOrg, _this.peerDetailsArray[index].peerName, _this.networkid);
                }
            }
            console.log("Dashboard :: selectedOrg :: ", _this.selectedOrg, " :: orgDetailsArray :: ", _this.orgDetailsArray);
        })
            .catch(function (err) {
            _this.showLoading = false;
            console.log("retrieveNetworkBasicDetails() :: err ::", err);
            _this.showError = true;
            _this.errorMessage = "Network Error";
        });
    };
    Dashboard.prototype.retrieveChaincodeCount = function (index, selectedOrg, peerName, networkid) {
        var _this = this;
        this.consoleService.retrieveOrgDashChaincodeDetails(networkid, selectedOrg, peerName)
            .then(function (response) {
            console.log("retrieveChaincodeCount() :: response ::", response);
            if (response && response.errorCode == 0 && _this.networkid == networkid && _this.selectedOrg == selectedOrg) {
                _this.peerDetailsArray[index].installedChaincode = response.list.chaincodes.length;
            }
            else if (response && response.errorCode && response.errorCode != 0) {
                _this.showError = true;
                _this.errorMessage = response.msg;
            }
        })
            .catch(function (err) {
            _this.showLoading = false;
            console.log("retrieveChaincodeCount() :: err ::", err);
            _this.showError = true;
            _this.errorMessage = "Network Error";
        });
    };
    Dashboard.prototype.onClickAddPeer = function () {
        var _this = this;
        this.showLoading = true;
        this.showError = false;
        this.errorMessage = "";
        this.consoleService.createPeer(this.networkid, this.selectedOrg)
            .then(function (response) {
            setTimeout(function () {
                _this.retrieveNetworkBasicDetails(_this.networkid);
            }, 20000);
        })
            .catch(function (err) {
            _this.showLoading = false;
            console.log("onClickAddPeer() :: err ::", err);
            _this.showError = true;
            _this.errorMessage = "Network Error";
        });
    };
    Dashboard.prototype.retrieveChannelCount = function (index, selectedOrg, peerName, networkid) {
        var _this = this;
        this.consoleService.retrieveOrgDashChannelDetails(networkid, selectedOrg, peerName)
            .then(function (response) {
            console.log("retrieveChannelCount() :: response ::", response);
            if (_this.networkid == networkid && _this.selectedOrg == selectedOrg) {
                if (response.channelNames) {
                    _this.peerDetailsArray[index].channelCount = response.channelNames.length;
                }
            }
        })
            .catch(function (err) {
            _this.showLoading = false;
            console.log("retrieveChannelCount() :: err ::", err);
            _this.showError = true;
            _this.errorMessage = "Network Error";
        });
    };
    Dashboard.prototype.defaultPeerConfig = function () {
        var peer = {};
        peer.peerName = "peer";
        peer.channelCount = "-";
        peer.installedChaincode = "-";
        peer.status = "primary";
        return peer;
    };
    Dashboard.prototype.onChangeOrganization = function () {
        console.log("Dashboard :: networkid :: ", this.networkid, " :: selectedOrg :: ", this.selectedOrg);
        for (var _i = 0, _a = this.orgDetailsArray; _i < _a.length; _i++) {
            var orgDetails = _a[_i];
            if (orgDetails.orgIdentifier == this.selectedOrg) {
                this.selectedOrg = orgDetails.orgIdentifier;
                this.selectedOrgDesc = orgDetails.orgName;
                this.peerDetailsArray = orgDetails.peers;
                for (var index in this.peerDetailsArray) {
                    console.log("onChangeOrganization :: index :: ", index, this.peerDetailsArray[index].peerName);
                    this.retrieveChaincodeCount(index, this.selectedOrg, this.peerDetailsArray[index].peerName, this.networkid);
                    this.retrieveChannelCount(index, this.selectedOrg, this.peerDetailsArray[index].peerName, this.networkid);
                }
            }
        }
    };
    Dashboard.prototype.selectedOrgIndex = function () {
        var selectedOrdIndex = 0;
        for (var _i = 0, _a = this.orgDetailsArray; _i < _a.length; _i++) {
            var orgDetails = _a[_i];
            selectedOrdIndex++;
            if (orgDetails.orgIdentifier == this.selectedOrg) {
                return selectedOrdIndex;
            }
        }
    };
    Dashboard.prototype.nextPeerNumber = function () {
        return this.peerDetailsArray.length;
    };
    Dashboard.prototype.ngOnInit = function () {
        this.networkid = this.route.snapshot.paramMap.get('networkid');
        console.log("ngOnInit :: Dashboard :: networkid :: ", this.networkid);
        this.retrieveNetworkBasicDetails(this.networkid);
    };
    return Dashboard;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('networkid'),
    __metadata("design:type", Object)
], Dashboard.prototype, "networkid", void 0);
Dashboard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard',
        template: __webpack_require__(196),
        styles: [__webpack_require__(172)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__["a" /* NewCotrustService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__["a" /* NewCotrustService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], Dashboard);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPassword; });
/**
 *
Copyright 2018 HCL Technologies

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 *
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotPassword = (function () {
    function ForgotPassword(router, consoleService, route) {
        this.router = router;
        this.consoleService = consoleService;
        this.route = route;
        this.showLoading = false;
        this.showError = false;
        this.showInfo = false;
        this.errorMessage = "";
        this.newpassword = "";
        this.confirmpassword = "";
        this.emailid = "";
        this.otp = "";
        this.step1 = true;
        this.step2 = false;
        this.step3 = false;
    }
    ForgotPassword.prototype.onClickSendOtpToMail = function () {
        var _this = this;
        this.showError = false;
        this.showInfo = false;
        this.errorMessage = "";
        this.step1 = true;
        this.step2 = false;
        this.step3 = false;
        if (this.emailid.trim() != "") {
            this.showLoading = true;
            this.consoleService.sendOTPToMailID({ email: this.emailid.trim() })
                .then(function (response) {
                console.log("onClickSendOtpToMail() :: response :: ", response);
                _this.showLoading = false;
                if (response.errorCode == 0) {
                    _this.showInfo = true;
                    _this.step1 = false;
                    _this.step2 = true;
                    _this.step3 = false;
                    _this.errorMessage = response.msg;
                }
                else {
                    _this.showError = true;
                    _this.errorMessage = response.msg;
                }
            })
                .catch(function (err) {
                console.log("onClickSendOtpToMail() :: err ::", err);
                _this.showLoading = false;
                _this.showError = true;
                _this.errorMessage = "Network Error";
            });
        }
        else {
            this.showError = true;
            this.errorMessage = "Enter a Valid email ID";
        }
    };
    ForgotPassword.prototype.onClickVerifyOTP = function () {
        var _this = this;
        this.showError = false;
        this.showInfo = false;
        this.errorMessage = "";
        this.step1 = false;
        this.step2 = true;
        this.step3 = false;
        if (this.otp.trim() != "") {
            this.showLoading = true;
            this.consoleService.verifyOTP({ email: this.emailid.trim(), otp: this.otp })
                .then(function (response) {
                console.log("onClickVerifyOTP() :: response :: ", response);
                _this.showLoading = false;
                if (response.errorCode == 0) {
                    _this.showInfo = true;
                    _this.step1 = false;
                    _this.step2 = false;
                    _this.step3 = true;
                    _this.errorMessage = response.msg;
                }
                else {
                    _this.showError = true;
                    _this.errorMessage = response.msg;
                }
            })
                .catch(function (err) {
                console.log("onClickVerifyOTP() :: err ::", err);
                _this.showLoading = false;
                _this.showError = true;
                _this.errorMessage = "Network Error";
            });
        }
        else {
            this.showError = true;
            this.errorMessage = "Enter a Valid email ID";
        }
    };
    ForgotPassword.prototype.onClickResetPassword = function () {
        var _this = this;
        this.showError = false;
        this.showInfo = false;
        this.errorMessage = "";
        if (this.newpassword == this.confirmpassword) {
            this.showLoading = true;
            this.consoleService.resetPassword(this.newpassword)
                .then(function (response) {
                console.log("onClickResetPassword() :: response :: ", response);
                _this.showLoading = false;
                if (response.errorCode == 0) {
                    _this.newpassword = "";
                    _this.confirmpassword = "";
                    _this.showInfo = true;
                    _this.errorMessage = response.msg;
                }
                else {
                    _this.showError = true;
                    _this.errorMessage = response.msg;
                }
            })
                .catch(function (err) {
                console.log("onClickResetPassword() :: err ::", err);
                _this.showLoading = false;
                _this.showError = true;
                _this.errorMessage = "Network Error";
            });
        }
        else {
            this.showError = true;
            this.errorMessage = "New Password and Confirm Password are not same";
        }
    };
    return ForgotPassword;
}());
ForgotPassword = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'forgotpassword',
        template: __webpack_require__(198),
        styles: [__webpack_require__(174)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__["a" /* NewCotrustService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__["a" /* NewCotrustService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], ForgotPassword);

var _a, _b, _c;
//# sourceMappingURL=forgotpassword.component.js.map

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/**
 *
Copyright 2018 HCL Technologies

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 *
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Login = (function () {
    function Login(router, consoleService, route) {
        this.router = router;
        this.consoleService = consoleService;
        this.route = route;
        this.emailid = "";
        this.password = "";
        this.showError = false;
        this.showInfo = false;
        this.errorMessage = "";
        this.showloading = false;
    }
    Login.prototype.login = function () {
        var _this = this;
        this.showInfo = false;
        this.showError = false;
        this.errorMessage = "";
        this.showloading = true;
        this.consoleService.login({
            email: this.emailid,
            password: this.password
        }).then(function (response) {
            console.log("login() :: ", response);
            if (response.errorCode == 0) {
                _this.consoleService.retrieveAllnetworkForUser()
                    .then(function (response) {
                    var networkdata = response.networkdata;
                    _this.consoleService.checkPrivateKeyPresent(networkdata[0].networkID)
                        .then(function (res) {
                        _this.showloading = false;
                        if (res.errorCode === 0) {
                            _this.router.navigate(['/dashboard', networkdata[0].networkID]);
                        }
                        else {
                            _this.router.navigate(['/keyuploadpage', networkdata[0].networkID]);
                        }
                    });
                }).catch(function (err) {
                    _this.showloading = false;
                    _this.showError = true;
                    _this.errorMessage = "Network Error";
                });
            }
            else {
                _this.showError = true;
                _this.showloading = false;
                _this.errorMessage = response.msg;
            }
        }).catch(function (err) {
            _this.showloading = false;
            console.log("login() :: err ::", err);
            _this.showError = true;
            _this.errorMessage = "Network Error";
        });
    };
    return Login;
}());
Login = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'login',
        template: __webpack_require__(201),
        styles: [__webpack_require__(177)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__["a" /* NewCotrustService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__["a" /* NewCotrustService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], Login);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessDefinition; });
/**
 *
Copyright 2018 HCL Technologies

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 *
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProcessDefinition = (function () {
    function ProcessDefinition(router, consoleService, route) {
        this.router = router;
        this.consoleService = consoleService;
        this.route = route;
        this.emailid = "";
        this.password = "";
        this.showError = false;
        this.showInfo = false;
        this.errorMessage = "";
        this.showloading = false;
    }
    ProcessDefinition.prototype.ngOnInit = function () {
        this.networkid = this.route.snapshot.paramMap.get('networkid');
        console.log("ngOnInit :: ProcessDefinition :: networkid :: ", this.networkid);
    };
    return ProcessDefinition;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('networkid'),
    __metadata("design:type", Object)
], ProcessDefinition.prototype, "networkid", void 0);
ProcessDefinition = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'processdefinition',
        template: __webpack_require__(205),
        styles: [__webpack_require__(181)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__["a" /* NewCotrustService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__["a" /* NewCotrustService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], ProcessDefinition);

var _a, _b, _c;
//# sourceMappingURL=processdefinition.component.js.map

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPassword; });
/**
 *
Copyright 2018 HCL Technologies

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 *
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetPassword = (function () {
    function ResetPassword(router, consoleService, route) {
        this.router = router;
        this.consoleService = consoleService;
        this.route = route;
        this.showLoading = false;
        this.showError = false;
        this.showInfo = false;
        this.errorMessage = "";
        this.newpassword = "";
        this.confirmpassword = "";
    }
    ResetPassword.prototype.onClickResetPassword = function () {
        var _this = this;
        this.showError = false;
        this.showInfo = false;
        this.errorMessage = "";
        if (this.newpassword == this.confirmpassword) {
            this.showLoading = true;
            this.consoleService.resetPassword(this.newpassword)
                .then(function (response) {
                console.log("onClickResetPassword() :: response :: ", response);
                _this.showLoading = false;
                if (response.errorCode == 0) {
                    _this.showInfo = true;
                    _this.errorMessage = response.msg;
                }
                else {
                    _this.showError = true;
                    _this.errorMessage = response.msg;
                }
            })
                .catch(function (err) {
                console.log("onClickResetPassword() :: err ::", err);
                _this.showLoading = false;
                _this.showError = true;
                _this.errorMessage = "Network Error";
            });
        }
        else {
            this.showError = true;
            this.errorMessage = "New Password and Confirm Password are not same";
        }
    };
    return ResetPassword;
}());
ResetPassword = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'resetpassword',
        template: __webpack_require__(206),
        styles: [__webpack_require__(182)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__["a" /* NewCotrustService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__["a" /* NewCotrustService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], ResetPassword);

var _a, _b, _c;
//# sourceMappingURL=resetpassword.component.js.map

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/**
 *
Copyright 2018 HCL Technologies

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 *
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsPage = (function () {
    function SettingsPage(router, consoleService, route) {
        this.router = router;
        this.consoleService = consoleService;
        this.route = route;
        this.configuration = {};
        this.showLoading = false;
        this.showError = false;
        this.errorMessage = "";
        this.selectedOrg = "";
        this.orgConfigArray = [];
        console.log("Dashboard :: Constructor Started ");
        this.configuration = {
            "orderer": {
                "url": "",
                "serverhostname": "",
                "tlscacerts": ""
            },
            "peers": [
                {
                    "name": "peer1",
                    "requests": "",
                    "events": "",
                    "serverhostname": "",
                    "tlscacerts": ""
                },
                {
                    "name": "peer2",
                    "requests": "",
                    "events": "",
                    "serverhostname": "",
                    "tlscacerts": ""
                }
            ],
            "admin": {
                "username": "",
                "password": "",
                "key": "",
                "cert": ""
            },
            "mspid": "",
            "ca": "",
            "cloudantaccount": "",
            "cloudantpassword": "",
            "cloudantdb": ""
        };
        console.log("Dashboard :: Constructor Ends ");
    }
    SettingsPage.prototype.retrieveNetworkDetails = function (networkid) {
        var _this = this;
        this.showLoading = true;
        this.consoleService.retrieveNetworkDetails(networkid)
            .then(function (response) {
            console.log("Dashboard :: retrieveNetworkDetails :: ", response);
            _this.showLoading = false;
            if (response.errorCode == 0) {
                console.log("Dashboard :: Valid response :: ", response);
                _this.orgConfigArray = response.networkdetail;
                console.log("Dashboard :: this.orgConfigArray :: ", _this.orgConfigArray);
                if (_this.orgConfigArray && _this.orgConfigArray.length > 0) {
                    console.log("Dashboard :: Assigning default value ");
                    _this.selectedOrg = _this.orgConfigArray[0].orgIdentifier;
                    _this.configuration = _this.orgConfigArray[0];
                }
            }
            else {
                _this.showError = true;
                _this.errorMessage = "No COnfig Available";
            }
        })
            .catch(function (err) {
            _this.showLoading = false;
            console.log("retrieveNetworkBasicDetails() :: err ::", err);
            _this.showError = true;
            _this.errorMessage = "Network Error";
        });
    };
    SettingsPage.prototype.onChangeOrganization = function () {
        console.log("onChangeOrganization() :: selectedOrg ::", this.selectedOrg);
        for (var _i = 0, _a = this.orgConfigArray; _i < _a.length; _i++) {
            var org = _a[_i];
            if (org.orgIdentifier == this.selectedOrg) {
                this.configuration = org;
                break;
            }
        }
    };
    SettingsPage.prototype.ngOnInit = function () {
        this.networkid = this.route.snapshot.paramMap.get('networkid');
        console.log("ngOnInit :: SettingsPage :: networkid :: ", this.networkid);
        this.retrieveNetworkDetails(this.networkid);
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'console-settings',
        template: __webpack_require__(207),
        styles: [__webpack_require__(183)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__["a" /* NewCotrustService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__["a" /* NewCotrustService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], SettingsPage);

var _a, _b, _c;
//# sourceMappingURL=settings.component.js.map

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup; });
/**
 *
Copyright 2018 HCL Technologies

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 *
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Signup = (function () {
    function Signup(router, consoleService, route) {
        this.router = router;
        this.consoleService = consoleService;
        this.route = route;
        this.username = "";
        this.emailid = "";
        this.password = "";
        this.showError = false;
        this.showInfo = false;
        this.errorMessage = "";
        this.showLoading = false;
    }
    Signup.prototype.signUpUser = function () {
        var _this = this;
        this.showInfo = false;
        this.showError = false;
        this.errorMessage = "";
        this.showLoading = true;
        this.consoleService.signUp({
            name: this.username,
            email: this.emailid,
            password: this.password
        }).then(function (response) {
            _this.showLoading = false;
            if (response.errorCode == 0) {
                _this.showInfo = true;
                _this.username = "";
                _this.emailid = "";
                _this.password = "";
                _this.errorMessage = response.msg;
                //this.router.navigate(['/']);  
            }
            else {
                _this.showError = true;
                _this.errorMessage = response.msg;
            }
        }).catch(function (err) {
            _this.showLoading = false;
            _this.showError = true;
            _this.errorMessage = "Network Error";
        });
    };
    return Signup;
}());
Signup = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'signup',
        template: __webpack_require__(209),
        styles: [__webpack_require__(185)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__["a" /* NewCotrustService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__["a" /* NewCotrustService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], Signup);

var _a, _b, _c;
//# sourceMappingURL=signup.component.js.map

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartContractEach; });
/**
 *
Copyright 2018 HCL Technologies

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 *
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SmartContractEach = (function () {
    function SmartContractEach(router, consoleService, route, datePipe) {
        this.router = router;
        this.consoleService = consoleService;
        this.route = route;
        this.datePipe = datePipe;
        this.CONSTANT_STRING = "String";
        this.CONSTANT_NUMBER = "Number";
        this.CONSTANT_BOOLEAN = "Boolean";
        this.viewType = "SmartContract"; // Or ProcessDefinition
        this.process_new_or_update = "new";
        this.smName = "";
        this.smDesc = "";
        this.smartcontractlist = ["Hello World", "Acccount Transafer"];
        this.typeList = [];
        this.typeName = "";
        this.typeDescription = "";
        this.showError = false;
        this.showInfo = false;
        this.errorMessage = "";
        this.showLoading = false;
        this.displayProcess = {};
        this.orginalSmartContract = undefined;
        /******* For All the Dropdowns - STARTS ********/
        this.processDropDownOptions = ["Transaction", "Query"];
        this.inputDropDownOptions = [this.CONSTANT_STRING, this.CONSTANT_NUMBER, this.CONSTANT_BOOLEAN];
        this.variableDropDownOptions = [this.CONSTANT_STRING, this.CONSTANT_NUMBER, this.CONSTANT_BOOLEAN];
        /******* For All the Dropdowns - ENDS ********/
        this.processID = "";
        this.processName = "";
        this.processDesc = "";
        this.processType = this.processDropDownOptions[0];
        this.stepNumber = 1;
        this.processActionOptions = [];
        this.inputName = "";
        this.inputType = this.inputDropDownOptions[0];
        this.variableName = "";
        this.variableType = this.variableDropDownOptions[0];
        this.variableDefault = "";
        this.processList = [];
        this.processActionOptions = [{ action: 'retrieve', actionDesc: 'Retrieve' },
            { action: 'convertToNumber', actionDesc: 'Convert To Number' },
            { action: 'convertToString', actionDesc: 'Convert To String' },
            { action: 'subract', actionDesc: 'Subract' },
            { action: 'add', actionDesc: 'Add' },
            { action: 'staticGreaterThan', actionDesc: 'Greater Than (Static)' },
            { action: 'staticLessThan', actionDesc: 'Less Than (Static)' },
            { action: 'staticEquals', actionDesc: 'Equals (Static)' },
            { action: 'variableGreaterThan', actionDesc: 'Greater Than (Variable)' },
            { action: 'variableLessThan', actionDesc: 'Less Than (Variable)' },
            { action: 'variableEquals', actionDesc: 'Equals (Variable)' },
            { action: 'save', actionDesc: 'Save' }];
    }
    /**
     * Below are the methods for Smart Contract
     */
    SmartContractEach.prototype.saveSmartContract = function () {
        var smartContract = {};
        if (this.orginalSmartContract) {
            smartContract = this.orginalSmartContract;
        }
        smartContract.smName = this.smName;
        smartContract.smDesc = this.smDesc;
        smartContract.processList = this.processList;
        console.log("smartContract :: ", smartContract);
        this.createSmartContract(this.networkid, smartContract);
    };
    /**
     * Below are the methods for Process
     */
    SmartContractEach.prototype.resetProcessFields = function () {
        this.processID = "";
        this.processName = "";
        this.processDesc = "";
        this.processType = this.processDropDownOptions[0];
        this.displayProcess.inputList = [];
        this.displayProcess.variableList = [];
        this.displayProcess.steps = [];
        this.displayProcess.steps.push(this.defaultValueForStep());
        this.displayProcess.returnVariable = "";
        this.displayProcess.returnVariableOption = [];
    };
    SmartContractEach.prototype.addProcess = function () {
        this.viewType = "ProcessDefinition";
        this.process_new_or_update = "new";
        this.resetProcessFields();
    };
    SmartContractEach.prototype.openProcess = function (processID) {
        this.viewType = "ProcessDefinition";
        for (var i = 0; i < this.processList.length; i++) {
            if (this.processList[i].processID === processID) {
                this.processID = processID;
                this.displayProcess.steps = this.processList[i].steps;
                this.displayProcess.inputList = this.processList[i].inputList;
                this.displayProcess.variableList = this.processList[i].variableList;
                this.displayProcess.returnVariable = this.processList[i].returnVariable;
                this.processName = this.processList[i].processName;
                this.processDesc = this.processList[i].processDesc;
                this.processType = this.processList[i].processType;
                this.process_new_or_update = "update";
            }
        }
        this.refreshAllStepOptions();
    };
    SmartContractEach.prototype.saveProcess = function () {
        console.log("saveProcess :: process_new_or_update :: ", this.process_new_or_update, "  :: processList :: ", this.processList);
        if (this.process_new_or_update == "update") {
            this.updateProcess();
        }
        else {
            var finalProcess = {};
            var tmpDate = new Date();
            finalProcess.processID = "PROCESS" + this.networkid + this.datePipe.transform(tmpDate, 'yyyyMMddhhmmssSSS');
            finalProcess.steps = this.displayProcess.steps;
            finalProcess.inputList = this.displayProcess.inputList;
            finalProcess.variableList = this.displayProcess.variableList;
            finalProcess.returnVariable = this.displayProcess.returnVariable;
            finalProcess.processName = this.processName;
            finalProcess.processDesc = this.processDesc;
            finalProcess.processType = this.processType;
            console.log("finalProcess :: ", finalProcess);
            this.processList.push(finalProcess);
        }
        console.log("saveProcess :: process_new_or_update :: ", this.process_new_or_update, "  :: processList :: ", this.processList);
        this.closeProcess();
    };
    SmartContractEach.prototype.updateProcess = function () {
        console.log("updateProcess :: processList :: ", this.processList);
        var newProcessList = [];
        for (var i = 0; i < this.processList.length; i++) {
            console.log("updateProcess :: newProcessList1 :: ", newProcessList);
            if (this.processList[i].processID === this.processID) {
                var finalProcess = {};
                finalProcess.processID = this.processID;
                finalProcess.steps = this.displayProcess.steps;
                finalProcess.inputList = this.displayProcess.inputList;
                finalProcess.variableList = this.displayProcess.variableList;
                finalProcess.returnVariable = this.displayProcess.returnVariable;
                finalProcess.processName = this.processName;
                finalProcess.processDesc = this.processDesc;
                finalProcess.processType = this.processType;
                newProcessList.push(finalProcess);
            }
            else {
                newProcessList.push(this.processList[i]);
            }
            console.log("updateProcess :: newProcessList2 :: ", newProcessList);
        }
        this.processList = newProcessList;
    };
    SmartContractEach.prototype.closeProcess = function () {
        this.viewType = "SmartContract";
        this.resetProcessFields();
    };
    /**
     * Actions and related methods
     */
    SmartContractEach.prototype.defaultValueForStep = function () {
        var defalutStepValues = {};
        defalutStepValues.stepNumber = this.stepNumber;
        defalutStepValues.action = this.processActionOptions[0].action;
        defalutStepValues.actionRetrieve = {};
        defalutStepValues.actionRetrieve.referenceName = "";
        defalutStepValues.actionRetrieve.referenceNameOption = this.optionsForRetrieveAction();
        if (defalutStepValues.actionRetrieve.referenceNameOption[0]) {
            defalutStepValues.actionRetrieve.referenceName = defalutStepValues.actionRetrieve.referenceNameOption[0];
        }
        defalutStepValues.actionRetrieve.assignToVariable = "";
        defalutStepValues.actionRetrieve.assignToVariableOption = this.optionsForRetrieveAction();
        if (defalutStepValues.actionRetrieve.assignToVariableOption[0]) {
            defalutStepValues.actionRetrieve.assignToVariable = defalutStepValues.actionRetrieve.assignToVariableOption[0];
        }
        /******************** Convert To Number **********************************************/
        defalutStepValues.actionConvertToNumber = {};
        defalutStepValues.actionConvertToNumber.convertVariable = "";
        defalutStepValues.actionConvertToNumber.convertVariableOption = this.optionsForRetrieveAction();
        console.log("defalutStepValues.actionConvertToNumber.convertVariableOption :: ", defalutStepValues.actionConvertToNumber.convertVariableOption);
        if (defalutStepValues.actionConvertToNumber.convertVariableOption[0]) {
            defalutStepValues.actionConvertToNumber.convertVariable = defalutStepValues.actionConvertToNumber.convertVariableOption[0];
        }
        defalutStepValues.actionConvertToNumber.assignToVariable = "";
        defalutStepValues.actionConvertToNumber.assignToVariableOption = this.optionsForSubractAction();
        if (defalutStepValues.actionConvertToNumber.assignToVariableOption[0]) {
            defalutStepValues.actionConvertToNumber.assignToVariable = defalutStepValues.actionConvertToNumber.assignToVariableOption[0];
        }
        /******************** Convert To String **********************************************/
        defalutStepValues.actionConvertToString = {};
        defalutStepValues.actionConvertToString.convertVariable = "";
        defalutStepValues.actionConvertToString.convertVariableOption = this.optionsForSubractAction();
        if (defalutStepValues.actionConvertToString.convertVariableOption[0]) {
            defalutStepValues.actionConvertToString.convertVariable = defalutStepValues.actionConvertToString.convertVariableOption[0];
        }
        defalutStepValues.actionConvertToString.assignToVariable = "";
        defalutStepValues.actionConvertToString.assignToVariableOption = this.optionsForRetrieveAction();
        if (defalutStepValues.actionConvertToString.assignToVariableOption[0]) {
            defalutStepValues.actionConvertToString.assignToVariable = defalutStepValues.actionConvertToString.assignToVariableOption[0];
        }
        /******************** Subraction **********************************************/
        defalutStepValues.actionSubract = {};
        defalutStepValues.actionSubract.finalvariable = "";
        defalutStepValues.actionSubract.finalvariableOption = this.optionsForSubractAction();
        if (defalutStepValues.actionSubract.finalvariableOption[0]) {
            defalutStepValues.actionSubract.finalvariable = defalutStepValues.actionSubract.finalvariableOption[0];
        }
        defalutStepValues.actionSubract.l1variable = "";
        defalutStepValues.actionSubract.l1variableOption = this.optionsForSubractAction();
        if (defalutStepValues.actionSubract.l1variableOption[0]) {
            defalutStepValues.actionSubract.l1variable = defalutStepValues.actionSubract.l1variableOption[0];
        }
        defalutStepValues.actionSubract.l2variable = "";
        defalutStepValues.actionSubract.l2variableOption = this.optionsForSubractAction();
        if (defalutStepValues.actionSubract.l2variableOption[0]) {
            defalutStepValues.actionSubract.l2variable = defalutStepValues.actionSubract.l2variableOption[0];
        }
        /***************** Addition *************************************************/
        defalutStepValues.actionAddition = {};
        defalutStepValues.actionAddition.finalvariable = "";
        defalutStepValues.actionAddition.finalvariableOption = this.optionsForSubractAction();
        if (defalutStepValues.actionAddition.finalvariableOption[0]) {
            defalutStepValues.actionAddition.finalvariable = defalutStepValues.actionAddition.finalvariableOption[0];
        }
        defalutStepValues.actionAddition.l1variable = "";
        defalutStepValues.actionAddition.l1variableOption = this.optionsForSubractAction();
        if (defalutStepValues.actionAddition.l1variableOption[0]) {
            defalutStepValues.actionAddition.l1variable = defalutStepValues.actionAddition.l1variableOption[0];
        }
        defalutStepValues.actionAddition.l2variable = "";
        defalutStepValues.actionAddition.l2variableOption = this.optionsForSubractAction();
        if (defalutStepValues.actionAddition.l2variableOption[0]) {
            defalutStepValues.actionAddition.l2variable = defalutStepValues.actionAddition.l2variableOption[0];
        }
        /***************** Greater Than Static *************************************************/
        defalutStepValues.actionGreaterThanStatic = {};
        defalutStepValues.actionGreaterThanStatic.comparisonVariable = "";
        defalutStepValues.actionGreaterThanStatic.comparisonVariableOption = this.optionsForSubractAction();
        if (defalutStepValues.actionGreaterThanStatic.comparisonVariableOption[0]) {
            defalutStepValues.actionGreaterThanStatic.comparisonVariable = defalutStepValues.actionGreaterThanStatic.comparisonVariableOption[0];
        }
        defalutStepValues.actionGreaterThanStatic.comparisonStaticValue = "0";
        /***************** Less Than Static *************************************************/
        defalutStepValues.actionLessThanStatic = {};
        defalutStepValues.actionLessThanStatic.comparisonVariable = "";
        defalutStepValues.actionLessThanStatic.comparisonVariableOption = this.optionsForSubractAction();
        if (defalutStepValues.actionLessThanStatic.comparisonVariableOption[0]) {
            defalutStepValues.actionLessThanStatic.comparisonVariable = defalutStepValues.actionLessThanStatic.comparisonVariableOption[0];
        }
        defalutStepValues.actionLessThanStatic.comparisonStaticValue = "0";
        defalutStepValues.actionLessThanStatic.thenCondition = "0";
        /***************** Save *************************************************/
        defalutStepValues.actionSave = {};
        defalutStepValues.actionSave.referenceName = "";
        defalutStepValues.actionSave.referenceNameOption = this.optionsForRetrieveAction();
        if (defalutStepValues.actionSave.referenceNameOption[0]) {
            defalutStepValues.actionSave.referenceName = defalutStepValues.actionSave.referenceNameOption[0];
        }
        defalutStepValues.actionSave.valueVariable = "";
        defalutStepValues.actionSave.valueVariableOption = this.optionsForRetrieveAction();
        if (defalutStepValues.actionSave.valueVariableOption[0]) {
            defalutStepValues.actionSave.valueVariable = defalutStepValues.actionSave.valueVariableOption[0];
        }
        return defalutStepValues;
    };
    SmartContractEach.prototype.optionsForSubractAction = function () {
        var referenceNameOption = [];
        for (var _i = 0, _a = this.displayProcess.inputList; _i < _a.length; _i++) {
            var inputOpt = _a[_i];
            if (inputOpt.type == this.CONSTANT_NUMBER) {
                referenceNameOption.push({
                    name: inputOpt.name,
                    type: inputOpt.type
                });
            }
        }
        for (var _b = 0, _c = this.displayProcess.variableList; _b < _c.length; _b++) {
            var variableOpt = _c[_b];
            if (variableOpt.type == this.CONSTANT_NUMBER) {
                referenceNameOption.push({
                    name: variableOpt.name,
                    type: variableOpt.type
                });
            }
        }
        console.log("optionsForSubractAction :: referenceNameOption :: ", referenceNameOption);
        return referenceNameOption;
    };
    SmartContractEach.prototype.optionsForRetrieveAction = function () {
        var referenceNameOption = [];
        for (var _i = 0, _a = this.displayProcess.inputList; _i < _a.length; _i++) {
            var inputOpt = _a[_i];
            if (inputOpt.type == this.CONSTANT_STRING) {
                referenceNameOption.push({
                    name: inputOpt.name,
                    type: inputOpt.type
                });
            }
        }
        for (var _b = 0, _c = this.displayProcess.variableList; _b < _c.length; _b++) {
            var variableOpt = _c[_b];
            if (variableOpt.type == this.CONSTANT_STRING) {
                referenceNameOption.push({
                    name: variableOpt.name,
                    type: variableOpt.type
                });
            }
        }
        return referenceNameOption;
    };
    SmartContractEach.prototype.refreshAllStepOptions = function () {
        for (var i = 0; i < this.displayProcess.steps.length; i++) {
            this.displayProcess.steps[i].actionRetrieve.referenceNameOption = this.optionsForRetrieveAction();
            if (this.displayProcess.steps[i].actionRetrieve.referenceNameOption.length == 1) {
                this.displayProcess.steps[i].actionRetrieve.referenceName = this.displayProcess.steps[i].actionRetrieve.referenceNameOption[0].name;
            }
            this.displayProcess.steps[i].actionRetrieve.assignToVariableOption = this.optionsForRetrieveAction();
            if (this.displayProcess.steps[i].actionRetrieve.assignToVariableOption.length == 1) {
                this.displayProcess.steps[i].actionRetrieve.assignToVariable = this.displayProcess.steps[i].actionRetrieve.assignToVariableOption[0].name;
            }
            this.displayProcess.steps[i].actionSubract.finalvariableOption = this.optionsForSubractAction();
            if (this.displayProcess.steps[i].actionSubract.finalvariableOption.length == 1) {
                this.displayProcess.steps[i].actionSubract.finalvariable = this.displayProcess.steps[i].actionSubract.finalvariableOption[0].name;
            }
            this.displayProcess.steps[i].actionSubract.l1variableOption = this.optionsForSubractAction();
            if (this.displayProcess.steps[i].actionSubract.l1variableOption.length == 1) {
                this.displayProcess.steps[i].actionSubract.l1variable = this.displayProcess.steps[i].actionSubract.l1variableOption[0].name;
            }
            this.displayProcess.steps[i].actionSubract.l2variableOption = this.optionsForSubractAction();
            if (this.displayProcess.steps[i].actionSubract.l2variableOption.length == 1) {
                this.displayProcess.steps[i].actionSubract.l2variable = this.displayProcess.steps[i].actionSubract.l2variableOption[0].name;
            }
            this.displayProcess.steps[i].actionAddition.finalvariableOption = this.optionsForSubractAction();
            if (this.displayProcess.steps[i].actionAddition.finalvariableOption.length == 1) {
                this.displayProcess.steps[i].actionAddition.finalvariable = this.displayProcess.steps[i].actionAddition.finalvariableOption[0].name;
            }
            this.displayProcess.steps[i].actionAddition.l1variableOption = this.optionsForSubractAction();
            if (this.displayProcess.steps[i].actionAddition.l1variableOption.length == 1) {
                this.displayProcess.steps[i].actionAddition.l1variable = this.displayProcess.steps[i].actionAddition.l1variableOption[0].name;
            }
            this.displayProcess.steps[i].actionAddition.l2variableOption = this.optionsForSubractAction();
            if (this.displayProcess.steps[i].actionAddition.l2variableOption.length == 1) {
                this.displayProcess.steps[i].actionAddition.l2variable = this.displayProcess.steps[i].actionAddition.l2variableOption[0].name;
            }
            this.displayProcess.steps[i].actionGreaterThanStatic.comparisonVariableOption = this.optionsForSubractAction();
            if (this.displayProcess.steps[i].actionGreaterThanStatic.comparisonVariableOption.length == 1) {
                this.displayProcess.steps[i].actionGreaterThanStatic.comparisonVariable = this.displayProcess.steps[i].actionGreaterThanStatic.comparisonVariableOption[0].name;
            }
            this.displayProcess.steps[i].actionLessThanStatic.comparisonVariableOption = this.optionsForSubractAction();
            if (this.displayProcess.steps[i].actionLessThanStatic.comparisonVariableOption.length == 1) {
                this.displayProcess.steps[i].actionLessThanStatic.comparisonVariable = this.displayProcess.steps[i].actionLessThanStatic.comparisonVariableOption[0].name;
            }
            this.displayProcess.steps[i].actionSave.referenceNameOption = this.optionsForRetrieveAction();
            if (this.displayProcess.steps[i].actionSave.referenceNameOption.length == 1) {
                this.displayProcess.steps[i].actionSave.referenceName = this.displayProcess.steps[i].actionSave.referenceNameOption[0].name;
            }
            this.displayProcess.steps[i].actionSave.valueVariableOption = this.optionsForRetrieveAction();
            if (this.displayProcess.steps[i].actionSave.valueVariableOption.length == 1) {
                this.displayProcess.steps[i].actionSave.valueVariable = this.displayProcess.steps[i].actionSave.valueVariableOption[0].name;
            }
            this.displayProcess.steps[i].actionConvertToNumber.convertVariableOption = this.optionsForRetrieveAction();
            if (this.displayProcess.steps[i].actionConvertToNumber.convertVariableOption.length == 1) {
                this.displayProcess.steps[i].actionConvertToNumber.convertVariable = this.displayProcess.steps[i].actionConvertToNumber.convertVariableOption[0].name;
            }
            this.displayProcess.steps[i].actionConvertToNumber.assignToVariableOption = this.optionsForSubractAction();
            if (this.displayProcess.steps[i].actionConvertToNumber.assignToVariableOption.length == 1) {
                this.displayProcess.steps[i].actionConvertToNumber.assignToVariable = this.displayProcess.steps[i].actionConvertToNumber.assignToVariableOption[0].name;
            }
            this.displayProcess.steps[i].actionConvertToString.convertVariableOption = this.optionsForSubractAction();
            if (this.displayProcess.steps[i].actionConvertToString.convertVariableOption.length == 1) {
                this.displayProcess.steps[i].actionConvertToString.convertVariable = this.displayProcess.steps[i].actionConvertToString.convertVariableOption[0].name;
            }
            this.displayProcess.steps[i].actionConvertToString.assignToVariableOption = this.optionsForRetrieveAction();
            if (this.displayProcess.steps[i].actionConvertToString.assignToVariableOption.length == 1) {
                this.displayProcess.steps[i].actionConvertToString.assignToVariable = this.displayProcess.steps[i].actionConvertToString.assignToVariableOption[0].name;
            }
        }
        this.displayProcess.returnVariableOption = [];
        for (var i = 0; i < this.displayProcess.inputList.length; i++) {
            this.displayProcess.returnVariableOption.push(this.displayProcess.inputList[i]);
        }
        for (var i = 0; i < this.displayProcess.variableList.length; i++) {
            this.displayProcess.returnVariableOption.push(this.displayProcess.variableList[i]);
        }
    };
    SmartContractEach.prototype.addStep = function () {
        this.stepNumber = this.stepNumber + 1;
        this.displayProcess.steps.push(this.defaultValueForStep());
    };
    SmartContractEach.prototype.addInput = function () {
        if (this.inputName.trim() != "") {
            this.displayProcess.inputList.push({
                name: this.inputName,
                type: this.inputType
            });
        }
        this.inputName = "";
        this.refreshAllStepOptions();
    };
    SmartContractEach.prototype.addVariable = function () {
        if (this.variableName.trim() != "") {
            this.displayProcess.variableList.push({
                name: this.variableName,
                type: this.variableType,
                default: this.variableDefault
            });
        }
        this.variableName = "";
        this.variableDefault = "";
        this.refreshAllStepOptions();
    };
    SmartContractEach.prototype.createSmartContract = function (networkid, smartContract) {
        var _this = this;
        this.showLoading = true;
        this.showInfo = false;
        this.showError = false;
        this.consoleService.createSmartContract(networkid, smartContract)
            .then(function (response) {
            _this.showLoading = false;
            console.log("createSmartCont() :: response ::", response);
            _this.router.navigate(['/smartcontract/' + _this.networkid]);
        })
            .catch(function (err) {
            _this.showLoading = false;
            console.log("retrieveAllType() :: err ::", err);
            _this.showInfo = false;
            _this.showError = true;
            _this.errorMessage = "Network Error";
        });
    };
    SmartContractEach.prototype.retrieveSmartContract = function () {
        var _this = this;
        this.smartcontractlist = [];
        this.showLoading = true;
        this.showInfo = false;
        this.showError = false;
        this.consoleService.retrieveSmartContract(this.networkid, this.smartcontractid)
            .then(function (response) {
            _this.showLoading = false;
            console.log("retrieveSmartContract() :: response ::", response);
            if (response.errorCode == 0) {
                _this.orginalSmartContract = response.smartcontract;
                _this.smName = response.smartcontract.smName;
                _this.smDesc = response.smartcontract.smDesc;
                _this.processList = response.smartcontract.processList;
            }
            else {
                _this.showInfo = false;
                _this.showError = true;
                _this.errorMessage = "No Data found";
            }
        })
            .catch(function (err) {
            _this.showLoading = false;
            console.log("retrieveSmartContract() :: err ::", err);
            _this.showInfo = false;
            _this.showError = true;
            _this.errorMessage = "Network Error";
        });
    };
    SmartContractEach.prototype.ngOnInit = function () {
        this.networkid = this.route.snapshot.paramMap.get('networkid');
        this.smartcontractid = this.route.snapshot.paramMap.get('smartcontractid');
        console.log("ngOnInit :: SmartContract :: networkid :: ", this.networkid, " :: smartcontractid :: ", this.smartcontractid);
        this.resetProcessFields();
        if (this.smartcontractid && this.smartcontractid != "") {
            this.retrieveSmartContract();
        }
    };
    return SmartContractEach;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('networkid'),
    __metadata("design:type", Object)
], SmartContractEach.prototype, "networkid", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('smartcontractid'),
    __metadata("design:type", Object)
], SmartContractEach.prototype, "smartcontractid", void 0);
SmartContractEach = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'smartcontracteach',
        template: __webpack_require__(210),
        styles: [__webpack_require__(186)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__["a" /* NewCotrustService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__["a" /* NewCotrustService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["a" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["a" /* DatePipe */]) === "function" && _d || Object])
], SmartContractEach);

var _a, _b, _c, _d;
//# sourceMappingURL=smartcontracteach.component.js.map

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivateKeyUploadPage; });
/**
 *
Copyright 2018 HCL Technologies

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 *
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PrivateKeyUploadPage = (function () {
    function PrivateKeyUploadPage(router, consoleService, route) {
        this.router = router;
        this.consoleService = consoleService;
        this.route = route;
        this.showLoading = false;
        this.showError = false;
        this.showInfo = false;
        this.errorMessage = "";
        this.configArray = [];
        this.newFileName = "";
        this.newFileContent = "";
        this.selectedFolder = "";
        console.log("PrivateKeyUploadPage :: Constructor Ends ");
    }
    PrivateKeyUploadPage.prototype.ngOnInit = function () {
        this.networkid = this.route.snapshot.paramMap.get('networkid');
        console.log("ngOnInit :: SettingsPage :: networkid :: ", this.networkid);
        this.retrievePrivateKeyDetailsForUser();
    };
    PrivateKeyUploadPage.prototype.retrievePrivateKeyDetailsForUser = function () {
        var _this = this;
        this.showLoading = true;
        var userEmail = this.consoleService.loginUserEmail();
        this.consoleService.retrievePrivateKeyDetailsForUser(userEmail)
            .then(function (response) {
            console.log("Dashboard :: retrievePrivateKeyDetailsForUser :: ", response);
            _this.showLoading = false;
            if (response.errorCode == 1) {
                console.log("Dashboard :: Valid response :: ", response.msg);
                _this.configArray = response.msg;
            }
            else {
                _this.showError = true;
                _this.errorMessage = "No Network Available";
            }
        })
            .catch(function (err) {
            _this.showLoading = false;
            console.log("retrieveNetworkBasicDetails() :: err ::", err);
            _this.showError = true;
            _this.errorMessage = "Network Error";
        });
    };
    PrivateKeyUploadPage.prototype.fileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file_1 = event.target.files[0];
            console.log("file :: ", file_1);
            reader.readAsDataURL(file_1);
            reader.onload = function () {
                console.log("reader :: ", reader);
                // console.log("reader Data :: ",reader.result.split(',')[1])
                _this.newFileName = file_1.name;
                _this.newFileContent = reader.result.split(',')[1];
            };
        }
    };
    PrivateKeyUploadPage.prototype.uploadFile = function () {
        var _this = this;
        this.showLoading = true;
        this.consoleService.uploadPrivateKey({
            "networkId": this.networkid,
            "folderName": this.selectedFolder,
            "filename": this.newFileName,
            "filecontent": this.newFileContent
        })
            .then(function (response) {
            _this.showError = false;
            if (response && response.errorCode == 0) {
                // this.showLoading = false;
                _this.showInfo = true;
                _this.errorMessage = "File uploaded successfully please wait redirecting to dashboard...";
                setTimeout(function () {
                    _this.router.navigate(['/dashboard', _this.networkid]);
                }, 3000);
            }
            else {
                _this.showLoading = false;
                _this.showError = true;
                _this.errorMessage = "Error in uploading file.";
                console.log(response);
            }
        })
            .catch(function (err) {
            _this.showLoading = false;
            _this.showError = true;
            console.log("retrieveNetworkBasicDetails() :: err ::", err);
            _this.errorMessage = "Network Error";
        });
    };
    return PrivateKeyUploadPage;
}());
PrivateKeyUploadPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'uploadprivatekey',
        template: __webpack_require__(212),
        styles: [__webpack_require__(188)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__["a" /* NewCotrustService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__["a" /* NewCotrustService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], PrivateKeyUploadPage);

var _a, _b, _c;
//# sourceMappingURL=uploadprivatekey.component.js.map

/***/ }),
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 104;


/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(116);
/**
 *
Copyright 2018 HCL Technologies

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 *
 *
 */




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_login_login_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_dashboard_dashboard_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_signup_signup_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_settings_settings_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_channelpage_channelpage_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_apipage_apipage_component__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_CotrustAuth_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_blocksview_blocksview_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_confirmmail_confirmmail_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_approveusers_approveusers_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__views_resetpassword_resetpassword_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_forgotpassword_forgotpassword_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__views_createtype_createtype_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__views_processdefinition_processdefinition_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__views_smartcontracteach_smartcontracteach_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_views_uploadprivatekey_uploadprivatekey_component__ = __webpack_require__(75);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/**
 *
Copyright 2018 HCL Technologies

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 *
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    { path: '', redirectTo: '/approveusers', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__views_login_login_component__["a" /* Login */] },
    { path: 'keyuploadpage/:networkid', component: __WEBPACK_IMPORTED_MODULE_17_views_uploadprivatekey_uploadprivatekey_component__["a" /* PrivateKeyUploadPage */] },
    { path: 'confirmmail/:confirmMailToken', component: __WEBPACK_IMPORTED_MODULE_10__views_confirmmail_confirmmail_component__["a" /* ConfirmMail */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_4__views_signup_signup_component__["a" /* Signup */] },
    { path: 'forgotpassword', component: __WEBPACK_IMPORTED_MODULE_13__views_forgotpassword_forgotpassword_component__["a" /* ForgotPassword */] },
    { path: 'resetpassword', component: __WEBPACK_IMPORTED_MODULE_12__views_resetpassword_resetpassword_component__["a" /* ResetPassword */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_CotrustAuth_service__["a" /* CotrustAuthService */]] },
    { path: 'dashboard/:networkid', component: __WEBPACK_IMPORTED_MODULE_3__views_dashboard_dashboard_component__["a" /* Dashboard */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_CotrustAuth_service__["a" /* CotrustAuthService */]] },
    { path: 'settings/:networkid', component: __WEBPACK_IMPORTED_MODULE_5__views_settings_settings_component__["a" /* SettingsPage */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_CotrustAuth_service__["a" /* CotrustAuthService */]] },
    { path: 'channels/:networkid', component: __WEBPACK_IMPORTED_MODULE_6__views_channelpage_channelpage_component__["a" /* ChannelPage */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_CotrustAuth_service__["a" /* CotrustAuthService */]] },
    { path: 'apipage/:networkid', component: __WEBPACK_IMPORTED_MODULE_7__views_apipage_apipage_component__["a" /* APIPage */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_CotrustAuth_service__["a" /* CotrustAuthService */]] },
    { path: 'blocksview/:networkid', component: __WEBPACK_IMPORTED_MODULE_9__views_blocksview_blocksview_component__["a" /* BlocksView */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_CotrustAuth_service__["a" /* CotrustAuthService */]] },
    { path: 'approveusers', component: __WEBPACK_IMPORTED_MODULE_11__views_approveusers_approveusers_component__["a" /* ApproveUsers */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_CotrustAuth_service__["a" /* CotrustAuthService */]] },
    { path: 'createtype/:networkid', component: __WEBPACK_IMPORTED_MODULE_14__views_createtype_createtype_component__["a" /* CreateType */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_CotrustAuth_service__["a" /* CotrustAuthService */]] },
    { path: 'createtype/:networkid/:typeid', component: __WEBPACK_IMPORTED_MODULE_14__views_createtype_createtype_component__["a" /* CreateType */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_CotrustAuth_service__["a" /* CotrustAuthService */]] },
    { path: 'processdefinition/:networkid', component: __WEBPACK_IMPORTED_MODULE_15__views_processdefinition_processdefinition_component__["a" /* ProcessDefinition */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_CotrustAuth_service__["a" /* CotrustAuthService */]] },
    { path: 'smartcontracteach/:networkid', component: __WEBPACK_IMPORTED_MODULE_16__views_smartcontracteach_smartcontracteach_component__["a" /* SmartContractEach */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_CotrustAuth_service__["a" /* CotrustAuthService */]] },
    { path: 'smartcontracteach/:networkid/:smartcontractid', component: __WEBPACK_IMPORTED_MODULE_16__views_smartcontracteach_smartcontracteach_component__["a" /* SmartContractEach */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_CotrustAuth_service__["a" /* CotrustAuthService */]] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/**
 *
Copyright 2018 HCL Technologies

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 *
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(189),
        styles: [__webpack_require__(165)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_title_bar_titlebar_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_page_title_pagetitle_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_footer_bar_footerbar_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_newconsole_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__views_login_login_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_dashboard_dashboard_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__views_menubar_menubar_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_header_header_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__views_notificationbar_notificationbar_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__views_sidebar_sidebar_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__views_signup_signup_component__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__views_settings_settings_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__views_channelpage_channelpage_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__views_apipage_apipage_component__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular_2_local_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_CotrustAuth_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__views_loader_loader_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__views_blocksview_blocksview_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__views_confirmmail_confirmmail_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__views_approveusers_approveusers_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__views_resetpassword_resetpassword_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__views_forgotpassword_forgotpassword_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__views_createtype_createtype_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__views_processdefinition_processdefinition_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__views_smartcontracteach_smartcontracteach_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_common__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_views_uploadprivatekey_uploadprivatekey_component__ = __webpack_require__(75);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/**
 *
Copyright 2018 HCL Technologies

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 *
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__views_title_bar_titlebar_component__["a" /* TitleBar */],
            __WEBPACK_IMPORTED_MODULE_7__views_page_title_pagetitle_component__["a" /* PageTitle */],
            __WEBPACK_IMPORTED_MODULE_8__views_footer_bar_footerbar_component__["a" /* FooterBar */],
            __WEBPACK_IMPORTED_MODULE_10__views_login_login_component__["a" /* Login */],
            __WEBPACK_IMPORTED_MODULE_32_views_uploadprivatekey_uploadprivatekey_component__["a" /* PrivateKeyUploadPage */],
            __WEBPACK_IMPORTED_MODULE_24__views_confirmmail_confirmmail_component__["a" /* ConfirmMail */],
            __WEBPACK_IMPORTED_MODULE_25__views_approveusers_approveusers_component__["a" /* ApproveUsers */],
            __WEBPACK_IMPORTED_MODULE_11__views_dashboard_dashboard_component__["a" /* Dashboard */],
            __WEBPACK_IMPORTED_MODULE_12__views_menubar_menubar_component__["a" /* MenuBar */],
            __WEBPACK_IMPORTED_MODULE_13__views_header_header_component__["a" /* HeaderBar */],
            __WEBPACK_IMPORTED_MODULE_14__views_notificationbar_notificationbar_component__["a" /* NotificationbarBar */],
            __WEBPACK_IMPORTED_MODULE_15__views_sidebar_sidebar_component__["a" /* Sidebar */],
            __WEBPACK_IMPORTED_MODULE_16__views_signup_signup_component__["a" /* Signup */],
            __WEBPACK_IMPORTED_MODULE_17__views_settings_settings_component__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_18__views_channelpage_channelpage_component__["a" /* ChannelPage */],
            __WEBPACK_IMPORTED_MODULE_19__views_apipage_apipage_component__["a" /* APIPage */],
            __WEBPACK_IMPORTED_MODULE_22__views_loader_loader_component__["a" /* BCLoader */],
            __WEBPACK_IMPORTED_MODULE_23__views_blocksview_blocksview_component__["a" /* BlocksView */],
            __WEBPACK_IMPORTED_MODULE_26__views_resetpassword_resetpassword_component__["a" /* ResetPassword */],
            __WEBPACK_IMPORTED_MODULE_27__views_forgotpassword_forgotpassword_component__["a" /* ForgotPassword */],
            __WEBPACK_IMPORTED_MODULE_28__views_createtype_createtype_component__["a" /* CreateType */],
            __WEBPACK_IMPORTED_MODULE_29__views_processdefinition_processdefinition_component__["a" /* ProcessDefinition */],
            __WEBPACK_IMPORTED_MODULE_30__views_smartcontracteach_smartcontracteach_component__["a" /* SmartContractEach */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_20_angular_2_local_storage__["LocalStorageModule"].withConfig({
                prefix: 'blockchain-console-localdb',
                storageType: 'localStorage'
            })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__services_newconsole_service__["a" /* NewCotrustService */],
            __WEBPACK_IMPORTED_MODULE_21__services_CotrustAuth_service__["a" /* CotrustAuthService */],
            __WEBPACK_IMPORTED_MODULE_31__angular_common__["a" /* DatePipe */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment_dev__ = __webpack_require__(115);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsoleConfig; });

var ConsoleConfig = (function () {
    function ConsoleConfig() {
    }
    return ConsoleConfig;
}());

//public static readonly HOST_URL  : string = 'https://hyperledger-console-service.mybluemix.net/';
//public static readonly HOST_URL  : string = 'https://blockchain-console.azurewebsites.net/';
ConsoleConfig.HOST_URL = __WEBPACK_IMPORTED_MODULE_0__environments_environment_dev__["a" /* default */].apiUrl; //'https://cotrust-blockchain-console.mybluemix.net/';
//# sourceMappingURL=console-config.js.map

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: '/api-v1/'
};
/* harmony default export */ __webpack_exports__["a"] = environment;
//# sourceMappingURL=environment.dev.js.map

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiUrl: '/api-v1/'
};
//# sourceMappingURL=environment.js.map

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterBar; });
/**
 *
Copyright 2018 HCL Technologies

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 *
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterBar = (function () {
    function FooterBar(route) {
        this.route = route;
    }
    return FooterBar;
}());
FooterBar = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'footer-bar',
        template: __webpack_require__(197),
        styles: [__webpack_require__(173)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], FooterBar);

var _a;
//# sourceMappingURL=footerbar.component.js.map

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderBar; });
/**
 *
Copyright 2018 HCL Technologies

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 *
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderBar = (function () {
    function HeaderBar(route) {
        this.route = route;
    }
    return HeaderBar;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('title'),
    __metadata("design:type", Object)
], HeaderBar.prototype, "title", void 0);
HeaderBar = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'header-bar',
        template: __webpack_require__(199),
        styles: [__webpack_require__(175)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], HeaderBar);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BCLoader; });
/**
 *
Copyright 2018 HCL Technologies

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 *
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BCLoader = (function () {
    function BCLoader(route) {
        this.route = route;
    }
    return BCLoader;
}());
BCLoader = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'bcloader',
        template: __webpack_require__(200),
        styles: [__webpack_require__(176)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], BCLoader);

var _a;
//# sourceMappingURL=loader.component.js.map

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuBar; });
/**
 *
Copyright 2018 HCL Technologies

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 *
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuBar = (function () {
    function MenuBar(route) {
        this.route = route;
    }
    return MenuBar;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('showsidebar'),
    __metadata("design:type", Object)
], MenuBar.prototype, "showsidebar", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('shownotificationbar'),
    __metadata("design:type", Object)
], MenuBar.prototype, "shownotificationbar", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('networkid'),
    __metadata("design:type", Object)
], MenuBar.prototype, "networkid", void 0);
MenuBar = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'menubar',
        template: __webpack_require__(202),
        styles: [__webpack_require__(178)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], MenuBar);

var _a;
//# sourceMappingURL=menubar.component.js.map

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationbarBar; });
/**
 *
Copyright 2018 HCL Technologies

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 *
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotificationbarBar = (function () {
    function NotificationbarBar(router, consoleService, route) {
        this.router = router;
        this.consoleService = consoleService;
        this.route = route;
        this.loginUserName = "";
        this.loginUserName = consoleService.loginUserName();
    }
    NotificationbarBar.prototype.onClickLogout = function () {
        this.consoleService.logout();
    };
    return NotificationbarBar;
}());
NotificationbarBar = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'notificationbar-bar',
        template: __webpack_require__(203),
        styles: [__webpack_require__(179)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__["a" /* NewCotrustService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_newconsole_service__["a" /* NewCotrustService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], NotificationbarBar);

var _a, _b, _c;
//# sourceMappingURL=notificationbar.component.js.map

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageTitle; });
/**
 *
Copyright 2018 HCL Technologies

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 *
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageTitle = (function () {
    function PageTitle(route) {
        this.route = route;
    }
    return PageTitle;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('title'),
    __metadata("design:type", Object)
], PageTitle.prototype, "title", void 0);
PageTitle = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-title',
        template: __webpack_require__(204),
        styles: [__webpack_require__(180)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], PageTitle);

var _a;
//# sourceMappingURL=pagetitle.component.js.map

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sidebar; });
/**
 *
Copyright 2018 HCL Technologies

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 *
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Sidebar = (function () {
    function Sidebar(route) {
        this.route = route;
    }
    return Sidebar;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('networkid'),
    __metadata("design:type", Object)
], Sidebar.prototype, "networkid", void 0);
Sidebar = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sidebar',
        template: __webpack_require__(208),
        styles: [__webpack_require__(184)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], Sidebar);

var _a;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleBar; });
/**
 *
Copyright 2018 HCL Technologies

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 *
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TitleBar = (function () {
    function TitleBar(route) {
        this.route = route;
    }
    return TitleBar;
}());
TitleBar = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'title-bar',
        template: __webpack_require__(211),
        styles: [__webpack_require__(187)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], TitleBar);

var _a;
//# sourceMappingURL=titlebar.component.js.map

/***/ }),
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "app-root {\r\n    background-color: rgb(232,230,227);\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "label {\r\n    padding-top:7px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "label {\r\n    padding-top:7px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".footer-bar {\r\n    font-size: 10px;\r\n    margin-top:75px;\r\n}\r\n\r\n.footer-bar p {\r\n    padding-left: 50px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".small-dashboard-box {\r\n    font-size:16px;\r\n}\r\n\r\n.small-dashboard-box-number {\r\n    font-size:20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".footer-bar {\r\n    font-size: 10px;\r\n    margin-top:75px;\r\n}\r\n\r\n.footer-bar p {\r\n    padding-left: 50px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "h4 {\r\n    background-color: rgba(51, 122, 184, 0.49);\r\n    padding: 6px;\r\n    border-radius: 3px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".hc-page-title {\r\n    padding-left:30px;\r\n    padding-right:30px;\r\n    margin-bottom:50px;\r\n    padding-top:20px; \r\n    background-color:#f3f0f0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".cssload-loader {\r\n\tdisplay: block;\r\n\tmargin:0 auto;\r\n\twidth: 29px;\r\n\theight: 29px;\r\n\tposition: relative;\r\n\tborder: 4px solid rgba(0,101,179,0.98);\r\n\tanimation: cssload-loader 2.3s infinite ease;\r\n\t\t-o-animation: cssload-loader 2.3s infinite ease;\r\n\t\t-ms-animation: cssload-loader 2.3s infinite ease;\r\n\t\t-webkit-animation: cssload-loader 2.3s infinite ease;\r\n\t\t-moz-animation: cssload-loader 2.3s infinite ease;\r\n}\r\n\r\n.cssload-loader-inner {\r\n\tvertical-align: top;\r\n\tdisplay: inline-block;\r\n\twidth: 100%;\r\n\tbackground-color: rgb(0,101,179);\r\n\tanimation: cssload-loader-inner 2.3s infinite ease-in;\r\n\t\t-o-animation: cssload-loader-inner 2.3s infinite ease-in;\r\n\t\t-ms-animation: cssload-loader-inner 2.3s infinite ease-in;\r\n\t\t-webkit-animation: cssload-loader-inner 2.3s infinite ease-in;\r\n\t\t-moz-animation: cssload-loader-inner 2.3s infinite ease-in;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n@keyframes cssload-loader {\r\n\t0% {\r\n\t\ttransform: rotate(0deg);\r\n\t}\r\n\t\r\n\t25% {\r\n\t\ttransform: rotate(180deg);\r\n\t}\r\n\t\r\n\t50% {\r\n\t\ttransform: rotate(180deg);\r\n\t}\r\n\t\r\n\t75% {\r\n\t\ttransform: rotate(360deg);\r\n\t}\r\n\t\r\n\t100% {\r\n\t\ttransform: rotate(360deg);\r\n\t}\r\n}\r\n\r\n@keyframes cssload-loader-inner {\r\n\t0% {\r\n\t\theight: 0%;\r\n\t}\r\n\t\r\n\t25% {\r\n\t\theight: 0%;\r\n\t}\r\n\t\r\n\t50% {\r\n\t\theight: 100%;\r\n\t}\r\n\t\r\n\t75% {\r\n\t\theight: 100%;\r\n\t}\r\n\t\r\n\t100% {\r\n\t\theight: 0%;\r\n\t}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".hc-page-title {\r\n    padding-left:30px;\r\n    padding-right:30px;\r\n    margin-bottom:50px;\r\n    padding-top:20px; \r\n    background-color:#f3f0f0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "h4 {\r\n    background-color: #d9edf7;\r\n    padding: 10px;\r\n    border-radius: 3px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "h4 {\r\n    background-color: rgba(51, 122, 184, 0.49);\r\n    padding: 6px;\r\n    border-radius: 3px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "h4 {\r\n    background-color: rgba(51, 122, 184, 0.49);\r\n    padding: 6px;\r\n    border-radius: 3px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".side-menu-item {\r\n    font-size: 16px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".title-bar {\r\n    background-color: #ffffff;\r\n}\r\n\r\n.hc-title-text {\r\n    font-family:Roboto;\r\n    font-size:25px;\r\n    font-style:normal;\r\n    font-weight:300;\r\n    color: #6b6767;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "h4 {\r\n    background-color: rgba(51, 122, 184, 0.49);\r\n    padding: 6px;\r\n    border-radius: 3px;\r\n}\r\n\r\nspan {\r\n    height: 30px;\r\n}\r\n\r\n.rowHeight {\r\n    height: 50px;\r\n} ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 189 */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),
/* 190 */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n  <menubar showsidebar='true' shownotificationbar ='true' networkid=\"{{networkid}}\"></menubar>\r\n  <div id=\"page-wrapper\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-8  col-md-offset-2\">\r\n          <div class=\"panel panel-primary\"  style=\"margin-top:5%;min-height:698px\">\r\n              <div class=\"panel-heading\">\r\n                  Test Chaincode \r\n              </div>\r\n              <div class=\"panel-body\">\r\n              <div *ngIf=\"!showLoading\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12\" *ngIf=\"showError\">\r\n                      <div class=\"alert alert-danger\" >\r\n                        {{errorMessage}}\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-3 text-right\">\r\n                      <label>Organization</label>\r\n                    </div>\r\n                    <div class=\"col-md-9\">\r\n                      <select class=\"form-control\" [(ngModel)]=\"selectedOrg\" (change)=\"onChangeOrganization()\">\r\n                        <option value=\"0\">-- Select --</option>\r\n                        <option *ngFor=\"let org of orgDetailsArray\" value=\"{{org.orgIdentifier}}\">{{org.orgName}}</option>\r\n                      </select>\r\n                    </div>\r\n                  <div class=\"col-md-3 text-right\">\r\n                    <label>Peer</label>\r\n                  </div>\r\n                  <div class=\"col-md-9\">\r\n                    <select class=\"form-control\" [(ngModel)]=\"selectedPeer\"  (change)=\"onChangePeer()\">\r\n                      <option value=\"0\">-- Select --</option>\r\n                      <option *ngFor=\"let peer of peerDetailsArray\" value=\"{{peer}}\">{{peer}}</option>\r\n                    </select>  \r\n                  </div>\r\n                  <div class=\"col-md-3 text-right\">\r\n                    <label>Channel</label>\r\n                  </div>\r\n                  <div class=\"col-md-9\">\r\n                    <select class=\"form-control\" [(ngModel)]=\"selectedChannel\"  (change)=\"onChangeChannel()\">\r\n                      <option value=\"0\">-- Select --</option>\r\n                      <option *ngFor=\"let channel of channelsArray\" value=\"{{channel}}\">{{channel}}</option>\r\n                    </select>  \r\n                  </div>\r\n                  <div class=\"col-md-3 text-right\">\r\n                    <label>Chaincode (version)</label>\r\n                  </div>\r\n                  <div class=\"col-md-9\">\r\n                    <select class=\"form-control\" [(ngModel)]=\"selectedChaincode\" >\r\n                      <option value=\"0\">-- Select --</option>\r\n                      <option *ngFor=\"let chaincode of chaincodeArray\" value=\"{{chaincode.chaincodeName}}\">{{chaincode.chaincodeName}}</option>\r\n                    </select>  \r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"row\">\r\n\r\n                    \r\n                  <div class=\"col-md-3 text-right\">\r\n                    <label>Invoke / Query</label>\r\n                  </div>\r\n                  <div class=\"col-md-9\">\r\n                    <select class=\"form-control\"  [(ngModel)]=\"selectedQueryType\" >\r\n                      <option value=\"invoke\">Invoke</option>\r\n                      <option value=\"query\">Query</option>\r\n                    </select>  \r\n                  </div>\r\n                  <div class=\"col-md-3 text-right\">\r\n                    <label>Function</label>\r\n                  </div>\r\n                  <div class=\"col-md-9\">\r\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"functionName\" placeholder=\"Function Name\">  \r\n                  </div>\r\n                  <div class=\"col-md-3 text-right\">\r\n                    <label>Args</label>\r\n                  </div>\r\n                  <div class=\"col-md-9\">\r\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"args\" placeholder=\"args\">  \r\n                      <p class=\"help-block\">Please enter the arguments for the function like \"a\",\"100\",\"b\",\"200\" </p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n                </div>\r\n                <div class=\"row\" style=\"margin-top:30px;\">\r\n                  <div class=\"col-md-12 text-right\"  style=\"margin-bottom:30px;\">\r\n                    <a class=\"btn btn-primary\" (click)=\"onClickRequest()\">Request</a>\r\n                  </div>\r\n                  <div class=\"col-md-2 text-right\">\r\n                    <label>Response</label>\r\n                  </div>\r\n                  <div class=\"col-md-10 text-center\">\r\n                      <pre>{{result}}</pre>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\" *ngIf=\"showLoading\">\r\n                <div class=\"col-md-12\">\r\n                    <bcloader></bcloader>\r\n                </div>\r\n              </div>\r\n                    \r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),
/* 191 */
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"wrapper\">\r\n    <menubar shownotificationbar ='true'></menubar>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"alert alert-info\" *ngIf=\"showInfo\">\r\n                    {{errorMessage}}\r\n                </div>\r\n                <div class=\"alert alert-danger\" *ngIf=\"showErr\">\r\n                    {{errorMessage}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"!showLoading\">\r\n            <div class=\"col-md-12\">\r\n                <h3>Unapproved Users</h3>\r\n            </div>\r\n            <div *ngFor=\"let data of allUnapprovedUser\" class=\"col-md-12\" style=\"padding:20px\">\r\n                <div class=\"row alert alert-info\" >\r\n                    <div class=\"col-sm-6\">\r\n                        {{ data.name }} ({{data.email}}) \r\n                    </div>\r\n                    <div class=\"col-sm-6\">\r\n                        <a class=\"btn btn-success\" (click)=\"approveUser(data.email, false)\" style=\"margin-right:10px;\">Approve</a>\r\n                        <a class=\"btn btn-success\" (click)=\"approveUser(data.email, true)\">Approve & Confirm Email</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"showNoData\" class=\"col-md-12 text-center\" style=\"padding-top:40px;\">\r\n                <div class=\"alert alert-success text-center\">\r\n                    No Users for Approval\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"showLoading\">\r\n            <div class=\"col-md-12\" style=\"padding-top:40px;\">\r\n                <bcloader></bcloader>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /#page-wrapper -->\r\n\r\n</div>\r\n<!-- /#wrapper -->\r\n"

/***/ }),
/* 192 */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n    <menubar showsidebar='true' shownotificationbar ='true' networkid=\"{{networkid}}\"></menubar>\r\n    <div id=\"page-wrapper\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-8  col-md-offset-1\">\r\n            <div class=\"panel panel-primary\"  style=\"margin-top:5%;min-height:698px\">\r\n                <div class=\"panel-heading\">\r\n                  <i class=\"fa fa-cubes\"></i>  Block Details\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                <div *ngIf=\"!showLoading\">\r\n                  <div class=\"row\">\r\n                      <div class=\"col-sm-12\" *ngIf=\"showError\">\r\n                        <div class=\"alert alert-danger\" >\r\n                          {{errorMessage}}\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-3 text-right\">\r\n                        <label>Organization</label>\r\n                      </div>\r\n                      <div class=\"col-md-9\">\r\n                        <select class=\"form-control\" [(ngModel)]=\"selectedOrg\" (change)=\"onChangeOrganization()\">\r\n                          <option value=\"0\">-- Select --</option>\r\n                          <option *ngFor=\"let org of orgDetailsArray\" value=\"{{org.orgIdentifier}}\">{{org.orgName}}</option>\r\n                        </select>\r\n                      </div>\r\n                    <div class=\"col-md-3 text-right\">\r\n                      <label>Peer</label>\r\n                    </div>\r\n                    <div class=\"col-md-9\">\r\n                      <select class=\"form-control\" [(ngModel)]=\"selectedPeer\"  (change)=\"onChangePeer()\">\r\n                        <option value=\"0\">-- Select --</option>\r\n                        <option *ngFor=\"let peer of peerDetailsArray\" value=\"{{peer}}\">{{peer}}</option>\r\n                      </select>  \r\n                    </div>\r\n                    <div class=\"col-md-3 text-right\">\r\n                      <label>Channel</label>\r\n                    </div>\r\n                    <div class=\"col-md-9\">\r\n                      <select class=\"form-control\" [(ngModel)]=\"selectedChannel\">\r\n                        <option value=\"0\">-- Select --</option>\r\n                        <option *ngFor=\"let channel of channelsArray\" value=\"{{channel}}\">{{channel}}</option>\r\n                      </select>  \r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\" style=\"margin-top:30px;\">\r\n                    <div class=\"col-md-12 text-center\"  style=\"margin-bottom:30px;\">\r\n                      <a class=\"btn btn-primary\" (click)=\"onClickRequest()\">Show Block Height</a>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\" style=\"margin-top:30px;\" *ngIf=\"showBlockHeight\">\r\n                    <div class=\"col-md-12 text-center\" style=\"margin-bottom:20px;\">\r\n                      <h3><i class=\"fa fa-cubes\"></i> Block Height : {{ blockHeight}} </h3>\r\n                    </div>\r\n                    <div class=\"col-md-4 text-right\">\r\n                        <label>Show Block</label>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"blocknumber\" placeholder=\"args\">  \r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <a class=\"btn btn-primary\" (click)=\"showBlock()\">Show Block</a>\r\n                    </div>\r\n                    <div class=\"col-md-12 text-center\" style=\"margin-top:30px;\">\r\n                      <div style=\"word-wrap: break-word;background-color:#f1f1f1;padding: 10px; border-radius:10px; color:#464b50;border: 1px solid #ccc;font-size: 13px;line-height: 1.42857143;\" >\r\n                        {{blockResult}}\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\" *ngIf=\"showLoading\">\r\n                  <div class=\"col-md-12\">\r\n                      <bcloader></bcloader>\r\n                  </div>\r\n                </div>\r\n                      \r\n                </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>"

/***/ }),
/* 193 */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n  <menubar showsidebar='true' shownotificationbar ='true'  networkid=\"{{networkid}}\"></menubar>\r\n  <div id=\"page-wrapper\">\r\n    <div class=\"row\" style=\"margin-top:20px;margin-bottom:20px\">\r\n      <div class=\"col-md-2 text-right\">\r\n          <select class=\"form-control\" [(ngModel)]=\"selectedOrg\" (change)=\"onChangeOrganization()\">\r\n              <option *ngFor=\"let org of orgDetailsArray\" value=\"{{org.orgIdentifier}}\">{{org.orgName}}</option>\r\n          </select>\r\n      </div>\r\n      <div class=\"col-md-10 text-right\">\r\n        <a class=\"btn btn-success\" data-toggle=\"modal\" data-target=\".bd-install-chaincode\"><i class=\"glyphicon glyphicon-plus-sign\"></i> Install Chaincode</a>\r\n        <a class=\"btn btn-success\" data-toggle=\"modal\" data-target=\".bd-create-channel\"><i class=\"glyphicon glyphicon-plus-sign\"></i> Channel</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"showError\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"alert alert-danger\" >\r\n          {{errorMessage}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"showInfo\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"alert alert-info\" >\r\n          {{errorMessage}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"showChannelRequest\">\r\n      <div class=\"col-md-12\">\r\n        <h3>Join Channel Request</h3>\r\n      </div>\r\n      <div class=\"col-md-12\">\r\n          <div class=\"alert alert-success\">\r\n                <a *ngFor=\"let channelDisp of channelJoinRequestDisplayArray\" style=\"margin-right:20px;\" data-toggle=\"modal\" data-target=\".bd-join-channel\" class=\"btn btn-success\" (click)=\"onClickJoinChannel(channelDisp)\">Join {{channelDisp}} Channel</a>.\r\n          </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"!noChannelToDisplay()\">\r\n      <div *ngFor=\"let channel of channels\">\r\n        <h3>Channel : {{ channel.channelName }}</h3>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n              <div class=\"panel panel-primary\">\r\n                  <div class=\"panel-heading\">\r\n                      Peers\r\n                  </div>\r\n                  <div class=\"panel-body\">\r\n                      <a *ngFor=\"let peer of channel.peers\" class=\"btn btn-success btn-sm\" style=\"margin-right:30px;\">{{peer}}</a>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"panel panel-yellow\">\r\n                <div class=\"panel-heading\">\r\n                    Chaincode\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                  <a *ngFor=\"let chanicode of channel.chanicodes\" class=\"btn btn-success btn-sm\"  style=\"margin-right:30px;margin-bottom:10px;margin-top:10px;\">{{chanicode.chaincodeName}} - {{chanicode.chaincodeVersion}} </a>\r\n                </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"!showLoading\"  style=\"padding-top:20px;\">\r\n      <div class=\"row\" *ngIf=\"noChannelToDisplay()\">\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"alert alert-info\" >\r\n              No Data to Display\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"showLoading\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12\" style=\"padding-top:20px;\">\r\n            <bcloader></bcloader>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"modal fade bd-install-chaincode\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"panel panel-yellow\" style=\"margin-bottom:0px\">\r\n              <div class=\"panel-heading\">\r\n                <b>Install Chaincode</b>\r\n              </div>\r\n              <div class=\"panel-body\">\r\n                  <div class=\"row\" >\r\n                    <div class=\"col-sm-12\" *ngIf=\"iAndiError\">\r\n                      <div class=\"alert alert-danger\" >\r\n                        {{iAndiErrorMsg}}\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-sm-12\" *ngIf=\"iAndiInfo\">\r\n                      <div class=\"alert alert-info\" >\r\n                        {{iAndiErrorMsg}}\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                      <label>Channel Name</label>\r\n                      <select class=\"form-control\"  [(ngModel)]=\"selectedChannelInInstalledChaincode\" (change)=\"onChangeChannelInInstallChaincode()\">\r\n                          <option *ngFor=\"let channel of channels\" value=\"{{ channel.channelName }}\">{{ channel.channelName }}</option>\r\n                      </select>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                      <label>Choose Peers</label>\r\n                      <label class=\"checkbox-inline\" *ngFor=\"let peer of modalChaincodeInstallPeer\">\r\n                          <span style=\"padding-right:30px;\">{{peer}}</span>\r\n                      </label>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label>Chaincode Name</label>\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newChaincodeName\" placeholder=\"Chaincode Name\">\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label>Chaincode Version</label>\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newChaincodeVersion\" placeholder=\"Chaincode Version\">\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label>Arguments</label>\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newChaincodeArguments\" placeholder=\"Chaincode Arguments\">\r\n                    <p class=\"help-block\">Please enter the arguments for the init like \"a\",\"100\",\"b\",\"200\" </p>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label>Dynamic Contract</label>\r\n                    <select class=\"form-control\"  [(ngModel)]=\"smartContractID\" >\r\n                        <option *ngFor=\"let smartcontract of smartcontractlist\" value=\"{{ smartcontract.contractID }}\">{{ smartcontract.smName }}</option>\r\n                    </select>\r\n                    <p class=\"help-block\">Please select Dynamic Smart Contract, Else you can upload a file </p>\r\n                  </div>\r\n                  <div class=\"form-group\" *ngIf=\"smartContractID == 'NA'\">\r\n                      <label>Choose Files</label>\r\n                      <input type=\"file\" (change)=\"fileChange($event)\" name=\"chaincodeFiles\" multiple>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"com-md-12 text-center\" *ngIf=\"!iAndiProcessing\">\r\n                      <a class=\"btn btn-primary\" (click)=\"installAndInstantiateChaincode()\">Install Chaincode</a>\r\n                      <button class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\r\n                    </div>\r\n                    <div class=\"com-md-12 text-center\" *ngIf=\"iAndiProcessing\">\r\n                      <bcloader></bcloader>\r\n                    </div>\r\n                  </div>\r\n                  \r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal fade bd-create-channel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"panel panel-primary\" style=\"margin-bottom:0px\">\r\n              <div class=\"panel-heading\">\r\n                <b>Create Channel</b>\r\n              </div>\r\n              <div class=\"panel-body\">\r\n                <div class=\"row\" >\r\n                  <div class=\"col-sm-12\" *ngIf=\"showNewChannelError\">\r\n                    <div class=\"alert alert-danger\" >\r\n                      {{newChannelErrorMessage}}\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-12\" *ngIf=\"showNewChannelInfo\">\r\n                    <div class=\"alert alert-info\" >\r\n                      {{newChannelErrorMessage}}\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label>Channel Name</label>\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newChannelName\" placeholder=\"Channel Name\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label>Choose Peers</label>\r\n                  <label class=\"checkbox-inline\" *ngFor=\"let peer of peerDetailsArray\">\r\n                      <input type=\"checkbox\"  (click)=\"onClickPeerChannel(peer)\" >{{peer}}\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label>Choose Organization</label>\r\n                  <label class=\"checkbox-inline\" *ngFor=\"let org of orgDetailsArray\" >\r\n                    <span *ngIf=\"org.orgIdentifier != selectedOrg\"> <input type=\"checkbox\" (click)=\"onClickOrgChannel(org.orgIdentifier)\" >{{org.orgName}}</span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"com-md-12 text-center\" *ngIf=\"!showNewChannelLoading\">\r\n                    <a class=\"btn btn-primary\" (click)=\"createChannel()\" >Create</a>\r\n                    <button class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\r\n                  </div>\r\n                  <div class=\"com-md-12 text-center\" *ngIf=\"showNewChannelLoading\">\r\n                      <bcloader></bcloader>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"modal fade bd-join-channel\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"panel panel-primary\" style=\"margin-bottom:0px\">\r\n              <div class=\"panel-heading\">\r\n                <b>Join Channel</b>\r\n              </div>\r\n              <div class=\"panel-body\">\r\n                <div class=\"row\" >\r\n                  <div class=\"col-sm-12\" *ngIf=\"showJoinChannelError\">\r\n                    <div class=\"alert alert-danger\" >\r\n                      {{joinChannelErrorMessage}}\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-12\" *ngIf=\"showJoinChannelInfo\">\r\n                    <div class=\"alert alert-info\" >\r\n                      {{joinChannelErrorMessage}}\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label>Channel Name</label>\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedJoinChannelName\" placeholder=\"Channel Name\" disabled>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label>Choose Peers</label>\r\n                  <label class=\"checkbox-inline\" *ngFor=\"let peer of peerDetailsArray\">\r\n                      <input type=\"checkbox\"  (click)=\"onClickPeerJoinChannel(peer)\" >\r\n                      <input type=\"checkbox\"  (click)=\"onClickPeerJoinChannel(peer)\" >{{peer}}\r\n                  </label>\r\n                </div>\r\n                <div class=\"row\" *ngIf=\"!showJoinChannelLoading\">\r\n                  <div class=\"com-md-12 text-center\">\r\n                    <a class=\"btn btn-primary\" (click)=\"requestJoinChannel()\" data-dismiss=\"modal\">Join</a>\r\n                    <button class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\" *ngIf=\"showJoinChannelLoading\">\r\n                  <div class=\"com-md-12 text-center\">\r\n                      <bcloader></bcloader>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),
/* 194 */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n  <menubar></menubar>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\" style=\"padding-top:40px;\">\r\n        <div *ngIf=\"showError\" class=\"alert alert-danger text-center\">\r\n          {{ errorMessage }} \r\n        </div>\r\n        <div *ngIf=\"showInfo\" class=\"alert alert-success text-center\">\r\n          {{ errorMessage }} <a routerLink=\"/login\" class=\"btn btn-success\">Login</a>\r\n        </div>\r\n        <div *ngIf=\"showLoading\" class=\"text-center\">\r\n          <bcloader></bcloader>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),
/* 195 */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n    <menubar showsidebar='true' shownotificationbar ='true'  networkid=\"{{networkid}}\"></menubar>\r\n    <div id=\"page-wrapper\">\r\n        <div *ngIf=\"showLoading\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\" style=\"padding-top:20px;\">\r\n                    <bcloader></bcloader>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"!showLoading\">\r\n            <div class=\"col-md-8 col-md-offset-2\">\r\n                <div class=\"panel panel-primary\" style=\"margin-top: 100px;\">\r\n                    <div class=\"panel-heading\">\r\n                        <h3 class=\"panel-title\"> <span class=\"glyphicon glyphicon-log-in\"></span> Define Datatype</h3>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"alert alert-danger\" *ngIf=\"showError\">\r\n                                    {{errorMessage}}\r\n                                </div>\r\n                                <div class=\"alert alert-info\" *ngIf=\"showInfo\">\r\n                                    {{errorMessage}}\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <fieldset>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-3\" style=\"padding-top: 40px;\">\r\n                                    <label for=\"exampleInputEmail1\">Type</label>\r\n                                </div>\r\n                                <div class=\"col-md-9\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-12\">\r\n                                            <input type=\"text\" class=\"form-control\" id=\"typeName\" aria-describedby=\"typeNameHelp\" placeholder=\"Type Name\"  [(ngModel)]=\"typeName\" >\r\n                                            <small id=\"typeNameHelp\" class=\"form-text text-muted\">Please provide a Type Name</small>\r\n                                        </div>\r\n                                        <div class=\"col-md-12\">\r\n                                            <input type=\"text\" class=\"form-control\" id=\"typeDescription\" aria-describedby=\"typeDescriptionHelp\" placeholder=\"Type Description\"  [(ngModel)]=\"typeDescription\" >\r\n                                            <small id=\"typeDescriptionHelp\" class=\"form-text text-muted\">Please provide a Type Description</small>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <hr/>\r\n                            <div class=\"row\" style=\"margin-top: 30px;\">\r\n                                <div class=\"col-md-3\" style=\"padding-top: 40px;\">\r\n                                    <label for=\"exampleInputEmail1\">Attribute</label>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-12\">\r\n                                            <input type=\"text\" class=\"form-control\" id=\"attributeName\" aria-describedby=\"attributeNameHelp\" placeholder=\"Attribute Name\"  [(ngModel)]=\"attributeName\">\r\n                                            <small id=\"typeNameHelp\" class=\"form-text text-muted\">Attribute Name cannot have special charecters except _ </small>\r\n                                        </div>\r\n                                        <div class=\"col-md-12\">\r\n                                            <select class=\"form-control\" id=\"attributeType\"  [(ngModel)]=\"attributeType\">\r\n                                                <option *ngFor=\"let attrType of attributeTypeList\">{{attrType}}</option>\r\n                                            </select>\r\n                                            <small id=\"attributeTypeHelp\" class=\"form-text text-muted\">Please provide Attribute Type</small>\r\n                                        </div>\r\n                                        \r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-3\" style=\"padding-top: 30px;\">\r\n                                    <div class=\"col-md-12 text-center\">\r\n                                        <a class=\"btn btn-block btn-success mb-2\"  (click)=\"addAttribute()\" >\r\n                                            <span class=\"oi oi-plus\"></span>\r\n                                            Add\r\n                                        </a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" style=\"margin-top: 20px;\">\r\n                                <table class=\"table table-striped table-hover\" style=\"width: 100%\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th scope=\"col\">\r\n                                                Attribute Name\r\n                                            </th>\r\n                                            <th scope=\"col\">\r\n                                                Attribute Type\r\n                                            </th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let attr of attributeList\">\r\n                                            <td scope=\"row\">{{ attr.name }}</td>\r\n                                            <td>{{ attr.type }}</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                            <hr/>\r\n                            <div class=\"row\" style=\"margin-top: 20px;\">\r\n                                <div class=\"col-md-12 text-center\">\r\n                                    <a class=\"btn btn-block btn-success mb-2\" (click)=\"save()\" >\r\n                                        Save\r\n                                    </a>\r\n                                    <!-- <a class=\"btn btn-block btn-primary mb-2\" routerLink=\"/smartcontract/{{networkid}}\">\r\n                                        Back\r\n                                    </a> -->\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                        \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n      \r\n</div>\r\n\r\n\r\n"

/***/ }),
/* 196 */
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"wrapper\">\r\n    <menubar showsidebar='true' shownotificationbar ='true' networkid=\"{{networkid}}\"></menubar>\r\n        \r\n\r\n    <div id=\"page-wrapper\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8\">\r\n                <h3 class=\"page-header\">{{selectedOrgDesc}} Dashboard</h3>\r\n            </div>\r\n            <!-- <div class=\"col-md-2 text-right\" style=\"padding-top:30px;\" *ngIf=\"!showLoading\">\r\n                <a class=\"btn btn-success\"  data-toggle=\"modal\" data-target=\".dash-modal-add-peer\"><i class=\"glyphicon glyphicon-plus-sign\"></i> Peer</a>\r\n            </div> -->\r\n            <div class=\"col-md-2\" style=\"padding-top:30px;\">\r\n                <select class=\"form-control\" [(ngModel)]=\"selectedOrg\" (change)=\"onChangeOrganization()\">\r\n                    <option *ngFor=\"let org of orgDetailsArray\" value=\"{{org.orgIdentifier}}\">{{org.orgName}}</option>\r\n                </select>\r\n            </div>\r\n            <!-- /.col-lg-12 -->\r\n        </div>\r\n        <!-- /.row -->\r\n        <div class=\"row\" *ngIf=\"showLoading\">\r\n            <div class=\"col-sm-12\">\r\n                <bcloader></bcloader>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"!showLoading\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"showError\">\r\n                    {{errorMessage}}\r\n                </div>\r\n                <div class=\"alert alert-info\" *ngIf=\"showInfo\">\r\n                    {{errorMessage}}\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\"  *ngFor=\"let peer of peerDetailsArray\">\r\n                <div class=\"panel panel-{{peer.status}}\">\r\n                    <div class=\"panel-heading\">\r\n                        <b><i class=\"fa fa-tasks fa-fw\"></i> {{peer.peerName}}</b>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-lg-12 col-md-12\">\r\n                                        <div class=\"panel panel-warning\">\r\n                                            <div class=\"panel-heading\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-xs-2\">\r\n                                                        <i class=\"fa fa-comments fa-2x\"></i>\r\n                                                    </div>\r\n                                                    <div class=\"col-xs-8\">\r\n                                                        <div class=\"small-dashboard-box\">Channels</div>\r\n                                                    </div>\r\n                                                    <div class=\"col-xs-2 text-right\">\r\n                                                        <div class=\"small-dashboard-box-number\">{{peer.channelCount}}</div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-lg-12 col-md-12\">\r\n                                        <div class=\"panel panel-success\">\r\n                                            <div class=\"panel-heading\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-xs-2\">\r\n                                                        <i class=\"fa fa-chain fa-2x\"></i>\r\n                                                    </div>\r\n                                                    <div class=\"col-xs-8\">\r\n                                                        <div class=\"small-dashboard-box\">Installed Chaincodes</div>\r\n                                                    </div>\r\n                                                    <div class=\"col-xs-2 text-right\">\r\n                                                        <div class=\"small-dashboard-box-number\">{{peer.installedChaincode}}</div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- /.row -->\r\n        <div class=\"modal fade dash-modal-add-peer\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n            <div class=\"modal-dialog modal-lg\">\r\n              <div class=\"modal-content\">\r\n                <div class=\"panel panel-primary\" style=\"margin-bottom:0px\">\r\n                    <div class=\"panel-heading\">\r\n                      <b>Add Peer</b>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                      <div class=\"row\" >\r\n                        <div class=\"col-sm-12 text-center\" style=\"padding: 75px;\">\r\n                           Please Open the Firewall Ports {{ selectedOrgIndex() }}0{{ nextPeerNumber() }}50,{{ selectedOrgIndex() }}0{{ nextPeerNumber() }}51,{{ selectedOrgIndex() }}0{{ nextPeerNumber() }}53. Please Confirm ?\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"row\">\r\n                        <div class=\"com-md-12 text-center\">\r\n                          <a class=\"btn btn-success\" (click)=\"onClickAddPeer()\" data-dismiss=\"modal\">Confirm</a>\r\n                          <button class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /#page-wrapper -->\r\n\r\n</div>\r\n<!-- /#wrapper -->\r\n"

/***/ }),
/* 197 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row footer-bar\">\r\n  <div class=\"col-sm-12\">\r\n    <p>\r\n      © 2017 HCL Technologies. All Rights Reserved. Mail us at cotrust_bcconsole@hcl.com for issues or feedback\r\n    </p>\r\n  </div>\r\n</div>"

/***/ }),
/* 198 */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n  <menubar showsidebar='false' shownotificationbar ='false' ></menubar>\r\n  <div id=\"container\">\r\n    \r\n      <div class=\"row\">\r\n        <div class=\"col-md-8 col-md-offset-2\">\r\n          <div class=\"panel panel-primary\" style=\"margin-top:2%\">\r\n            <div class=\"panel-heading\">\r\n                <b>Forgot Password</b>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div class=\"row\" *ngIf=\"showLoading\">\r\n                  <div class=\"col-md-12 text-center\">\r\n                    <bcloader></bcloader>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\" *ngIf=\"!showLoading\">\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"alert alert-danger\" *ngIf=\"showError\">\r\n                        {{errorMessage}}\r\n                    </div>\r\n                    <div class=\"alert alert-info\" *ngIf=\"showInfo\">\r\n                        {{errorMessage}}\r\n                    </div>  \r\n                  </div>\r\n                  <div class=\"col-md-12\" *ngIf=\"step1\">\r\n                    <div class=\"form-group\">\r\n                      <label>Email ID</label>\r\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"emailid\" placeholder=\"Please enter your registered Email ID\" >\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-12 text-center\" *ngIf=\"step1\">\r\n                    <a (click)=\"onClickSendOtpToMail()\" class=\"btn btn-success\"> Send OTP </a>\r\n                  </div>\r\n\r\n\r\n                  <div class=\"col-md-12\" *ngIf=\"step2\">\r\n                    <div class=\"form-group\">\r\n                      <label>OTP</label>\r\n                      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"otp\" placeholder=\"Please enter the OTP sent to your mail id\" >\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-12 text-center\" *ngIf=\"step2\">\r\n                    <a (click)=\"onClickVerifyOTP()\" class=\"btn btn-success\"> Verify OTP </a>\r\n                  </div>\r\n\r\n                  <div class=\"col-md-12\" *ngIf=\"step3\">\r\n                    <div class=\"form-group\">\r\n                      <label>New Password</label>\r\n                      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"newpassword\" placeholder=\"New Password\" >\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label>Confirm Password</label>\r\n                      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"confirmpassword\" placeholder=\"Confim Password\" >\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-12 text-center\" *ngIf=\"step3\">\r\n                    <a (click)=\"onClickResetPassword()\" class=\"btn btn-success\"> Reset Password </a>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    \r\n  </div>\r\n</div>"

/***/ }),
/* 199 */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-header\">\r\n  <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\r\n      <span class=\"sr-only\">Toggle navigation</span>\r\n      <span class=\"icon-bar\"></span>\r\n      <span class=\"icon-bar\"></span>\r\n      <span class=\"icon-bar\"></span>\r\n  </button>\r\n  <a class=\"navbar-brand\" style=\"padding:0px\" >\r\n    <img src=\"assets/images/head-logo.png\" style=\"max-height:50px\"/>\r\n  </a>\r\n</div>"

/***/ }),
/* 200 */
/***/ (function(module, exports) {

module.exports = "<span class=\"cssload-loader\"><span class=\"cssload-loader-inner\"></span></span>"

/***/ }),
/* 201 */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n    <menubar></menubar>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4 col-md-offset-4\">\r\n                <div class=\"login-panel panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                        <h3 class=\"panel-title\"> <span class=\"glyphicon glyphicon-log-in\"></span> Please Sign In</h3>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"alert alert-danger\" *ngIf=\"showError\">\r\n                                    {{errorMessage}}\r\n                                </div>\r\n                                <div class=\"alert alert-info\" *ngIf=\"showInfo\">\r\n                                    {{errorMessage}}\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <fieldset>\r\n                            <div class=\"form-group\">\r\n                                <input class=\"form-control\" placeholder=\"E-mail\"  [(ngModel)]=\"emailid\" name=\"email\" type=\"email\" autofocus>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <input class=\"form-control\" placeholder=\"Password\"  [(ngModel)]=\"password\" name=\"password\" type=\"password\" value=\"\">\r\n                            </div>\r\n                            <div class=\"row\" *ngIf=\"showloading\">\r\n                                <div class=\"col-md-12 text-center\">\r\n                                    <bcloader></bcloader>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" *ngIf=\"!showloading\">\r\n                                <!-- <div class=\"col-md-12 text-right\">\r\n                                    <a routerLink=\"/forgotpassword\"> Forgot Password</a>\r\n                                </div> -->\r\n                                <div class=\"col-md-12\">\r\n                                    <button type=\"submit\" (click)=\"login()\" class=\"btn btn-lg btn-success btn-block\">Login</button>\r\n                                    <!-- <a routerLink=\"/signup\" class=\"btn btn-lg btn-primary btn-block\">Sign Up</a> -->\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),
/* 202 */
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\r\n<nav class=\"navbar navbar-default navbar-static-top\" role=\"navigation\" style=\"margin-bottom: 0\">\r\n        \r\n        <header-bar></header-bar>\r\n        <!-- /.navbar-header -->\r\n\r\n        <notificationbar-bar *ngIf=\"shownotificationbar == 'true'\"></notificationbar-bar>\r\n\r\n        <sidebar *ngIf=\"showsidebar == 'true'\" networkid=\"{{networkid}}\"></sidebar>\r\n    </nav>"

/***/ }),
/* 203 */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav navbar-top-links navbar-right\">\r\n  <!-- /.dropdown -->\r\n  <li class=\"dropdown\">\r\n      <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n          <i class=\"fa fa-user fa-fw\"></i><b> {{loginUserName}} </b><i class=\"fa fa-caret-down\"></i>\r\n      </a>\r\n      <ul class=\"dropdown-menu dropdown-user\">\r\n          <!-- <li>\r\n              <a routerLink=\"/resetpassword\"><i class=\"fa fa-gear fa-fw\"></i> Reset Password</a>\r\n          </li>\r\n          <li class=\"divider\"></li> -->\r\n          <li><a (click)=\"onClickLogout()\"><i class=\"fa fa-sign-out fa-fw\"></i> Logout</a>\r\n          </li>\r\n      </ul>\r\n      <!-- /.dropdown-user -->\r\n  </li>\r\n  <!-- /.dropdown -->\r\n</ul>\r\n<!-- /.navbar-top-links -->"

/***/ }),
/* 204 */
/***/ (function(module, exports) {

module.exports = "<div class=\"hc-page-title\">\r\n    <h3>\r\n      {{title}}\r\n    </h3>\r\n    <hr>\r\n  </div>"

/***/ }),
/* 205 */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n    <menubar showsidebar='true' shownotificationbar ='true'  networkid=\"{{networkid}}\"></menubar>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"panel panel-primary\" style=\"margin-top: 50px;\">\r\n                    <div class=\"panel-heading\">\r\n                        <h3 class=\"panel-title\"> <span class=\"glyphicon glyphicon-log-in\"></span> Define Datatype</h3>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"alert alert-danger\" *ngIf=\"showError\">\r\n                                    {{errorMessage}}\r\n                                </div>\r\n                                <div class=\"alert alert-info\" *ngIf=\"showInfo\">\r\n                                    {{errorMessage}}\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <fieldset>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-3\" style=\"padding-top: 40px;\">\r\n                                    <label for=\"exampleInputEmail1\">Process</label>\r\n                                </div>\r\n                                <div class=\"col-md-9\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-12\">\r\n                                            <select class=\"form-control\" id=\"attributeType\">\r\n                                                <option>Transaction</option>\r\n                                                <option>Query</option>\r\n                                            </select>\r\n                                            <small id=\"attributeTypeHelp\" class=\"form-text text-muted\">Please provide Process Type</small>\r\n                                        </div>\r\n                                        <div class=\"col-md-12\">\r\n                                            <input type=\"text\" class=\"form-control\" id=\"processName\" aria-describedby=\"typeNameHelp\" placeholder=\"Process Name\">\r\n                                            <small id=\"processNameHelp\" class=\"form-text text-muted\">Please provide a Process Name</small>\r\n                                        </div>\r\n                                        <div class=\"col-md-12\">\r\n                                            <input type=\"text\" class=\"form-control\" id=\"processDesc\" aria-describedby=\"processDescHelp\" placeholder=\"Process Description\">\r\n                                            <small id=\"processDescHelp\" class=\"form-text text-muted\">Please provide a Process Description</small>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <hr/>\r\n                            <div class=\"row\" style=\"margin-top: 20px;\">\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-12\">\r\n                                            <div class=\"panel panel-success\">\r\n                                                <div class=\"panel-heading\">\r\n                                                    <h3 class=\"panel-title\"> <span class=\"glyphicon glyphicon-log-in\"></span> Define Input</h3>\r\n                                                </div>\r\n                                                <div class=\"panel-body\">\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-12\">\r\n                                                            <input type=\"text\" class=\"form-control\" id=\"attributeName\" aria-describedby=\"attributeNameHelp\" placeholder=\"Input Name\">\r\n                                                            <small id=\"typeNameHelp\" class=\"form-text text-muted\">Input Name cannot have special charecters except _ </small>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-12\">\r\n                                                            <select class=\"form-control\" id=\"attributeType\">\r\n                                                                <option>String</option>\r\n                                                                <option>Int</option>\r\n                                                                <option>Boolean</option>\r\n                                                                <option>AccountInfo</option>\r\n                                                            </select>\r\n                                                            <small id=\"attributeTypeHelp\" class=\"form-text text-muted\">Please provide Input Type</small>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-12 text-center\">\r\n                                                            <button type=\"submit\" class=\"btn btn-block btn-success mb-2\">\r\n                                                                <span class=\"oi oi-plus\"></span>\r\n                                                                Add\r\n                                                            </button>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-12\">\r\n                                                            <table class=\"table table-striped table-hover\" style=\"width: 100%; margin-top:50px;\">\r\n                                                                <thead>\r\n                                                                    <tr>\r\n                                                                        <th scope=\"col\">\r\n                                                                            Input Name\r\n                                                                        </th>\r\n                                                                        <th scope=\"col\">\r\n                                                                            Input Type\r\n                                                                        </th>\r\n                                                                    </tr>\r\n                                                                </thead>\r\n                                                                <tbody>\r\n                                                                    <tr>\r\n                                                                        <td scope=\"row\">initiatorAccNo</td>\r\n                                                                        <td>String</td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <td scope=\"row\">beneficiaryAccNo</td>\r\n                                                                        <td>String</td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <td scope=\"row\">amount</td>\r\n                                                                        <td>int</td>\r\n                                                                    </tr>\r\n                                                                </tbody>\r\n                                                            </table>\r\n                                                        </div>\r\n                                                        \r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        \r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-12\">\r\n                                            <div class=\"panel panel-info\">\r\n                                                <div class=\"panel-heading\">\r\n                                                    <h3 class=\"panel-title\"> <span class=\"glyphicon glyphicon-log-in\"></span> Variables</h3>\r\n                                                </div>\r\n                                                <div class=\"panel-body\">\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-12\">\r\n                                                            <input type=\"text\" class=\"form-control\" id=\"attributeName\" aria-describedby=\"attributeNameHelp\" placeholder=\"Variable Name\">\r\n                                                            <small id=\"typeNameHelp\" class=\"form-text text-muted\">Variable Name cannot have special charecters except _ </small>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-12\">\r\n                                                            <select class=\"form-control\" id=\"attributeType\">\r\n                                                                <option>String</option>\r\n                                                                <option>Int</option>\r\n                                                                <option>Boolean</option>\r\n                                                                <option>AccountInfo</option>\r\n                                                            </select>\r\n                                                            <small id=\"attributeTypeHelp\" class=\"form-text text-muted\">Please provide Variable Type</small>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-12\">\r\n                                                            <input type=\"text\" class=\"form-control\" id=\"attributeName\" aria-describedby=\"attributeNameHelp\" placeholder=\"Default Value\">\r\n                                                            <small id=\"typeNameHelp\" class=\"form-text text-muted\">Please provide any Default value else leave blank  </small>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-12 text-center\">\r\n                                                            <button type=\"submit\" class=\"btn btn-block btn-success mb-2\">\r\n                                                                <span class=\"oi oi-plus\"></span>\r\n                                                                Add\r\n                                                            </button>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-12\">\r\n                                                            <table class=\"table table-striped table-hover\" style=\"width: 100%; margin-top:50px;\">\r\n                                                                <thead>\r\n                                                                    <tr>\r\n                                                                        <th scope=\"col\">\r\n                                                                            Variable Name\r\n                                                                        </th>\r\n                                                                        <th scope=\"col\">\r\n                                                                            Variable Type\r\n                                                                        </th>\r\n                                                                    </tr>\r\n                                                                </thead>\r\n                                                                <tbody>\r\n                                                                    <tr>\r\n                                                                        <td scope=\"row\">initiatorAccDetails</td>\r\n                                                                        <td>AccountInfo</td>\r\n                                                                    </tr>\r\n                                                                    <tr>\r\n                                                                        <td scope=\"row\">beneficiaryAccDetails</td>\r\n                                                                        <td>AccountInfo</td>\r\n                                                                    </tr>\r\n                                                                </tbody>\r\n                                                            </table>\r\n                                                        </div>\r\n                                                        \r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        \r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-8\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-12\">\r\n                                            <div class=\"panel panel-primary\">\r\n                                                <div class=\"panel-heading\">\r\n                                                    <h3 class=\"panel-title\"> <span class=\"glyphicon glyphicon-log-in\"></span> Process Steps</h3>\r\n                                                </div>\r\n                                                <div class=\"panel-body\">\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-12 text-right\">\r\n                                                            <button type=\"submit\" class=\"btn btn-success mb-2\">\r\n                                                                Add Step\r\n                                                            </button>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-12\">\r\n                                                            <div class=\"row\">\r\n                                                                <div class=\"col-md-12\">\r\n                                                                    <h4>Step 1</h4>\r\n                                                                    <hr/>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"row\">\r\n                                                                <div class=\"col-md-3\">\r\n                                                                    Action\r\n                                                                </div>\r\n                                                                <div class=\"col-md-9\">\r\n                                                                    <select class=\"form-control\" id=\"attributeType\">\r\n                                                                        <option>Retrieve</option>\r\n                                                                        <option>Subract</option>\r\n                                                                        <option>Add</option>\r\n                                                                        <option>Greater Than (Static)</option>\r\n                                                                        <option>Less Than (Static)</option>\r\n                                                                        <option>Equals (Static)</option>\r\n                                                                        <option>Greater Than (Variable)</option>\r\n                                                                        <option>Less Than (Variable)</option>\r\n                                                                        <option>Equals (Variable)</option>\r\n                                                                    </select>\r\n                                                                    <small id=\"attributeTypeHelp\" class=\"form-text text-muted\">Please Select Action</small>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"row\">\r\n                                                                <div class=\"col-md-3\">\r\n                                                                    Reference Name <br/> (Key Name)\r\n                                                                </div>\r\n                                                                <div class=\"col-md-9\">\r\n                                                                    <select class=\"form-control\" id=\"attributeType\">\r\n                                                                        <option>initiatorAccNo</option>\r\n                                                                        <option>beneficiaryAccNo</option>\r\n                                                                    </select>\r\n                                                                    <small id=\"processNameHelp\" class=\"form-text text-muted\">Please provide a Process Name</small>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"row\">\r\n                                                                <div class=\"col-md-3\">\r\n                                                                    Assign to Variable\r\n                                                                </div>\r\n                                                                <div class=\"col-md-9\">\r\n                                                                    <select class=\"form-control\" id=\"attributeType\">\r\n                                                                        <option>initiatorAccDetails</option>\r\n                                                                        <option>beneficiaryAccDetails</option>\r\n                                                                    </select>\r\n                                                                    <small id=\"processNameHelp\" class=\"form-text text-muted\">Please provide a Process Name</small>\r\n                                                                </div>\r\n                                                                <div class=\"col-md-12\">\r\n                                                                    <hr/>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-12\">\r\n                                                            <div class=\"row\">\r\n                                                                <div class=\"col-md-12\">\r\n                                                                    <h4>Step 2</h4>\r\n                                                                    <hr/>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"row\">\r\n                                                                <div class=\"col-md-3\">\r\n                                                                    Action\r\n                                                                </div>\r\n                                                                <div class=\"col-md-9\">\r\n                                                                    <select class=\"form-control\" id=\"attributeType\">\r\n                                                                        <option>Retrieve</option>\r\n                                                                        <option>Subract</option>\r\n                                                                        <option>Add</option>\r\n                                                                        <option>Greater Than (Static)</option>\r\n                                                                        <option>Less Than (Static)</option>\r\n                                                                        <option>Equals (Static)</option>\r\n                                                                        <option>Greater Than (Variable)</option>\r\n                                                                        <option>Less Than (Variable)</option>\r\n                                                                        <option>Equals (Variable)</option>\r\n                                                                    </select>\r\n                                                                    <small id=\"attributeTypeHelp\" class=\"form-text text-muted\">Please Select Action</small>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"row\">\r\n                                                                <div class=\"col-md-3\">\r\n                                                                    Reference Name <br/> (Key Name)\r\n                                                                </div>\r\n                                                                <div class=\"col-md-9\">\r\n                                                                    <select class=\"form-control\" id=\"attributeType\">\r\n                                                                        <option>beneficiaryAccNo</option>\r\n                                                                        <option>initiatorAccNo</option>\r\n                                                                    </select>\r\n                                                                    <small id=\"processNameHelp\" class=\"form-text text-muted\">Please provide a Process Name</small>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"row\">\r\n                                                                <div class=\"col-md-3\">\r\n                                                                    Assign to Variable\r\n                                                                </div>\r\n                                                                <div class=\"col-md-9\">\r\n                                                                    <select class=\"form-control\" id=\"attributeType\">\r\n                                                                        <option>beneficiaryAccDetails</option>\r\n                                                                        <option>initiatorAccDetails</option>\r\n                                                                    </select>\r\n                                                                    <small id=\"processNameHelp\" class=\"form-text text-muted\">Please provide a Process Name</small>\r\n                                                                </div>\r\n                                                                <div class=\"col-md-12\">\r\n                                                                    <hr/>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        \r\n                                                        <div class=\"col-md-12\">\r\n                                                            <div class=\"row\">\r\n                                                                <div class=\"col-md-12\">\r\n                                                                    <h4>Step 3</h4>\r\n                                                                    <hr/>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"row\">\r\n                                                                <div class=\"col-md-3\">\r\n                                                                    Action\r\n                                                                </div>\r\n                                                                <div class=\"col-md-9\">\r\n                                                                    <select class=\"form-control\" id=\"attributeType\">\r\n                                                                        <option>Subract</option>\r\n                                                                        <option>Retrieve</option>\r\n                                                                        <option>Add</option>\r\n                                                                        <option>Greater Than (Static)</option>\r\n                                                                        <option>Less Than (Static)</option>\r\n                                                                        <option>Equals (Static)</option>\r\n                                                                        <option>Greater Than (Variable)</option>\r\n                                                                        <option>Less Than (Variable)</option>\r\n                                                                        <option>Equals (Variable)</option>\r\n                                                                    </select>\r\n                                                                    <small id=\"attributeTypeHelp\" class=\"form-text text-muted\">Please Select Action</small>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"row\" style=\"margin-top: 30px;\">\r\n                                                                <div class=\"col-md-4\">\r\n                                                                    <select class=\"form-control\" id=\"attributeType\">\r\n                                                                        <option>initiatorAccDetails.balance</option>\r\n                                                                        <option>beneficiaryAccDetails.balance</option>\r\n                                                                        <option>amount</option>\r\n                                                                    </select>\r\n                                                                </div>\r\n                                                                <div class=\"col-md-1\">\r\n                                                                    =\r\n                                                                </div>\r\n                                                                <div class=\"col-md-3\">\r\n                                                                    <select class=\"form-control\" id=\"attributeType\">\r\n                                                                        <option>initiatorAccDetails.balance</option>\r\n                                                                        <option>beneficiaryAccDetails.balance</option>\r\n                                                                        <option>amount</option>\r\n                                                                    </select>\r\n                                                                </div>\r\n                                                                <div class=\"col-md-1\">\r\n                                                                    -\r\n                                                                </div>\r\n                                                                <div class=\"col-md-3\">\r\n                                                                    <select class=\"form-control\" id=\"attributeType\">\r\n                                                                        <option>amount</option>\r\n                                                                        <option>initiatorAccDetails.balance</option>\r\n                                                                        <option>beneficiaryAccDetails.balance</option>\r\n                                                                    </select>\r\n                                                                </div>\r\n                                                                <div class=\"col-md-12\">\r\n                                                                    <hr/>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-12\">\r\n                                                            <div class=\"row\">\r\n                                                                <div class=\"col-md-12\">\r\n                                                                    <h4>Step 4</h4>\r\n                                                                    <hr/>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"row\">\r\n                                                                <div class=\"col-md-3\">\r\n                                                                    Action\r\n                                                                </div>\r\n                                                                <div class=\"col-md-9\">\r\n                                                                    <select class=\"form-control\" id=\"attributeType\">\r\n                                                                        <option>Add</option>\r\n                                                                        <option>Subract</option>\r\n                                                                        <option>Retrieve</option>\r\n                                                                        <option>Greater Than (Static)</option>\r\n                                                                        <option>Less Than (Static)</option>\r\n                                                                        <option>Equals (Static)</option>\r\n                                                                        <option>Greater Than (Variable)</option>\r\n                                                                        <option>Less Than (Variable)</option>\r\n                                                                        <option>Equals (Variable)</option>\r\n                                                                    </select>\r\n                                                                    <small id=\"attributeTypeHelp\" class=\"form-text text-muted\">Please Select Action</small>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"row\" style=\"margin-top: 30px;\">\r\n                                                                <div class=\"col-md-4\">\r\n                                                                    <select class=\"form-control\" id=\"attributeType\">\r\n                                                                        <option>beneficiaryAccDetails.balance</option>\r\n                                                                        <option>initiatorAccDetails.balance</option>\r\n                                                                        <option>amount</option>\r\n                                                                    </select>\r\n                                                                </div>\r\n                                                                <div class=\"col-md-1\">\r\n                                                                    =\r\n                                                                </div>\r\n                                                                <div class=\"col-md-3\">\r\n                                                                    <select class=\"form-control\" id=\"attributeType\">\r\n                                                                        <option>beneficiaryAccDetails.balance</option>\r\n                                                                        <option>initiatorAccDetails.balance</option>\r\n                                                                        <option>amount</option>\r\n                                                                    </select>\r\n                                                                </div>\r\n                                                                <div class=\"col-md-1\">\r\n                                                                    +\r\n                                                                </div>\r\n                                                                <div class=\"col-md-3\">\r\n                                                                    <select class=\"form-control\" id=\"attributeType\">\r\n                                                                        <option>amount</option>\r\n                                                                        <option>initiatorAccDetails.balance</option>\r\n                                                                        <option>beneficiaryAccDetails.balance</option>\r\n                                                                    </select>\r\n                                                                </div>\r\n                                                                <div class=\"col-md-12\">\r\n                                                                    <hr/>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-12\">\r\n                                                            <div class=\"row\">\r\n                                                                <div class=\"col-md-12\">\r\n                                                                    <h4>Step 5</h4>\r\n                                                                    <hr/>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"row\">\r\n                                                                <div class=\"col-md-3\">\r\n                                                                    Action\r\n                                                                </div>\r\n                                                                <div class=\"col-md-9\">\r\n                                                                    <select class=\"form-control\" id=\"attributeType\">\r\n                                                                        <option>Greater Than (Static)</option>\r\n                                                                        <option>Add</option>\r\n                                                                        <option>Subract</option>\r\n                                                                        <option>Retrieve</option>\r\n                                                                        <option>Less Than (Static)</option>\r\n                                                                        <option>Equals (Static)</option>\r\n                                                                        <option>Greater Than (Variable)</option>\r\n                                                                        <option>Less Than (Variable)</option>\r\n                                                                        <option>Equals (Variable)</option>\r\n                                                                    </select>\r\n                                                                    <small id=\"attributeTypeHelp\" class=\"form-text text-muted\">Please Select Action</small>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"row\" style=\"margin-top: 30px;\">\r\n                                                                <div class=\"col-md-4\">\r\n                                                                    <select class=\"form-control\" id=\"attributeType\">\r\n                                                                        <option>initiatorAccDetails.balance</option>\r\n                                                                        <option>beneficiaryAccDetails.balance</option>\r\n                                                                        <option>amount</option>\r\n                                                                    </select>\r\n                                                                </div>\r\n                                                                <div class=\"col-md-4 text-center\">\r\n                                                                    Greater Than (>=)\r\n                                                                </div>\r\n                                                                <div class=\"col-md-4\">\r\n                                                                    <input type=\"text\" class=\"form-control\" id=\"processDesc\" aria-describedby=\"processDescHelp\" placeholder=\"0\" value=\"0\">\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"row\" style=\"margin-top: 5px;\">\r\n                                                                <div class=\"col-md-4 text-center\" style=\"padding: 10px\">\r\n                                                                    <b>Then</b>\r\n                                                                </div>\r\n                                                                <div class=\"col-md-4 text-center\">\r\n                                                                    <select class=\"form-control\" id=\"attributeType\">\r\n                                                                        <option>throw error</option>\r\n                                                                        <option>continue</option>\r\n                                                                    </select>\r\n                                                                </div>\r\n                                                                <div class=\"col-md-4\">\r\n                                                                    <input type=\"text\" class=\"form-control\" id=\"processDesc\" aria-describedby=\"processDescHelp\" placeholder=\"\" value=\"Not Enough Account Balance\">\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"row\" style=\"margin-top: 5px;\">\r\n                                                                <div class=\"col-md-4 text-center\" style=\"padding: 10px\">\r\n                                                                    <b>Else</b>\r\n                                                                </div>\r\n                                                                <div class=\"col-md-4 text-center\">\r\n                                                                    <select class=\"form-control\" id=\"attributeType\">\r\n                                                                        <option>continue</option>\r\n                                                                        <option>throw error</option>\r\n                                                                    </select>\r\n                                                                </div>\r\n                                                                <div class=\"col-md-12\">\r\n                                                                    <hr/>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        \r\n                                                        <div class=\"col-md-12\">\r\n                                                            <div class=\"row\">\r\n                                                                <div class=\"col-md-12\">\r\n                                                                    <h4>Step 6</h4>\r\n                                                                    <hr/>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"row\">\r\n                                                                <div class=\"col-md-3\">\r\n                                                                    Action\r\n                                                                </div>\r\n                                                                <div class=\"col-md-9\">\r\n                                                                    <select class=\"form-control\" id=\"attributeType\">\r\n                                                                        <option>Save</option>\r\n                                                                        <option>Add</option>\r\n                                                                        <option>Subract</option>\r\n                                                                        <option>Retrieve</option>\r\n                                                                        <option>Greater Than (Static)</option>\r\n                                                                        <option>Less Than (Static)</option>\r\n                                                                        <option>Equals (Static)</option>\r\n                                                                        <option>Greater Than (Variable)</option>\r\n                                                                        <option>Less Than (Variable)</option>\r\n                                                                        <option>Equals (Variable)</option>\r\n                                                                    </select>\r\n                                                                    <small id=\"attributeTypeHelp\" class=\"form-text text-muted\">Please Select Action</small>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"row\" style=\"margin-top: 30px;\">\r\n                                                                <div class=\"col-md-3\">\r\n                                                                    Reference Name <br/> (Key Name)\r\n                                                                </div>\r\n                                                                <div class=\"col-md-9\">\r\n                                                                    <select class=\"form-control\" id=\"attributeType\">\r\n                                                                        <option>initiatorAccNo</option>\r\n                                                                        <option>beneficiaryAccNo</option>\r\n                                                                    </select>\r\n                                                                    <small id=\"processNameHelp\" class=\"form-text text-muted\">Please provide a Reference Name</small>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"row\">\r\n                                                                <div class=\"col-md-3\">\r\n                                                                    Data\r\n                                                                </div>\r\n                                                                <div class=\"col-md-9\">\r\n                                                                    <select class=\"form-control\" id=\"attributeType\">\r\n                                                                        <option>initiatorAccDetails</option>\r\n                                                                        <option>beneficiaryAccDetails</option>\r\n                                                                    </select>\r\n                                                                    <small id=\"processNameHelp\" class=\"form-text text-muted\">Please provide the Data to be stored</small>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-12\">\r\n                                                                <hr/>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"col-md-12\">\r\n                                                            <div class=\"row\">\r\n                                                                <div class=\"col-md-12\">\r\n                                                                    <h4>Step 7</h4>\r\n                                                                    <hr/>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"row\">\r\n                                                                <div class=\"col-md-3\">\r\n                                                                    Action\r\n                                                                </div>\r\n                                                                <div class=\"col-md-9\">\r\n                                                                    <select class=\"form-control\" id=\"attributeType\">\r\n                                                                        <option>Save</option>\r\n                                                                        <option>Add</option>\r\n                                                                        <option>Subract</option>\r\n                                                                        <option>Retrieve</option>\r\n                                                                        <option>Greater Than (Static)</option>\r\n                                                                        <option>Less Than (Static)</option>\r\n                                                                        <option>Equals (Static)</option>\r\n                                                                        <option>Greater Than (Variable)</option>\r\n                                                                        <option>Less Than (Variable)</option>\r\n                                                                        <option>Equals (Variable)</option>\r\n                                                                    </select>\r\n                                                                    <small id=\"attributeTypeHelp\" class=\"form-text text-muted\">Please Select Action</small>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"row\" style=\"margin-top: 30px;\">\r\n                                                                <div class=\"col-md-3\">\r\n                                                                    Reference Name <br/> (Key Name)\r\n                                                                </div>\r\n                                                                <div class=\"col-md-9\">\r\n                                                                    <select class=\"form-control\" id=\"attributeType\">\r\n                                                                        <option>initiatorAccNo</option>\r\n                                                                        <option>beneficiaryAccNo</option>\r\n                                                                    </select>\r\n                                                                    <small id=\"processNameHelp\" class=\"form-text text-muted\">Please provide a Reference Name</small>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"row\">\r\n                                                                <div class=\"col-md-3\">\r\n                                                                    Data\r\n                                                                </div>\r\n                                                                <div class=\"col-md-9\">\r\n                                                                    <select class=\"form-control\" id=\"attributeType\">\r\n                                                                        <option>initiatorAccDetails</option>\r\n                                                                        <option>beneficiaryAccDetails</option>\r\n                                                                    </select>\r\n                                                                    <small id=\"processNameHelp\" class=\"form-text text-muted\">Please provide the Data to be stored</small>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-12\">\r\n                                                                <hr/>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div> \r\n                            </div>\r\n                            \r\n                            <div class=\"row\" style=\"margin-top: 20px;\">\r\n                                <div class=\"col-md-12 text-center\">\r\n                                    <button type=\"submit\" class=\"btn btn-block btn-success mb-2\">\r\n                                        <span class=\"oi oi-plus\"></span>\r\n                                        Save\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </fieldset>\r\n                        \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n      \r\n</div>\r\n\r\n\r\n"

/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n  <menubar showsidebar='false' shownotificationbar ='true' ></menubar>\r\n  <div id=\"container\">\r\n    \r\n      <div class=\"row\">\r\n        <div class=\"col-md-8 col-md-offset-2\">\r\n          <div class=\"panel panel-primary\" style=\"margin-top:2%\">\r\n            <div class=\"panel-heading\">\r\n                <b>Reset Password</b>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div class=\"row\" *ngIf=\"showLoading\">\r\n                  <div class=\"col-md-12 text-center\">\r\n                    <bcloader></bcloader>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\" *ngIf=\"!showLoading\">\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"alert alert-danger\" *ngIf=\"showError\">\r\n                        {{errorMessage}}\r\n                    </div>\r\n                    <div class=\"alert alert-info\" *ngIf=\"showInfo\">\r\n                        {{errorMessage}}\r\n                    </div>  \r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                      <label>New Password</label>\r\n                      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"newpassword\" placeholder=\"New Password\" >\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label>Confirm Password</label>\r\n                      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"confirmpassword\" placeholder=\"Confim Password\" >\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-12 text-center\">\r\n                    <a (click)=\"onClickResetPassword()\" class=\"btn btn-success\"> Reset Password </a>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    \r\n  </div>\r\n</div>"

/***/ }),
/* 207 */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n  <menubar showsidebar='true' shownotificationbar ='true' networkid=\"{{networkid}}\"></menubar>\r\n  <div id=\"page-wrapper\">\r\n    \r\n      <div class=\"row\">\r\n        <!-- <div class=\"col-md-12 text-right\" style=\"margin-top:10px\">\r\n          <a data-toggle=\"modal\" data-target=\".bd-create-apikey\" class=\"btn btn-danger\">\r\n              <i class=\"fa fa-minus\"></i> Delete Network\r\n          </a>\r\n        </div> -->\r\n        <div class=\"col-md-12\">\r\n          <div class=\"panel panel-primary\" style=\"margin-top:2%\">\r\n            <div class=\"panel-heading\">\r\n                <b>Settings</b>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-3 text-right\">\r\n                    <label>Select Organization </label>  \r\n                  </div>\r\n                  <div class=\"col-md-9\">\r\n                    <select class=\"form-control\" [(ngModel)]=\"selectedOrg\" (change)=\"onChangeOrganization()\">\r\n                        <option *ngFor=\"let org of orgConfigArray\" value=\"{{org.orgIdentifier}}\">{{org.name}}</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <h4>CA</h4>\r\n                <div class=\"form-group\">\r\n                  <label>CA URL</label>\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"configuration.ca\"placeholder=\"CA URL\" disabled>\r\n                </div>\r\n                <h4>Ordered</h4>\r\n                <div class=\"form-group\">\r\n                  <label>URL</label>\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"configuration.orderer.url\"placeholder=\"url\" disabled>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label>Container Name</label>\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"configuration.orderer.serverhostname\"placeholder=\"Container Name\" disabled>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label>Certificate</label>\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"configuration.orderer.tlscacerts\"placeholder=\"Certificate\" disabled>\r\n                </div>\r\n                <h4>Peers</h4>\r\n                <div *ngFor=\"let peer of configuration.peers\" style=\"padding-left:20px;padding-right:20px\">\r\n                  <h4>{{peer.name}}</h4>\r\n                  <div class=\"form-group\">\r\n                    <label>Request URL</label>\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"peer.requests\" placeholder=\"Request URL\" disabled>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label>Event URL</label>\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"peer.events\" placeholder=\"Event URL\" disabled>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label>Container Name</label>\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"peer.serverhostname\" placeholder=\"Container Name\" disabled>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label>Certificate</label>\r\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"peer.tlscacerts\" placeholder=\"Certificate\" disabled>\r\n                  </div>\r\n                </div>\r\n                <h4>Admin User Details</h4>\r\n                <div class=\"form-group\">\r\n                  <label>Admin Login ID</label>\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"configuration.admin.username\" placeholder=\"Admin Login ID\" disabled>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label>Admin Password</label>\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"configuration.admin.password\" placeholder=\"Admin Password\" disabled>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label>Key Certifcate</label>\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"configuration.admin.key\" placeholder=\"Key Certificate\" disabled>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label>Certifcate</label>\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"configuration.admin.cert\" placeholder=\"Certificate\" disabled>\r\n                </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"modal fade bd-create-apikey\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n              <div class=\"modal-dialog modal-lg\">\r\n                  <div class=\"modal-content\">\r\n                      <div class=\"panel panel-primary\" style=\"margin-bottom:0px\">\r\n                          <div class=\"panel-heading\">\r\n                              <b>Delete Network</b>\r\n                          </div>\r\n                          <div class=\"panel-body\" *ngIf=\"!showModalLoading\">\r\n                              <div class=\"row\">\r\n                                  <div class=\"col-md-12 text-center\" style=\"margin-bottom:20px;\">\r\n                                    This will not uninstall Hyperledger Fabric from your server, but you will not be able to access it through the console\r\n                                  </div>\r\n                                  <div class=\"col-md-12 text-center\" style=\"margin-bottom:10px;\">\r\n                                    Are you sure do you want to delete the Network ?  \r\n                                  </div>\r\n                                  <div class=\"col-md-12 text-center\">\r\n                                      <a class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"deleteNetwork()\">Delete Network</a>\r\n                                      <button class=\"btn btn-success\" data-dismiss=\"modal\">Close</button>\r\n                                  </div>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n        </div> -->\r\n      </div>\r\n    \r\n  </div>\r\n</div>"

/***/ }),
/* 208 */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-default sidebar\" role=\"navigation\">\r\n    <div class=\"sidebar-nav navbar-collapse\">\r\n        <ul class=\"nav\" id=\"side-menu\">\r\n            <li class=\"side-menu-item\">\r\n                <a routerLink=\"/dashboard/{{networkid}}\"><i class=\"fa fa-dashboard fa-fw\"></i> Dashboard</a>\r\n            </li>\r\n            <li class=\"side-menu-item\">\r\n                <a routerLink=\"/channels/{{networkid}}\"><i class=\"fa fa-comments\"></i> Channels </a>\r\n            </li>\r\n            <li class=\"side-menu-item\">\r\n                <a routerLink=\"/blocksview/{{networkid}}\"><i class=\"fa fa-cubes\"></i> Blocks </a>\r\n            </li>\r\n            <li class=\"side-menu-item\">\r\n                <a routerLink=\"/apipage/{{networkid}}\"><i class=\"fa fa-chain\"></i> Test Chaincode </a>\r\n            </li>\r\n            <li class=\"side-menu-item\">\r\n                <a routerLink=\"/settings/{{networkid}}\"><i class=\"fa fa-wrench fa-fw\"></i> Settings </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <!-- /.sidebar-collapse -->\r\n</div>\r\n<!-- /.navbar-static-side -->"

/***/ }),
/* 209 */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n    <menubar></menubar>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <div class=\"panel panel-primary\" style=\"margin-top:50px\">\r\n                  <div class=\"panel-heading\">\r\n                    <i class=\"fa fa-angle-right\"></i>  Please Sign up\r\n                  </div>\r\n                  <div class=\"panel-body\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-sm-12\">\r\n                          <div class=\"alert alert-danger\" *ngIf=\"showError\">\r\n                            {{errorMessage}}\r\n                          </div>\r\n                          <div class=\"alert alert-info\" *ngIf=\"showInfo\">\r\n                              {{errorMessage}}\r\n                            </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label>Name</label>\r\n                        <input class=\"form-control\" [(ngModel)]=\"username\" placeholder=\"Name\">\r\n                        <p class=\"help-block\">Please enter your name</p>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label>Email ID</label>\r\n                        <input class=\"form-control\" [(ngModel)]=\"emailid\" placeholder=\"Enter Email ID\">\r\n                        <p class=\"help-block\">Your Official Email ID to get approval sooner</p>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label>Password</label>\r\n                        <input type=\"password\" [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"Enter Password\">\r\n                      </div>\r\n                      <a *ngIf=\"!showLoading\" (click)=\"signUpUser()\" class=\"btn btn-success btn-block text-center\">Sign Up</a>\r\n                      <a *ngIf=\"!showLoading\" routerLink=\"/login\" class=\"btn btn-primary btn-block text-center\">Back</a>\r\n                      <div class=\"row\" *ngIf=\"showLoading\" >\r\n                        <div class=\"col-md-12 text-center\">\r\n                          <bcloader></bcloader>\r\n                        </div>\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n      \r\n</div>\r\n\r\n\r\n"

/***/ }),
/* 210 */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n    <menubar showsidebar='true' shownotificationbar ='true'  networkid=\"{{networkid}}\"></menubar>\r\n    <div id=\"page-wrapper\">\r\n        <div class=\"row\" *ngIf=\"showError\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"alert alert-danger\" >\r\n                {{errorMessage}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"showInfo\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"alert alert-info\" >\r\n                {{errorMessage}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"showLoading\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\" style=\"padding-top:20px;\">\r\n                    <bcloader></bcloader>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"!showLoading\">\r\n            <div class=\"row\" *ngIf=\"viewType == 'SmartContract'\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"panel panel-primary\" style=\"margin-top: 50px;\">\r\n                        <div class=\"panel-heading\">\r\n                            <h3 class=\"panel-title\"> <span class=\"glyphicon glyphicon-log-in\"></span> Smart Contract</h3>\r\n                        </div>\r\n                        <div class=\"panel-body\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-12\">\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"showError\">\r\n                                        {{errorMessage}}\r\n                                    </div>\r\n                                    <div class=\"alert alert-info\" *ngIf=\"showInfo\">\r\n                                        {{errorMessage}}\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <fieldset>\r\n                                <div class=\"row\" style=\"margin-top: 10px;\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <input type=\"text\" class=\"form-control\" id=\"smName\" aria-describedby=\"smNameHelp\" placeholder=\"Smart Contract Name\"  [(ngModel)]=\"smName\" >\r\n                                        <small id=\"smNameHelp\" class=\"form-text text-muted\">Please provide a Smart Contract Name</small>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <input type=\"text\" class=\"form-control\" id=\"smDesc\" aria-describedby=\"smDescHelp\" placeholder=\"Smart Contract Description\"  [(ngModel)]=\"smDesc\" >\r\n                                        <small id=\"smDescHelp\" class=\"form-text text-muted\">Please provide a Smart Contract Description</small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\" style=\"margin-top: 50px;\">\r\n                                    <table class=\"table table-striped table-hover\" style=\"width: 100%\">\r\n                                        <thead>\r\n                                            <tr style=\"background-color: #e6e6e6\">\r\n                                                <th scope=\"col\">\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-sm-6\" style=\"padding-top: 10px; \">\r\n                                                            Process Name\r\n                                                        </div>\r\n                                                        <div class=\"col-sm-6 text-right\">\r\n                                                            <a  class=\"btn btn-success mb-2\"  (click)=\"addProcess()\">\r\n                                                                <span class=\"glyphicon glyphicon-plus-sign\"></span> Process Definition\r\n                                                            </a>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr *ngFor=\"let process of processList\">\r\n                                                <td scope=\"row\">\r\n                                                    <a (click)=\"openProcess(process.processID)\">\r\n                                                        {{ process.processName }}\r\n                                                    </a>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                                <hr/>\r\n                                <div class=\"row\" style=\"margin-top: 20px;\">\r\n                                    <div class=\"col-md-12 text-center\">\r\n                                        <a class=\"btn btn-block btn-success mb-2\" (click)=\"saveSmartContract()\" >\r\n                                            Save Contract\r\n                                        </a>\r\n                                        <a class=\"btn btn-block btn-primary mb-2\" routerLink=\"/smartcontract/{{networkid}}\">\r\n                                            Back\r\n                                        </a>\r\n                                    </div>\r\n                                </div>\r\n                                \r\n                            </fieldset>\r\n                            \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"viewType == 'ProcessDefinition'\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"panel panel-primary\" style=\"margin-top: 50px;\">\r\n                        <div class=\"panel-heading\">\r\n                            <h3 class=\"panel-title\"> <span class=\"glyphicon glyphicon-log-in\"></span> Define Process</h3>\r\n                        </div>\r\n                        <div class=\"panel-body\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-12\">\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"showError\">\r\n                                        {{errorMessage}}\r\n                                    </div>\r\n                                    <div class=\"alert alert-info\" *ngIf=\"showInfo\">\r\n                                        {{errorMessage}}\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <fieldset>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-3\" style=\"padding-top: 40px;\">\r\n                                        <label for=\"exampleInputEmail1\">Process</label>\r\n                                    </div>\r\n                                    <div class=\"col-md-9\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-12\">\r\n                                                <select class=\"form-control\" id=\"processType\" [(ngModel)]=\"processType\" >\r\n                                                    <option  *ngFor=\"let processDropDownOpt of processDropDownOptions\">{{ processDropDownOpt }}</option>\r\n                                                </select>\r\n                                                <small id=\"processTypeHelp\" class=\"form-text text-muted\">Please provide Process Type</small>\r\n                                            </div>\r\n                                            <div class=\"col-md-12\">\r\n                                                <input type=\"text\" class=\"form-control\" id=\"processName\" aria-describedby=\"processNameHelp\" placeholder=\"Process Name\" [(ngModel)]=\"processName\" >\r\n                                                <small id=\"processNameHelp\" class=\"form-text text-muted\">Please provide a Process Name</small>\r\n                                            </div>\r\n                                            <div class=\"col-md-12\">\r\n                                                <input type=\"text\" class=\"form-control\" id=\"processDesc\" aria-describedby=\"processDescHelp\" placeholder=\"Process Description\" [(ngModel)]=\"processDesc\" >\r\n                                                <small id=\"processDescHelp\" class=\"form-text text-muted\">Please provide a Process Description</small>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <hr/>\r\n                                <div class=\"row\" style=\"margin-top: 20px;\">\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-12\">\r\n                                                <div class=\"panel panel-success\">\r\n                                                    <div class=\"panel-heading\">\r\n                                                        <h3 class=\"panel-title\"> <span class=\"glyphicon glyphicon-log-in\"></span> Define Input</h3>\r\n                                                    </div>\r\n                                                    <div class=\"panel-body\">\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-md-12\">\r\n                                                                <input type=\"text\" class=\"form-control\" id=\"inputName\" [(ngModel)]=\"inputName\" aria-describedby=\"attributeNameHelp\" placeholder=\"Input Name\">\r\n                                                                <small id=\"typeNameHelp\" class=\"form-text text-muted\">Input Name cannot have special charecters except _ </small>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-12\">\r\n                                                                <select class=\"form-control\" id=\"inputType\" [(ngModel)]=\"inputType\" >\r\n                                                                    <option  *ngFor=\"let inputDropDownOpt of inputDropDownOptions\">{{ inputDropDownOpt }}</option>\r\n                                                                </select>\r\n                                                                <small id=\"inputTypeHelp\" class=\"form-text text-muted\">Please provide Input Type</small>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-12 text-center\">\r\n                                                                <a class=\"btn btn-block btn-success mb-2\" (click)=\"addInput()\">\r\n                                                                    <span class=\"oi oi-plus\"></span>Add\r\n                                                                </a>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-12\">\r\n                                                                <table class=\"table table-striped table-hover\" style=\"width: 100%; margin-top:50px;\">\r\n                                                                    <thead>\r\n                                                                        <tr>\r\n                                                                            <th scope=\"col\">\r\n                                                                                Input Name\r\n                                                                            </th>\r\n                                                                            <th scope=\"col\">\r\n                                                                                Input Type\r\n                                                                            </th>\r\n                                                                        </tr>\r\n                                                                    </thead>\r\n                                                                    <tbody>\r\n                                                                        <tr *ngFor=\"let inputs of displayProcess.inputList\">\r\n                                                                            <td scope=\"row\">{{inputs.name}}</td>\r\n                                                                            <td>{{inputs.type}}</td>\r\n                                                                        </tr>\r\n                                                                    </tbody>\r\n                                                                </table>\r\n                                                            </div>\r\n                                                            \r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            \r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-12\">\r\n                                                <div class=\"panel panel-info\">\r\n                                                    <div class=\"panel-heading\">\r\n                                                        <h3 class=\"panel-title\"> <span class=\"glyphicon glyphicon-log-in\"></span> Variables</h3>\r\n                                                    </div>\r\n                                                    <div class=\"panel-body\">\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-md-12\">\r\n                                                                <input type=\"text\" class=\"form-control\" id=\"attributeName\" aria-describedby=\"attributeNameHelp\" placeholder=\"Variable Name\" [(ngModel)]=\"variableName\" >\r\n                                                                <small id=\"typeNameHelp\" class=\"form-text text-muted\">Variable Name cannot have special charecters except _ </small>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-12\">\r\n                                                                <select class=\"form-control\" id=\"attributeType\" [(ngModel)]=\"variableType\" >\r\n                                                                    <option  *ngFor=\"let variableDropDownOpt of variableDropDownOptions\">{{ variableDropDownOpt }}</option>\r\n                                                                </select>\r\n                                                                <small id=\"attributeTypeHelp\" class=\"form-text text-muted\">Please provide Variable Type</small>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-12\">\r\n                                                                <input type=\"text\" class=\"form-control\" id=\"attributeName\" aria-describedby=\"attributeNameHelp\" placeholder=\"Default Value\" [(ngModel)]=\"variableDefault\" >\r\n                                                                <small id=\"typeNameHelp\" class=\"form-text text-muted\">Please provide any Default value else leave blank  </small>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-12 text-center\">\r\n                                                                <a class=\"btn btn-block btn-success mb-2\" (click)=\"addVariable()\" >\r\n                                                                    <span class=\"oi oi-plus\"></span>Add\r\n                                                                </a>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-12\">\r\n                                                                <table class=\"table table-striped table-hover\" style=\"width: 100%; margin-top:50px;\">\r\n                                                                    <thead>\r\n                                                                        <tr>\r\n                                                                            <th scope=\"col\">\r\n                                                                                Variable Name\r\n                                                                            </th>\r\n                                                                            <th scope=\"col\">\r\n                                                                                Variable Type\r\n                                                                            </th>\r\n                                                                            <th scope=\"col\">\r\n                                                                                Default\r\n                                                                            </th>\r\n                                                                        </tr>\r\n                                                                    </thead>\r\n                                                                    <tbody>\r\n                                                                        <tr *ngFor=\"let variable of displayProcess.variableList\">\r\n                                                                            <td scope=\"row\">{{variable.name}}</td>\r\n                                                                            <td>{{variable.type}}</td>\r\n                                                                            <td>{{variable.default}}</td>\r\n                                                                        </tr>\r\n                                                                    </tbody>\r\n                                                                </table>\r\n                                                            </div>\r\n                                                            \r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            \r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-8\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-12\">\r\n                                                <div class=\"panel panel-primary\">\r\n                                                    <div class=\"panel-heading\">\r\n                                                        <h3 class=\"panel-title\"> <span class=\"glyphicon glyphicon-log-in\"></span> Process Steps</h3>\r\n                                                    </div>\r\n                                                    <div class=\"panel-body\">\r\n                                                        <div class=\"row\">\r\n                                                            <div class=\"col-md-12 text-right\">\r\n                                                                <a class=\"btn btn-success mb-2\" (click)=\"addStep()\" >\r\n                                                                    <span class=\"oi oi-plus\"></span>Add Step\r\n                                                                </a>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-12\" *ngFor=\"let actionStep of displayProcess.steps\">\r\n                                                                <div class=\"row\">\r\n                                                                    <div class=\"col-md-12\">\r\n                                                                        <h4>Step {{ actionStep.stepNumber }}</h4>\r\n                                                                        <hr/>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"row\">\r\n                                                                    <div class=\"col-md-3\">\r\n                                                                        Action\r\n                                                                    </div>\r\n                                                                    <div class=\"col-md-9\">\r\n                                                                        <select class=\"form-control\" id=\"attributeType\"  [(ngModel)]=\"actionStep.action\" >\r\n                                                                            <option  *ngFor=\"let processActionOpt of processActionOptions\" value=\"{{ processActionOpt.action }}\">{{ processActionOpt.actionDesc }}</option>\r\n                                                                        </select>\r\n                                                                        <small id=\"attributeTypeHelp\" class=\"form-text text-muted\">Please Select Action</small>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <!--  Retrieve -->\r\n                                                                <div *ngIf=\"actionStep.action == 'retrieve'\">\r\n                                                                    <div class=\"row\" >\r\n                                                                        <div class=\"col-md-3\">\r\n                                                                            Reference <br/> (Key Name)\r\n                                                                        </div>\r\n                                                                        <div class=\"col-md-9\">\r\n                                                                            <select class=\"form-control\" id=\"attributeType\"  [(ngModel)]=\"actionStep.actionRetrieve.referenceName\">\r\n                                                                                <option  *ngFor=\"let option of actionStep.actionRetrieve.referenceNameOption\">{{ option.name }}</option>\r\n                                                                            </select>\r\n                                                                            <small id=\"processNameHelp\" class=\"form-text text-muted\">Please provide a Reference </small>\r\n                                                                        </div>\r\n                                                                    </div>\r\n                                                                \r\n                                                                    <div class=\"row\">\r\n                                                                        <div class=\"col-md-3\">\r\n                                                                            Assign to Variable\r\n                                                                        </div>\r\n                                                                        <div class=\"col-md-9\">\r\n                                                                            <select class=\"form-control\" id=\"attributeType\"  [(ngModel)]=\"actionStep.actionRetrieve.assignToVariable\">\r\n                                                                                <option  *ngFor=\"let option of actionStep.actionRetrieve.assignToVariableOption\">{{ option.name }}</option>\r\n                                                                            </select>\r\n                                                                            <small id=\"processNameHelp\" class=\"form-text text-muted\">Please provide a Variable</small>\r\n                                                                        </div>\r\n                                                                        <div class=\"col-md-12\">\r\n                                                                            <hr/>\r\n                                                                        </div>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <!--  Convert To Number -->\r\n                                                                <div *ngIf=\"actionStep.action == 'convertToNumber'\">\r\n                                                                    <div class=\"row\" >\r\n                                                                        <div class=\"col-md-3\">\r\n                                                                            Convert Variable\r\n                                                                        </div>\r\n                                                                        <div class=\"col-md-9\">\r\n                                                                            <select class=\"form-control\" id=\"attributeType\"  [(ngModel)]=\"actionStep.actionConvertToNumber.convertVariable\">\r\n                                                                                <option  *ngFor=\"let option of actionStep.actionConvertToNumber.convertVariableOption\" value=\"{{option.name}}\">{{ option.name }}</option>\r\n                                                                            </select>\r\n                                                                            <small id=\"processNameHelp\" class=\"form-text text-muted\">Please provide convert variable  </small>\r\n                                                                        </div>\r\n                                                                    </div>\r\n                                                                \r\n                                                                    <div class=\"row\">\r\n                                                                        <div class=\"col-md-3\">\r\n                                                                            Assign to Variable\r\n                                                                        </div>\r\n                                                                        <div class=\"col-md-9\">\r\n                                                                            <select class=\"form-control\" id=\"attributeType\"  [(ngModel)]=\"actionStep.actionConvertToNumber.assignToVariable\">\r\n                                                                                <option  *ngFor=\"let option of actionStep.actionConvertToNumber.assignToVariableOption\" value=\"{{option.name}}\">{{ option.name }}</option>\r\n                                                                            </select>\r\n                                                                            <small id=\"processNameHelp\" class=\"form-text text-muted\">Please provide a Variable</small>\r\n                                                                        </div>\r\n                                                                        <div class=\"col-md-12\">\r\n                                                                            <hr/>\r\n                                                                        </div>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <!--  Convert To String -->\r\n                                                                <div *ngIf=\"actionStep.action == 'convertToString'\">\r\n                                                                    <div class=\"row\" >\r\n                                                                        <div class=\"col-md-3\">\r\n                                                                            Convert Variable\r\n                                                                        </div>\r\n                                                                        <div class=\"col-md-9\">\r\n                                                                            <select class=\"form-control\" id=\"attributeType\"  [(ngModel)]=\"actionStep.actionConvertToString.convertVariable\">\r\n                                                                                <option  *ngFor=\"let option of actionStep.actionConvertToString.convertVariableOption\" value=\"{{option.name}}\">{{ option.name }}</option>\r\n                                                                            </select>\r\n                                                                            <small id=\"processNameHelp\" class=\"form-text text-muted\">Please provide convert variable  </small>\r\n                                                                        </div>\r\n                                                                    </div>\r\n                                                                \r\n                                                                    <div class=\"row\">\r\n                                                                        <div class=\"col-md-3\">\r\n                                                                            Assign to Variable\r\n                                                                        </div>\r\n                                                                        <div class=\"col-md-9\">\r\n                                                                            <select class=\"form-control\" id=\"attributeType\"  [(ngModel)]=\"actionStep.actionConvertToString.assignToVariable\">\r\n                                                                                <option  *ngFor=\"let option of actionStep.actionConvertToString.assignToVariableOption\" value=\"{{option.name}}\">{{ option.name }}</option>\r\n                                                                            </select>\r\n                                                                            <small id=\"processNameHelp\" class=\"form-text text-muted\">Please provide a Variable</small>\r\n                                                                        </div>\r\n                                                                        <div class=\"col-md-12\">\r\n                                                                            <hr/>\r\n                                                                        </div>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <!--  Subraction -->\r\n                                                                <div class=\"row\" style=\"margin-top: 30px;\" *ngIf=\"actionStep.action == 'subract'\">\r\n                                                                    <div class=\"col-md-4\">\r\n                                                                        <select class=\"form-control\" id=\"attributeType\" [(ngModel)]=\"actionStep.actionSubract.finalvariable\">\r\n                                                                            <option  *ngFor=\"let option of actionStep.actionSubract.finalvariableOption\">{{ option.name }}</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                    <div class=\"col-md-1\">\r\n                                                                        =\r\n                                                                    </div>\r\n                                                                    <div class=\"col-md-3\">\r\n                                                                        <select class=\"form-control\" id=\"attributeType\" [(ngModel)]=\"actionStep.actionSubract.l1variable\">\r\n                                                                            <option  *ngFor=\"let option of actionStep.actionSubract.finalvariableOption\">{{ option.name }}</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                    <div class=\"col-md-1\">\r\n                                                                        -\r\n                                                                    </div>\r\n                                                                    <div class=\"col-md-3\">\r\n                                                                        <select class=\"form-control\" id=\"attributeType\" [(ngModel)]=\"actionStep.actionSubract.l2variable\">\r\n                                                                            <option  *ngFor=\"let option of actionStep.actionSubract.finalvariableOption\">{{ option.name }}</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                    <div class=\"col-md-12\">\r\n                                                                        <hr/>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <!--  Addition -->\r\n                                                                <div class=\"row\" style=\"margin-top: 30px;\" *ngIf=\"actionStep.action == 'add'\">\r\n                                                                    <div class=\"col-md-4\">\r\n                                                                        <select class=\"form-control\" id=\"attributeType\" [(ngModel)]=\"actionStep.actionAddition.finalvariable\">\r\n                                                                            <option  *ngFor=\"let option of actionStep.actionAddition.finalvariableOption\">{{ option.name }}</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                    <div class=\"col-md-1\">\r\n                                                                        =\r\n                                                                    </div>\r\n                                                                    <div class=\"col-md-3\">\r\n                                                                        <select class=\"form-control\" id=\"attributeType\" [(ngModel)]=\"actionStep.actionAddition.l1variable\">\r\n                                                                            <option  *ngFor=\"let option of actionStep.actionAddition.finalvariableOption\">{{ option.name }}</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                    <div class=\"col-md-1\">\r\n                                                                        +\r\n                                                                    </div>\r\n                                                                    <div class=\"col-md-3\">\r\n                                                                        <select class=\"form-control\" id=\"attributeType\" [(ngModel)]=\"actionStep.actionAddition.l2variable\">\r\n                                                                            <option  *ngFor=\"let option of actionStep.actionAddition.finalvariableOption\">{{ option.name }}</option>\r\n                                                                        </select>\r\n                                                                    </div>\r\n                                                                    <div class=\"col-md-12\">\r\n                                                                        <hr/>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <!-- If condition Greater than -->\r\n                                                                <div *ngIf=\"actionStep.action == 'staticGreaterThan'\">\r\n                                                                    <div class=\"row\" style=\"margin-top: 30px;\">\r\n                                                                        <div class=\"col-md-4\">\r\n                                                                            <select class=\"form-control\" id=\"attributeType\" [(ngModel)]=\"actionStep.actionGreaterThanStatic.comparisonVariable\">\r\n                                                                                    <option  *ngFor=\"let option of actionStep.actionGreaterThanStatic.comparisonVariableOption\" value=\"{{ option.name }}\">{{ option.name }}</option>\r\n                                                                            </select>\r\n                                                                        </div>\r\n                                                                        <div class=\"col-md-4 text-center\">\r\n                                                                            Greater Than (>=)\r\n                                                                        </div>\r\n                                                                        <div class=\"col-md-4\">\r\n                                                                            <input type=\"text\" class=\"form-control\" id=\"processDesc\" aria-describedby=\"processDescHelp\" [(ngModel)]=\"actionStep.actionGreaterThanStatic.comparisonStaticValue\">\r\n                                                                        </div>\r\n                                                                    </div>\r\n                                                                    <div class=\"row\" style=\"margin-top: 5px;\">\r\n                                                                        <div class=\"col-md-4 text-center\" style=\"padding: 10px\">\r\n                                                                            <b>Then</b>\r\n                                                                        </div>\r\n                                                                        <div class=\"col-md-4 text-center\">\r\n                                                                            <select class=\"form-control\" id=\"attributeType\" [(ngModel)]=\"actionStep.actionGreaterThanStatic.thenCondition\">\r\n                                                                                <option value=\"error\" >throw error</option>\r\n                                                                                <option value=\"continue\" >continue</option>\r\n                                                                            </select>\r\n                                                                        </div>\r\n                                                                        <div class=\"col-md-4\" *ngIf=\"actionStep.actionGreaterThanStatic.thenCondition == 'error'\">\r\n                                                                            <input type=\"text\" class=\"form-control\" id=\"processDesc\" aria-describedby=\"processDescHelp\" placeholder=\"Error message\" [(ngModel)]=\"actionStep.actionGreaterThanStatic.thenConditionErrorMessage\">\r\n                                                                        </div>\r\n                                                                    </div>\r\n                                                                    <div class=\"row\" style=\"margin-top: 5px;\">\r\n                                                                        <div class=\"col-md-4 text-center\" style=\"padding: 10px\">\r\n                                                                            <b>Else</b>\r\n                                                                        </div>\r\n                                                                        <div class=\"col-md-4 text-center\">\r\n                                                                            <select class=\"form-control\" id=\"attributeType\" [(ngModel)]=\"actionStep.actionGreaterThanStatic.elseCondition\">\r\n                                                                                <option value=\"error\" >throw error</option>\r\n                                                                                <option value=\"continue\" >continue</option>\r\n                                                                            </select>\r\n                                                                        </div>\r\n                                                                        <div class=\"col-md-4\" *ngIf=\"actionStep.actionGreaterThanStatic.elseCondition == 'error'\">\r\n                                                                            <input type=\"text\" class=\"form-control\" id=\"processDesc\" aria-describedby=\"processDescHelp\" placeholder=\"Error message\" [(ngModel)]=\"actionStep.actionGreaterThanStatic.elseConditionErrorMessage\">\r\n                                                                        </div>\r\n                                                                        <div class=\"col-md-12\">\r\n                                                                            <hr/>\r\n                                                                        </div>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <!-- If condition Less than -->\r\n                                                                <div *ngIf=\"actionStep.action == 'staticLessThan'\">\r\n                                                                    <div class=\"row\" style=\"margin-top: 30px;\">\r\n                                                                        <div class=\"col-md-4\">\r\n                                                                            <select class=\"form-control\" id=\"attributeType\" [(ngModel)]=\"actionStep.actionLessThanStatic.comparisonVariable\">\r\n                                                                                <option  *ngFor=\"let option of actionStep.actionLessThanStatic.comparisonVariableOption\" value=\"{{ option.name }}\">{{ option.name }}</option>\r\n                                                                            </select>\r\n                                                                        </div>\r\n                                                                        <div class=\"col-md-4 text-center\">\r\n                                                                            Less Than (&lt;)\r\n                                                                        </div>\r\n                                                                        <div class=\"col-md-4\">\r\n                                                                            <input type=\"text\" class=\"form-control\" id=\"processDesc\" aria-describedby=\"processDescHelp\" [(ngModel)]=\"actionStep.actionLessThanStatic.comparisonStaticValue\">\r\n                                                                        </div>\r\n                                                                    </div>\r\n                                                                    <div class=\"row\" style=\"margin-top: 5px;\">\r\n                                                                        <div class=\"col-md-4 text-center\" style=\"padding: 10px\">\r\n                                                                            <b>Then</b>\r\n                                                                        </div>\r\n                                                                        <div class=\"col-md-4 text-center\">\r\n                                                                            <select class=\"form-control\" id=\"attributeType\" [(ngModel)]=\"actionStep.actionLessThanStatic.thenCondition\">\r\n                                                                                <option value=\"error\" >throw error</option>\r\n                                                                                <option value=\"continue\" >continue</option>\r\n                                                                            </select>\r\n                                                                        </div>\r\n                                                                        <div class=\"col-md-4\" *ngIf=\"actionStep.actionLessThanStatic.thenCondition == 'error'\">\r\n                                                                            <input type=\"text\" class=\"form-control\" id=\"processDesc\" aria-describedby=\"processDescHelp\" placeholder=\"Error message\" [(ngModel)]=\"actionStep.actionLessThanStatic.thenConditionErrorMessage\">\r\n                                                                        </div>\r\n                                                                    </div>\r\n                                                                    <div class=\"row\" style=\"margin-top: 5px;\">\r\n                                                                        <div class=\"col-md-4 text-center\" style=\"padding: 10px\">\r\n                                                                            <b>Else</b>\r\n                                                                        </div>\r\n                                                                        <div class=\"col-md-4 text-center\">\r\n                                                                            <select class=\"form-control\" id=\"attributeType\" [(ngModel)]=\"actionStep.actionLessThanStatic.elseCondition\">\r\n                                                                                <option value=\"error\" >throw error</option>\r\n                                                                                <option value=\"continue\" >continue</option>\r\n                                                                            </select>\r\n                                                                        </div>\r\n                                                                        <div class=\"col-md-4\" *ngIf=\"actionStep.actionLessThanStatic.elseCondition == 'error'\">\r\n                                                                            <input type=\"text\" class=\"form-control\" id=\"processDesc\" aria-describedby=\"processDescHelp\" placeholder=\"Error message\" [(ngModel)]=\"actionStep.actionLessThanStatic.elseConditionErrorMessage\">\r\n                                                                        </div>\r\n                                                                        <div class=\"col-md-12\">\r\n                                                                            <hr/>\r\n                                                                        </div>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <!-- Save -->\r\n                                                                <div class=\"row\" *ngIf=\"actionStep.action == 'save'\">\r\n                                                                    <div class=\"col-md-3\">\r\n                                                                        Reference <br/> (Key Name)\r\n                                                                    </div>\r\n                                                                    <div class=\"col-md-9\">\r\n                                                                        <select class=\"form-control\" id=\"attributeType\"  [(ngModel)]=\"actionStep.actionSave.referenceName\">\r\n                                                                            <option  *ngFor=\"let option of actionStep.actionSave.referenceNameOption\">{{ option.name }}</option>\r\n                                                                        </select>\r\n                                                                        <small id=\"processNameHelp\" class=\"form-text text-muted\">Please provide a Reference </small>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                                <div class=\"row\" *ngIf=\"actionStep.action == 'save'\">\r\n                                                                    <div class=\"col-md-3\">\r\n                                                                        Value to be stored\r\n                                                                    </div>\r\n                                                                    <div class=\"col-md-9\">\r\n                                                                        <select class=\"form-control\" id=\"attributeType\"  [(ngModel)]=\"actionStep.actionSave.valueVariable\">\r\n                                                                            <option  *ngFor=\"let option of actionStep.actionSave.valueVariableOption\">{{ option.name }}</option>\r\n                                                                        </select>\r\n                                                                        <small id=\"processNameHelp\" class=\"form-text text-muted\">Please provide a Variable</small>\r\n                                                                    </div>\r\n                                                                    <div class=\"col-md-12\">\r\n                                                                        <hr/>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"processType == 'Query'\">\r\n                                            <div class=\"col-md-12\">\r\n                                                <div class=\"panel panel-danger\">\r\n                                                    <div class=\"panel-heading\">\r\n                                                        <h3 class=\"panel-title\"> <span class=\"glyphicon glyphicon-log-in\"></span> Return Variable</h3>\r\n                                                    </div>\r\n                                                    <div class=\"panel-body\">\r\n                                                        <div class=\"row\" style=\"margin-top: 5px;\">\r\n                                                            <div class=\"col-md-3\">\r\n                                                                Value to be Returned\r\n                                                            </div>\r\n                                                            <div class=\"col-md-9\">\r\n                                                                <select class=\"form-control\" id=\"attributeType\"  [(ngModel)]=\"displayProcess.returnVariable\">\r\n                                                                    <option  *ngFor=\"let option of displayProcess.returnVariableOption\">{{ option.name }}</option>\r\n                                                                </select>\r\n                                                                <small id=\"processNameHelp\" class=\"form-text text-muted\">Return Variable </small>\r\n                                                            </div>\r\n                                                            <div class=\"col-md-12\">\r\n                                                                <hr/>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                            <a class=\"btn btn-block btn-success mb-2\" (click)=\"saveProcess()\">\r\n                                                Save Process\r\n                                            </a>\r\n                                            <a class=\"btn btn-block btn-danger mb-2\" (click)=\"closeProcess()\">\r\n                                                Close\r\n                                            </a>\r\n                                    </div>\r\n                                </div>\r\n                            </fieldset>  \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n      \r\n</div>\r\n\r\n\r\n"

/***/ }),
/* 211 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row title-bar\">\r\n  <div class=\"col-sm-12\">\r\n    <a style=\"text-decoration:none\" routerLink=\"/\">\r\n      <img src=\"assets/hcl-logo.png\" style=\"max-height:50px\"/>\r\n      <img src=\"assets/hyperledger-logo.png\" style=\"max-height:50px\"/>\r\n      <span class=\"hc-title-text\">Hyperledger Console</span>\r\n    </a>\r\n  </div>\r\n</div>"

/***/ }),
/* 212 */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n  <menubar showsidebar='false' shownotificationbar='true' networkid=\"{{networkid}}\"></menubar>\r\n  <div id=\"page-wrapper\" [style.border-left]=\"0\" >\r\n\r\n    <div class=\"row\">\r\n      <!-- <div class=\"col-md-12 text-right\" style=\"margin-top:10px\">\r\n        <a data-toggle=\"modal\" data-target=\".bd-create-apikey\" class=\"btn btn-danger\">\r\n            <i class=\"fa fa-minus\"></i> Delete Network\r\n        </a>\r\n      </div> -->\r\n      <div class=\"col-md-12\">\r\n        <div class=\"panel panel-primary\" style=\"margin-top:2%\">\r\n          <div class=\"panel-heading\">\r\n              <b>Upload Private key</b>\r\n          </div>\r\n          <div class=\"panel-body\">\r\n            <div class=\"row rowHeight\">\r\n              <div class=\"col-md-3 text-right\">\r\n                <label>Select Network </label>  \r\n              </div>\r\n              <div class=\"col-md-9\">\r\n                <select class=\"form-control\" [(ngModel)]=\"selectedFolder\" (change)=\"onChangeOrganization()\">\r\n                  <option *ngFor=\"let org of configArray\" value=\"{{org}}\">{{org}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row rowHeight\">\r\n              <div class=\"col-md-3 text-right\">\r\n                <label>Select File </label>  \r\n              </div>\r\n              <div class=\"col-md-9\">\r\n              <!--  accept=\".pem,.ppk\" -->\r\n                <input type=\"file\" (change)=\"fileChange($event)\" accept=\".pem\" name=\"chaincodeFiles\" multiple>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row rowHeight\">\r\n              <div class=\"col-sm-12 text-center\">\r\n                <span class=\"alert alert-danger text-center\" *ngIf=\"showError\">\r\n                    {{errorMessage}}\r\n                </span>\r\n                <span class=\"alert alert-info\" *ngIf=\"showInfo\">\r\n                    {{errorMessage}}\r\n                </span>\r\n              </div>\r\n            </div> \r\n            <div class=\"row rowHeight\" *ngIf=\"showLoading\">\r\n              <div class=\"col-md-12 text-center\">\r\n                  <bcloader></bcloader>\r\n              </div>\r\n            </div>\r\n            \r\n            <div class=\"row rowHeight\" *ngIf=\"!showLoading\">\r\n              <div class=\"com-md-12 text-center\" >\r\n                <a class=\"btn btn-primary\" (click)=\"uploadFile()\">Upload</a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(105);


/***/ })
],[262]);
//# sourceMappingURL=main.bundle.js.map