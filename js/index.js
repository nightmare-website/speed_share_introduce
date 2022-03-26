
window.onload = function () {
  var devicewidth = document.documentElement.clientWidth;
  var scale = devicewidth / 1080;  // 分母——设计稿的尺寸
  // document.body.style.zoom = scale;
  var btn = document.getElementById("downBtn");
  btn.onclick = function () {
    window.location.href = "#download";
  };
  var devicewidth = document.documentElement.clientWidth;
  var height =document.documentElement.clientHeight;
  console.log(height);
  console.log(devicewidth);
  $("#header").load("header.html");
  $("#down-android").click(function () {
    window.location.href = "https://www.coolapk.com/apk/com.nightmare.remote";
  });
  $("#down-macos").click(function () {
    window.location.href = "https://wwa.lanzous.com/i8TZjotvu2b";
  });
};

window.onresize = function () {  
  console.log('监听变化')

  var devicewidth = document.documentElement.clientWidth;
  var scale = devicewidth / 1080;  // 分母——设计稿的尺寸
  // document.body.style.zoom = scale;
 // watchChange
};
function onClick(data) {
  window.open(data)
}
