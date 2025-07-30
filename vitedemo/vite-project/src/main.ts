import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `

  <button id="btn-add-person">Add persoon</button>

  <table>
    <thead>
      <tr>
        <th>Naam</th>
        <th>Leeftijd</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>JP</td>
        <td>38</td>
      </tr>
      <tr>
        <td>Danny</td>
        <td>20</td>
      </tr>
      <tr>
        <td>Yoran</td>
        <td>24</td>
      </tr>
    </tbody>
  </table>
`;

document.querySelector('#btn-add-person')!.addEventListener('click', e => {
  // meest lelijke
  // console.log(document.querySelector('table tbody')!.innerHTML);

  console.time();
  
  document.querySelector('table tbody')!.innerHTML += `<tr>
    <td>Sten</td>
    <td>24</td>
  </tr>`;
  console.timeEnd();
});


setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);


