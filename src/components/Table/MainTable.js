import React, { useState } from 'react';
import './MainTable.css';

const MainTable = () => {
  return (
    <div>
      <h1>Result</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Branch</th>
            <th>Sem 1</th>
            <th>Sem 2</th>
            <th>CGPA</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>John</td>
            <td>RA2311003010259</td>
            <td>CSE Core</td>
            <td>8.95</td>
            <td>9.67</td>
            <td>9.31</td>
        </tr>
        <tr>
            <td>Prahalllad Padhan</td>
            <td>RA2311003011106</td>
            <td>CSE AIML</td>
            <td>8.95</td>
            <td>9.67</td>
            <td>9.31</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default MainTable
