// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCm-y6i6bpzYfhk3YU-54Cnu3A-OwGEVs",
  authDomain: "ipl-results-12f82.firebaseapp.com",
  databaseURL: "https://ipl-results-12f82-default-rtdb.firebaseio.com",
  projectId: "ipl-results-12f82",
  storageBucket: "ipl-results-12f82.appspot.com",
  messagingSenderId: "1004781777725",
  appId: "1:1004781777725:web:d816934b189ead81548b54",
  measurementId: "G-5Z2DJBRPJ8"
};

function readResults(year){
  var results = firebaseConfig.database().ref(year);
  results.on('value', (data) =>{
    var ranks = data.val();
    document.getElementById("result1").innerHTML = "<br > 1." +ranks[1];
    document.getElementById("result2").innerHTML = "<br > 2." +ranks[2];
    document.getElementById("result3").innerHTML = "<br > 3." +ranks[3];
    document.getElementById("result4").innerHTML = "<br > 4." +ranks[4];
    document.getElementById("result5").innerHTML = "<br > 5." +ranks[5];
    document.getElementById("result6").innerHTML = "<br > 6." +ranks[6];

  })
  document.getElementById('datavalue').addEventListener('submit',submitForm);
}
