/// fetch wasm file and inject the js file
window.Module = {};

let file = "madnotes";
let wasm_file = file +".wasm";
let js_file = file+".js";
fetch(wasm_file)
  .then(response => response.arrayBuffer())
  .then(bytes => {
    Module.wasmBinary = bytes;

    let script = document.createElement('script');
    script.src = js_file
    document.body.appendChild(script);
  });


