class Model {
  calculateSum(a, b) {
    return Number(a) + Number(b);
  }
}

class View {
  constructor() {
    this.main = document.getElementById('main');
    this.form = document.createElement('form');
    this.form.id = 'sum';
    this.input1 = document.createElement('input');
    this.input1.name = 'input1';
    this.input1.type = 'number';
    this.input2 = document.createElement('input');
    this.input2.name = 'input2';
    this.input2.type = 'number';
    this.button = document.createElement('button');
    this.button.innerText = 'Sum';
    this.button.type = 'submit';
    this.sum = document.createElement('p');
    this.form.append(this.input1, this.input2, this.button);
    this.main.append(this.form, this.sum);
  }
  showSum(n) {
    this.sum.innerHTML = n;
  }
}
class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.form = document.getElementById('sum');
    this._eventListener();
  }
  _eventListener() {
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
  }
  handleSubmit(e) {
    e.preventDefault();
    const [input1, input2] = e.target;
    this.view.showSum(this.model.calculateSum(input1.value, input2.value));
  }
}

const sum = new Controller(new Model(), new View());
