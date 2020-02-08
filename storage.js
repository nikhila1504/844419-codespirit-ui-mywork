const APPOINTMENTS_KEY="appointments";

getAppointmentFromLocalStorage=()=>{
    let appointments=[];

    if(localStorage.getItem(APPOINTMENTS_KEY)){
        appointments=JSON.parse(localStorage.getItem(APPOINTMENTS_KEY));
    }
    return appointments;
}

addAppointmentFormsubmit=()=>{
    let appointments=getAppointmentFromLocalStorage();

    let firstName=document.querySelector("#fnm");
    let lastName=document.querySelector("#lnm");
    let personAge=document.querySelector("#age");
    let personEmail=document.querySelector("#ema");
    let personPhone=document.querySelector("#phone");
    let personAddress=document.querySelector("#myText");
    let personState=document.querySelector("#myText2");
    let personCountry=document.querySelector("#country");
    let pinCode=document.querySelector("#pin");
    let trainerPref=document.querySelector("#chkmale");
    let trainerPref=document.querySelector("#chkfemale");
    let trainerPref=document.querySelector("#chkothers");
    let physio=document.querySelector("#yes");
    let physio=document.querySelector("#no");
    let appointment=document.querySelector("#1");
    let suitablePackage=document.querySelector("#onetime");
    let quoteInr=document.querySelector("#result");
    let quotePaise=document.querySelector("#paise");

    let appointment={
        fName:firstName.value,
        lName:lastName.value,
        age:parseInt(personAge.value),
        email:personEmail.value,
        phone:personPhone.value,
        streetAddress:personAddress.value,
        city:personCity.value,
        state:personState.value,
        country:personCountry.value,
        pinval:pinCode.value,
        trainerPreference:trainerPref.value,
        therapist:physio.value,
        appointmentslot:appointment.value,
        package:suitablePackage.value,
        inr:quoteInr.value,
        paise:quotePaise.value
    };

    appointments.push(appointment);
    localStorage.setItem(APPOINTMENTS_KEY,JSON.stringify(appointments));
}

loadAppointments=()=>{
    let appointments=getAppointmentFromLocalStorage();

    let tableBody=document.querySelector["#prdData"];

    for(appointment of appointments){
        let prdRow=createAppointmentRow[appointment];
        tableBody.append[prdRow];
    }
}

createAppointmentRow=(appointment)=>{
    // let snoCol=document.createElement("td");
    // snoCol.textContent=appointment.snoCol;

    let nameCol=document.createElement("td");
    nameCol.textContent=appointment.fName;

    let addressCol=document.createElement("td");
    addressCol.textContent=appointment.streetAddress;

    let cityCol=document.createElement("td");
    cityCol.textContent=appointment.city;

    let packageCol=document.createEelement("td");
    packageCol.textContent=appointment.package;

    let trainerPrefCol=document.createElement("td");
    trainerPrefCol.textContent=appointment.trainerPreference;

    let phoneCol=document.createElement("td");
    phoneCol.textContent=appointment.phone;

    let prdRow=document.createElement("tr");
    prdRow.append(nameCol);
    prdRow.append(addressCol);
    prdRow.append(cityCol);
    prdRow.append(packageCol);
    prdRow.append(trainerPrefCol);
    prdRow.append(phoneCol);

    return prdRow;

}
function displayRadioValue() {
    var chkmale = document.getElementById("chkmale");
    var chkfemale = document.getElementById("chkfemale");
    var chkothers = document.getElementById("chkothers");
    var trainername = document.getElementById("trainername");
    var trainername2= document.getElementById("trainername2");
    var trainername1= document.getElementById("trainername1");
    trainername1.style.display = chkfemale.checked ? "block" : "none";
    trainername2.style.display = chkmale.checked ? "block" : "none";
    trainername.style.display = chkothers.checked ? "block" : "none";
}
function myFun(package){
    document.getElementById("result").value=package;
    document.getElementById("paise").value=00;
}
// -------------------------------------------------------------------------------


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <script src="./scripts/appointmentScript.js"></script>
    
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Document</title>
//     <script type="text/javascript">
//         function displayRadioValue() {
//             var chkmale = document.getElementById("chkmale");
//             var chkfemale = document.getElementById("chkfemale");
//             var chkothers = document.getElementById("chkothers");
//             var trainername = document.getElementById("trainername");
//             var trainername2= document.getElementById("trainername2");
//             var trainername1= document.getElementById("trainername1");
//             trainername2.style.display = chkmale.checked ? "block" : "none";
//             trainername1.style.display = chkfemale.checked ? "block" : "none";
//             trainername.style.display = chkothers.checked ? "block" : "none";
//         }


       
//     </script>
    
 
    
                        

// </head>
// <body>
//     <form action="Details.htm" onSubmit="return addAppointmentFormSubmit()"></form>
    
//     <table align=center>
//         <tr>
//             <td>
//                 <label>Name </label>
//             </td>
//             <td>
//                 <input type="text" placeholder="Firstname" val="#fnm">
//             </td>
//             <td>
//                 <input type="text" placeholder="LastName" val="#lnm">
//             </td>
//         </tr>
//         <tr>
//             <td>
//                 <label>Age</label>
//             </td>
//             <td>
//                 <input type="text" val="#age">
//             </td>
//         </tr>
//         <tr>
//             <td>
//                 <label>Email</label>
//             </td>
//             <td>
//                 <input type="text" val="#ema">
//             </td>
//         </tr>
//         <tr>
//              <td>
//                 <label>Phone No</label>
//             </td>
//             <td>
//                 <input type="text" val="#phone">
//             </td>
//         </tr>
        
//    <tr> <td><form>
//         <fieldset>
           
//                 <legend>Address</legend>
//            <p>
//                 <input type = "text"
//                    id = "myText" val="#address" maxlength="100" />
//            </p>
//           <p>
//                 <label>Street Address</label>
//                 <input type = "text"
//                    id = "myText1" val="#street" />
//           </p>
//           <p>
//                 <label>State</label>
//                 <input type = "text"
//                     id = "state" val="#state"/>
//       </p>
//       <p>
          
//             <label>Country</label>
//             <select  id="country">
//                 <option name=" "></option>
//                 <option name="ind">INDIA</option>
//                 <option name="aus">AUSTRALIA</option>
//                 <option name="newyork">NEWYORK</option>
//             </select>
            
//         </p>
//     </fieldset></form></td></tr>
        
//     <tr><form>
//             <td><span>Trainer Preference :</span></td>
//             <td><label for="chkmale">
//                 <input type="radio" name="gender" id="chkmale" onclick="displayRadioValue()">
//                 Male Trainer</br></label>
//                 <div id="trainername2" style="display: none">
//                     Trainer Name
//                     <input type="text"  id="trainername2">
//                     others
//                     <input type="text"   id="others2">
//                 </div>

//                 <label for="chkfemale">
//                 <input type="radio" name="gender" id="chkfemale" onclick="displayRadioValue()">
//                 Female Trainer</br></label>

//                 <div id="trainername1" style="display: none">
//                     Trainer Name
//                     <input type="text"  id="trainername1">
//                     others
//                     <input type="text"   id="others">
//                     </div>

//                 <label for="chkothers">
//                 <input type="radio" name="gender" id="chkothers" onclick="displayRadioValue()">
//                  No Preference</br></label>

                 
//                  <div id="trainername" style="display: none">
//                  Trainer Name
//                  <input type="text"  id="trainername">
//                  others
//                  <input type="text"   id="others">
//                  </div>
//             </td></form>
//         </tr>
        
//             <tr>
//          <form>
//             <td>
//         <span>Do you need Physio therapist....?</span>
//         <label for="yes">
//         <input type="radio" name="yes" id="yes"/>yes
//         <input type="radio" name="yes" id="no"/>No
//         </td>
//         </tr>
//     </form>
//         <tr><td>Appointment :</td></tr>
//         <table border=1 align="center" cellspacing="2" cellpadding="4">
//             <tr>
//                 <td><strong>Day</strong></td>
//                 <td><strong>7-9a.m</strong></td>
//                 <td><strong>9-11am</strong></td>
//                 <td><strong>11-1pm</strong></td>
//                 <td><strong>1-3pm</strong></td>
//                 <td><strong>3-5pm</strong></td>
//             </tr>
//             <tr>
//                 <td>Monday</td>
//                 <td><input type="radio" name="one" value="1">1</td>
//                 <td><input type="radio" name="one" value="2">2</td>
//                 <td><input type="radio" name="one" value="3">3</td>
//                 <td><input type="radio" name="one" value="4">4</td>
//                 <td><input type="radio" name="one" value="5">5</td>
//             </tr>
//             <tr>
//                 <td>Tuesday</td>
//                 <td><input type="radio" name="sev" value="1">1</td>
//                 <td><input type="radio" name="sev" value="2">2</td>
//                 <td><input type="radio" name="sev" value="3">3</td>
//                 <td><input type="radio" name="sev" value="4">4</td>
//                 <td><input type="radio" name="sev" value="5">5</td>
//             </tr>
//             <tr>
//                 <td>Wednesday</td>
//                 <td><input type="radio" name="six" value="1">1</td>
//                 <td><input type="radio" name="six" value="2">2</td>
//                 <td><input type="radio" name="six" value="3">3</td>
//                 <td><input type="radio" name="six" value="4">4</td>
//                 <td><input type="radio" name="six" value="5">5</td>
//             </tr>
//             <tr>
//                 <td>Thursday</td>
//                 <td><input type="radio" name="five" value="1">1</td>
//                 <td><input type="radio" name="five" value="2">2</td>
//                 <td><input type="radio" name="five" value="3">3</td>
//                 <td><input type="radio" name="five" value="4">4</td>
//                 <td><input type="radio" name="five" value="5">5</td>
//             </tr>
//             <tr>
//                 <td>Friday</td>
//                 <td><input type="radio" name="four" value="1">1</td>
//                 <td><input type="radio" name="four" value="2">2</td>
//                 <td><input type="radio" name="four" value="3">3</td>
//                 <td><input type="radio" name="four" value="4">4</td>
//                 <td><input type="radio" name="four" value="5">5</td>
//             </tr>
//             <tr>
//                 <td>Saturday</td>
//                 <td><input type="radio" name="three" value="1">1</td>
//                 <td><input type="radio" name="three" value="2">2</td>
//                 <td><input type="radio" name="three" value="3">3</td>
//                 <td><input type="radio" name="three" value="4">4</td>
//                 <td><input type="radio" name="three" value="5">5</td>
//             </tr>
//             <tr>
//                 <td>Sunday</td>
//                 <td><input type="radio" name="two" value="1">1</td>
//                 <td><input type="radio" name="two" value="2">2</td>
//                 <td><input type="radio" name="two" value="3">3</td>
//                 <td><input type="radio" name="two" value="4">4</td>
//                 <td><input type="radio" name="two" value="5">5</td>
//             </tr>
        
//         <table align="center" cellpadding="2" cellspacing="4">
//         <tr>
//             <td>Select a Suitable Package  :</td>
//         </tr>
//         <tr>
//             <td><input type="radio" name="package" value="onetime">One Time Assessment Only      (INR 500)</td>
//         </tr>
//         <tr>
//             <td><input type="radio" name="package" value="4time">4 Week Session      (INR 400/Session)</td>
//         </tr>
//         <tr>
//             <td><input type="radio" name="package" value="12time">12 week session      (INR 300/session)</td>
//         </tr>
//         <tr>
//             <td>Other
//             <input type="text" ><br>Quote will be shared on phone call</td>
//         </tr>
// </table>
// <table align="center" cellpadding="2" cellspacing="4">
//     <tr><td>Quote :</td></tr>
//     <tr><td><input type="text" maxlength="2" value="inr"><br>INR</td>
//         <td>.</td>
//         <td><input type="text" maxlength="2" value="paise"><br>Paise</td>
//     </tr>
//      <tr>
//         <td><input type ="Submit"></td>
//     </tr>

// </table> 

//     </table>
    
// </form>
// </body>
// </html>

