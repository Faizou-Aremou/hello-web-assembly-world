const importObject = {
  imports: {
    imported_func: arg => {
      console.log("is called", arg);
    }
  }
};

WebAssembly.instantiateStreaming(fetch("https://mdn.github.io/webassembly-examples/js-api-examples/simple.wasm"), importObject).then(obj => {
  const exported_func = obj.instance.exports.exported_func as CallableFunction;
  console.log('exported_func', exported_func())
}) 