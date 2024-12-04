function getInnerTextById(id) {
    const innerText = document.getElementById(id).innerText
    return innerText


}





function getInputValueById(id){
    const value= document.getElementById(id).value
    const inputValue= parseFloat(value)
    return inputValue
}



// function getInputValueById(id){
//    return parseFloat(document.getElementById(id).value)
// }


function showError(id){
    document.getElementById(id).classList.remove('hidden');
}
function formatCurrency(amount){
    return `${amount.toFixed(3)}`
}

function addToHistory(income,totalExpenses,balance){


    const historyItem = document.createElement('div')
    historyItem.className ='bg-white p-3 rounded-md border-l-2 border-indigo-500';
    historyItem.innerHTML=`
    <p class='text-xs text-gray-300'>${new Date().toLocaleDateString()}</p>
   
    <p class='text-xs text-gray-500'>Income: ${formatCurrency(income)}</p>
      <p class='text-xs text-gray-500'>Expenses: ${formatCurrency(totalExpenses)}</p>
      <p class='text-xs text-gray-500'>Balance: ${formatCurrency(balance)}</p>
 
     `;
      const historyList=document.getElementById('history-list')
      historyList.insertBefore(historyItem,historyList.firstChild)
 //     //  ki insert korbo ,kothay insert korbo historylist e first child hisebe insert korbo
 

}
function switchTab(activeTab,inactiveTab,showSectionId,hideSectionId){
    activeTab.classList.add('text-white','bg-gradient-to-r','from-blue-500','to-purple-600')
    activeTab.classList.remove('text-gray-600')
    inactiveTab.classList.remove('text-white','bg-gradient-to-r','from-blue-500','to-purple-600');
    inactiveTab.classList.add('text-gray-600')



    document.getElementById(showSectionId).classList.add('hidden')

    document.getElementById(hideSectionId).classList.remove('hidden')
}


