/// fetch wasm file and inject the js file
window.Module = {};

let file = "tetanotes";
let js_file = file+".js";

var callback = function(){
      // Handler when the DOM is fully loaded
    let script = document.createElement('script');
    script.src = js_file;
    document.body.appendChild(script);
};

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  callback();
} else {
  document.addEventListener("DOMContentLoaded", callback);
}


