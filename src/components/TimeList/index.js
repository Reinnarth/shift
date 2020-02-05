import React from 'react'
import ListGroup from "react-bootstrap/ListGroup";

export default function TimeList() {

    // const listItems = data.map((data, index) => (
    //     <ListGroup.Item key={index} onClick={() => goTo(index)}>{data}</ListGroup.Item>
    //   ));

    return (
        <div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Доступное время</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>Тут будет форма и кнопка</th>
                    </tr>
                </tfoot>
                <tbody>
                    <tr>
                        <td>9:00</td>
                    </tr>
                    <tr>
                        <td>10:00</td>
                    </tr>
                    <tr>
                        <td>11:00</td>
                    </tr>
                    <tr>
                        <td>12:00</td>
                    </tr>
                    <tr>
                        <td>13:00</td>
                    </tr>
                    <tr>
                        <td>14:00</td>
                    </tr>
                    <tr>
                        <td>15:00</td>
                    </tr>
                    <tr>
                        <td>16:00</td>
                    </tr>
                    <tr>
                        <td>17:00</td>
                    </tr>
                    <tr>
                        <td>18:00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
