const form = document.querySelector('[data-js="form-element"]');

form.addEventListener('submit', e => {
  e.preventDefault();

  const data = document.querySelectorAll('.usuario');
  const table = document.querySelector('[data-js="data-tabela"]');

  const value = `<tr data-js="data-tr">
                    <td>${data[0].value}</td>
                    <td>${data[1].value}</td>
                    <td>${data[2].value}</td>
                    <td class="edit">
                      <input type="button" data-js="delete" class="botao" value="X">
                      <input type="button" data-js="edit" class="botao" value="✎">
                    </td>
                  </tr>`;

  table.insertAdjacentHTML('beforeend', value);

  form.reset();

  const deleteElements = document.querySelectorAll('[data-js="delete"]');
  const editElements = document.querySelectorAll('[data-js="edit"]');

  deleteElements.forEach(deleteElement => {
    deleteElement.addEventListener("click", () => {
      deleteElement.closest('[data-js="data-tr"]').remove();
    });
  });

  editElements.forEach(editElement => {
    editElement.addEventListener("click", () => {
      editElement.closest('[data-js="data-tr"]').remove();
      const value = `<tr data-js="data-tr">
      <td>${data[0].value}</td>
      <td>${data[1].value}</td>
      <td>${data[2].value}</td>
      <td class="edit">
        <input type="button" data-js="delete" class="botao" value="X">
        <input type="button" data-js="edit" class="botao" value="✎">
      </td>
    </tr>`;

    table.insertAdjacentHTML('beforeend', value);

    form.reset();
    });
  });
});

