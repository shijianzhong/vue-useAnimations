
const getClickAndPlaySegmentsEvents = (animation) => ({
  onClick: () => animation.playSegments([0, 60], true),
});

const getClickPlayEvents = (animation) => ({
  onClick: () => {
    animation.stop();
    animation.play();
  },
});

const getHoverPlayAndStop = (animation) => ({
  onMouseEnter: () => animation.play(),
  onMouseLeave: () => animation.stop(),
});

const getHoverPlayBackwardsEvents = (animation) => ({
  onMouseEnter: () => {
    animation.setDirection(1);
    animation.play();
  },
  onMouseLeave: () => {
    animation.setDirection(-1);
    animation.play();
  },
});

const getClickAndPlayBackwardsEvents = (animation, reverse) => {
  let directionMenu = 1;

  // EG CHECKBOX WHICH NEED TO BE CHECKED AS INITIAL STATE, LET'S PLAY THE ANIMATION ASAP AUTOMATICALLY
  if (reverse) {
    animation.setDirection(directionMenu);
    animation.play();
    directionMenu *= -1;
  }

  return {
    onClick: () => {
      animation.setDirection(directionMenu);
      animation.play();
      directionMenu *= -1;
    },
  };
};

export const getEvents = ({
  animation,
  reverse,
  animEffect,
}) => {
  if (animEffect === 'CLICK_PLAY_AND_SEGMENTS') {
    return getClickAndPlaySegmentsEvents(animation);
  }

  if (animEffect === 'CLICK_PLAY') {
    return getClickPlayEvents(animation);
  }

  if (animEffect === 'HOVER_PLAY_AND_STOP') {
    return getHoverPlayAndStop(animation);
  }

  if (animEffect === 'HOVER_PLAY_AND_BACKWARDS') {
    return getHoverPlayBackwardsEvents(animation);
  }

  if (animEffect === 'CLICK_PLAY_AND_BACKWARDS') {
    return getClickAndPlayBackwardsEvents(animation, reverse);
  }

  return getClickPlayEvents(animation);
};

