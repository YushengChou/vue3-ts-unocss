import { gsap } from "gsap";
// 可動態控制骰子數量
const diceCount = ref(3);
const diceRefs = ref([]);
const diceResults = ref([]);
// 修正：點數對應朝上的旋轉角度 (front朝上=1, top朝上=5等)
const faces = {
    1: { x: 0, y: 0 }, // front 朝上
    2: { x: 90, y: 0 }, // bottom 朝上
    3: { x: 0, y: -90 }, // right 朝上
    4: { x: 0, y: 90 }, // left 朝上
    5: { x: -90, y: 0 }, // top 朝上
    6: { x: 0, y: 180 } // back 朝上
};
// 計算總和
const total = computed(() => diceResults.value.reduce((a, b) => a + b, 0));
// 擲骰子
function rollDice() {
    diceResults.value = [];
    diceRefs.value.slice(0, diceCount.value).forEach((dice) => {
        const result = Math.floor(Math.random() * 6) + 1;
        diceResults.value.push(result);
        const target = faces[result];
        // 每次重置
        gsap.set(dice, { rotationX: 0, rotationY: 0 });
        const spinX = target.x + 360 * 3;
        const spinY = target.y + 360 * 3;
        gsap.timeline()
            .to(dice, { y: -80, duration: 0.25 })
            .to(dice, {
            rotationX: spinX,
            rotationY: spinY,
            duration: 1,
            ease: "power3.out"
        }, "<")
            .to(dice, { y: 0, duration: 0.35, ease: "bounce.out" }, "<");
    });
}
// 滑鼠拖擲
let startX = 0;
let startY = 0;
function onPointerDown(e) {
    startX = e.clientX;
    startY = e.clientY;
}
function onPointerUp(e) {
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    if (Math.sqrt(dx * dx + dy * dy) > 60)
        rollDice();
}
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['scene']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ onPointerdown: (__VLS_ctx.onPointerDown) },
    ...{ onPointerup: (__VLS_ctx.onPointerUp) },
    ...{ class: "\u0068\u002d\u0073\u0063\u0072\u0065\u0065\u006e\u0020\u0066\u006c\u0065\u0078\u0020\u0066\u006c\u0065\u0078\u002d\u0063\u006f\u006c\u0020\u0069\u0074\u0065\u006d\u0073\u002d\u0063\u0065\u006e\u0074\u0065\u0072\u0020\u006a\u0075\u0073\u0074\u0069\u0066\u0079\u002d\u0063\u0065\u006e\u0074\u0065\u0072\u0020\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0062\u0067\u002d\u0067\u0072\u0061\u0079\u002d\u0031\u0030\u0030\u0020\u0064\u0061\u0072\u006b\u003a\u0062\u0067\u002d\u0067\u0072\u0061\u0079\u002d\u0037\u0030\u0030" },
});
/** @type {__VLS_StyleScopedClasses['h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['
']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-100']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:bg-gray-700']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "mb-10 text-white text-sm sm:text-base" },
});
/** @type {__VLS_StyleScopedClasses['mb-10']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:text-base']} */ ;
for (const [n] of __VLS_vFor((3))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
        key: (n),
        ...{ class: "mr-4 text-base cursor-pointer text-gray-900 dark:text-gray-100" },
    });
    /** @type {__VLS_StyleScopedClasses['mr-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-base']} */ ;
    /** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-gray-900']} */ ;
    /** @type {__VLS_StyleScopedClasses['dark:text-gray-100']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
        type: "radio",
        value: (n),
    });
    (__VLS_ctx.diceCount);
    (n);
    // @ts-ignore
    [onPointerDown, onPointerUp, diceCount,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-12 mb-10" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-6']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:gap-10']} */ ;
/** @type {__VLS_StyleScopedClasses['md:gap-12']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-10']} */ ;
for (const [index] of __VLS_vFor((__VLS_ctx.diceCount))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        key: (index),
        ...{ class: "\u0073\u0063\u0065\u006e\u0065\u0020\u0072\u0065\u006c\u0061\u0074\u0069\u0076\u0065\u0020\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0077\u002d\u0032\u0030\u0020\u0068\u002d\u0032\u0030\u0020\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0073\u006d\u003a\u0077\u002d\u0032\u0036\u0020\u0073\u006d\u003a\u0068\u002d\u0032\u0036\u0020\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u006d\u0064\u003a\u0077\u002d\u0033\u0030\u0020\u006d\u0064\u003a\u0068\u002d\u0033\u0030\u0020\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0070\u0065\u0072\u0073\u0070\u0065\u0063\u0074\u0069\u0076\u0065\u002d\u0039\u0030\u0030" },
    });
    /** @type {__VLS_StyleScopedClasses['scene']} */ ;
    /** @type {__VLS_StyleScopedClasses['relative']} */ ;
    /** @type {__VLS_StyleScopedClasses['
    ']} */ ;
    /** @type {__VLS_StyleScopedClasses['']} */ ;
    /** @type {__VLS_StyleScopedClasses['']} */ ;
    /** @type {__VLS_StyleScopedClasses['']} */ ;
    /** @type {__VLS_StyleScopedClasses['']} */ ;
    /** @type {__VLS_StyleScopedClasses['']} */ ;
    /** @type {__VLS_StyleScopedClasses['']} */ ;
    /** @type {__VLS_StyleScopedClasses['']} */ ;
    /** @type {__VLS_StyleScopedClasses['']} */ ;
    /** @type {__VLS_StyleScopedClasses['w-20']} */ ;
    /** @type {__VLS_StyleScopedClasses['h-20']} */ ;
    /** @type {__VLS_StyleScopedClasses['
    ']} */ ;
    /** @type {__VLS_StyleScopedClasses['']} */ ;
    /** @type {__VLS_StyleScopedClasses['']} */ ;
    /** @type {__VLS_StyleScopedClasses['']} */ ;
    /** @type {__VLS_StyleScopedClasses['']} */ ;
    /** @type {__VLS_StyleScopedClasses['']} */ ;
    /** @type {__VLS_StyleScopedClasses['']} */ ;
    /** @type {__VLS_StyleScopedClasses['']} */ ;
    /** @type {__VLS_StyleScopedClasses['']} */ ;
    /** @type {__VLS_StyleScopedClasses['sm:w-26']} */ ;
    /** @type {__VLS_StyleScopedClasses['sm:h-26']} */ ;
    /** @type {__VLS_StyleScopedClasses['
    ']} */ ;
    /** @type {__VLS_StyleScopedClasses['']} */ ;
    /** @type {__VLS_StyleScopedClasses['']} */ ;
    /** @type {__VLS_StyleScopedClasses['']} */ ;
    /** @type {__VLS_StyleScopedClasses['']} */ ;
    /** @type {__VLS_StyleScopedClasses['']} */ ;
    /** @type {__VLS_StyleScopedClasses['']} */ ;
    /** @type {__VLS_StyleScopedClasses['']} */ ;
    /** @type {__VLS_StyleScopedClasses['']} */ ;
    /** @type {__VLS_StyleScopedClasses['md:w-30']} */ ;
    /** @type {__VLS_StyleScopedClasses['md:h-30']} */ ;
    /** @type {__VLS_StyleScopedClasses['
    ']} */ ;
    /** @type {__VLS_StyleScopedClasses['']} */ ;
    /** @type {__VLS_StyleScopedClasses['']} */ ;
    /** @type {__VLS_StyleScopedClasses['']} */ ;
    /** @type {__VLS_StyleScopedClasses['']} */ ;
    /** @type {__VLS_StyleScopedClasses['']} */ ;
    /** @type {__VLS_StyleScopedClasses['']} */ ;
    /** @type {__VLS_StyleScopedClasses['']} */ ;
    /** @type {__VLS_StyleScopedClasses['']} */ ;
    /** @type {__VLS_StyleScopedClasses['perspective-900']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "dice w-full h-full relative preserve-3d will-change-transform" },
        ref: (el => __VLS_ctx.diceRefs[index - 1] = el),
    });
    /** @type {__VLS_StyleScopedClasses['dice']} */ ;
    /** @type {__VLS_StyleScopedClasses['w-full']} */ ;
    /** @type {__VLS_StyleScopedClasses['h-full']} */ ;
    /** @type {__VLS_StyleScopedClasses['relative']} */ ;
    /** @type {__VLS_StyleScopedClasses['preserve-3d']} */ ;
    /** @type {__VLS_StyleScopedClasses['will-change-transform']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "face front" },
    });
    /** @type {__VLS_StyleScopedClasses['face']} */ ;
    /** @type {__VLS_StyleScopedClasses['front']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "dot center" },
    });
    /** @type {__VLS_StyleScopedClasses['dot']} */ ;
    /** @type {__VLS_StyleScopedClasses['center']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "face back" },
    });
    /** @type {__VLS_StyleScopedClasses['face']} */ ;
    /** @type {__VLS_StyleScopedClasses['back']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "dot tl" },
    });
    /** @type {__VLS_StyleScopedClasses['dot']} */ ;
    /** @type {__VLS_StyleScopedClasses['tl']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "dot tr" },
    });
    /** @type {__VLS_StyleScopedClasses['dot']} */ ;
    /** @type {__VLS_StyleScopedClasses['tr']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "dot ml" },
    });
    /** @type {__VLS_StyleScopedClasses['dot']} */ ;
    /** @type {__VLS_StyleScopedClasses['ml']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "dot mr" },
    });
    /** @type {__VLS_StyleScopedClasses['dot']} */ ;
    /** @type {__VLS_StyleScopedClasses['mr']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "dot bl" },
    });
    /** @type {__VLS_StyleScopedClasses['dot']} */ ;
    /** @type {__VLS_StyleScopedClasses['bl']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "dot br" },
    });
    /** @type {__VLS_StyleScopedClasses['dot']} */ ;
    /** @type {__VLS_StyleScopedClasses['br']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "face right" },
    });
    /** @type {__VLS_StyleScopedClasses['face']} */ ;
    /** @type {__VLS_StyleScopedClasses['right']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "dot tl" },
    });
    /** @type {__VLS_StyleScopedClasses['dot']} */ ;
    /** @type {__VLS_StyleScopedClasses['tl']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "dot center" },
    });
    /** @type {__VLS_StyleScopedClasses['dot']} */ ;
    /** @type {__VLS_StyleScopedClasses['center']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "dot br" },
    });
    /** @type {__VLS_StyleScopedClasses['dot']} */ ;
    /** @type {__VLS_StyleScopedClasses['br']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "face left" },
    });
    /** @type {__VLS_StyleScopedClasses['face']} */ ;
    /** @type {__VLS_StyleScopedClasses['left']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "dot tl" },
    });
    /** @type {__VLS_StyleScopedClasses['dot']} */ ;
    /** @type {__VLS_StyleScopedClasses['tl']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "dot tr" },
    });
    /** @type {__VLS_StyleScopedClasses['dot']} */ ;
    /** @type {__VLS_StyleScopedClasses['tr']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "dot bl" },
    });
    /** @type {__VLS_StyleScopedClasses['dot']} */ ;
    /** @type {__VLS_StyleScopedClasses['bl']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "dot br" },
    });
    /** @type {__VLS_StyleScopedClasses['dot']} */ ;
    /** @type {__VLS_StyleScopedClasses['br']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "face top" },
    });
    /** @type {__VLS_StyleScopedClasses['face']} */ ;
    /** @type {__VLS_StyleScopedClasses['top']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "dot tl" },
    });
    /** @type {__VLS_StyleScopedClasses['dot']} */ ;
    /** @type {__VLS_StyleScopedClasses['tl']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "dot tr" },
    });
    /** @type {__VLS_StyleScopedClasses['dot']} */ ;
    /** @type {__VLS_StyleScopedClasses['tr']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "dot bl" },
    });
    /** @type {__VLS_StyleScopedClasses['dot']} */ ;
    /** @type {__VLS_StyleScopedClasses['bl']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "dot br" },
    });
    /** @type {__VLS_StyleScopedClasses['dot']} */ ;
    /** @type {__VLS_StyleScopedClasses['br']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "dot center" },
    });
    /** @type {__VLS_StyleScopedClasses['dot']} */ ;
    /** @type {__VLS_StyleScopedClasses['center']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "face bottom" },
    });
    /** @type {__VLS_StyleScopedClasses['face']} */ ;
    /** @type {__VLS_StyleScopedClasses['bottom']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "dot tl" },
    });
    /** @type {__VLS_StyleScopedClasses['dot']} */ ;
    /** @type {__VLS_StyleScopedClasses['tl']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "dot br" },
    });
    /** @type {__VLS_StyleScopedClasses['dot']} */ ;
    /** @type {__VLS_StyleScopedClasses['br']} */ ;
    // @ts-ignore
    [diceCount, diceRefs,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.rollDice) },
    ...{ class: "\u0070\u0078\u002d\u0036\u0020\u0070\u0079\u002d\u0033\u0020\u0074\u0065\u0078\u0074\u002d\u006c\u0067\u0020\u0073\u006d\u003a\u0074\u0065\u0078\u0074\u002d\u0078\u006c\u0020\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0072\u006f\u0075\u006e\u0064\u0065\u0064\u002d\u0078\u006c\u0020\u0062\u0067\u002d\u0062\u006c\u0075\u0065\u002d\u0035\u0030\u0030\u0020\u0074\u0065\u0078\u0074\u002d\u0077\u0068\u0069\u0074\u0065\u0020\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0061\u0063\u0074\u0069\u0076\u0065\u003a\u0073\u0063\u0061\u006c\u0065\u002d\u0039\u0035\u0020\u0068\u006f\u0076\u0065\u0072\u003a\u0062\u0067\u002d\u0062\u006c\u0075\u0065\u002d\u0036\u0030\u0030\u0020\u0074\u0072\u0061\u006e\u0073\u0069\u0074\u0069\u006f\u006e" },
});
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['
']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blue-500']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['
']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['active:scale-95']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-blue-600']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "text-gray-900 dark:text-gray-100 text-lg mt-10" },
});
/** @type {__VLS_StyleScopedClasses['text-gray-900']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-gray-100']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-10']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
(__VLS_ctx.diceResults.join(', ') || 0);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
(__VLS_ctx.total);
// @ts-ignore
[rollDice, diceResults, total,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
//# sourceMappingURL=Dice.vue.js.map