/// fetch wasm file and inject the js file
window.Module = {};

let file = "tetanotes";
let wasm_file = file +".wasm";
let js_file = file+".js";
fetch(wasm_file)
  .then(response => response.arrayBuffer())
  .then(bytes => {
    Module.wasmBinary = bytes;

    console.log("wasm has loaded..");
    let script = document.createElement('script');
    script.src = js_file
    document.body.appendChild(script);
    if(window.wasm_load_callback){
        console.log("js glue code has loaded.. calling a custom callback");
        window.wasm_load_callback();
    }

  });


