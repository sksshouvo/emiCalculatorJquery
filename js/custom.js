function selectLoanType(that){
    if(that === "monthly"){
        $("#loanTypeChange").html("Monthly Payment (EMI)")
    }else{
        $("#loanTypeChange").html("Yearly Payment (EMI)")
    }
}

function calculateEmi(){
var loan_amt = $("#loan_amount")
var loan_type = $("#loan_type")
var loan_term = $("#loan_term")
var interest_rate = $("#interest_rate")
var emiAmt = $("#emiAmt")
var totalPayment = $("#totalPayment")
var totalInterest = $("#totalInterest")

if(!loan_amt.val()){
    alert("Invalid Loan Amount")
    loan_amt.focus()
    return false
}
if(!loan_type.val()){
    alert("No Loan Type is selected")
    loan_type.focus()
    return false
}
if(!loan_term.val()){
    alert("Invalid Loan Term")
    loan_term.focus()
    return false
}
if(!interest_rate.val()){
    alert("Invalid Interest rate")
    interest_rate.focus()
    return false
}
        var N = 1 * loan_term.val();
        var I = (interest_rate.val() / 100) / loan_term.val();
        var v = Math.pow((1 + I), N);
        var t = (I * v) / (v - 1);
        var result = Math.round(loan_amt.val() * t).toFixed(2);

        var tp = (result*loan_term.val()).toFixed(2)
        var ti = (tp - loan_amt.val()).toFixed(2)
        emiAmt.html(result)
        totalPayment.html(tp)
        totalInterest.html(ti)
        console.log(t)

}
function resetForm(){
    var loan_amt = $("#loan_amount")
    var loan_type = $("#loan_type")
    var loan_term = $("#loan_term")
    var interest_rate = $("#interest_rate")
    var emiAmt = $("#emiAmt")
    var totalPayment = $("#totalPayment")
    
    var totalInterest = $("#totalInterest")
        loan_amt.val("")
        loan_type.val("")
        loan_term.val("")
        interest_rate.val("")
        emiAmt.html("0.00")
        totalPayment.html("0.00")
        totalInterest.html("0.00")

}
