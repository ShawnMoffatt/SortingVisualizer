import React from 'react';
import { getMergeAnimations } from '../sortingAlgorithms/mergeSort';
import { getSelectionAnimations } from '../sortingAlgorithms/selectionSort.js';
import { getQuickAnimations } from '../sortingAlgorithms/quickSort.js';
import { getBubbleAnimations } from '../sortingAlgorithms/bubbleSort.js';
import { getHeapAnimations } from '../sortingAlgorithms/heapSort.js';
import './SortingVisualizer.css';

const MAIN_COLOUR = "cyan";
const ALT_COLOUR = "crimson";
const LARGE = [180, 2, 4];
const MED = [80, 20, 12];
const SMALL = [16, 200, 40];

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }


  resetArray() {
    const array = [];
    let size = getSize();
    for(let x = 0; x < size; x++) {
      array.push(randomIntRange(5, 600));
    }
    this.setState({array})
  }

  mergeSort() {
    console.log("merging....");
    const ani = getMergeAnimations(this.state.array);
    let speed = getSpeed();
    animate(ani, speed);
  }

  selectionSort() {
    console.log("selecting....");
    const ani = getSelectionAnimations(this.state.array);
    let speed = getSpeed();
    animate(ani, speed);
  }

  quickSort() {
    console.log("quick sorting....");
    const ani = getQuickAnimations(this.state.array);
    let speed = getSpeed();
    animate(ani, speed);
  }

  bubbleSort() {
    console.log("bubbling....");
    const ani = getBubbleAnimations(this.state.array);
    let speed = getSpeed();
    animate(ani, speed);
  }

  heapSort() {
    console.log("heap sorting....");
    const ani = getHeapAnimations(this.state.array);
    let speed = getSpeed();
    animate(ani, speed);
  }

  render() {
    const {array} = this.state;
    let barW = getBarWidth();
    return (
      <div className="container">
        <div className="nav-bar">Sorting Algorithm Visualizer</div>
        <div className="array-container">
        {array.map((value, id) => (
          <div 
            className="arrBar"
            key={id}
            style={{
              backgroundColor: "cyan",
              height: `${value}px`,
              width: `${barW}px`,
            }}></div>
        ))}
        
      </div>
        <div className="button-container">
        <label className="selectLabel" for="size">Choose array size:</label>
        <select className="select" name="size" id="size">
          <option className="opt" value="large">Large</option>
          <option className="opt" value="med">Medium</option>
          <option className="opt" value="small">Small</option>
        </select>
        <button className="btn mod-btn" onClick={() => this.resetArray()}>New Array</button>
        <button className="btn sort-btn" onClick={() => this.mergeSort()}>Merge Sort</button>
        <button className="btn sort-btn" onClick={() => this.selectionSort()}>Selection Sort</button>
        <button className="btn sort-btn" onClick={() => this.quickSort()}>Quick Sort</button>
        <button className="btn sort-btn" onClick={() => this.bubbleSort()}>Bubble Sort</button>
        <button className="btn sort-btn" onClick={() => this.heapSort()}>Heap Sort</button>
        </div>
        <div className="left-side"></div>
        <div className="right-side"></div>
      </div>
    )
  }
}

function randomIntRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function animate(ani, speed) {
  for(let x = 0; x < ani.length; x++) {
    const bars = document.getElementsByClassName('arrBar');
    const [indexB1, indexB2] = ani[x];
    if(indexB2 > -1) {
      setTimeout(() => {
        const [indexB1, newHeight] = ani[x];
        const styleB1 = bars[indexB1].style;
        styleB1.height = `${newHeight}px`;
      }, x * speed);
    } else {
      setTimeout(() => {
        const styleB1 = bars[indexB1].style;
      const newColour = styleB1.backgroundColor === MAIN_COLOUR ? ALT_COLOUR : MAIN_COLOUR;
      styleB1.backgroundColor = newColour;
      }, x * speed);
    }
 }
}

function getSize() {
  let sel = document.getElementById("size");
  let size = sel.options[sel.selectedIndex].text;
  console.log(size);
  if(size === "Large") {
    return LARGE[0];
  } else if (size === "Medium") {
    return MED[0];
  } else {
    return SMALL[0];
  }
}

function getSpeed() {
  let sel = document.getElementById("size");
  let size = sel.options[sel.selectedIndex].text;
  if(size === "Large") {
    return LARGE[1];
  } else if (size === "Medium") {
    return MED[1];
  } else {
    return SMALL[1];
  }
}

function getBarWidth() {
  try {
    let sel = document.getElementById("size");
    let size = sel.options[sel.selectedIndex].text;
    if(size === "Large") {
      return LARGE[2];
    } else if (size === "Medium") {
      return MED[2];
    } else {
      return SMALL[2];
    }
  } catch(e) {
    return 4;
  }
 
}