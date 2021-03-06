/**
 * Created by Liu.Jun on 2020/5/17 10:41 下午.
 */

import Vue from 'vue';

import CheckboxesWidget from './CheckboxesWidget';
import RadioWidget from './RadioWidget';
import SelectWidget from './SelectWidget';

// webpack -> rollup
// const files = require.context('.', true, /\.js|vue$/);
// const widgetComponents = files.keys().reduce((preVal, curKey) => {
//     if (curKey !== './index.js') {
//         preVal[curKey.replace(/(\.\/|\/index\.(js|vue))/g, '')] = files(curKey).default;
//     }
//     return preVal;
// }, {});


const widgetComponents = {
    CheckboxesWidget,
    RadioWidget,
    SelectWidget
};

// 注册组件
Object.entries(widgetComponents).forEach(([key, value]) => Vue.component(key, value));

export default widgetComponents;
