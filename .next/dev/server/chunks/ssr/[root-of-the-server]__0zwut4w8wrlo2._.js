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
            setLookMessage("No face detected, so I can't see where your eyes are looking.");
            return;
        }
        if (nextGaze.calibrating) {
            setActiveLook("");
            setLookMessage("Look at the center of the screen while your eyes are measured.");
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
        setLookMessage("Look at the center of the screen while your eyes are measured.");
    }
    function targetClass(name) {
        return activeLook === name ? "ring-2 ring-sky-500 ring-offset-2 ring-offset-white dark:ring-offset-neutral-950" : "";
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        ref: pageRef,
        className: "mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-4 p-4 md:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-look": "the title",
                        className: `rounded-2xl ${targetClass("the title")}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold",
                                children: "AI Face Expression Detection"
                            }, void 0, false, {
                                fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 max-w-xl text-sm text-neutral-500",
                                children: "Start the camera, then look around. The page names whatever your eyes are on."
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "data-look": "the detect button",
                        onClick: isRunning ? stop : start,
                        disabled: isStarting,
                        className: `rounded-full px-5 py-2.5 text-sm font-semibold transition disabled:opacity-60 ${targetClass("the detect button")} ${isRunning ? "bg-red-600 text-white" : "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"}`,
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid flex-1 gap-4 md:grid-cols-[1.4fr_0.9fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-look": "the camera preview",
                        className: `relative overflow-hidden rounded-2xl bg-black ${targetClass("the camera preview")}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                ref: videoRef,
                                autoPlay: true,
                                muted: true,
                                playsInline: true,
                                className: "aspect-[4/3] w-full -scale-x-100 object-cover"
                            }, void 0, false, {
                                fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            !isRunning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex items-center justify-center bg-neutral-950/80 px-6 text-center text-sm text-white",
                                children: "Camera is off. Click Detect face to begin."
                            }, void 0, false, {
                                fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                                lineNumber: 167,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                "data-look": "the expression result",
                                className: `rounded-2xl border border-neutral-200 p-4 dark:border-neutral-800 ${targetClass("the expression result")}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-neutral-500",
                                        children: "Detected expression"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-2xl font-semibold",
                                        children: expression
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                                        lineNumber: 179,
                                        columnNumber: 13
                                    }, this),
                                    isRunning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-sm text-green-600",
                                        children: "Camera is running"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, this),
                                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-sm text-red-500",
                                        children: error
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                                        lineNumber: 183,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                "data-look": "the eye direction message",
                                className: `flex flex-1 flex-col rounded-2xl border border-neutral-200 p-4 dark:border-neutral-800 ${targetClass("the eye direction message")}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-neutral-500",
                                        children: "Where you are looking"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                                        lineNumber: 190,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-xl font-semibold leading-snug",
                                        "aria-live": "polite",
                                        children: lookMessage
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                                        lineNumber: 191,
                                        columnNumber: 13
                                    }, this),
                                    isRunning && !gaze?.calibrating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        "data-look": "the recenter button",
                                        onClick: recenter,
                                        className: `mt-4 w-fit rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium dark:border-neutral-700 ${targetClass("the recenter button")}`,
                                        children: "Recenter eyes"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                                        lineNumber: 195,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            isRunning && gaze?.calibrating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none fixed top-1/2 left-1/2 z-40 -translate-x-1/2 -translate-y-1/2 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto size-5 rounded-full border-2 border-sky-500 bg-white shadow"
                    }, void 0, false, {
                        fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                        lineNumber: 210,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 rounded-full bg-neutral-950/80 px-3 py-1 text-sm text-white",
                        children: "Look here"
                    }, void 0, false, {
                        fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                        lineNumber: 211,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                lineNumber: 209,
                columnNumber: 9
            }, this),
            isRunning && gaze && !gaze.calibrating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none fixed z-50 size-7 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-sky-500/80 shadow-lg",
                style: {
                    left: `${gaze.x * 100}%`,
                    top: `${gaze.y * 100}%`
                }
            }, void 0, false, {
                fileName: "[project]/src/features/expression/components/FaceExpressions.js",
                lineNumber: 218,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/expression/components/FaceExpressions.js",
        lineNumber: 127,
        columnNumber: 5
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
const CALIBRATION_FRAMES = 10;
const GAZE_GAIN_X = 6;
const GAZE_GAIN_Y = 7;
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
function irisPoint(landmarks) {
    if (!landmarks || landmarks.length < 478) return null;
    const left = eyeRatio(landmarks, LEFT_EYE);
    const right = eyeRatio(landmarks, RIGHT_EYE);
    if (!left || !right) return null;
    // A higher iris ratio means the user is looking to their left.
    const lookingLeft = (left.x + right.x) / 2;
    return {
        x: 1 - lookingLeft,
        y: (left.y + right.y) / 2
    };
}
function eyeRatio(landmarks, eye) {
    const outer = landmarks[eye.outer];
    const inner = landmarks[eye.inner];
    const top = landmarks[eye.top];
    const bottom = landmarks[eye.bottom];
    const iris = landmarks[eye.iris];
    if (!outer || !inner || !top || !bottom || !iris) return null;
    const minX = Math.min(outer.x, inner.x);
    const maxX = Math.max(outer.x, inner.x);
    const minY = Math.min(top.y, bottom.y);
    const maxY = Math.max(top.y, bottom.y);
    return {
        x: (iris.x - minX) / (maxX - minX || 1),
        y: (iris.y - minY) / (maxY - minY || 1)
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
        x: clamp(0.5 + (lookRight - lookLeft), 0, 1),
        y: clamp(0.5 + (lookDown - lookUp), 0, 1)
    };
}
function estimateRawGaze(landmarks, categories) {
    const iris = irisPoint(landmarks);
    const blend = blendPoint(categories);
    if (iris && blend) {
        return {
            x: iris.x * 0.75 + blend.x * 0.25,
            y: iris.y * 0.75 + blend.y * 0.25
        };
    }
    return iris || blend;
}
function averagePoint(points) {
    const total = points.reduce((sum, point)=>({
            x: sum.x + point.x,
            y: sum.y + point.y
        }), {
        x: 0,
        y: 0
    });
    return {
        x: total.x / points.length,
        y: total.y / points.length
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
    return `You are looking at ${describeScreenZone(x, y)}. ${direction}`;
}
function findLookTarget(x, y, regions, viewport) {
    const px = x * viewport.width;
    const py = y * viewport.height;
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
        if (!expressionChanged && now - lastEmit < 90) return;
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
                x: smooth.x * 0.8 + point.x * 0.2,
                y: smooth.y * 0.8 + point.y * 0.2
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
                        baseline = averagePoint(samples);
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
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0zwut4w8wrlo2._.js.map