// code your solution here
function saturdayFun(whatTodo = "roller-skate") {
    return `This Saturday, I want to ${whatTodo}!`
  }


const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };



function wrapAdjective(putSomething= "special") {
    const innerFunction = function (whatAreyou) {
      return `You are ${putSomething}${whatAreyou}${putSomething}!`;
    };
    return innerFunction;
  }

wrapAdjective("%")("a dedicated programmer"); 
    