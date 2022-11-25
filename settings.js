const Settings = (()=>{
    const S = {}


    //color settings
    S.canvasColor = 'rgb(20,20,20)'

    //quicksort settings
    S.arrayToSortLenth = 100
    S.arrayColor = 'grey'
    S.pivotColor = 'rgb(80,200,255)'
    S.oldPivotColor = 'rgb(70,70,70)'
    S.speed = 20

    return S
})()

const mod = (m,n)=>{
    return (m%n + n)%n
}