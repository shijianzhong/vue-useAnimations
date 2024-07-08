<template>
    <div ref="animation_container" :style="defaultStyles" @click="getClickPlayEvents"
        @mouseenter="getMouseEnterPlayEvents" @mouseleave="getMouseLeavePlayEvents">
    </div>
</template>
<script setup>
// import lottie from 'lottie-web';
import lottie from './utils/js/modules/full'
import { getJsonData } from "./jsons/jsons"
import { getEffect } from "./utils/getEffect"
import { onMounted, onUnmounted, reactive, ref } from "vue";

console.log(lottie)
const getRandomId = (key) =>
    `${key}_i${Math.floor(Math.random() * 10000 + 1)}`;
const props = defineProps({

    name: String,
    loop: Boolean,
    autoplay: Boolean,
    customJson: {
        type: Object,
        default: {}
    },
    size: {
        type: Number,
        default: 24
    },
    strokeColor: {
        type: String,
        default: ''
    },
    fillColor: String,
    wrapperStyle: Object,
    pathCss: String,
    reverse: {
        type: Boolean,
        default: false
    },
    options: {
        type: Object
    },
    speed: {
        type: Number,
        default: 1
    },
})
const defaultStyles = ref();
let anim = reactive()
const animation_container = ref(null);
const animationId = getRandomId(props.name)
let directionMenu = ref(1)
let animationData = ref(null);
let animationDataRealValue = ref(null);
onMounted(async () => {
    

     
    let a = isEmptyObject(props.customJson);
    console.log(a)
    
    if (isEmptyObject(props.customJson)) {
        animationData.value = await getJsonData()
        if (!animationData.value[props.name]) {
            console.error(`不存在类型为：${props.name}的动画呢`)
            return
        }
        animationDataRealValue.value = animationData.value[props.name].default
    }else{

        animationDataRealValue.value = props.customJson
    }

    anim = lottie.loadAnimation({
        container: animation_container.value, // the dom element that will contain the animation
        renderer: 'svg',
        loop: props.loop || getEffect(props.name) == "LOOP_PLAY",
        autoplay: props.autoplay || getEffect(props.name) == "LOOP_PLAY",
        animationData: animationDataRealValue.value, // the path to the animation json
        rendererSettings: {
            // LOADS DOM ELEMENTS WHEN NEEDED. MIGHT SPEED UP INITIALIZATION FOR LARGE NUMBER OF ELEMENTS.
            progressiveLoad: true,
            // lottie-web missing id type
            // @ts-ignore-next-line
            id: animationId,
        },
        ...props.options,
    });
    if (props.name == "CLICK_PLAY_AND_BACKWARDS") {
        // EG CHECKBOX WHICH NEED TO BE CHECKED AS INITIAL STATE, LET'S PLAY THE ANIMATION ASAP AUTOMATICALLY
        if (props.reverse) {
            anim.setDirection(directionMenu.value);
            anim.play();
            directionMenu.value *= -1;
        }
    }
    defaultStyles.value = {
        overflow: 'hidden',
        outline: 'none',
        width: `${props.size}px`,
        height: `${props.size}px`,
        ...props.wrapperStyle
    };
    anim.setSpeed(props.speed)

    if (typeof window !== 'undefined' && document) {
        setStyle()
    }

})
onUnmounted(() => {
    if (typeof window !== 'undefined' && document) {
        setStyle(false)
    }

})

const isEmptyObject = (obj) =>{
    return JSON.stringify(obj) === '{}'
};
const getClickPlayEvents = () => {

    if (getEffect(props.name) == 'CLICK_PLAY') {
        anim.stop();
        anim.play();
    }
    if (getEffect(props.name) == "CLICK_PLAY_AND_SEGMENTS") {
        anim.playSegments([0, 60], true)
    }
    if (getEffect(props.name) == "CLICK_PLAY_AND_BACKWARDS") {
        anim.setDirection(directionMenu.value);
        anim.play();
        directionMenu.value *= -1;
    }

}
const getMouseEnterPlayEvents = () => {
    if (getEffect(props.name) === 'HOVER_PLAY_AND_STOP') {
        anim.play()
    }

    if (getEffect(props.name) === 'HOVER_PLAY_AND_BACKWARDS') {
        anim.setDirection(1);
        anim.play();
    }
}

const getMouseLeavePlayEvents = () => {
    if (getEffect(props.name) === 'HOVER_PLAY_AND_STOP') {
        anim.stop()
    }

    if (getEffect(props.name) === 'HOVER_PLAY_AND_BACKWARDS') {
        anim.setDirection(-1);
        anim.play();
    }
}


const setStyle = (status = true) => {

    if (status) {
        if (props.strokeColor || props.fillColor || props.pathCss) {
            try {
                const css = `#${animationId} path { ${props.strokeColor ? `stroke: ${props.strokeColor};` : ''}  ${props.fillColor ? `fill: ${props.fillColor};` : ''
                    } ${props.pathCss || ''}}`;
                console.log(css)
                let sheetEl = document.getElementById('useAnimationsSheet');

                // STYLESHEET HASN'T BEEN CREATED YET
                if (!sheetEl) {
                    sheetEl = document.createElement('style');
                    sheetEl.setAttribute('id', 'useAnimationsSheet');
                    sheetEl.appendChild(document.createTextNode(''));
                    document.head.appendChild(sheetEl);
                }

                const sheet = sheetEl ? sheetEl.sheet || sheetEl.styleSheet : null;
                sheet.insertRule(css);
            } catch (err) {
                // eslint-disable-next-line
                console.warn(
                    `There's been a problem with deleting a CSSRule`,
                    err
                );
            }
        }
    } else {
        try {
            const sheetEl = document.getElementById('useAnimationsSheet');
            const sheet = sheetEl ? sheetEl.sheet || sheetEl.styleSheet : null;

            if (sheet) {
                const animationRuleIndex = Array.from(sheet.cssRules).findIndex(
                    (rule) => rule.selectorText === `#${animationId} path`
                );

                if (animationRuleIndex !== -1) {
                    sheet.deleteRule(animationRuleIndex);
                }
            }
        } catch (err) {
            // eslint-disable-next-line
            console.warn(
                `There's been a problem with deleting a CSSRule`,
                err
            );
        }
    }
}
</script>