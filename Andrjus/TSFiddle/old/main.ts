var muutuja : string = "Tere"

class Animals {
  private animals : string[] = ['Kass', 'Koer'];

  constructor() {

  }

  addAnimal(animal: string) {
    this.animals.push(animal);
  }

  removeAnimal(index : number) {
    this.animals.splice(index, 1);
  }

  printAnimals() {
    console.log(beings);
  }
}

let beings = new Animals();
beings.printAnimals();

async function fetchData() {
    let request = new XMLHttpRequest();

    request.onreadystatechange = function() {
      if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200) {
          let element = document.getElementById('wrapper');
          if (element !== null) {
            element.innerHTML = this.responseText;
          }
        } else {
          console.error('getDataRequest failed: ' + this.statusText);
        }
      }
    }

    request.open('GET', "animal.html", true);
    request.send();
}

fetchData();
