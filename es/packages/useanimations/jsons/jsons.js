const jsons = /* @__PURE__ */ Object.assign({ "./alertCircle.json": () => import("./alertCircle.json.js"), "./alertOctagon.json": () => import("./alertOctagon.json.js"), "./alertTriangle.json": () => import("./alertTriangle.json.js"), "./archive.json": () => import("./archive.json.js"), "./arrowDown.json": () => import("./arrowDown.json.js"), "./arrowDownCircle.json": () => import("./arrowDownCircle.json.js"), "./arrowLeftCircle.json": () => import("./arrowLeftCircle.json.js"), "./arrowRightCircle.json": () => import("./arrowRightCircle.json.js"), "./arrowUp.json": () => import("./arrowUp.json.js"), "./arrowUpCircle.json": () => import("./arrowUpCircle.json.js"), "./behance.json": () => import("./behance.json.js"), "./bookmark.json": () => import("./bookmark.json.js"), "./calendar.json": () => import("./calendar.json.js"), "./checkBox.json": () => import("./checkBox.json.js"), "./checkmark.json": () => import("./checkmark.json.js"), "./codepen.json": () => import("./codepen.json.js"), "./copy.json": () => import("./copy.json.js"), "./download.json": () => import("./download.json.js"), "./dribbble.json": () => import("./dribbble.json.js"), "./edit.json": () => import("./edit.json.js"), "./error.json": () => import("./error.json.js"), "./explore.json": () => import("./explore.json.js"), "./facebook.json": () => import("./facebook.json.js"), "./folder.json": () => import("./folder.json.js"), "./github.json": () => import("./github.json.js"), "./heart.json": () => import("./heart.json.js"), "./help.json": () => import("./help.json.js"), "./home.json": () => import("./home.json.js"), "./infinity.json": () => import("./infinity.json.js"), "./info.json": () => import("./info.json.js"), "./instagram.json": () => import("./instagram.json.js"), "./linkedin.json": () => import("./linkedin.json.js"), "./loading.json": () => import("./loading.json.js"), "./loading2.json": () => import("./loading2.json.js"), "./loading3.json": () => import("./loading3.json.js"), "./lock.json": () => import("./lock.json.js"), "./mail.json": () => import("./mail.json.js"), "./maximizeMinimize.json": () => import("./maximizeMinimize.json.js"), "./maximizeMinimize2.json": () => import("./maximizeMinimize2.json.js"), "./menu.json": () => import("./menu.json.js"), "./menu2.json": () => import("./menu2.json.js"), "./menu3.json": () => import("./menu3.json.js"), "./menu4.json": () => import("./menu4.json.js"), "./microphone.json": () => import("./microphone.json.js"), "./microphone2.json": () => import("./microphone2.json.js"), "./notification.json": () => import("./notification.json.js"), "./notification2.json": () => import("./notification2.json.js"), "./playPause.json": () => import("./playPause.json.js"), "./playPauseCircle.json": () => import("./playPauseCircle.json.js"), "./plusToX.json": () => import("./plusToX.json.js"), "./pocket.json": () => import("./pocket.json.js"), "./radioButton.json": () => import("./radioButton.json.js"), "./scrollDown.json": () => import("./scrollDown.json.js"), "./searchToX.json": () => import("./searchToX.json.js"), "./settings.json": () => import("./settings.json.js"), "./settings2.json": () => import("./settings2.json.js"), "./share.json": () => import("./share.json.js"), "./skipBack.json": () => import("./skipBack.json.js"), "./skipForward.json": () => import("./skipForward.json.js"), "./star.json": () => import("./star.json.js"), "./thumbUp.json": () => import("./thumbUp.json.js"), "./toggle.json": () => import("./toggle.json.js"), "./trash.json": () => import("./trash.json.js"), "./trash2.json": () => import("./trash2.json.js"), "./twitter.json": () => import("./twitter.json.js"), "./userMinus.json": () => import("./userMinus.json.js"), "./userPlus.json": () => import("./userPlus.json.js"), "./userX.json": () => import("./userX.json.js"), "./video.json": () => import("./video.json.js"), "./video2.json": () => import("./video2.json.js"), "./visibility.json": () => import("./visibility.json.js"), "./visibility2.json": () => import("./visibility2.json.js"), "./volume.json": () => import("./volume.json.js"), "./youtube.json": () => import("./youtube.json.js"), "./youtube2.json": () => import("./youtube2.json.js"), "./zoomIn.json": () => import("./zoomIn.json.js"), "./zoomOut.json": () => import("./zoomOut.json.js") });
const jsonData = {};
for (const path in jsons) {
  const jsonName = path.replace(/^\.\/(.*)\.\w+$/, "$1");
  jsonData[jsonName] = jsons[path]();
}
export {
  jsonData as default
};