// let button=document.getElementById('btn')
// button.addEventListener('click', ()=> {
//     const height = parseInt(document.getElementById('height').value); 
//     const weight = parseInt(document.getElementById('weight').value);
//     const res =document.getElementById('output');
//     let height_status=false,weight_status=false;
//     if (height === '' || isNaN(height) || (height <=0)) {
//         // let bmi = weight / (height * height);
//         document.getElementById('height_error').innerHTML= 'Please provide a valid height';
//     } else {
//         document.getElementById('height_error').innerHTML= '';
//         height_status=true;
//     }

//     if (weight === '' || isNaN(weight) || (weight <=0)) {
//         // let bmi = weight / (height * height);
//         document.getElementById('weight_error').innerHTML= 'Please provide a valid weight';
//     } else {
//         document.getElementById('weight_error').innerHTML= '';
//         weight_status=true;
//     }

//     if(height_status && weight_status){
//         const bmi = weight /( (height * height)/10000).toFixed(2);

//         if(bmi<18.6){
//             res.innerHTML="Under Weight : "+bmi;
//         }
//         else if(bmi>=18.6 && bmi<24.9){
//             res.innerHTML="Normal : "+bmi;
//         }
//         else{
//             res.innerHTML="Over Weight : "+bmi;
//         }
//     }
//     else {
//         alert('The form has errors');
//         res.innerHTML='';
//     }
// });
// //  let button=document.querySelector("button")
// //  button.addEventListener("click",()=>{
   
// //  })

function calculateBMI() {
    const feet = parseInt(document.getElementById('feet').value);
    const inches = parseInt(document.getElementById('inches').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(feet) || isNaN(inches) || isNaN(weight)) {
        alert('Please fill in all fields correctly.');
        return;
    }

    // Convert height to meters
    const heightInMeters = (feet * 0.3048) + (inches * 0.0254);

    // Calculate BMI
    const bmi = weight / (heightInMeters * heightInMeters);

    // Display result
    document.getElementById('result').innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
}
