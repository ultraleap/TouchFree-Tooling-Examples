(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["touchfree"] = factory();
	else
		root["touchfree"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 4571:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.internal = void 0;
__exportStar(__webpack_require__(3607), exports);
exports.internal = __importStar(__webpack_require__(5004));


/***/ }),

/***/ 3607:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * @packageDocumentation
 * TouchFree is an ecosystem of software products for enabling
 * touchless interfaces. This package is a client package
 * for integrating TouchFree into web application.
 * See https://docs.ultraleap.com/touchfree-user-manual/
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dispatchEventCallback = exports.registerEventCallback = exports.mapRangeToRange = exports.InteractionType = exports.InputType = exports.HandType = exports.HandChirality = exports.init = exports.setCurrentCursor = exports.getCurrentCursor = exports.TouchlessCursor = exports.SVGCursor = exports.DotCursor = exports.InteractionZoneState = exports.HandPresenceState = exports.ConfigurationState = exports.TrackingServiceState = exports.requestServiceStatus = exports.getDefaultServiceAddress = exports.getCurrentServiceAddress = exports.disconnect = exports.connect = exports.isConnected = exports.TrackedPosition = exports.resetInteractionConfigFileToDefault = exports.requestConfigFileState = exports.requestConfigFileChange = exports.requestConfigState = exports.requestConfigChange = exports.stopAnalyticsSession = exports.startAnalyticsSession = exports.unregisterAnalyticEvents = exports.registerAnalyticEvents = exports.getRegisteredAnalyticEventKeys = exports.isAnalyticsActive = void 0;
/**
 * This file exports the public API surface of the library.
 * Internals should not be leaked from this export, if any
 * internals are required then explicit usage of the internal
 * module is recommended.
 */
var index_1 = __webpack_require__(5004);
/** Analytics - Record analytics data while running */
Object.defineProperty(exports, "isAnalyticsActive", ({ enumerable: true, get: function () { return index_1.isAnalyticsActive; } }));
Object.defineProperty(exports, "getRegisteredAnalyticEventKeys", ({ enumerable: true, get: function () { return index_1.getRegisteredAnalyticEventKeys; } }));
Object.defineProperty(exports, "registerAnalyticEvents", ({ enumerable: true, get: function () { return index_1.registerAnalyticEvents; } }));
Object.defineProperty(exports, "unregisterAnalyticEvents", ({ enumerable: true, get: function () { return index_1.unregisterAnalyticEvents; } }));
Object.defineProperty(exports, "startAnalyticsSession", ({ enumerable: true, get: function () { return index_1.startAnalyticsSession; } }));
Object.defineProperty(exports, "stopAnalyticsSession", ({ enumerable: true, get: function () { return index_1.stopAnalyticsSession; } }));
/** Configuration - Change configuration of the TouchFree Service */
Object.defineProperty(exports, "requestConfigChange", ({ enumerable: true, get: function () { return index_1.requestConfigChange; } }));
Object.defineProperty(exports, "requestConfigState", ({ enumerable: true, get: function () { return index_1.requestConfigState; } }));
Object.defineProperty(exports, "requestConfigFileChange", ({ enumerable: true, get: function () { return index_1.requestConfigFileChange; } }));
Object.defineProperty(exports, "requestConfigFileState", ({ enumerable: true, get: function () { return index_1.requestConfigFileState; } }));
Object.defineProperty(exports, "resetInteractionConfigFileToDefault", ({ enumerable: true, get: function () { return index_1.resetInteractionConfigFileToDefault; } }));
Object.defineProperty(exports, "TrackedPosition", ({ enumerable: true, get: function () { return index_1.TrackedPosition; } }));
/** Connection - Manage a connection to the TouchFree service and messages send or receive messages */
Object.defineProperty(exports, "isConnected", ({ enumerable: true, get: function () { return index_1.isConnected; } }));
Object.defineProperty(exports, "connect", ({ enumerable: true, get: function () { return index_1.connect; } }));
Object.defineProperty(exports, "disconnect", ({ enumerable: true, get: function () { return index_1.disconnect; } }));
Object.defineProperty(exports, "getCurrentServiceAddress", ({ enumerable: true, get: function () { return index_1.getCurrentServiceAddress; } }));
Object.defineProperty(exports, "getDefaultServiceAddress", ({ enumerable: true, get: function () { return index_1.getDefaultServiceAddress; } }));
Object.defineProperty(exports, "requestServiceStatus", ({ enumerable: true, get: function () { return index_1.requestServiceStatus; } }));
Object.defineProperty(exports, "TrackingServiceState", ({ enumerable: true, get: function () { return index_1.TrackingServiceState; } }));
Object.defineProperty(exports, "ConfigurationState", ({ enumerable: true, get: function () { return index_1.ConfigurationState; } }));
Object.defineProperty(exports, "HandPresenceState", ({ enumerable: true, get: function () { return index_1.HandPresenceState; } }));
Object.defineProperty(exports, "InteractionZoneState", ({ enumerable: true, get: function () { return index_1.InteractionZoneState; } }));
/** Cursors - Multiple cursor styles/implementations and current cursor management */
Object.defineProperty(exports, "DotCursor", ({ enumerable: true, get: function () { return index_1.DotCursor; } }));
Object.defineProperty(exports, "SVGCursor", ({ enumerable: true, get: function () { return index_1.SVGCursor; } }));
Object.defineProperty(exports, "TouchlessCursor", ({ enumerable: true, get: function () { return index_1.TouchlessCursor; } }));
Object.defineProperty(exports, "getCurrentCursor", ({ enumerable: true, get: function () { return index_1.getCurrentCursor; } }));
Object.defineProperty(exports, "setCurrentCursor", ({ enumerable: true, get: function () { return index_1.setCurrentCursor; } }));
Object.defineProperty(exports, "init", ({ enumerable: true, get: function () { return index_1.init; } }));
Object.defineProperty(exports, "HandChirality", ({ enumerable: true, get: function () { return index_1.HandChirality; } }));
Object.defineProperty(exports, "HandType", ({ enumerable: true, get: function () { return index_1.HandType; } }));
Object.defineProperty(exports, "InputType", ({ enumerable: true, get: function () { return index_1.InputType; } }));
Object.defineProperty(exports, "InteractionType", ({ enumerable: true, get: function () { return index_1.InteractionType; } }));
/** Math types and functions */
Object.defineProperty(exports, "mapRangeToRange", ({ enumerable: true, get: function () { return index_1.mapRangeToRange; } }));
Object.defineProperty(exports, "registerEventCallback", ({ enumerable: true, get: function () { return index_1.registerEventCallback; } }));
Object.defineProperty(exports, "dispatchEventCallback", ({ enumerable: true, get: function () { return index_1.dispatchEventCallback; } }));


/***/ }),

/***/ 605:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.stopAnalyticsSession = exports.startAnalyticsSession = exports.unregisterAnalyticEvents = exports.registerAnalyticEvents = exports.getRegisteredAnalyticEventKeys = exports.getAnalyticSessionEvents = exports.isAnalyticsActive = void 0;
const ConnectionApi_1 = __webpack_require__(2158);
const uuid_1 = __webpack_require__(7429);
let currentSessionId;
let analyticsHeartbeat;
let sessionEvents = {};
const analyticEvents = {};
const defaultAnalyticEvents = ['touchstart', 'touchmove', 'touchend'];
const isTFPointerEvent = (e) => 'pointerType' in e && e.pointerType === 'pen' && !e.isTrusted;
/**
 * @returns `true` if there is an active analytics session, `false` otherwise
 * @public
 */
const isAnalyticsActive = () => currentSessionId !== undefined;
exports.isAnalyticsActive = isAnalyticsActive;
/**
 * Returns a copy of an indexed object detailing how many times each analytics event has been triggered
 * @internal
 */
const getAnalyticSessionEvents = () => Object.assign({}, sessionEvents);
exports.getAnalyticSessionEvents = getAnalyticSessionEvents;
/**
 * Returns the list of registered analytic event keys
 * @public
 */
const getRegisteredAnalyticEventKeys = () => Object.keys(analyticEvents);
exports.getRegisteredAnalyticEventKeys = getRegisteredAnalyticEventKeys;
/**
 * Registers a given list of event for the TouchFree service to record.
 * @param eventsIn - Events to register. If none are provided then default set of events will be recorded.
 *
 * @public
 */
function registerAnalyticEvents(eventsIn = defaultAnalyticEvents) {
    eventsIn.forEach((evt) => {
        if (analyticEvents[evt])
            return;
        const onEvent = (e) => {
            if (isTFPointerEvent(e))
                return;
            const eventCount = sessionEvents[evt];
            sessionEvents[evt] = eventCount === undefined ? 1 : eventCount + 1;
        };
        analyticEvents[evt] = onEvent;
        document.addEventListener(evt, onEvent, true);
    });
}
exports.registerAnalyticEvents = registerAnalyticEvents;
/**
 * Unregisters a given list of event for the TouchFree service to record.
 * @param eventsIn - Events to unregister. If none are provided then all events will be unregistered.
 *
 * @public
 */
function unregisterAnalyticEvents(eventsIn) {
    const events = eventsIn !== null && eventsIn !== void 0 ? eventsIn : Object.keys(analyticEvents);
    events.forEach((evt) => {
        const evtFunc = analyticEvents[evt];
        if (evtFunc) {
            document.removeEventListener(evt, evtFunc, true);
            delete analyticEvents[evt];
        }
    });
}
exports.unregisterAnalyticEvents = unregisterAnalyticEvents;
/**
 * Used to start or stop an analytics session
 *
 * @param requestType - START or STOP session. See {@link AnalyticsSessionRequestType}
 * @param application - Name of application
 * @param callback - Optional callback to handle Service's response
 */
function controlAnalyticsSession(requestType, application, callback) {
    const serviceConnection = (0, ConnectionApi_1.getServiceConnection)();
    if (!serviceConnection)
        return;
    if (requestType === 'START') {
        if (currentSessionId) {
            console.warn(`Session: ${currentSessionId} already in progress`);
            return;
        }
        const newID = `${application}:${(0, uuid_1.v4)()}`;
        serviceConnection.analyticsSessionRequest(requestType, newID, (detail) => {
            if (detail.status !== 'Failure') {
                currentSessionId = newID;
                analyticsHeartbeat = window.setInterval(() => serviceConnection.updateAnalyticSessionEvents(newID, (0, exports.getAnalyticSessionEvents)()), 2000);
                callback === null || callback === void 0 ? void 0 : callback(detail);
            }
        });
        return;
    }
    if (requestType === 'STOP') {
        if (!currentSessionId) {
            console.warn('No active session');
            return;
        }
        const validSessionId = currentSessionId;
        clearInterval(analyticsHeartbeat);
        serviceConnection.updateAnalyticSessionEvents(validSessionId, (0, exports.getAnalyticSessionEvents)(), () => {
            // Clear session events
            sessionEvents = {};
            serviceConnection.analyticsSessionRequest(requestType, validSessionId, callback);
            currentSessionId = undefined;
        });
    }
}
/**
 * Used to stop an analytics session with an optional callback
 * @param applicationName - Name of application
 * @param options - See {@link StartAnalyticsSessionOptions}
 *
 * @public
 */
function startAnalyticsSession(applicationName, options) {
    if ((options === null || options === void 0 ? void 0 : options.stopCurrentSession) && currentSessionId) {
        controlAnalyticsSession('STOP', applicationName, (detail) => {
            var _a;
            controlAnalyticsSession('START', applicationName, options.callback);
            (_a = options.callback) === null || _a === void 0 ? void 0 : _a.call(options, detail);
        });
        return;
    }
    controlAnalyticsSession('START', applicationName, options === null || options === void 0 ? void 0 : options.callback);
}
exports.startAnalyticsSession = startAnalyticsSession;
/**
 * Used to stop an analytics session with an optional callback
 * @param applicationName - Name of application
 * @param options - See {@link StopAnalyticsSessionOptions}
 *
 * @public
 */
function stopAnalyticsSession(applicationName, options) {
    controlAnalyticsSession('STOP', applicationName, options === null || options === void 0 ? void 0 : options.callback);
}
exports.stopAnalyticsSession = stopAnalyticsSession;


/***/ }),

/***/ 3829:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 7764:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resetInteractionConfigFileToDefault = exports.requestConfigFileState = exports.requestConfigFileChange = exports.requestConfigState = exports.requestConfigChange = void 0;
const ActionCode_1 = __webpack_require__(6875);
const ConnectionApi_1 = __webpack_require__(2158);
const uuid_1 = __webpack_require__(7429);
/**
 * Send updated configuration to the TouchFree Service
 *
 * @remarks
 * WARNING! If a user changes ANY values via the TouchFree Service Settings UI,
 * all values set from the Tooling via this function will be discarded.
 * @param interaction - Optional interaction config modifications to send
 * @param physical - Optional physical config modifications to send
 * @param callback - Optional callback confirming a response from the service
 *
 * @public
 */
function requestConfigChange(interaction, physical, callback) {
    baseConfigChangeRequest(ActionCode_1.ActionCode.SET_CONFIGURATION_STATE, interaction, physical, callback);
}
exports.requestConfigChange = requestConfigChange;
/**
 * Request active configuration state of the TouchFree Service
 * @param callback - Callback with the requested {@link TouchFreeConfig}
 *
 * @public
 */
function requestConfigState(callback) {
    var _a;
    if (!callback) {
        console.error('Config state request failed. This call requires a callback.');
        return;
    }
    (_a = (0, ConnectionApi_1.getServiceConnection)()) === null || _a === void 0 ? void 0 : _a.requestConfigState(callback);
}
exports.requestConfigState = requestConfigState;
/**
 * Requests a modification to the configuration **files** used by the TouchFree Service.
 *
 * @remarks
 * WARNING! Any changes that have been made using {@link requestConfigChange}
 * by *any* connected client will be lost when changing these files.
 * The change will be applied **to the current config files directly**,
 * disregarding current active config state.
 * @param interaction - Optional interaction config modifications to send
 * @param physical - Optional physical config modifications to send
 * @param callback - Optional callback confirming a response from the service
 *
 * @public
 */
function requestConfigFileChange(interaction, physical, callback) {
    baseConfigChangeRequest(ActionCode_1.ActionCode.SET_CONFIGURATION_FILE, interaction, physical, callback);
}
exports.requestConfigFileChange = requestConfigFileChange;
/**
 * Request configuration state of the services config files.
 * @param callback - Callback with the requested {@link TouchFreeConfig}
 *
 * @public
 */
function requestConfigFileState(callback) {
    var _a;
    if (!callback) {
        console.error('Config file state request failed. This call requires a callback.');
        return;
    }
    (_a = (0, ConnectionApi_1.getServiceConnection)()) === null || _a === void 0 ? void 0 : _a.requestConfigFile(callback);
}
exports.requestConfigFileState = requestConfigFileState;
/**
 * Requests service to reset the interaction config file to it's default state
 *
 * @remarks
 * WARNING! Any changes that have been made using {@link requestConfigChange}
 * by *any* connected client will be lost when changing these files.
 * The change will be applied **to the current config files directly**,
 * disregarding current active config state.
 * @param callback - callback containing the new {@link TouchFreeConfig}
 *
 * @public
 */
function resetInteractionConfigFileToDefault(callback) {
    var _a;
    (_a = (0, ConnectionApi_1.getServiceConnection)()) === null || _a === void 0 ? void 0 : _a.resetInteractionConfigFile(callback);
}
exports.resetInteractionConfigFileToDefault = resetInteractionConfigFileToDefault;
function baseConfigChangeRequest(action, interaction, physical, callback) {
    var _a;
    const requestID = (0, uuid_1.v4)();
    const content = { requestID, interaction, physical };
    const request = { action, content };
    const jsonContent = JSON.stringify(request);
    (_a = (0, ConnectionApi_1.getServiceConnection)()) === null || _a === void 0 ? void 0 : _a.sendMessage(jsonContent, requestID, callback);
}


/***/ }),

/***/ 73:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TrackedPosition = void 0;
/**
 * Explicitly named tracked positions
 * @public
 */
var TrackedPosition;
(function (TrackedPosition) {
    /** Towards the screen from the proximal knuckle position of the index finger */
    TrackedPosition[TrackedPosition["INDEX_STABLE"] = 0] = "INDEX_STABLE";
    /** The index finger tip position */
    TrackedPosition[TrackedPosition["INDEX_TIP"] = 1] = "INDEX_TIP";
    /** The wrist position */
    TrackedPosition[TrackedPosition["WRIST"] = 2] = "WRIST";
    /** The nearest bone to the screen */
    TrackedPosition[TrackedPosition["NEAREST"] = 3] = "NEAREST";
})(TrackedPosition = exports.TrackedPosition || (exports.TrackedPosition = {}));


/***/ }),

/***/ 6875:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActionCode = void 0;
/**
 * Action codes for requests between TouchFree Service and this client
 * @internal
 */
var ActionCode;
(function (ActionCode) {
    /** Represents standard interaction data */
    ActionCode["INPUT_ACTION"] = "INPUT_ACTION";
    /**
     * General configuration request response code.
     * Can represent success or failure with an included error message
     */
    ActionCode["CONFIGURATION_RESPONSE"] = "CONFIGURATION_RESPONSE";
    /** Request current configuration state from the Service */
    ActionCode["REQUEST_CONFIGURATION_STATE"] = "REQUEST_CONFIGURATION_STATE";
    /** Response for a {@link REQUEST_CONFIGURATION_STATE} request */
    ActionCode["CONFIGURATION_STATE"] = "CONFIGURATION_STATE";
    /** Request change to configuration the Service */
    ActionCode["SET_CONFIGURATION_STATE"] = "SET_CONFIGURATION_STATE";
    /**
     * An outgoing message from Tooling to Service which
     * compares client and service API versions for compatibility
     */
    ActionCode["VERSION_HANDSHAKE"] = "VERSION_HANDSHAKE";
    /** Response code for a {@link VERSION_HANDSHAKE} */
    ActionCode["VERSION_HANDSHAKE_RESPONSE"] = "VERSION_HANDSHAKE_RESPONSE";
    /** Message with hand presence event data sent by the Service */
    ActionCode["HAND_PRESENCE_EVENT"] = "HAND_PRESENCE_EVENT";
    /** Represents a request to receive a current SERVICE_STATUS from the Service */
    ActionCode["REQUEST_SERVICE_STATUS"] = "REQUEST_SERVICE_STATUS";
    /** Failure response from a {@link REQUEST_SERVICE_STATUS} request */
    ActionCode["SERVICE_STATUS_RESPONSE"] = "SERVICE_STATUS_RESPONSE";
    /**
     * Message with information about the current state of the Service.
     *
     * @remarks
     * Can be a response to a {@link REQUEST_SERVICE_STATUS} request
     * or sent by the service when status changes
     */
    ActionCode["SERVICE_STATUS"] = "SERVICE_STATUS";
    /** Request the state of configuration *files* */
    ActionCode["REQUEST_CONFIGURATION_FILE"] = "REQUEST_CONFIGURATION_FILE";
    /** Response code for a {@link REQUEST_CONFIGURATION_FILE} request */
    ActionCode["CONFIGURATION_FILE_STATE"] = "CONFIGURATION_FILE_STATE";
    /** Request changes to configuration *files* */
    ActionCode["SET_CONFIGURATION_FILE"] = "SET_CONFIGURATION_FILE";
    /** Response code for a {@link SET_CONFIGURATION_FILE} request */
    ActionCode["CONFIGURATION_FILE_CHANGE_RESPONSE"] = "CONFIGURATION_FILE_CHANGE_RESPONSE";
    /**
     * Response code for a {@link SET_CONFIGURATION_FILE} request
     * @deprecated for {@link CONFIGURATION_FILE_CHANGE_RESPONSE}
     */
    ActionCode["CONFIGURATION_FILE_RESPONSE"] = "CONFIGURATION_FILE_RESPONSE";
    /** Represents a request for performing a quick setup of the Service */
    ActionCode["QUICK_SETUP"] = "QUICK_SETUP";
    /**
     * Represents a response from the Service after a {@link QUICK_SETUP} request
     * where the configuration was updated as the quick setup was successfully completed.
     */
    ActionCode["QUICK_SETUP_CONFIG"] = "QUICK_SETUP_CONFIG";
    /**
     * Represents a response from the Service after a {@link QUICK_SETUP} request
     * where the configuration was not updated.
     */
    ActionCode["QUICK_SETUP_RESPONSE"] = "QUICK_SETUP_RESPONSE";
    /** Represents a request to receive the current state of the tracking settings */
    ActionCode["GET_TRACKING_STATE"] = "GET_TRACKING_STATE";
    /** Represents a request to set the current state of the tracking settings */
    ActionCode["SET_TRACKING_STATE"] = "SET_TRACKING_STATE";
    /**
     * Represents a response from the Service with the current state of the tracking settings,
     * received following a {@link GET_TRACKING_STATE} or {@link SET_TRACKING_STATE} request
     */
    ActionCode["TRACKING_STATE"] = "TRACKING_STATE";
    /** Represents more complete hand data sent from the service. */
    ActionCode["HAND_DATA"] = "HAND_DATA";
    /**
     * Represents a request to the Service to enable/disable
     * the {@link HAND_DATA} stream or change the lens to have the hand position relative to.
     */
    ActionCode["SET_HAND_DATA_STREAM_STATE"] = "SET_HAND_DATA_STREAM_STATE";
    /**
     * Represents the interaction zone state received from the Service
     */
    ActionCode["INTERACTION_ZONE_EVENT"] = "INTERACTION_ZONE_EVENT";
    /**
     * Represents a request to reset the interaction config to it's default state
     */
    ActionCode["RESET_INTERACTION_CONFIG_FILE"] = "RESET_INTERACTION_CONFIG_FILE";
    /**
     * Represents a request to start or stop an analytics session
     */
    ActionCode["ANALYTICS_SESSION_REQUEST"] = "ANALYTICS_SESSION_REQUEST";
    /**
     * Represents a request to update the non-TF analytic events for the current session
     */
    ActionCode["ANALYTICS_UPDATE_SESSION_EVENTS_REQUEST"] = "ANALYTICS_UPDATE_SESSION_EVENTS_REQUEST";
})(ActionCode = exports.ActionCode || (exports.ActionCode = {}));


/***/ }),

/***/ 4841:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setClearCallbacksInterval = exports.createDefaultCallbackLists = void 0;
const createDefaultCallbackLists = () => ({
    analyticsRequestCallbacks: {},
    configStateCallbacks: {},
    handshakeCallbacks: {},
    responseCallbacks: {},
    serviceStatusCallbacks: {},
    trackingStateCallbacks: {},
});
exports.createDefaultCallbackLists = createDefaultCallbackLists;
const setClearCallbacksInterval = (timeoutMs, intervalDurationMs, callbackLists) => {
    const clearExpiredCallbacks = () => {
        const currentTime = Date.now();
        Object.values(callbackLists).forEach((callbacks) => {
            if (callbacks === undefined)
                return;
            for (const key in callbacks) {
                if (currentTime - callbacks[key].timestamp > timeoutMs) {
                    delete callbacks[key];
                }
                else {
                    break;
                }
            }
        });
    };
    setInterval(clearExpiredCallbacks, intervalDurationMs);
};
exports.setClearCallbacksInterval = setClearCallbacksInterval;


/***/ }),

/***/ 2158:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.requestServiceStatus = exports.disconnect = exports.connect = exports.getServiceConnection = exports.getCurrentServiceAddress = exports.getDefaultServiceAddress = exports.isConnected = void 0;
const RequestTypes_1 = __webpack_require__(1275);
const ServiceConnection_1 = __webpack_require__(8952);
/** The private reference to the currently managed `ServiceConnection`. */
let currentServiceConnection = null;
/** Default address to connect to the service websocket */
const defaultConnectionAddress = { ip: '127.0.0.1', port: '9739' };
/** The address that will be used to connect to the service websocket */
let currentConnectionAddress = defaultConnectionAddress;
/**
 * Are we connected to the TouchFree service?
 *
 * @returns Whether connected to TouchFree service or not.
 * @public
 */
function isConnected() {
    return (currentServiceConnection !== null &&
        currentServiceConnection.webSocket.readyState === WebSocket.OPEN &&
        currentServiceConnection.handshakeComplete);
}
exports.isConnected = isConnected;
/**
 * Get the default address to to connect to the service websocket
 * @public
 */
function getDefaultServiceAddress() {
    return defaultConnectionAddress;
}
exports.getDefaultServiceAddress = getDefaultServiceAddress;
/**
 * Get the current address to to connect to the service websocket
 * @public
 */
function getCurrentServiceAddress() {
    return currentConnectionAddress;
}
exports.getCurrentServiceAddress = getCurrentServiceAddress;
/**
 * Getter for currently managed static {@link ServiceConnection}.
 *
 * @internal
 */
function getServiceConnection() {
    return currentServiceConnection;
}
exports.getServiceConnection = getServiceConnection;
/**
 * Connect to TouchFree service at given {@link Address}.
 * A successful connection will dispatch the `"onConnected"` event.
 * @public
 */
function connect(address = defaultConnectionAddress) {
    currentServiceConnection = new ServiceConnection_1.ServiceConnection(address);
    currentConnectionAddress = address;
}
exports.connect = connect;
/**
 * Disconnects service connection and sets it to null.
 * @public
 */
function disconnect() {
    if (currentServiceConnection !== null) {
        currentServiceConnection.disconnect();
        currentServiceConnection = null;
    }
}
exports.disconnect = disconnect;
/**
 * Request service status from the service
 * @param callback - Callback to call with the response
 * @public
 */
function requestServiceStatus(callback) {
    var _a;
    if (!callback) {
        console.error('Request failed. This is due to a missing callback');
        return;
    }
    (_a = getServiceConnection()) === null || _a === void 0 ? void 0 : _a.requestServiceStatus((detail) => callback((0, RequestTypes_1.convertResponseToServiceState)(detail)));
}
exports.requestServiceStatus = requestServiceStatus;


/***/ }),

/***/ 7164:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InteractionZoneState = exports.HandPresenceState = exports.ConfigurationState = exports.TrackingServiceState = void 0;
/**
 * State of the Ultraleap Tracking Service that TouchFree Service connects to
 * @public
 */
var TrackingServiceState;
(function (TrackingServiceState) {
    /** The TouchFree service is not connected to the tracking service */
    TrackingServiceState[TrackingServiceState["UNAVAILABLE"] = 0] = "UNAVAILABLE";
    /** The TouchFree service is connected to the tracking service but there is not a camera connected */
    TrackingServiceState[TrackingServiceState["NO_CAMERA"] = 1] = "NO_CAMERA";
    /** The TouchFree service is connected to the tracking service */
    TrackingServiceState[TrackingServiceState["CONNECTED"] = 2] = "CONNECTED";
})(TrackingServiceState = exports.TrackingServiceState || (exports.TrackingServiceState = {}));
/**
 * State of a configuration file
 * @public
 */
var ConfigurationState;
(function (ConfigurationState) {
    /** The TouchFree configuration has not been loaded */
    ConfigurationState[ConfigurationState["NOT_LOADED"] = 0] = "NOT_LOADED";
    /** The TouchFree configuration has successfully been loaded */
    ConfigurationState[ConfigurationState["LOADED"] = 1] = "LOADED";
    /** The TouchFree configuration errored on load */
    ConfigurationState[ConfigurationState["ERRORED"] = 2] = "ERRORED";
})(ConfigurationState = exports.ConfigurationState || (exports.ConfigurationState = {}));
/**
 * Hand presence enumeration
 * @public
 */
var HandPresenceState;
(function (HandPresenceState) {
    /** Sent when the first hand is found when no hands were present previously */
    HandPresenceState[HandPresenceState["HAND_FOUND"] = 0] = "HAND_FOUND";
    /** Sent when the last observed hand is lost, meaning no more hands are observed */
    HandPresenceState[HandPresenceState["HANDS_LOST"] = 1] = "HANDS_LOST";
    /**
     * Used to indicate that no change in state is awaiting processing.
     * @internal
     */
    HandPresenceState[HandPresenceState["PROCESSED"] = 2] = "PROCESSED";
})(HandPresenceState = exports.HandPresenceState || (exports.HandPresenceState = {}));
/**
 * Interaction zone states
 * @public
 */
var InteractionZoneState;
(function (InteractionZoneState) {
    /** Sent when the "active" hand enters the interaction zone */
    InteractionZoneState[InteractionZoneState["HAND_ENTERED"] = 0] = "HAND_ENTERED";
    /** Sent when the "active" hand leaves the interaction zone */
    InteractionZoneState[InteractionZoneState["HAND_EXITED"] = 1] = "HAND_EXITED";
})(InteractionZoneState = exports.InteractionZoneState || (exports.InteractionZoneState = {}));


/***/ }),

/***/ 5838:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AnalyticsMessageReceiver = void 0;
const ActionCode_1 = __webpack_require__(6875);
const BaseMessageReceiver_1 = __webpack_require__(1330);
/**
 * Receives analytics messages from the service and distributes them
 *
 * @internal
 */
class AnalyticsMessageReceiver extends BaseMessageReceiver_1.BaseMessageReceiver {
    /**
     * Sets up consuming messages from a queue and passing them to the callbacks
     */
    constructor(callbackList) {
        super(true);
        /**
         * The {@link ActionCode | ActionCodes} that are handled by this message receiver
         */
        this.actionCode = [
            ActionCode_1.ActionCode.ANALYTICS_SESSION_REQUEST,
            ActionCode_1.ActionCode.ANALYTICS_UPDATE_SESSION_EVENTS_REQUEST,
        ];
        this.setup(() => this.checkQueue(this.queue, callbackList));
    }
}
exports.AnalyticsMessageReceiver = AnalyticsMessageReceiver;


/***/ }),

/***/ 1330:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseMessageReceiver = void 0;
/**
 * Base message receiver class to contain generic message processing functionality
 *
 * @internal
 */
class BaseMessageReceiver {
    /**
     * Constructs the class
     *
     * @param useQueue - Whether the message receiver should use a queue or just store the last item
     */
    constructor(useQueue) {
        /**
         * How many times per second to process {@link queue} or check {@link lastItem}.
         */
        this.updateRate = 60;
        /**
         * Duration (in seconds) of update interval - inverse of {@link updateRate}
         */
        this.updateDuration = (1 / this.updateRate) * 1000;
        /**
         * Starts a regular interval - {@link checkQueue} (at {@link updateRate})
         */
        this.setup = (checkQueue) => {
            setInterval(checkQueue, this.updateDuration);
        };
        /**
         * A queue of {@link ConvertedMessage | Messages} that have been received from the Service.
         */
        this.queue = [];
        /**
         * Handles processing the message from the service into a consumable format
         * and adds it either to a queue or updates the latest item depending on the
         * value of {@link useQueue}
         *
         * @param message - The message received from the Service
         */
        this.receiveMessage = (message) => {
            const messageContent = message.content;
            if (this.useQueue) {
                this.queue.push(messageContent);
            }
            else {
                this.lastItem = messageContent;
            }
        };
        /**
         * Takes an item off a queue and passes it to be handled
         *
         * @param queue - The message queue to process
         * @param callbacks - The callback list to check the response against
         */
        this.checkQueue = (queue, callbacks) => {
            const response = queue.shift();
            BaseMessageReceiver.handleCallbackList(response, callbacks);
        };
        this.useQueue = useQueue;
    }
}
exports.BaseMessageReceiver = BaseMessageReceiver;
/**
 * Checks a callback dictionary for a request id and handles invoking the callback.
 *
 * @param callbackResult - Callback data
 * @param callbacks - Callback dictionary to check
 * @returns String literal result representing success or what went wrong
 */
BaseMessageReceiver.handleCallbackList = (callbackResult, callbacks) => {
    if (!callbackResult || !callbacks)
        return 'NoCallbacksFound';
    for (const key in callbacks) {
        if (key === callbackResult.requestID) {
            callbacks[key].callback(callbackResult);
            delete callbacks[key];
            return 'Success';
        }
    }
    return 'NoCallbacksFound';
};
BaseMessageReceiver.logNoCallbacksWarning = (response) => {
    console.warn('Received a Handshake Response that did not match a callback.' +
        'This is the content of the response: \n Response ID: ' +
        response.requestID +
        '\n Status: ' +
        response.status +
        '\n Message: ' +
        response.message +
        '\n Original request - ' +
        response.originalRequest);
};


/***/ }),

/***/ 9831:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigStateMessageReceiver = void 0;
const ActionCode_1 = __webpack_require__(6875);
const BaseMessageReceiver_1 = __webpack_require__(1330);
/**
 * Receives configuration state messages from the service and distributes them
 *
 * @internal
 */
class ConfigStateMessageReceiver extends BaseMessageReceiver_1.BaseMessageReceiver {
    /**
     * Sets up consuming messages from a queue and passing them to the callbacks
     */
    constructor(callbackList) {
        super(true);
        /**
         * The {@link ActionCode | ActionCodes} that are handled by this message receiver
         */
        this.actionCode = [
            ActionCode_1.ActionCode.CONFIGURATION_STATE,
            ActionCode_1.ActionCode.CONFIGURATION_FILE_STATE,
            ActionCode_1.ActionCode.QUICK_SETUP_CONFIG,
        ];
        /**
         * Checks {@link queue} for a single {@link configState} and handles it.
         */
        this.checkForState = (callbackList) => {
            const configState = this.queue.shift();
            if (configState) {
                const configResult = BaseMessageReceiver_1.BaseMessageReceiver.handleCallbackList(configState, callbackList);
                switch (configResult) {
                    case 'NoCallbacksFound':
                        console.warn('Received a ConfigState message that did not match a callback.');
                        break;
                    case 'Success':
                        // no-op
                        break;
                }
            }
        };
        this.setup(() => this.checkForState(callbackList));
    }
}
exports.ConfigStateMessageReceiver = ConfigStateMessageReceiver;


/***/ }),

/***/ 1091:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HandDataHandler = void 0;
const HandDataManager_1 = __webpack_require__(3241);
/**
 * Receives hand data messages from the service and distributes them
 *
 * @internal
 */
class HandDataHandler {
    constructor() {
        /**
         * How many times per second to check {@link latestHandDataItem}
         */
        this.updateRate = 60;
        /**
         * Duration (in seconds) of update interval - inverse of {@link updateRate}
         */
        this.updateDuration = (1 / this.updateRate) * 1000;
        /**
         * The latest `HandFrame` that has been received from the Service.
         */
        this.latestHandDataItem = undefined;
        /**
         * Checks {@link latestHandDataItem} and if the `HandFrame` is not undefined sends it to
         * {@link HandDataManager} to handle the frame.
         */
        this.checkForHandData = () => {
            const handFrame = this.latestHandDataItem;
            if (!handFrame)
                return;
            this.latestHandDataItem = undefined;
            // Wrapping the function in a timeout of 0 seconds allows the dispatch to be asynchronous
            setTimeout(() => {
                HandDataManager_1.HandDataManager.handleHandFrame(handFrame);
            });
        };
        setInterval(this.checkForHandData, this.updateDuration);
    }
}
exports.HandDataHandler = HandDataHandler;


/***/ }),

/***/ 255:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HandPresenceMessageReceiver = void 0;
const ActionCode_1 = __webpack_require__(6875);
const ConnectionTypes_1 = __webpack_require__(7164);
const BaseMessageReceiver_1 = __webpack_require__(1330);
/**
 * Receives hand presence messages from the service and distributes them
 *
 * @internal
 */
class HandPresenceMessageReceiver extends BaseMessageReceiver_1.BaseMessageReceiver {
    /**
     * Sets up consuming hand presence messages and sending them to the {@link ConnectionManager}
     */
    constructor(callback) {
        super(false);
        /**
         * The {@link ActionCode | ActionCodes} that are handled by this message receiver
         */
        this.actionCode = [ActionCode_1.ActionCode.HAND_PRESENCE_EVENT];
        /**
         * Checks the latest message and processes it if it has not been processed yet
         */
        this.checkForState = (callback) => {
            var _a, _b;
            if (((_a = this.lastItem) === null || _a === void 0 ? void 0 : _a.state) !== undefined && ((_b = this.lastItem) === null || _b === void 0 ? void 0 : _b.state) !== ConnectionTypes_1.HandPresenceState.PROCESSED) {
                callback(this.lastItem.state);
                this.lastItem.state = ConnectionTypes_1.HandPresenceState.PROCESSED;
            }
        };
        this.setup(() => this.checkForState(callback));
    }
}
exports.HandPresenceMessageReceiver = HandPresenceMessageReceiver;


/***/ }),

/***/ 2574:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InputActionMessageReceiver = void 0;
const InputAction_1 = __webpack_require__(9403);
const InputActionManager_1 = __webpack_require__(7483);
const ActionCode_1 = __webpack_require__(6875);
const WebsocketInputAction_1 = __webpack_require__(7596);
const BaseMessageReceiver_1 = __webpack_require__(1330);
/**
 * Receives input action messages from the service and distributes them
 *
 * @internal
 */
class InputActionMessageReceiver extends BaseMessageReceiver_1.BaseMessageReceiver {
    /**
     * Sets up consuming messages from the queue and passing them to the {@link InputActionManager}
     */
    constructor() {
        super(true);
        /**
         * The {@link ActionCode | ActionCodes} that are handled by this message receiver
         */
        this.actionCode = [ActionCode_1.ActionCode.INPUT_ACTION];
        /**
         * How many non-essential {@link TouchFreeInputAction}s should the {@link queue}
         * be trimmed *to* per frame. This is used to ensure the Tooling can keep up with the
         * Events sent over the WebSocket.
         */
        this.actionCullToCount = 2;
        /**
         * Used to ensure UP events are sent at the correct position relative to the previous MOVE event.
         * This is required due to the culling of events from the {@link actionQueue} in {@link CheckForAction}.
         */
        this.lastKnownCursorPosition = [0, 0];
        /**
         * Checks {@link queue} for a single {@link TouchFreeInputAction} and handles it.
         *
         * @remarks
         * If there are too many in the queue, clears out non-essential {@link TouchFreeInputAction}
         * down to the number specified by {@link actionCullToCount}.
         * If any remain, sends the oldest {@link TouchFreeInputAction} to {@link InputActionManager}
         * to handle the action. Actions with UP {@link InputType} have their positions set to
         * {@link lastKnownCursorPosition} to ensure input events trigger correctly.
         */
        this.checkForState = () => {
            while (this.queue.length > this.actionCullToCount) {
                if (this.queue[0] !== undefined) {
                    // Stop shrinking the queue if we have a 'key' input event
                    if (this.queue[0].InteractionFlags & WebsocketInputAction_1.BitmaskFlags.MOVE ||
                        this.queue[0].InteractionFlags & WebsocketInputAction_1.BitmaskFlags.NONE_INPUT) {
                        // We want to ignore non-move results
                        this.queue.shift();
                    }
                    else {
                        break;
                    }
                }
            }
            const action = this.queue.shift();
            if (action !== undefined) {
                // Parse newly received messages & distribute them
                const converted = (0, WebsocketInputAction_1.convertInputAction)(action);
                //Cache or use the lastKnownCursorPosition. Copy the array to ensure it is not a reference
                if (converted.InputType !== InputAction_1.InputType.UP) {
                    this.lastKnownCursorPosition = [...converted.CursorPosition];
                }
                else {
                    converted.CursorPosition = [...this.lastKnownCursorPosition];
                }
                // Wrapping the function in a timeout of 0 seconds allows the dispatch to be asynchronous
                setTimeout(() => {
                    InputActionManager_1.InputActionManager.handleInputAction(converted);
                });
            }
        };
        this.setup(() => this.checkForState());
    }
}
exports.InputActionMessageReceiver = InputActionMessageReceiver;


/***/ }),

/***/ 1902:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InteractionZoneMessageReceiver = void 0;
const ActionCode_1 = __webpack_require__(6875);
const BaseMessageReceiver_1 = __webpack_require__(1330);
/**
 * Receives interaction zone messages from the service and distributes them
 *
 * @internal
 */
class InteractionZoneMessageReceiver extends BaseMessageReceiver_1.BaseMessageReceiver {
    /**
     * Sets up consuming interaction zone messages and sending them to the {@link ConnectionManager}
     */
    constructor(callback) {
        super(false);
        /**
         * The {@link ActionCode | ActionCodes} that are handled by this message receiver
         */
        this.actionCode = [ActionCode_1.ActionCode.INTERACTION_ZONE_EVENT];
        /**
         * Handles processing the message from the service into a consumable format
         *
         * @param message - The message received from the Service
         */
        this.receiveMessage = (message) => {
            const { state } = message.content;
            this.lastItem = { status: 'UNPROCESSED', state: state };
        };
        /**
         * Checks the latest message and processes it if it has not been processed yet
         */
        this.checkForState = (callback) => {
            var _a;
            if (((_a = this.lastItem) === null || _a === void 0 ? void 0 : _a.status) === 'UNPROCESSED') {
                callback(this.lastItem.state);
                this.lastItem.status = 'PROCESSED';
            }
        };
        this.setup(() => this.checkForState(callback));
    }
}
exports.InteractionZoneMessageReceiver = InteractionZoneMessageReceiver;


/***/ }),

/***/ 5643:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResponseMessageReceiver = void 0;
const ActionCode_1 = __webpack_require__(6875);
const BaseMessageReceiver_1 = __webpack_require__(1330);
/**
 * Receives response messages from the service and distributes them
 *
 * @internal
 */
class ResponseMessageReceiver extends BaseMessageReceiver_1.BaseMessageReceiver {
    /**
     * Sets up consuming messages from a queue and passing them to the callbacks
     */
    constructor(callbackList) {
        super(true);
        /**
         * The {@link ActionCode | ActionCodes} that are handled by this message receiver
         */
        this.actionCode = [
            ActionCode_1.ActionCode.CONFIGURATION_RESPONSE,
            ActionCode_1.ActionCode.SERVICE_STATUS_RESPONSE,
            ActionCode_1.ActionCode.CONFIGURATION_FILE_CHANGE_RESPONSE,
            ActionCode_1.ActionCode.QUICK_SETUP_RESPONSE,
        ];
        /**
         * Used to check the {@link queue} for a {@link WebSocketResponse}.
         * Sends it to {@link HandleCallbackList} with the {@link responseCallbacks} dictionary if there is one.
         */
        this.checkForState = (callbackList) => {
            const response = this.queue.shift();
            if (!response)
                return;
            const responseResult = BaseMessageReceiver_1.BaseMessageReceiver.handleCallbackList(response, callbackList);
            switch (responseResult) {
                case 'NoCallbacksFound':
                    BaseMessageReceiver_1.BaseMessageReceiver.logNoCallbacksWarning(response);
                    break;
                case 'Success':
                    if (response.message) {
                        // This is logged to aid users in debugging
                        console.log('Successfully received WebSocketResponse from TouchFree:\n' + response.message);
                    }
                    break;
            }
        };
        this.setup(() => this.checkForState(callbackList));
    }
}
exports.ResponseMessageReceiver = ResponseMessageReceiver;


/***/ }),

/***/ 6167:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServiceStateMessageReceiver = void 0;
const TouchFreeEvents_1 = __webpack_require__(5961);
const ActionCode_1 = __webpack_require__(6875);
const RequestTypes_1 = __webpack_require__(1275);
const BaseMessageReceiver_1 = __webpack_require__(1330);
/**
 * Receives service state messages from the service and distributes them
 *
 * @internal
 */
class ServiceStateMessageReceiver extends BaseMessageReceiver_1.BaseMessageReceiver {
    /**
     * Sets up consuming messages from a queue and passing them to the callbacks
     */
    constructor(callbackList) {
        super(true);
        /**
         * The {@link ActionCode | ActionCodes} that are handled by this message receiver
         */
        this.actionCode = [ActionCode_1.ActionCode.SERVICE_STATUS];
        /**
         * Checks {@link queue} for a single {@link ServiceStateResponse} and handles it.
         */
        this.checkForState = (callbackList) => {
            const serviceStatus = this.queue.shift();
            if (serviceStatus) {
                const callbackResult = BaseMessageReceiver_1.BaseMessageReceiver.handleCallbackList(serviceStatus, callbackList);
                switch (callbackResult) {
                    // If callback didn't happen for known reasons, we can be sure it's an independent status event rather
                    // than a request response
                    // TODO: Send/handle this request from service differently from normal response so
                    // we can be sure it's an independent event
                    case 'NoCallbacksFound':
                        // If service state is null we didn't get info about it from this message
                        if (serviceStatus.trackingServiceState !== null) {
                            (0, TouchFreeEvents_1.dispatchEventCallback)('onTrackingServiceStateChange', serviceStatus.trackingServiceState);
                        }
                        (0, TouchFreeEvents_1.dispatchEventCallback)('onServiceStatusChange', (0, RequestTypes_1.convertResponseToServiceState)(serviceStatus));
                        break;
                    case 'Success':
                        // no-op
                        break;
                }
            }
        };
        this.setup(() => this.checkForState(callbackList));
    }
}
exports.ServiceStateMessageReceiver = ServiceStateMessageReceiver;


/***/ }),

/***/ 940:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TrackingStateMessageReceiver = void 0;
const ActionCode_1 = __webpack_require__(6875);
const BaseMessageReceiver_1 = __webpack_require__(1330);
/**
 * Receives tracking state messages from the service and distributes them
 *
 * @internal
 */
class TrackingStateMessageReceiver extends BaseMessageReceiver_1.BaseMessageReceiver {
    /**
     * Sets up consuming messages from a queue and passing them to the callbacks
     */
    constructor(callbackList) {
        super(true);
        /**
         * The {@link ActionCode | ActionCodes} that are handled by this message receiver
         */
        this.actionCode = [ActionCode_1.ActionCode.TRACKING_STATE];
        this.setup(() => this.checkQueue(this.queue, callbackList));
    }
}
exports.TrackingStateMessageReceiver = TrackingStateMessageReceiver;


/***/ }),

/***/ 206:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VersionHandshakeMessageReceiver = void 0;
const ActionCode_1 = __webpack_require__(6875);
const BaseMessageReceiver_1 = __webpack_require__(1330);
/**
 * Receives handshake messages from the service and distributes them
 *
 * @internal
 */
class VersionHandshakeMessageReceiver extends BaseMessageReceiver_1.BaseMessageReceiver {
    /**
     * Sets up consuming messages from a queue and passing them to the callbacks
     */
    constructor(callbackList) {
        super(true);
        /**
         * The {@link ActionCode | ActionCodes} that are handled by this message receiver
         */
        this.actionCode = [ActionCode_1.ActionCode.VERSION_HANDSHAKE_RESPONSE];
        /**
         * Checks {@link queue} for a single {@link WebSocketResponse} and handles it.
         */
        this.checkForState = (callbackList) => {
            const response = this.queue.shift();
            if (response) {
                const responseResult = BaseMessageReceiver_1.BaseMessageReceiver.handleCallbackList(response, callbackList);
                const configStateError = response === null || response === void 0 ? void 0 : response.configurationStateError;
                switch (responseResult) {
                    case 'NoCallbacksFound':
                        BaseMessageReceiver_1.BaseMessageReceiver.logNoCallbacksWarning(response);
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
                        if (configStateError) {
                            if (configStateError === 'ERROR') {
                                console.error('Received Configuration State Error from TouchFree. ' +
                                    'Error loading configuration files.');
                            }
                            else if (configStateError === 'DEFAULT') {
                                console.warn('Received Configuration State Warning from TouchFree. ' +
                                    'Configuration is default, perform a setup to resolve');
                            }
                        }
                        break;
                }
            }
        };
        this.setup(() => this.checkForState(callbackList));
    }
}
exports.VersionHandshakeMessageReceiver = VersionHandshakeMessageReceiver;


/***/ }),

/***/ 1275:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convertResponseToServiceState = void 0;
/**
 * Converts a response type to {@link ServiceState}
 * @param response - Response object from the service
 * @returns Converted ServiceState
 * @internal
 */
function convertResponseToServiceState(response) {
    return {
        cameraFirmwareVersion: response.cameraFirmwareVersion,
        cameraSerial: response.cameraSerial,
        configurationState: response.configurationState,
        touchFreeServiceVersion: response.serviceVersion,
        trackingServiceState: response.trackingServiceState,
        trackingServiceVersion: response.trackingVersion,
    };
}
exports.convertResponseToServiceState = convertResponseToServiceState;


/***/ }),

/***/ 8952:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ServiceConnection = void 0;
const TouchFreeEvents_1 = __webpack_require__(5961);
const ActionCode_1 = __webpack_require__(6875);
const CallbackLists_1 = __webpack_require__(4841);
const ConnectionTypes_1 = __webpack_require__(7164);
const AnalyticsMessageReceiver_1 = __webpack_require__(5838);
const ConfigStateMessageReceiver_1 = __webpack_require__(9831);
const HandDataHandler_1 = __webpack_require__(1091);
const HandPresenceMessageReceiver_1 = __webpack_require__(255);
const InputActionMessageReceiver_1 = __webpack_require__(2574);
const InteractionZoneMessageReceiver_1 = __webpack_require__(1902);
const ResponseMessageReceiver_1 = __webpack_require__(5643);
const ServiceStateMessageReceiver_1 = __webpack_require__(6167);
const TrackingStateMessageReceiver_1 = __webpack_require__(940);
const VersionHandshakeMessageReceiver_1 = __webpack_require__(206);
const ServiceTypes_1 = __webpack_require__(6252);
const uuid_1 = __webpack_require__(7429);
const createMessageReceivers = (serviceConnection) => {
    const callbacks = serviceConnection.getCallbackLists();
    return [
        new AnalyticsMessageReceiver_1.AnalyticsMessageReceiver(callbacks.analyticsRequestCallbacks),
        new ConfigStateMessageReceiver_1.ConfigStateMessageReceiver(callbacks.configStateCallbacks),
        // Passing wrapped callbacks so that the method is not copied and can be replaced in tests
        new HandPresenceMessageReceiver_1.HandPresenceMessageReceiver((state) => serviceConnection.handleHandPresenceEvent(state)),
        new InputActionMessageReceiver_1.InputActionMessageReceiver(),
        new InteractionZoneMessageReceiver_1.InteractionZoneMessageReceiver((state) => serviceConnection.handleInteractionZoneEvent(state)),
        new ResponseMessageReceiver_1.ResponseMessageReceiver(callbacks.responseCallbacks),
        new ServiceStateMessageReceiver_1.ServiceStateMessageReceiver(callbacks.serviceStatusCallbacks),
        new TrackingStateMessageReceiver_1.TrackingStateMessageReceiver(callbacks.trackingStateCallbacks),
        new VersionHandshakeMessageReceiver_1.VersionHandshakeMessageReceiver(callbacks.handshakeCallbacks),
    ];
};
/**
 * Represents a connection to the TouchFree Service.
 *
 * @internal
 */
class ServiceConnection {
    /**
     * The version of the connected TouchFree Service
     */
    get touchFreeVersion() {
        return this.internalTouchFreeVersion;
    }
    /**
     * Get current presence state of the hand.
     */
    getCurrentHandPresence() {
        return this.currentHandPresence;
    }
    /**
     * Get current interaction zone state
     */
    getCurrentInteractionZoneState() {
        return this.currentInteractionZoneState;
    }
    /**
     * Has the websocket connection handshake completed?
     */
    get handshakeComplete() {
        return this.handshakeCompleted;
    }
    /**
     * Get callback lists object
     */
    getCallbackLists() {
        return this.callbackLists;
    }
    /**
     * Sets up {@link WebSocket} connection and adds appropriate listeners for incoming messages.
     *
     * @remarks
     * Sets up a listener to request a handshake once the websocket has successfully opened.
     * No data will be sent over an open connection until a successful handshake has completed.
     *
     * @param address - Address to connect to websocket on
     */
    constructor(address) {
        this.internalTouchFreeVersion = '';
        this.currentHandPresence = ConnectionTypes_1.HandPresenceState.HANDS_LOST;
        this.currentInteractionZoneState = ConnectionTypes_1.InteractionZoneState.HAND_EXITED;
        /**
         * Force close the websocket connection
         */
        this.disconnect = () => {
            if (this.webSocket !== null) {
                this.webSocket.close();
            }
        };
        this.requestHandshake = () => {
            if (!this.handshakeCompleted) {
                const guid = (0, uuid_1.v4)();
                // construct message
                const handshakeRequest = {
                    action: ActionCode_1.ActionCode.VERSION_HANDSHAKE,
                    content: {
                        requestID: guid,
                        [ServiceTypes_1.VERSION_INFO.API_HEADER_NAME]: ServiceTypes_1.VERSION_INFO.API_VERSION,
                    },
                };
                if (!this.handshakeRequested) {
                    this.handshakeRequested = true;
                    // send message
                    this.sendMessageWithSimpleResponse(JSON.stringify(handshakeRequest), guid, this.connectionResultCallback, this.callbackLists.handshakeCallbacks);
                }
            }
        };
        /**
         * Passed into {@link sendMessage} as part of connecting to TouchFree Service, handles the
         * result of the Version Checking handshake.
         *
         * @remarks
         * Dispatches `"onConnected"` event via {@link dispatchEventCallback} upon successful handshake response
         *
         * @param response - VersionHandshakeResponse if connection was successful or another websocket response otherwise
         */
        this.connectionResultCallback = (response) => {
            if (response.status === 'Success') {
                console.log('Successful Connection');
                const handshakeResponse = response;
                if (handshakeResponse) {
                    this.internalTouchFreeVersion = handshakeResponse.touchFreeVersion;
                }
                this.handshakeCompleted = true;
                (0, TouchFreeEvents_1.dispatchEventCallback)('onConnected');
            }
            else {
                console.error(`Connection to Service failed. Details:\n${response.message}`);
            }
        };
        /**
         * The first point of contact for new messages received. Messages are passed to a
         * message receiver depending on their {@link ActionCode}.
         *
         * @param message - Message to handle
         */
        this.onMessage = (message) => {
            if (typeof message.data !== 'string') {
                const buffer = message.data;
                const binaryDataType = new Int32Array(buffer, 0, 4)[0];
                if (binaryDataType === ServiceBinaryDataTypes.HAND_RENDER_DATA) {
                    this.handDataHandler.latestHandDataItem = buffer;
                }
                return;
            }
            const looseData = JSON.parse(message.data);
            // Get the first message receiver with a matching action code
            const receiver = this.messageReceivers.find((x) => x.actionCode.find((a) => a === looseData.action));
            receiver === null || receiver === void 0 ? void 0 : receiver.receiveMessage(looseData);
        };
        /**
         * Send or request information from the TouchFree Service via the WebSocket.
         *
         * @param message - Content of message
         * @param requestID - A request ID to identify the response from the Service
         * @param callback - Callback to handle the response
         */
        this.sendMessage = (message, requestID, callback) => {
            this.sendMessageWithSimpleResponse(message, requestID, callback, this.callbackLists.responseCallbacks);
        };
        this.sendMessageWithSimpleResponse = (message, requestID, callback, callbacksStore) => {
            if (!requestID) {
                if (callback) {
                    callback({
                        requestID: '',
                        status: 'Failure',
                        message: 'Request failed. This is due to a missing or invalid requestID',
                        originalRequest: message,
                    });
                }
                console.error('Request failed. This is due to a missing or invalid requestID');
                return;
            }
            if (callback && callbacksStore) {
                callbacksStore[requestID] = { timestamp: Date.now(), callback };
            }
            this.webSocket.send(message);
        };
        /**
         * Request updated {@link ConfigState | ConfigState} from the Service
         *
         * @param callback - Callback to handle the response from the service
         */
        this.requestConfigState = (callback) => {
            this.baseRequestWithRequiredCallback(ActionCode_1.ActionCode.REQUEST_CONFIGURATION_STATE, 'config state', callback, this.callbackLists.configStateCallbacks);
        };
        /**
         * Request Service to reset the Interaction Config File to its default state
         *
         * @param callback - Callback to handle the response from the service
         */
        this.resetInteractionConfigFile = (callback) => {
            this.baseRequestWithRequiredCallback(ActionCode_1.ActionCode.RESET_INTERACTION_CONFIG_FILE, 'config state', callback, this.callbackLists.configStateCallbacks);
        };
        /**
         * Request service status from the Service.
         *
         * @param callback - Callback to handle the response from the service
         */
        this.requestServiceStatus = (callback) => {
            this.baseRequestWithRequiredCallback(ActionCode_1.ActionCode.REQUEST_SERVICE_STATUS, 'service status', callback, this.callbackLists.serviceStatusCallbacks);
        };
        /**
         * Request config state of the config files from the Service
         *
         * @param callback - Callback to handle the response from the service
         */
        this.requestConfigFile = (callback) => {
            this.baseRequestWithRequiredCallback(ActionCode_1.ActionCode.REQUEST_CONFIGURATION_FILE, 'config file', callback, this.callbackLists.configStateCallbacks);
        };
        /**
         * Request a quick setup on the Service
         *
         * @param atTopTarget - Which quick setup target is being used
         * @param callback - Callback to handle the response from the service
         * @param configurationCallback - Callback to handle a response from the service with updated configuration
         */
        this.quickSetupRequest = (atTopTarget, callback, configurationCallback) => {
            this.baseRequestWithMultipleCallbacks({
                position: atTopTarget ? 'Top' : 'Bottom',
            }, ActionCode_1.ActionCode.QUICK_SETUP, this.callbackLists.responseCallbacks, callback, this.callbackLists.configStateCallbacks, configurationCallback);
        };
        /**
         * Request tracking state update from the Service
         *
         * @param callback - Callback to handle the response from the service
         */
        this.requestTrackingState = (callback) => {
            this.baseRequestWithRequiredCallback(ActionCode_1.ActionCode.GET_TRACKING_STATE, 'tracking state', callback, this.callbackLists.trackingStateCallbacks);
        };
        /**
         * Request a change to tracking state on the Service
         *
         * @param state - State change to request. Undefined props are not sent
         * @param callback - Callback to handle the response from the service
         */
        this.requestTrackingChange = (state, callback) => {
            const requestContent = {};
            if (state.mask !== undefined) {
                requestContent.mask = state.mask;
            }
            if (state.allowImages !== undefined) {
                requestContent.allowImages = state.allowImages;
            }
            if (state.cameraReversed !== undefined) {
                requestContent.cameraReversed = state.cameraReversed;
            }
            if (state.analyticsEnabled !== undefined) {
                requestContent.analyticsEnabled = state.analyticsEnabled;
            }
            this.baseRequest(requestContent, ActionCode_1.ActionCode.SET_TRACKING_STATE, this.callbackLists.trackingStateCallbacks, callback);
        };
        /**
         * Base functionality for sending a request to the Service
         * @param fields - Object containing the content to send to the Service.
         * @param actionCode - {@link ActionCode} for the analytics request
         * @param callback - A callback to handle the response from the service.
         * @param callbackList - The list of pending callbacks to add the callback to
         */
        this.baseRequestWithRequiredCallback = (actionCode, noCallbackError, callback, callbackList) => {
            if (!callback || !callbackList) {
                console.error(`Request for ${noCallbackError} failed. This is due to a missing callback`);
                return;
            }
            this.baseRequest({}, actionCode, callbackList, callback);
        };
        /**
         * Base functionality for sending a request to the Service
         * @param fields - Object containing the content to send to the Service.
         * @param actionCode - {@link ActionCode} for the analytics request
         * @param callbackList - The list of pending callbacks to add the callback to
         * @param callback - Optional callback to handle the response from the service
         */
        this.baseRequest = (fields, actionCode, callbackList, callback) => {
            this.baseRequestWithMultipleCallbacks(fields, actionCode, callbackList, callback);
        };
        /**
         * Base functionality for sending a request to the Service
         * @param fields - Object containing the content to send to the Service.
         * @param actionCode - {@link ActionCode} for the analytics request
         * @param callbackList - The list of pending callbacks to add the callback to
         * @param callback - Optional callback to handle the response from the service
         * @param secondCallbackList - Optional second list of pending callbacks to add the seconds callback to
         * @param secondCallback - Optional second callback to handle the response from the service
         */
        this.baseRequestWithMultipleCallbacks = (fields, actionCode, callbackList, callback, secondCallbackList, secondCallback) => {
            const requestID = (0, uuid_1.v4)();
            const content = Object.assign(Object.assign({}, fields), { requestID });
            const wrapper = { action: actionCode, content };
            const message = JSON.stringify(wrapper);
            if (callback && callbackList) {
                callbackList[requestID] = {
                    timestamp: Date.now(),
                    callback,
                };
            }
            if (secondCallback && secondCallbackList) {
                secondCallbackList[requestID] = {
                    timestamp: Date.now(),
                    callback: secondCallback,
                };
            }
            this.webSocket.send(message);
        };
        /**
         * Used to either start a new analytics session, or stop the current session.
         *
         * @param requestType - Type of Analytics Session request. See {@link AnalyticsSessionRequestType}
         * @param sessionID - Session ID
         * @param callback - Optional callback to handle the response from the service
         */
        this.analyticsSessionRequest = (requestType, sessionID, callback) => this.baseRequest({ sessionID, requestType }, ActionCode_1.ActionCode.ANALYTICS_SESSION_REQUEST, this.callbackLists.analyticsRequestCallbacks, callback);
        /**
         * Used to send a request to update the analytic session's events stored in the Service
         * @param sessionID - ID of the session
         * @param events - Analytics events to send
         * @param callback - Optional callback to handle the response from the service
         */
        this.updateAnalyticSessionEvents = (sessionID, events, callback) => this.baseRequest({ sessionID, sessionEvents: events }, ActionCode_1.ActionCode.ANALYTICS_UPDATE_SESSION_EVENTS_REQUEST, this.callbackLists.analyticsRequestCallbacks, callback);
        /**
         * Handles HandPresence events from the service and dispatches
         * the `handFound` and `handsLost` events on this class
         * @param state - Hand state
         */
        this.handleHandPresenceEvent = (state) => {
            this.currentHandPresence = state;
            if (state === ConnectionTypes_1.HandPresenceState.HAND_FOUND) {
                (0, TouchFreeEvents_1.dispatchEventCallback)('handFound');
            }
            else {
                (0, TouchFreeEvents_1.dispatchEventCallback)('handsLost');
            }
        };
        /**
         * Handle an InteractionZone event by dispatching
         * `handEntered` and `handExited` events on this class
         */
        this.handleInteractionZoneEvent = (state) => {
            this.currentInteractionZoneState = state;
            if (state === ConnectionTypes_1.InteractionZoneState.HAND_ENTERED) {
                (0, TouchFreeEvents_1.dispatchEventCallback)('handEntered');
            }
            else {
                (0, TouchFreeEvents_1.dispatchEventCallback)('handExited');
            }
        };
        this.callbackLists = (0, CallbackLists_1.createDefaultCallbackLists)();
        this.handDataHandler = new HandDataHandler_1.HandDataHandler();
        this.messageReceivers = createMessageReceivers(this);
        (0, CallbackLists_1.setClearCallbacksInterval)(300, 300, this.callbackLists);
        this.webSocket = new WebSocket(`ws://${address.ip}:${address.port}/connect`);
        this.webSocket.binaryType = 'arraybuffer';
        this.webSocket.addEventListener('message', this.onMessage);
        this.handshakeRequested = false;
        this.handshakeCompleted = false;
        this.webSocket.addEventListener('open', this.requestHandshake, { once: true });
    }
}
exports.ServiceConnection = ServiceConnection;
var ServiceBinaryDataTypes;
(function (ServiceBinaryDataTypes) {
    ServiceBinaryDataTypes[ServiceBinaryDataTypes["HAND_RENDER_DATA"] = 1] = "HAND_RENDER_DATA";
})(ServiceBinaryDataTypes || (ServiceBinaryDataTypes = {}));


/***/ }),

/***/ 6252:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VERSION_INFO = void 0;
/**
 * Object with versions for comparing the {@link VERSION_INFO.API_VERSION} of the Tooling and the Service.
 *
 * @internal
 */
exports.VERSION_INFO = {
    /**
     * The current version of communication API used between Tooling and the TouchFree Service
     */
    API_VERSION: '1.5.0',
    /**
     * The name of the header we wish the Service to compare our version with.
     */
    API_HEADER_NAME: 'TfApiVersion',
};


/***/ }),

/***/ 7596:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getInteractionTypeFromFlags = exports.getInputTypeFromFlags = exports.getHandTypeFromFlags = exports.getChiralityFromFlags = exports.getInteractionFlags = exports.convertInputAction = exports.BitmaskFlags = void 0;
const InputAction_1 = __webpack_require__(9403);
/**
 * Used to request a combination of the {@link HandChirality}, {@link HandType},
 * {@link InputType}, and {@link InteractionType} flags from the Service at once.
 * @internal
 */
var BitmaskFlags;
(function (BitmaskFlags) {
    /** No flags */
    BitmaskFlags[BitmaskFlags["NONE"] = 0] = "NONE";
    /** Left hand flag */
    BitmaskFlags[BitmaskFlags["LEFT"] = 1] = "LEFT";
    /** Right hand flag */
    BitmaskFlags[BitmaskFlags["RIGHT"] = 2] = "RIGHT";
    /** Primary hand flag */
    BitmaskFlags[BitmaskFlags["PRIMARY"] = 4] = "PRIMARY";
    /** Secondary hand flag */
    BitmaskFlags[BitmaskFlags["SECONDARY"] = 8] = "SECONDARY";
    /** No input flag */
    BitmaskFlags[BitmaskFlags["NONE_INPUT"] = 16] = "NONE_INPUT";
    /** Cancel input flag */
    BitmaskFlags[BitmaskFlags["CANCEL"] = 32] = "CANCEL";
    /** Down input flag */
    BitmaskFlags[BitmaskFlags["DOWN"] = 64] = "DOWN";
    /** Move input flag */
    BitmaskFlags[BitmaskFlags["MOVE"] = 128] = "MOVE";
    /** Up input flag */
    BitmaskFlags[BitmaskFlags["UP"] = 256] = "UP";
    /**
     * Grab interaction flag
     * @internal
     */
    BitmaskFlags[BitmaskFlags["GRAB"] = 512] = "GRAB";
    /** Hover interaction flag */
    BitmaskFlags[BitmaskFlags["HOVER"] = 1024] = "HOVER";
    /** Push interaction flag */
    BitmaskFlags[BitmaskFlags["PUSH"] = 2048] = "PUSH";
    /** TouchPlane interaction flag */
    BitmaskFlags[BitmaskFlags["TOUCHPLANE"] = 4096] = "TOUCHPLANE";
    /**
     * VelocitySwipe interaction flag
     * @internal
     * */
    BitmaskFlags[BitmaskFlags["VELOCITYSWIPE"] = 8192] = "VELOCITYSWIPE";
    // Adding elements to this list is a breaking change, and should cause at
    // least a minor iteration of the API version UNLESS adding them at the end
})(BitmaskFlags = exports.BitmaskFlags || (exports.BitmaskFlags = {}));
/**
 * Converts a {@link WebsocketInputAction} into the Tooling-friendly {@link TouchFreeInputAction}.
 *
 * @param wsInput - Raw input action received by the WebSocket
 * @returns User friendly conversion of the inputAction - {@link TouchFreeInputAction}
 *
 * @internal
 */
function convertInputAction(wsInput) {
    const yPosition = window.innerHeight - wsInput.CursorPosition.y / window.devicePixelRatio;
    const xPosition = wsInput.CursorPosition.x / window.devicePixelRatio;
    return {
        Timestamp: wsInput.Timestamp,
        InteractionType: getInteractionTypeFromFlags(wsInput.InteractionFlags),
        HandType: getHandTypeFromFlags(wsInput.InteractionFlags),
        Chirality: getChiralityFromFlags(wsInput.InteractionFlags),
        InputType: getInputTypeFromFlags(wsInput.InteractionFlags),
        CursorPosition: [xPosition, yPosition],
        DistanceFromScreen: wsInput.DistanceFromScreen,
        ProgressToClick: wsInput.ProgressToClick,
    };
}
exports.convertInputAction = convertInputAction;
/**
 * Convert a collection of interaction enums to BitmaskFlags for sending to the Service
 *
 * @internal
 */
function getInteractionFlags(interactionType, handType, chirality, inputType) {
    let returnVal = BitmaskFlags.NONE;
    switch (handType) {
        case InputAction_1.HandType.PRIMARY:
            returnVal ^= BitmaskFlags.PRIMARY;
            break;
        case InputAction_1.HandType.SECONDARY:
            returnVal ^= BitmaskFlags.SECONDARY;
            break;
    }
    switch (chirality) {
        case InputAction_1.HandChirality.LEFT:
            returnVal ^= BitmaskFlags.LEFT;
            break;
        case InputAction_1.HandChirality.RIGHT:
            returnVal ^= BitmaskFlags.RIGHT;
            break;
    }
    switch (inputType) {
        case InputAction_1.InputType.NONE:
            returnVal ^= BitmaskFlags.NONE_INPUT;
            break;
        case InputAction_1.InputType.CANCEL:
            returnVal ^= BitmaskFlags.CANCEL;
            break;
        case InputAction_1.InputType.MOVE:
            returnVal ^= BitmaskFlags.MOVE;
            break;
        case InputAction_1.InputType.UP:
            returnVal ^= BitmaskFlags.UP;
            break;
        case InputAction_1.InputType.DOWN:
            returnVal ^= BitmaskFlags.DOWN;
            break;
    }
    switch (interactionType) {
        case InputAction_1.InteractionType.PUSH:
            returnVal ^= BitmaskFlags.PUSH;
            break;
        case InputAction_1.InteractionType.HOVER:
            returnVal ^= BitmaskFlags.HOVER;
            break;
        case InputAction_1.InteractionType.GRAB:
            returnVal ^= BitmaskFlags.GRAB;
            break;
        case InputAction_1.InteractionType.TOUCHPLANE:
            returnVal ^= BitmaskFlags.TOUCHPLANE;
            break;
        case InputAction_1.InteractionType.VELOCITYSWIPE:
            returnVal ^= BitmaskFlags.VELOCITYSWIPE;
            break;
    }
    return returnVal;
}
exports.getInteractionFlags = getInteractionFlags;
/**
 * Extract HandChirality from a BitmaskFlags
 * @remarks Favours RIGHT if none or both are found
 * @param flags - BitmaskFlags to extract from
 * @returns Extracted chirality
 *
 * @internal
 */
function getChiralityFromFlags(flags) {
    let chirality = InputAction_1.HandChirality.RIGHT;
    if (flags & BitmaskFlags.RIGHT) {
        chirality = InputAction_1.HandChirality.RIGHT;
    }
    else if (flags & BitmaskFlags.LEFT) {
        chirality = InputAction_1.HandChirality.LEFT;
    }
    else {
        console.error("InputActionData missing: No Chirality found. Defaulting to 'RIGHT'");
    }
    return chirality;
}
exports.getChiralityFromFlags = getChiralityFromFlags;
/**
 * Extract HandType from a BitmaskFlags
 * @remarks Favours PRIMARY if none or both are found
 * @param flags - BitmaskFlags to extract from
 * @returns Extracted hand type
 *
 * @internal
 */
function getHandTypeFromFlags(flags) {
    let handType = InputAction_1.HandType.PRIMARY;
    if (flags & BitmaskFlags.PRIMARY) {
        handType = InputAction_1.HandType.PRIMARY;
    }
    else if (flags & BitmaskFlags.SECONDARY) {
        handType = InputAction_1.HandType.SECONDARY;
    }
    else {
        console.error("InputActionData missing: No HandData found. Defaulting to 'PRIMARY'");
    }
    return handType;
}
exports.getHandTypeFromFlags = getHandTypeFromFlags;
/**
 * Extract InputType from a BitmaskFlags
 * @remarks Favours NONE if none are found
 * @param flags - BitmaskFlags to extract from
 * @returns Extracted input type
 *
 * @internal
 */
function getInputTypeFromFlags(flags) {
    let inputType = InputAction_1.InputType.NONE;
    if (flags & BitmaskFlags.NONE_INPUT) {
        inputType = InputAction_1.InputType.NONE;
    }
    else if (flags & BitmaskFlags.CANCEL) {
        inputType = InputAction_1.InputType.CANCEL;
    }
    else if (flags & BitmaskFlags.UP) {
        inputType = InputAction_1.InputType.UP;
    }
    else if (flags & BitmaskFlags.DOWN) {
        inputType = InputAction_1.InputType.DOWN;
    }
    else if (flags & BitmaskFlags.MOVE) {
        inputType = InputAction_1.InputType.MOVE;
    }
    else {
        console.error("InputActionData missing: No InputType found. Defaulting to 'NONE'");
    }
    return inputType;
}
exports.getInputTypeFromFlags = getInputTypeFromFlags;
/**
 * Extract InteractionType from a BitmaskFlags
 * @remarks Favours PUSH if none are found
 * @param flags - BitmaskFlags to extract from
 * @returns Extracted interaction type
 *
 * @internal
 */
function getInteractionTypeFromFlags(flags) {
    let interactionType = InputAction_1.InteractionType.PUSH;
    if (flags & BitmaskFlags.PUSH) {
        interactionType = InputAction_1.InteractionType.PUSH;
    }
    else if (flags & BitmaskFlags.HOVER) {
        interactionType = InputAction_1.InteractionType.HOVER;
    }
    else if (flags & BitmaskFlags.GRAB) {
        interactionType = InputAction_1.InteractionType.GRAB;
    }
    else if (flags & BitmaskFlags.TOUCHPLANE) {
        interactionType = InputAction_1.InteractionType.TOUCHPLANE;
    }
    else if (flags & BitmaskFlags.VELOCITYSWIPE) {
        interactionType = InputAction_1.InteractionType.VELOCITYSWIPE;
    }
    else {
        console.error("InputActionData missing: No InteractionType found. Defaulting to 'PUSH'");
    }
    return interactionType;
}
exports.getInteractionTypeFromFlags = getInteractionTypeFromFlags;


/***/ }),

/***/ 4773:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setCurrentCursor = exports.getCurrentCursor = void 0;
/**
 * Global cursor initialized by {@link init}
 * @public
 */
let currentCursor;
/**
 * @returns The Cursor currently used by TouchFree
 * @public
 */
const getCurrentCursor = () => currentCursor;
exports.getCurrentCursor = getCurrentCursor;
/**
 * Sets the cursor to be used by TouchFree
 * @param cursor - The cursor to be used. Can be `undefined` to unset.
 * @public
 */
const setCurrentCursor = (cursor) => (currentCursor = cursor);
exports.setCurrentCursor = setCurrentCursor;


/***/ }),

/***/ 4925:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DotCursor = void 0;
const InputAction_1 = __webpack_require__(9403);
const Utilities_1 = __webpack_require__(6593);
const TouchFreeEvents_1 = __webpack_require__(5961);
const TouchlessCursor_1 = __webpack_require__(1004);
/**
 * {@link TouchlessCursor} which positions a dot on the screen at the hand location,
 * reacting to the current {@link TouchFreeInputAction.ProgressToClick}.
 *
 * @remarks
 * {@link TouchFreeInputAction.ProgressToClick} behaviour depends on the active interaction.
 *
 * @public
 */
class DotCursor extends TouchlessCursor_1.TouchlessCursor {
    /**
     * Constructs a new cursor consisting of a central cursor and a ring.
     * @remarks
     * If you intend to make use of `WebInputController`, make sure both `cursor` and `cursorRing`
     * elements have the `touchfree-cursor` class. This prevents them from blocking other elements from
     * receiving events.
     * @param cursor - Cursor HTML element
     * @param cursorRing - Cursor ring HTML element
     * @param animationDuration -
     * Optional duration changing the time it takes for 'squeeze'
     * confirmation animation to be performed.
     * @param ringSizeMultiplier - Optional multiplier to the size the ring can be relative to the main cursor element.
     */
    constructor(cursor, cursorRing, animationDuration = 0.2, ringSizeMultiplier = 2) {
        super(cursor);
        /**
         * Update duration (in milliseconds) of the animation
         * @defaultValue 30fps (33.33ms)
         */
        this.animationUpdateDuration = (1 / 30) * 1000;
        this.animationSpeed = [0, 0];
        this.currentAnimationInterval = -1;
        this.growQueued = false;
        this.currentFadingInterval = -1;
        this.dotCursorElement = cursor;
        this.cursorRing = cursorRing;
        this.ringSizeMultiplier = ringSizeMultiplier;
        this.cursorStartSize = this.getDimensions(this.dotCursorElement);
        this.animationSpeed[0] = this.cursorStartSize[0] / 2 / (animationDuration * 30);
        this.animationSpeed[1] = this.cursorStartSize[1] / 2 / (animationDuration * 30);
        (0, TouchFreeEvents_1.registerEventCallback)('handFound', this.showCursor.bind(this));
        (0, TouchFreeEvents_1.registerEventCallback)('handsLost', this.hideCursor.bind(this));
        (0, TouchFreeEvents_1.registerEventCallback)('handEntered', this.showCursor.bind(this));
        (0, TouchFreeEvents_1.registerEventCallback)('handExited', this.hideCursor.bind(this));
    }
    /**
     * Updates the cursor position as well as the size of the ring based on {@link TouchFreeInputAction.ProgressToClick}
     * @param inputAction - Input action to use when updating cursor
     * @see {@link TouchlessCursor.updateCursor}
     * @internal
     */
    updateCursor(inputAction) {
        if (!this.enabled)
            return;
        //progressToClick is between 0 and 1. Click triggered at progressToClick = 1
        const ringScaler = (0, Utilities_1.mapRangeToRange)(inputAction.ProgressToClick, 0, 1, this.ringSizeMultiplier, 1);
        this.cursorRing.style.opacity = inputAction.ProgressToClick.toString();
        const [cursorWidth, cursorHeight] = this.getDimensions(this.dotCursorElement);
        this.cursorRing.style.width = cursorWidth * ringScaler + 'px';
        this.cursorRing.style.height = cursorHeight * ringScaler + 'px';
        const [cursorRingWidth, cursorRingHeight] = this.getDimensions(this.cursorRing);
        this.cursorRing.style.left = inputAction.CursorPosition[0] - cursorRingWidth / 2 + 'px';
        this.cursorRing.style.top = inputAction.CursorPosition[1] - cursorRingHeight / 2 + 'px';
        super.updateCursor(inputAction);
    }
    /**
     * Replaces the basic functionality of {@link TouchlessCursor}
     *
     * @remarks
     * Makes the cursor ring scale dynamically with {@link TouchFreeInputAction.ProgressToClick};
     * creates a 'shrink' animation when a {@link InputType.DOWN} event is received;
     * creates a 'grow' animation when a {@link InputType.UP} event is received.
     *
     * When a {@link InputType.CANCEL} event is received the cursor is hidden as it suggests the hand
     * has been lost. When hidden and any other event is received, the cursor is shown again.
     * @param inputData - Input action to handle this update
     * @internal
     */
    handleInputAction(inputData) {
        switch (inputData.InputType) {
            case InputAction_1.InputType.MOVE:
                this.updateCursor(inputData);
                break;
            case InputAction_1.InputType.DOWN:
                this.setCursorSize(0, 0, this.cursorRing);
                if (this.currentAnimationInterval !== -1) {
                    clearInterval(this.currentAnimationInterval);
                }
                this.currentAnimationInterval = setInterval(this.shrinkCursor.bind(this), this.animationUpdateDuration);
                break;
            case InputAction_1.InputType.UP:
                if (this.currentAnimationInterval !== -1) {
                    this.growQueued = true;
                }
                else {
                    this.growQueued = false;
                    this.currentAnimationInterval = setInterval(this.growCursor.bind(this), this.animationUpdateDuration);
                }
                break;
            case InputAction_1.InputType.CANCEL:
                break;
        }
    }
    /**
     * Shrinks the cursor to half of its original size over the animation duration set in the `constructor`.
     * @internal
     */
    shrinkCursor() {
        if (!this.enabled)
            return;
        let [newWidth, newHeight] = this.getDimensions(this.dotCursorElement);
        if (newWidth > this.cursorStartSize[0] / 2) {
            newWidth -= this.animationSpeed[0];
        }
        if (newHeight > this.cursorStartSize[1] / 2) {
            newHeight -= this.animationSpeed[1];
        }
        this.setCursorSize(newWidth, newHeight, this.dotCursorElement);
        if (newWidth <= this.cursorStartSize[0] / 2 && newHeight <= this.cursorStartSize[1] / 2) {
            clearInterval(this.currentAnimationInterval);
            newWidth = this.cursorStartSize[0] / 2;
            newHeight = this.cursorStartSize[1] / 2;
            this.setCursorSize(newWidth, newHeight, this.dotCursorElement);
            if (this.growQueued) {
                this.growQueued = false;
                this.currentAnimationInterval = setInterval(this.growCursor.bind(this), this.animationUpdateDuration);
            }
            else {
                this.currentAnimationInterval = -1;
            }
        }
    }
    /**
     * Grows the cursor to its original size the animation duration set in the `constructor`.
     * @internal
     */
    growCursor() {
        if (!this.enabled)
            return;
        let [newWidth, newHeight] = this.getDimensions(this.dotCursorElement);
        if (newWidth < this.cursorStartSize[0]) {
            newWidth += this.animationSpeed[0];
        }
        if (newHeight < this.cursorStartSize[1]) {
            newHeight += this.animationSpeed[1];
        }
        this.setCursorSize(newWidth, newHeight, this.dotCursorElement);
        if (newWidth >= this.cursorStartSize[0] && newHeight >= this.cursorStartSize[1]) {
            clearInterval(this.currentAnimationInterval);
            this.setCursorSize(this.cursorStartSize[0], this.cursorStartSize[1], this.dotCursorElement);
            this.currentAnimationInterval = -1;
            this.growQueued = false;
        }
    }
    setCursorSize(newWidth, newHeight, cursorToChange) {
        const [width, height] = this.getDimensions(cursorToChange);
        const deltaX = Math.round((width - newWidth) * 5) / 10;
        const deltaY = Math.round((height - newHeight) * 5) / 10;
        const cursorPosX = cursorToChange.offsetLeft + deltaX;
        const cursorPosY = cursorToChange.offsetTop + deltaY;
        cursorToChange.style.width = newWidth + 'px';
        cursorToChange.style.left = cursorPosX + 'px';
        cursorToChange.style.height = newHeight + 'px';
        cursorToChange.style.top = cursorPosY + 'px';
    }
    /**
     * Make the cursor visible. Fades over time.
     */
    showCursor() {
        this.shouldShow = true;
        if (!this.enabled)
            return;
        clearInterval(this.currentFadingInterval);
        this.currentFadingInterval = setInterval(this.fadeCursorIn.bind(this), this.animationUpdateDuration);
    }
    /**
     * Make the cursor invisible. Fades over time.
     */
    hideCursor() {
        this.shouldShow = false;
        if (parseFloat(this.dotCursorElement.style.opacity) !== 0) {
            clearInterval(this.currentFadingInterval);
            this.currentFadingInterval = setInterval(this.fadeCursorOut.bind(this), this.animationUpdateDuration);
        }
    }
    fadeCursorIn() {
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
    fadeCursorOut() {
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

/***/ 9080:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SVGCursor = void 0;
const InputAction_1 = __webpack_require__(9403);
const Utilities_1 = __webpack_require__(6593);
const TouchFreeEvents_1 = __webpack_require__(5961);
const TouchlessCursor_1 = __webpack_require__(1004);
/**
 * {@link TouchlessCursor} created with SVG elements.
 * @public
 */
class SVGCursor extends TouchlessCursor_1.TouchlessCursor {
    /**
     * Constructs a new cursor consisting of a central cursor and a ring.
     * @param ringSizeMultiplier - Optional multiplier to change the size of the cursor ring.
     * @param darkCursor - Optionally darken the cursor to provide better contrast on light colored UIs.
     */
    constructor(ringSizeMultiplier = 2, darkCursor = false) {
        super(undefined);
        this.xPositionAttribute = 'cx';
        this.yPositionAttribute = 'cy';
        this.isDarkCursor = false;
        this.cursorShowing = false;
        this.baseRadius = 15;
        this.baseDotBorderThickness = 2;
        this.baseRingThickness = 5;
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
        svgElement.id = 'svg-cursor';
        documentBody === null || documentBody === void 0 ? void 0 : documentBody.appendChild(svgElement);
        const svgRingElement = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        svgRingElement.classList.add('touchfree-cursor');
        svgRingElement.setAttribute('r', this.baseRadius.toString());
        svgRingElement.setAttribute('fill-opacity', '0');
        svgRingElement.setAttribute('stroke-width', this.baseRingThickness.toString());
        svgRingElement.setAttribute(this.xPositionAttribute, '100');
        svgRingElement.setAttribute(this.yPositionAttribute, '100');
        svgRingElement.style.filter = 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.7))';
        svgElement.appendChild(svgRingElement);
        svgRingElement.id = 'svg-cursor-ring';
        this.cursorRing = svgRingElement;
        const svgDotElement = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        svgDotElement.classList.add('touchfree-cursor');
        svgDotElement.setAttribute('r', this.baseRadius.toString());
        svgDotElement.setAttribute(this.xPositionAttribute, '100');
        svgDotElement.setAttribute(this.yPositionAttribute, '100');
        svgDotElement.setAttribute('opacity', '1');
        svgDotElement.setAttribute('stroke-width', this.baseDotBorderThickness.toString());
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
        this.resetToDefaultColors();
        this.ringSizeMultiplier = ringSizeMultiplier;
        this.baseRingSizeMultiplier = ringSizeMultiplier;
        (0, TouchFreeEvents_1.registerEventCallback)('handFound', this.showCursor.bind(this));
        (0, TouchFreeEvents_1.registerEventCallback)('handsLost', this.hideCursor.bind(this));
        (0, TouchFreeEvents_1.registerEventCallback)('handEntered', this.showCursor.bind(this));
        (0, TouchFreeEvents_1.registerEventCallback)('handExited', this.hideCursor.bind(this));
    }
    /**
     * Update the cursor position as well as the size of the ring based on {@link TouchFreeInputAction.ProgressToClick}.
     * @param inputAction - Input action to use when updating cursor
     * @internal
     */
    updateCursor(inputAction) {
        if (!this.shouldShow) {
            this.hideCursor();
            return;
        }
        const ringScaler = (0, Utilities_1.mapRangeToRange)(inputAction.ProgressToClick, 0, 1, this.ringSizeMultiplier, 1);
        this.cursorRing.setAttribute('opacity', inputAction.ProgressToClick.toString());
        const radius = Math.round(this.getCurrentCursorRadius() * ringScaler + this.getCurrentCursorRingWidth() / 2);
        this.cursorRing.setAttribute('r', radius.toString());
        let position = inputAction.CursorPosition;
        if (position) {
            position = [Math.round(position[0]), Math.round(position[1])];
            if (!this.cursorShowing && this.enabled) {
                this.showCursor();
            }
            this.cursorRing.setAttribute(this.xPositionAttribute, position[0].toString());
            this.cursorRing.setAttribute(this.yPositionAttribute, position[1].toString());
            if (this.cursor) {
                this.cursor.setAttribute(this.xPositionAttribute, position[0].toString());
                this.cursor.setAttribute(this.yPositionAttribute, position[1].toString());
            }
        }
        else {
            this.hideCursor();
        }
    }
    /**
     * Replaces the basic functionality of {@link TouchlessCursor}
     *
     * @remarks
     * Makes the cursor ring scale dynamically with {@link TouchFreeInputAction.ProgressToClick};
     * creates a 'shrink' animation when a {@link InputType.DOWN} event is received;
     * creates a 'grow' animation when a {@link InputType.UP} event is received.
     *
     * When a {@link InputType.CANCEL} event is received the cursor is hidden as it suggests the hand
     * has been lost. When hidden and any other event is received, the cursor is shown again.
     * @param inputData - Input action to handle this update
     * @internal
     */
    handleInputAction(inputData) {
        if (this.cursor) {
            switch (inputData.InputType) {
                case InputAction_1.InputType.MOVE:
                    this.updateCursor(inputData);
                    break;
                case InputAction_1.InputType.DOWN:
                    this.setCursorSize(0, this.cursorRing);
                    this.cursor.style.transform = 'scale(0.5)';
                    break;
                case InputAction_1.InputType.UP:
                    this.cursor.style.transform = 'scale(1)';
                    break;
                case InputAction_1.InputType.CANCEL:
                    break;
            }
        }
    }
    setCursorSize(newWidth, cursorToChange) {
        cursorToChange === null || cursorToChange === void 0 ? void 0 : cursorToChange.setAttribute('r', Math.round(newWidth).toString());
    }
    /**
     * Used to set the scale of the cursor
     * @param scale - Multiplier value
     */
    setCursorScale(scale) {
        const cursor = this.cursor;
        this.setCursorSize(this.baseRadius * scale, cursor);
        this.ringSizeMultiplier = this.baseRingSizeMultiplier + (scale - 1);
        cursor.setAttribute('stroke-width', Math.round(this.baseDotBorderThickness * scale).toString());
    }
    /**
     * Used to set the scale of the cursor's ring thickness
     * @param scale - Multiplier value
     */
    setRingThicknessScale(scale) {
        this.cursorRing.setAttribute('stroke-width', Math.round(this.baseRingThickness * scale).toString());
    }
    /**
     * Make the cursor visible. Fades over time.
     */
    showCursor() {
        this.shouldShow = true;
        if (this.enabled && !this.cursorShowing) {
            this.cursorShowing = true;
            this.setCursorOpacity(this.opacityOnHandsLost);
        }
    }
    /**
     * Make the cursor invisible. Fades over time.
     */
    hideCursor() {
        if (this.shouldShow) {
            // If opacity is NaN or 0 then set it to be 1
            this.opacityOnHandsLost = Number(this.cursorCanvas.style.opacity) || 1;
        }
        this.shouldShow = false;
        this.cursorShowing = false;
        this.setCursorOpacity(0);
        if (this.cursor) {
            this.cursor.style.transform = 'scale(1)';
        }
    }
    /**
     * Used to set the opacity of the cursor
     */
    setCursorOpacity(opacity) {
        this.cursorCanvas.style.opacity = opacity.toString();
    }
    /**
     * Used to set the rendering mode of the SVGCursor
     * @param optimise - set true to optimise for speed (will appear more aliased)
     */
    setCursorOptimise(optimise) {
        this.cursorCanvas.setAttribute('shape-rendering', optimise ? 'optimizeSpeed' : 'auto');
    }
    /**
     * Used to set the radius of the cursor
     */
    getCurrentCursorRadius() {
        var _a;
        const radius = (_a = this.cursor) === null || _a === void 0 ? void 0 : _a.getAttribute('r');
        return !radius ? 0 : parseFloat(radius);
    }
    /**
     * Used to set the width of the cursor ring
     */
    getCurrentCursorRingWidth() {
        const width = this.cursorRing.getAttribute('stroke-width');
        return !width ? 0 : parseFloat(width);
    }
    /**
     * Used to reset the SVGCursor to it's default styling
     */
    resetToDefaultColors() {
        var _a, _b;
        (_a = this.cursor) === null || _a === void 0 ? void 0 : _a.setAttribute('fill', this.isDarkCursor ? 'black' : 'white');
        (_b = this.cursor) === null || _b === void 0 ? void 0 : _b.removeAttribute('stroke');
        this.cursorRing.setAttribute('stroke', this.isDarkCursor ? 'black' : 'white');
    }
    /**
     * Used to reset the SVGCursor to it's default scale
     */
    resetToDefaultScale() {
        const cursor = this.cursor;
        this.setCursorSize(this.baseRadius, cursor);
        this.ringSizeMultiplier = this.baseRingSizeMultiplier;
        cursor.setAttribute('stroke-width', this.baseDotBorderThickness.toString());
        this.cursorRing.setAttribute('stroke-width', this.baseRingThickness.toString());
    }
    /**
     * Used to set a part of the SVGCursor to a specific color
     * @param cursorPart - enum to select which part of the cursor to color
     * @param color - color represented by a string
     */
    setColor(cursorPart, color) {
        var _a, _b;
        switch (cursorPart) {
            case 0 /* CursorPart.CENTER_FILL */:
                (_a = this.cursor) === null || _a === void 0 ? void 0 : _a.setAttribute('fill', color);
                return;
            case 1 /* CursorPart.RING_FILL */:
                this.cursorRing.setAttribute('stroke', color);
                return;
            case 2 /* CursorPart.CENTER_BORDER */:
                (_b = this.cursor) === null || _b === void 0 ? void 0 : _b.setAttribute('stroke', color);
                return;
        }
    }
}
exports.SVGCursor = SVGCursor;


/***/ }),

/***/ 1004:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TouchlessCursor = void 0;
const TouchFreeEvents_1 = __webpack_require__(5961);
/**
 * Base class for creating touchless cursors.
 *
 * @remarks
 * Override `handleInputAction` to react to {@link TouchFreeInputAction}s
 * @public
 */
class TouchlessCursor {
    /**
     * Registers the Cursor for updates via the `'transmitInputAction'` TouchFree event
     *
     * @remarks
     * If you intend to make use of `WebInputController`, make sure `cursor` has
     * the `touchfree-cursor` class. This prevents them from blocking other elements from
     * receiving events.
     * @param cursor - Cursor element
     */
    constructor(cursor) {
        /**
         * The opacity of the cursor when hands are lost
         */
        this.opacityOnHandsLost = 1;
        (0, TouchFreeEvents_1.registerEventCallback)('transmitInputAction', this.handleInputAction.bind(this));
        this.cursor = cursor;
        this.enabled = true;
        this.shouldShow = true;
    }
    /**
     * Sets the position of the cursor, should be run after `handleInputAction`.
     * @param inputAction - Input action to use when updating cursor
     */
    updateCursor(inputAction) {
        if (this.cursor) {
            let width = this.cursor.clientWidth;
            let height = this.cursor.clientHeight;
            if (this.cursor instanceof HTMLElement) {
                [width, height] = this.getDimensions(this.cursor);
            }
            this.cursor.style.left = inputAction.CursorPosition[0] - width / 2 + 'px';
            this.cursor.style.top = inputAction.CursorPosition[1] - height / 2 + 'px';
        }
    }
    /**
     * Returns the height and width of the cursor in px
     * @param cursor - cursor to get height off
     * @returns [cursor width, cursor height]
     */
    getDimensions(cursor) {
        if (cursor.style.width && cursor.style.height) {
            const getFloat = (dimension) => parseFloat(dimension.replace('px', ''));
            return [getFloat(cursor.style.width), getFloat(cursor.style.height)];
        }
        const newCursor = cursor;
        return [newCursor.width, newCursor.height];
    }
    /**
     * Invoked when new {@link TouchFreeInputAction}s are received.
     * Override to implement cursor behaviour.
     * @param inputAction - The latest input action received from TouchFree Service.
     */
    handleInputAction(inputAction) {
        this.updateCursor(inputAction);
    }
    /**
     * Make the cursor visible. Fades over time.
     */
    showCursor() {
        this.shouldShow = true;
        if (this.enabled) {
            this.setCursorOpacity(this.opacityOnHandsLost);
        }
    }
    /**
     * Make the cursor invisible. Fades over time.
     */
    hideCursor() {
        var _a;
        if (this.shouldShow) {
            // If opacity is NaN or 0 then set it to be 1
            this.opacityOnHandsLost = Number((_a = this.cursor) === null || _a === void 0 ? void 0 : _a.style.opacity) || 1;
        }
        this.shouldShow = false;
        this.setCursorOpacity(0);
    }
    /**
     * Used to enable the cursor so that it will show if hands are present
     */
    enableCursor() {
        this.enabled = true;
        if (this.shouldShow) {
            this.opacityOnHandsLost = 1;
            this.showCursor();
        }
    }
    /**
     * Used to disable the cursor so that it will never show
     */
    disableCursor() {
        this.enabled = false;
        const shouldShowOnEnable = this.shouldShow;
        if (shouldShowOnEnable) {
            this.hideCursor();
        }
        this.shouldShow = shouldShowOnEnable;
    }
    /**
     * Used to set the opacity of the cursor
     */
    setCursorOpacity(opacity) {
        if (this.cursor) {
            this.cursor.style.opacity = opacity.toString();
        }
    }
}
exports.TouchlessCursor = TouchlessCursor;


/***/ }),

/***/ 3241:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HandDataManager = void 0;
/**
 * Handles dispatching `"transmitHandData"` events from received hand frame messages
 *
 * @internal
 */
class HandDataManager extends EventTarget {
    /**
     * Getter for the global instance. Will initialize if not initialized already.
     */
    static get instance() {
        if (HandDataManager.internalInstance === undefined) {
            HandDataManager.internalInstance = new HandDataManager();
        }
        return HandDataManager.internalInstance;
    }
    /**
     * Handles a buffer on hand frame data and dispatches a `"transmitHandData"` event
     * @param data - Buffer of hand frame data
     */
    static handleHandFrame(data) {
        const currentTimeStamp = Date.now();
        if (!HandDataManager.lastFrame ||
            HandDataManager.lastFrame + HandDataManager.maximumFrameFrequencyMs < currentTimeStamp) {
            const rawHandsEvent = new CustomEvent('transmitHandData', {
                detail: data,
            });
            HandDataManager.instance.dispatchEvent(rawHandsEvent);
            HandDataManager.lastFrame = currentTimeStamp;
        }
    }
}
exports.HandDataManager = HandDataManager;
/** Global static for limiting how many frames are handled */
HandDataManager.maximumFrameFrequencyMs = 50;
/** Global state for timestamp of last handled hand frame */
HandDataManager.lastFrame = undefined;


/***/ }),

/***/ 6828:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RawBone = exports.FingerType = exports.RawFinger = exports.RawHand = exports.HandFrame = void 0;
/**
 * A frame of hand data
 * @internal
 */
class HandFrame {
    constructor() {
        /** Array of {@link RawHand | hand data} */
        this.Hands = [];
    }
}
exports.HandFrame = HandFrame;
/**
 * The raw position data for a hand
 * @internal
 */
class RawHand {
    constructor() {
        /** Flag representing if hand is the current primary hand */
        this.CurrentPrimary = false;
        /** Array of {@link RawFinger | fingers} */
        this.Fingers = [];
        /** Width of wrist */
        this.WristWidth = 0;
        /** Position of wrist */
        this.WristPosition = { X: 0, Y: 0, Z: 0 };
    }
}
exports.RawHand = RawHand;
/**
 * The raw position data for a finger of a hand
 * @internal
 */
class RawFinger {
    constructor() {
        /** Array of {@link RawBone | Bones}  */
        this.Bones = [];
        /** Type of finger. See {@link FingerType} */
        this.Type = FingerType.TYPE_UNKNOWN;
    }
}
exports.RawFinger = RawFinger;
/**
 * Enumeration of fingers on a hand
 * @internal
 */
var FingerType;
(function (FingerType) {
    /** Thumb */
    FingerType[FingerType["TYPE_THUMB"] = 0] = "TYPE_THUMB";
    /** Index Finger */
    FingerType[FingerType["TYPE_INDEX"] = 1] = "TYPE_INDEX";
    /** Middle Finger */
    FingerType[FingerType["TYPE_MIDDLE"] = 2] = "TYPE_MIDDLE";
    /** Ring Finger */
    FingerType[FingerType["TYPE_RING"] = 3] = "TYPE_RING";
    /** Pinky Finger */
    FingerType[FingerType["TYPE_PINKY"] = 4] = "TYPE_PINKY";
    /** Unknown Finger */
    FingerType[FingerType["TYPE_UNKNOWN"] = -1] = "TYPE_UNKNOWN";
})(FingerType = exports.FingerType || (exports.FingerType = {}));
/**
 * The raw position data for a bone in a finger
 * @internal
 */
class RawBone {
    constructor() {
        /** Start joint position of the finger bone */
        this.PrevJoint = { X: 0, Y: 0, Z: 0 };
        /** End joint position of the finger bone */
        this.NextJoint = { X: 0, Y: 0, Z: 0 };
    }
}
exports.RawBone = RawBone;


/***/ }),

/***/ 7607:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.init = void 0;
const ConnectionApi_1 = __webpack_require__(2158);
const CurrentCursor_1 = __webpack_require__(4773);
const SvgCursor_1 = __webpack_require__(9080);
const CurrentInputController_1 = __webpack_require__(4366);
const WebInputController_1 = __webpack_require__(5570);
/**
 * Initializes TouchFree - must be called before any functionality requiring a TouchFree service connection.
 *
 * @param tfInitParams - Optional extra initialization parameters
 * @public
 */
function init(tfInitParams) {
    (0, ConnectionApi_1.connect)(tfInitParams === null || tfInitParams === void 0 ? void 0 : tfInitParams.address);
    (0, CurrentInputController_1.setInputController)(new WebInputController_1.WebInputController());
    if (tfInitParams === undefined) {
        (0, CurrentCursor_1.setCurrentCursor)(new SvgCursor_1.SVGCursor());
    }
    else {
        if (tfInitParams.initialiseCursor === undefined || tfInitParams.initialiseCursor === true) {
            (0, CurrentCursor_1.setCurrentCursor)(new SvgCursor_1.SVGCursor());
        }
    }
}
exports.init = init;


/***/ }),

/***/ 9403:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InteractionType = exports.InputType = exports.HandType = exports.HandChirality = void 0;
/**
 * a.k.a. Handedness
 * @public
 */
var HandChirality;
(function (HandChirality) {
    /** Left hand */
    HandChirality[HandChirality["LEFT"] = 0] = "LEFT";
    /** Right hand */
    HandChirality[HandChirality["RIGHT"] = 1] = "RIGHT";
})(HandChirality = exports.HandChirality || (exports.HandChirality = {}));
/**
 * Type of hand in order they were recognized
 * @public
 */
var HandType;
(function (HandType) {
    /** First hand that was found */
    HandType[HandType["PRIMARY"] = 0] = "PRIMARY";
    /** Second hand that was found */
    HandType[HandType["SECONDARY"] = 1] = "SECONDARY";
})(HandType = exports.HandType || (exports.HandType = {}));
/**
 * Type of an inputAction
 * @public
 */
var InputType;
(function (InputType) {
    /** Used to be ignored by the input system but to still receive information such as distance to screen */
    InputType[InputType["NONE"] = 0] = "NONE";
    /** Used to cancel the current input if an issue occurs. Particularly when a DOWN has happened before an UP */
    InputType[InputType["CANCEL"] = 1] = "CANCEL";
    /** Used to begin a 'Touch' or a 'Drag' */
    InputType[InputType["DOWN"] = 2] = "DOWN";
    /** Used to move a cursor or to perform a 'Drag' after a DOWN */
    InputType[InputType["MOVE"] = 3] = "MOVE";
    /** Used to complete a 'Touch' or a 'Drag' */
    InputType[InputType["UP"] = 4] = "UP";
})(InputType = exports.InputType || (exports.InputType = {}));
/**
 * TouchFree interaction type
 * @public
 */
var InteractionType;
(function (InteractionType) {
    /**
     * The user must perform a GRAB gesture to 'Touch' by making a fist
     * @internal
     */
    InteractionType[InteractionType["GRAB"] = 0] = "GRAB";
    /** The user must perform a HOVER gesture to 'Touch' by holding their hand still for a fixed time */
    InteractionType[InteractionType["HOVER"] = 1] = "HOVER";
    /** The user must perform a PUSH gesture to 'Touch' by pushing their hand toward the screen */
    InteractionType[InteractionType["PUSH"] = 2] = "PUSH";
    /** The user must perform a move past a plane in space to 'Touch' */
    InteractionType[InteractionType["TOUCHPLANE"] = 3] = "TOUCHPLANE";
    /**
     * The user must perform a SWIPE gesture to 'Touch' by moving their hand quickly up, down, left or right
     * @internal
     */
    InteractionType[InteractionType["VELOCITYSWIPE"] = 4] = "VELOCITYSWIPE";
})(InteractionType = exports.InteractionType || (exports.InteractionType = {}));


/***/ }),

/***/ 7483:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InputActionManager = void 0;
const TouchFreeEvents_1 = __webpack_require__(5961);
/**
 * Manages all `TouchFreeInputAction` events, dispatching a `transmitInputAction` event for each action received.
 * @remarks
 * Runs `inputAction` data through all `InputActionPlugins` before dispatching.
 * Also dispatches a `transmitInputActionRaw` event with the `inputAction` data unmodified by any plugins.
 * @internal
 */
class InputActionManager extends EventTarget {
    /**
     * Getter for the global instance. Will initialize if not initialized already.
     */
    static get instance() {
        if (InputActionManager.internalInstance === undefined) {
            InputActionManager.internalInstance = new InputActionManager();
        }
        return InputActionManager.internalInstance;
    }
    /**
     * Overwrites all plugins with a new array. Plugins will be run in order of the array.
     * @param plugins - Plugin array to assign
     */
    static setPlugins(plugins) {
        this.plugins = plugins;
    }
    /**
     * Handles an `inputAction`, running it through all plugins and dispatching a `"transmitInputAction"` event
     * @param action - inputAction to handle
     * @internal
     */
    static handleInputAction(action) {
        (0, TouchFreeEvents_1.dispatchEventCallback)('transmitInputActionRaw', action);
        let newAction = action;
        if (this.plugins !== null) {
            for (let i = 0; i < this.plugins.length; i++) {
                const modifiedAction = this.plugins[i].runPlugin(action);
                if (modifiedAction !== null) {
                    newAction = modifiedAction;
                }
                else {
                    // The plugin has cancelled the inputAction entirely
                    return;
                }
            }
        }
        // Wrapping the function in a timeout of 0 seconds allows the dispatch to be asynchronous
        setTimeout(() => {
            (0, TouchFreeEvents_1.dispatchEventCallback)('transmitInputAction', newAction);
        }, 0);
    }
}
exports.InputActionManager = InputActionManager;
/**
 * Static global array of `InputActionPlugin`
 */
InputActionManager.plugins = null;


/***/ }),

/***/ 6649:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InputActionPlugin = void 0;
/**
 * Base class for input action plugins
 * @remarks
 * The `InputActionManager` runs each plugin upon receiving a message
 * from the service before dispatching an inputAction event.
 * Input action plugins invoke a `"inputActionOutput"` event on themselves
 * for subscribers to listen to if the results of a specific plugin is required.
 * @internal
 */
class InputActionPlugin extends EventTarget {
    /**
     * Run this plugin, modifying the `inputAction` and dispatching an `"inputActionOutput"` event from this plugin
     * @param inputAction - Input action input
     * @returns Modified input action
     */
    runPlugin(inputAction) {
        const modifiedInputAction = this.modifyInputAction(inputAction);
        if (modifiedInputAction != null) {
            this.transmitInputAction(modifiedInputAction);
        }
        return modifiedInputAction;
    }
    /**
     * Proxy function for derived classes to modify input actions before they are dispatched.
     *
     * @internal
     */
    modifyInputAction(inputAction) {
        return inputAction;
    }
    /**
     * For derived classes to invoke the `inputActionOutput` event.
     * @param inputAction - inputAction state to dispatch event with
     *
     * @internal
     */
    transmitInputAction(inputAction) {
        const inputActionEvent = new CustomEvent('inputActionOutput', { detail: inputAction });
        this.dispatchEvent(inputActionEvent);
    }
}
exports.InputActionPlugin = InputActionPlugin;


/***/ }),

/***/ 9775:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseInputController = void 0;
const InputAction_1 = __webpack_require__(9403);
const TouchFreeEvents_1 = __webpack_require__(5961);
/**
 * Converts {@link TouchFreeInputAction | TouchFreeInputActions} into inputs for specific environments.
 *
 * @remarks
 * This base class handles subscribing to the TouchFree `'transmitInputAction'` event.
 * Override {@link handleInputAction} in subclasses to implement specific behaviour.
 * @internal
 */
class BaseInputController {
    /**
     * Subscribes to the TouchFree `'transmitInputAction'` event, invoke {@link handleInputAction}
     * with {@link TouchFreeInputAction | TouchFreeInputActions} as they are received.
     *
     * @remarks
     * Calling this constructor more than once without {@link disconnect}ing the previous
     * is a no-op - only one `InputController` can be initialized at one time.
     */
    constructor() {
        if (!BaseInputController.instantiated) {
            BaseInputController.instantiated = true;
            this.handleInputActionCallback = (0, TouchFreeEvents_1.registerEventCallback)('transmitInputAction', this.handleInputAction.bind(this));
        }
    }
    /**
     * Override to implement InputController specific behaviour for
     * {@link TouchFreeInputAction  | TouchFreeInputActions}
     * @param inputData - The latest input action received from TouchFree Service.
     */
    handleInputAction(inputData) {
        switch (inputData.InputType) {
            case InputAction_1.InputType.MOVE:
                break;
            case InputAction_1.InputType.DOWN:
                break;
            case InputAction_1.InputType.UP:
                break;
            case InputAction_1.InputType.CANCEL:
                break;
        }
    }
    /**
     * Un-registers the event callback and resets initialization state.
     *
     * @remarks
     * Must be called before constructing another `InputController` when
     * switching. Only one can be active at a time.
     */
    disconnect() {
        var _a;
        (_a = this.handleInputActionCallback) === null || _a === void 0 ? void 0 : _a.unregisterEventCallback();
        BaseInputController.instantiated = false;
    }
}
exports.BaseInputController = BaseInputController;
BaseInputController.instantiated = false;


/***/ }),

/***/ 4366:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setInputController = exports.getInputController = void 0;
/**
 * Global input controller initialized by {@link init}
 */
let globalInputController;
/** @internal */
const getInputController = () => globalInputController;
exports.getInputController = getInputController;
/** @internal */
const setInputController = (inputController) => (globalInputController = inputController);
exports.setInputController = setInputController;


/***/ }),

/***/ 5570:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebInputController = void 0;
const InputAction_1 = __webpack_require__(9403);
const TouchFreeEvents_1 = __webpack_require__(5961);
const BaseInputController_1 = __webpack_require__(9775);
/**
 * Provides web PointerEvents from incoming {@link TouchFreeInputAction}s.
 *
 * @remarks
 * If you are using cursors with this InputController, ensure they have the "touchfree-cursor"
 * class. This allows this class to ignore them when determining which elements should receive
 * new pointer events. If you don't do this, none of the events transmitted here are guaranteed
 * to make it to their intended targets, as they will be captured by the cursor.
 * @internal
 */
class WebInputController extends BaseInputController_1.BaseInputController {
    /**
     * Sets up the basic event properties for all events transmitted from this InputController.
     */
    constructor() {
        super();
        /**
         * Can be used to enable/disable the transmission of "pointerenter"/"pointerleave" events
         * Disable this for a minor performance boost, at the cost of no longer sending those events
         * to the UI.
         */
        this.enterLeaveEnabled = true;
        this.lastHoveredElement = null;
        this.pointerId = 0;
        this.elementsOnDown = null;
        this.scrollElementsOnDown = null;
        this.lastPosition = null;
        this.scrollDirection = undefined;
        this.elementToScroll = undefined;
        /**
         *  Any element with this class name in its css class list will be ignored when trying to find
         * the correct element for the WebInputController to scroll
         */
        this.NO_SCROLL_CLASS_NAME = 'touchfree-no-scroll';
        /**
         * Gets the element that should have scrolling applied to it
         *
         * @remarks
         * Any elements with the {@link noScrollClassName} class applied will be ignored when
         * finding which element to scroll
         */
        this.getElementToScroll = (scrollValidation, parentScrollValidation) => {
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
                    const parentIsNoScroll = parentAsHtmlElement.classList.contains(this.NO_SCROLL_CLASS_NAME);
                    const elementIsNoScroll = elementToCheckScroll.classList.contains(this.NO_SCROLL_CLASS_NAME);
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
    /**
     * Handles the transmission of "pointerout"/"pointerover"/"pointermove" events to appropriate
     * elements, based on the {@link element} being hovered over this frame, and the element
     * hovered last frame.
     * Will also optionally send "pointerenter"/"pointerleave" events if enabled via
     * {@link enterLeaveEnabled}
     * @param element - The DOM element under the cursor this frame
     * @internal
     */
    handleMove(element) {
        if (element !== this.lastHoveredElement) {
            // Handle sending pointerover/pointerout to the individual elements
            // These events bubble, so we only have to dispatch them to the element directly under
            // the cursor
            if (this.lastHoveredElement !== null) {
                const outEvent = new PointerEvent('pointerout', this.activeEventProps);
                this.lastHoveredElement.dispatchEvent(outEvent);
            }
            if (element !== null) {
                const overEvent = new PointerEvent('pointerover', this.activeEventProps);
                element.dispatchEvent(overEvent);
            }
            if (this.enterLeaveEnabled) {
                this.handleEnterLeaveBehaviour(element);
            }
        }
        const moveEvent = new PointerEvent('pointermove', this.activeEventProps);
        element === null || element === void 0 ? void 0 : element.dispatchEvent(moveEvent);
        this.lastHoveredElement = element;
    }
    /**
     * Emits Pointer events (e.g. pointermove/pointerdown) to the objects at a {@link TouchFreeInputAction}s location.
     *
     * @remarks
     * Which events are emitted is affected by {@link enterLeaveEnabled}.
     *
     * Sends the following events by default:
     *
     *     - pointermove
     *     - pointerdown
     *     - pointerup
     *     - pointerover
     *     - pointerout
     *     - pointerenter
     *     - pointerleave
     * @param inputData - The latest {@link TouchFreeInputAction} from the Service
     * @internal
     */
    handleInputAction(inputData) {
        var _a;
        super.handleInputAction(inputData);
        const elementsAtPoint = document.elementsFromPoint(inputData.CursorPosition[0], inputData.CursorPosition[1]);
        const elementAtPos = this.getTopNonCursorElement(elementsAtPoint);
        this.activeEventProps.clientX = inputData.CursorPosition[0];
        this.activeEventProps.clientY = inputData.CursorPosition[1];
        if (elementAtPos !== null) {
            (0, TouchFreeEvents_1.dispatchEventCallback)('inputAction', inputData);
        }
        switch (inputData.InputType) {
            case InputAction_1.InputType.CANCEL: {
                this.resetScrollData();
                const cancelEvent = new PointerEvent('pointercancel', this.activeEventProps);
                const outEvent = new PointerEvent('pointerout', this.activeEventProps);
                if (this.lastHoveredElement !== null) {
                    this.lastHoveredElement.dispatchEvent(cancelEvent);
                    this.lastHoveredElement.dispatchEvent(outEvent);
                    this.lastHoveredElement = null;
                }
                const elementOnDown = this.getTopNonCursorElement(this.elementsOnDown);
                if (elementOnDown) {
                    elementOnDown.dispatchEvent(cancelEvent);
                    elementOnDown.dispatchEvent(outEvent);
                }
                if (elementAtPos !== null) {
                    const parentTree = this.getOrderedParents(elementAtPos);
                    parentTree.forEach((parent) => {
                        if (parent !== null) {
                            parent.dispatchEvent(cancelEvent);
                            parent.dispatchEvent(outEvent);
                        }
                    });
                }
                break;
            }
            case InputAction_1.InputType.MOVE:
                this.handleMove(elementAtPos);
                this.handleScroll(inputData.CursorPosition);
                break;
            case InputAction_1.InputType.DOWN: {
                this.resetScrollData();
                this.elementsOnDown = this.clickableElementsAtPosition(elementsAtPoint);
                this.scrollElementsOnDown = this.elementsOnDown.filter((e) => !e.classList.contains(this.NO_SCROLL_CLASS_NAME));
                this.lastPosition = inputData.CursorPosition;
                const downEvent = new PointerEvent('pointerdown', this.activeEventProps);
                this.dispatchToTarget(downEvent, elementAtPos);
                break;
            }
            case InputAction_1.InputType.UP: {
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
                this.resetScrollData();
                const upEvent = new PointerEvent('pointerup', this.activeEventProps);
                this.dispatchToTarget(upEvent, elementAtPos);
                break;
            }
        }
    }
    clickableElementsAtPosition(elements) {
        return (elements !== null && elements !== void 0 ? elements : [])
            .map((e) => e)
            .filter((e) => e && !e.classList.contains('touchfreecursor') && !e.classList.contains('touchfree-cursor'));
    }
    /** Clears information about the current scroll */
    resetScrollData() {
        this.scrollElementsOnDown = null;
        this.scrollDirection = undefined;
        this.elementToScroll = undefined;
    }
    /** Applies scrolling to any elements that should be scrolled */
    handleScroll(position) {
        if (this.scrollElementsOnDown && this.lastPosition) {
            const changeInPositionX = this.lastPosition[0] - position[0];
            const changeInPositionY = this.lastPosition[1] - position[1];
            if (!this.scrollDirection && (Math.abs(changeInPositionX) > 5 || Math.abs(changeInPositionY) > 5)) {
                if (Math.abs(changeInPositionX) > Math.abs(changeInPositionY)) {
                    this.scrollDirection = changeInPositionX > 0 ? ScrollDirection.RIGHT : ScrollDirection.LEFT;
                }
                else {
                    this.scrollDirection = changeInPositionY > 0 ? ScrollDirection.DOWN : ScrollDirection.UP;
                }
            }
            this.lastPosition = position;
            if (changeInPositionY > 0 &&
                (this.scrollDirection === undefined || this.scrollDirection === ScrollDirection.DOWN)) {
                const element = this.getElementToScroll((e) => e.scrollHeight > e.clientHeight && e.scrollTop + e.clientHeight < e.scrollHeight - 1, (e, p) => e.offsetHeight === p.offsetHeight && e.scrollHeight === p.scrollHeight);
                if (element) {
                    this.elementToScroll = element;
                    element.scrollTop = Math.min(element.scrollHeight - element.clientHeight, element.scrollTop + changeInPositionY);
                }
            }
            if (changeInPositionY < 0 &&
                (this.scrollDirection === undefined || this.scrollDirection === ScrollDirection.UP)) {
                const element = this.getElementToScroll((e) => e.scrollHeight > e.clientHeight && e.scrollTop > 0, (e, p) => e.offsetHeight === p.offsetHeight && e.scrollHeight === p.scrollHeight);
                if (element) {
                    this.elementToScroll = element;
                    element.scrollTop = Math.max(0, element.scrollTop + changeInPositionY);
                }
            }
            if (changeInPositionX > 0 &&
                (this.scrollDirection === undefined || this.scrollDirection === ScrollDirection.RIGHT)) {
                const element = this.getElementToScroll((e) => e.scrollWidth > e.clientWidth && e.scrollLeft + e.clientWidth < e.scrollWidth, (e, p) => e.offsetWidth === p.offsetWidth && e.scrollWidth === p.scrollWidth);
                if (element) {
                    this.elementToScroll = element;
                    element.scrollLeft = Math.min(element.scrollWidth - element.clientWidth, element.scrollLeft + changeInPositionX);
                }
            }
            if (changeInPositionX < 0 &&
                (this.scrollDirection === undefined || this.scrollDirection === ScrollDirection.LEFT)) {
                const element = this.getElementToScroll((e) => e.scrollWidth > e.clientWidth && e.scrollLeft > 0, (e, p) => e.offsetWidth === p.offsetWidth && e.scrollWidth === p.scrollWidth);
                if (element) {
                    this.elementToScroll = element;
                    element.scrollLeft = Math.max(0, element.scrollLeft + changeInPositionX);
                }
            }
        }
    }
    /**
     * Gets the stack of elements (topmost-bottommost) at this position and return the first non-
     * cursor element. Depends on all cursor elements being branded with the "cursor" class.
     * @param elementsAtPos - Elements at the position to check
     * @returns First non-cursor element or null if none found
     */
    getTopNonCursorElement(elementsAtPos) {
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
    /**
     * Handle sending pointerleave/pointerenter events to the parent stacks.
     * These events do not bubble, in order to deliver expected behaviour we must consider
     * the entire stack of elements above our current target in the document tree
     * @param element - Element to handle
     */
    handleEnterLeaveBehaviour(element) {
        const oldParents = this.getOrderedParents(this.lastHoveredElement);
        const newParents = this.getOrderedParents(element);
        const highestCommonIndex = this.getCommonAncestorIndex(oldParents, newParents);
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
    /**
     * Collects the stack of parent nodes, ordered from highest (document body) to lowest
     * (the node provided)
     * @param node - Lowest node in the stack
     * @returns Parent nodes until the provided node
     */
    getOrderedParents(node) {
        const parentStack = [node];
        for (; node; node = node.parentNode) {
            parentStack.unshift(node);
        }
        return parentStack;
    }
    /**
     * Takes two ordered arrays of Nodes (as produced by {@link GetOrderedParents}) and identifies the
     * lowest common ancestor of the two sets. Used in {@link handleMove} for identifying the events to send
     * @param oldParents - First stack of parents
     * @param newParents - Second stack of parents
     * @returns Index of lowest common ancestor between the two stacks
     */
    getCommonAncestorIndex(oldParents, newParents) {
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
    /**
     * Checks if the target element is null and correctly dispatches the provided event to the
     * element or document body appropriately
     * @param event - Event to dispatch
     * @param target - Element to dispatch event on if not null
     */
    dispatchToTarget(event, target) {
        if (target !== null) {
            target.dispatchEvent(event);
        }
        else {
            document.dispatchEvent(event);
        }
    }
}
exports.WebInputController = WebInputController;
/**
 * The directions that a scroll can be in
 * @internal
 */
var ScrollDirection;
(function (ScrollDirection) {
    ScrollDirection[ScrollDirection["UP"] = 0] = "UP";
    ScrollDirection[ScrollDirection["DOWN"] = 1] = "DOWN";
    ScrollDirection[ScrollDirection["LEFT"] = 2] = "LEFT";
    ScrollDirection[ScrollDirection["RIGHT"] = 3] = "RIGHT";
})(ScrollDirection || (ScrollDirection = {}));


/***/ }),

/***/ 6593:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mapRangeToRange = void 0;
/**
 * Map value from one range to the equivalent value within a new range
 * @param value - Value to map
 * @param oldMin - original range's minimum
 * @param oldMax - original range's maximum
 * @param newMin - new range's minimum
 * @param newMax - new range's maximum
 *
 * @example
 * ```
 * mapRangeToRange(0.5, 0, 1, 0, 8) // returns 4
 * ```
 * @public
 */
function mapRangeToRange(value, oldMin, oldMax, newMin, newMax) {
    const oldRange = oldMax - oldMin;
    let newValue;
    if (oldRange === 0) {
        newValue = newMin;
    }
    else {
        const newRange = newMax - newMin;
        newValue = ((value - oldMin) * newRange) / oldRange + newMin;
    }
    return newValue;
}
exports.mapRangeToRange = mapRangeToRange;


/***/ }),

/***/ 1991:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 5961:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dispatchEventCallback = exports.registerEventCallback = void 0;
const ConnectionApi_1 = __webpack_require__(2158);
const touchFreeEventTarget = new EventTarget();
/**
 * Registers a callback function to be called when a specific event occurs
 *
 * @param event - The event to register a callback to. See {@link TouchFreeEvent}
 * @param callback - The callback to register. Callback signature depends on event being registered.
 * See {@link TouchFreeEventSignatures}
 * @returns An {@link TouchFreeEventHandle} that can be used to unregister the callback
 *
 * @public
 */
function registerEventCallback(event, callback) {
    const eventImpl = eventImplementations()[event];
    const callbackImpl = eventImpl.withCallback(callback);
    const listener = callbackImpl.listener;
    return callbackImpl.registerEventFunc(event, listener);
}
exports.registerEventCallback = registerEventCallback;
/**
 * Dispatches an event of the specific type with arguments if the event requires any.
 *
 * @remarks
 * For details of events and their expected arguments see {@link registerEventCallback}
 *
 * @param eventType - The event to register a callback to. See {@link TouchFreeEvent}
 * @param args - Arguments for the event. Depends on the event being dispatched. See {@link TouchFreeEventSignatures}
 *
 * @public
 */
function dispatchEventCallback(eventType, ...args) {
    let event;
    if (args.length === 0) {
        event = new Event(eventType);
    }
    else {
        event = new CustomEvent(eventType, { detail: args[0] });
    }
    touchFreeEventTarget.dispatchEvent(event);
}
exports.dispatchEventCallback = dispatchEventCallback;
/**
 * Turns a callback with an argument into a {@link CustomEvent} Event Listener
 *
 * @param callback - The callback to wrap
 * @returns EventListener with the wrapper callback
 */
function makeCustomEventWrapper(callback) {
    return ((evt) => {
        callback(evt.detail);
    });
}
/**
 * Default implementation of RegisterEvent
 */
const defaultRegisterEventFunc = (eventType, listener) => {
    touchFreeEventTarget.addEventListener(eventType, listener);
    return { unregisterEventCallback: () => touchFreeEventTarget.removeEventListener(eventType, listener) };
};
/**
 * Backing field to cache object creation
 */
let eventImplementationsBackingField;
/**
 * Implementation details for all events
 *
 * @remarks
 * Any new events added to TouchFreeEvent require a new entry here to function
 *
 * @returns A function that returns all event implementations
 */
function eventImplementations() {
    return (eventImplementationsBackingField !== null && eventImplementationsBackingField !== void 0 ? eventImplementationsBackingField : (eventImplementationsBackingField = {
        onConnected: {
            withCallback: (callback) => ({
                listener: callback,
                registerEventFunc: defaultRegisterEventFunc,
            }),
        },
        whenConnected: {
            withCallback: (callback) => ({
                listener: callback,
                registerEventFunc: (_eventType, _listener) => {
                    // If we're already connected then run the callback
                    if ((0, ConnectionApi_1.isConnected)()) {
                        callback();
                    }
                    // Piggyback onConnected
                    return registerEventCallback('onConnected', callback);
                },
            }),
        },
        onServiceStatusChange: {
            withCallback: (callback) => ({
                listener: makeCustomEventWrapper(callback),
                registerEventFunc: defaultRegisterEventFunc,
            }),
        },
        onTrackingServiceStateChange: {
            withCallback: (callback) => ({
                listener: makeCustomEventWrapper(callback),
                registerEventFunc: defaultRegisterEventFunc,
            }),
        },
        handFound: {
            withCallback: (callback) => ({
                listener: callback,
                registerEventFunc: defaultRegisterEventFunc,
            }),
        },
        handsLost: {
            withCallback: (callback) => ({
                listener: callback,
                registerEventFunc: defaultRegisterEventFunc,
            }),
        },
        inputAction: {
            withCallback: (callback) => ({
                listener: makeCustomEventWrapper(callback),
                registerEventFunc: defaultRegisterEventFunc,
            }),
        },
        transmitHandData: {
            withCallback: (callback) => ({
                listener: makeCustomEventWrapper(callback),
                registerEventFunc: defaultRegisterEventFunc,
            }),
        },
        transmitInputAction: {
            withCallback: (callback) => ({
                listener: makeCustomEventWrapper(callback),
                registerEventFunc: defaultRegisterEventFunc,
            }),
        },
        transmitInputActionRaw: {
            withCallback: (callback) => ({
                listener: makeCustomEventWrapper(callback),
                registerEventFunc: defaultRegisterEventFunc,
            }),
        },
        handEntered: {
            withCallback: (callback) => ({
                listener: callback,
                registerEventFunc: defaultRegisterEventFunc,
            }),
        },
        handExited: {
            withCallback: (callback) => ({
                listener: callback,
                registerEventFunc: defaultRegisterEventFunc,
            }),
        },
    }));
}


/***/ }),

/***/ 2178:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.requestTrackingChange = exports.requestTrackingState = void 0;
const ConnectionApi_1 = __webpack_require__(2158);
/**
 * Request a {@link TrackingState} representing the current state of the tracking software
 * @remarks
 * @param callback - Callback to call with {@link TrackingState}
 *
 * @internal
 */
function requestTrackingState(callback) {
    var _a;
    if (!callback) {
        console.error('Config file state request failed. This call requires a callback.');
        return;
    }
    (_a = (0, ConnectionApi_1.getServiceConnection)()) === null || _a === void 0 ? void 0 : _a.requestTrackingState((trackingState) => {
        callback(convertResponseToState(trackingState));
    });
}
exports.requestTrackingState = requestTrackingState;
/**
 * Requests a modification to the tracking software's settings.
 * @param state - State to request. Options not provided within the object will not be modified.
 * @param callback - Optional callback if you require confirmation that settings were changed correctly.
 *
 * @internal
 */
function requestTrackingChange(state, callback) {
    var _a;
    (_a = (0, ConnectionApi_1.getServiceConnection)()) === null || _a === void 0 ? void 0 : _a.requestTrackingChange(state, (trackingState) => {
        if (callback) {
            callback(convertResponseToState(trackingState));
        }
    });
}
exports.requestTrackingChange = requestTrackingChange;
/**
 * Converts a {@link TrackingStateResponse} to a partial {@link TrackingState} to make the
 * response easier to consume.
 * @param response - Response to convert
 * @returns Converted Partial {@link TrackingState}
 */
function convertResponseToState(response) {
    const newResponse = {};
    if (response.mask !== undefined && response.mask !== null) {
        newResponse.mask = response.mask.content;
    }
    if (response.cameraReversed !== undefined && response.cameraReversed !== null) {
        newResponse.cameraReversed = response.cameraReversed.content;
    }
    if (response.allowImages !== undefined && response.allowImages !== null) {
        newResponse.allowImages = response.allowImages.content;
    }
    if (response.analyticsEnabled !== undefined && response.analyticsEnabled !== null) {
        newResponse.analyticsEnabled = response.analyticsEnabled.content;
    }
    return newResponse;
}


/***/ }),

/***/ 5152:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 5004:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * This index should include exports for everything in the library, including
 * internal types and functions. This single module can be consumed for access
 * to everything in the library.
 *
 * The whole library is in this internal folder to discourage direct usage of
 * modules via package import - using internals is an explicit decision. The
 * public API is controlled by the module in the directory above.
 */
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(605), exports);
__exportStar(__webpack_require__(3829), exports);
__exportStar(__webpack_require__(7764), exports);
__exportStar(__webpack_require__(73), exports);
__exportStar(__webpack_require__(6875), exports);
__exportStar(__webpack_require__(4841), exports);
__exportStar(__webpack_require__(2158), exports);
__exportStar(__webpack_require__(7164), exports);
__exportStar(__webpack_require__(5838), exports);
__exportStar(__webpack_require__(1330), exports);
__exportStar(__webpack_require__(9831), exports);
__exportStar(__webpack_require__(1091), exports);
__exportStar(__webpack_require__(255), exports);
__exportStar(__webpack_require__(2574), exports);
__exportStar(__webpack_require__(1902), exports);
__exportStar(__webpack_require__(5643), exports);
__exportStar(__webpack_require__(6167), exports);
__exportStar(__webpack_require__(940), exports);
__exportStar(__webpack_require__(206), exports);
__exportStar(__webpack_require__(1275), exports);
__exportStar(__webpack_require__(8952), exports);
__exportStar(__webpack_require__(6252), exports);
__exportStar(__webpack_require__(7596), exports);
__exportStar(__webpack_require__(4773), exports);
__exportStar(__webpack_require__(4925), exports);
__exportStar(__webpack_require__(9080), exports);
__exportStar(__webpack_require__(1004), exports);
__exportStar(__webpack_require__(3241), exports);
__exportStar(__webpack_require__(6828), exports);
__exportStar(__webpack_require__(7607), exports);
__exportStar(__webpack_require__(9403), exports);
__exportStar(__webpack_require__(7483), exports);
__exportStar(__webpack_require__(6649), exports);
__exportStar(__webpack_require__(9775), exports);
__exportStar(__webpack_require__(4366), exports);
__exportStar(__webpack_require__(5570), exports);
__exportStar(__webpack_require__(6593), exports);
__exportStar(__webpack_require__(1991), exports);
__exportStar(__webpack_require__(5961), exports);
__exportStar(__webpack_require__(2178), exports);
__exportStar(__webpack_require__(5152), exports);


/***/ }),

/***/ 7429:
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

var _v = _interopRequireDefault(__webpack_require__(3990));

var _v2 = _interopRequireDefault(__webpack_require__(8237));

var _v3 = _interopRequireDefault(__webpack_require__(5355));

var _v4 = _interopRequireDefault(__webpack_require__(3764));

var _nil = _interopRequireDefault(__webpack_require__(6314));

var _version = _interopRequireDefault(__webpack_require__(8464));

var _validate = _interopRequireDefault(__webpack_require__(6435));

var _stringify = _interopRequireDefault(__webpack_require__(4008));

var _parse = _interopRequireDefault(__webpack_require__(8222));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 4163:
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

/***/ 4790:
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

/***/ 6314:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = '00000000-0000-0000-0000-000000000000';
exports["default"] = _default;

/***/ }),

/***/ 8222:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _validate = _interopRequireDefault(__webpack_require__(6435));

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

/***/ 3319:
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

/***/ 3757:
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

/***/ 4008:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.unsafeStringify = unsafeStringify;

var _validate = _interopRequireDefault(__webpack_require__(6435));

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

/***/ 3990:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _rng = _interopRequireDefault(__webpack_require__(3319));

var _stringify = __webpack_require__(4008);

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

/***/ 8237:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _v = _interopRequireDefault(__webpack_require__(7925));

var _md = _interopRequireDefault(__webpack_require__(4163));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v3 = (0, _v.default)('v3', 0x30, _md.default);
var _default = v3;
exports["default"] = _default;

/***/ }),

/***/ 7925:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.URL = exports.DNS = void 0;
exports["default"] = v35;

var _stringify = __webpack_require__(4008);

var _parse = _interopRequireDefault(__webpack_require__(8222));

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

/***/ 5355:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _native = _interopRequireDefault(__webpack_require__(4790));

var _rng = _interopRequireDefault(__webpack_require__(3319));

var _stringify = __webpack_require__(4008);

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

/***/ 3764:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _v = _interopRequireDefault(__webpack_require__(7925));

var _sha = _interopRequireDefault(__webpack_require__(3757));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v5 = (0, _v.default)('v5', 0x50, _sha.default);
var _default = v5;
exports["default"] = _default;

/***/ }),

/***/ 6435:
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

/***/ 8464:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _validate = _interopRequireDefault(__webpack_require__(6435));

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
/******/ 	var __webpack_exports__ = __webpack_require__(4571);
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});