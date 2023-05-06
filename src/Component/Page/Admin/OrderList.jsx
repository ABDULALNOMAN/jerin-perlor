import React from 'react'

function OrderList() {
  return (
    <div className='px-6 pt-6'>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>email id</th>
                        <th>service</th>
                        <th>pay with</th>
                        <th>status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td>Blue</td>
                        <td>Blue</td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td>Blue</td>
                        <td>Blue</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default OrderList