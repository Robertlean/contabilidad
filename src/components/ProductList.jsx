import React from 'react'

export const ProductList = () => {
  return (
    <div>
      <h1 className='pb-3'>Lsta de compras de Carrefour</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th className="col-4">Nombre Producto</th>
            <th className="col-2">Cantidad</th>
            <th className="col-2">Precio</th>
            <th className="col-2">Descuento</th>
            <th className="col-2"><strong>Subtotal</strong></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="row">Café Arlistan</td>
            <td>1</td>
            <td>$ 1334</td>
            <td>$ 100</td>
            <td><strong>$ 1234</strong></td>
          </tr>
          <tr>
            <td className="row">Fideos tallarín Luccetti</td>
            <td>3</td>
            <td>$ 1334</td>
            <td>$ 100</td>
            <td><strong>$ {1334*3-100}</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
