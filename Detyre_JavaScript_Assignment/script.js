function withdraw(person, amount) {
    
    if (amount > person.balance) {
        console.log("Withdrawal cannot be processed due to insufficient funds.");
    } else {
        
        person.balance -= amount;
        console.log(`Withdrawal successful. New balance: ${person.balance}`);
    }
}


let person = {
    name: "noizy",
    balance: 1000
};

withdraw(person, 500);  
withdraw(person, 600);  