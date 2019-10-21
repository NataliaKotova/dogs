var dogs = [
  {
      name:"Pretty",
      id:"P1",
      breed:"Spaniel puppy",
      color:"Brown and white",
      height:30,
      age:1,
      photo:"images/dog1.jpeg"
  },
  {
    name: "Blacky",
      id:"C2",
      breed:"Corgis",
      color:"Red and white",
      height:40,
      age:2,
      photo:"images/dog2.jpeg"
  },
  {
    name: "Beaggie",
    id:"gs103",
    breed:"Mops",
    color:"Brown and cream",
    height:20,
    age:3,
    photo:"images/dog3.jpeg"
  },
  {
    name:"Alasky",
    id:"gs104",
    breed:"Taxa",
    color:"Brown and cream",
    height:50,
    age:10,
    photo:"images/dog4.jpeg"
  },
  {
    name:"Britty",
    id:"gs105",
    breed:"Spaniel",
    color:"black and white",
    height:60,
    age:10,
    photo:"images/dog5.jpeg"
  }
];

function allDogs() {
  for (var i = 0; i < dogs.length; i++) {
    document.getElementById('dogs').innerHTML += '</br><h1 class="jumbotron text-secondary">' + dogs[i].name + '</h1>';
    document.getElementById('dogs').innerHTML += '<img class="img-thumbnail myDogs" src="' + dogs[i].photo + ' " alt="Dog"/>';
    document.getElementById('dogs').innerHTML += '</br>Breed: <h5 class="text-danger">' + dogs[i].breed + '</h5>';
    document.getElementById('dogs').innerHTML += '</br>Age: <h5 class="text-danger">' + dogs[i].age + '</h5>';
    document.getElementById('dogs').innerHTML += '</br>Height: <h5 class="text-danger">' + dogs[i].height + '</h5>';
    console.log(i);
  }
}



document.getElementById('spaniel').addEventListener('click', function(){
  document.getElementById('dogs').innerHTML = " ";
  for (var i = 0; i < dogs.length; i++) {
    if(dogs[i].breed === "Spaniel") {
      document.getElementById('dogs').innerHTML += '</br><h1 class="jumbotron text-secondary">' + dogs[i].name + '</h1>';
      document.getElementById('dogs').innerHTML += '<img class="img-thumbnail myDogs" src="' + dogs[i].photo + ' " alt="Dog"/>';
      document.getElementById('dogs').innerHTML += '</br>Breed: <h5 class="text-danger">' + dogs[i].breed + '</h5>';
      document.getElementById('dogs').innerHTML += '</br>Age: <h5 class="text-danger">' + dogs[i].age + '</h5>';
      document.getElementById('dogs').innerHTML += '</br>Height: <h5 class="text-danger">' + dogs[i].height + '</h5>';
    }
  }
});

document.getElementById('corgis').addEventListener('click', function(){
  
  document.getElementById('dogs').innerHTML = " ";
  for (var i = 0; i < dogs.length; i++) {
    if(dogs[i].breed === "Corgis") {
      document.getElementById('dogs').innerHTML 
      +='</br><h1 class="jumbotron text-secondary">' + dogs[i].name + '</h1>'
      + '<div class="row"> '
      + '<div class="col"> '
      +'<img class="img-thumbnail myDogs" src="' + dogs[i].photo + ' " alt="Dog"/>'
      +'</div>'
      +'<div class="col"'
      + '</br>Breed: <h5 class="text-danger">' + dogs[i].breed + '</h5>'
      + '</br>Age: <h5 class="text-danger">' + dogs[i].age + '</h5>'
      + '</br>Height: <h5 class="text-danger">' + dogs[i].height + '</h5>'
      + '</div>'
      + '</div>';
    }
    
  }
});

document.getElementById('height40').addEventListener('click', function(){
  document.getElementById('dogs').innerHTML = " "; //to clear the container
  for(var i = 0; i < dogs.length; i++) {
    if (dogs[i].height >= 40) {
      document.getElementById('dogs').innerHTML += '</br><h1 class="jumbotron text-danger">' + dogs[i].name + '</h1>';
      document.getElementById('dogs').innerHTML += '<img class="img-thumbnail myDogs" src="' + dogs[i].photo + ' "  alt="Dog"/>';
      document.getElementById('dogs').innerHTML += '</br></br> Breed : <h5 class="text-danger" >' + dogs[i].breed + '</h5>';
      document.getElementById('dogs').innerHTML += '</br> Age : <h5 class="text-danger" > ' + dogs[i].age + '</h5>';
      document.getElementById('dogs').innerHTML += '</br> Height : <h5 class="text-danger" >' + dogs[i].height + '</h5>';
    }
  }
});


// //bulldog
// document.getElementById('bullDog').addEventListener('click', function(){
//   console.log(dogs);
//   document.getElementById('dogs').innerHTML = " "; //to clear the container
//   for(var i = 0; i < dogs.length; i++) {
//     if (dogs[i].breed.indexOf("Spaniel") > (-1) ) {
//       document.getElementById('dogs').innerHTML += '</br><h1 class="jumbotron text-danger">' + dogs[i].name + '</h1>';
//       document.getElementById('dogs').innerHTML += '<img class="img-thumbnail myDogs" src="' + dogs[i].photo + ' "  alt="Dog"/>';
//       document.getElementById('dogs').innerHTML += '</br></br> Breed : <h5 class="text-danger" >' + dogs[i].breed + '</h5>';
//       document.getElementById('dogs').innerHTML += '</br> Age : <h5 class="text-danger" > ' + dogs[i].age + '</h5>';
//       document.getElementById('dogs').innerHTML += '</br> Height : <h5 class="text-danger" >' + dogs[i].height + '</h5>';
//    }
//   }
// });

document.getElementById('changeName').addEventListener('click', function() {
//take data from the user
var oldName = document.getElementById('oldName').value;
var newName = document.getElementById('newName').value;
console.log(oldName, newName);
  for(var i = 0; i < dogs.length; i++) {
    if(oldName === dogs[i].name) {
      dogs[i].name = newName;
    } 
  }
  console.log(dogs);
  allDogs();
});

document.getElementById('all').addEventListener('click', function() {
  allDogs();
});