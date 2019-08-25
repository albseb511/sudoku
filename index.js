// This js is for box click and for submitting a number

function onSubmit(id){
    if(!id)
    alert('select a box first')
    // console.log('onsubmit called')
    input=document.getElementById('input').value
    if(input=='1'||input=='2'||input=='3'||input=='4'||input=='5'||input=='6'||input=='7'||input=='8'||input=='9'||input=='1'){
        sudoku[id-1]=document.getElementById(id).innerHTML=parseInt(input)
        // console.log(id-1,'pos filled with value:',sudoku)

        !Hor(id)?console.log('error in row'):console.log('row no error')
        !Ver(id)?console.log('error in column'):console.log('col no error')
        !Grid(id)?console.log('error in Grid'):console.log('grid no error')
        }
    else if(input=='')
            sudoku[id-1]=document.getElementById(id).innerHTML=input
        else
            alert('wrong input')
    
    document.getElementById(parentId).lastChild.setAttribute('style','display:none')
    document.getElementById('input').value=''
    
}

function boxClick(i){
    // console.log('clicked box:',i)
    document.getElementById('submit').setAttribute('onclick',`onSubmit(${i})`)
    document.getElementById(parentId).lastChild.setAttribute('style','display:block')

}

function onFinalCheck(){
    var err=false
    for(let i=0;i<81;i++){
        !Hor(i+1)?err=true:console.log('row no error')
        !Ver(i+1)?err=true:console.log('col no error')
        !Grid(i+1)?err=true:console.log('grid no error')
    }
    if(err===true)
        document.getElementById('ans').textContent='NOT CORRECT'
    else
        document.getElementById('ans').textContent='YOU HAVE THE CORRECT ASNWER'
}