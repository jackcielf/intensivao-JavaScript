export const NavegacaoComponent = ({ changePageSelected }: any) => {
  return (
    <div className="navegacao">
      <input type="radio" name="opcao-pagina" id="pagina-0" defaultChecked onClick={ () => changePageSelected(0) } />
      <label htmlFor="pagina-0">Pratos principais</label>
      <input type="radio" name="opcao-pagina" id="pagina-1" onClick={ () => changePageSelected(1) } />
      <label htmlFor="pagina-1">Sobremesas</label>
      <input type="radio" name="opcao-pagina" id="pagina-2" onClick={ () => changePageSelected(2) } />
      <label htmlFor="pagina-2">Bebidas</label>
    </div>
  )
}