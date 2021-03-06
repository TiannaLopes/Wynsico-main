import React from 'react';
import { Jumbotron, Container} from 'reactstrap';
import NavBar from '../Navbar/Navbar'
import { Table } from 'reactstrap';
// import { Link } from 'react-router-dom' ;

function Homeworks() {
  return (
    <div className="App">
     <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">WELCOME TO BOOTCAMP - MAY 24 EDITION</h1>
          <p className="lead">My Name is Tianna Lopes and I am student here </p>
          <NavBar />

          <Table dark>
      <thead>
        <tr>
          <th>#</th>
          <th>Type</th>
          <th>Description</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Homework1</td>
          <td>Git Practice. Provide link of your repo here </td>
          <td><a href="https://github.com/TiannaLopes/gitpracticehw1"> View Result</a> </td>
          <td><a href="https://github.com/TiannaLopes/gitpracticehw1 "> Link to Code</a> </td>

      </tr>
        <tr>
          <th scope="row">2</th>
          <td>Homework 2</td>
          <td>Javascript - Here is my codepen link with solutions</td>
          <td><a href="https://codepen.io/tiannalopes/pen/rNywXWd"> View Result</a> </td>
          <td><a href="https://codepen.io/tiannalopes/pen/rNywXWd"> Link to Code</a> </td>

       
      </tr>
      <tr>
          <th scope="row">3</th>
          <td>Homework 2.2</td>
          <td>HTML Course Website Practice - Here is my codepen link with solutions</td>
          <td><a href="https://codepen.io/tiannalopes/pen/xxqLwOd"> View Result</a> </td>
          <td><a href="https://codepen.io/tiannalopes/pen/xxqLwOd"> Link to Code</a> </td>
       
      </tr>
      <tr>
          <th scope="row">4</th>
          <td>Homework 3.1</td>
          <td>CSS Practice- Here is my codepen link with solutions</td>
          <td><a href="https://codepen.io/tiannalopes/pen/JjWybNd?editors=1100"> View Result</a> </td>
          <td><a href="https://codepen.io/tiannalopes/pen/JjWybNd?editors=1100"> Link to Code</a> </td>

      </tr>

      <tr>
          <th scope="row">5</th>
          <td>Homework 3.2</td>
          <td>Design a Navagation Bar</td>
          <td><a href="https://codepen.io/tiannalopes/pen/oNZePja"> View Result</a> </td>
          <td><a href="https://codepen.io/tiannalopes/pen/oNZePja"> Link to Code</a> </td>

      </tr>
      <tr>
          <th scope="row">6</th>
          <td>Homework 3.3</td>
          <td>Javascript Function</td>
          <td><a href="https://codepen.io/tiannalopes/pen/yLMoQzN"> View Result</a> </td>
          <td><a href="https://codepen.io/tiannalopes/pen/yLMoQzN"> Link to Code</a> </td>
      </tr>
      <tr>
          <th scope="row">7</th>
          <td>Homework 4.1</td>
          <td>Interview Assignment Practice </td>
          <td><a href="https://codepen.io/tiannalopes/pen/ExWbYVd?editors=1111"> View Result</a> </td>
          <td><a href="https://codepen.io/tiannalopes/pen/ExWbYVd?editors=1111"> Link to Code</a> </td>
      </tr>
      <tr>
          <th scope="row">8</th>
          <td>Homework 5.1</td>
          <td>Theme Change </td>
          <td><a href="https://codepen.io/tiannalopes/pen/bGqYPPz?editors=0011"> View Result</a> </td>
          <td><a href="https://github.com/TiannaLopes/hw5-1-Themechange"> Link to Code</a> </td>
      </tr>

      <tr>
          <th scope="row">9</th>
          <td>Homework 5.2</td>
          <td>frontier Challenge </td>
          <td><a href=" https://codepen.io/tiannalopes/pen/yLMvBYg"> View Result</a> </td>
          <td><a href="https://github.com/TiannaLopes/frontierChallenge">Link to Code</a> </td>
      </tr>
      <tr>
          <th scope="row">10</th>
          <td>Homework 5.3</td>
          <td>Algo Expert </td>
          <td><a href="https://codepen.io/tiannalopes/pen/bGqYPPz?editors=0011"> View Result</a> </td>
          <td><a href="https://codepen.io/tiannalopes/pen/bGqYPPz?editors=0011">Link to Code</a> </td>
</tr>
    <tr>
          <th scope="row">11</th>
          <td>Homework 6.1</td>
          <td>Cascade to vanilla javascript boilerplate</td>
          <td><a href="https://cnn.com"> View Result</a> </td>
          <td><a href="https://github.com/TiannaLopes/CascadeProject">Link to Code</a> </td>
</tr>
    <tr>
          <th scope="row">12</th>
          <td>Homework 7.1</td>
          <td>Watch Videos and Practice JS </td>
          <td><a href="https://codepen.io/tiannalopes/pen/LYWQOYo"> View Result</a> </td>
          <td><a href="https://codepen.io/tiannalopes/pen/LYWQOYo">Link to Code</a> </td>
</tr>

    <tr>
          <th scope="row">13</th>
          <td>Homework 8.1</td>
          <td> Teleport Exercise </td>
          <td><a href="https://github.com/TiannaLopes/teleport-acme"> View Result</a> </td>
          <td><a href="https://github.com/TiannaLopes/teleport-acme">Link to Code</a> </td>
</tr>
 <tr>
          <th scope="row">14</th>
          <td>Homework 8.2</td>
          <td> SSCSS - change theme when break point is at mobile </td>
          <td><a href="hhttps://codepen.io/tiannalopes/pen/WNpMaYo"> View Result</a> </td>
          <td><a href="https://codepen.io/tiannalopes/pen/WNpMaYo">Link to Code</a> </td>
</tr>
 <tr>
          <th scope="row">15</th>
          <td>Homework 8.3</td>
          <td> Palindrome Problem </td>
          <td><a href="https://codepen.io/tiannalopes/pen/MWpVwEJ"> View Result</a> </td>
          <td><a href="https://codepen.io/tiannalopes/pen/MWpVwEJ">Link to Code</a> </td>
</tr>
 <tr>
          <th scope="row">16</th>
          <td>Homework 10.1</td>
          <td> CSS grid</td>
          <td><a href="https://codepen.io/tiannalopes/pen/BaWVZJo"> View Result</a> </td>
          <td><a href="https://codepen.io/tiannalopes/pen/BaWVZJo">Link to Code</a> </td>
</tr> <tr>
          <th scope="row">17</th>
          <td>Homework 10.2</td>
          <td> Lottery Project</td>
          <td><a href="https://codepen.io/tiannalopes/pen/abJKwYj"> View Result</a> </td>
          <td><a href="https://github.com/TiannaLopes/lotteryPicker">Link to Code</a> </td>
</tr> <tr>
          <th scope="row">18</th>
          <td>Homework 10.3</td>
          <td> Javascript Practice Tasks</td>
          <td><a href="https://codepen.io/tiannalopes/pen/mdWKjod?editors=1111"> View Result</a> </td>
          <td><a href="https://github.com/TiannaLopes/strings-Numbers-javascript">Link to Code</a> </td>
</tr>
 <tr>
          <th scope="row">19</th>
          <td>Homework 10.4</td>
          <td>Hawaii Color Picker</td>
          <td><a href="https://github.com/TiannaLopes/hawaiiColorPicker"> View Result</a> </td>
          <td><a href="https://github.com/TiannaLopes/hawaiiColorPicker">Link to Code</a> </td>
</tr>
 <tr>
          <th scope="row">19</th>
          <td>Homework 11.1</td>
          <td>  Array Methods</td>
          <td><a href="https://github.com/TiannaLopes/ArrayMethods"> View Result</a> </td>
          <td><a href="https://github.com/TiannaLopes/ArrayMethods">Link to Code</a> </td>
</tr>
<tr>
          <th scope="row">20</th>
          <td>Homework 12.1</td>
          <td> Carousel React </td>
          <td><a href="https://github.com/TiannaLopes/carousel">Link to Code</a> </td>
</tr>

<tr>
          <th scope="row">21</th>
          <td>Homework 13.1</td>
          <td> Simple React Page-FireHouse </td>
          <td><a href="https://github.com/TiannaLopes/fireHouseMag">Link to Code</a> </td>
</tr>
<tr>
          <th scope="row">22</th>
          <td>Homework 13.1</td>
          <td> Magazine </td>
          <td><a href="https://github.com/TiannaLopes/magazine">Link to Code</a> </td>
</tr>
<tr>
          <th scope="row">23</th>
          <td>Homwork 13.2</td>
          <td> Quiz Starter Hooks </td>
          <td><a href="https://github.com/TiannaLopes/hooksQuiz">Link to Code</a> </td>
</tr>

  <tr>
          <th scope="row">x</th>
          <td>Homework</td>
          <td> Task Tracker</td>
          <td><a href="https://github.com/TiannaLopes/taskTrackerApp">Link to Code</a> </td>
</tr>
    <tr>
          <th scope="row">x</th>
          <td>Homework</td>
          <td> HTML Question</td>
          <td><a href="https://codepen.io/tiannalopes/pen/MWpQOPL"> View Result</a> </td>
          <td><a href="https://codepen.io/tiannalopes/pen/MWpQOPL">Link to Code</a> </td>
</tr>
  <tr>
      <th scope="row">x</th>
          <td>8 hour crash course JS </td>
          <td> Challenges on github</td>
          <td><a href="https://github.com/TiannaLopes/crashCourseJS"> View Result</a> </td>
          <td><a href="hhttps://github.com/TiannaLopes/crashCourseJS"> Link to Code</a> </td>
      </tr>
      <tr>
      <th scope="row">x</th>
          <td>Extra Practice </td>
          <td>Extra practice for Javascript </td>
          <td><a href="https://codepen.io/tiannalopes/embed/oNZdRGo/?theme-id=modal#result-box"> Tournament Winners</a> </td>
          <td><a href="https://codepen.io/tiannalopes/pen/wvJjZeP"> Array of Products</a> </td>
          <td><a href="https://codepen.io/tiannalopes/pen/ZEeowZL">Permutation - Recursion</a> </td>
      </tr>
{/* <tr>
      <th scope="row">x</th>
     <td>Extra Practice </td>
     <td>Extra practice for Javascript </td>
<td><a href="https://codepen.io/tiannalopes/pen/WNpJPMV"> Monotonic Array</a> </td>
          <td><a href="https://codepen.io/tiannalopes/pen/ExWLrbW"> Generate Div Tags</a> </td>
          <td><a href="https://codepen.io/tiannalopes/pen/QWprYKR"> Caesar Cipher</a> </td>
          <td><a href="https://codepen.io/tiannalopes/pen/MWpVwEJ"> Palidrome</a> </td>
          <td><a href="https://codepen.io/tiannalopes/pen/JjWpLgG"> Three Number Sum</a> </td>
</tr>
<tr>
<th scope="row">x</th>
     <td>Extra Practice </td>
     <td>Extra practice for Javascript </td>
          <td><a href="https://codepen.io/tiannalopes/pen/GRWQxNq"> Difference between product of digits and sum of digits</a> </td>
          <td><a href="https://codepen.io/tiannalopes/pen/dyvJrmX"> Nth Fibonacci</a> </td>
          <td><a href="https://codepen.io/tiannalopes/pen/dyvJrmX"> Zig Zag Traversal</a> </td>
          <td ><a href="https://codepen.io/tiannalopes/pen/eYvyJbW"> Two Num Sum</a> </td>

</tr>
<tr>
<th scope="row">x</th>
     <td>Extra Practice </td>
     <td>Extra practice for Javascript </td>
          <td><a href="https://codepen.io/tiannalopes/pen/NWpzyvo?editors=0010"> Balanced Brackets</a> </td>


</tr> */}

      </tbody>
    </Table>
        </Container>
      </Jumbotron>
    </div>
    </div>
  );
}

export default Homeworks;
