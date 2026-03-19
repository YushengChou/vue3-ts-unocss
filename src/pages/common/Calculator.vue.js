const display = ref('0');
const previous = ref(null);
const operator = ref(null);
const waitingForNew = ref(false);
const lastValue = ref(null);
/* ====== 數字輸入 ====== */
const inputNumber = (num) => {
    if (waitingForNew.value) {
        display.value = num === '.' ? '0.' : num;
        waitingForNew.value = false;
    }
    else {
        if (num === '.' && display.value.includes('.'))
            return;
        display.value =
            display.value === '0' && num !== '.'
                ? num
                : display.value + num;
    }
};
/* ====== 計算核心 ====== */
const operate = (a, b, op) => {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '×': return a * b;
        case '÷': return b === 0 ? 'Error' : a / b;
        default: return b;
    }
};
/* ====== 選擇運算子 ====== */
const chooseOperator = (op) => {
    const current = Number(display.value);
    if (operator.value && previous.value !== null && !waitingForNew.value) {
        const result = operate(previous.value, current, operator.value);
        display.value = String(result);
        previous.value = Number(result);
    }
    else {
        previous.value = current;
    }
    operator.value = op;
    waitingForNew.value = true;
    lastValue.value = null;
};
/* ====== 等於 ====== */
const calculate = () => {
    if (!operator.value)
        return;
    const current = Number(display.value);
    if (previous.value !== null && !waitingForNew.value) {
        const result = operate(previous.value, current, operator.value);
        display.value = String(result);
        lastValue.value = current;
        previous.value = Number(result);
    }
    else if (lastValue.value !== null) {
        const result = operate(Number(display.value), lastValue.value, operator.value);
        display.value = String(result);
    }
    waitingForNew.value = true;
};
/* ====== 清除 ====== */
const clearAll = () => {
    display.value = '0';
    previous.value = null;
    operator.value = null;
    lastValue.value = null;
    waitingForNew.value = false;
};
/* ====== 刪除 ====== */
const deleteOne = () => {
    if (waitingForNew.value)
        return;
    display.value =
        display.value.length === 1
            ? '0'
            : display.value.slice(0, -1);
};
/* ====== 鍵盤支援 ====== */
const handleKey = (e) => {
    if (!isNaN(Number(e.key)))
        inputNumber(e.key);
    if (e.key === '.')
        inputNumber('.');
    if (e.key === '+')
        chooseOperator('+');
    if (e.key === '-')
        chooseOperator('-');
    if (e.key === '*')
        chooseOperator('×');
    if (e.key === '/')
        chooseOperator('÷');
    if (e.key === 'Enter' || e.key === '=')
        calculate();
    if (e.key === 'Backspace')
        deleteOne();
    if (e.key === 'Escape')
        clearAll();
};
onMounted(() => window.addEventListener('keydown', handleKey));
onBeforeUnmount(() => window.removeEventListener('keydown', handleKey));
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u006d\u0069\u006e\u002d\u0068\u002d\u0073\u0063\u0072\u0065\u0065\u006e\u0020\u0066\u006c\u0065\u0078\u0020\u0069\u0074\u0065\u006d\u0073\u002d\u0063\u0065\u006e\u0074\u0065\u0072\u0020\u006a\u0075\u0073\u0074\u0069\u0066\u0079\u002d\u0063\u0065\u006e\u0074\u0065\u0072\u0020\u0070\u002d\u0035\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0062\u0067\u002d\u0067\u0072\u0061\u0079\u002d\u0031\u0030\u0030\u0020\u0064\u0061\u0072\u006b\u003a\u0062\u0067\u002d\u0067\u0072\u0061\u0079\u002d\u0037\u0030\u0030\u000a\u0020\u0020\u0020\u0020" },
});
/** @type {__VLS_StyleScopedClasses['
']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['min-h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['p-5
']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-100']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:bg-gray-700
']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0077\u002d\u0066\u0075\u006c\u006c\u0020\u006d\u0061\u0078\u002d\u0077\u002d\u005b\u0033\u0038\u0030\u0070\u0078\u005d\u0020\u0070\u002d\u005b\u0033\u0030\u0070\u0078\u005d\u0020\u0072\u006f\u0075\u006e\u0064\u0065\u0064\u002d\u005b\u0032\u0034\u0070\u0078\u005d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0062\u0061\u0063\u006b\u0064\u0072\u006f\u0070\u002d\u0062\u006c\u0075\u0072\u002d\u005b\u0032\u0030\u0070\u0078\u005d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0062\u0067\u002d\u0077\u0068\u0069\u0074\u0065\u002f\u0032\u0035\u0020\u0064\u0061\u0072\u006b\u003a\u0062\u0067\u002d\u005b\u0072\u0067\u0062\u0061\u0028\u0033\u0030\u002c\u0034\u0031\u002c\u0035\u0039\u002c\u0030\u002e\u0034\u0029\u005d\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0062\u006f\u0072\u0064\u0065\u0072\u0020\u0062\u006f\u0072\u0064\u0065\u0072\u002d\u0077\u0068\u0069\u0074\u0065\u002f\u0033\u0030\u0020\u0064\u0061\u0072\u006b\u003a\u0062\u006f\u0072\u0064\u0065\u0072\u002d\u0077\u0068\u0069\u0074\u0065\u002f\u0031\u0030\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0073\u0068\u0061\u0064\u006f\u0077\u002d\u005b\u0030\u005f\u0032\u0030\u0070\u0078\u005f\u0034\u0030\u0070\u0078\u005f\u0072\u0067\u0062\u0061\u0028\u0030\u002c\u0030\u002c\u0030\u002c\u0030\u002e\u0031\u0035\u0029\u005d\u000a\u0020\u0020\u0020\u0020\u0020\u0020" },
});
/** @type {__VLS_StyleScopedClasses['
']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-[380px]']} */ ;
/** @type {__VLS_StyleScopedClasses['p-[30px]']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-[24px]
']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['backdrop-blur-[20px]
']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white/25']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:bg-[rgba(30,41,59,0.4)]
']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-white/30']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:border-white/10
']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-[0_20px_40px_rgba(0,0,0,0.15)]
']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0074\u0065\u0078\u0074\u002d\u0072\u0069\u0067\u0068\u0074\u0020\u0074\u0065\u0078\u0074\u002d\u005b\u0034\u0032\u0070\u0078\u005d\u0020\u0066\u006f\u006e\u0074\u002d\u0062\u006f\u006c\u0064\u0020\u006d\u0062\u002d\u0035\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0074\u0065\u0078\u0074\u002d\u005b\u0023\u0031\u0031\u0031\u005d\u0020\u0064\u0061\u0072\u006b\u003a\u0074\u0065\u0078\u0074\u002d\u0077\u0068\u0069\u0074\u0065\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020" },
});
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
/** @type {__VLS_StyleScopedClasses['text-right']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[42px]']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-5
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
/** @type {__VLS_StyleScopedClasses['text-[#111]']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-white
']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
(__VLS_ctx.display);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "grid grid-cols-4 gap-3" },
});
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-cols-4']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.clearAll) },
    ...{ class: "btn wide" },
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['wide']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.deleteOne) },
    ...{ class: "btn" },
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.chooseOperator('÷');
            // @ts-ignore
            [display, clearAll, deleteOne, chooseOperator,];
        } },
    ...{ class: "btn op" },
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['op']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.inputNumber('7');
            // @ts-ignore
            [inputNumber,];
        } },
    ...{ class: "btn" },
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.inputNumber('8');
            // @ts-ignore
            [inputNumber,];
        } },
    ...{ class: "btn" },
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.inputNumber('9');
            // @ts-ignore
            [inputNumber,];
        } },
    ...{ class: "btn" },
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.chooseOperator('×');
            // @ts-ignore
            [chooseOperator,];
        } },
    ...{ class: "btn op" },
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['op']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.inputNumber('4');
            // @ts-ignore
            [inputNumber,];
        } },
    ...{ class: "btn" },
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.inputNumber('5');
            // @ts-ignore
            [inputNumber,];
        } },
    ...{ class: "btn" },
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.inputNumber('6');
            // @ts-ignore
            [inputNumber,];
        } },
    ...{ class: "btn" },
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.chooseOperator('-');
            // @ts-ignore
            [chooseOperator,];
        } },
    ...{ class: "btn op" },
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['op']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.inputNumber('1');
            // @ts-ignore
            [inputNumber,];
        } },
    ...{ class: "btn" },
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.inputNumber('2');
            // @ts-ignore
            [inputNumber,];
        } },
    ...{ class: "btn" },
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.inputNumber('3');
            // @ts-ignore
            [inputNumber,];
        } },
    ...{ class: "btn" },
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.chooseOperator('+');
            // @ts-ignore
            [chooseOperator,];
        } },
    ...{ class: "btn op" },
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['op']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.inputNumber('0');
            // @ts-ignore
            [inputNumber,];
        } },
    ...{ class: "btn wide" },
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['wide']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.inputNumber('.');
            // @ts-ignore
            [inputNumber,];
        } },
    ...{ class: "btn" },
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.calculate) },
    ...{ class: "btn equal" },
});
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['equal']} */ ;
// @ts-ignore
[calculate,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
//# sourceMappingURL=Calculator.vue.js.map