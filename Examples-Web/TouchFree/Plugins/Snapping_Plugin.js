"use strict";
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SnappingPlugin"] = factory();
	else
		root["SnappingPlugin"] = factory();
})(self, () => {
return (self["webpackChunktouchfree"] = self["webpackChunktouchfree"] || []).push([[370],{

/***/ 3934:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Ray = void 0;
const Vector2_1 = __webpack_require__(4435);
class Ray {
    static cast(start, end, element) {
        const pos = new Vector2_1.Vector2(start.x, start.y);
        let hasSnap = Ray.hit(pos, element.getBoundingClientRect());
        let hadSnap = hasSnap;
        // Store the current segment
        const vector = {
            x: end.x - start.x,
            y: end.y - start.y,
        };
        // Store the previous evaluated pos
        const prevPos = {
            x: pos.x,
            y: pos.y,
        };
        // Store the next end point of the vector
        const nextEnd = {
            x: end.x,
            y: end.y,
        };
        // If we already have a snappable under us, it means we're already in a button
        // Let's find the closest edge of the shape by going the other direction
        if (hasSnap) {
            const rect = element.getBoundingClientRect();
            const longest = Math.sqrt(Math.pow(rect.width / 2, 2) + Math.pow(rect.height / 2, 2));
            // We'll use the vector as a direction vector, return it, normalize it
            // and multiply by the longest value the shape can have
            vector.x = -vector.x;
            vector.y = -vector.y;
            const vectorLength = Math.sqrt(Math.pow(vector.x, 2) + Math.pow(vector.y, 2));
            vector.x /= vectorLength;
            vector.y /= vectorLength;
            vector.x *= longest;
            vector.y *= longest;
            nextEnd.x = start.x + vector.x;
            nextEnd.y = start.y + vector.y;
        }
        // Store the length of the vector
        let distance = Math.sqrt(Math.pow(vector.x, 2) + Math.pow(vector.y, 2));
        // We already checked the starting pos, let's step in the first step
        pos.x = pos.x + vector.x / 2;
        pos.y = pos.y + vector.y / 2;
        while (distance > 1) {
            hasSnap = Ray.hit(pos, element.getBoundingClientRect());
            // If we changed state, we reverse the direction
            if ((hasSnap && !hadSnap) || (!hasSnap && hadSnap)) {
                nextEnd.x = prevPos.x;
                nextEnd.y = prevPos.y;
            }
            // We get the new vector along we're moving
            vector.x = nextEnd.x - pos.x;
            vector.y = nextEnd.y - pos.y;
            // We get the new vector length
            distance = Math.sqrt(Math.pow(vector.x, 2) + Math.pow(vector.y, 2));
            // We store the previous position
            prevPos.x = pos.x;
            prevPos.y = pos.y;
            // We get the next position
            pos.x = pos.x + vector.x / 2;
            pos.y = pos.y + vector.y / 2;
            hadSnap = hasSnap;
        }
        return pos;
    }
    static hit(position, rect) {
        // Is position inside the rect?
        return position.x < rect.right && position.x > rect.left && position.y < rect.bottom && position.y > rect.top;
    }
}
exports.Ray = Ray;


/***/ }),

/***/ 7326:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SnappableElement = void 0;
const Ray_1 = __webpack_require__(3934);
const Vector2_1 = __webpack_require__(4435);
class SnappableElement {
    constructor(element, distance, closestPoint, center, centerDistance, hovered) {
        this.element = element;
        this.distance = distance;
        this.closestPoint = closestPoint;
        this.center = center;
        this.centerDistance = centerDistance;
        this.hovered = hovered;
    }
    static compute(element, distantPoint) {
        const rect = element.getBoundingClientRect();
        const center = new Vector2_1.Vector2(rect.x + rect.width / 2, rect.y + rect.height / 2);
        const centerDistance = Math.sqrt(Math.pow(distantPoint.x - center.x, 2) + Math.pow(distantPoint.y - center.y, 2));
        const closestPoint = Ray_1.Ray.cast(distantPoint, center, element);
        let distance = Math.sqrt(Math.pow(distantPoint.x - closestPoint.x, 2) + Math.pow(distantPoint.y - closestPoint.y, 2));
        const hovered = Ray_1.Ray.hit(distantPoint, element.getBoundingClientRect());
        if (hovered) {
            distance = -distance;
        }
        return new SnappableElement(element, distance, closestPoint, center, centerDistance, hovered);
    }
}
exports.SnappableElement = SnappableElement;


/***/ }),

/***/ 9983:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SnappingPlugin = exports.SnapMode = void 0;
const index_1 = __webpack_require__(2721);
const SnappableElement_1 = __webpack_require__(7326);
const Vector2_1 = __webpack_require__(4435);
var SnapMode;
(function (SnapMode) {
    SnapMode[SnapMode["MAGNET"] = 0] = "MAGNET";
    SnapMode[SnapMode["CENTER"] = 1] = "CENTER";
})(SnapMode = exports.SnapMode || (exports.SnapMode = {}));
class SnappingPlugin extends index_1.InputActionPlugin {
    constructor() {
        super(...arguments);
        this.snapDistance = 50;
        this.snapMode = SnapMode.MAGNET;
        this.snapSoftness = 0.3;
    }
    modifyInputAction(inputAction) {
        var _a;
        const cursorPos = {
            x: inputAction.CursorPosition[0],
            y: inputAction.CursorPosition[1],
        };
        // Build a list of snappable elements and sort them by distance
        const elements = [...document.getElementsByClassName('snappable')]
            .map((value) => SnappableElement_1.SnappableElement.compute(value, Vector2_1.Vector2.fromTuple(cursorPos)))
            .sort((a, b) => a.distance - b.distance);
        // Let's snap if there is snappable elements
        if (elements.length > 0) {
            if (elements[0].distance < this.snapDistance) {
                if (this.snapMode === SnapMode.CENTER) {
                    // If snapForce = 1, cursor position inside the shape is the same
                    // If snapForce = 0, cursor position is snapped in the middle
                    const snapForce = Number.parseFloat((_a = elements[0].element.getAttribute('data-snapforce')) !== null && _a !== void 0 ? _a : this.snapSoftness.toString());
                    // From center of the shape to the border of the shape, following
                    // the direction between the center and the cursor
                    // From what we already have, vector = closest_center - closest_point
                    const centerToBorderVector = new Vector2_1.Vector2(elements[0].center.x - elements[0].closestPoint.x, elements[0].center.y - elements[0].closestPoint.y);
                    const distance = Math.sqrt(Math.pow(centerToBorderVector.x, 2) + Math.pow(centerToBorderVector.y, 2));
                    // Intensity of the lerp between the edge and the center
                    let softSnapT = (elements[0].centerDistance / distance) *
                        this.lerp(SnappingPlugin.MIN_SOFTNESS, SnappingPlugin.MAX_SOFTNESS, snapForce);
                    softSnapT = Math.max(Math.min(softSnapT, 1), 0);
                    const finalPos = {
                        x: this.lerp(elements[0].center.x, cursorPos.x, softSnapT),
                        y: this.lerp(elements[0].center.y, cursorPos.y, softSnapT),
                    };
                    inputAction.CursorPosition[0] = finalPos.x;
                    inputAction.CursorPosition[1] = finalPos.y;
                }
                else {
                    if (!elements[0].hovered) {
                        inputAction.CursorPosition[0] = elements[0].closestPoint.x;
                        inputAction.CursorPosition[1] = elements[0].closestPoint.y;
                    }
                }
            }
        }
        return inputAction;
    }
    lerp(x, y, a) {
        return x * (1 - a) + y * a;
    }
    setSnapModeToMagnet() {
        this.snapMode = SnapMode.MAGNET;
    }
    setSnapModeToCenter() {
        this.snapMode = SnapMode.CENTER;
    }
    setSnapDistance(value) {
        this.snapDistance = value;
    }
    setSnapSoftness(value) {
        this.snapSoftness = value;
    }
}
exports.SnappingPlugin = SnappingPlugin;
SnappingPlugin.MAX_SOFTNESS = 1;
SnappingPlugin.MIN_SOFTNESS = 0;


/***/ }),

/***/ 4435:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vector2 = void 0;
class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static fromTuple(tuple) {
        return new Vector2(tuple.x, tuple.y);
    }
    toTuple() {
        return { x: this.x, y: this.y };
    }
}
exports.Vector2 = Vector2;


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(9983));
/******/ return __webpack_exports__;
/******/ }
]);
});