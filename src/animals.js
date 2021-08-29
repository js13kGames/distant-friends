const ANIMALS = {
    // Head, eye location,mouth,headColor,beardColor,earShadowColor,mouthColor,noseType,noseX,noseY
    fox: "head2,38,49,mouth1,f3a319,eff2f3,4c0c0c,,1,49,49"
  };
  
  const PROTO_SHAPES = {
    head1: [
      // Cat, Pig, Panda, Lion, Bear, Dog1, Monkey, Penguin
      "M49 30Q36 30 30 38L22 53Q29 62 49 64"
    ],
    head2: [
      // Fox
      //"M49 30C33 32 32 35 28 44Q25 57 36 60L49 62"
      "M49 33Q32 32 27 38L21 53Q29 62 49 61"
    ],
    foxBeard: [
      "M49 48Q46 49 46 51Q46 54 43 54L21 53Q30 62 49 61"
    ],
    foxEars: [
      "M38 32Q17 6 28 42",
      "M35 34Q24 19 31 39"
    ],
    mouth1: [
      // Cat, Panda, Lion, Bear, Dog1, Fox
      "M49 52Q47 55 47 54",
    ]
  };
  
  function makeAnimal(type) {
    //Fox
    type = 'fox';
    var def = ANIMALS[type].split(',');
    var shapes = [];
    var headColor = '#' +def[4];
    var lineColor = '#4c0c0c';
    shapes.push([PROTO_SHAPES[type+'Ears'][0],lineColor,2,headColor]); // Ear Shape
    shapes.push([PROTO_SHAPES[type+'Ears'][1],'#' +def[6],1,'#' +def[6]]); // Ear Shadow
    shapes.push([PROTO_SHAPES[def[0]][0],lineColor,2,headColor]); // Head
    if (PROTO_SHAPES[type+'Beard']) {
      shapes.push([PROTO_SHAPES[type+'Beard'][0],'#' +def[5],1,'#' +def[5]]); // Beard Shadow
    }
    shapes.push(["C",def[1],def[2],2, lineColor,2,lineColor]); // Eye
    shapes.push([PROTO_SHAPES[def[3]][0],lineColor,2,'#'+def[7]]); // Mouth //TODO: Mark as round tips
    if (def[8]=="1") { 
      // Circular nose
      shapes.push(["C",def[9],def[10],1,lineColor,2,lineColor,"noFlip"]); // Nose
    }
    // TODO: Add blush
    // TODO: Add Bigotes
    return shapes;
  };