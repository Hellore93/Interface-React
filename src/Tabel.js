import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './Tabel.scss';
import { Button, FormControl, Table } from 'react-bootstrap';



 export default class TableData extends Component {
   
    render() {
      return (
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Invoice Number</th>
              <th>Year</th>
              <th>Month</th>
              <th>Day</th>
              <th>Tax percent</th>
              <th>Gross value</th>
              <th>Net value</th>
              <th>Invoice value</th>              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><FormControl /></td>
              <td><FormControl /></td>
              <td><FormControl /></td>
              <td><FormControl /></td>
              <td><FormControl /></td>
              <td><FormControl /></td>
              <td><FormControl /></td>
              <td><FormControl /></td>
            </tr>                       
          </tbody>
          <Button onClick="save">Save Invoice</Button>
        </Table>
      );
    }
  }
  