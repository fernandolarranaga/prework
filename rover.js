
comandos = window.prompt("Enter commands: f= adelante, b=atrás, r=derecha, l=izquierda")

//Órdenes
splitComandos = []



var myRover = {
  //         0  1
  position: [0, 0],
  direction: 'N'
};

//Move rover forward
function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[1]++
      break;
    case 'E':
      rover.position[0]++
      break;
    case 'S':
      rover.position[1]--
      break;
    case 'W':
      rover.position[0]--
      break;
  };
  //Logs rover's position each step.
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}


function goBackward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[1]--
      break;
    case 'E':
      rover.position[0]--
      break;
    case 'S':
      rover.position[1]++
      break;
    case 'W':
      rover.position[0]++
      break;
  };
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}


function turnLeft(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[1]--
      break;
    case 'E':
      rover.position[0]--
      break;
    case 'S':
      rover.position[1]++
      break;
    case 'W':
      rover.position[0]++
      break;
  } 
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

function turnRight(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[1]--
      break;
    case 'E':
      rover.position[0]--
      break;
    case 'S':
      rover.position[1]++
      break;
    case 'W':
      rover.position[0]++
      break;
  };
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
  
}

for (i=0; i < comandos.length; i++) {
  splitComandos += comandos[i].split(', ')  
}

for (i=0; i < splitComandos.length; i++) {
  if (splitComandos[i] === "f") {
    goForward(myRover);

  } else if (splitComandos[i] === "r") {
    turnLeft(myRover)
  } else if (splitComandos[i] === "b") {
    goBackward(myRover)
  } else if (splitComandos[i] === "l") {
    turnLeft(myRover)
  } else {
    false
  }

}

console.log(splitComandos)