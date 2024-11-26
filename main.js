function calcuteBMi(){
    let weight=document.getElementById('weight').value
    console.log(weight);
    let height=document.getElementById('height').value
    console.log(height);
    
    let bmi=(weight / ((height * height)
    / 10000)).toFixed(2);
    if(bmi<18.5){
        result.innerHTML=`Underweight ${bmi}`
    }else if((bmi>=18.6 && bmi<=25.9)){
        result.innerHTML=`Normal weight ${bmi}`
        
     }else{
        result.innerHTML=`obsity `
     }
    
}