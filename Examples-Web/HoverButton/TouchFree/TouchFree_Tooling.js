(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["TouchFree"] = factory();
	else
		root["TouchFree"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 931:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigurationManager = void 0;
const TouchFreeServiceTypes_1 = __webpack_require__(5);
const ConnectionManager_1 = __webpack_require__(597);
const uuid_1 = __webpack_require__(614);
// Class: ConfigurationManager
// This class provides a method for changing the configuration of the TouchFree
// Service. Makes use of the static <ConnectionManager> for communication with the Service.
class ConfigurationManager {
    // Function: RequestConfigChange
    // Optionally takes in an <InteractionConfig> or a <PhysicalConfig> and sends them through the <ConnectionManager>
    //
    // Provide a _callback if you require confirmation that your settings were used correctly.
    // If your _callback requires context it should be bound to that context via .bind().
    //
    // WARNING!
    // If a user changes ANY values via the TouchFree Service Settings UI,
    // values set from the Tooling via this function will be discarded.
    static RequestConfigChange(_interaction, _physical, _callback) {
        ConfigurationManager.BaseConfigChangeRequest(_interaction, _physical, _callback, TouchFreeServiceTypes_1.ActionCode.SET_CONFIGURATION_STATE);
    }
    // Function: RequestConfigState
    // Used to request information from the Service via the <ConnectionManager>. Provides an asynchronous
    // <ConfigState> via the _callback parameter.
    //
    // If your _callback requires context it should be bound to that context via .bind()
    static RequestConfigState(_callback) {
        var _a;
        if (_callback === null) {
            console.error("Config state request failed. This call requires a callback.");
            return;
        }
        (_a = ConnectionManager_1.ConnectionManager.serviceConnection()) === null || _a === void 0 ? void 0 : _a.RequestConfigState(_callback);
    }
    // Function: RequestConfigFileChange
    // Requests a modification to the configuration **files** used by the Service. Takes in an
    // <InteractionConfig> and/or a <PhysicalConfig> representing the desired changes & sends
    // them through the <ConnectionManager>
    //
    // Provide a _callback if you require confirmation that your settings were used correctly.
    // If your _callback requires context it should be bound to that context via .bind().
    //
    // WARNING!
    // Any changes that have been made using <RequestConfigChange> by *any* connected client will be
    // lost when changing these files. The change will be applied **to the current config files directly,**
    // disregarding current active config state, and the config will be loaded from files.
    static RequestConfigFileChange(_interaction, _physical, _callback) {
        ConfigurationManager.BaseConfigChangeRequest(_interaction, _physical, _callback, TouchFreeServiceTypes_1.ActionCode.SET_CONFIGURATION_FILE);
    }
    static BaseConfigChangeRequest(_interaction, _physical, _callback, action) {
        var _a;
        let requestID = (0, uuid_1.v4)();
        let content = new TouchFreeServiceTypes_1.PartialConfigState(requestID, _interaction, _physical);
        let request = new TouchFreeServiceTypes_1.CommunicationWrapper(action, content);
        let jsonContent = JSON.stringify(request);
        (_a = ConnectionManager_1.ConnectionManager.serviceConnection()) === null || _a === void 0 ? void 0 : _a.SendMessage(jsonContent, requestID, _callback);
    }
    // Function: RequestConfigState
    // Used to request a <ConfigState> representing the current state of the Service's config
    // files via the WebSocket.
    // Provides a <ConfigState> asynchronously via the _callback parameter.
    //
    // If your _callback requires context it should be bound to that context via .bind()
    static RequestConfigFileState(_callback) {
        var _a;
        if (_callback === null) {
            console.error("Config file state request failed. This call requires a callback.");
            return;
        }
        (_a = ConnectionManager_1.ConnectionManager.serviceConnection()) === null || _a === void 0 ? void 0 : _a.RequestConfigFile(_callback);
    }
}
exports.ConfigurationManager = ConfigurationManager;


/***/ }),

/***/ 449:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TrackedPosition = void 0;
// Enum: TrackedPosition
// INDEX_STABLE - Towards the screen from the proximal knuckle position of the index finger
// INDEX_TIP - The index finger tip position
// WRIST - The wrist position
// NEAREST - The nearest bone to the screen
var TrackedPosition;
(function (TrackedPosition) {
    TrackedPosition[TrackedPosition["INDEX_STABLE"] = 0] = "INDEX_STABLE";
    TrackedPosition[TrackedPosition["INDEX_TIP"] = 1] = "INDEX_TIP";
    TrackedPosition[TrackedPosition["WRIST"] = 2] = "WRIST";
    TrackedPosition[TrackedPosition["NEAREST"] = 3] = "NEAREST";
})(TrackedPosition = exports.TrackedPosition || (exports.TrackedPosition = {}));


/***/ }),

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const ConfigurationManager_1 = __webpack_require__(931);
const ConfigurationTypes = __importStar(__webpack_require__(449));
module.exports = {
    ConfigurationManager: ConfigurationManager_1.ConfigurationManager,
    ConfigurationTypes: ConfigurationTypes,
};


/***/ }),

/***/ 597:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConnectionManager = void 0;
const MessageReceiver_1 = __webpack_require__(184);
const ServiceConnection_1 = __webpack_require__(636);
const TouchFreeServiceTypes_1 = __webpack_require__(5);
// Class: ConnectionManager
// This Class manages the connection to the Service. It provides static variables
// for ease of use and is a Singleton to allow for easy referencing.
class ConnectionManager extends EventTarget {
    // Variable: serviceConnection
    // The public get-only reference to the currently managed <ServiceConnection>.
    static serviceConnection() {
        return ConnectionManager.currentServiceConnection;
    }
    ;
    // Group: Functions
    // Function: init
    // Used to begin the connection. Creates the required <MessageReceiver>.
    // Also attempts to immediately <Connect> to a WebSocket.
    static init() {
        ConnectionManager.messageReceiver = new MessageReceiver_1.MessageReceiver();
        ConnectionManager.instance = new ConnectionManager();
        ConnectionManager.Connect();
    }
    // Function: AddConnectionListener
    // Used to both add the _onConnectFunc action to the listeners of <OnConnected>
    // as well as auto-call the _onConnectFunc if a connection is already made.
    static AddConnectionListener(_onConnectFunc) {
        ConnectionManager.instance.addEventListener('OnConnected', _onConnectFunc);
        if (ConnectionManager.currentServiceConnection !== null &&
            ConnectionManager.currentServiceConnection.webSocket.readyState === WebSocket.OPEN) {
            _onConnectFunc();
        }
    }
    // Function: Connect
    // Creates a new <ServiceConnection> using <iPAddress> and <port>.
    // Also invokes <OnConnected> on all listeners.
    static Connect() {
        ConnectionManager.currentServiceConnection = new ServiceConnection_1.ServiceConnection(ConnectionManager.iPAddress, ConnectionManager.port);
    }
    // Function: HandleHandPresenceEvent
    // Called by the <MessageReciever> to pass HandPresence events via the <HandFound> and
    // <HandsLost> events on this class
    static HandleHandPresenceEvent(_state) {
        ConnectionManager.currentHandPresence = _state;
        let handPresenceEvent;
        if (_state === TouchFreeServiceTypes_1.HandPresenceState.HAND_FOUND) {
            handPresenceEvent = new CustomEvent('HandFound');
        }
        else {
            handPresenceEvent = new CustomEvent('HandsLost');
        }
        ConnectionManager.instance.dispatchEvent(handPresenceEvent);
    }
    // Function: Disconnect
    // Disconnects <currentServiceConnection> if it is connected to a WebSocket and
    // sets it to null.
    static Disconnect() {
        if (ConnectionManager.currentServiceConnection !== null) {
            ConnectionManager.currentServiceConnection.Disconnect();
            ConnectionManager.currentServiceConnection = null;
        }
    }
    // Function: RequestServiceStatus
    // Used to request information from the Service via the <ConnectionManager>. Provides an asynchronous
    // <ServiceStatus> via the _callback parameter.
    //
    // If your _callback requires context it should be bound to that context via .bind()
    static RequestServiceStatus(_callback) {
        var _a;
        if (_callback === null) {
            console.error("Request failed. This is due to a missing callback");
            return;
        }
        (_a = ConnectionManager.serviceConnection()) === null || _a === void 0 ? void 0 : _a.RequestServiceStatus(_callback);
    }
    // Function: RequestServiceStatus
    // Function to get the current hand presense state
    static GetCurrentHandPresence() {
        return ConnectionManager.currentHandPresence;
    }
}
exports.ConnectionManager = ConnectionManager;
// Variable: iPAddress
// The IP Address that will be used in the <ServiceConnection> to connect to the target
// WebSocket. This value is settable in the Inspector.
ConnectionManager.iPAddress = "127.0.0.1";
// Variable: port
// The Port that will be used in the <ServiceConnection> to connect to the target WebSocket.
// This value is settable in the Inspector.
ConnectionManager.port = "9739";
// Variable: currentHandPresence
// Private reference to the current hand presense state
ConnectionManager.currentHandPresence = TouchFreeServiceTypes_1.HandPresenceState.HANDS_LOST;


/***/ }),

/***/ 184:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessageReceiver = void 0;
const TouchFreeServiceTypes_1 = __webpack_require__(5);
const TouchFreeToolingTypes_1 = __webpack_require__(579);
const InputActionManager_1 = __webpack_require__(53);
const ConnectionManager_1 = __webpack_require__(597);
const HandDataManager_1 = __webpack_require__(333);
// Class: MessageReceiver
// Handles the receiving of messages from the Service in an ordered manner.
// Distributes the results of the messages to the respective managers.
class MessageReceiver {
    // Group: Functions
    // Function: constructor
    // Starts the two regular intervals managed for this (running <ClearUnresponsiveCallbacks> on an
    // interval of <callbackClearTimer> and <Update> on an interval of updateDuration
    constructor() {
        // Group: Variables
        // Variable: callbackClearTimer
        // The amount of time between checks of <responseCallbacks> to eliminate expired
        // <ResponseCallbacks>. Used in <ClearUnresponsiveCallbacks>.
        this.callbackClearTimer = 300;
        // Variable: update Rate
        // How many times per second to process <WebSocketResponse> & <TouchFreeInputActions>
        this.updateRate = 60;
        // Variable: actionCullToCount
        // How many non-essential <TouchFreeInputActions> should the <actionQueue> be trimmed *to* per
        // frame. This is used to ensure the Tooling can keep up with the Events sent over the
        // WebSocket.
        this.actionCullToCount = 2;
        // Variable: actionQueue
        // A queue of <TouchFreeInputActions> that have been received from the Service.
        this.actionQueue = [];
        // Variable: latestHandDataItem
        // The latest <HandFrame> that has been received from the Service.
        this.latestHandDataItem = undefined;
        // Variable: responseQueue
        // A queue of <WebSocketResponses> that have been received from the Service.
        this.responseQueue = [];
        // Variable: responseCallbacks
        // A dictionary of unique request IDs and <ResponseCallbacks> that represent requests that are awaiting response from the Service.
        this.responseCallbacks = {};
        // Variable: configStateQueue
        // A queue of <ConfigState> that have been received from the Service.
        this.configStateQueue = [];
        // Variable: configStateCallbacks
        // A dictionary of unique request IDs and <ConfigStateCallback> that represent requests that are awaiting response from the Service.
        this.configStateCallbacks = {};
        // Variable: serviceStatusQueue
        // A queue of <ServiceStatus> that have been received from the Service.
        this.serviceStatusQueue = [];
        // Variable: serviceStatusCallbacks
        // A dictionary of unique request IDs and <ServiceStatusCallback> that represent requests that are awaiting response from the Service.
        this.serviceStatusCallbacks = {};
        // Variable: trackingStateQueue
        // A queue of <TrackingStates> that have been received from the Service.
        this.trackingStateQueue = [];
        // Variable: trackingSettingsStateCallbacks
        // A dictionary of unique request IDs and <TrackingStateCallback> that represent requests that are awaiting response from the Service.
        this.trackingStateCallbacks = {};
        // Used to ensure UP events are sent at the correct position relative to the previous
        // MOVE event.
        // This is required due to the culling of events from the actionQueue in CheckForAction.
        this.lastKnownCursorPosition = [0, 0];
        this.lastStateUpdate = TouchFreeServiceTypes_1.HandPresenceState.PROCESSED;
        this.updateDuration = (1 / this.updateRate) * 1000;
        this.callbackClearInterval = setInterval(this.ClearUnresponsivePromises, this.callbackClearTimer);
        this.updateInterval = setInterval(this.Update.bind(this), this.updateDuration);
    }
    // Function: Update
    // Update function. Checks all queues for messages to handle. Run on an interval
    // started during the constructor
    Update() {
        this.CheckForResponse();
        this.CheckForConfigState();
        this.CheckForServiceStatus();
        this.CheckForTrackingStateResponse();
        this.CheckForAction();
        this.CheckForHandData();
    }
    // Function: CheckForResponse
    // Used to check the <responseQueue> for a <WebSocketResponse>. Sends it to Sends it to <HandleCallbackList> with
    // the <responseCallbacks> dictionary if there is one.
    CheckForResponse() {
        let response = this.responseQueue.shift();
        if (response !== undefined) {
            const handledResponse = MessageReceiver.HandleCallbackList(response, this.responseCallbacks);
            if (!handledResponse) {
                console.log("Received a WebSocketResponse that did not match a callback." +
                    "This is the content of the response: \n Response ID: " + response.requestID +
                    "\n Status: " + response.status + "\n Message: " + response.message +
                    "\n Original request - " + response.originalRequest);
            }
            else {
                // This is logged to aid users in debugging
                console.log(response.message);
            }
        }
    }
    // Function: CheckForConfigState
    // Used to check the <configStateQueue> for a <ConfigState>. Sends it to <HandleCallbackList> with
    // the <configStateCallbacks> dictionary if there is one.
    CheckForConfigState() {
        let configState = this.configStateQueue.shift();
        if (configState !== undefined) {
            MessageReceiver.HandleCallbackList(configState, this.configStateCallbacks);
        }
    }
    // Function: HandleCallbackList
    // Checks the dictionary of <callbacks> for a matching request ID. If there is a
    // match, calls the callback action in the matching <TouchFreeRequestCallback>.
    // Returns true if it was able to find a callback, returns false if not
    static HandleCallbackList(callbackResult, callbacks) {
        if (callbacks !== undefined) {
            for (let key in callbacks) {
                if (key === callbackResult.requestID) {
                    callbacks[key].callback(callbackResult);
                    delete callbacks[key];
                    return true;
                }
            }
            ;
        }
        return false;
    }
    // Function: CheckForServiceStatus
    // Used to check the <serviceStatusQueue> for a <ServiceStatus>. Sends it to <HandleCallbackList> with
    // the <serviceStatusCallbacks> dictionary if there is one.
    CheckForServiceStatus() {
        let serviceStatus = this.serviceStatusQueue.shift();
        if (serviceStatus !== undefined) {
            MessageReceiver.HandleCallbackList(serviceStatus, this.serviceStatusCallbacks);
        }
    }
    // Function: CheckForTrackingStateResponse
    // Used to check the <trackingStateQueue> for a <TrackingStateResponse>. Sends it to <HandleTrackingStateResponse> if there is one.
    CheckForTrackingStateResponse() {
        const trackingStateResponse = this.trackingStateQueue.shift();
        if (trackingStateResponse !== undefined) {
            this.HandleTrackingStateResponse(trackingStateResponse);
        }
    }
    // Function: HandleTrackingStateResponse
    // Checks the dictionary of <trackingStateCallbacks> for a matching request ID. If there is a
    // match, calls the callback action in the matching <TrackingStateCallback>.
    HandleTrackingStateResponse(trackingStateResponse) {
        if (this.trackingStateCallbacks !== undefined) {
            for (let key in this.trackingStateCallbacks) {
                if (key === trackingStateResponse.requestID) {
                    this.trackingStateCallbacks[key].callback(trackingStateResponse);
                    delete this.trackingStateCallbacks[key];
                    return;
                }
            }
            ;
        }
    }
    // Function: CheckForAction
    // Checks <actionQueue> for valid <TouchFreeInputActions>. If there are too many in the queue,
    // clears out non-essential <TouchFreeInputActions> down to the number specified by
    // <actionCullToCount>. If any remain, sends the oldest <TouchFreeInputAction> to
    // <InputActionManager> to handle the action.
    // UP <InputType>s have their positions set to the last known position to ensure
    // input events trigger correctly.
    CheckForAction() {
        while (this.actionQueue.length > this.actionCullToCount) {
            if (this.actionQueue[0] !== undefined) {
                // Stop shrinking the queue if we have a 'key' input event
                if (this.actionQueue[0].InteractionFlags & TouchFreeToolingTypes_1.BitmaskFlags.MOVE ||
                    this.actionQueue[0].InteractionFlags & TouchFreeToolingTypes_1.BitmaskFlags.NONE_INPUT) {
                    // We want to ignore non-move results
                    this.actionQueue.shift();
                }
                else {
                    break;
                }
            }
        }
        let action = this.actionQueue.shift();
        if (action !== undefined) {
            // Parse newly received messages & distribute them
            let converted = (0, TouchFreeToolingTypes_1.ConvertInputAction)(action);
            //Cache or use the lastKnownCursorPosition. Copy the array to ensure it is not a reference
            if (converted.InputType !== TouchFreeToolingTypes_1.InputType.UP) {
                this.lastKnownCursorPosition = Array.from(converted.CursorPosition);
            }
            else {
                converted.CursorPosition = Array.from(this.lastKnownCursorPosition);
            }
            // Wrapping the function in a timeout of 0 seconds allows the dispatch to be asynchronous
            setTimeout(() => {
                InputActionManager_1.InputActionManager.HandleInputAction(converted);
            });
        }
        if (this.lastStateUpdate !== TouchFreeServiceTypes_1.HandPresenceState.PROCESSED) {
            ConnectionManager_1.ConnectionManager.HandleHandPresenceEvent(this.lastStateUpdate);
            this.lastStateUpdate = TouchFreeServiceTypes_1.HandPresenceState.PROCESSED;
        }
    }
    // Function: CheckForHandData
    // Checks <latestHandDataItem> and if the <HandFrame> is not undefined sends it to
    // <HandDataManager> to handle the frame.
    CheckForHandData() {
        let handFrame = this.latestHandDataItem;
        if (handFrame !== undefined) {
            // Wrapping the function in a timeout of 0 seconds allows the dispatch to be asynchronous
            setTimeout(() => {
                HandDataManager_1.HandDataManager.HandleHandFrame(handFrame);
            });
        }
    }
    // Function: ClearUnresponsiveCallbacks
    // Waits for <callbackClearTimer> seconds and clears all <ResponseCallbacks> that are
    // expired from <responseCallbacks>.
    ClearUnresponsivePromises() {
        let lastClearTime = Date.now();
        MessageReceiver.ClearUnresponsiveItems(lastClearTime, this.responseCallbacks);
        MessageReceiver.ClearUnresponsiveItems(lastClearTime, this.configStateCallbacks);
        MessageReceiver.ClearUnresponsiveItems(lastClearTime, this.serviceStatusCallbacks);
    }
    static ClearUnresponsiveItems(lastClearTime, callbacks) {
        if (callbacks !== undefined) {
            for (let key in callbacks) {
                if (callbacks[key].timestamp < lastClearTime) {
                    delete callbacks[key];
                }
                else {
                    break;
                }
            }
            ;
        }
    }
}
exports.MessageReceiver = MessageReceiver;


/***/ }),

/***/ 636:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServiceConnection = void 0;
const TouchFreeToolingTypes_1 = __webpack_require__(579);
const TouchFreeServiceTypes_1 = __webpack_require__(5);
const ConnectionManager_1 = __webpack_require__(597);
const uuid_1 = __webpack_require__(614);
// Class: ServiceConnection
// This represents a connection to a TouchFree Service. It should be created by a
// <ConnectionManager> to ensure there is only one active connection at a time. The sending
// and receiving of data to the Tooling is handled here as well as the creation of a
// <MessageReceiver> to ensure the data is handled properly.
class ServiceConnection {
    // Group: Functions
    // Function: constructor
    // The constructor for <ServiceConnection> that can be given a different IP Address and Port
    // to connect to on construction. This constructor also sets up the redirects of incoming
    // messages to <OnMessage>. Puts a listener on the websocket so that once it opens, a handshake
    // request is sent with this Tooling's API version number. The service will not send data over
    // an open connection until this handshake is completed succesfully.
    constructor(_ip = "127.0.0.1", _port = "9739") {
        this.webSocket = new WebSocket(`ws://${_ip}:${_port}/connect`);
        this.webSocket.addEventListener('message', this.OnMessage.bind(this));
        this.handshakeRequested = false;
        this.handshakeCompleted = false;
        this.webSocket.addEventListener('open', this.RequestHandshake.bind(this), { once: true });
    }
    // Function: Disconnect
    // Can be used to force the connection to the <webSocket> to be closed.
    Disconnect() {
        if (this.webSocket !== null) {
            this.webSocket.close();
        }
    }
    RequestHandshake() {
        if (!this.handshakeCompleted) {
            let guid = (0, uuid_1.v4)();
            // construct message
            let handshakeRequest = {
                "action": TouchFreeServiceTypes_1.ActionCode.VERSION_HANDSHAKE,
                "content": {
                    "requestID": guid
                }
            };
            handshakeRequest.content[TouchFreeToolingTypes_1.VersionInfo.API_HEADER_NAME] = TouchFreeToolingTypes_1.VersionInfo.ApiVersion;
            if (!this.handshakeRequested) {
                this.handshakeRequested = true;
                // send message
                this.SendMessage(JSON.stringify(handshakeRequest), guid, this.ConnectionResultCallback);
            }
        }
    }
    // Function: ConnectionResultCallback
    // Passed into <SendMessage> as part of connecting to TouchFree Service, handles the
    // result of the Version Checking handshake.
    ConnectionResultCallback(response) {
        if (response.status === "Success") {
            console.log("Successful Connection");
            this.handshakeCompleted = true;
            ConnectionManager_1.ConnectionManager.instance.dispatchEvent(new Event('OnConnected'));
        }
        else {
            console.log(`Connection to Service failed. Details:\n${response.message}`);
        }
    }
    // Function: OnMessage
    // The first point of contact for new messages received, these are sorted into appropriate
    // types based on their <ActionCode> and added to queues on the <ConnectionManager's>
    // <MessageReceiver>.
    OnMessage(_message) {
        let looseData = JSON.parse(_message.data);
        switch (looseData.action) {
            case TouchFreeServiceTypes_1.ActionCode.INPUT_ACTION:
                let wsInput = looseData.content;
                ConnectionManager_1.ConnectionManager.messageReceiver.actionQueue.push(wsInput);
                break;
            case TouchFreeServiceTypes_1.ActionCode.HAND_PRESENCE_EVENT:
                let handEvent = looseData.content;
                ConnectionManager_1.ConnectionManager.messageReceiver.lastStateUpdate = handEvent.state;
                break;
            case TouchFreeServiceTypes_1.ActionCode.SERVICE_STATUS:
                let serviceStatus = looseData.content;
                ConnectionManager_1.ConnectionManager.messageReceiver.serviceStatusQueue.push(serviceStatus);
                break;
            case TouchFreeServiceTypes_1.ActionCode.HAND_DATA:
                let wsHandData = looseData.content;
                ConnectionManager_1.ConnectionManager.messageReceiver.latestHandDataItem = wsHandData;
                break;
            case TouchFreeServiceTypes_1.ActionCode.CONFIGURATION_STATE:
            case TouchFreeServiceTypes_1.ActionCode.CONFIGURATION_FILE_STATE:
            case TouchFreeServiceTypes_1.ActionCode.QUICK_SETUP_CONFIG:
                let configFileState = looseData.content;
                ConnectionManager_1.ConnectionManager.messageReceiver.configStateQueue.push(configFileState);
                break;
            case TouchFreeServiceTypes_1.ActionCode.CONFIGURATION_RESPONSE:
            case TouchFreeServiceTypes_1.ActionCode.VERSION_HANDSHAKE_RESPONSE:
            case TouchFreeServiceTypes_1.ActionCode.SERVICE_STATUS_RESPONSE:
            case TouchFreeServiceTypes_1.ActionCode.CONFIGURATION_FILE_RESPONSE:
            case TouchFreeServiceTypes_1.ActionCode.QUICK_SETUP_RESPONSE:
                let response = looseData.content;
                ConnectionManager_1.ConnectionManager.messageReceiver.responseQueue.push(response);
                break;
            case TouchFreeServiceTypes_1.ActionCode.TRACKING_STATE:
                const trackingResponse = looseData.content;
                ConnectionManager_1.ConnectionManager.messageReceiver.trackingStateQueue.push(trackingResponse);
        }
    }
    // Function: SendMessage
    // Used internally to send or request information from the Service via the <webSocket>. To
    // be given a pre-made _message and _requestID. Provides an asynchronous <WebSocketResponse>
    // via the _callback parameter.
    //
    // If your _callback requires context it should be bound to that context via .bind()
    SendMessage(_message, _requestID, _callback) {
        if (_requestID === "") {
            if (_callback !== null) {
                let response = new TouchFreeServiceTypes_1.WebSocketResponse("", "Failure", "Request failed. This is due to a missing or invalid requestID", _message);
                _callback(response);
            }
            console.error("Request failed. This is due to a missing or invalid requestID");
            return;
        }
        if (_callback != null) {
            ConnectionManager_1.ConnectionManager.messageReceiver.responseCallbacks[_requestID] =
                new TouchFreeServiceTypes_1.ResponseCallback(Date.now(), _callback);
        }
        this.webSocket.send(_message);
    }
    // Function: RequestConfigState
    // Used internally to request information from the Service via the <webSocket>.
    // Provides an asynchronous <ConfigState> via the _callback parameter.
    //
    // If your _callback requires context it should be bound to that context via .bind()
    RequestConfigState(_callback) {
        if (_callback === null) {
            console.error("Request for config state failed. This is due to a missing callback");
            return;
        }
        let guid = (0, uuid_1.v4)();
        let request = new TouchFreeServiceTypes_1.ConfigChangeRequest(guid);
        let wrapper = new TouchFreeServiceTypes_1.CommunicationWrapper(TouchFreeServiceTypes_1.ActionCode.REQUEST_CONFIGURATION_STATE, request);
        let message = JSON.stringify(wrapper);
        ConnectionManager_1.ConnectionManager.messageReceiver.configStateCallbacks[guid] =
            new TouchFreeServiceTypes_1.ConfigStateCallback(Date.now(), _callback);
        this.webSocket.send(message);
    }
    // Function: RequestServiceStatus
    // Used internally to request information from the Service via the <webSocket>.
    // Provides an asynchronous <ServiceStatus> via the _callback parameter.
    //
    // If your _callback requires context it should be bound to that context via .bind()
    RequestServiceStatus(_callback) {
        if (_callback === null) {
            console.error("Request for service status failed. This is due to a missing callback");
            return;
        }
        let guid = (0, uuid_1.v4)();
        let request = new TouchFreeServiceTypes_1.ServiceStatusRequest(guid);
        let wrapper = new TouchFreeServiceTypes_1.CommunicationWrapper(TouchFreeServiceTypes_1.ActionCode.REQUEST_SERVICE_STATUS, request);
        let message = JSON.stringify(wrapper);
        ConnectionManager_1.ConnectionManager.messageReceiver.serviceStatusCallbacks[guid] =
            new TouchFreeServiceTypes_1.ServiceStatusCallback(Date.now(), _callback);
        this.webSocket.send(message);
    }
    // Function: RequestConfigFile
    // Used internally to request information from the Service via the <webSocket>.
    // Provides an asynchronous <ConfigState> via the _callback parameter.
    //
    // If your _callback requires context it should be bound to that context via .bind()
    RequestConfigFile(_callback) {
        if (_callback === null) {
            console.error("Request for config file failed. This is due to a missing callback");
            return;
        }
        let guid = (0, uuid_1.v4)();
        let request = new TouchFreeServiceTypes_1.ConfigChangeRequest(guid);
        let wrapper = new TouchFreeServiceTypes_1.CommunicationWrapper(TouchFreeServiceTypes_1.ActionCode.REQUEST_CONFIGURATION_FILE, request);
        let message = JSON.stringify(wrapper);
        ConnectionManager_1.ConnectionManager.messageReceiver.configStateCallbacks[guid] =
            new TouchFreeServiceTypes_1.ConfigStateCallback(Date.now(), _callback);
        this.webSocket.send(message);
    }
    // Function: QuickSetupRequest
    // Used internally to pass information to the Service about performing a QuickSetup
    // via the <webSocket>.
    // Provides an asynchronous <WebSocketResponse> via the _callback parameter.
    // Provides an asynchronous <ConfigState> via the _configurationCallback parameter.
    //
    // If your _callback requires context it should be bound to that context via .bind()
    // If your _configurationCallback requires context it should be bound to that context via .bind()
    QuickSetupRequest(atTopTarget, _callback, _configurationCallback) {
        const position = atTopTarget ? 'Top' : 'Bottom';
        let guid = (0, uuid_1.v4)();
        let request = {
            requestID: guid,
            position
        };
        let wrapper = new TouchFreeServiceTypes_1.CommunicationWrapper(TouchFreeServiceTypes_1.ActionCode.QUICK_SETUP, request);
        let message = JSON.stringify(wrapper);
        if (_callback !== null) {
            ConnectionManager_1.ConnectionManager.messageReceiver.responseCallbacks[guid] =
                new TouchFreeServiceTypes_1.ResponseCallback(Date.now(), _callback);
        }
        if (_configurationCallback !== null) {
            ConnectionManager_1.ConnectionManager.messageReceiver.configStateCallbacks[guid] =
                new TouchFreeServiceTypes_1.ConfigStateCallback(Date.now(), _configurationCallback);
        }
        this.webSocket.send(message);
    }
    // Function: RequestTrackingState
    // Used internally to request information from the Service via the <webSocket>.
    // Provides an asynchronous <TrackingStateResponse> via the _callback parameter.
    //
    // If your _callback requires context it should be bound to that context via .bind()
    RequestTrackingState(_callback) {
        if (!_callback) {
            console.error('Request for tracking state failed. This is due to a missing callback');
            return;
        }
        const guid = (0, uuid_1.v4)();
        const request = new TouchFreeServiceTypes_1.SimpleRequest(guid);
        const wrapper = new TouchFreeServiceTypes_1.CommunicationWrapper(TouchFreeServiceTypes_1.ActionCode.GET_TRACKING_STATE, request);
        const message = JSON.stringify(wrapper);
        ConnectionManager_1.ConnectionManager.messageReceiver.trackingStateCallbacks[guid] = new TouchFreeServiceTypes_1.TrackingStateCallback(Date.now(), _callback);
        this.webSocket.send(message);
    }
    // Function: RequestTrackingChange
    // Used internally to update the configuration of the Tracking via the <webSocket>.
    // Provides an asynchronous <TrackingStateResponse> via the _callback parameter.
    //
    // If your _callback requires context it should be bound to that context via .bind()
    RequestTrackingChange(_state, _callback) {
        const requestID = (0, uuid_1.v4)();
        const requestContent = {
            requestID
        };
        if (_state.mask !== undefined) {
            requestContent.mask = _state.mask;
        }
        if (_state.allowImages !== undefined) {
            requestContent.allowImages = _state.allowImages;
        }
        if (_state.cameraReversed !== undefined) {
            requestContent.cameraReversed = _state.cameraReversed;
        }
        if (_state.analyticsEnabled !== undefined) {
            requestContent.analyticsEnabled = _state.analyticsEnabled;
        }
        const wrapper = new TouchFreeServiceTypes_1.CommunicationWrapper(TouchFreeServiceTypes_1.ActionCode.SET_TRACKING_STATE, requestContent);
        const message = JSON.stringify(wrapper);
        if (_callback !== null) {
            ConnectionManager_1.ConnectionManager.messageReceiver.trackingStateCallbacks[requestID] = new TouchFreeServiceTypes_1.TrackingStateCallback(Date.now(), _callback);
        }
        this.webSocket.send(message);
    }
}
exports.ServiceConnection = ServiceConnection;


/***/ }),

/***/ 5:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TrackingStateCallback = exports.SimpleRequest = exports.TrackingStateRequest = exports.CommunicationWrapper = exports.ResponseCallback = exports.WebSocketResponse = exports.ServiceStatusCallback = exports.ServiceStatusRequest = exports.ServiceStatus = exports.ConfigStateCallback = exports.HandRenderDataStateRequest = exports.ConfigChangeRequest = exports.ConfigState = exports.PartialConfigState = exports.TouchFreeRequest = exports.TouchFreeRequestCallback = exports.HandPresenceEvent = exports.Compatibility = exports.HandPresenceState = exports.ActionCode = void 0;
// Enum: ActionCode
// INPUT_ACTION - Represents standard interaction data
// CONFIGURATION_STATE - Represents a collection of configurations from the Service
// CONFIGURATION_RESPONSE - Represents a Success/Failure response from a SET_CONFIGURATION_STATE
// SET_CONFIGURATION_STATE - Represents a request to set new configuration files on the Service
// REQUEST_CONFIGURATION_STATE - Represents a request to receive a current CONFIGURATION_STATE from the Service
// VERSION_HANDSHAKE - Represents an outgoing message from Tooling to Service, attempting to compare API versions for compatibility
// HAND_PRESENCE_EVENT - Represents the result coming in from the Service
// REQUEST_SERVICE_STATUS - Represents a request to receive a current SERVICE_STATUS from the Service
// SERVICE_STATUS_RESPONSE - Represents a Failure response from a REQUEST_SERVICE_STATUS
// SERVICE_STATUS - Represents information about the current state of the Service
// QUICK_SETUP - Represents a request for performing a quick setup of the Service
// QUICK_SETUP_CONFIG - Represents a response from the Service after a QUICK_SETUP request where the configuration was updated as the
//                      quick setup was successfully completed.
// QUICK_SETUP_RESPONSE - Represents a response from the Service after a QUICK_SETUP request where the configuration was not updated.
// GET_TRACKING_STATE - Represents a request to receive the current state of the tracking settings
// SET_TRACKING_STATE - Represents a request to set the current state of the tracking settings
// TRACKING_STATE - Represents a response from the Service with the current state of the tracking settings,
//                  recieved following either a GET_TRACKING_STATE or a SET_TRACKING_STATE
// HAND_DATA - Represents more complete hand data sent from the service.
// SET_HAND_DATA_STREAM_STATE - Represents a request to the Service to enable/disable the HAND_DATA stream or change the lens to
//                              have the hand position relative to.
var ActionCode;
(function (ActionCode) {
    ActionCode["INPUT_ACTION"] = "INPUT_ACTION";
    ActionCode["CONFIGURATION_STATE"] = "CONFIGURATION_STATE";
    ActionCode["CONFIGURATION_RESPONSE"] = "CONFIGURATION_RESPONSE";
    ActionCode["SET_CONFIGURATION_STATE"] = "SET_CONFIGURATION_STATE";
    ActionCode["REQUEST_CONFIGURATION_STATE"] = "REQUEST_CONFIGURATION_STATE";
    ActionCode["VERSION_HANDSHAKE"] = "VERSION_HANDSHAKE";
    ActionCode["VERSION_HANDSHAKE_RESPONSE"] = "VERSION_HANDSHAKE_RESPONSE";
    ActionCode["HAND_PRESENCE_EVENT"] = "HAND_PRESENCE_EVENT";
    ActionCode["REQUEST_SERVICE_STATUS"] = "REQUEST_SERVICE_STATUS";
    ActionCode["SERVICE_STATUS_RESPONSE"] = "SERVICE_STATUS_RESPONSE";
    ActionCode["SERVICE_STATUS"] = "SERVICE_STATUS";
    ActionCode["REQUEST_CONFIGURATION_FILE"] = "REQUEST_CONFIGURATION_FILE";
    ActionCode["CONFIGURATION_FILE_STATE"] = "CONFIGURATION_FILE_STATE";
    ActionCode["SET_CONFIGURATION_FILE"] = "SET_CONFIGURATION_FILE";
    ActionCode["CONFIGURATION_FILE_RESPONSE"] = "CONFIGURATION_FILE_RESPONSE";
    ActionCode["QUICK_SETUP"] = "QUICK_SETUP";
    ActionCode["QUICK_SETUP_CONFIG"] = "QUICK_SETUP_CONFIG";
    ActionCode["QUICK_SETUP_RESPONSE"] = "QUICK_SETUP_RESPONSE";
    ActionCode["GET_TRACKING_STATE"] = "GET_TRACKING_STATE";
    ActionCode["SET_TRACKING_STATE"] = "SET_TRACKING_STATE";
    ActionCode["TRACKING_STATE"] = "TRACKING_STATE";
    ActionCode["HAND_DATA"] = "HAND_DATA";
    ActionCode["SET_HAND_DATA_STREAM_STATE"] = "SET_HAND_DATA_STREAM_STATE";
})(ActionCode = exports.ActionCode || (exports.ActionCode = {}));
// Enum: HandPresenceState
// HAND_FOUND - Sent when the first hand is found when no hand has been present for a moment
// HANDS_LOST - Sent when the last observed hand is lost, meaning no more hands are observed
// PROCESSED - Used locally to indicate that no change in state is awaiting processing. See its
//             use in <MessageReceiver> for more details.
var HandPresenceState;
(function (HandPresenceState) {
    HandPresenceState[HandPresenceState["HAND_FOUND"] = 0] = "HAND_FOUND";
    HandPresenceState[HandPresenceState["HANDS_LOST"] = 1] = "HANDS_LOST";
    HandPresenceState[HandPresenceState["PROCESSED"] = 2] = "PROCESSED";
})(HandPresenceState = exports.HandPresenceState || (exports.HandPresenceState = {}));
// Enum: Compatibility
// COMPATIBLE - The API versions are considered compatible
// SERVICE_OUTDATED - The API versions are considered incompatible as Service is older than Tooling
// TOOLING_OUTDATED - The API versions are considered incompatible as Tooling is older than Service
var Compatibility;
(function (Compatibility) {
    Compatibility[Compatibility["COMPATIBLE"] = 0] = "COMPATIBLE";
    Compatibility[Compatibility["SERVICE_OUTDATED"] = 1] = "SERVICE_OUTDATED";
    Compatibility[Compatibility["TOOLING_OUTDATED"] = 2] = "TOOLING_OUTDATED";
})(Compatibility = exports.Compatibility || (exports.Compatibility = {}));
// Class: HandPresenceEvent
// This data structure is used to receive hand presence requests
class HandPresenceEvent {
    constructor(_state) {
        this.state = _state;
    }
}
exports.HandPresenceEvent = HandPresenceEvent;
// Class: TouchFreeRequestCallback
// This data structure is used to hold request callbacks
class TouchFreeRequestCallback {
    constructor(_timestamp, _callback) {
        this.timestamp = _timestamp;
        this.callback = _callback;
    }
}
exports.TouchFreeRequestCallback = TouchFreeRequestCallback;
// Class: TouchFreeRequest
// This data structure is used as a base for requests to the TouchFree service.
class TouchFreeRequest {
    constructor(_requestID) {
        this.requestID = _requestID;
    }
}
exports.TouchFreeRequest = TouchFreeRequest;
// Class: PartialConfigState
// This data structure is used to send requests for changes to configuration or to configuration files.
//
// When sending a configuration to the Service the structure can be comprised of either partial or complete objects.
class PartialConfigState extends TouchFreeRequest {
    constructor(_id, _interaction, _physical) {
        super(_id);
        this.interaction = _interaction;
        this.physical = _physical;
    }
}
exports.PartialConfigState = PartialConfigState;
// Class: ConfigState
// This data structure is used when receiving configuration data representing the state of the service
// or its config files.
//
// When receiving a configuration from the Service this structure contains ALL configuration data
class ConfigState extends TouchFreeRequest {
    constructor(_id, _interaction, _physical) {
        super(_id);
        this.interaction = _interaction;
        this.physical = _physical;
    }
}
exports.ConfigState = ConfigState;
// class: ConfigChangeRequest
// Used to request the current state of the configuration on the Service. This is received as
// a <ConfigState> which should be linked to a <ConfigStateCallback> via requestID to make
// use of the data received.
class ConfigChangeRequest extends TouchFreeRequest {
}
exports.ConfigChangeRequest = ConfigChangeRequest;
// class: HandRenderDataStateRequest
// Used to set the state of the Hand Render Data stream.
class HandRenderDataStateRequest extends TouchFreeRequest {
    constructor(_id, enabled, lens) {
        super(_id);
        this.enabled = enabled;
        this.lens = lens;
    }
}
exports.HandRenderDataStateRequest = HandRenderDataStateRequest;
// Class: ConfigStateCallback
// Used by <MessageReceiver> to wait for a <ConfigState> from the Service. Owns a callback
// with a <ConfigState> as a parameter to allow users to make use of the new
// <ConfigStateResponse>. Stores a timestamp of its creation so the response has the ability to
// timeout if not seen within a reasonable timeframe.
class ConfigStateCallback extends TouchFreeRequestCallback {
}
exports.ConfigStateCallback = ConfigStateCallback;
// Class: ServiceStatus
// This data structure is used to receive service status.
//
// When receiving a configuration from the Service this structure contains ALL status data
class ServiceStatus extends TouchFreeRequest {
    constructor(_id, _trackingServiceState, _configurationState) {
        super(_id);
        this.trackingServiceState = _trackingServiceState;
        this.configurationState = _configurationState;
    }
}
exports.ServiceStatus = ServiceStatus;
// class: ServiceStatusRequest
// Used to request the current state of the status of the Service. This is received as
// a <ServiceStatus> which should be linked to a <ServiceStatusCallback> via requestID to make
// use of the data received.
class ServiceStatusRequest extends TouchFreeRequest {
}
exports.ServiceStatusRequest = ServiceStatusRequest;
// Class: ServiceStatusCallback
// Used by <MessageReceiver> to wait for a <ServiceStatus> from the Service. Owns a callback
// with a <ServiceStatus> as a parameter to allow users to make use of the new
// <ServiceStatusResponse>. Stores a timestamp of its creation so the response has the ability to
// timeout if not seen within a reasonable timeframe.
class ServiceStatusCallback extends TouchFreeRequestCallback {
}
exports.ServiceStatusCallback = ServiceStatusCallback;
// Class: WebSocketResponse
// The structure seen when the Service responds to a request. This is to verify whether it was
// successful or not and will include the original request if it fails, to allow for
// troubleshooting.
class WebSocketResponse extends TouchFreeRequest {
    constructor(_id, _status, _msg, _request) {
        super(_id);
        this.status = _status;
        this.message = _msg;
        this.originalRequest = _request;
    }
}
exports.WebSocketResponse = WebSocketResponse;
// Class: ResponseCallback
// Used by <MessageReceiver> to wait for a <WebSocketResponse> from the Service. Owns a callback
// with a <WebSocketResponse> as a parameter to allow users to deal with failed
// <WebSocketResponses>. Stores a timestamp of its creation so the response has the ability to
// timeout if not seen within a reasonable timeframe.
class ResponseCallback extends TouchFreeRequestCallback {
}
exports.ResponseCallback = ResponseCallback;
// Class: CommunicationWrapper
// A container structure used by <ServiceConnection> to interpret incoming data to its appropriate
// subtypes based on the <action> and pass the <content> on to the appropriate handler.
class CommunicationWrapper {
    constructor(_actionCode, _content) {
        this.action = _actionCode;
        this.content = _content;
    }
}
exports.CommunicationWrapper = CommunicationWrapper;
// Class: TrackingStateRequest
// Used to construct a SET_TRACKING_STATE request.
class TrackingStateRequest {
    constructor(_id, _mask, _cameraReversed, _allowImages, _analyticsEnabled) {
        this.requestID = _id;
        this.mask = _mask;
        this.cameraReversed = _cameraReversed;
        this.allowImages = _allowImages;
        this.analyticsEnabled = _analyticsEnabled;
    }
}
exports.TrackingStateRequest = TrackingStateRequest;
// Class: SimpleRequest
// Used to make a basic request to the service. To be used with <CommunicationWrapper> to create a more complex request.
class SimpleRequest {
    constructor(_id) {
        this.requestID = _id;
    }
}
exports.SimpleRequest = SimpleRequest;
// Class: TrackingStateCallback
// Used by <MessageReceiver> to wait for a <TrackingStateResponse> from the Service. Owns a callback with a
// <TrackingStateResponse> as a parameter. Stores a timestamp of its creation so the response has the ability to
// timeout if not seen within a reasonable timeframe.
class TrackingStateCallback {
    constructor(_timestamp, _callback) {
        this.timestamp = _timestamp;
        this.callback = _callback;
    }
}
exports.TrackingStateCallback = TrackingStateCallback;


/***/ }),

/***/ 810:
/***/ (function(module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const ConnectionManager_1 = __webpack_require__(597);
const MessageReceiver_1 = __webpack_require__(184);
const TouchFreeServiceTypes = __importStar(__webpack_require__(5));
const ServiceConnection_1 = __webpack_require__(636);
module.exports = {
    ConnectionManager: ConnectionManager_1.ConnectionManager,
    MessageReceiver: MessageReceiver_1.MessageReceiver,
    TouchFreeServiceTypes: TouchFreeServiceTypes,
    ServiceConnection: ServiceConnection_1.ServiceConnection
};


/***/ }),

/***/ 508:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DotCursor = void 0;
const TouchlessCursor_1 = __webpack_require__(257);
const TouchFreeToolingTypes_1 = __webpack_require__(579);
const ConnectionManager_1 = __webpack_require__(597);
const Utilities_1 = __webpack_require__(26);
// Class: DotCursor
// This is an example Touchless Cursor which positions a dot on the screen at the hand location,
// and reacts to the current ProgressToClick of the action (what determines this depends on the
// currently active interaction).
class DotCursor extends TouchlessCursor_1.TouchlessCursor {
    // Group: Functions
    // Function: constructor
    // Constructs a new cursor consisting of a central cursor and a ring.
    // Optionally provide an _animationDuration to change the time it takes for the 'squeeze'
    // confirmation animation to be performed. Optionally provide a _ringSizeMultiplier to change
    // the size that the <cursorRing> is relative to the _cursor.
    //
    // If you intend to make use of the <WebInputController>, make sure that both _cursor and
    // _cursorRing have the "touchfree-cursor" class. This prevents them blocking other elements
    // from recieving events.
    constructor(_cursor, _cursorRing, _animationDuration = 0.2, _ringSizeMultiplier = 2) {
        super(_cursor);
        // Set the update rate of the animation to 30fps.
        this.animationUpdateDuration = (1 / 30) * 1000;
        this.animationSpeed = [0, 0];
        this.currentAnimationInterval = -1;
        this.growQueued = false;
        this.currentFadingInterval = -1;
        this.dotCursorElement = _cursor;
        this.cursorRing = _cursorRing;
        this.ringSizeMultiplier = _ringSizeMultiplier;
        this.cursorStartSize = [_cursor.clientWidth.valueOf(), _cursor.clientHeight.valueOf()];
        this.animationSpeed[0] = (this.cursorStartSize[0] / 2) / (_animationDuration * 30);
        this.animationSpeed[1] = (this.cursorStartSize[1] / 2) / (_animationDuration * 30);
        ConnectionManager_1.ConnectionManager.instance.addEventListener('HandFound', this.ShowCursor.bind(this));
        ConnectionManager_1.ConnectionManager.instance.addEventListener('HandsLost', this.HideCursor.bind(this));
    }
    // Function: UpdateCursor
    // Used to update the cursor when recieving a "MOVE" <ClientInputAction>. Updates the
    // cursor's position, as well as the size of the ring based on the current ProgressToClick.
    UpdateCursor(_inputAction) {
        if (!this.enabled)
            return;
        //progressToClick is between 0 and 1. Click triggered at progressToClick = 1
        let ringScaler = (0, Utilities_1.MapRangeToRange)(_inputAction.ProgressToClick, 0, 1, this.ringSizeMultiplier, 1);
        this.cursorRing.style.opacity = _inputAction.ProgressToClick + "";
        this.cursorRing.style.width = this.dotCursorElement.clientWidth * ringScaler + "px";
        this.cursorRing.style.height = this.dotCursorElement.clientHeight * ringScaler + "px";
        this.cursorRing.style.left = (_inputAction.CursorPosition[0] - (this.cursorRing.clientWidth / 2)) + "px";
        this.cursorRing.style.top = (_inputAction.CursorPosition[1] - (this.cursorRing.clientHeight / 2)) + "px";
        super.UpdateCursor(_inputAction);
    }
    // Function: HandleInputAction
    // This override replaces the basic functionality of the <TouchlessCursor>, making the
    // cursor's ring scale dynamically with the current ProgressToClick and creating a
    // "shrink" animation when a "DOWN" event is received, and a "grow" animation when an "UP"
    // is recieved.
    //
    // When a "CANCEL" event is received, the cursor is hidden as it suggests the hand has been lost.
    // When any other event is received and the cursor is hidden, the cursor is shown again.
    HandleInputAction(_inputData) {
        switch (_inputData.InputType) {
            case TouchFreeToolingTypes_1.InputType.MOVE:
                this.UpdateCursor(_inputData);
                break;
            case TouchFreeToolingTypes_1.InputType.DOWN:
                this.SetCursorSize(0, 0, this.cursorRing);
                if (this.currentAnimationInterval !== -1) {
                    clearInterval(this.currentAnimationInterval);
                }
                this.currentAnimationInterval = setInterval(this.ShrinkCursor.bind(this), this.animationUpdateDuration);
                break;
            case TouchFreeToolingTypes_1.InputType.UP:
                if (this.currentAnimationInterval !== -1) {
                    this.growQueued = true;
                }
                else {
                    this.growQueued = false;
                    this.currentAnimationInterval = setInterval(this.GrowCursor.bind(this), this.animationUpdateDuration);
                }
                break;
            case TouchFreeToolingTypes_1.InputType.CANCEL:
                break;
        }
    }
    // Function: ShrinkCursor
    // Shrinks the cursor to half of its original size.
    // This is performed over a duration set in the <constructor>.
    ShrinkCursor() {
        if (!this.enabled)
            return;
        let newWidth = this.dotCursorElement.clientWidth;
        let newHeight = this.dotCursorElement.clientHeight;
        if (this.dotCursorElement.clientWidth > this.cursorStartSize[0] / 2) {
            newWidth = this.dotCursorElement.clientWidth - this.animationSpeed[0];
        }
        if (this.dotCursorElement.clientHeight > this.cursorStartSize[1] / 2) {
            newHeight = this.dotCursorElement.clientHeight - this.animationSpeed[1];
        }
        this.SetCursorSize(newWidth, newHeight, this.dotCursorElement);
        if (newWidth <= this.cursorStartSize[0] / 2 && newHeight <= this.cursorStartSize[1] / 2) {
            clearInterval(this.currentAnimationInterval);
            newWidth = this.cursorStartSize[0] / 2;
            newHeight = this.cursorStartSize[1] / 2;
            this.SetCursorSize(newWidth, newHeight, this.dotCursorElement);
            if (this.growQueued) {
                this.growQueued = false;
                this.currentAnimationInterval = setInterval(this.GrowCursor.bind(this), this.animationUpdateDuration);
            }
            else {
                this.currentAnimationInterval = -1;
            }
        }
    }
    // Function: GrowCursor
    // Grows the cursor to its original size over time set via the <constructor>.
    GrowCursor() {
        if (!this.enabled)
            return;
        let newWidth = this.dotCursorElement.clientWidth;
        let newHeight = this.dotCursorElement.clientHeight;
        if (this.dotCursorElement.clientWidth < this.cursorStartSize[0]) {
            newWidth = this.dotCursorElement.clientWidth + this.animationSpeed[0];
        }
        if (this.dotCursorElement.clientHeight < this.cursorStartSize[1]) {
            newHeight = this.dotCursorElement.clientHeight + this.animationSpeed[1];
        }
        this.SetCursorSize(newWidth, newHeight, this.dotCursorElement);
        if (newWidth >= this.cursorStartSize[0] && newHeight >= this.cursorStartSize[1]) {
            clearInterval(this.currentAnimationInterval);
            this.SetCursorSize(this.cursorStartSize[0], this.cursorStartSize[1], this.dotCursorElement);
            this.currentAnimationInterval = -1;
            this.growQueued = false;
        }
    }
    SetCursorSize(_newWidth, _newHeight, _cursorToChange) {
        let deltaX = Math.round((_cursorToChange.clientWidth - _newWidth) * 5) / 10;
        let deltaY = Math.round((_cursorToChange.clientHeight - _newHeight) * 5) / 10;
        let cursorPosX = _cursorToChange.offsetLeft + deltaX;
        let cursorPosY = _cursorToChange.offsetTop + deltaY;
        _cursorToChange.style.width = _newWidth + "px";
        _cursorToChange.style.left = cursorPosX + "px";
        _cursorToChange.style.height = _newHeight + "px";
        _cursorToChange.style.top = cursorPosY + "px";
    }
    // Function: ShowCursor
    // Used to make the cursor visible, fades over time
    ShowCursor() {
        this.shouldShow = true;
        if (!this.enabled)
            return;
        clearInterval(this.currentFadingInterval);
        this.currentFadingInterval = setInterval(this.FadeCursorIn.bind(this), this.animationUpdateDuration);
    }
    // Function: HideCursor
    // Used to make the cursor invisible, fades over time
    HideCursor() {
        this.shouldShow = false;
        if (parseFloat(this.dotCursorElement.style.opacity) !== 0) {
            clearInterval(this.currentFadingInterval);
            this.currentFadingInterval = setInterval(this.FadeCursorOut.bind(this), this.animationUpdateDuration);
        }
    }
    FadeCursorIn() {
        let currentOpacity = parseFloat(this.dotCursorElement.style.opacity);
        currentOpacity = currentOpacity ? currentOpacity : 0;
        currentOpacity += 0.05;
        this.dotCursorElement.style.opacity = currentOpacity.toString();
        if (currentOpacity >= 1) {
            clearInterval(this.currentFadingInterval);
            this.dotCursorElement.style.opacity = "1.0";
            this.currentFadingInterval = -1;
        }
    }
    FadeCursorOut() {
        let currentOpacity = parseFloat(this.dotCursorElement.style.opacity);
        currentOpacity = currentOpacity ? currentOpacity : 1;
        currentOpacity -= 0.05;
        this.dotCursorElement.style.opacity = currentOpacity.toString();
        if (parseFloat(this.cursorRing.style.opacity) > 0) {
            this.cursorRing.style.opacity = currentOpacity.toString();
        }
        if (currentOpacity <= 0) {
            clearInterval(this.currentFadingInterval);
            this.dotCursorElement.style.opacity = "0.0";
            this.currentFadingInterval = -1;
        }
    }
}
exports.DotCursor = DotCursor;


/***/ }),

/***/ 429:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SVGCursor = void 0;
const ConnectionManager_1 = __webpack_require__(597);
const TouchFreeToolingTypes_1 = __webpack_require__(579);
const Utilities_1 = __webpack_require__(26);
const TouchlessCursor_1 = __webpack_require__(257);
class SVGCursor extends TouchlessCursor_1.TouchlessCursor {
    // Group: Functions
    // Function: constructor
    // Constructs a new cursor consisting of a central cursor and a ring.
    // Optionally provide a _ringSizeMultiplier to change the size that the <cursorRing> is relative to the _cursor.
    // Optionally provide a _darkCursor to change the cursor to be dark to provide better contrast on light coloured
    // UIs.
    constructor(_ringSizeMultiplier = 2, _darkCursor = false) {
        super(undefined);
        this.xPositionAttribute = 'cx';
        this.yPositionAttribute = 'cy';
        const documentBody = document.querySelector('body');
        const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgElement.classList.add('touchfree-cursor');
        svgElement.style.opacity = '0';
        svgElement.style.position = 'fixed';
        svgElement.style.top = '0px';
        svgElement.style.left = '0px';
        svgElement.style.zIndex = '1000';
        svgElement.style.pointerEvents = 'none';
        svgElement.setAttribute('width', '100%');
        svgElement.setAttribute('height', '100%');
        svgElement.id = 'svg-cursor';
        documentBody === null || documentBody === void 0 ? void 0 : documentBody.appendChild(svgElement);
        const svgRingElement = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        svgRingElement.classList.add('touchfree-cursor');
        svgRingElement.setAttribute('r', '15');
        svgRingElement.setAttribute('fill-opacity', '0');
        svgRingElement.setAttribute('stroke-width', '5');
        svgRingElement.setAttribute('stroke', _darkCursor ? 'black' : 'white');
        svgRingElement.setAttribute(this.xPositionAttribute, '100');
        svgRingElement.setAttribute(this.yPositionAttribute, '100');
        svgRingElement.style.filter = 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.7))';
        svgElement.appendChild(svgRingElement);
        this.cursorRing = svgRingElement;
        const svgDotElement = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        svgDotElement.classList.add('touchfree-cursor');
        svgDotElement.setAttribute('r', '15');
        svgDotElement.setAttribute('fill', _darkCursor ? 'black' : 'white');
        svgDotElement.setAttribute(this.xPositionAttribute, '100');
        svgDotElement.setAttribute(this.yPositionAttribute, '100');
        svgDotElement.setAttribute('opacity', '1');
        svgDotElement.style.transition = 'transform 200ms, opacity 666ms';
        svgDotElement.style.transformBox = 'fill-box';
        svgDotElement.style.transformOrigin = 'center';
        svgDotElement.style.transform = 'scale(1)';
        svgDotElement.style.filter = 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.7))';
        svgElement.appendChild(svgDotElement);
        if (!_darkCursor) {
            if (this.cursorRing) {
                this.cursorRing.style.filter = 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.7))';
            }
            svgDotElement.style.filter = 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.7))';
        }
        this.cursor = svgDotElement;
        this.cursorCanvas = svgElement;
        this.ringSizeMultiplier = _ringSizeMultiplier;
        ConnectionManager_1.ConnectionManager.instance.addEventListener('HandFound', this.ShowCursor.bind(this));
        ConnectionManager_1.ConnectionManager.instance.addEventListener('HandsLost', this.HideCursor.bind(this));
    }
    // Function: UpdateCursor
    // Used to update the cursor when receiving a "MOVE" <ClientInputAction>. Updates the
    // cursor's position, as well as the size of the ring based on the current ProgressToClick.
    UpdateCursor(_inputAction) {
        if (!this.shouldShow) {
            this.HideCursor();
            return;
        }
        let ringScaler = (0, Utilities_1.MapRangeToRange)(_inputAction.ProgressToClick, 0, 1, this.ringSizeMultiplier, 1);
        this.cursorRing.setAttribute('opacity', _inputAction.ProgressToClick.toString());
        this.cursorRing.setAttribute('r', (this.GetCurrentCursorRadius() * ringScaler).toString());
        const position = _inputAction.CursorPosition;
        if (position) {
            this.ShowCursor();
            this.cursorRing.setAttribute(this.xPositionAttribute, position[0].toString());
            this.cursorRing.setAttribute(this.yPositionAttribute, position[1].toString());
            if (this.cursor) {
                this.cursor.setAttribute(this.xPositionAttribute, position[0].toString());
                this.cursor.setAttribute(this.yPositionAttribute, position[1].toString());
            }
        }
        else {
            this.HideCursor();
        }
    }
    // Function: HandleInputAction
    // This override replaces the basic functionality of the <TouchlessCursor>, making the
    // cursor's ring scale dynamically with the current ProgressToClick and creating a
    // "shrink" animation when a "DOWN" event is received, and a "grow" animation when an "UP"
    // is received.
    //
    // When a "CANCEL" event is received, the cursor is hidden as it suggests the hand has been lost.
    // When any other event is received and the cursor is hidden, the cursor is shown again.
    HandleInputAction(_inputData) {
        if (this.cursor) {
            switch (_inputData.InputType) {
                case TouchFreeToolingTypes_1.InputType.MOVE:
                    this.UpdateCursor(_inputData);
                    break;
                case TouchFreeToolingTypes_1.InputType.DOWN:
                    this.SetCursorSize(0, this.cursorRing);
                    this.cursor.style.transform = 'scale(0.5)';
                    break;
                case TouchFreeToolingTypes_1.InputType.UP:
                    this.cursor.style.transform = 'scale(1)';
                    break;
                case TouchFreeToolingTypes_1.InputType.CANCEL:
                    break;
            }
        }
    }
    SetCursorSize(_newWidth, _cursorToChange) {
        _cursorToChange === null || _cursorToChange === void 0 ? void 0 : _cursorToChange.setAttribute('r', _newWidth.toString());
    }
    // Function: ShowCursor
    // Used to make the cursor visible, fades over time
    ShowCursor() {
        this.shouldShow = true;
        if (this.enabled) {
            this.cursorCanvas.style.opacity = '1';
        }
    }
    // Function: HideCursor
    // Used to make the cursor invisible, fades over time
    HideCursor() {
        this.shouldShow = false;
        this.cursorCanvas.style.opacity = '0';
        if (this.cursor) {
            this.cursor.style.transform = 'scale(1)';
        }
    }
    GetCurrentCursorRadius() {
        if (this.cursor) {
            const radius = this.cursor.getAttribute('r');
            if (!radius) {
                return 0;
            }
            let radiusAsNumber = parseFloat(radius);
            return radiusAsNumber;
        }
        return 0;
    }
}
exports.SVGCursor = SVGCursor;


/***/ }),

/***/ 257:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TouchlessCursor = void 0;
const InputActionManager_1 = __webpack_require__(53);
// Class: TouchlessCursor
// This class is a base class for creating custom Touchless cursors for use with TouchFree Tooling.
//
// Override <HandleInputAction> to react to <TouchFreeInputActions> as they are recieved.
//
// For an example of a reactive cursor, see <DotCursor>.
class TouchlessCursor {
    // Group: Functions
    // Function: constructor
    // Registers the Cursor for updates from the <InputActionManager>
    //
    // If you intend to make use of the <WebInputController>, make sure that _cursor has the
    // "touchfree-cursor" class. This prevents it blocking other elements from recieving events.
    constructor(_cursor) {
        InputActionManager_1.InputActionManager.instance.addEventListener('TransmitInputAction', ((e) => {
            this.HandleInputAction(e.detail);
        }));
        this.cursor = _cursor;
        this.enabled = true;
        this.shouldShow = true;
    }
    // Function: UpdateCursor
    // Sets the position of the cursor, should be run after <HandleInputAction>.
    UpdateCursor(_inputAction) {
        if (this.cursor) {
            this.cursor.style.left = (_inputAction.CursorPosition[0] - (this.cursor.clientWidth / 2)) + "px";
            this.cursor.style.top = (_inputAction.CursorPosition[1] - (this.cursor.clientHeight / 2)) + "px";
        }
    }
    // Function: HandleInputAction
    // The core of the logic for Cursors, this is invoked with each <TouchFreeInputAction> as
    // they are recieved. Override this function to implement cursor behaviour in response.
    //
    // Parameters:
    //    _inputAction - The latest input action recieved from TouchFree Service.
    HandleInputAction(_inputAction) {
        this.UpdateCursor(_inputAction);
    }
    // Function: ShowCursor
    // Used to make the cursor visible
    ShowCursor() {
        this.shouldShow = true;
        if (this.cursor && this.enabled) {
            this.cursor.style.opacity = "1";
        }
    }
    // Function: HideCursor
    // Used to make the cursor invisible
    HideCursor() {
        this.shouldShow = false;
        if (this.cursor) {
            this.cursor.style.opacity = "0";
        }
    }
    // Function: EnableCursor
    // Used to enable the cursor so that it will show if hands are present
    EnableCursor() {
        this.enabled = true;
        if (this.shouldShow) {
            this.ShowCursor();
        }
    }
    // Function: DisableCursor
    // Used to disable the cursor so that it will never show
    DisableCursor() {
        this.enabled = false;
        const shouldShowOnEnable = this.shouldShow;
        if (shouldShowOnEnable) {
            this.HideCursor();
        }
        this.shouldShow = shouldShowOnEnable;
    }
}
exports.TouchlessCursor = TouchlessCursor;


/***/ }),

/***/ 741:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const TouchlessCursor_1 = __webpack_require__(257);
const DotCursor_1 = __webpack_require__(508);
const SvgCursor_1 = __webpack_require__(429);
module.exports = {
    TouchlessCursor: TouchlessCursor_1.TouchlessCursor,
    DotCursor: DotCursor_1.DotCursor,
    SVGCursor: SvgCursor_1.SVGCursor
};


/***/ }),

/***/ 529:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseInputController = void 0;
const InputActionManager_1 = __webpack_require__(53);
const TouchFreeToolingTypes_1 = __webpack_require__(579);
// Class: InputController
// InputControllers convert <TouchFreeInputActions> as recieved from the service into appropriate
// inputs for the given environment. This abstract handles connection and should be inherited from
// to develop any further InputControllers.
//
// Override <HandleInputAction> to react to TouchFreeInputActions as they are recieved.
//
// For an example InputController, see <WebInputController>.
class BaseInputController {
    // Function: constructor
    // Adds a listener to <InputActionManager> to invoke <HandleInputAction> with <TouchFreeInputActions> as they
    // are received.
    constructor() {
        if (!BaseInputController.Instantiated) {
            BaseInputController.Instantiated = true;
            InputActionManager_1.InputActionManager.instance.addEventListener('TransmitInputAction', ((e) => {
                this.HandleInputAction(e.detail);
            }));
        }
    }
    // Functions:
    // Function: HandleInputAction
    // This method is the core of the functionality of this class. It will be invoked with
    // the <TouchFreeInputAction> as they are provided to the Tooling from the TouchFree Service.
    //
    // Override this function to implement any custom input handling functionality you wish to see.
    //
    // Parameters:
    //     _inputData - The latest input action recieved from TouchFree Service.
    HandleInputAction(_inputData) {
        switch (_inputData.InputType) {
            case TouchFreeToolingTypes_1.InputType.MOVE:
                break;
            case TouchFreeToolingTypes_1.InputType.DOWN:
                break;
            case TouchFreeToolingTypes_1.InputType.UP:
                break;
            case TouchFreeToolingTypes_1.InputType.CANCEL:
                break;
        }
    }
    disconnect() {
        InputActionManager_1.InputActionManager.instance.removeEventListener('TransmitInputAction', ((e) => {
            this.HandleInputAction(e.detail);
        }));
        BaseInputController.Instantiated = false;
    }
}
exports.BaseInputController = BaseInputController;
// Group: MonoBehaviour Overrides
BaseInputController.Instantiated = false;


/***/ }),

/***/ 52:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebInputController = void 0;
const TouchFreeToolingTypes_1 = __webpack_require__(579);
const BaseInputController_1 = __webpack_require__(529);
// Class: WebInputController
// Provides web PointerEvents based on the incoming data from TouchFree Service via a
// <ServiceConnection>.
//
// If you are using cursors with this InputController, ensure they have the "touchfree-cursor"
// class. This allows this class to ignore them when determining which elements should recieve
// new pointer events. If you don't do this, none of the events transmitted here are guaranteed
// to make it to their intended targets, as they will be captured by the cursor.
class WebInputController extends BaseInputController_1.BaseInputController {
    // Group: Methods
    // Function: constructor
    // Sets up the basic event properties for all events transmitted from this InputController.
    constructor() {
        super();
        // Group: Variables
        // Variable: enterLeaveEnabled
        // Can be used to enable/disable the transmission of "pointerenter"/"pointerleave" events
        // Disable this for a minor performance boost, at the cost of no longer sending those events
        // to the UI.
        this.enterLeaveEnabled = true;
        this.lastHoveredElement = null;
        this.pointerId = 0;
        this.elementsOnDown = null;
        this.lastPosition = null;
        this.scrollDirection = undefined;
        this.elementToScroll = undefined;
        // Gets the element that should have scrolling applied to it
        this.GetElementToScroll = (scrollValidation, parentScrollValidation) => {
            if (this.elementToScroll)
                return this.elementToScroll;
            if (!this.elementsOnDown)
                return;
            for (let i = 0; i < this.elementsOnDown.length; i++) {
                let elementToCheckScroll = this.elementsOnDown[i];
                if (!scrollValidation(elementToCheckScroll))
                    continue;
                let parentSelected = false;
                let parentAsHtmlElement = elementToCheckScroll.parentElement;
                while (parentAsHtmlElement) {
                    if (!parentScrollValidation(elementToCheckScroll, parentAsHtmlElement)) {
                        break;
                    }
                    parentSelected = true;
                    elementToCheckScroll = parentAsHtmlElement;
                    parentAsHtmlElement = elementToCheckScroll.parentElement;
                }
                if (parentSelected && !scrollValidation(elementToCheckScroll))
                    continue;
                return elementToCheckScroll;
            }
        };
        this.baseEventProps = {
            pointerId: this.pointerId,
            bubbles: true,
            isPrimary: true,
            width: 10,
            height: 10,
            clientX: 0,
            clientY: 0,
            pointerType: "pen"
        };
        this.activeEventProps = this.baseEventProps;
    }
    // Function: HandleMove
    // Handles the transmission of "pointerout"/"pointerover"/"pointermove" events to appropriate
    // elements, based on the element being hovered over this frame (_element), and the element
    // hovered last frame.
    // Will also optionally send "pointerenter"/"pointerleave" events if enabled via
    // <enterLeaveEnabled>
    //
    // Parameters:
    //     _element - The DOM element under the cursor this frame
    HandleMove(_element) {
        if (_element !== this.lastHoveredElement) {
            // Handle sending pointerover/pointerout to the individual elements
            // These events bubble, so we only have to dispatch them to the element directly under
            // the cursor
            if (this.lastHoveredElement !== null) {
                let outEvent = new PointerEvent("pointerout", this.activeEventProps);
                this.lastHoveredElement.dispatchEvent(outEvent);
            }
            if (_element !== null) {
                let overEvent = new PointerEvent("pointerover", this.activeEventProps);
                _element.dispatchEvent(overEvent);
            }
            if (this.enterLeaveEnabled) {
                this.HandleEnterLeaveBehaviour(_element);
            }
        }
        let moveEvent = new PointerEvent("pointermove", this.activeEventProps);
        _element === null || _element === void 0 ? void 0 : _element.dispatchEvent(moveEvent);
        this.lastHoveredElement = _element;
    }
    // Function: HandleInputAction
    // Called with each <TouchFreeInputAction> as it comes into the <ServiceConnection>. Emits Pointer
    // events (e.g. pointermove/pointerdown) to the objects at the location. Which events are
    // emitted is affected by <enterLeaveEnabled>.
    //
    // Sends the following events by default:
    //
    //     - pointermove
    //     - pointerdown
    //     - pointerup
    //     - pointerover
    //     - pointerout
    //     - pointerenter
    //     - pointerleave
    //
    // Parameters:
    //     _inputData - The latest Action to arrive via the <ServiceConnection>.
    HandleInputAction(_inputData) {
        super.HandleInputAction(_inputData);
        let elementAtPos = this.GetTopNonCursorElement(_inputData.CursorPosition);
        this.activeEventProps.clientX = _inputData.CursorPosition[0];
        this.activeEventProps.clientY = _inputData.CursorPosition[1];
        if (elementAtPos !== null) {
            let inputEvent = new CustomEvent(`InputAction`, { detail: _inputData });
            elementAtPos.dispatchEvent(inputEvent);
        }
        switch (_inputData.InputType) {
            case TouchFreeToolingTypes_1.InputType.CANCEL:
                this.ResetScrollData();
                let cancelEvent = new PointerEvent("pointercancel", this.activeEventProps);
                let outEvent = new PointerEvent("pointerout", this.activeEventProps);
                if (this.lastHoveredElement !== null && this.lastHoveredElement !== elementAtPos) {
                    this.lastHoveredElement.dispatchEvent(cancelEvent);
                    this.lastHoveredElement.dispatchEvent(outEvent);
                }
                if (elementAtPos !== null) {
                    let parentTree = this.GetOrderedParents(elementAtPos);
                    parentTree.forEach((parent) => {
                        if (parent !== null) {
                            parent.dispatchEvent(cancelEvent);
                            parent.dispatchEvent(outEvent);
                        }
                    });
                }
                break;
            case TouchFreeToolingTypes_1.InputType.MOVE:
                this.HandleMove(elementAtPos);
                this.HandleScroll(_inputData.CursorPosition);
                break;
            case TouchFreeToolingTypes_1.InputType.DOWN:
                this.ResetScrollData();
                this.elementsOnDown = document.elementsFromPoint(_inputData.CursorPosition[0], _inputData.CursorPosition[1])
                    .map(e => e)
                    .filter(e => e && !e.classList.contains("touchfreecursor") && !e.classList.contains("touchfree-cursor") && !e.classList.contains("touchfree-no-scroll"));
                this.lastPosition = _inputData.CursorPosition;
                let downEvent = new PointerEvent("pointerdown", this.activeEventProps);
                this.DispatchToTarget(downEvent, elementAtPos);
                break;
            case TouchFreeToolingTypes_1.InputType.UP:
                this.ResetScrollData();
                let upEvent = new PointerEvent("pointerup", this.activeEventProps);
                this.DispatchToTarget(upEvent, elementAtPos);
                break;
        }
    }
    // Clears information about the current scroll
    ResetScrollData() {
        this.elementsOnDown = null;
        this.scrollDirection = undefined;
        this.elementToScroll = undefined;
    }
    // Applies scrolling to any elements that should be scrolled
    HandleScroll(_position) {
        if (this.elementsOnDown && this.lastPosition) {
            const changeInPositionX = this.lastPosition[0] - _position[0];
            const changeInPositionY = this.lastPosition[1] - _position[1];
            if (!this.scrollDirection && (Math.abs(changeInPositionX) > 5 || Math.abs(changeInPositionY) > 5)) {
                if (Math.abs(changeInPositionX) > Math.abs(changeInPositionY)) {
                    this.scrollDirection = changeInPositionX > 0 ? ScrollDirection.Right : ScrollDirection.Left;
                }
                else {
                    this.scrollDirection = changeInPositionY > 0 ? ScrollDirection.Down : ScrollDirection.Up;
                }
            }
            this.lastPosition = _position;
            if (changeInPositionY > 0 && (this.scrollDirection === undefined || this.scrollDirection === ScrollDirection.Down)) {
                const element = this.GetElementToScroll((e) => e.scrollHeight > e.clientHeight && e.scrollTop + e.clientHeight < e.scrollHeight, (e, p) => e.offsetHeight === p.offsetHeight && e.scrollHeight === p.scrollHeight);
                if (element) {
                    this.elementToScroll = element;
                    element.scrollTop = Math.min(element.scrollHeight - element.clientHeight, element.scrollTop + changeInPositionY);
                }
            }
            if (changeInPositionY < 0 && (this.scrollDirection === undefined || this.scrollDirection === ScrollDirection.Up)) {
                const element = this.GetElementToScroll((e) => e.scrollHeight > e.clientHeight && e.scrollTop > 0, (e, p) => e.offsetHeight === p.offsetHeight && e.scrollHeight === p.scrollHeight);
                if (element) {
                    this.elementToScroll = element;
                    element.scrollTop = Math.max(0, element.scrollTop + changeInPositionY);
                }
            }
            if (changeInPositionX > 0 && (this.scrollDirection === undefined || this.scrollDirection === ScrollDirection.Right)) {
                const element = this.GetElementToScroll((e) => e.scrollWidth > e.clientWidth && e.scrollLeft + e.clientWidth < e.scrollWidth, (e, p) => e.offsetWidth === p.offsetWidth && e.scrollWidth === p.scrollWidth);
                if (element) {
                    this.elementToScroll = element;
                    element.scrollLeft = Math.min(element.scrollWidth - element.clientWidth, element.scrollLeft + changeInPositionX);
                }
            }
            if (changeInPositionX < 0 && (this.scrollDirection === undefined || this.scrollDirection === ScrollDirection.Left)) {
                const element = this.GetElementToScroll((e) => e.scrollWidth > e.clientWidth && e.scrollLeft > 0, (e, p) => e.offsetWidth === p.offsetWidth && e.scrollWidth === p.scrollWidth);
                if (element) {
                    this.elementToScroll = element;
                    element.scrollLeft = Math.max(0, element.scrollLeft + changeInPositionX);
                }
            }
        }
    }
    // Gets the stack of elements (topmost->bottommost) at this position and return the first non-
    // cursor element. Depends on all cursor elements being branded with the "cursor" class.
    GetTopNonCursorElement(_position) {
        let elementsAtPos = document.elementsFromPoint(_position[0], _position[1]);
        let elementAtPos = null;
        if (elementsAtPos !== null) {
            for (let i = 0; i < elementsAtPos.length; i++) {
                if (!elementsAtPos[i].classList.contains("touchfreecursor") && !elementsAtPos[i].classList.contains("touchfree-cursor")) {
                    elementAtPos = elementsAtPos[i];
                    break;
                }
            }
        }
        return elementAtPos;
    }
    // Handle sending pointerleave/pointerenter events to the parent stacks
    // These events do not bubble, in order to deliver expected behaviour we must consider
    // the entire stack of elements above our current target in the document tree
    HandleEnterLeaveBehaviour(_element) {
        let oldParents = this.GetOrderedParents(this.lastHoveredElement);
        let newParents = this.GetOrderedParents(_element);
        let highestCommonIndex = this.GetCommonAncestorIndex(oldParents, newParents);
        let leaveEvent = new PointerEvent("pointerleave", this.activeEventProps);
        let enterEvent = new PointerEvent("pointerenter", this.activeEventProps);
        if (highestCommonIndex === null) {
            oldParents.forEach((parentNode) => {
                parentNode === null || parentNode === void 0 ? void 0 : parentNode.dispatchEvent(leaveEvent);
            });
            newParents.forEach((parentNode) => {
                parentNode === null || parentNode === void 0 ? void 0 : parentNode.dispatchEvent(enterEvent);
            });
        }
        else {
            oldParents.slice(highestCommonIndex).forEach((parentNode) => {
                parentNode === null || parentNode === void 0 ? void 0 : parentNode.dispatchEvent(leaveEvent);
            });
            newParents.slice(highestCommonIndex).forEach((parentNode) => {
                parentNode === null || parentNode === void 0 ? void 0 : parentNode.dispatchEvent(enterEvent);
            });
        }
    }
    // Collects the stack of parent nodes, ordered from highest (document body) to lowest
    // (the node provided)
    GetOrderedParents(_node) {
        let parentStack = [_node];
        for (; _node; _node = _node.parentNode) {
            parentStack.unshift(_node);
        }
        return parentStack;
    }
    // Takes two ordered arrays of Nodes (as produced by GetOrderedParents) and identifies the
    // lowest common ancestor of the two sets. Used in HandleMove for identifying the events to send
    GetCommonAncestorIndex(oldParents, newParents) {
        if (oldParents[0] !== newParents[0]) {
            return null;
        }
        for (let i = 0; i < oldParents.length; i++) {
            if (oldParents[i] !== newParents[i]) {
                return i;
            }
        }
        return null;
    }
    // Checks if the target element is null and correctly dispatches the provided event to the
    // element or document body appropriately
    DispatchToTarget(event, target) {
        if (target !== null) {
            target.dispatchEvent(event);
        }
        else {
            document.dispatchEvent(event);
        }
    }
}
exports.WebInputController = WebInputController;
// Enum: ScrollDirection
// The directions that a scroll can be in
var ScrollDirection;
(function (ScrollDirection) {
    ScrollDirection[ScrollDirection["Up"] = 0] = "Up";
    ScrollDirection[ScrollDirection["Down"] = 1] = "Down";
    ScrollDirection[ScrollDirection["Left"] = 2] = "Left";
    ScrollDirection[ScrollDirection["Right"] = 3] = "Right";
})(ScrollDirection || (ScrollDirection = {}));


/***/ }),

/***/ 58:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const BaseInputController_1 = __webpack_require__(529);
const WebInputController_1 = __webpack_require__(52);
module.exports = {
    BaseInputController: BaseInputController_1.BaseInputController,
    WebInputController: WebInputController_1.WebInputController
};


/***/ }),

/***/ 333:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HandDataManager = void 0;
// Class: HandDataManager
// The manager for all <HandFrame> to be handled and distributed. This distributes the data
// via the <TransmitHandData> event which should be listened to by any class hoping to make
// use of incoming <HandFrame>s.
class HandDataManager extends EventTarget {
    static get instance() {
        if (HandDataManager._instance === undefined) {
            HandDataManager._instance = new HandDataManager();
        }
        return HandDataManager._instance;
    }
    // Function: HandleHandFrame
    // Called by the <messageReceiver> to relay a <HandFrame> that has been received to any
    // listeners of <TransmitHandData>.
    static HandleHandFrame(_data) {
        const currentTimeStamp = Date.now();
        if (!HandDataManager.lastFrame || HandDataManager.lastFrame + 100 < currentTimeStamp) {
            let rawHandsEvent = new CustomEvent('TransmitHandData', { detail: _data });
            HandDataManager.instance.dispatchEvent(rawHandsEvent);
            HandDataManager.lastFrame = currentTimeStamp;
        }
    }
}
exports.HandDataManager = HandDataManager;
HandDataManager.lastFrame = undefined;


/***/ }),

/***/ 53:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InputActionManager = void 0;
// Class: InputActionManager
// The manager for all <TouchFreeInputActions> to be handled and distributed. This runs the
// received data through any <InputActionPlugins> given to it and finaly distributes the data
// via the  <TransmitInputAction> event which should be listened to by any class hoping to make
// use of incoming <TouchFreeInputActions>.
class InputActionManager extends EventTarget {
    static get instance() {
        if (InputActionManager._instance === undefined) {
            InputActionManager._instance = new InputActionManager();
        }
        return InputActionManager._instance;
    }
    // Function: SetPlugins
    // Use this function to set the <InputActionPlugins> that the manager should use, as well as the order the
    // <InputActionPlugins> should be used.
    static SetPlugins(_plugins) {
        this.plugins = _plugins;
    }
    // Function: HandleInputAction
    // Called by the <messageReceiver> to relay a <TouchFreeInputAction> that has been received to any
    // listeners of <TransmitInputAction>.
    static HandleInputAction(_action) {
        let rawInputActionEvent = new CustomEvent('TransmitInputActionRaw', { detail: _action });
        InputActionManager.instance.dispatchEvent(rawInputActionEvent);
        let action = _action;
        if (this.plugins !== null) {
            for (var i = 0; i < this.plugins.length; i++) {
                let modifiedAction = this.plugins[i].RunPlugin(action);
                if (modifiedAction !== null) {
                    action = modifiedAction;
                }
                else {
                    // The plugin has cancelled the InputAction entirely
                    return;
                }
            }
        }
        let inputActionEvent = new CustomEvent('TransmitInputAction', { detail: action });
        // Wrapping the function in a timeout of 0 seconds allows the dispatch to be asynchronous
        setTimeout(() => {
            InputActionManager.instance.dispatchEvent(inputActionEvent);
        }, 0);
    }
}
exports.InputActionManager = InputActionManager;
InputActionManager.plugins = null;


/***/ }),

/***/ 988:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InputActionPlugin = void 0;
class InputActionPlugin extends EventTarget {
    // Event: InputActionOutput
    // An event for transmitting <TouchFreeInputActions> as they pass through this plugin.
    // This can be used to access the data as it is used by a specific plugin, as to intercept
    // the full cycle of plugins that the <InputActionManager> references.
    // Function: RunPlugin
    // Called from <InputActionManager> and provided a <TouchFreeInputAction> as a parameter.
    // This function is a wrapper that guarantees that the results of <ModifyInputAction> are both
    // returned to the <InputActionManager> and transmitted via <TransmitInputAction>.
    RunPlugin(_inputAction) {
        let modifiedInputAction = this.ModifyInputAction(_inputAction);
        if (modifiedInputAction != null) {
            this.TransmitInputAction(modifiedInputAction);
        }
        return modifiedInputAction;
    }
    // Function: ModifyInputAction
    // Called from <RunPlugin> and provided a <InputAction> as a parameter.
    // This function is used to manipulate the incoming <TouchFreeInputAction>
    // data. Returns a <TouchFreeInputAction> which is then distributed via the <InputActionManager>.
    ModifyInputAction(_inputAction) {
        return _inputAction;
    }
    // Function: TransmitInputAction
    // To be used to Invoke the InputActionOutput event from any child class of this base.
    TransmitInputAction(_inputAction) {
        let InputActionEvent = new CustomEvent('InputActionOutput', { detail: _inputAction });
        this.dispatchEvent(InputActionEvent);
    }
}
exports.InputActionPlugin = InputActionPlugin;


/***/ }),

/***/ 447:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const InputActionManager_1 = __webpack_require__(53);
const InputActionPlugin_1 = __webpack_require__(988);
module.exports = {
    InputActionManager: InputActionManager_1.InputActionManager,
    InputActionPlugin: InputActionPlugin_1.InputActionPlugin
};


/***/ }),

/***/ 579:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FlagUtilities = exports.RawBone = exports.FingerType = exports.RawFinger = exports.RawHand = exports.HandFrame = exports.WebsocketInputAction = exports.BitmaskFlags = exports.ConfigurationState = exports.TrackingServiceState = exports.InteractionType = exports.InputType = exports.HandType = exports.HandChirality = exports.ConvertInputAction = exports.TouchFreeInputAction = exports.VersionInfo = void 0;
// Class: VersionInfo
// This class is used when comparing the <ApiVersion> of the Tooling and the Service.
class VersionInfo {
}
exports.VersionInfo = VersionInfo;
// Group: Variables
// Variable: ApiVersion
// The current API version of the Tooling.
VersionInfo.ApiVersion = "1.3.0";
// Variable: API_HEADER_NAME
// The name of the header we wish the Service to compare our version with.
VersionInfo.API_HEADER_NAME = "TfApiVersion";
// Class: TouchFreeInputAction
// A structure representing the Tooling verison of an InputAction. This is used to pass
// key information relating to an action that has happened on the Service.
class TouchFreeInputAction {
    constructor(_timestamp, _interactionType, _handType, _handChirality, _inputType, _cursorPosition, _distanceFromScreen, _progressToClick) {
        this.Timestamp = _timestamp;
        this.InteractionType = _interactionType;
        this.HandType = _handType;
        this.Chirality = _handChirality;
        this.InputType = _inputType;
        this.CursorPosition = _cursorPosition;
        this.DistanceFromScreen = _distanceFromScreen;
        this.ProgressToClick = _progressToClick;
    }
}
exports.TouchFreeInputAction = TouchFreeInputAction;
// Function: ConvertInputAction
// Used to translate the raw actions that come across the websocket (<WebsocketInputActions>) and
// convert them into the Tooling-friendly <TouchFreeInputAction> format.
function ConvertInputAction(_wsInput) {
    const yPosition = window.innerHeight - (_wsInput.CursorPosition.y / window.devicePixelRatio);
    const xPosition = _wsInput.CursorPosition.x / window.devicePixelRatio;
    return new TouchFreeInputAction(_wsInput.Timestamp, FlagUtilities.GetInteractionTypeFromFlags(_wsInput.InteractionFlags), FlagUtilities.GetHandTypeFromFlags(_wsInput.InteractionFlags), FlagUtilities.GetChiralityFromFlags(_wsInput.InteractionFlags), FlagUtilities.GetInputTypeFromFlags(_wsInput.InteractionFlags), [xPosition, yPosition], _wsInput.DistanceFromScreen, _wsInput.ProgressToClick);
}
exports.ConvertInputAction = ConvertInputAction;
// Enum: HandChirality
// LEFT - The left hand
// RIGHT - The right hand
var HandChirality;
(function (HandChirality) {
    HandChirality[HandChirality["LEFT"] = 0] = "LEFT";
    HandChirality[HandChirality["RIGHT"] = 1] = "RIGHT";
})(HandChirality = exports.HandChirality || (exports.HandChirality = {}));
// Enum: HandType
// PRIMARY - The first hand found
// SECONDARY - The second hand found
var HandType;
(function (HandType) {
    HandType[HandType["PRIMARY"] = 0] = "PRIMARY";
    HandType[HandType["SECONDARY"] = 1] = "SECONDARY";
})(HandType = exports.HandType || (exports.HandType = {}));
// Enum: InputType
// NONE - Used to be ignored by the input system but to still receive information such as distance to screen
// CANCEL - Used to cancel the current input if an issue occurs. Particularly when a DOWN has happened before an UP
// DOWN - Used to begin a 'Touch' or a 'Drag'
// MOVE - Used to move a cursor or to perform a 'Drag' after a DOWN
// UP - Used to complete a 'Touch' or a 'Drag'
var InputType;
(function (InputType) {
    InputType[InputType["NONE"] = 0] = "NONE";
    InputType[InputType["CANCEL"] = 1] = "CANCEL";
    InputType[InputType["DOWN"] = 2] = "DOWN";
    InputType[InputType["MOVE"] = 3] = "MOVE";
    InputType[InputType["UP"] = 4] = "UP";
})(InputType = exports.InputType || (exports.InputType = {}));
// Enum: InteractionType
// GRAB - The user must perform a GRAB gesture to 'Touch' by bringing their fingers and thumb together
// HOVER - The user must perform a HOVER gesture to 'Touch' by holding their hand still for a fixed time
// PUSH - The user must perform a PUSH gesture to 'Touch' by pushing their hand toward the screen
var InteractionType;
(function (InteractionType) {
    InteractionType[InteractionType["GRAB"] = 0] = "GRAB";
    InteractionType[InteractionType["HOVER"] = 1] = "HOVER";
    InteractionType[InteractionType["PUSH"] = 2] = "PUSH";
    InteractionType[InteractionType["TOUCHPLANE"] = 3] = "TOUCHPLANE";
    InteractionType[InteractionType["VELOCITYSWIPE"] = 4] = "VELOCITYSWIPE";
})(InteractionType = exports.InteractionType || (exports.InteractionType = {}));
// Enum: TrackingServiceState
// UNAVAILABLE - The TouchFree service is not connected to the tracking service
// NO_CAMERA - The TouchFree service is connected to the tracking service but there is not a camera connected
// CONNECTED - The TouchFree service is connected to the tracking service
var TrackingServiceState;
(function (TrackingServiceState) {
    TrackingServiceState[TrackingServiceState["UNAVAILABLE"] = 0] = "UNAVAILABLE";
    TrackingServiceState[TrackingServiceState["NO_CAMERA"] = 1] = "NO_CAMERA";
    TrackingServiceState[TrackingServiceState["CONNECTED"] = 2] = "CONNECTED";
})(TrackingServiceState = exports.TrackingServiceState || (exports.TrackingServiceState = {}));
// Enum: ConfigurationState
// NOT_LOADED - The TouchFree configuration has not been loaded
// LOADED - The TouchFree configuration has successfully been loaded
// ERRORED - The TouchFree configuration errored on load
var ConfigurationState;
(function (ConfigurationState) {
    ConfigurationState[ConfigurationState["NOT_LOADED"] = 0] = "NOT_LOADED";
    ConfigurationState[ConfigurationState["LOADED"] = 1] = "LOADED";
    ConfigurationState[ConfigurationState["ERRORED"] = 2] = "ERRORED";
})(ConfigurationState = exports.ConfigurationState || (exports.ConfigurationState = {}));
// Enum: BitmaskFlags
// This is used to request any combination of the <HandChiralities>, <HandTypes>, <InputTypes>,
// and <InteractionTypes> flags from the Service at once.
var BitmaskFlags;
(function (BitmaskFlags) {
    BitmaskFlags[BitmaskFlags["NONE"] = 0] = "NONE";
    // HandChirality
    BitmaskFlags[BitmaskFlags["LEFT"] = 1] = "LEFT";
    BitmaskFlags[BitmaskFlags["RIGHT"] = 2] = "RIGHT";
    // Hand Type
    BitmaskFlags[BitmaskFlags["PRIMARY"] = 4] = "PRIMARY";
    BitmaskFlags[BitmaskFlags["SECONDARY"] = 8] = "SECONDARY";
    // Input Types
    BitmaskFlags[BitmaskFlags["NONE_INPUT"] = 16] = "NONE_INPUT";
    BitmaskFlags[BitmaskFlags["CANCEL"] = 32] = "CANCEL";
    BitmaskFlags[BitmaskFlags["DOWN"] = 64] = "DOWN";
    BitmaskFlags[BitmaskFlags["MOVE"] = 128] = "MOVE";
    BitmaskFlags[BitmaskFlags["UP"] = 256] = "UP";
    // Interaction Types
    BitmaskFlags[BitmaskFlags["GRAB"] = 512] = "GRAB";
    BitmaskFlags[BitmaskFlags["HOVER"] = 1024] = "HOVER";
    BitmaskFlags[BitmaskFlags["PUSH"] = 2048] = "PUSH";
    BitmaskFlags[BitmaskFlags["TOUCHPLANE"] = 4096] = "TOUCHPLANE";
    BitmaskFlags[BitmaskFlags["VELOCITYSWIPE"] = 8192] = "VELOCITYSWIPE";
    // Adding elements to this list is a breaking change, and should cause at
    // least a minor iteration of the API version UNLESS adding them at the end
})(BitmaskFlags = exports.BitmaskFlags || (exports.BitmaskFlags = {}));
// Class: WebsocketInputAction
// The version of an InputAction received via the WebSocket. This must be converted into a
// <TouchFreeInputAction> to be used by the Tooling and can be done so via ConvertInputAction.
class WebsocketInputAction {
    constructor(_timestamp, _interactionFlags, _cursorPosition, _distanceFromScreen, _progressToClick) {
        this.Timestamp = _timestamp;
        this.InteractionFlags = _interactionFlags;
        this.CursorPosition = _cursorPosition;
        this.DistanceFromScreen = _distanceFromScreen;
        this.ProgressToClick = _progressToClick;
    }
}
exports.WebsocketInputAction = WebsocketInputAction;
// Class: HandFrame
// A frame of hand data
class HandFrame {
    constructor() {
        this.Hands = [];
    }
}
exports.HandFrame = HandFrame;
// Class: RawHand
// The raw position data for a hand
class RawHand {
    constructor() {
        this.CurrentPrimary = false;
        this.Fingers = [];
        this.WristWidth = 0;
        this.WristPosition = { X: 0, Y: 0, Z: 0 };
    }
}
exports.RawHand = RawHand;
// Class: RawFinger
// The raw position data for a finger of a hand
class RawFinger {
    constructor() {
        this.Bones = [];
        this.Type = FingerType.TYPE_UNKNOWN;
    }
}
exports.RawFinger = RawFinger;
// Enum: FingerType
// What finger on a hand a finger is.
var FingerType;
(function (FingerType) {
    FingerType[FingerType["TYPE_THUMB"] = 0] = "TYPE_THUMB";
    FingerType[FingerType["TYPE_INDEX"] = 1] = "TYPE_INDEX";
    FingerType[FingerType["TYPE_MIDDLE"] = 2] = "TYPE_MIDDLE";
    FingerType[FingerType["TYPE_RING"] = 3] = "TYPE_RING";
    FingerType[FingerType["TYPE_PINKY"] = 4] = "TYPE_PINKY";
    FingerType[FingerType["TYPE_UNKNOWN"] = -1] = "TYPE_UNKNOWN";
})(FingerType = exports.FingerType || (exports.FingerType = {}));
// Class: RawFinger
// The raw position data for a bone in a finger
class RawBone {
    constructor() {
        this.NextJoint = { X: 0, Y: 0, Z: 0 };
        this.PrevJoint = { X: 0, Y: 0, Z: 0 };
    }
}
exports.RawBone = RawBone;
// Class: FlagUtilities
// A collection of Utilities to be used when working with <BitmaskFlags>.
class FlagUtilities {
    // Group: Functions
    // Function: GetInteractionFlags
    // Used to convert a collection of interaction enums to flags for sending
    // to the Service.
    static GetInteractionFlags(_interactionType, _handType, _chirality, _inputType) {
        let returnVal = BitmaskFlags.NONE;
        switch (_handType) {
            case HandType.PRIMARY:
                returnVal ^= BitmaskFlags.PRIMARY;
                break;
            case HandType.SECONDARY:
                returnVal ^= BitmaskFlags.SECONDARY;
                break;
        }
        switch (_chirality) {
            case HandChirality.LEFT:
                returnVal ^= BitmaskFlags.LEFT;
                break;
            case HandChirality.RIGHT:
                returnVal ^= BitmaskFlags.RIGHT;
                break;
        }
        switch (_inputType) {
            case InputType.NONE:
                returnVal ^= BitmaskFlags.NONE_INPUT;
                break;
            case InputType.CANCEL:
                returnVal ^= BitmaskFlags.CANCEL;
                break;
            case InputType.MOVE:
                returnVal ^= BitmaskFlags.MOVE;
                break;
            case InputType.UP:
                returnVal ^= BitmaskFlags.UP;
                break;
            case InputType.DOWN:
                returnVal ^= BitmaskFlags.DOWN;
                break;
        }
        switch (_interactionType) {
            case InteractionType.PUSH:
                returnVal ^= BitmaskFlags.PUSH;
                break;
            case InteractionType.HOVER:
                returnVal ^= BitmaskFlags.HOVER;
                break;
            case InteractionType.GRAB:
                returnVal ^= BitmaskFlags.GRAB;
                break;
            case InteractionType.TOUCHPLANE:
                returnVal ^= BitmaskFlags.TOUCHPLANE;
                break;
            case InteractionType.VELOCITYSWIPE:
                returnVal ^= BitmaskFlags.VELOCITYSWIPE;
                break;
        }
        return returnVal;
    }
    // Function: GetChiralityFromFlags
    // Used to find which <HandChirality> _flags contains. Favours RIGHT if none or both are found.
    static GetChiralityFromFlags(_flags) {
        let chirality = HandChirality.RIGHT;
        if (_flags & BitmaskFlags.RIGHT) {
            chirality = HandChirality.RIGHT;
        }
        else if (_flags & BitmaskFlags.LEFT) {
            chirality = HandChirality.LEFT;
        }
        else {
            console.error("InputActionData missing: No Chirality found. Defaulting to 'RIGHT'");
        }
        return chirality;
    }
    // Function: GetHandTypeFromFlags
    // Used to find which <HandType> _flags contains. Favours PRIMARY if none or both are found.
    static GetHandTypeFromFlags(_flags) {
        let handType = HandType.PRIMARY;
        if (_flags & BitmaskFlags.PRIMARY) {
            handType = HandType.PRIMARY;
        }
        else if (_flags & BitmaskFlags.SECONDARY) {
            handType = HandType.SECONDARY;
        }
        else {
            console.error("InputActionData missing: No HandData found. Defaulting to 'PRIMARY'");
        }
        return handType;
    }
    // Function: GetInputTypeFromFlags
    // Used to find which <InputType> _flags contains. Favours NONE if none are found.
    static GetInputTypeFromFlags(_flags) {
        let inputType = InputType.NONE;
        if (_flags & BitmaskFlags.NONE_INPUT) {
            inputType = InputType.NONE;
        }
        else if (_flags & BitmaskFlags.CANCEL) {
            inputType = InputType.CANCEL;
        }
        else if (_flags & BitmaskFlags.UP) {
            inputType = InputType.UP;
        }
        else if (_flags & BitmaskFlags.DOWN) {
            inputType = InputType.DOWN;
        }
        else if (_flags & BitmaskFlags.MOVE) {
            inputType = InputType.MOVE;
        }
        else {
            console.error("InputActionData missing: No InputType found. Defaulting to 'NONE'");
        }
        return inputType;
    }
    // Function: GetInteractionTypeFromFlags
    // Used to find which <InteractionType> _flags contains. Favours PUSH if none are found.
    static GetInteractionTypeFromFlags(_flags) {
        let interactionType = InteractionType.PUSH;
        if (_flags & BitmaskFlags.PUSH) {
            interactionType = InteractionType.PUSH;
        }
        else if (_flags & BitmaskFlags.HOVER) {
            interactionType = InteractionType.HOVER;
        }
        else if (_flags & BitmaskFlags.GRAB) {
            interactionType = InteractionType.GRAB;
        }
        else if (_flags & BitmaskFlags.TOUCHPLANE) {
            interactionType = InteractionType.TOUCHPLANE;
        }
        else if (_flags & BitmaskFlags.VELOCITYSWIPE) {
            interactionType = InteractionType.VELOCITYSWIPE;
        }
        else {
            console.error("InputActionData missing: No InteractionType found. Defaulting to 'PUSH'");
        }
        return interactionType;
    }
}
exports.FlagUtilities = FlagUtilities;


/***/ }),

/***/ 718:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TrackingManager = void 0;
const ConnectionManager_1 = __webpack_require__(597);
// class: TrackingManager
// This class provides methods for getting and setting the settings of the tracking software.
class TrackingManager {
    // Function: RequestTrackingState
    // Used to request a <TrackingState> representing the current state of the tracking software's settings via the
    // WebSocket.
    // Provides a <TrackingState> asynchronously via the _callback parameter.
    //
    // If your _callback requires context it should be bound to that context via .bind()
    static RequestTrackingState(_callback) {
        var _a;
        if (!_callback) {
            console.error('Config file state request failed. This call requires a callback.');
            return;
        }
        (_a = ConnectionManager_1.ConnectionManager.serviceConnection()) === null || _a === void 0 ? void 0 : _a.RequestTrackingState(_callback);
    }
    // Function: RequestTrackingChange
    // Requests a modification to the tracking software's settings. Takes any of the following arguments representing
    // the desired changes and sends them through the <ConnectionManager>.
    // <MaskingConfig>, <CameraConfig>, and bools for if images are allowed and if analytics are enabled.
    //
    // Provide a _callback if you require confirmation that your settings were used correctly.
    // If your _callback requires context it should be bound to that context via .bind().
    static RequestTrackingChange(_state, _callback = null) {
        var _a;
        (_a = ConnectionManager_1.ConnectionManager.serviceConnection()) === null || _a === void 0 ? void 0 : _a.RequestTrackingChange(_state, _callback);
    }
    // Function: ConvertResponseToState
    // Converts a TrackingStateResponse to a Partial<TrackingState> to make the response easier to consume.
    static ConvertResponseToState(_response) {
        var response = {};
        if (_response.mask !== undefined && _response.mask !== null) {
            response.mask = _response.mask.content;
        }
        if (_response.cameraReversed !== undefined && _response.cameraReversed !== null) {
            response.cameraReversed = _response.cameraReversed.content;
        }
        if (_response.allowImages !== undefined && _response.allowImages !== null) {
            response.allowImages = _response.allowImages.content;
        }
        if (_response.analyticsEnabled !== undefined && _response.analyticsEnabled !== null) {
            response.analyticsEnabled = _response.analyticsEnabled.content;
        }
        return response;
    }
}
exports.TrackingManager = TrackingManager;


/***/ }),

/***/ 572:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TrackingState = void 0;
// Class: TrackingState
// Represents the settings available for modification in the Tracking API
class TrackingState {
    constructor(_mask, _cameraReversed, _allowImages, _analyticsEnabled) {
        this.mask = _mask;
        this.cameraReversed = _cameraReversed;
        this.allowImages = _allowImages;
        this.analyticsEnabled = _analyticsEnabled;
    }
}
exports.TrackingState = TrackingState;


/***/ }),

/***/ 720:
/***/ (function(module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const TrackingManager_1 = __webpack_require__(718);
const TrackingTypes = __importStar(__webpack_require__(572));
module.exports = {
    TrackingManager: TrackingManager_1.TrackingManager,
    TrackingTypes: TrackingTypes,
};


/***/ }),

/***/ 26:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MapRangeToRange = void 0;
// Function: MapRangeToRange
// Map _value from a range of _oldMin to _oldMax to a new range of _newMin to _newMax.
//
// e.g. the result of MapRangeToRange(0.5, 0, 1, 0, 8) is 4.
function MapRangeToRange(_value, _oldMin, _oldMax, _newMin, _newMax) {
    let oldRange = (_oldMax - _oldMin);
    let newValue;
    if (oldRange === 0) {
        newValue = _newMin;
    }
    else {
        let newRange = (_newMax - _newMin);
        newValue = (((_value - _oldMin) * newRange) / oldRange) + _newMin;
    }
    return newValue;
}
exports.MapRangeToRange = MapRangeToRange;


/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Configuration = __importStar(__webpack_require__(490));
const Connection = __importStar(__webpack_require__(810));
const Cursors = __importStar(__webpack_require__(741));
const InputControllers = __importStar(__webpack_require__(58));
const Plugins = __importStar(__webpack_require__(447));
const TouchFreeToolingTypes = __importStar(__webpack_require__(579));
const Tracking = __importStar(__webpack_require__(720));
module.exports = {
    Configuration: Configuration,
    Connection: Connection,
    Cursors: Cursors,
    InputControllers: InputControllers,
    Plugins: Plugins,
    TouchFreeToolingTypes: TouchFreeToolingTypes,
    Tracking: Tracking,
};


/***/ }),

/***/ 614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "NIL": () => (/* reexport */ nil),
  "parse": () => (/* reexport */ esm_browser_parse),
  "stringify": () => (/* reexport */ esm_browser_stringify),
  "v1": () => (/* reexport */ esm_browser_v1),
  "v3": () => (/* reexport */ esm_browser_v3),
  "v4": () => (/* reexport */ esm_browser_v4),
  "v5": () => (/* reexport */ esm_browser_v5),
  "validate": () => (/* reexport */ esm_browser_validate),
  "version": () => (/* reexport */ esm_browser_version)
});

;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/rng.js
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/regex.js
/* harmony default export */ const regex = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/validate.js


function validate(uuid) {
  return typeof uuid === 'string' && regex.test(uuid);
}

/* harmony default export */ const esm_browser_validate = (validate);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/stringify.js

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!esm_browser_validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const esm_browser_stringify = (stringify);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/v1.js

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || new Array(16);
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || rng)();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || esm_browser_stringify(b);
}

/* harmony default export */ const esm_browser_v1 = (v1);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/parse.js


function parse(uuid) {
  if (!esm_browser_validate(uuid)) {
    throw TypeError('Invalid UUID');
  }

  var v;
  var arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

/* harmony default export */ const esm_browser_parse = (parse);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/v35.js



function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = [];

  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
/* harmony default export */ function v35(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = esm_browser_parse(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    var bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return esm_browser_stringify(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/md5.js
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (var i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  var output = [];
  var length32 = input.length * 32;
  var hexTab = '0123456789abcdef';

  for (var i = 0; i < length32; i += 8) {
    var x = input[i >> 5] >>> i % 32 & 0xff;
    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  var length8 = input.length * 8;
  var output = new Uint32Array(getOutputLength(length8));

  for (var i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

/* harmony default export */ const esm_browser_md5 = (md5);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/v3.js


var v3 = v35('v3', 0x30, esm_browser_md5);
/* harmony default export */ const esm_browser_v3 = (v3);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/v4.js



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return esm_browser_stringify(rnds);
}

/* harmony default export */ const esm_browser_v4 = (v4);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/sha1.js
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (var i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);

  for (var _i = 0; _i < N; ++_i) {
    var arr = new Uint32Array(16);

    for (var j = 0; j < 16; ++j) {
      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
    }

    M[_i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (var _i2 = 0; _i2 < N; ++_i2) {
    var W = new Uint32Array(80);

    for (var t = 0; t < 16; ++t) {
      W[t] = M[_i2][t];
    }

    for (var _t = 16; _t < 80; ++_t) {
      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
    }

    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];

    for (var _t2 = 0; _t2 < 80; ++_t2) {
      var s = Math.floor(_t2 / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

/* harmony default export */ const esm_browser_sha1 = (sha1);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/v5.js


var v5 = v35('v5', 0x50, esm_browser_sha1);
/* harmony default export */ const esm_browser_v5 = (v5);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/nil.js
/* harmony default export */ const nil = ('00000000-0000-0000-0000-000000000000');
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/version.js


function version(uuid) {
  if (!esm_browser_validate(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.substr(14, 1), 16);
}

/* harmony default export */ const esm_browser_version = (version);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/index.js










/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			219: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktouchfree_tooling_for_web"] = self["webpackChunktouchfree_tooling_for_web"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(607);
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});