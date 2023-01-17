let alphabets = [
  {
    letter: "A",
    word: "Apple",
    source: "https://www.collinsdictionary.com/images/full/apple_158989157.jpg",
  },
  {
    letter: "B",
    word: "Ball",
    source:
      "https://www.ikea.com/us/en/images/products/sparka-soft-toy-soccer-ball-black-white__0981434_pe815368_s5.jpg?f=s",
  },
  {
    letter: "C",
    word: "Car",
    source:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-honda-civic-sedan-1558453497.jpg?crop=1xw:0.9997727789138833xh;center,top&resize=480:*",
  },
  {
    letter: "D",
    word: "Desk",
    source:
      "https://cdn.shopify.com/s/files/1/1185/9434/products/modera-4ft-office-desk-14248690247_600x.jpg?v=1586902739",
  },
  {
    letter: "E",
    word: "Egg",
    source:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Egg_upright.jpg/1077px-Egg_upright.jpg",
  },
  {
    letter: "F",
    word: "Flag",
    source:
      "https://i.pinimg.com/564x/4c/87/76/4c8776820dbb8be0d5e0a6b5b88fa704.jpg",
  },
  {
    letter: "G",
    word: "Gun",
    source:
      "https://cdn.vectorstock.com/i/preview-1x/46/61/semi-automatic-pistol-handgun-isolated-on-white-vector-21134661.jpg",
  },
  {
    letter: "H",
    word: "House",
    source:
      "https://media.istockphoto.com/id/845555910/photo/house-isolated-on-white-real-estate-concept-3d.jpg?s=612x612&w=0&k=20&c=RPWu39sqSrNABNapGIHSgBaESvP8eUVDooLelv_7rnE=",
  },
  {
    letter: "I",
    word: "Ice cream",
    source:
      "https://media.istockphoto.com/id/1148364081/photo/front-view-of-real-edible-ice-cream-cone-with-3-different-scoops-of-ice-cream-isolated-on.jpg?s=612x612&w=0&k=20&c=m51YpJ0bZ0aBecUrB413RWMDqEC1mjxnXPO7K6t4CfE=",
  },
  {
    letter: "J",
    word: "Jug",
    source:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR97xkEI8UnhbisnKGLNus0cogotI539LYgjA&usqp=CAU",
  },
  {
    letter: "K",
    word: "Kettle",
    source:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTamEjKs8_6DPBVhwX8W8nIoupbYf-Fs9R0c1XtixitkNFCQO9ukrRSHqOI1f68cLqVROM&usqp=CAU",
  },
  {
       letter: "L",
       word: "Lamp",
       source:
         "https://cdn.ambientedirect.com/chameleon/mediapool/thumbs/e/14/Artemide_Choose-Tavolo-Tischleuchte_800x800-ID1244137-a109b53693cae4c9af9e6a800a919360.jpg",
     },
     {
       letter: "M",
       word: "Mango",
       source:
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgiBsH5u60-pWNa7K2xW9SuxNPIoit71LFq44oml5S-wfEFS4xKIggsW1glD2JPm_P0jM&usqp=CAU",
     },
  {
    letter: "N",
    word: "Nail",
    source:
      "https://image.made-in-china.com/155f0j00hsZRUVSyEucW/Building-Supplies-Concrete-Manufacturer-Galvanized-Polished-Stainless-Steel-Iron-Common-Wire-Nails-for-House.jpg",
  },
  
  {
    letter: "O",
    word: "Orange",
    source:
      "https://www.aprifel.com/wp-content/uploads/2019/02/orange.jpg",
  },
  {
       letter: "P",
       word: "Pencil",
       source:
         "https://www.collinsdictionary.com/images/full/pencil_280523090.jpg",
     },
     {
       letter: "Q",
       word: "Queen",
       source:
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8OdUJR5dUL4lJDYl2Z3mXgFdt6NDU1946-A&usqp=CAU",
     },
     {
       letter: "R",
       word: "Rainbow",
       source:
         "https://static.vecteezy.com/system/resources/previews/008/944/160/original/rainbow-cartoon-colored-clipart-illustration-free-vector.jpg",
     },
     {
       letter: "S",
       word: "Spoon",
       source:
         "https://mykasu.com.ng/wp-content/uploads/2021/07/Stainless-Steel-Spoon-Set-x6.jpg",
     },
     {
       letter: "T",
       word: "Tree",
       source:
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb30sAJw5q371fcMpx6RiokSw4nHYKqmMzGg&usqp=CAU",
     },
     {
       letter: "U",
       word: "Umbrella",
       source:
         "https://nigerianprice.com/wp-content/uploads/2020/02/cost-of-umbrella-lagos-nigeria.png",
     },
     {
       letter: "V",
       word: "Van",
       source:
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1v8dnbyb3EpfjZ8T9vc3Mzt9GSNrFMvt81Q&usqp=CAU",
     },
     {
       letter: "W",
       word: "Watch",
       source:
         "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/zenith-best-watches-1667840870.png?crop=1xw:1xh;center,top&resize=480:*",
     },
     {
       letter: "X",
       word: "Xylophone",
       source:
         "https://m.media-amazon.com/images/I/61doAsnUNYL._AC_SL1500_.jpg",
     },
     {
       letter: "Y",
       word: "Yam",
       source:
         "https://martking.ng/wp-content/uploads/2022/07/yams-fresh-martking-online-grocery-shop-lagos.jpeg",
     },
     {
       letter: "Z",
       word: "Zip",
       source:
         "https://m.media-amazon.com/images/I/71IpWlIY4-L._AC_SX425_.jpg",
     },
];
let btn = document.querySelector("#btn");
let display = document.querySelector("#display");
// display.innerHTML = alphabets[0]

let i = 0;

const next = () => {
  // console.log(alphabets[i])

  display.innerHTML = `${alphabets[i].letter}  <br/> ${alphabets[i].word}`;

  document.querySelector("#img").src = `${alphabets[i].source}`;

  i++;
};

btn.addEventListener("click", next);
