import { ref, reactive, onMounted, onUnmounted, openBlock, createElementBlock, normalizeStyle } from "vue";
import lottie from "../../node_modules/lottie-web/build/player/lottie.js";
import jsonData from "./jsons/jsons.js";
import { getEffect } from "./utils/getEffect.js";
const _sfc_main = {
  __name: "UseAnimations",
  props: {
    name: String,
    loop: Boolean,
    autoplay: Boolean,
    size: {
      type: Number,
      default: 24
    },
    strokeColor: {
      type: String,
      default: "inherit"
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
    }
  },
  setup(__props) {
    const props = __props;
    const getRandomId = (key) => `${key}_i${Math.floor(Math.random() * 1e4 + 1)}`;
    const defaultStyles = ref();
    let anim = reactive();
    const animation_container = ref(null);
    const animationId = getRandomId(props.name);
    const directionMenu = ref(1);
    onMounted(() => {
      anim = lottie.loadAnimation({
        container: animation_container.value,
        // the dom element that will contain the animation
        renderer: "svg",
        loop: props.loop || getEffect(props.name) == "LOOP_PLAY",
        autoplay: props.autoplay || getEffect(props.name) == "LOOP_PLAY",
        animationData: jsonData[props.name].default,
        // the path to the animation json
        rendererSettings: {
          // LOADS DOM ELEMENTS WHEN NEEDED. MIGHT SPEED UP INITIALIZATION FOR LARGE NUMBER OF ELEMENTS.
          progressiveLoad: true,
          // lottie-web missing id type
          // @ts-ignore-next-line
          id: animationId
        },
        ...props.options
      });
      if (props.name == "CLICK_PLAY_AND_BACKWARDS") {
        if (props.reverse) {
          anim.setDirection(directionMenu.value);
          anim.play();
          directionMenu.value *= -1;
        }
      }
      defaultStyles.value = {
        overflow: "hidden",
        outline: "none",
        width: `${props.size}px`,
        height: `${props.size}px`,
        ...props.wrapperStyle
      };
      anim.setSpeed(props.speed);
    });
    onUnmounted(() => {
      setStyle(false);
    });
    const getClickPlayEvents = () => {
      if (getEffect(props.name) == "CLICK_PLAY") {
        anim.stop();
        anim.play();
      }
      if (getEffect(props.name) == "CLICK_PLAY_AND_SEGMENTS") {
        anim.playSegments([0, 60], true);
      }
      if (getEffect(props.name) == "CLICK_PLAY_AND_BACKWARDS") {
        anim.setDirection(directionMenu.value);
        anim.play();
        directionMenu.value *= -1;
      }
    };
    const getMouseEnterPlayEvents = () => {
      if (getEffect(props.name) === "HOVER_PLAY_AND_STOP") {
        anim.play();
      }
      if (getEffect(props.name) === "HOVER_PLAY_AND_BACKWARDS") {
        anim.setDirection(1);
        anim.play();
      }
    };
    const getMouseLeavePlayEvents = () => {
      if (getEffect(props.name) === "HOVER_PLAY_AND_STOP") {
        anim.stop();
      }
      if (getEffect(props.name) === "HOVER_PLAY_AND_BACKWARDS") {
        anim.setDirection(-1);
        anim.play();
      }
    };
    const setStyle = (status = true) => {
      if (status) {
        if (props.strokeColor || props.fillColor || props.pathCss) {
          try {
            const css = `#${animationId} path { ${props.strokeColor ? `stroke: ${props.strokeColor};` : ""}  ${props.fillColor ? `fill: ${props.fillColor};` : ""} ${props.pathCss || ""}}`;
            let sheetEl = document.getElementById("useAnimationsSheet");
            if (!sheetEl) {
              sheetEl = document.createElement("style");
              sheetEl.setAttribute("id", "useAnimationsSheet");
              sheetEl.appendChild(document.createTextNode(""));
              document.head.appendChild(sheetEl);
            }
            const sheet = sheetEl ? sheetEl.sheet || sheetEl.styleSheet : null;
            sheet.insertRule(css);
          } catch (err) {
            console.warn(
              `There's been a problem with deleting a CSSRule, please report that issue in https://github.com/useAnimations/react-useanimations`,
              err
            );
          }
        }
      } else {
        try {
          const sheetEl = document.getElementById("useAnimationsSheet");
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
          console.warn(
            `There's been a problem with deleting a CSSRule, please report that issue in https://github.com/useAnimations/react-useanimations`,
            err
          );
        }
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "animation_container",
        ref: animation_container,
        style: normalizeStyle(defaultStyles.value),
        onClick: getClickPlayEvents,
        onMouseenter: getMouseEnterPlayEvents,
        onMouseleave: getMouseLeavePlayEvents
      }, null, 36);
    };
  }
};
export {
  _sfc_main as default
};
