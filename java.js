let balance = 0;          // User's balance of coins
let mineRate = 1;         // Coins earned per mining action
let miningInterval = null; // Interval variable to control mining

const NAIRA_PER_COIN = 10; // Conversion rate: 1 coin = 10 Naira

// Update the displayed balance and mining rate
function updateDisplay() {
    document.getElementById("balance").innerText = balance;
    document.getElementById("mine-rate").innerText = mineRate;
    document.getElementById("naira-balance").innerText = balance * NAIRA_PER_COIN;
}

// Mine function to increase balance continuously while button is held down
function startMining() {
    if (!miningInterval) {
        miningInterval = setInterval(() => {
            balance += mineRate;
            updateDisplay();
        }, 100); // Mines every 100 milliseconds (0.1 second)
    }
}

// Stop mining when button is released
function stopMining() {
    clearInterval(miningInterval);
    miningInterval = null;
}

// Buy upgrade function to increase mining rate
function buyUpgrade(cost, increment) {
    if (balance >= cost) {
        balance -= cost;
        mineRate += increment;
        updateDisplay();
    } else {
        alert("Not enough coins to purchase this upgrade!");
    }
}

// Withdraw function
function withdraw() {
    const accountNumber = document.getElementById("account-number").value;
    const nairaAmount = balance * NAIRA_PER_COIN; // Convert balance to Naira

    // Check if the user has enough balance
    if (balance < 10) {
        alert("You need at least 10 coins to withdraw.");
        return;
    }

    // Validate the account number (assuming it's at least 10 digits)
    if (accountNumber === "" || accountNumber.length < 10) {
        alert("Please enter a valid account number.");
        return;
    }

    // Simulate a transaction
    alert(`You have withdrawn ₦${nairaAmount.toFixed(2)} to account number ${accountNumber}.`);

    // Reset balance after withdrawal
    balance = 0; 
    updateDisplay();
}

// Event listeners for pressing and releasing the "Mine" button
const mineButton = document.getElementById("mine-button");
mineButton.addEventListener("mousedown", startMining);  // Start mining when button is pressed
mineButton.addEventListener("mouseup", stopMining);     // Stop mining when button is released
mineButton.addEventListener("mouseleave", stopMining);  // Stop mining if mouse leaves the button

// Event listener for withdraw button
const withdrawButton = document.getElementById("withdraw-button");
withdrawButton.addEventListener("click", withdraw); // Withdraw in Naira

// Initial display update
updateDisplay();
// Withdraw function
// Withdraw function
function withdraw() {
    const accountNumber = document.getElementById("account-number").value;
    const accountName = document.getElementById("account-name").value;
    const bankName = document.getElementById("bank-name").value;
    const nairaAmount = balance * NAIRA_PER_COIN; // Convert balance to Naira

    // Check if the user has enough balance
    if (balance < 10) {
        alert("You need at least 10 coins to withdraw.");
        return;
    }

    // Validate the account number and other fields
    if (accountNumber === "" || accountNumber.length < 10) {
        alert("Please enter a valid account number.");
        return;
    }
    if (accountName === "") {
        alert("Please enter your account name.");
        return;
    }
    if (bankName === "") {
        alert("Please enter your bank name.");
        return;
    }

    // Show modal with success message and receipt
    const receiptMessage = `Withdrawal Successful!<br>
    Amount: ₦${nairaAmount.toFixed(2)}<br>
    Account Name: ${accountName}<br>
    Account Number: ${accountNumber}<br>
    Bank Name: ${bankName}`;
    document.getElementById("receipt").innerHTML = receiptMessage;

    // Display the modal
    document.getElementById("modal").style.display = "block";

    // Reset balance after withdrawal
    balance = 0; 
    updateDisplay();
}

// Event listener to close the modal
document.getElementById("modal-close").onclick = function() {
    document.getElementById("modal").style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Event listener to close the modal
document.getElementById("modal-close").onclick = function() {
    document.getElementById("modal").style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
