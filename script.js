const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
const table = document.querySelector('table');
const tfoot =table.createTFoot();
const row = tfoot.insertRow();
const cell1 = row.insertCell();
const cell2 = row.insertCell();

const getSum = () => {
	const prices = document.querySelectorAll('.prices');
    let total = 0;
    for (let price of prices) {
        total += Math.floor(price.innerText);
    }
    cell1.innerText = "Total";
    cell2.innerText = total;
};

getSumBtn.addEventListener("click", getSum);

