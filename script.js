class Model {
  constructor() {
    this.num = 0;
  }
}
class View {
  constructor() {
    this.main = document.getElementById('main');
    this.form = document.createElement('form');
    this.input1 = document.createElement('input');
    this.input1.name = 'input1';
    this.input2 = document.createElement('input');
    this.input2.name = 'input2';
    this.button = document.createElement('button');
    this.button.innerText = 'Sum';
    this.button.type = 'submit';
    this.form.append(this.input1, this.input2, this.button);
    this.main.append(this.form);
  }
}
class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
}

const sum = new Controller(new Model(), new View());
