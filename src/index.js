import "./styles.css";
import * as DataBusiness from "./data-business";
import * as Utils from "./utils";

DataBusiness.getCharacters().then((datos) => {
  document.getElementById("root").innerText = " ";

  for (let character of datos) {
    const node = Utils.createCharacterRow(character);
    DataBusiness.getQuotebyAuthor(character.name).then((frases) => {
        
        const arr =[];
      for (let frase of frases) {
        arr.push(frase.quote);
        
       
      }
      character.quotes = arr
    });
    node.onclick = function () {
      Utils.showCharacter(character);
    };

    document.getElementById("root").append(node);
  }
});
