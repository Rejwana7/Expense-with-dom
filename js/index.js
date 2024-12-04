// history
const historyItem = document.createElement('div')
historyItem.className ='bg-white p-3 rounded-md border-l-2 border-indigo-500';
historyItem.innerHTML=`
<p class='text-xs text-gray-300'>${new Date().toLocaleDateString()}</p>

<p class='text-xs text-gray-500'>Income: ${formatCurrency(income)}</p>
  <p class='text-xs text-gray-500'>Expenses: ${formatCurrency(totalExpenses)}</p>
  <p class='text-xs text-gray-500'>Balance: ${balance.toFixed(3)}</p>

 `;
  const historyList=document.getElementById('history-list')
  historyList.insertBefore(historyItem,historyList.firstChild)
//     //  ki insert korbo ,kothay insert korbo historylist e first child hisebe insert korbo
