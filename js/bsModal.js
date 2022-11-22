export default class bsModal {
  // recebe as props para popular o modal
  constructor(props){
    this.props = props;
  }

  // recebe o elemento onde um novo html de modal deve ser inserido
  render(element){

    // estou checando se já foi inserido um modal no html anteriormente.
    // se sim, remova antes de criar um novo.
    let inserted = document.getElementById(this.props.id);
    if(inserted !== null){
      inserted.remove();
    }

    // insere no elemento recebido
    element.append(
      // um novo elemento DOM
      new DOMParser()
        // a partir de uma string
        .parseFromString(`<div class="modal fade" tabindex="-1" id="${this.props.id}" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">${this.props.title}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ${this.props.message}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Fechar</button>
              </div>
            </div>
          </div>
        </div>`, 'text/html').body.firstChild
    );
  }
}

