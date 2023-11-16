document.getElementById('grid').onclick = box

let strNum = ''
let strSymbols = ""
let strNumTwo = ''

let result = ''

function box   (elements)  {

     switch(elements.target.id) {
          case 'symbols':
               elements.target.innerText === "%" ?
                    strSymbols =  '/' : strSymbols = elements.target.innerText
          
               strNumTwo = strNum 
               strNum = ''
          
               break   

          case 'delete':
               strNum = ''
               strNumTwo = ''
               strSymbols = ''
          
               break

          case 'equal':
               result = strNumTwo + strSymbols + strNum
               result = result.replace('=','')
                    
               result = eval(result)
               document.getElementById('answer').innerHTML = result
     
               strNum = result
               
               strNumTwo = ""
               strSymbols = ""
          
               break
          
          default:
               strNum += elements.target.innerText  
     }   

     document.getElementById('answer').innerHTML = strNumTwo + strSymbols + strNum   
}
