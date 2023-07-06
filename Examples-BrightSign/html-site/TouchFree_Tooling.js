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
const ConnectionManager_1 = __webpack_require__(597);
const TouchFreeServiceTypes_1 = __webpack_require__(5);
const uuid_1 = __webpack_require__(982);
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
            console.error('Config state request failed. This call requires a callback.');
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
        const requestID = (0, uuid_1.v4)();
        const content = new TouchFreeServiceTypes_1.PartialConfigState(requestID, _interaction, _physical);
        const request = new TouchFreeServiceTypes_1.CommunicationWrapper(action, content);
        const jsonContent = JSON.stringify(request);
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
            console.error('Config file state request failed. This call requires a callback.');
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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConnectionManager = void 0;
const TouchFree_1 = __importDefault(__webpack_require__(798));
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
    // Group: Functions
    // Function: init
    // Used to begin the connection. Creates the required <MessageReceiver>.
    // Also attempts to immediately <Connect> to a WebSocket.
    static init(initParams) {
        ConnectionManager.messageReceiver = new MessageReceiver_1.MessageReceiver();
        ConnectionManager.instance = new ConnectionManager();
        if (initParams === null || initParams === void 0 ? void 0 : initParams.address) {
            ConnectionManager.SetAddress(initParams.address);
        }
        else {
            ConnectionManager.Connect();
        }
    }
    // Function: AddConnectionListener
    // Used to both add the _onConnectFunc action to the listeners of <OnConnected>
    // as well as auto-call the _onConnectFunc if a connection is already made.
    static AddConnectionListener(_onConnectFunc) {
        TouchFree_1.default.RegisterEventCallback('WhenConnected', _onConnectFunc);
    }
    static get IsConnected() {
        return (ConnectionManager.currentServiceConnection !== null &&
            ConnectionManager.currentServiceConnection.webSocket.readyState === WebSocket.OPEN &&
            ConnectionManager.currentServiceConnection.handshakeComplete);
    }
    static AddServiceStatusListener(_serviceStatusFunc) {
        TouchFree_1.default.RegisterEventCallback('OnTrackingServiceStateChange', _serviceStatusFunc);
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
        if (_state === TouchFreeServiceTypes_1.HandPresenceState.HAND_FOUND) {
            TouchFree_1.default.DispatchEvent('HandFound');
        }
        else {
            TouchFree_1.default.DispatchEvent('HandsLost');
        }
    }
    // Function: HandleInteractionZoneEvent
    // Called by the <MessageReciever> to pass InteractionZone events via the <HandEntered> and
    // <HandsExited> events on this class
    static HandleInteractionZoneEvent(_state) {
        ConnectionManager.currentInteractionZoneState = _state;
        if (_state === TouchFreeServiceTypes_1.InteractionZoneState.HAND_ENTERED) {
            TouchFree_1.default.DispatchEvent('HandEntered');
        }
        else {
            TouchFree_1.default.DispatchEvent('HandExited');
        }
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
            console.error('Request failed. This is due to a missing callback');
            return;
        }
        (_a = ConnectionManager.serviceConnection()) === null || _a === void 0 ? void 0 : _a.RequestServiceStatus(_callback);
    }
    // Function: GetCurrentHandPresence
    // Function to get the current hand presense state
    static GetCurrentHandPresence() {
        return ConnectionManager.currentHandPresence;
    }
    // Function: GetCurrentInteractionZoneState
    // Function to get the current hand presense state
    static GetCurrentInteractionZoneState() {
        return ConnectionManager.currentInteractionZoneState;
    }
    // Function: SetAddress
    // Function to set the ip and port that Tooling should attempt to connect to the Service via
    static SetAddress(address) {
        var _a, _b;
        ConnectionManager.iPAddress = (_a = address.ip) !== null && _a !== void 0 ? _a : '127.0.0.1';
        ConnectionManager.port = (_b = address.port) !== null && _b !== void 0 ? _b : '9739';
        ConnectionManager.Disconnect();
        ConnectionManager.Connect();
    }
}
exports.ConnectionManager = ConnectionManager;
// Group: Events
// Event: OnConnected
// An event which is emitted when <Connect> is called.
//
// Instead of adding listeners to this event, use <AddConnectionListener> to ensure that your
// function is invoked if the connection has already been made by the time your class runs.
// Group: Variables
// Variable: currentServiceConnection
// The private reference to the currently managed <ServiceConnection>.
ConnectionManager.currentServiceConnection = null;
// Variable: iPAddress
// The IP Address that will be used in the <ServiceConnection> to connect to the target
// WebSocket. This value is settable in the Inspector.
ConnectionManager.iPAddress = '127.0.0.1';
// Variable: port
// The Port that will be used in the <ServiceConnection> to connect to the target WebSocket.
// This value is settable in the Inspector.
ConnectionManager.port = '9739';
// Variable: currentHandPresence
// Private reference to the current hand presence state
ConnectionManager.currentHandPresence = TouchFreeServiceTypes_1.HandPresenceState.HANDS_LOST;
// Variable: currentInteractionZoneState
// Private reference to the current interaction zone state
ConnectionManager.currentInteractionZoneState = TouchFreeServiceTypes_1.InteractionZoneState.HAND_EXITED;


/***/ }),

/***/ 184:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessageReceiver = void 0;
const HandDataManager_1 = __webpack_require__(333);
const InputActionManager_1 = __webpack_require__(53);
const TouchFree_1 = __importDefault(__webpack_require__(798));
const TouchFreeToolingTypes_1 = __webpack_require__(579);
const ConnectionManager_1 = __webpack_require__(597);
const TouchFreeServiceTypes_1 = __webpack_require__(5);
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
        // A dictionary of unique request IDs and <ResponseCallbacks> that represent requests
        // that are awaiting response from the Service.
        this.responseCallbacks = {};
        // Variable: handshakeQueue
        // A queue of handshake <WebSocketResponses> that have been received from the Service.
        this.handshakeQueue = [];
        // Variable: handshakeCallbacks
        // A dictionary of unique request IDs and <ResponseCallbacks> that represent handshake requests
        // that are awaiting response from the Service.
        this.handshakeCallbacks = {};
        // Variable: configStateQueue
        // A queue of <ConfigState> that have been received from the Service.
        this.configStateQueue = [];
        // Variable: configStateCallbacks
        // A dictionary of unique request IDs and <ConfigStateCallback> that represent requests
        // that are awaiting response from the Service.
        this.configStateCallbacks = {};
        // Variable: serviceStatusQueue
        // A queue of <ServiceStatus> that have been received from the Service.
        this.serviceStatusQueue = [];
        // Variable: serviceStatusCallbacks
        // A dictionary of unique request IDs and <ServiceStatusCallback> that represent requests
        // that are awaiting response from the Service.
        this.serviceStatusCallbacks = {};
        // Variable: lastStateUpdate
        // The last hand presence state update received from the Service.
        this.lastStateUpdate = TouchFreeServiceTypes_1.HandPresenceState.PROCESSED;
        // Variable: lastInteractionZoneUpdate
        // The last interaction zone event update received from the Service.
        this.lastInteractionZoneUpdate = {
            state: TouchFreeServiceTypes_1.InteractionZoneState.HAND_EXITED,
            status: 'PROCESSED',
        };
        // Variable: trackingStateQueue
        // A queue of <TrackingStates> that have been received from the Service.
        this.trackingStateQueue = [];
        // Variable: trackingSettingsStateCallbacks
        // A dictionary of unique request IDs and <TrackingStateCallback> that represent requests
        // that are awaiting response from the Service.
        this.trackingStateCallbacks = {};
        // Used to ensure UP events are sent at the correct position relative to the previous
        // MOVE event.
        // This is required due to the culling of events from the actionQueue in CheckForAction.
        this.lastKnownCursorPosition = [0, 0];
        this.updateDuration = (1 / this.updateRate) * 1000;
        this.callbackClearInterval = setInterval(this.ClearUnresponsivePromises, this.callbackClearTimer);
        this.updateInterval = setInterval(this.Update.bind(this), this.updateDuration);
    }
    // Function: Update
    // Update function. Checks all queues for messages to handle. Run on an interval
    // started during the constructor
    Update() {
        this.CheckForHandshakeResponse();
        this.CheckForResponse();
        this.CheckForConfigState();
        this.CheckForServiceStatus();
        this.CheckForTrackingStateResponse();
        this.CheckForAction();
        this.CheckForHandData();
    }
    // Function: CheckForHandshakeResponse
    // Used to check the <responseQueue> for a <WebSocketResponse>. Sends it to Sends it to <HandleCallbackList> with
    // the <responseCallbacks> dictionary if there is one.
    CheckForHandshakeResponse() {
        const response = this.handshakeQueue.shift();
        if (response) {
            const responseResult = MessageReceiver.HandleCallbackList(response, this.handshakeCallbacks);
            switch (responseResult) {
                case 'NoCallbacksFound':
                    this.LogNoCallbacksWarning(response);
                    break;
                case 'Success':
                    if (response.message && response.status === 'Success') {
                        if (response.message.indexOf('Handshake Warning') >= 0) {
                            console.warn('Received Handshake Warning from TouchFree:\n' + response.message);
                        }
                        else {
                            console.log('Received Handshake Success from TouchFree:\n' + response.message);
                        }
                    }
                    else {
                        console.error('Received Handshake Error from TouchFree:\n' + response.message);
                    }
                    break;
            }
        }
    }
    LogNoCallbacksWarning(response) {
        console.warn('Received a Handshake Response that did not match a callback.' +
            'This is the content of the response: \n Response ID: ' +
            response.requestID +
            '\n Status: ' +
            response.status +
            '\n Message: ' +
            response.message +
            '\n Original request - ' +
            response.originalRequest);
    }
    // Function: CheckForResponse
    // Used to check the <responseQueue> for a <WebSocketResponse>. Sends it to Sends it to <HandleCallbackList> with
    // the <responseCallbacks> dictionary if there is one.
    CheckForResponse() {
        const response = this.responseQueue.shift();
        if (response) {
            const responseResult = MessageReceiver.HandleCallbackList(response, this.responseCallbacks);
            switch (responseResult) {
                case 'NoCallbacksFound':
                    this.LogNoCallbacksWarning(response);
                    break;
                case 'Success':
                    if (response.message) {
                        // This is logged to aid users in debugging
                        console.log('Successfully received WebSocketResponse from TouchFree:\n' + response.message);
                    }
                    break;
            }
        }
    }
    // Function: CheckForConfigState
    // Used to check the <configStateQueue> for a <ConfigState>. Sends it to <HandleCallbackList> with
    // the <configStateCallbacks> dictionary if there is one.
    CheckForConfigState() {
        const configState = this.configStateQueue.shift();
        if (configState) {
            const configResult = MessageReceiver.HandleCallbackList(configState, this.configStateCallbacks);
            switch (configResult) {
                case 'NoCallbacksFound':
                    console.warn('Received a ConfigState message that did not match a callback.');
                    break;
                case 'Success':
                    // no-op
                    break;
            }
        }
    }
    // Function: HandleCallbackList
    // Checks the dictionary of <callbacks> for a matching request ID. If there is a
    // match, calls the callback action in the matching <TouchFreeRequestCallback>.
    // Returns true if it was able to find a callback, returns false if not
    static HandleCallbackList(callbackResult, callbacks) {
        for (const key in callbacks) {
            if (key === callbackResult.requestID) {
                callbacks[key].callback(callbackResult);
                delete callbacks[key];
                return 'Success';
            }
        }
        return 'NoCallbacksFound';
    }
    // Function: CheckForServiceStatus
    // Used to check the <serviceStatusQueue> for a <ServiceStatus>. Sends it to <HandleCallbackList> with
    // the <serviceStatusCallbacks> dictionary if there is one.
    CheckForServiceStatus() {
        const serviceStatus = this.serviceStatusQueue.shift();
        if (serviceStatus) {
            const callbackResult = MessageReceiver.HandleCallbackList(serviceStatus, this.serviceStatusCallbacks);
            switch (callbackResult) {
                // If callback didn't happen for known reasons, we can be sure it's an independent status event rather
                // than a request response
                // TODO: Send/handle this request from service differently from normal response so
                // we can be sure it's an independent event
                case 'NoCallbacksFound':
                    // If service state is null we didn't get info about it from this message
                    if (serviceStatus.trackingServiceState !== null) {
                        TouchFree_1.default.DispatchEvent('OnTrackingServiceStateChange', serviceStatus.trackingServiceState);
                    }
                    TouchFree_1.default.DispatchEvent('OnServiceStatusChange', serviceStatus);
                    break;
                case 'Success':
                    // no-op
                    break;
            }
        }
    }
    // Function: CheckForTrackingStateResponse
    // Used to check the <trackingStateQueue> for a <TrackingStateResponse>.
    // Sends it to <HandleTrackingStateResponse> if there is one.
    CheckForTrackingStateResponse() {
        const trackingStateResponse = this.trackingStateQueue.shift();
        if (trackingStateResponse) {
            this.HandleTrackingStateResponse(trackingStateResponse);
        }
    }
    // Function: HandleTrackingStateResponse
    // Checks the dictionary of <trackingStateCallbacks> for a matching request ID. If there is a
    // match, calls the callback action in the matching <TrackingStateCallback>.
    HandleTrackingStateResponse(trackingStateResponse) {
        if (this.trackingStateCallbacks !== undefined) {
            for (const key in this.trackingStateCallbacks) {
                if (key === trackingStateResponse.requestID) {
                    this.trackingStateCallbacks[key].callback(trackingStateResponse);
                    delete this.trackingStateCallbacks[key];
                    return;
                }
            }
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
        const action = this.actionQueue.shift();
        if (action !== undefined) {
            // Parse newly received messages & distribute them
            const converted = (0, TouchFreeToolingTypes_1.ConvertInputAction)(action);
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
        if (this.lastInteractionZoneUpdate.status === 'UNPROCESSED') {
            ConnectionManager_1.ConnectionManager.HandleInteractionZoneEvent(this.lastInteractionZoneUpdate.state);
            this.lastInteractionZoneUpdate.status = 'PROCESSED';
        }
    }
    // Function: CheckForHandData
    // Checks <latestHandDataItem> and if the <HandFrame> is not undefined sends it to
    // <HandDataManager> to handle the frame.
    CheckForHandData() {
        const handFrame = this.latestHandDataItem;
        if (handFrame) {
            this.latestHandDataItem = undefined;
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
        const lastClearTime = Date.now();
        MessageReceiver.ClearUnresponsiveItems(lastClearTime, this.responseCallbacks);
        MessageReceiver.ClearUnresponsiveItems(lastClearTime, this.handshakeCallbacks);
        MessageReceiver.ClearUnresponsiveItems(lastClearTime, this.configStateCallbacks);
        MessageReceiver.ClearUnresponsiveItems(lastClearTime, this.serviceStatusCallbacks);
        MessageReceiver.ClearUnresponsiveItems(lastClearTime, this.trackingStateCallbacks);
    }
    static ClearUnresponsiveItems(lastClearTime, callbacks) {
        if (callbacks !== undefined) {
            for (const key in callbacks) {
                if (callbacks[key].timestamp < lastClearTime) {
                    delete callbacks[key];
                }
                else {
                    break;
                }
            }
        }
    }
}
exports.MessageReceiver = MessageReceiver;


/***/ }),

/***/ 636:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServiceConnection = void 0;
const TouchFree_1 = __importDefault(__webpack_require__(798));
const TouchFreeToolingTypes_1 = __webpack_require__(579);
const ConnectionManager_1 = __webpack_require__(597);
const TouchFreeServiceTypes_1 = __webpack_require__(5);
const uuid_1 = __webpack_require__(982);
// Class: ServiceConnection
// This represents a connection to a TouchFree Service. It should be created by a
// <ConnectionManager> to ensure there is only one active connection at a time. The sending
// and receiving of data to the Tooling is handled here as well as the creation of a
// <MessageReceiver> to ensure the data is handled properly.
class ServiceConnection {
    // Variable: touchFreeVersion
    // The version of the connected TouchFree Service
    get touchFreeVersion() {
        return this._touchFreeVersion;
    }
    get handshakeComplete() {
        return this.handshakeCompleted;
    }
    // Group: Functions
    // Function: constructor
    // The constructor for <ServiceConnection> that can be given a different IP Address and Port
    // to connect to on construction. This constructor also sets up the redirects of incoming
    // messages to <OnMessage>. Puts a listener on the websocket so that once it opens, a handshake
    // request is sent with this Tooling's API version number. The service will not send data over
    // an open connection until this handshake is completed successfully.
    constructor(_ip = '127.0.0.1', _port = '9739') {
        this._touchFreeVersion = '';
        // Function: Disconnect
        // Can be used to force the connection to the <webSocket> to be closed.
        this.Disconnect = () => {
            if (this.webSocket !== null) {
                this.webSocket.close();
            }
        };
        this.RequestHandshake = () => {
            if (!this.handshakeCompleted) {
                const guid = (0, uuid_1.v4)();
                // construct message
                const handshakeRequest = {
                    action: TouchFreeServiceTypes_1.ActionCode.VERSION_HANDSHAKE,
                    content: {
                        requestID: guid,
                    },
                };
                handshakeRequest.content[TouchFreeToolingTypes_1.VersionInfo.API_HEADER_NAME] = TouchFreeToolingTypes_1.VersionInfo.ApiVersion;
                if (!this.handshakeRequested) {
                    this.handshakeRequested = true;
                    // send message
                    this.sendMessageWithSimpleResponse(JSON.stringify(handshakeRequest), guid, this.ConnectionResultCallback, ConnectionManager_1.ConnectionManager.messageReceiver.handshakeCallbacks);
                }
            }
        };
        // Function: ConnectionResultCallback
        // Passed into <SendMessage> as part of connecting to TouchFree Service, handles the
        // result of the Version Checking handshake.
        this.ConnectionResultCallback = (response) => {
            if (response.status === 'Success') {
                console.log('Successful Connection');
                const handshakeResponse = response;
                if (handshakeResponse) {
                    this._touchFreeVersion = handshakeResponse.touchFreeVersion;
                }
                this.handshakeCompleted = true;
                TouchFree_1.default.DispatchEvent('OnConnected');
            }
            else {
                console.error(`Connection to Service failed. Details:\n${response.message}`);
            }
        };
        // Function: OnMessage
        // The first point of contact for new messages received, these are sorted into appropriate
        // types based on their <ActionCode> and added to queues on the <ConnectionManager's>
        // <MessageReceiver>.
        this.OnMessage = (_message) => {
            if (typeof _message.data !== 'string') {
                const buffer = _message.data;
                const binaryDataType = new Int32Array(buffer, 0, 4)[0];
                if (binaryDataType === ServiceBinaryDataTypes.HandRenderData) {
                    ConnectionManager_1.ConnectionManager.messageReceiver.latestHandDataItem = buffer;
                }
                return;
            }
            const looseData = JSON.parse(_message.data);
            switch (looseData.action) {
                case TouchFreeServiceTypes_1.ActionCode.INPUT_ACTION: {
                    const wsInput = looseData.content;
                    ConnectionManager_1.ConnectionManager.messageReceiver.actionQueue.push(wsInput);
                    break;
                }
                case TouchFreeServiceTypes_1.ActionCode.HAND_PRESENCE_EVENT: {
                    const handEvent = looseData.content;
                    ConnectionManager_1.ConnectionManager.messageReceiver.lastStateUpdate = handEvent.state;
                    break;
                }
                case TouchFreeServiceTypes_1.ActionCode.SERVICE_STATUS: {
                    const serviceStatus = looseData.content;
                    ConnectionManager_1.ConnectionManager.messageReceiver.serviceStatusQueue.push(serviceStatus);
                    break;
                }
                case TouchFreeServiceTypes_1.ActionCode.CONFIGURATION_STATE:
                case TouchFreeServiceTypes_1.ActionCode.CONFIGURATION_FILE_STATE:
                case TouchFreeServiceTypes_1.ActionCode.QUICK_SETUP_CONFIG: {
                    const configFileState = looseData.content;
                    ConnectionManager_1.ConnectionManager.messageReceiver.configStateQueue.push(configFileState);
                    break;
                }
                case TouchFreeServiceTypes_1.ActionCode.VERSION_HANDSHAKE_RESPONSE: {
                    const response = looseData.content;
                    ConnectionManager_1.ConnectionManager.messageReceiver.handshakeQueue.push(response);
                    break;
                }
                case TouchFreeServiceTypes_1.ActionCode.CONFIGURATION_RESPONSE:
                case TouchFreeServiceTypes_1.ActionCode.SERVICE_STATUS_RESPONSE:
                case TouchFreeServiceTypes_1.ActionCode.CONFIGURATION_FILE_RESPONSE:
                case TouchFreeServiceTypes_1.ActionCode.QUICK_SETUP_RESPONSE: {
                    const response = looseData.content;
                    ConnectionManager_1.ConnectionManager.messageReceiver.responseQueue.push(response);
                    break;
                }
                case TouchFreeServiceTypes_1.ActionCode.TRACKING_STATE: {
                    const trackingResponse = looseData.content;
                    ConnectionManager_1.ConnectionManager.messageReceiver.trackingStateQueue.push(trackingResponse);
                    break;
                }
                case TouchFreeServiceTypes_1.ActionCode.INTERACTION_ZONE_EVENT: {
                    const { state } = looseData.content;
                    ConnectionManager_1.ConnectionManager.messageReceiver.lastInteractionZoneUpdate = { status: 'UNPROCESSED', state: state };
                    break;
                }
            }
        };
        // Function: SendMessage
        // Used internally to send or request information from the Service via the <webSocket>. To
        // be given a pre-made _message and _requestID. Provides an asynchronous <WebSocketResponse>
        // via the _callback parameter.
        //
        // If your _callback requires context it should be bound to that context via .bind()
        this.SendMessage = (_message, _requestID, _callback) => {
            this.sendMessageWithSimpleResponse(_message, _requestID, _callback, ConnectionManager_1.ConnectionManager.messageReceiver.responseCallbacks);
        };
        this.sendMessageWithSimpleResponse = (_message, _requestID, _callback, _callbacksStore) => {
            if (!_requestID) {
                if (_callback) {
                    const response = new TouchFreeServiceTypes_1.WebSocketResponse('', 'Failure', 'Request failed. This is due to a missing or invalid requestID', _message);
                    _callback(response);
                }
                console.error('Request failed. This is due to a missing or invalid requestID');
                return;
            }
            if (_callback) {
                _callbacksStore[_requestID] = new TouchFreeServiceTypes_1.ResponseCallback(Date.now(), _callback);
            }
            this.webSocket.send(_message);
        };
        // Function: RequestConfigState
        // Used internally to request information from the Service via the <webSocket>.
        // Provides an asynchronous <ConfigState> via the _callback parameter.
        //
        // If your _callback requires context it should be bound to that context via .bind()
        this.RequestConfigState = (_callback) => {
            if (_callback === null) {
                console.error('Request for config state failed. This is due to a missing callback');
                return;
            }
            const guid = (0, uuid_1.v4)();
            const request = new TouchFreeServiceTypes_1.ConfigChangeRequest(guid);
            const wrapper = new TouchFreeServiceTypes_1.CommunicationWrapper(TouchFreeServiceTypes_1.ActionCode.REQUEST_CONFIGURATION_STATE, request);
            const message = JSON.stringify(wrapper);
            ConnectionManager_1.ConnectionManager.messageReceiver.configStateCallbacks[guid] = new TouchFreeServiceTypes_1.ConfigStateCallback(Date.now(), _callback);
            this.webSocket.send(message);
        };
        // Function: RequestServiceStatus
        // Used internally to request information from the Service via the <webSocket>.
        // Provides an asynchronous <ServiceStatus> via the _callback parameter.
        //
        // If your _callback requires context it should be bound to that context via .bind()
        this.RequestServiceStatus = (_callback) => {
            if (_callback === null) {
                console.error('Request for service status failed. This is due to a missing callback');
                return;
            }
            const guid = (0, uuid_1.v4)();
            const request = new TouchFreeServiceTypes_1.ServiceStatusRequest(guid);
            const wrapper = new TouchFreeServiceTypes_1.CommunicationWrapper(TouchFreeServiceTypes_1.ActionCode.REQUEST_SERVICE_STATUS, request);
            const message = JSON.stringify(wrapper);
            ConnectionManager_1.ConnectionManager.messageReceiver.serviceStatusCallbacks[guid] = new TouchFreeServiceTypes_1.ServiceStatusCallback(Date.now(), _callback);
            this.webSocket.send(message);
        };
        // Function: RequestConfigFile
        // Used internally to request information from the Service via the <webSocket>.
        // Provides an asynchronous <ConfigState> via the _callback parameter.
        //
        // If your _callback requires context it should be bound to that context via .bind()
        this.RequestConfigFile = (_callback) => {
            if (_callback === null) {
                console.error('Request for config file failed. This is due to a missing callback');
                return;
            }
            const guid = (0, uuid_1.v4)();
            const request = new TouchFreeServiceTypes_1.ConfigChangeRequest(guid);
            const wrapper = new TouchFreeServiceTypes_1.CommunicationWrapper(TouchFreeServiceTypes_1.ActionCode.REQUEST_CONFIGURATION_FILE, request);
            const message = JSON.stringify(wrapper);
            ConnectionManager_1.ConnectionManager.messageReceiver.configStateCallbacks[guid] = new TouchFreeServiceTypes_1.ConfigStateCallback(Date.now(), _callback);
            this.webSocket.send(message);
        };
        // Function: QuickSetupRequest
        // Used internally to pass information to the Service about performing a QuickSetup
        // via the <webSocket>.
        // Provides an asynchronous <WebSocketResponse> via the _callback parameter.
        // Provides an asynchronous <ConfigState> via the _configurationCallback parameter.
        //
        // If your _callback requires context it should be bound to that context via .bind()
        // If your _configurationCallback requires context it should be bound to that context via .bind()
        this.QuickSetupRequest = (atTopTarget, _callback, _configurationCallback) => {
            const position = atTopTarget ? 'Top' : 'Bottom';
            const guid = (0, uuid_1.v4)();
            const request = {
                requestID: guid,
                position,
            };
            const wrapper = new TouchFreeServiceTypes_1.CommunicationWrapper(TouchFreeServiceTypes_1.ActionCode.QUICK_SETUP, request);
            const message = JSON.stringify(wrapper);
            if (_callback !== null) {
                ConnectionManager_1.ConnectionManager.messageReceiver.responseCallbacks[guid] = new TouchFreeServiceTypes_1.ResponseCallback(Date.now(), _callback);
            }
            if (_configurationCallback !== null) {
                ConnectionManager_1.ConnectionManager.messageReceiver.configStateCallbacks[guid] = new TouchFreeServiceTypes_1.ConfigStateCallback(Date.now(), _configurationCallback);
            }
            this.webSocket.send(message);
        };
        // Function: RequestTrackingState
        // Used internally to request information from the Service via the <webSocket>.
        // Provides an asynchronous <TrackingStateResponse> via the _callback parameter.
        //
        // If your _callback requires context it should be bound to that context via .bind()
        this.RequestTrackingState = (_callback) => {
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
        };
        // Function: RequestTrackingChange
        // Used internally to update the configuration of the Tracking via the <webSocket>.
        // Provides an asynchronous <TrackingStateResponse> via the _callback parameter.
        //
        // If your _callback requires context it should be bound to that context via .bind()
        this.RequestTrackingChange = (_state, _callback) => {
            const requestID = (0, uuid_1.v4)();
            const requestContent = {
                requestID,
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
        };
        this.webSocket = new WebSocket(`ws://${_ip}:${_port}/connect`);
        this.webSocket.binaryType = 'arraybuffer';
        this.webSocket.addEventListener('message', this.OnMessage);
        this.handshakeRequested = false;
        this.handshakeCompleted = false;
        this.webSocket.addEventListener('open', this.RequestHandshake, { once: true });
    }
}
exports.ServiceConnection = ServiceConnection;
var ServiceBinaryDataTypes;
(function (ServiceBinaryDataTypes) {
    ServiceBinaryDataTypes[ServiceBinaryDataTypes["HandRenderData"] = 1] = "HandRenderData";
})(ServiceBinaryDataTypes || (ServiceBinaryDataTypes = {}));


/***/ }),

/***/ 5:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TrackingStateCallback = exports.SimpleRequest = exports.TrackingStateRequest = exports.CommunicationWrapper = exports.ResponseCallback = exports.VersionHandshakeResponse = exports.WebSocketResponse = exports.ServiceStatusCallback = exports.ServiceStatusRequest = exports.ServiceStatus = exports.ConfigStateCallback = exports.HandRenderDataStateRequest = exports.ConfigChangeRequest = exports.ConfigState = exports.PartialConfigState = exports.TouchFreeRequest = exports.TouchFreeRequestCallback = exports.HandPresenceEvent = exports.Compatibility = exports.InteractionZoneState = exports.HandPresenceState = exports.ActionCode = void 0;
// Enum: ActionCode
// INPUT_ACTION - Represents standard interaction data
// CONFIGURATION_STATE - Represents a collection of configurations from the Service
// CONFIGURATION_RESPONSE - Represents a Success/Failure response from a SET_CONFIGURATION_STATE
// SET_CONFIGURATION_STATE - Represents a request to set new configuration files on the Service
// REQUEST_CONFIGURATION_STATE - Represents a request to receive a current CONFIGURATION_STATE from the Service
// VERSION_HANDSHAKE - Represents an outgoing message from Tooling to Service,
//                     attempting to compare API versions for compatibility
// HAND_PRESENCE_EVENT - Represents the result coming in from the Service
// REQUEST_SERVICE_STATUS - Represents a request to receive a current SERVICE_STATUS from the Service
// SERVICE_STATUS_RESPONSE - Represents a Failure response from a REQUEST_SERVICE_STATUS
// SERVICE_STATUS - Represents information about the current state of the Service
// QUICK_SETUP - Represents a request for performing a quick setup of the Service
// QUICK_SETUP_CONFIG - Represents a response from the Service after a QUICK_SETUP request
//                      where the configuration was updated as the quick setup was successfully completed.
// QUICK_SETUP_RESPONSE - Represents a response from the Service after a QUICK_SETUP request
//                        where the configuration was not updated.
// GET_TRACKING_STATE - Represents a request to receive the current state of the tracking settings
// SET_TRACKING_STATE - Represents a request to set the current state of the tracking settings
// TRACKING_STATE - Represents a response from the Service with the current state of the tracking settings,
//                  received following either a GET_TRACKING_STATE or a SET_TRACKING_STATE
// HAND_DATA - Represents more complete hand data sent from the service.
// SET_HAND_DATA_STREAM_STATE - Represents a request to the Service to enable/disable
//                              the HAND_DATA stream or change the lens to have the hand position relative to.
// INTERACTION_ZONE_EVENT - Represents the interaction zone state received from the Service
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
    ActionCode["INTERACTION_ZONE_EVENT"] = "INTERACTION_ZONE_EVENT";
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
// Enum: InteractionZoneState
// HAND_ENTERED - Sent when the "active" hand enters the interaction zone
// HAND_EXITED - Sent when the "active" hand leaves the interaction zone
var InteractionZoneState;
(function (InteractionZoneState) {
    InteractionZoneState[InteractionZoneState["HAND_ENTERED"] = 0] = "HAND_ENTERED";
    InteractionZoneState[InteractionZoneState["HAND_EXITED"] = 1] = "HAND_EXITED";
})(InteractionZoneState = exports.InteractionZoneState || (exports.InteractionZoneState = {}));
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
    constructor(_id, _trackingServiceState, _configurationState, _serviceVersion, _trackingVersion, _cameraSerial, _cameraFirmwareVersion) {
        super(_id);
        this.trackingServiceState = _trackingServiceState;
        this.configurationState = _configurationState;
        this.serviceVersion = _serviceVersion;
        this.trackingVersion = _trackingVersion;
        this.cameraSerial = _cameraSerial;
        this.cameraFirmwareVersion = _cameraFirmwareVersion;
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
// Class: VersionHandshakeResponse
// The structure seen when the Service responds to a Version Handshake request.
class VersionHandshakeResponse extends WebSocketResponse {
    constructor(_id, _status, _msg, _request, _touchFreeVersion, _apiVersion) {
        super(_id, _status, _msg, _request);
        this.touchFreeVersion = _touchFreeVersion;
        this.apiVersion = _apiVersion;
    }
}
exports.VersionHandshakeResponse = VersionHandshakeResponse;
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
const ServiceConnection_1 = __webpack_require__(636);
const TouchFreeServiceTypes = __importStar(__webpack_require__(5));
module.exports = {
    ConnectionManager: ConnectionManager_1.ConnectionManager,
    MessageReceiver: MessageReceiver_1.MessageReceiver,
    TouchFreeServiceTypes: TouchFreeServiceTypes,
    ServiceConnection: ServiceConnection_1.ServiceConnection,
};


/***/ }),

/***/ 508:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DotCursor = void 0;
const TouchFree_1 = __importDefault(__webpack_require__(798));
const TouchFreeToolingTypes_1 = __webpack_require__(579);
const Utilities_1 = __webpack_require__(26);
const TouchlessCursor_1 = __webpack_require__(257);
// Class: DotCursor
// This is an example Touchless Cursor which positions a dot on the screen at the hand location,
// and reacts to the current ProgressToClick of the action (what determines this depends on the
// currently active interaction).
class DotCursor extends TouchlessCursor_1.TouchlessCursor {
    // Group: Functions
    // Function: constructor
    // Constructs a new cursor consisting of a central cursor and a ring.
    // Optionally provide an animationDuration to change the time it takes for the 'squeeze'
    // confirmation animation to be performed. Optionally provide a ringSizeMultiplier to change
    // the size that the <cursorRing> is relative to the cursor.
    //
    // If you intend to make use of the <WebInputController>, make sure that both cursor and
    // cursorRing have the "touchfree-cursor" class. This prevents them blocking other elements
    // from receiving events.
    constructor(cursor, cursorRing, animationDuration = 0.2, ringSizeMultiplier = 2) {
        super(cursor);
        // Set the update rate of the animation to 30fps.
        this.animationUpdateDuration = (1 / 30) * 1000;
        this.animationSpeed = [0, 0];
        this.currentAnimationInterval = -1;
        this.growQueued = false;
        this.currentFadingInterval = -1;
        this.dotCursorElement = cursor;
        this.cursorRing = cursorRing;
        this.ringSizeMultiplier = ringSizeMultiplier;
        this.cursorStartSize = this.GetDimensions(this.dotCursorElement);
        this.animationSpeed[0] = this.cursorStartSize[0] / 2 / (animationDuration * 30);
        this.animationSpeed[1] = this.cursorStartSize[1] / 2 / (animationDuration * 30);
        TouchFree_1.default.RegisterEventCallback('HandFound', this.ShowCursor.bind(this));
        TouchFree_1.default.RegisterEventCallback('HandsLost', this.HideCursor.bind(this));
        TouchFree_1.default.RegisterEventCallback('HandEntered', this.ShowCursor.bind(this));
        TouchFree_1.default.RegisterEventCallback('HandExited', this.HideCursor.bind(this));
    }
    // Function: UpdateCursor
    // Used to update the cursor when recieving a "MOVE" <ClientInputAction>. Updates the
    // cursor's position, as well as the size of the ring based on the current ProgressToClick.
    UpdateCursor(inputAction) {
        if (!this.enabled)
            return;
        //progressToClick is between 0 and 1. Click triggered at progressToClick = 1
        const ringScaler = (0, Utilities_1.MapRangeToRange)(inputAction.ProgressToClick, 0, 1, this.ringSizeMultiplier, 1);
        this.cursorRing.style.opacity = inputAction.ProgressToClick.toString();
        const [cursorWidth, cursorHeight] = this.GetDimensions(this.dotCursorElement);
        this.cursorRing.style.width = cursorWidth * ringScaler + 'px';
        this.cursorRing.style.height = cursorHeight * ringScaler + 'px';
        const [cursorRingWidth, cursorRingHeight] = this.GetDimensions(this.cursorRing);
        this.cursorRing.style.left = inputAction.CursorPosition[0] - cursorRingWidth / 2 + 'px';
        this.cursorRing.style.top = inputAction.CursorPosition[1] - cursorRingHeight / 2 + 'px';
        super.UpdateCursor(inputAction);
    }
    // Function: HandleInputAction
    // This override replaces the basic functionality of the <TouchlessCursor>, making the
    // cursor's ring scale dynamically with the current ProgressToClick and creating a
    // "shrink" animation when a "DOWN" event is received, and a "grow" animation when an "UP"
    // is received.
    //
    // When a "CANCEL" event is received, the cursor is hidden as it suggests the hand has been lost.
    // When any other event is received and the cursor is hidden, the cursor is shown again.
    HandleInputAction(inputData) {
        switch (inputData.InputType) {
            case TouchFreeToolingTypes_1.InputType.MOVE:
                this.UpdateCursor(inputData);
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
        let [newWidth, newHeight] = this.GetDimensions(this.dotCursorElement);
        if (newWidth > this.cursorStartSize[0] / 2) {
            newWidth -= this.animationSpeed[0];
        }
        if (newHeight > this.cursorStartSize[1] / 2) {
            newHeight -= this.animationSpeed[1];
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
        let [newWidth, newHeight] = this.GetDimensions(this.dotCursorElement);
        if (newWidth < this.cursorStartSize[0]) {
            newWidth += this.animationSpeed[0];
        }
        if (newHeight < this.cursorStartSize[1]) {
            newHeight += this.animationSpeed[1];
        }
        this.SetCursorSize(newWidth, newHeight, this.dotCursorElement);
        if (newWidth >= this.cursorStartSize[0] && newHeight >= this.cursorStartSize[1]) {
            clearInterval(this.currentAnimationInterval);
            this.SetCursorSize(this.cursorStartSize[0], this.cursorStartSize[1], this.dotCursorElement);
            this.currentAnimationInterval = -1;
            this.growQueued = false;
        }
    }
    SetCursorSize(newWidth, newHeight, cursorToChange) {
        const [width, height] = this.GetDimensions(cursorToChange);
        const deltaX = Math.round((width - newWidth) * 5) / 10;
        const deltaY = Math.round((height - newHeight) * 5) / 10;
        const cursorPosX = cursorToChange.offsetLeft + deltaX;
        const cursorPosY = cursorToChange.offsetTop + deltaY;
        cursorToChange.style.width = newWidth + 'px';
        cursorToChange.style.left = cursorPosX + 'px';
        cursorToChange.style.height = newHeight + 'px';
        cursorToChange.style.top = cursorPosY + 'px';
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
            this.dotCursorElement.style.opacity = '1.0';
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
            this.dotCursorElement.style.opacity = '0.0';
            this.currentFadingInterval = -1;
        }
    }
}
exports.DotCursor = DotCursor;


/***/ }),

/***/ 429:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SVGCursor = void 0;
const TouchFree_1 = __importDefault(__webpack_require__(798));
const TouchFreeToolingTypes_1 = __webpack_require__(579);
const Utilities_1 = __webpack_require__(26);
const TouchlessCursor_1 = __webpack_require__(257);
class SVGCursor extends TouchlessCursor_1.TouchlessCursor {
    // Group: Functions
    // Function: constructor
    // Constructs a new cursor consisting of a central cursor and a ring.
    // Optionally provide a ringSizeMultiplier to change the size that the <cursorRing> is relative to the _cursor.
    // Optionally provide a darkCursor to change the cursor to be dark to provide better contrast on light colored
    // UIs.
    constructor(ringSizeMultiplier = 2, darkCursor = false) {
        super(undefined);
        this.xPositionAttribute = 'cx';
        this.yPositionAttribute = 'cy';
        this.isDarkCursor = false;
        this.cursorShowing = false;
        this.isDarkCursor = darkCursor;
        const documentBody = document.querySelector('body');
        const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgElement.classList.add('touchfree-cursor');
        svgElement.style.opacity = '0';
        svgElement.style.position = 'fixed';
        svgElement.style.top = '0px';
        svgElement.style.left = '0px';
        svgElement.style.zIndex = '1000';
        svgElement.style.pointerEvents = 'none';
        svgElement.style.transition = 'opacity 0.5s linear';
        svgElement.setAttribute('width', '100%');
        svgElement.setAttribute('height', '100%');
        svgElement.setAttribute('shape-rendering', 'optimizeSpeed');
        svgElement.id = 'svg-cursor';
        documentBody === null || documentBody === void 0 ? void 0 : documentBody.appendChild(svgElement);
        const svgRingElement = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        svgRingElement.classList.add('touchfree-cursor');
        svgRingElement.setAttribute('r', '15');
        svgRingElement.setAttribute('fill-opacity', '0');
        svgRingElement.setAttribute('stroke-width', '5');
        svgRingElement.setAttribute(this.xPositionAttribute, '100');
        svgRingElement.setAttribute(this.yPositionAttribute, '100');
        svgRingElement.style.filter = 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.7))';
        svgElement.appendChild(svgRingElement);
        svgRingElement.id = 'svg-cursor-ring';
        this.cursorRing = svgRingElement;
        const svgDotElement = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        svgDotElement.classList.add('touchfree-cursor');
        svgDotElement.setAttribute('r', '15');
        svgDotElement.setAttribute(this.xPositionAttribute, '100');
        svgDotElement.setAttribute(this.yPositionAttribute, '100');
        svgDotElement.setAttribute('opacity', '1');
        svgDotElement.style.transformBox = 'fill-box';
        svgDotElement.style.transformOrigin = 'center';
        svgDotElement.style.transform = 'scale(1)';
        svgDotElement.style.filter = 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.7))';
        svgDotElement.id = 'svg-cursor-dot';
        svgElement.appendChild(svgDotElement);
        if (!darkCursor) {
            if (this.cursorRing) {
                this.cursorRing.style.filter = 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.7))';
            }
            svgDotElement.style.filter = 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.7))';
        }
        this.cursor = svgDotElement;
        this.cursorCanvas = svgElement;
        this.ResetToDefaultColors();
        this.ringSizeMultiplier = ringSizeMultiplier;
        TouchFree_1.default.RegisterEventCallback('HandFound', this.ShowCursor.bind(this));
        TouchFree_1.default.RegisterEventCallback('HandsLost', this.HideCursor.bind(this));
        TouchFree_1.default.RegisterEventCallback('HandEntered', this.ShowCursor.bind(this));
        TouchFree_1.default.RegisterEventCallback('HandExited', this.HideCursor.bind(this));
    }
    // Function: UpdateCursor
    // Used to update the cursor when receiving a "MOVE" <ClientInputAction>. Updates the
    // cursor's position, as well as the size of the ring based on the current ProgressToClick.
    UpdateCursor(inputAction) {
        if (!this.shouldShow) {
            this.HideCursor();
            return;
        }
        const ringScaler = (0, Utilities_1.MapRangeToRange)(inputAction.ProgressToClick, 0, 1, this.ringSizeMultiplier, 1);
        this.cursorRing.setAttribute('opacity', inputAction.ProgressToClick.toString());
        this.cursorRing.setAttribute('r', Math.round(this.GetCurrentCursorRadius() * ringScaler).toString());
        let position = inputAction.CursorPosition;
        if (position) {
            position = [Math.round(position[0]), Math.round(position[1])];
            if (!this.cursorShowing && this.enabled) {
                this.ShowCursor();
            }
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
    HandleInputAction(inputData) {
        if (this.cursor) {
            switch (inputData.InputType) {
                case TouchFreeToolingTypes_1.InputType.MOVE:
                    this.UpdateCursor(inputData);
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
    SetCursorSize(newWidth, cursorToChange) {
        cursorToChange === null || cursorToChange === void 0 ? void 0 : cursorToChange.setAttribute('r', Math.round(newWidth).toString());
    }
    // Function: ShowCursor
    // Used to make the cursor visible, fades over time
    ShowCursor() {
        this.shouldShow = true;
        if (this.enabled && !this.cursorShowing) {
            this.cursorShowing = true;
            this.SetCursorOpacity(this.opacityOnHandsLost);
        }
    }
    // Function: HideCursor
    // Used to make the cursor invisible, fades over time
    HideCursor() {
        if (this.shouldShow) {
            // If opacity is NaN or 0 then set it to be 1
            this.opacityOnHandsLost = Number(this.cursorCanvas.style.opacity) || 1;
        }
        this.shouldShow = false;
        this.cursorShowing = false;
        this.SetCursorOpacity(0);
        if (this.cursor) {
            this.cursor.style.transform = 'scale(1)';
        }
    }
    // Function: SetCursorOpacity
    // Used to set the opacity of the cursor
    SetCursorOpacity(opacity) {
        this.cursorCanvas.style.opacity = opacity.toString();
    }
    GetCurrentCursorRadius() {
        if (this.cursor) {
            const radius = this.cursor.getAttribute('r');
            if (!radius) {
                return 0;
            }
            const radiusAsNumber = parseFloat(radius);
            return radiusAsNumber;
        }
        return 0;
    }
    // Function: SetDefaultColors
    // Used to reset the SVGCursor to it's default styling
    ResetToDefaultColors() {
        var _a, _b, _c;
        (_a = this.cursor) === null || _a === void 0 ? void 0 : _a.setAttribute('fill', this.isDarkCursor ? 'black' : 'white');
        (_b = this.cursor) === null || _b === void 0 ? void 0 : _b.removeAttribute('stroke-width');
        (_c = this.cursor) === null || _c === void 0 ? void 0 : _c.removeAttribute('stroke');
        this.cursorRing.setAttribute('stroke', this.isDarkCursor ? 'black' : 'white');
    }
    // Function: SetColor
    // Used to set a part of the SVGCursor to a specific color
    // Takes a CursorPart enum to select which part of the cursor to color and a color represented by a string
    SetColor(cursorPart, color) {
        var _a, _b, _c;
        switch (cursorPart) {
            case 0 /* CursorPart.CENTER_FILL */:
                (_a = this.cursor) === null || _a === void 0 ? void 0 : _a.setAttribute('fill', color);
                return;
            case 1 /* CursorPart.RING_FILL */:
                this.cursorRing.setAttribute('stroke', color);
                return;
            case 2 /* CursorPart.CENTER_BORDER */:
                (_b = this.cursor) === null || _b === void 0 ? void 0 : _b.setAttribute('stroke', color);
                (_c = this.cursor) === null || _c === void 0 ? void 0 : _c.setAttribute('stroke-width', '2');
                return;
        }
    }
}
exports.SVGCursor = SVGCursor;


/***/ }),

/***/ 257:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TouchlessCursor = void 0;
const TouchFree_1 = __importDefault(__webpack_require__(798));
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
        // Variable: opacityOnHandsLost
        // The opacity of the cursor when hands are lost
        this.opacityOnHandsLost = 1;
        TouchFree_1.default.RegisterEventCallback('TransmitInputAction', this.HandleInputAction.bind(this));
        this.cursor = _cursor;
        this.enabled = true;
        this.shouldShow = true;
    }
    // Function: UpdateCursor
    // Sets the position of the cursor, should be run after <HandleInputAction>.
    UpdateCursor(_inputAction) {
        if (this.cursor) {
            let width = this.cursor.clientWidth;
            let height = this.cursor.clientHeight;
            if (this.cursor instanceof HTMLElement) {
                [width, height] = this.GetDimensions(this.cursor);
            }
            this.cursor.style.left = _inputAction.CursorPosition[0] - width / 2 + 'px';
            this.cursor.style.top = _inputAction.CursorPosition[1] - height / 2 + 'px';
        }
    }
    GetDimensions(cursor) {
        if (cursor.style.width && cursor.style.height) {
            const getFloat = (dimension) => parseFloat(dimension.replace('px', ''));
            return [getFloat(cursor.style.width), getFloat(cursor.style.height)];
        }
        const newCursor = cursor;
        return [newCursor.width, newCursor.height];
    }
    // Function: HandleInputAction
    // The core of the logic for Cursors, this is invoked with each <TouchFreeInputAction> as
    // they are received. Override this function to implement cursor behaviour in response.
    //
    // Parameters:
    //    _inputAction - The latest input action received from TouchFree Service.
    HandleInputAction(_inputAction) {
        this.UpdateCursor(_inputAction);
    }
    // Function: ShowCursor
    // Used to make the cursor visible
    ShowCursor() {
        this.shouldShow = true;
        if (this.enabled) {
            this.SetCursorOpacity(this.opacityOnHandsLost);
        }
    }
    // Function: HideCursor
    // Used to make the cursor invisible
    HideCursor() {
        var _a;
        if (this.shouldShow) {
            // If opacity is NaN or 0 then set it to be 1
            this.opacityOnHandsLost = Number((_a = this.cursor) === null || _a === void 0 ? void 0 : _a.style.opacity) || 1;
        }
        this.shouldShow = false;
        this.SetCursorOpacity(0);
    }
    // Function: EnableCursor
    // Used to enable the cursor so that it will show if hands are present
    EnableCursor() {
        this.enabled = true;
        if (this.shouldShow) {
            this.opacityOnHandsLost = 1;
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
    // Function: SetCursorOpacity
    // Used to set the opacity of the cursor
    SetCursorOpacity(opacity) {
        if (this.cursor) {
            this.cursor.style.opacity = opacity.toString();
        }
    }
}
exports.TouchlessCursor = TouchlessCursor;


/***/ }),

/***/ 741:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const DotCursor_1 = __webpack_require__(508);
const SvgCursor_1 = __webpack_require__(429);
const TouchlessCursor_1 = __webpack_require__(257);
module.exports = {
    TouchlessCursor: TouchlessCursor_1.TouchlessCursor,
    DotCursor: DotCursor_1.DotCursor,
    SVGCursor: SvgCursor_1.SVGCursor,
};


/***/ }),

/***/ 529:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseInputController = void 0;
const TouchFree_1 = __importDefault(__webpack_require__(798));
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
            this.HandleInputActionCallback = TouchFree_1.default.RegisterEventCallback('TransmitInputAction', this.HandleInputAction.bind(this));
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
    //     _inputData - The latest input action received from TouchFree Service.
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
        var _a;
        (_a = this.HandleInputActionCallback) === null || _a === void 0 ? void 0 : _a.UnregisterEventCallback();
        BaseInputController.Instantiated = false;
    }
}
exports.BaseInputController = BaseInputController;
// Group: MonoBehaviour Overrides
BaseInputController.Instantiated = false;


/***/ }),

/***/ 52:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebInputController = void 0;
const TouchFree_1 = __importDefault(__webpack_require__(798));
const TouchFreeToolingTypes_1 = __webpack_require__(579);
const BaseInputController_1 = __webpack_require__(529);
// Class: WebInputController
// Provides web PointerEvents based on the incoming data from TouchFree Service via a
// <ServiceConnection>.
//
// If you are using cursors with this InputController, ensure they have the "touchfree-cursor"
// class. This allows this class to ignore them when determining which elements should receive
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
        this.scrollElementsOnDown = null;
        this.lastPosition = null;
        this.scrollDirection = undefined;
        this.elementToScroll = undefined;
        // Constant: noScrollClassName
        // Any element with this class name in its css class list will be ignored when trying to find
        // the correct element for the WebInputController to scroll
        this.noScrollClassName = 'touchfree-no-scroll';
        // Gets the element that should have scrolling applied to it.
        // Any elements with the class name listed as noScrollClassName applied will be ignored when
        // finding which element to scroll
        this.GetElementToScroll = (scrollValidation, parentScrollValidation) => {
            if (this.elementToScroll)
                return this.elementToScroll;
            if (!this.scrollElementsOnDown)
                return;
            for (let i = 0; i < this.scrollElementsOnDown.length; i++) {
                let elementToCheckScroll = this.scrollElementsOnDown[i];
                if (!scrollValidation(elementToCheckScroll))
                    continue;
                let parentSelected = false;
                let parentAsHtmlElement = elementToCheckScroll.parentElement;
                while (parentAsHtmlElement) {
                    const parentIsNoScroll = parentAsHtmlElement.classList.contains(this.noScrollClassName);
                    const elementIsNoScroll = elementToCheckScroll.classList.contains(this.noScrollClassName);
                    const parentScrollValid = parentScrollValidation(elementToCheckScroll, parentAsHtmlElement);
                    if (!parentIsNoScroll && !elementIsNoScroll && !parentScrollValid) {
                        break;
                    }
                    if (parentIsNoScroll) {
                        parentAsHtmlElement = parentAsHtmlElement.parentElement;
                    }
                    else {
                        parentSelected = true;
                        elementToCheckScroll = parentAsHtmlElement;
                        parentAsHtmlElement = elementToCheckScroll.parentElement;
                    }
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
            pointerType: 'pen',
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
                const outEvent = new PointerEvent('pointerout', this.activeEventProps);
                this.lastHoveredElement.dispatchEvent(outEvent);
            }
            if (_element !== null) {
                const overEvent = new PointerEvent('pointerover', this.activeEventProps);
                _element.dispatchEvent(overEvent);
            }
            if (this.enterLeaveEnabled) {
                this.HandleEnterLeaveBehaviour(_element);
            }
        }
        const moveEvent = new PointerEvent('pointermove', this.activeEventProps);
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
        var _a;
        super.HandleInputAction(_inputData);
        const elementsAtPoint = document.elementsFromPoint(_inputData.CursorPosition[0], _inputData.CursorPosition[1]);
        const elementAtPos = this.GetTopNonCursorElement(elementsAtPoint);
        this.activeEventProps.clientX = _inputData.CursorPosition[0];
        this.activeEventProps.clientY = _inputData.CursorPosition[1];
        if (elementAtPos !== null) {
            TouchFree_1.default.DispatchEvent('InputAction', _inputData);
        }
        switch (_inputData.InputType) {
            case TouchFreeToolingTypes_1.InputType.CANCEL: {
                this.ResetScrollData();
                const cancelEvent = new PointerEvent('pointercancel', this.activeEventProps);
                const outEvent = new PointerEvent('pointerout', this.activeEventProps);
                if (this.lastHoveredElement !== null && this.lastHoveredElement !== elementAtPos) {
                    this.lastHoveredElement.dispatchEvent(cancelEvent);
                    this.lastHoveredElement.dispatchEvent(outEvent);
                }
                const elementOnDown = this.GetTopNonCursorElement(this.elementsOnDown);
                if (elementOnDown) {
                    elementOnDown.dispatchEvent(cancelEvent);
                    elementOnDown.dispatchEvent(outEvent);
                }
                if (elementAtPos !== null) {
                    const parentTree = this.GetOrderedParents(elementAtPos);
                    parentTree.forEach((parent) => {
                        if (parent !== null) {
                            parent.dispatchEvent(cancelEvent);
                            parent.dispatchEvent(outEvent);
                        }
                    });
                }
                break;
            }
            case TouchFreeToolingTypes_1.InputType.MOVE:
                this.HandleMove(elementAtPos);
                this.HandleScroll(_inputData.CursorPosition);
                break;
            case TouchFreeToolingTypes_1.InputType.DOWN: {
                this.ResetScrollData();
                this.elementsOnDown = this.clickableElementsAtPosition(elementsAtPoint);
                this.scrollElementsOnDown = this.elementsOnDown.filter((e) => !e.classList.contains(this.noScrollClassName));
                this.lastPosition = _inputData.CursorPosition;
                const downEvent = new PointerEvent('pointerdown', this.activeEventProps);
                this.DispatchToTarget(downEvent, elementAtPos);
                break;
            }
            case TouchFreeToolingTypes_1.InputType.UP: {
                const elementsOnUp = this.clickableElementsAtPosition(elementsAtPoint);
                if ((elementsOnUp === null || elementsOnUp === void 0 ? void 0 : elementsOnUp.length) && ((_a = this.elementsOnDown) === null || _a === void 0 ? void 0 : _a.length)) {
                    for (const element of elementsOnUp) {
                        const matchingElement = this.elementsOnDown.find((eod) => eod == element);
                        if (matchingElement) {
                            matchingElement.click();
                            break;
                        }
                    }
                }
                this.ResetScrollData();
                const upEvent = new PointerEvent('pointerup', this.activeEventProps);
                this.DispatchToTarget(upEvent, elementAtPos);
                break;
            }
        }
    }
    clickableElementsAtPosition(elements) {
        return (elements !== null && elements !== void 0 ? elements : [])
            .map((e) => e)
            .filter((e) => e && !e.classList.contains('touchfreecursor') && !e.classList.contains('touchfree-cursor'));
    }
    // Clears information about the current scroll
    ResetScrollData() {
        this.scrollElementsOnDown = null;
        this.scrollDirection = undefined;
        this.elementToScroll = undefined;
    }
    // Applies scrolling to any elements that should be scrolled
    HandleScroll(_position) {
        if (this.scrollElementsOnDown && this.lastPosition) {
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
            if (changeInPositionY > 0 &&
                (this.scrollDirection === undefined || this.scrollDirection === ScrollDirection.Down)) {
                const element = this.GetElementToScroll((e) => e.scrollHeight > e.clientHeight && e.scrollTop + e.clientHeight < e.scrollHeight - 1, (e, p) => e.offsetHeight === p.offsetHeight && e.scrollHeight === p.scrollHeight);
                if (element) {
                    this.elementToScroll = element;
                    element.scrollTop = Math.min(element.scrollHeight - element.clientHeight, element.scrollTop + changeInPositionY);
                }
            }
            if (changeInPositionY < 0 &&
                (this.scrollDirection === undefined || this.scrollDirection === ScrollDirection.Up)) {
                const element = this.GetElementToScroll((e) => e.scrollHeight > e.clientHeight && e.scrollTop > 0, (e, p) => e.offsetHeight === p.offsetHeight && e.scrollHeight === p.scrollHeight);
                if (element) {
                    this.elementToScroll = element;
                    element.scrollTop = Math.max(0, element.scrollTop + changeInPositionY);
                }
            }
            if (changeInPositionX > 0 &&
                (this.scrollDirection === undefined || this.scrollDirection === ScrollDirection.Right)) {
                const element = this.GetElementToScroll((e) => e.scrollWidth > e.clientWidth && e.scrollLeft + e.clientWidth < e.scrollWidth, (e, p) => e.offsetWidth === p.offsetWidth && e.scrollWidth === p.scrollWidth);
                if (element) {
                    this.elementToScroll = element;
                    element.scrollLeft = Math.min(element.scrollWidth - element.clientWidth, element.scrollLeft + changeInPositionX);
                }
            }
            if (changeInPositionX < 0 &&
                (this.scrollDirection === undefined || this.scrollDirection === ScrollDirection.Left)) {
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
    GetTopNonCursorElement(elementsAtPos) {
        let elementAtPos = null;
        if (elementsAtPos !== null) {
            for (let i = 0; i < elementsAtPos.length; i++) {
                if (!elementsAtPos[i].classList.contains('touchfreecursor') &&
                    !elementsAtPos[i].classList.contains('touchfree-cursor')) {
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
        const oldParents = this.GetOrderedParents(this.lastHoveredElement);
        const newParents = this.GetOrderedParents(_element);
        const highestCommonIndex = this.GetCommonAncestorIndex(oldParents, newParents);
        const leaveEvent = new PointerEvent('pointerleave', this.activeEventProps);
        const enterEvent = new PointerEvent('pointerenter', this.activeEventProps);
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
        const parentStack = [_node];
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

/***/ 275:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const BaseInputController_1 = __webpack_require__(529);
const WebInputController_1 = __webpack_require__(52);
module.exports = {
    BaseInputController: BaseInputController_1.BaseInputController,
    WebInputController: WebInputController_1.WebInputController,
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
        if (!HandDataManager.lastFrame ||
            HandDataManager.lastFrame + HandDataManager.maximumFrameFrequencyMs < currentTimeStamp) {
            const rawHandsEvent = new CustomEvent('TransmitHandData', {
                detail: _data,
            });
            HandDataManager.instance.dispatchEvent(rawHandsEvent);
            HandDataManager.lastFrame = currentTimeStamp;
        }
    }
}
exports.HandDataManager = HandDataManager;
HandDataManager.maximumFrameFrequencyMs = 50;
HandDataManager.lastFrame = undefined;


/***/ }),

/***/ 53:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InputActionManager = void 0;
const TouchFree_1 = __importDefault(__webpack_require__(798));
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
        TouchFree_1.default.DispatchEvent('TransmitInputActionRaw', _action);
        let action = _action;
        if (this.plugins !== null) {
            for (let i = 0; i < this.plugins.length; i++) {
                const modifiedAction = this.plugins[i].RunPlugin(action);
                if (modifiedAction !== null) {
                    action = modifiedAction;
                }
                else {
                    // The plugin has cancelled the InputAction entirely
                    return;
                }
            }
        }
        // Wrapping the function in a timeout of 0 seconds allows the dispatch to be asynchronous
        setTimeout(() => {
            TouchFree_1.default.DispatchEvent('TransmitInputAction', action);
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
        const modifiedInputAction = this.ModifyInputAction(_inputAction);
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
        const InputActionEvent = new CustomEvent('InputActionOutput', { detail: _inputAction });
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
    InputActionPlugin: InputActionPlugin_1.InputActionPlugin,
};


/***/ }),

/***/ 798:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const ConnectionManager_1 = __webpack_require__(597);
const SvgCursor_1 = __webpack_require__(429);
const WebInputController_1 = __webpack_require__(52);
const HandDataManager_1 = __webpack_require__(333);
const InputActionManager_1 = __webpack_require__(53);
let InputController;
let CurrentCursor;
const GetCurrentCursor = () => CurrentCursor;
const GetInputController = () => InputController;
// Function: Init
// Initializes TouchFree - must be called before any functionality requiring a TouchFree service connection.
const Init = (tfInitParams) => {
    var _a;
    ConnectionManager_1.ConnectionManager.init((_a = { address: tfInitParams === null || tfInitParams === void 0 ? void 0 : tfInitParams.address }) !== null && _a !== void 0 ? _a : undefined);
    ConnectionManager_1.ConnectionManager.AddConnectionListener(() => {
        InputController = new WebInputController_1.WebInputController();
        if (tfInitParams === undefined) {
            CurrentCursor = new SvgCursor_1.SVGCursor();
        }
        else {
            if (tfInitParams.initialiseCursor === undefined || tfInitParams.initialiseCursor === true) {
                CurrentCursor = new SvgCursor_1.SVGCursor();
            }
        }
    });
};
// Function: IsConnected
// Are we connected to the TouchFree service?
const IsConnected = () => ConnectionManager_1.ConnectionManager.IsConnected;
// Turns a callback with an argument into a CustomEvent<T> Event Listener
const MakeCustomEventWrapper = (callback) => {
    return ((evt) => {
        callback(evt.detail);
    });
};
// Default implementation of RegisterEvent
const DefaultRegisterEventFunc = (target, eventType, listener) => {
    target.addEventListener(eventType, listener);
    return { UnregisterEventCallback: () => target.removeEventListener(eventType, listener) };
};
// Backing field to cache object creation
let EventImplementationsBackingField;
// Implementation details for all events
// Any new events added to TouchFreeEvent require a new entry here to function
const EventImplementations = () => (EventImplementationsBackingField !== null && EventImplementationsBackingField !== void 0 ? EventImplementationsBackingField : (EventImplementationsBackingField = {
    OnConnected: {
        Target: ConnectionManager_1.ConnectionManager.instance,
        WithCallback: (callback) => ({
            Listener: callback,
            RegisterEventFunc: DefaultRegisterEventFunc,
        }),
    },
    WhenConnected: {
        Target: ConnectionManager_1.ConnectionManager.instance,
        WithCallback: (callback) => ({
            Listener: callback,
            RegisterEventFunc: (_target, _eventType, _listener) => {
                // If we're already connected then run the callback
                if (IsConnected()) {
                    callback();
                }
                // Piggyback OnConnected
                return RegisterEventCallback('OnConnected', callback);
            },
        }),
    },
    OnServiceStatusChange: {
        Target: ConnectionManager_1.ConnectionManager.instance,
        WithCallback: (callback) => ({
            Listener: MakeCustomEventWrapper(callback),
            RegisterEventFunc: DefaultRegisterEventFunc,
        }),
    },
    OnTrackingServiceStateChange: {
        Target: ConnectionManager_1.ConnectionManager.instance,
        WithCallback: (callback) => ({
            Listener: MakeCustomEventWrapper(callback),
            RegisterEventFunc: DefaultRegisterEventFunc,
        }),
    },
    HandFound: {
        Target: ConnectionManager_1.ConnectionManager.instance,
        WithCallback: (callback) => ({
            Listener: callback,
            RegisterEventFunc: DefaultRegisterEventFunc,
        }),
    },
    HandsLost: {
        Target: ConnectionManager_1.ConnectionManager.instance,
        WithCallback: (callback) => ({
            Listener: callback,
            RegisterEventFunc: DefaultRegisterEventFunc,
        }),
    },
    InputAction: {
        Target: InputActionManager_1.InputActionManager.instance,
        WithCallback: (callback) => ({
            Listener: MakeCustomEventWrapper(callback),
            RegisterEventFunc: DefaultRegisterEventFunc,
        }),
    },
    TransmitHandData: {
        Target: HandDataManager_1.HandDataManager.instance,
        WithCallback: (callback) => ({
            Listener: MakeCustomEventWrapper(callback),
            RegisterEventFunc: DefaultRegisterEventFunc,
        }),
    },
    TransmitInputAction: {
        Target: InputActionManager_1.InputActionManager.instance,
        WithCallback: (callback) => ({
            Listener: MakeCustomEventWrapper(callback),
            RegisterEventFunc: DefaultRegisterEventFunc,
        }),
    },
    TransmitInputActionRaw: {
        Target: InputActionManager_1.InputActionManager.instance,
        WithCallback: (callback) => ({
            Listener: MakeCustomEventWrapper(callback),
            RegisterEventFunc: DefaultRegisterEventFunc,
        }),
    },
    HandEntered: {
        Target: ConnectionManager_1.ConnectionManager.instance,
        WithCallback: (callback) => ({
            Listener: callback,
            RegisterEventFunc: DefaultRegisterEventFunc,
        }),
    },
    HandExited: {
        Target: ConnectionManager_1.ConnectionManager.instance,
        WithCallback: (callback) => ({
            Listener: callback,
            RegisterEventFunc: DefaultRegisterEventFunc,
        }),
    },
}));
// Function: RegisterEventCallback
// Registers a callback function to be called when a specific event occurs
// Returns an `EventHandle` that can be used to unregister the callback
//
// Events and expected callback signatures:
//
// OnConnected: () => void;
// Event dispatched when connecting to the TouchFree service
//
// WhenConnected: () => void;
// Same as OnConnected but calls callback when already connected.
// Note this event piggybacks as an "OnConnected" event on event targets.
//
// OnServiceStatusChanged: (state: ServiceStatus) => void;
// Event dispatched when TouchFree Service status changes.
//
// OnTrackingServiceStateChange: (state: TrackingServiceState) => void;
// Event dispatched when the connection between TouchFreeService and Ultraleap Tracking Service changes
//
// HandFound: () => void;
// Event dispatched when the first hand has started tracking
//
// HandsLost: () => void;
// Event dispatched when the last hand has stopped tracking
//
// TransmitHandData: (data: HandFrame) => void;
// Event dispatched when new hand data is available
//
// InputAction: (inputAction: TouchFreeInputAction) => void;
// Event dispatched when any input action is received from the TouchFree service
//
// TransmitInputActionRaw: (inputAction: TouchFreeInputAction) => void;
// Event dispatched directly from the <InputActionManager> without any proxying
//
// TransmitInputAction: (inputAction: TouchFreeInputAction) => void;
// Event dispatched from the <InputActionManager> to each registered Plugin
//
// HandEntered: () => void;
// Event dispatched when the active hand enters the interaction zone
//
// HandExited: () => void;
// Event dispatched when the the active hand exits the interaction zone
const RegisterEventCallback = (event, callback) => {
    const eventImpl = EventImplementations()[event];
    const target = eventImpl.Target;
    const callbackImpl = eventImpl.WithCallback(callback);
    const listener = callbackImpl.Listener;
    return callbackImpl.RegisterEventFunc(target, event, listener);
};
// Function: DispatchEvent
// Dispatches an event of the specific type with arguments if the event requires any.
// For details of events and their expected arguments see comment above RegisterEventCallback.
const DispatchEvent = (eventType, ...args) => {
    let event;
    if (args.length === 0) {
        event = new Event(eventType);
    }
    else {
        event = new CustomEvent(eventType, { detail: args[0] });
    }
    const target = EventImplementations()[eventType].Target;
    target.dispatchEvent(event);
};
// Bundle all our exports into a default object
// Benefit to this is IDE autocomplete for "TouchFree" will find this object
exports["default"] = {
    CurrentCursor,
    GetCurrentCursor,
    DispatchEvent,
    Init,
    InputController,
    GetInputController,
    IsConnected,
    RegisterEventCallback,
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
VersionInfo.ApiVersion = '1.4.0';
// Variable: API_HEADER_NAME
// The name of the header we wish the Service to compare our version with.
VersionInfo.API_HEADER_NAME = 'TfApiVersion';
// Class: TouchFreeInputAction
// A structure representing the Tooling version of an InputAction. This is used to pass
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
    const yPosition = window.innerHeight - _wsInput.CursorPosition.y / window.devicePixelRatio;
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
        const response = {};
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
    const oldRange = _oldMax - _oldMin;
    let newValue;
    if (oldRange === 0) {
        newValue = _newMin;
    }
    else {
        const newRange = _newMax - _newMin;
        newValue = ((_value - _oldMin) * newRange) / oldRange + _newMin;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Configuration = __importStar(__webpack_require__(490));
const Connection = __importStar(__webpack_require__(810));
const Cursors = __importStar(__webpack_require__(741));
const InputControllers = __importStar(__webpack_require__(275));
const Plugins = __importStar(__webpack_require__(447));
const TouchFree_1 = __importDefault(__webpack_require__(798));
const TouchFreeToolingTypes = __importStar(__webpack_require__(579));
const Tracking = __importStar(__webpack_require__(720));
module.exports = Object.assign(Object.assign({}, TouchFree_1.default), { Configuration: Configuration, Connection: Connection, Cursors: Cursors, InputControllers: InputControllers, Plugins: Plugins, TouchFreeToolingTypes: TouchFreeToolingTypes, Tracking: Tracking });


/***/ }),

/***/ 982:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "NIL", ({
  enumerable: true,
  get: function get() {
    return _nil.default;
  }
}));
Object.defineProperty(exports, "parse", ({
  enumerable: true,
  get: function get() {
    return _parse.default;
  }
}));
Object.defineProperty(exports, "stringify", ({
  enumerable: true,
  get: function get() {
    return _stringify.default;
  }
}));
Object.defineProperty(exports, "v1", ({
  enumerable: true,
  get: function get() {
    return _v.default;
  }
}));
Object.defineProperty(exports, "v3", ({
  enumerable: true,
  get: function get() {
    return _v2.default;
  }
}));
Object.defineProperty(exports, "v4", ({
  enumerable: true,
  get: function get() {
    return _v3.default;
  }
}));
Object.defineProperty(exports, "v5", ({
  enumerable: true,
  get: function get() {
    return _v4.default;
  }
}));
Object.defineProperty(exports, "validate", ({
  enumerable: true,
  get: function get() {
    return _validate.default;
  }
}));
Object.defineProperty(exports, "version", ({
  enumerable: true,
  get: function get() {
    return _version.default;
  }
}));

var _v = _interopRequireDefault(__webpack_require__(990));

var _v2 = _interopRequireDefault(__webpack_require__(237));

var _v3 = _interopRequireDefault(__webpack_require__(355));

var _v4 = _interopRequireDefault(__webpack_require__(764));

var _nil = _interopRequireDefault(__webpack_require__(314));

var _version = _interopRequireDefault(__webpack_require__(464));

var _validate = _interopRequireDefault(__webpack_require__(435));

var _stringify = _interopRequireDefault(__webpack_require__(8));

var _parse = _interopRequireDefault(__webpack_require__(222));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 163:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

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
    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (let i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  const output = [];
  const length32 = input.length * 32;
  const hexTab = '0123456789abcdef';

  for (let i = 0; i < length32; i += 8) {
    const x = input[i >> 5] >>> i % 32 & 0xff;
    const hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
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
  let a = 1732584193;
  let b = -271733879;
  let c = -1732584194;
  let d = 271733878;

  for (let i = 0; i < x.length; i += 16) {
    const olda = a;
    const oldb = b;
    const oldc = c;
    const oldd = d;
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

  const length8 = input.length * 8;
  const output = new Uint32Array(getOutputLength(length8));

  for (let i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  const lsw = (x & 0xffff) + (y & 0xffff);
  const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
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

var _default = md5;
exports["default"] = _default;

/***/ }),

/***/ 790:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var _default = {
  randomUUID
};
exports["default"] = _default;

/***/ }),

/***/ 314:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = '00000000-0000-0000-0000-000000000000';
exports["default"] = _default;

/***/ }),

/***/ 222:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _validate = _interopRequireDefault(__webpack_require__(435));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parse(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  let v;
  const arr = new Uint8Array(16); // Parse ########-....-....-....-............

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

var _default = parse;
exports["default"] = _default;

/***/ }),

/***/ 58:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
exports["default"] = _default;

/***/ }),

/***/ 319:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = rng;
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);

function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ 757:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

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
  const K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  const H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (let i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  const l = bytes.length / 4 + 2;
  const N = Math.ceil(l / 16);
  const M = new Array(N);

  for (let i = 0; i < N; ++i) {
    const arr = new Uint32Array(16);

    for (let j = 0; j < 16; ++j) {
      arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
    }

    M[i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (let i = 0; i < N; ++i) {
    const W = new Uint32Array(80);

    for (let t = 0; t < 16; ++t) {
      W[t] = M[i][t];
    }

    for (let t = 16; t < 80; ++t) {
      W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
    }

    let a = H[0];
    let b = H[1];
    let c = H[2];
    let d = H[3];
    let e = H[4];

    for (let t = 0; t < 80; ++t) {
      const s = Math.floor(t / 20);
      const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
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

var _default = sha1;
exports["default"] = _default;

/***/ }),

/***/ 8:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.unsafeStringify = unsafeStringify;

var _validate = _interopRequireDefault(__webpack_require__(435));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

var _default = stringify;
exports["default"] = _default;

/***/ }),

/***/ 990:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _rng = _interopRequireDefault(__webpack_require__(319));

var _stringify = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
let _nodeId;

let _clockseq; // Previous uuid creation time


let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  let i = buf && offset || 0;
  const b = buf || new Array(16);
  options = options || {};
  let node = options.node || _nodeId;
  let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || _rng.default)();

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


  let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

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

  const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (let n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || (0, _stringify.unsafeStringify)(b);
}

var _default = v1;
exports["default"] = _default;

/***/ }),

/***/ 237:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _v = _interopRequireDefault(__webpack_require__(925));

var _md = _interopRequireDefault(__webpack_require__(163));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v3 = (0, _v.default)('v3', 0x30, _md.default);
var _default = v3;
exports["default"] = _default;

/***/ }),

/***/ 925:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.URL = exports.DNS = void 0;
exports["default"] = v35;

var _stringify = __webpack_require__(8);

var _parse = _interopRequireDefault(__webpack_require__(222));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  const bytes = [];

  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
exports.DNS = DNS;
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
exports.URL = URL;

function v35(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    var _namespace;

    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = (0, _parse.default)(namespace);
    }

    if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return (0, _stringify.unsafeStringify)(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}

/***/ }),

/***/ 355:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _native = _interopRequireDefault(__webpack_require__(790));

var _rng = _interopRequireDefault(__webpack_require__(319));

var _stringify = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function v4(options, buf, offset) {
  if (_native.default.randomUUID && !buf && !options) {
    return _native.default.randomUUID();
  }

  options = options || {};

  const rnds = options.random || (options.rng || _rng.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`


  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0, _stringify.unsafeStringify)(rnds);
}

var _default = v4;
exports["default"] = _default;

/***/ }),

/***/ 764:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _v = _interopRequireDefault(__webpack_require__(925));

var _sha = _interopRequireDefault(__webpack_require__(757));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v5 = (0, _v.default)('v5', 0x50, _sha.default);
var _default = v5;
exports["default"] = _default;

/***/ }),

/***/ 435:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regex = _interopRequireDefault(__webpack_require__(58));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(uuid) {
  return typeof uuid === 'string' && _regex.default.test(uuid);
}

var _default = validate;
exports["default"] = _default;

/***/ }),

/***/ 464:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _validate = _interopRequireDefault(__webpack_require__(435));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function version(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.slice(14, 15), 16);
}

var _default = version;
exports["default"] = _default;

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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 		var chunkLoadingGlobal = self["webpackChunktouchfree"] = self["webpackChunktouchfree"] || [];
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