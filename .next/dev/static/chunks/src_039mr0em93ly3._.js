(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
(()=>{"use strict";return[
"[project]/src/app/HomeClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/expression/components/FaceExpressions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
;
const HomeClient = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/HomeClient.js",
            lineNumber: 9,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/HomeClient.js",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = HomeClient;
const __TURBOPACK__default__export__ = HomeClient;
var _c;
__turbopack_context__.k.register(_c, "HomeClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/expression/components/FaceExpressions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FaceExpression
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/expression/utils/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/features/expression/components/FaceExpressions.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const IDLE_GAZE_MESSAGE = "Click Detect face. Look at the center dot for a moment, then look around the screen.";
function readLookRegions(root) {
    return [
        ...root.querySelectorAll("[data-look]")
    ].map((element)=>{
        const rect = element.getBoundingClientRect();
        return {
            name: element.dataset.look,
            left: rect.left,
            top: rect.top,
            right: rect.right,
            bottom: rect.bottom
        };
    });
}
function classNames(...names) {
    return names.filter(Boolean).join(" ");
}
function FaceExpression() {
    _s();
    const pageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sessionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [expression, setExpression] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Detection is off");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isRunning, setIsRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isStarting, setIsStarting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [gaze, setGaze] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeLook, setActiveLook] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [lookMessage, setLookMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(IDLE_GAZE_MESSAGE);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FaceExpression.useEffect": ()=>({
                "FaceExpression.useEffect": ()=>sessionRef.current?.stop()
            })["FaceExpression.useEffect"]
    }["FaceExpression.useEffect"], []);
    function updateGazeMessage(nextGaze) {
        if (!nextGaze) {
            setActiveLook("");
            setLookMessage("No face detected, so I can't see where your eyes are looking.");
            return;
        }
        if (nextGaze.calibrating) {
            setActiveLook("");
            setLookMessage("Look at the center of the screen while your eyes are measured.");
            return;
        }
        const regions = pageRef.current ? readLookRegions(pageRef.current) : [];
        const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findLookTarget"])(nextGaze.x, nextGaze.y, regions, {
            width: window.innerWidth,
            height: window.innerHeight
        });
        setActiveLook(target?.name ?? "");
        setLookMessage((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildGazeMessage"])({
            targetName: target?.name,
            x: nextGaze.x,
            y: nextGaze.y
        }));
    }
    function start() {
        const video = videoRef.current;
        if (!video || sessionRef.current) return;
        setError("");
        setIsStarting(true);
        setExpression("Starting camera...");
        setLookMessage("Starting camera...");
        sessionRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startExpressionDetection"])({
            video,
            onRunning: ()=>{
                setIsStarting(false);
                setIsRunning(true);
            },
            onUpdate: ({ expression: nextExpression, gaze: nextGaze })=>{
                setExpression(nextExpression);
                setGaze(nextGaze);
                updateGazeMessage(nextGaze);
            },
            onError: (message)=>{
                sessionRef.current?.stop();
                sessionRef.current = null;
                setIsStarting(false);
                setIsRunning(false);
                setGaze(null);
                setActiveLook("");
                setExpression("Detection is off");
                setLookMessage(IDLE_GAZE_MESSAGE);
                setError(message);
            }
        });
    }
    function stop() {
        sessionRef.current?.stop();
        sessionRef.current = null;
        setIsStarting(false);
        setIsRunning(false);
        setGaze(null);
        setActiveLook("");
        setExpression("Detection is off");
        setLookMessage(IDLE_GAZE_MESSAGE);
    }
    function recenter() {
        sessionRef.current?.recenter();
        setLookMessage("Look at the center of the screen while your eyes are measured.");
    }
    function activeClass(name) {
        return activeLook === name ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : "";
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        ref: pageRef,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-look": "the title",
                        className: activeClass("the title"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                children: "AI Face Expression Detection"
                            }, void 0, false, {
                                fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtitle,
                                children: "Start the camera, then look around. The blue dot and the text follow your eyes."
                            }, void 0, false, {
                                fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "data-look": "the detect button",
                        onClick: isRunning ? stop : start,
                        disabled: isStarting,
                        className: classNames(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button, isRunning && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stop, activeClass("the detect button")),
                        children: isStarting ? "Starting camera..." : isRunning ? "Stop detection" : "Detect face"
                    }, void 0, false, {
                        fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stage,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-look": "the camera preview",
                        className: classNames(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].videoWrap, activeClass("the camera preview")),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                ref: videoRef,
                                autoPlay: true,
                                muted: true,
                                playsInline: true,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].video
                            }, void 0, false, {
                                fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            !isRunning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].offline,
                                children: "Camera is off. Click Detect face to begin."
                            }, void 0, false, {
                                fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                                lineNumber: 161,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].side,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                "data-look": "the expression result",
                                className: classNames(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card, activeClass("the expression result")),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                        children: "Detected expression"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                                        lineNumber: 170,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].expression,
                                        children: expression
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                                        lineNumber: 171,
                                        columnNumber: 13
                                    }, this),
                                    isRunning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].status,
                                        children: "Camera is running"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                                        lineNumber: 172,
                                        columnNumber: 27
                                    }, this),
                                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                                        children: error
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                                        lineNumber: 173,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                "data-look": "the eye direction message",
                                className: classNames(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gazeCard, activeClass("the eye direction message")),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                        children: "Where you are looking"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                                        lineNumber: 184,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gazeText,
                                        "aria-live": "polite",
                                        children: lookMessage
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                                        lineNumber: 185,
                                        columnNumber: 13
                                    }, this),
                                    isRunning && !gaze?.calibrating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        "data-look": "the recenter button",
                                        onClick: recenter,
                                        className: classNames(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ghostButton, activeClass("the recenter button")),
                                        children: "Recenter eyes"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                                        lineNumber: 189,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            isRunning && gaze?.calibrating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].centerCue,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].centerDot
                    }, void 0, false, {
                        fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                        lineNumber: 204,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].centerLabel,
                        children: "Look here"
                    }, void 0, false, {
                        fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                        lineNumber: 205,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                lineNumber: 203,
                columnNumber: 9
            }, this),
            isRunning && gaze && !gaze.calibrating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gazeDot,
                style: {
                    left: `${gaze.x * 100}%`,
                    top: `${gaze.y * 100}%`
                }
            }, void 0, false, {
                fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                lineNumber: 210,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/expression/components/FaceExpressions.js",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
_s(FaceExpression, "FhZR+JzKfgEl94QuvLtvksp4pk0=");
_c = FaceExpression;
var _c;
__turbopack_context__.k.register(_c, "FaceExpression");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/expression/utils/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CAMERA_ERROR_MESSAGE",
    ()=>CAMERA_ERROR_MESSAGE,
    "buildGazeMessage",
    ()=>buildGazeMessage,
    "classifyExpression",
    ()=>classifyExpression,
    "describeEyeDirection",
    ()=>describeEyeDirection,
    "describeScreenZone",
    ()=>describeScreenZone,
    "estimateRawGaze",
    ()=>estimateRawGaze,
    "findLookTarget",
    ()=>findLookTarget,
    "gazeFromBaseline",
    ()=>gazeFromBaseline,
    "startExpressionDetection",
    ()=>startExpressionDetection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mediapipe$2f$tasks$2d$vision$2f$vision_bundle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mediapipe/tasks-vision/vision_bundle.mjs [app-client] (ecmascript)");
;
const VISION_WASM_URL = "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm";
const MODEL_ASSET_PATH = "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task";
const MEDIA_PIPE_NOISE = /tensorflow|xnnpack|opengl|faceblendshapes|face_landmarker|inference_feedback|gl_context|vision_wasm|mediapipe|gpu delegate|created tensor|feedback manager|error checking is disabled/i;
const LEFT_EYE = {
    outer: 33,
    inner: 133,
    top: 159,
    bottom: 145,
    iris: 468
};
const RIGHT_EYE = {
    outer: 263,
    inner: 362,
    top: 386,
    bottom: 374,
    iris: 473
};
const CALIBRATION_FRAMES = 12;
const GAZE_GAIN_X = 7.2;
const GAZE_GAIN_Y = 8.6;
const BLINK_HOLD = 0.55;
const UPPER_BOX = "the upper box";
const LOWER_BOX = "the lower box";
const CAMERA_ERROR_MESSAGE = "Camera or model failed. Allow camera permission and check your internet connection.";
function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
}
function ignoreMediaPipeConsoleNoise() {
    const levels = [
        "error",
        "warn",
        "log",
        "info",
        "debug"
    ];
    const originals = {};
    for (const level of levels){
        const original = console[level];
        if (typeof original !== "function") continue;
        originals[level] = original;
        console[level] = (...args)=>{
            const text = args.map((item)=>{
                if (typeof item === "string") return item;
                if (item instanceof Error) return item.message;
                return "";
            }).join(" ");
            if (MEDIA_PIPE_NOISE.test(text)) return;
            original.apply(console, args);
        };
    }
    return ()=>{
        for (const level of Object.keys(originals)){
            console[level] = originals[level];
        }
    };
}
function scoresFrom(categories) {
    return Object.fromEntries(categories.map((item)=>[
            item.categoryName,
            item.score
        ]));
}
function classifyExpression(categories) {
    if (!categories) return "No face detected";
    const scores = scoresFrom(categories);
    const smile = ((scores.mouthSmileLeft || 0) + (scores.mouthSmileRight || 0)) / 2;
    const jawOpen = scores.jawOpen || 0;
    const blink = Math.max(scores.eyeBlinkLeft || 0, scores.eyeBlinkRight || 0);
    if (smile > 0.45) return "Smile detected";
    if (jawOpen > 0.35) return "Mouth open";
    if (blink > 0.65) return "Blink detected";
    return "Neutral face";
}
function blinkAmount(categories) {
    if (!categories) return 0;
    const scores = scoresFrom(categories);
    return Math.max(scores.eyeBlinkLeft || 0, scores.eyeBlinkRight || 0);
}
function eyeOffset(landmarks, eye) {
    const outer = landmarks[eye.outer];
    const inner = landmarks[eye.inner];
    const top = landmarks[eye.top];
    const bottom = landmarks[eye.bottom];
    const iris = landmarks[eye.iris];
    if (!outer || !inner || !top || !bottom || !iris) return null;
    const width = Math.hypot(inner.x - outer.x, inner.y - outer.y) || 1;
    const height = Math.hypot(bottom.x - top.x, bottom.y - top.y) || 1;
    return {
        x: (iris.x - (outer.x + inner.x) / 2) / width,
        y: (iris.y - (top.y + bottom.y) / 2) / height
    };
}
function irisPoint(landmarks) {
    if (!landmarks || landmarks.length < 478) return null;
    const left = eyeOffset(landmarks, LEFT_EYE);
    const right = eyeOffset(landmarks, RIGHT_EYE);
    if (!left || !right) return null;
    // Image-right is the user's left, so flip horizontal.
    return {
        x: -((left.x + right.x) / 2),
        y: (left.y + right.y) / 2
    };
}
function blendPoint(categories) {
    if (!categories) return null;
    const scores = scoresFrom(categories);
    const lookLeft = ((scores.eyeLookOutLeft || 0) + (scores.eyeLookInRight || 0)) / 2;
    const lookRight = ((scores.eyeLookInLeft || 0) + (scores.eyeLookOutRight || 0)) / 2;
    const lookUp = ((scores.eyeLookUpLeft || 0) + (scores.eyeLookUpRight || 0)) / 2;
    const lookDown = ((scores.eyeLookDownLeft || 0) + (scores.eyeLookDownRight || 0)) / 2;
    return {
        x: lookRight - lookLeft,
        y: lookDown - lookUp
    };
}
function estimateRawGaze(landmarks, categories) {
    const iris = irisPoint(landmarks);
    const blend = blendPoint(categories);
    if (iris && blend) {
        return {
            x: iris.x * 0.72 + blend.x * 0.28,
            y: iris.y * 0.6 + blend.y * 0.4
        };
    }
    return iris || blend;
}
function medianPoint(points) {
    const mid = Math.floor(points.length / 2);
    const pick = (values)=>{
        const sorted = [
            ...values
        ].sort((a, b)=>a - b);
        return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
    };
    return {
        x: pick(points.map((point)=>point.x)),
        y: pick(points.map((point)=>point.y))
    };
}
function gazeFromBaseline(raw, baseline) {
    return {
        x: clamp(0.5 + (raw.x - baseline.x) * GAZE_GAIN_X, 0.03, 0.97),
        y: clamp(0.5 + (raw.y - baseline.y) * GAZE_GAIN_Y, 0.03, 0.97),
        calibrating: false
    };
}
function describeEyeDirection(x, y) {
    const horizontal = x < 0.38 ? "left" : x > 0.62 ? "right" : "";
    const vertical = y < 0.38 ? "up" : y > 0.62 ? "down" : "";
    if (!horizontal && !vertical) return "Your eyes are looking straight ahead.";
    if (!vertical) return `Your eyes are looking to the ${horizontal}.`;
    if (!horizontal) return `Your eyes are looking ${vertical}.`;
    return `Your eyes are looking ${vertical} and to the ${horizontal}.`;
}
function describeScreenZone(x, y) {
    const horizontal = x < 0.34 ? "left side" : x > 0.66 ? "right side" : "center";
    const vertical = y < 0.34 ? "top" : y > 0.66 ? "bottom" : "middle";
    if (horizontal === "center" && vertical === "middle") return "the center of the screen";
    if (horizontal === "center") return `the ${vertical} of the screen`;
    return `the ${vertical} ${horizontal} of the screen`;
}
function buildGazeMessage({ targetName, x, y }) {
    const direction = describeEyeDirection(x, y);
    if (targetName) return `You are looking at ${targetName}. ${direction}`;
    if (x > 0.38 && x < 0.62 && y > 0.34 && y < 0.66) {
        return `You are looking at the helmet. ${direction}`;
    }
    return `You are looking at ${describeScreenZone(x, y)}. ${direction}`;
}
function findLookTarget(x, y, regions, viewport) {
    const px = x * viewport.width;
    const py = y * viewport.height;
    const upper = regions.find((region)=>region.name === UPPER_BOX);
    const lower = regions.find((region)=>region.name === LOWER_BOX);
    if (upper && lower) {
        const columnLeft = Math.min(upper.left, lower.left) - 160;
        const columnRight = Math.max(upper.right, lower.right) + 40;
        const columnTop = Math.min(upper.top, lower.top) - 36;
        const columnBottom = Math.max(upper.bottom, lower.bottom) + 36;
        const inColumn = px >= columnLeft && px <= columnRight && py >= columnTop && py <= columnBottom;
        if (inColumn) {
            const split = (upper.bottom + lower.top) / 2;
            return py < split ? upper : lower;
        }
    }
    let best = null;
    for (const region of regions){
        const inside = px >= region.left && px <= region.right && py >= region.top && py <= region.bottom;
        if (!inside) continue;
        const area = (region.right - region.left) * (region.bottom - region.top);
        if (!best || area < best.area) best = {
            ...region,
            area
        };
    }
    return best;
}
async function createFaceLandmarker() {
    const vision = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mediapipe$2f$tasks$2d$vision$2f$vision_bundle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilesetResolver"].forVisionTasks(VISION_WASM_URL);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mediapipe$2f$tasks$2d$vision$2f$vision_bundle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceLandmarker"].createFromOptions(vision, {
        baseOptions: {
            modelAssetPath: MODEL_ASSET_PATH,
            delegate: "CPU"
        },
        runningMode: "VIDEO",
        numFaces: 1,
        outputFaceBlendshapes: true
    });
}
function stopStream(stream) {
    stream?.getTracks().forEach((track)=>track.stop());
}
function startExpressionDetection({ video, onUpdate, onRunning, onError }) {
    const restoreConsole = ignoreMediaPipeConsoleNoise();
    let landmarker;
    let stream;
    let animationId;
    let cancelled = false;
    let lastVideoTime = -1;
    let lastTimestamp = -1;
    let lastEmit = 0;
    let lastExpression = "";
    let baseline = null;
    let samples = [];
    let smooth = null;
    function nextTimestamp() {
        const now = performance.now();
        lastTimestamp = now <= lastTimestamp ? lastTimestamp + 1 : now;
        return lastTimestamp;
    }
    function emit(payload) {
        const now = performance.now();
        const expressionChanged = payload.expression !== lastExpression;
        if (!expressionChanged && now - lastEmit < 45) return;
        lastExpression = payload.expression;
        lastEmit = now;
        onUpdate(payload);
    }
    function recenter() {
        baseline = null;
        samples = [];
        smooth = null;
    }
    function smoothToward(point) {
        if (!smooth) {
            smooth = {
                x: point.x,
                y: point.y
            };
        } else {
            smooth = {
                x: smooth.x * 0.4 + point.x * 0.6,
                y: smooth.y * 0.32 + point.y * 0.68
            };
        }
        return {
            x: smooth.x,
            y: smooth.y,
            calibrating: false
        };
    }
    function detect() {
        if (cancelled || !video || !landmarker) return;
        if (video.readyState >= 2 && video.currentTime !== lastVideoTime) {
            lastVideoTime = video.currentTime;
            try {
                const result = landmarker.detectForVideo(video, nextTimestamp());
                const categories = result.faceBlendshapes?.[0]?.categories;
                const expression = classifyExpression(categories);
                const raw = estimateRawGaze(result.faceLandmarks?.[0], categories);
                const blinking = blinkAmount(categories) > BLINK_HOLD;
                if (!raw) {
                    smooth = null;
                    emit({
                        expression,
                        gaze: null
                    });
                } else if (blinking && smooth) {
                    emit({
                        expression,
                        gaze: {
                            x: smooth.x,
                            y: smooth.y,
                            calibrating: false
                        }
                    });
                } else if (!baseline) {
                    if (!blinking) samples.push(raw);
                    if (samples.length < CALIBRATION_FRAMES) {
                        emit({
                            expression,
                            gaze: {
                                x: 0.5,
                                y: 0.5,
                                calibrating: true
                            }
                        });
                    } else {
                        baseline = medianPoint(samples);
                        emit({
                            expression,
                            gaze: smoothToward(gazeFromBaseline(raw, baseline))
                        });
                    }
                } else {
                    emit({
                        expression,
                        gaze: smoothToward(gazeFromBaseline(raw, baseline))
                    });
                }
            } catch  {
            // A single bad frame should not stop the camera loop.
            }
        }
        animationId = requestAnimationFrame(detect);
    }
    function cleanup() {
        cancelled = true;
        cancelAnimationFrame(animationId);
        stopStream(stream);
        if (video && video.srcObject) video.srcObject = null;
        try {
            landmarker?.close();
        } catch  {
        // Closing the model can throw if it was already released.
        }
        landmarker = undefined;
        restoreConsole();
    }
    async function initialize() {
        try {
            landmarker = await createFaceLandmarker();
            if (cancelled) {
                try {
                    landmarker.close();
                } catch  {
                // Already handled by cleanup.
                }
                return;
            }
            stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: "user"
                },
                audio: false
            });
            if (cancelled) {
                stopStream(stream);
                try {
                    landmarker.close();
                } catch  {
                // Already handled by cleanup.
                }
                return;
            }
            video.srcObject = stream;
            await video.play();
            if (cancelled) return;
            onRunning();
            detect();
        } catch (err) {
            console.error("Face detection error:", err);
            if (!cancelled) onError(CAMERA_ERROR_MESSAGE);
        }
    }
    initialize();
    return {
        stop: cleanup,
        recenter
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]})(),
"[project]/src/features/expression/components/FaceExpressions.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "FaceExpressions-module__8w0Rhq__active",
  "button": "FaceExpressions-module__8w0Rhq__button",
  "card": "FaceExpressions-module__8w0Rhq__card",
  "centerCue": "FaceExpressions-module__8w0Rhq__centerCue",
  "centerDot": "FaceExpressions-module__8w0Rhq__centerDot",
  "centerLabel": "FaceExpressions-module__8w0Rhq__centerLabel",
  "error": "FaceExpressions-module__8w0Rhq__error",
  "expression": "FaceExpressions-module__8w0Rhq__expression",
  "gazeCard": "FaceExpressions-module__8w0Rhq__gazeCard",
  "gazeDot": "FaceExpressions-module__8w0Rhq__gazeDot",
  "gazeText": "FaceExpressions-module__8w0Rhq__gazeText",
  "ghostButton": "FaceExpressions-module__8w0Rhq__ghostButton",
  "header": "FaceExpressions-module__8w0Rhq__header",
  "label": "FaceExpressions-module__8w0Rhq__label",
  "offline": "FaceExpressions-module__8w0Rhq__offline",
  "page": "FaceExpressions-module__8w0Rhq__page",
  "side": "FaceExpressions-module__8w0Rhq__side",
  "stage": "FaceExpressions-module__8w0Rhq__stage",
  "status": "FaceExpressions-module__8w0Rhq__status",
  "stop": "FaceExpressions-module__8w0Rhq__stop",
  "subtitle": "FaceExpressions-module__8w0Rhq__subtitle",
  "title": "FaceExpressions-module__8w0Rhq__title",
  "video": "FaceExpressions-module__8w0Rhq__video",
  "videoWrap": "FaceExpressions-module__8w0Rhq__videoWrap",
});
}),
]);

//# sourceMappingURL=src_039mr0em93ly3._.js.map