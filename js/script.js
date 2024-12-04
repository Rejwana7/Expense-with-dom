
// getting all the value



document.getElementById('calculate')
.addEventListener('click',function(){
    const income= getInputValueById('income')
    const software = getInputValueById('software')
    const courses = getInputValueById('courses')
    const internet = getInputValueById('internet')
    // console.log("working");

   
    // console.log(income,software, courses,internet);

     // console.table({income,software, courses,internet});

     if(income <=0 || isNaN(income)){
        // document.getElementById('income-error').classList.remove('hidden')
        showError('income-error')
        return
     }

     if(software <=0 || isNaN(software)){
        // document.getElementById('software-error').classList.remove('hidden')
        showError('software-error')
        return
     }
     if(courses <=0 || isNaN(courses)){
        document.getElementById('courses-error').classList.remove('hidden')
        return
     }
     if(internet <=0 || isNaN(internet)){
        document.getElementById('internet-error').classList.remove('hidden')
        return
     }
     
     const totalExpenses=software+courses+internet
     const balance= income-totalExpenses

     if(totalExpenses > income){
        // document.getElementById('logic-error').classList.remove('hidden')
        showError('logic-error')
        return
     }

    //  console.table({totalExpenses,balance})

    const totalExpensesElement= document.getElementById("total-expenses")
    totalExpensesElement.innerText=totalExpenses.toFixed(3)
    const balanceElement=document.getElementById('balance');
    balanceElement.innerText= balance.toFixed(3)
    
   const result= document.getElementById('results')
   result.classList.remove('hidden');

// // history

// function called
addToHistory(income,totalExpenses,balance)
//    const historyItem = document.createElement('div')
//    historyItem.className ='bg-white p-3 rounded-md border-l-2 border-indigo-500';
//    historyItem.innerHTML=`
//    <p class='text-xs text-gray-300'>${new Date().toLocaleDateString()}</p>
  
//    <p class='text-xs text-gray-500'>Income: ${formatCurrency(income)}</p>
//      <p class='text-xs text-gray-500'>Expenses: ${formatCurrency(totalExpenses)}</p>
//      <p class='text-xs text-gray-500'>Balance: ${balance.toFixed(3)}</p>

//     `;
//      const historyList=document.getElementById('history-list')
//      historyList.insertBefore(historyItem,historyList.firstChild)
//     //  ki insert korbo ,kothay insert korbo historylist e first child hisebe insert korbo

   

  })

//   <p class='text-xs text-gray-500'>Income: ${income.toFixed(3)}</p>



  document.getElementById('calculate-savings').addEventListener('click', function () {

   const savingPercentage=parseFloat(document.getElementById("savings").value)
//    console.table({savingPercentage});

const income= getInputValueById('income')
const software = getInputValueById('software')
const courses = getInputValueById('courses')
const internet = getInputValueById('internet')
const totalExpenses=software+courses+internet
const balance= income-totalExpenses
const savingAmount = (savingPercentage/100)*balance
console.log(savingAmount)
const savingElement= document.getElementById('savings-amount')
savingElement.innerText= savingAmount.toFixed(3)
const remainingBalanceValue= balance-savingAmount
const remainingBalance = document.getElementById('remaining-balance')
remainingBalance.innerText=remainingBalanceValue.toFixed(3)

  })


//   history tab functionality

const historyTab= document.getElementById('history-tab')
const assistantTab= document.getElementById('assistant-tab')
historyTab.addEventListener('click',function(){
    // historyTab.classList.add('text-white','bg-gradient-to-r','from-blue-500','to-purple-600')
    // historyTab.classList.remove('text-gray-600')
    // assistantTab.classList.remove('text-white','bg-gradient-to-r','from-blue-500','to-purple-600');
    // assistantTab.classList.add('text-gray-600')



    // document.getElementById('expense-form').classList.add('hidden')

    // document.getElementById('history-section').classList.remove('hidden')
    switchTab(historyTab, assistantTab, 'expense-form', 'history-section');
})


assistantTab.addEventListener('click',function(){

    // assistantTab.classList.add('text-white','bg-gradient-to-r','from-blue-500','to-purple-600')
    // assistantTab.classList.remove('text-gray-600')
    // historyTab.classList.remove('text-white','bg-gradient-to-r','from-blue-500','to-purple-600');
    // historyTab.classList.add('text-gray-600')



    // document.getElementById('expense-form').classList.remove('hidden')

    // document.getElementById('history-section').classList.add('hidden')
    switchTab(assistantTab, historyTab, 'history-section', 'expense-form') 
})



// live validation for input

// document.getElementById("income").addEventListener('input',function(){
//     const incomeValue= parseFloat(document.getElementById("income").value)
//     if(incomeValue <=0 || isNaN(incomeValue)){
//         document.getElementById('income-error').classList.remove('hidden')
//         return
//      }
// })