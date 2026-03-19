import gsap from 'gsap';
const inputText = ref('1,two,選項三,四,？？？？');
const items = ref([]);
const wheelRef = ref(null);
const result = ref('');
const rotating = ref(false);
const labelRefs = ref({});
const setLabelRef = (el, index) => {
    if (el instanceof HTMLDivElement) {
        labelRefs.value[index] = el;
    }
};
/** ✅ 累加旋轉角度（關鍵🔥） */
const currentRotation = ref(0);
const finished = ref(false);
/** 解析輸入 */
const parseItems = () => {
    items.value = inputText.value
        .split(',')
        .map(i => i.trim())
        .filter(Boolean);
};
watch(inputText, parseItems, { immediate: true });
watch(items, () => {
    labelRefs.value = {};
});
/** 每一塊角度 */
const anglePerItem = computed(() => {
    return 360 / (items.value.length || 1);
});
/** 轉盤樣式 */
const wheelStyle = computed(() => {
    const count = items.value.length;
    const segments = items.value.map((_, i) => {
        const start = i * anglePerItem.value;
        const end = start + anglePerItem.value;
        // 🎨 HSL 平均分布（關鍵🔥）
        const hue = Math.round((i / count) * 360);
        return `hsl(${hue}, 70%, 60%) ${start}deg ${end}deg`;
    });
    return {
        background: `conic-gradient(${segments.join(',')})`
    };
});
/** 🎯 旋轉（已修正多次旋轉 bug） */
const spin = async () => {
    if (rotating.value || items.value.length === 0 || finished.value)
        return;
    rotating.value = true;
    result.value = '';
    const count = items.value.length;
    const index = Math.floor(Math.random() * count);
    /** 轉盤旋轉角度 */
    const target = 360 * 5 +
        (360 - index * anglePerItem.value - anglePerItem.value / 2);
    await nextTick();
    /** ✅ 用 GSAP 累加（最穩🔥） */
    gsap.to(wheelRef.value, {
        rotate: `+=${target}`,
        duration: 3.5,
        ease: 'power4.out',
        onComplete: () => {
            result.value = items.value[index];
            finished.value = true; // 🔒 鎖住
            // ✅ 選中扇形動畫
            const selectedEl = labelRefs.value[index];
            if (selectedEl) {
                gsap.fromTo(selectedEl, { scale: 1 }, {
                    scale: 1.3,
                    duration: 0.3,
                    yoyo: true,
                    repeat: 3,
                    ease: 'power1.inOut',
                    transformOrigin: 'center center'
                });
            }
            rotating.value = false;
        }
    });
    /** 👉 防止數值爆掉（長時間使用） */
    currentRotation.value += target;
    if (currentRotation.value > 100000) {
        currentRotation.value %= 360;
        gsap.set(wheelRef.value, { rotate: currentRotation.value });
    }
};
/** 重置功能 */
const resetWheel = () => {
    if (!wheelRef.value)
        return;
    gsap.set(wheelRef.value, { rotate: 0 });
    currentRotation.value = 0;
    result.value = '';
    rotating.value = false;
    finished.value = false; // 🔓 解鎖
    // 重置文字縮放、光暈
    Object.values(labelRefs.value).forEach(el => {
        if (el) {
            gsap.set(el, { scale: 1 });
        }
    });
};
const wheelSize = ref(300); // 用於 rwd
/** 監控 wheel 尺寸 */
onMounted(() => {
    if (wheelRef.value) {
        const ro = new ResizeObserver(() => {
            // 此"!"在TypeScript為非空斷言（Non-Null Assertion Operator）表示此時不是 null 或 undefined
            if (wheelRef.value) {
                wheelSize.value = wheelRef.value.offsetWidth;
            }
        });
        ro.observe(wheelRef.value);
    }
});
/** 🎯 文字置中（極座標） */
const getLabelStyle = (i) => {
    const angle = anglePerItem.value * i;
    const mid = anglePerItem.value / 2;
    const size = wheelRef.value?.offsetWidth || 300;
    const radius = size * 0.35;
    return {
        transform: `
      translate(-50%, -50%)
      rotate(${angle + mid}deg)
      translateY(-${radius}px)
    `
    };
};
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['wheel']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "\u0070\u002d\u0034\u0020\u0066\u006c\u0065\u0078\u0020\u0066\u006c\u0065\u0078\u002d\u0063\u006f\u006c\u0020\u0069\u0074\u0065\u006d\u0073\u002d\u0063\u0065\u006e\u0074\u0065\u0072\u0020\u0067\u0061\u0070\u002d\u0036\u000a\u0020\u0020\u0020\u0020\u0062\u0067\u002d\u0067\u0072\u0061\u0064\u0069\u0065\u006e\u0074\u002d\u0074\u006f\u002d\u0062\u0072\u0020\u006d\u0069\u006e\u002d\u0068\u002d\u0073\u0063\u0072\u0065\u0065\u006e\u000a\u0020\u0020\u0020\u0020\u0066\u0072\u006f\u006d\u002d\u0067\u0072\u0061\u0079\u002d\u0031\u0030\u0030\u0020\u0074\u006f\u002d\u0067\u0072\u0061\u0079\u002d\u0032\u0030\u0030\u000a\u0020\u0020\u0020\u0020\u0064\u0061\u0072\u006b\u003a\u0066\u0072\u006f\u006d\u002d\u005b\u0023\u0030\u0032\u0030\u0036\u0031\u0037\u005d\u0020\u0064\u0061\u0072\u006b\u003a\u0074\u006f\u002d\u005b\u0023\u0030\u0066\u0031\u0037\u0032\u0061\u005d\u000a\u0020\u0020\u0020\u0020\u0074\u0072\u0061\u006e\u0073\u0069\u0074\u0069\u006f\u006e\u002d\u0063\u006f\u006c\u006f\u0072\u0073" },
});
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-6
']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gradient-to-br']} */ ;
/** @type {__VLS_StyleScopedClasses['min-h-screen
']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['from-gray-100']} */ ;
/** @type {__VLS_StyleScopedClasses['to-gray-200
']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:from-[#020617]']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:to-[#0f172a]
']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.textarea)({
    value: (__VLS_ctx.inputText),
    ...{ class: "w-full max-w-md p-3 rounded-lg border dark:bg-gray-800 dark:text-white" },
    rows: "3",
    placeholder: "輸入選項，用逗號分隔",
});
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-md']} */ ;
/** @type {__VLS_StyleScopedClasses['p-3']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:bg-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-white']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "relative flex justify-center items-center" },
});
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "pointer" },
});
/** @type {__VLS_StyleScopedClasses['pointer']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ref: "wheelRef",
    ...{ class: "wheel" },
    ...{ style: (__VLS_ctx.wheelStyle) },
});
/** @type {__VLS_StyleScopedClasses['wheel']} */ ;
for (const [item, i] of __VLS_vFor((__VLS_ctx.items))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        key: (i),
        ...{ class: "label" },
        ...{ style: (__VLS_ctx.getLabelStyle(i)) },
    });
    /** @type {__VLS_StyleScopedClasses['label']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "label-inner" },
        ref: (el => __VLS_ctx.setLabelRef(el, i)),
    });
    /** @type {__VLS_StyleScopedClasses['label-inner']} */ ;
    (item);
    // @ts-ignore
    [inputText, wheelStyle, items, getLabelStyle, setLabelRef,];
}
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex gap-4" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.spin) },
    disabled: (__VLS_ctx.rotating || __VLS_ctx.finished),
    ...{ class: "px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 disabled:opacity-50 transition" },
});
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gradient-to-r']} */ ;
/** @type {__VLS_StyleScopedClasses['from-blue-500']} */ ;
/** @type {__VLS_StyleScopedClasses['to-indigo-500']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:shadow-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:scale-105']} */ ;
/** @type {__VLS_StyleScopedClasses['active:scale-95']} */ ;
/** @type {__VLS_StyleScopedClasses['disabled:opacity-50']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.resetWheel) },
    disabled: (__VLS_ctx.rotating),
    ...{ class: "px-6 py-2 rounded-full bg-gray-400 dark:bg-gray-700 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 disabled:opacity-50 transition" },
});
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-400']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:bg-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:shadow-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:scale-105']} */ ;
/** @type {__VLS_StyleScopedClasses['active:scale-95']} */ ;
/** @type {__VLS_StyleScopedClasses['disabled:opacity-50']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
if (__VLS_ctx.result) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "text-xl font-bold dark:text-white" },
    });
    /** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
    /** @type {__VLS_StyleScopedClasses['dark:text-white']} */ ;
    (__VLS_ctx.result);
}
// @ts-ignore
[spin, rotating, rotating, finished, resetWheel, result, result,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
//# sourceMappingURL=Wheel.vue.js.map