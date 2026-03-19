const { theme, toggleTheme } = useTheme();
const menuOpen = ref(false);
const features = [
    { name: '計算機', path: '/calculator', desc: '簡單計算功能' },
    { name: '倒數計時', path: '/countdown', desc: '倒數計時器' },
    { name: '擲骰子', path: '/dice', desc: '擲骰子' },
    { name: '日期計算', path: '/datecalculator', desc: '計算日期差異' },
    { name: '大轉盤', path: '/wheel', desc: '大轉盤' },
];
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "min-h-screen bg-gray-100 dark:bg-gray-700 transition-colors duration-300 relative" },
});
/** @type {__VLS_StyleScopedClasses['min-h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-100']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:bg-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.transition | typeof __VLS_components.Transition | typeof __VLS_components.transition | typeof __VLS_components.Transition} */
transition;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    name: "fade",
}));
const __VLS_2 = __VLS_1({
    name: "fade",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_5 } = __VLS_3.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.menuOpen = false;
            // @ts-ignore
            [menuOpen,];
        } },
    ...{ class: "fixed inset-0 bg-black/20 z-21 md:hidden" },
});
__VLS_asFunctionalDirective(__VLS_directives.vShow, {})(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.menuOpen) }, null, null);
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['inset-0']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-black/20']} */ ;
/** @type {__VLS_StyleScopedClasses['z-21']} */ ;
/** @type {__VLS_StyleScopedClasses['md:hidden']} */ ;
// @ts-ignore
[menuOpen,];
var __VLS_3;
let __VLS_6;
/** @ts-ignore @type {typeof __VLS_components.transition | typeof __VLS_components.Transition | typeof __VLS_components.transition | typeof __VLS_components.Transition} */
transition;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent1(__VLS_6, new __VLS_6({
    name: "fade",
}));
const __VLS_8 = __VLS_7({
    name: "fade",
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
const { default: __VLS_11 } = __VLS_9.slots;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ onClick: () => { } },
    ...{ class: "\u0066\u0069\u0078\u0065\u0064\u0020\u0074\u006f\u0070\u002d\u0031\u002f\u0032\u0020\u006c\u0065\u0066\u0074\u002d\u0031\u002f\u0032\u0020\u002d\u0074\u0072\u0061\u006e\u0073\u006c\u0061\u0074\u0065\u002d\u0078\u002d\u0031\u002f\u0032\u0020\u002d\u0074\u0072\u0061\u006e\u0073\u006c\u0061\u0074\u0065\u002d\u0079\u002d\u0031\u002f\u0032\u0020\u0077\u002d\u0034\u0038\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0062\u0067\u002d\u0077\u0068\u0069\u0074\u0065\u0020\u0064\u0061\u0072\u006b\u003a\u0062\u0067\u002d\u0067\u0072\u0061\u0079\u002d\u0038\u0030\u0030\u0020\u0074\u0072\u0061\u006e\u0073\u0069\u0074\u0069\u006f\u006e\u002d\u0063\u006f\u006c\u006f\u0072\u0073\u0020\u0064\u0075\u0072\u0061\u0074\u0069\u006f\u006e\u002d\u0033\u0030\u0030\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0073\u0068\u0061\u0064\u006f\u0077\u002d\u006c\u0067\u0020\u0072\u006f\u0075\u006e\u0064\u0065\u0064\u002d\u0062\u002d\u0078\u006c\u0020\u0070\u002d\u0034\u0020\u0066\u006c\u0065\u0078\u0020\u0066\u006c\u0065\u0078\u002d\u0063\u006f\u006c\u0020\u0073\u0070\u0061\u0063\u0065\u002d\u0079\u002d\u0032\u0020\u007a\u002d\u0032\u0032\u0020\u006d\u0064\u003a\u0068\u0069\u0064\u0064\u0065\u006e\u0020\u0070\u006f\u0069\u006e\u0074\u0065\u0072\u002d\u0065\u0076\u0065\u006e\u0074\u0073\u002d\u0061\u0075\u0074\u006f" },
});
__VLS_asFunctionalDirective(__VLS_directives.vShow, {})(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.menuOpen) }, null, null);
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['top-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['left-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['-translate-x-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['-translate-y-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['w-48
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
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:bg-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300
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
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-b-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-2']} */ ;
/** @type {__VLS_StyleScopedClasses['z-22']} */ ;
/** @type {__VLS_StyleScopedClasses['md:hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['pointer-events-auto']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.toggleTheme) },
    ...{ class: "\u0070\u0078\u002d\u0034\u0020\u0070\u0079\u002d\u0032\u0020\u0062\u006f\u0072\u0064\u0065\u0072\u0020\u0072\u006f\u0075\u006e\u0064\u0065\u0064\u0020\u0074\u0065\u0078\u0074\u002d\u0062\u006c\u0061\u0063\u006b\u0020\u0064\u0061\u0072\u006b\u003a\u0074\u0065\u0078\u0074\u002d\u0077\u0068\u0069\u0074\u0065\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0062\u006f\u0072\u0064\u0065\u0072\u002d\u0062\u006c\u0061\u0063\u006b\u0020\u0064\u0061\u0072\u006b\u003a\u0062\u006f\u0072\u0064\u0065\u0072\u002d\u0077\u0068\u0069\u0074\u0065\u0020\u0062\u0067\u002d\u0067\u0072\u0061\u0079\u002d\u0033\u0030\u0030\u0020\u0064\u0061\u0072\u006b\u003a\u0062\u0067\u002d\u0067\u0072\u0061\u0079\u002d\u0039\u0030\u0030\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0074\u0072\u0061\u006e\u0073\u0069\u0074\u0069\u006f\u006e\u002d\u0063\u006f\u006c\u006f\u0072\u0073\u0020\u0064\u0075\u0072\u0061\u0074\u0069\u006f\u006e\u002d\u0033\u0030\u0030" },
});
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['text-black']} */ ;
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
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['border-black']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:border-white']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-300']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:bg-gray-900
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
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
(__VLS_ctx.theme === 'light' ? '🌙' : '☀️');
// @ts-ignore
[menuOpen, toggleTheme, theme,];
var __VLS_9;
__VLS_asFunctionalElement1(__VLS_intrinsics.header, __VLS_intrinsics.header)({
    ...{ class: "flex justify-between items-center p-6 relative z-20" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['z-20']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({
    ...{ class: "text-4xl font-bold text-black dark:text-white" },
});
/** @type {__VLS_StyleScopedClasses['text-4xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-black']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-white']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "hidden md:flex items-center space-x-4" },
});
/** @type {__VLS_StyleScopedClasses['hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['md:flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['space-x-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.toggleTheme) },
    ...{ class: "\u0070\u0078\u002d\u0034\u0020\u0070\u0079\u002d\u0032\u0020\u0062\u006f\u0072\u0064\u0065\u0072\u0020\u0072\u006f\u0075\u006e\u0064\u0065\u0064\u0020\u0074\u0065\u0078\u0074\u002d\u0062\u006c\u0061\u0063\u006b\u0020\u0064\u0061\u0072\u006b\u003a\u0074\u0065\u0078\u0074\u002d\u0077\u0068\u0069\u0074\u0065\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0062\u006f\u0072\u0064\u0065\u0072\u002d\u0062\u006c\u0061\u0063\u006b\u0020\u0064\u0061\u0072\u006b\u003a\u0062\u006f\u0072\u0064\u0065\u0072\u002d\u0077\u0068\u0069\u0074\u0065\u0020\u0062\u0067\u002d\u0067\u0072\u0061\u0079\u002d\u0031\u0030\u0030\u0020\u0064\u0061\u0072\u006b\u003a\u0062\u0067\u002d\u0067\u0072\u0061\u0079\u002d\u0039\u0030\u0030\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0074\u0072\u0061\u006e\u0073\u0069\u0074\u0069\u006f\u006e\u002d\u0063\u006f\u006c\u006f\u0072\u0073\u0020\u0064\u0075\u0072\u0061\u0074\u0069\u006f\u006e\u002d\u0033\u0030\u0030" },
});
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['text-black']} */ ;
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
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['border-black']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:border-white']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-100']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:bg-gray-900
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
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
(__VLS_ctx.theme === 'light' ? '🌙' : '☀️');
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "md:hidden" },
});
/** @type {__VLS_StyleScopedClasses['md:hidden']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.menuOpen = !__VLS_ctx.menuOpen;
            // @ts-ignore
            [menuOpen, menuOpen, toggleTheme, theme,];
        } },
    ...{ class: "\u0070\u002d\u0032\u0020\u0062\u006f\u0072\u0064\u0065\u0072\u0020\u0072\u006f\u0075\u006e\u0064\u0065\u0064\u0020\u0074\u0065\u0078\u0074\u002d\u0062\u006c\u0061\u0063\u006b\u0020\u0064\u0061\u0072\u006b\u003a\u0074\u0065\u0078\u0074\u002d\u0077\u0068\u0069\u0074\u0065\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0062\u006f\u0072\u0064\u0065\u0072\u002d\u0062\u006c\u0061\u0063\u006b\u0020\u0064\u0061\u0072\u006b\u003a\u0062\u006f\u0072\u0064\u0065\u0072\u002d\u0077\u0068\u0069\u0074\u0065\u0020\u0062\u0067\u002d\u0067\u0072\u0061\u0079\u002d\u0031\u0030\u0030\u0020\u0064\u0061\u0072\u006b\u003a\u0062\u0067\u002d\u0067\u0072\u0061\u0079\u002d\u0039\u0030\u0030\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0074\u0072\u0061\u006e\u0073\u0069\u0074\u0069\u006f\u006e\u002d\u0063\u006f\u006c\u006f\u0072\u0073\u0020\u0064\u0075\u0072\u0061\u0074\u0069\u006f\u006e\u002d\u0033\u0030\u0030\u0020\u0072\u0065\u006c\u0061\u0074\u0069\u0076\u0065\u0020\u007a\u002d\u0033\u0030" },
});
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['text-black']} */ ;
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
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['border-black']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:border-white']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-100']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:bg-gray-900
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
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['z-30']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "transition-opacity duration-200" },
});
__VLS_asFunctionalDirective(__VLS_directives.vShow, {})(null, { ...__VLS_directiveBindingRestFields, value: (!__VLS_ctx.menuOpen) }, null, null);
/** @type {__VLS_StyleScopedClasses['transition-opacity']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-200']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "transition-opacity duration-200" },
});
__VLS_asFunctionalDirective(__VLS_directives.vShow, {})(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.menuOpen) }, null, null);
/** @type {__VLS_StyleScopedClasses['transition-opacity']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-200']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "p-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" },
});
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:grid-cols-2']} */ ;
/** @type {__VLS_StyleScopedClasses['md:grid-cols-3']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:grid-cols-4']} */ ;
for (const [feature] of __VLS_vFor((__VLS_ctx.features))) {
    let __VLS_12;
    /** @ts-ignore @type {typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink | typeof __VLS_components.routerLink | typeof __VLS_components.RouterLink} */
    routerLink;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
        key: (feature.path),
        to: (feature.path),
        ...{ class: "\u0062\u006c\u006f\u0063\u006b\u0020\u0070\u002d\u0036\u0020\u0062\u0067\u002d\u0077\u0068\u0069\u0074\u0065\u0020\u0064\u0061\u0072\u006b\u003a\u0062\u0067\u002d\u0067\u0072\u0061\u0079\u002d\u0038\u0030\u0030\u0020\u0072\u006f\u0075\u006e\u0064\u0065\u0064\u002d\u0078\u006c\u0020\u0073\u0068\u0061\u0064\u006f\u0077\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0068\u006f\u0076\u0065\u0072\u003a\u0073\u0068\u0061\u0064\u006f\u0077\u002d\u006c\u0067\u0020\u0074\u0072\u0061\u006e\u0073\u0069\u0074\u0069\u006f\u006e\u0020\u0074\u0072\u0061\u006e\u0073\u0066\u006f\u0072\u006d\u0020\u0068\u006f\u0076\u0065\u0072\u003a\u002d\u0074\u0072\u0061\u006e\u0073\u006c\u0061\u0074\u0065\u002d\u0079\u002d\u0031" },
    }));
    const __VLS_14 = __VLS_13({
        key: (feature.path),
        to: (feature.path),
        ...{ class: "\u0062\u006c\u006f\u0063\u006b\u0020\u0070\u002d\u0036\u0020\u0062\u0067\u002d\u0077\u0068\u0069\u0074\u0065\u0020\u0064\u0061\u0072\u006b\u003a\u0062\u0067\u002d\u0067\u0072\u0061\u0079\u002d\u0038\u0030\u0030\u0020\u0072\u006f\u0075\u006e\u0064\u0065\u0064\u002d\u0078\u006c\u0020\u0073\u0068\u0061\u0064\u006f\u0077\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0068\u006f\u0076\u0065\u0072\u003a\u0073\u0068\u0061\u0064\u006f\u0077\u002d\u006c\u0067\u0020\u0074\u0072\u0061\u006e\u0073\u0069\u0074\u0069\u006f\u006e\u0020\u0074\u0072\u0061\u006e\u0073\u0066\u006f\u0072\u006d\u0020\u0068\u006f\u0076\u0065\u0072\u003a\u002d\u0074\u0072\u0061\u006e\u0073\u006c\u0061\u0074\u0065\u002d\u0079\u002d\u0031" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    /** @type {__VLS_StyleScopedClasses['block']} */ ;
    /** @type {__VLS_StyleScopedClasses['p-6']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
    /** @type {__VLS_StyleScopedClasses['dark:bg-gray-800']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['shadow
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
    /** @type {__VLS_StyleScopedClasses['']} */ ;
    /** @type {__VLS_StyleScopedClasses['']} */ ;
    /** @type {__VLS_StyleScopedClasses['']} */ ;
    /** @type {__VLS_StyleScopedClasses['']} */ ;
    /** @type {__VLS_StyleScopedClasses['']} */ ;
    /** @type {__VLS_StyleScopedClasses['hover:shadow-lg']} */ ;
    /** @type {__VLS_StyleScopedClasses['transition']} */ ;
    /** @type {__VLS_StyleScopedClasses['transform']} */ ;
    /** @type {__VLS_StyleScopedClasses['hover:-translate-y-1']} */ ;
    const { default: __VLS_17 } = __VLS_15.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({
        ...{ class: "text-xl font-semibold mb-2 text-black dark:text-white" },
    });
    /** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-black']} */ ;
    /** @type {__VLS_StyleScopedClasses['dark:text-white']} */ ;
    (feature.name);
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "text-gray-500 dark:text-gray-300 text-sm" },
    });
    /** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
    /** @type {__VLS_StyleScopedClasses['dark:text-gray-300']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
    (feature.desc);
    // @ts-ignore
    [menuOpen, menuOpen, features,];
    var __VLS_15;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
//# sourceMappingURL=Home.vue.js.map