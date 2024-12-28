import React from 'react'
import { FaTrashAlt, FaEdit } from "react-icons/fa";

export const ProductList = () => {
  return (
    <div>
      <h1 className='pb-3'>Lista de compras de Carrefour</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th className="col-3">Nombre Producto</th>
            <th className="col-2">Cantidad</th>
            <th className="col-2">Precio</th>
            <th className="col-2">Descuento</th>
            <th className="col-2"><strong>Subtotal</strong></th>
            <th className="col-1">Editar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="row">Café Arlistan</td>
            <td>1</td>
            <td>$ 1334</td>
            <td>$ 100</td>
            <td><strong>$ 1234</strong></td>
            <td><FaEdit /> <FaTrashAlt /></td>
          </tr>
          <tr>
            <td className="row">Fideos tallarín Luccetti</td>
            <td>3</td>
            <td>$ 1334</td>
            <td>$ 100</td>
            <td><strong>$ {1334 * 3 - 100}</strong></td>
            <td><FaEdit /> <FaTrashAlt /></td>
          </tr>
        </tbody>
      </table>
      <div class="col-12">
        <button class="btn btn-success" type="submit">Guardar boleta</button>
      </div>
    </div>
  )
}
