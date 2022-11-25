
document.body.style.margin = '0 px'
document.body.style.background = Settings.canvasColor

const canvas = (()=>{
    const C = {}

    C.canv = document.body.appendChild(document.createElement("canvas"));
    C.ctx = C.canv.getContext("2d");
    C.canv.style.position = "absolute";
    C.canv.style.background = Settings.canvasColor
    C.canv.style.border = `1px solid `;
    C.canv.style.zIndex = '0'
    console.log('canvas is readY!')

    return C
})()







