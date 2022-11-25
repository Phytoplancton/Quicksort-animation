

const Resize = (()=>{
    R = {}

    R.resizeCanvas = (canvas)=>{
        canvas.width = window.innerWidth - 20
        canvas.height = window.innerHeight - 20
    }
    R.resizeAllCanvases = ()=>{
        R.resizeCanvas(canvas.canv)
    }
    R.resizeAllCanvases()

    window.addEventListener('resize',R.resizeAllCanvases) 

    console.log('canvas is resized!')


    return R
})()

arrayElement = ()=>{
    return {
        color: Settings.arrayColor,
        value: Math.random()
    }
}

const Quicksort = (()=>{
    const Q = {}

    Q.arrayToSort = []
    for (var i = 0; i<Settings.arrayToSortLenth; i++){
        Q.arrayToSort.push(arrayElement())
    }
    console.log(Q.arrayToSort)

    Q.drawArray = ()=>{
        canvas.ctx.clearRect(0,0,window.innerWidth,window.innerHeight)
        Q.arrayToSort.forEach((elem, index)=>{
            canvas.ctx.fillStyle = elem.color
            var barWidth = window.innerWidth * 0.7 / Settings.arrayToSortLenth 
            canvas.ctx.fillRect(
                window.innerWidth * 0.15 + barWidth*index,
                window.innerHeight * 0.9,
                barWidth*0.9, 
                -window.innerHeight * 0.8 * elem.value
            )
        })
    }
    Q.sort = async (beginning, end)=>{
        if (end - beginning < 1){return}
        var pivotElement = Q.arrayToSort[beginning]
        pivotElement.color = Settings.pivotColor
        var pivotValue = Q.arrayToSort[beginning].value
        for (var i = beginning + 1; i <= end; i++){
            var element = Q.arrayToSort[i]
            if (element.value < pivotValue){
                Q.arrayToSort.splice(i,1)
                Q.arrayToSort.splice(beginning,0,element)
            }
            Q.drawArray()
            await new Promise(resolve => setTimeout(resolve, Settings.speed))
        }
        pivotElement.color = Settings.oldPivotColor
        Q.drawArray()

        await Q.sort(beginning,Q.arrayToSort.indexOf(pivotElement)-1)
        await Q.sort(Q.arrayToSort.indexOf(pivotElement)+1,end)
    }

    Q.restoreColor = async ()=>{
        var n = 0
        var interval = setInterval(() => {
            Q.arrayToSort[n].color = Settings.arrayColor
            Q.drawArray()
            n++ 
            if (n === Q.arrayToSort.length){clearInterval(interval)}
        }, Settings.speed);
    }

    return Q
})()

mainLoop = (async ()=>{
    Quicksort.drawArray()
    await Quicksort.sort(0,Settings.arrayToSortLenth-1)
    Quicksort.restoreColor()
})()
