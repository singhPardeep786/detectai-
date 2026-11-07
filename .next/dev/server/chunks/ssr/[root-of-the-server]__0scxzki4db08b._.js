module.exports = [
(()=>{"use strict";return[
"[project]/src/app/HomeClient.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/expression/components/FaceExpressions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const HomeClient = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
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
const __TURBOPACK__default__export__ = HomeClient;
}),
"[project]/src/features/expression/components/FaceExpressions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FaceExpression
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$utils$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/expression/utils/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$HelmetViewer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/expression/components/HelmetViewer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/features/expression/components/FaceExpressions.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
;
const IDLE_GAZE_MESSAGE = "Click Detect face, point your head at the helmet, then at the upper box and the lower box.";
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
    const pageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sessionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [expression, setExpression] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Detection is off");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isRunning, setIsRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isStarting, setIsStarting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [gaze, setGaze] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeLook, setActiveLook] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [lookMessage, setLookMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(IDLE_GAZE_MESSAGE);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>sessionRef.current?.stop(), []);
    function updateGazeMessage(nextGaze) {
        if (!nextGaze) {
            setActiveLook("");
            setLookMessage("No face detected, so I can't see which way your head is pointing.");
            return;
        }
        if (nextGaze.calibrating) {
            setActiveLook("");
            setLookMessage("Point your head at the helmet while the center position is measured.");
            return;
        }
        const regions = pageRef.current ? readLookRegions(pageRef.current) : [];
        const target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$utils$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findLookTarget"])(nextGaze.x, nextGaze.y, regions, {
            width: window.innerWidth,
            height: window.innerHeight
        });
        setActiveLook(target?.name ?? "");
        setLookMessage((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$utils$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildGazeMessage"])({
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
        sessionRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$utils$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startExpressionDetection"])({
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
        setLookMessage("Point your head at the helmet while the center position is measured.");
    }
    function activeClass(name) {
        return activeLook === name ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : "";
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$HelmetViewer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                gaze: isRunning ? gaze : null
            }, void 0, false, {
                fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                ref: videoRef,
                autoPlay: true,
                muted: true,
                playsInline: true,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hiddenVideo
            }, void 0, false, {
                fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                ref: pageRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].page,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-look": "the AI Face Expression heading",
                                className: activeClass("the AI Face Expression heading"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                                        children: "AI Face Expression Detection"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtitle,
                                        children: "Move your head. The helmet stays in the center and turns the same way."
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "data-look": "the detect button",
                                onClick: isRunning ? stop : start,
                                disabled: isStarting,
                                className: classNames(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].button, isRunning && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stop, activeClass("the detect button")),
                                children: isStarting ? "Starting camera..." : isRunning ? "Stop detection" : "Detect face"
                            }, void 0, false, {
                                fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stage,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].side,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    "data-look": "the upper box",
                                    className: classNames(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card, activeClass("the upper box")),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                            children: "Upper box"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].expression,
                                            children: expression
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                                            lineNumber: 166,
                                            columnNumber: 15
                                        }, this),
                                        isRunning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].status,
                                            children: "Camera is running"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                                            lineNumber: 167,
                                            columnNumber: 29
                                        }, this),
                                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].error,
                                            children: error
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                                            lineNumber: 168,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    "data-look": "the lower box",
                                    className: classNames(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card, activeClass("the lower box")),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                            children: "Lower box"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                                            lineNumber: 175,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].gazeText,
                                            "aria-live": "polite",
                                            children: lookMessage
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                                            lineNumber: 176,
                                            columnNumber: 15
                                        }, this),
                                        isRunning && !gaze?.calibrating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            "data-look": "the recenter button",
                                            onClick: recenter,
                                            className: classNames(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ghostButton, activeClass("the recenter button")),
                                            children: "Recenter head"
                                        }, void 0, false, {
                                            fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                                            lineNumber: 180,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    isRunning && gaze?.calibrating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].centerCue,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].centerLabel,
                            children: "Look at the helmet"
                        }, void 0, false, {
                            fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                            lineNumber: 195,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                        lineNumber: 194,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                lineNumber: 135,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/expression/components/FaceExpressions.js",
        lineNumber: 131,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/features/expression/components/HelmetViewer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HelmetViewer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$track$2d$dynamic$2d$import$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/track-dynamic-import.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/features/expression/components/FaceExpressions.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
function HelmetViewer({ gaze }) {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gazeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(gaze);
    gazeRef.current = gaze;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        let stopped = false;
        let cleanup = ()=>{};
        async function mount() {
            const THREE = await /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$track$2d$dynamic$2d$import$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackDynamicImport"])(__turbopack_context__.A("[project]/node_modules/three/build/three.module.js [app-ssr] (ecmascript, async loader)"));
            const { GLTFLoader } = await /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$track$2d$dynamic$2d$import$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackDynamicImport"])(__turbopack_context__.A("[project]/node_modules/three/examples/jsm/loaders/GLTFLoader.js [app-ssr] (ecmascript, async loader)"));
            const { RoomEnvironment } = await /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$track$2d$dynamic$2d$import$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trackDynamicImport"])(__turbopack_context__.A("[project]/node_modules/three/examples/jsm/environments/RoomEnvironment.js [app-ssr] (ecmascript, async loader)"));
            if (stopped || !canvas) return;
            const renderer = new THREE.WebGLRenderer({
                canvas,
                antialias: true,
                alpha: true
            });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.outputColorSpace = THREE.SRGBColorSpace;
            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            renderer.toneMappingExposure = 1;
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 100);
            camera.position.set(0, 0, 4.8);
            const pmrem = new THREE.PMREMGenerator(renderer);
            scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
            const modelRoot = new THREE.Group();
            scene.add(modelRoot);
            const loader = new GLTFLoader();
            loader.load("/models/DamagedHelmet.glb", (gltf)=>{
                if (stopped) return;
                const model = gltf.scene;
                const box = new THREE.Box3().setFromObject(model);
                const size = box.getSize(new THREE.Vector3());
                const center = box.getCenter(new THREE.Vector3());
                model.position.sub(center);
                model.scale.setScalar(1.05 / Math.max(size.x, size.y, size.z));
                modelRoot.position.set(0, 0, 0);
                modelRoot.add(model);
            });
            let frame = 0;
            let yaw = 0;
            let pitch = 0;
            function resize() {
                const width = window.innerWidth;
                const height = window.innerHeight;
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
                renderer.setSize(width, height, false);
            }
            function tick() {
                frame = requestAnimationFrame(tick);
                const nextGaze = gazeRef.current;
                const tracking = nextGaze && !nextGaze.calibrating;
                const targetYaw = tracking ? -(nextGaze.x - 0.5) * 1.25 : 0;
                const targetPitch = tracking ? (nextGaze.y - 0.5) * 0.95 : 0;
                yaw += (targetYaw - yaw) * 0.22;
                pitch += (targetPitch - pitch) * 0.22;
                modelRoot.rotation.y = yaw;
                modelRoot.rotation.x = pitch;
                renderer.render(scene, camera);
            }
            resize();
            window.addEventListener("resize", resize);
            tick();
            cleanup = ()=>{
                cancelAnimationFrame(frame);
                window.removeEventListener("resize", resize);
                pmrem.dispose();
                renderer.dispose();
            };
        }
        mount();
        return ()=>{
            stopped = true;
            cleanup();
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$expression$2f$components$2f$FaceExpressions$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].helmet,
        "aria-hidden": true
    }, void 0, false, {
        fileName: "[project]/src/features/expression/components/HelmetViewer.js",
        lineNumber: 102,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/features/expression/utils/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mediapipe$2f$tasks$2d$vision$2f$vision_bundle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mediapipe/tasks-vision/vision_bundle.mjs [app-ssr] (ecmascript)");
;
const VISION_WASM_URL = "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm";
const MODEL_ASSET_PATH = "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task";
const MEDIA_PIPE_NOISE = /tensorflow|xnnpack|opengl|faceblendshapes|face_landmarker|inference_feedback|gl_context|vision_wasm|mediapipe|gpu delegate|created tensor|feedback manager|error checking is disabled/i;
const NOSE = 1;
const FOREHEAD = 10;
const CHIN = 152;
const LEFT_CHEEK = 234;
const RIGHT_CHEEK = 454;
const CALIBRATION_FRAMES = 12;
const GAZE_GAIN_X = 4.4;
const GAZE_GAIN_Y = 5.4;
const UPPER_BOX = "the upper box";
const LOWER_BOX = "the lower box";
const HEADING = "the AI Face Expression heading";
const DETECT_BUTTON = "the detect button";
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
function estimateRawGaze(landmarks) {
    if (!landmarks || landmarks.length <= RIGHT_CHEEK) return null;
    const nose = landmarks[NOSE];
    const forehead = landmarks[FOREHEAD];
    const chin = landmarks[CHIN];
    const leftCheek = landmarks[LEFT_CHEEK];
    const rightCheek = landmarks[RIGHT_CHEEK];
    if (!nose || !forehead || !chin || !leftCheek || !rightCheek) return null;
    const faceWidth = Math.hypot(leftCheek.x - rightCheek.x, leftCheek.y - rightCheek.y) || 1;
    const faceHeight = chin.y - forehead.y || 1;
    const midX = (leftCheek.x + rightCheek.x) / 2;
    return {
        // Nose shifts toward image-left when the head turns to the user's right.
        // Screen X is flipped later so a turn to the right moves toward the right.
        x: (midX - nose.x) / faceWidth,
        // Nose rises in the image when the head tilts up.
        y: (forehead.y - nose.y) / faceHeight
    };
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
        x: clamp(0.5 - (raw.x - baseline.x) * GAZE_GAIN_X, 0.03, 0.97),
        // A upward nod must move toward the top of the screen.
        y: clamp(0.5 - (raw.y - baseline.y) * GAZE_GAIN_Y, 0.03, 0.97),
        calibrating: false
    };
}
function describeEyeDirection(x, y) {
    const horizontal = x < 0.38 ? "left" : x > 0.62 ? "right" : "";
    const vertical = y < 0.38 ? "up" : y > 0.62 ? "down" : "";
    if (!horizontal && !vertical) return "Your head is facing straight ahead.";
    if (!vertical) return `Your head is turned to the ${horizontal}.`;
    if (!horizontal) return `Your head is tilted ${vertical}.`;
    return `Your head is tilted ${vertical} and to the ${horizontal}.`;
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
function contains(region, px, py, pad = 0) {
    return px >= region.left - pad && px <= region.right + pad && py >= region.top - pad && py <= region.bottom + pad;
}
function findLookTarget(x, y, regions, viewport) {
    const px = x * viewport.width;
    const py = y * viewport.height;
    const upper = regions.find((region)=>region.name === UPPER_BOX);
    const lower = regions.find((region)=>region.name === LOWER_BOX);
    const heading = regions.find((region)=>region.name === HEADING);
    const detectButton = regions.find((region)=>region.name === DETECT_BUTTON);
    const headerBottom = Math.max(heading?.bottom ?? 0, detectButton?.bottom ?? 0);
    const headerLimit = upper ? Math.min(headerBottom + 24, upper.top - 12) : headerBottom + 24;
    if (py <= headerLimit && heading && detectButton) {
        // An upward look swaps left and right against the boxes, so the
        // heading and the corner button are chosen from the mirrored position.
        const headerX = viewport.width - px;
        const split = (heading.right + detectButton.left) / 2;
        return headerX <= split ? heading : detectButton;
    }
    const helmetX = viewport.width - px;
    const centerX = viewport.width / 2;
    const sideBoxes = [
        upper,
        lower
    ].filter(Boolean).filter((box)=>{
        const boxCenterX = (box.left + box.right) / 2;
        return helmetX >= centerX ? boxCenterX > centerX + 30 : boxCenterX < centerX - 30;
    });
    if (sideBoxes.length && Math.abs(helmetX - centerX) > viewport.width * 0.06) {
        const top = Math.min(...sideBoxes.map((box)=>box.top)) - 80;
        const bottom = Math.max(...sideBoxes.map((box)=>box.bottom)) + 80;
        if (py >= top && py <= bottom) {
            return sideBoxes.reduce((closest, box)=>{
                const mid = (box.top + box.bottom) / 2;
                const closestMid = (closest.top + closest.bottom) / 2;
                return Math.abs(py - mid) < Math.abs(py - closestMid) ? box : closest;
            });
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
    const vision = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mediapipe$2f$tasks$2d$vision$2f$vision_bundle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FilesetResolver"].forVisionTasks(VISION_WASM_URL);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mediapipe$2f$tasks$2d$vision$2f$vision_bundle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaceLandmarker"].createFromOptions(vision, {
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
                const raw = estimateRawGaze(result.faceLandmarks?.[0]);
                if (!raw) {
                    smooth = null;
                    emit({
                        expression,
                        gaze: null
                    });
                } else if (!baseline) {
                    samples.push(raw);
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
}),
]})(),
"[externals]/next/dist/server/app-render/module-loading/track-module-loading.external.js [external] (next/dist/server/app-render/module-loading/track-module-loading.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/module-loading/track-module-loading.external.js", () => require("next/dist/server/app-render/module-loading/track-module-loading.external.js"));

module.exports = mod;
}),
"[project]/src/features/expression/components/FaceExpressions.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "FaceExpressions-module__8w0Rhq__active",
  "button": "FaceExpressions-module__8w0Rhq__button",
  "card": "FaceExpressions-module__8w0Rhq__card",
  "centerCue": "FaceExpressions-module__8w0Rhq__centerCue",
  "centerLabel": "FaceExpressions-module__8w0Rhq__centerLabel",
  "error": "FaceExpressions-module__8w0Rhq__error",
  "expression": "FaceExpressions-module__8w0Rhq__expression",
  "gazeText": "FaceExpressions-module__8w0Rhq__gazeText",
  "ghostButton": "FaceExpressions-module__8w0Rhq__ghostButton",
  "header": "FaceExpressions-module__8w0Rhq__header",
  "helmet": "FaceExpressions-module__8w0Rhq__helmet",
  "hiddenVideo": "FaceExpressions-module__8w0Rhq__hiddenVideo",
  "label": "FaceExpressions-module__8w0Rhq__label",
  "page": "FaceExpressions-module__8w0Rhq__page",
  "side": "FaceExpressions-module__8w0Rhq__side",
  "stage": "FaceExpressions-module__8w0Rhq__stage",
  "status": "FaceExpressions-module__8w0Rhq__status",
  "stop": "FaceExpressions-module__8w0Rhq__stop",
  "subtitle": "FaceExpressions-module__8w0Rhq__subtitle",
  "title": "FaceExpressions-module__8w0Rhq__title",
});
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0scxzki4db08b._.js.map