import React from 'react'
import "./body.css"
import Graph from './graph.js'
import Bar from './bar.js'
import TaBle from './table.js'
export default function () {
  return (
    <div className='Con'>
        <div className='overfo'>
            <div>
            <ol className='headering'>
                <li>
                    Student Dashboard
                </li>
                <li>
                    Here What you have done So Far
                </li>
            </ol>
            <ul className='projectlist'>
                <li>
                    <ul className='project'><li>1 Project Completed</li>
                    <li><span>Total</span></li></ul>
                    
                </li>
                <li>
                <ul className='project'><li>2 Project ongoing</li>
                    <li><span>Fresh start</span></li></ul>
               
                </li>
                <li>
                <ul className='project'><li>1 ongoing</li>
                    <li><span>Completed</span></li></ul>
                </li>
            </ul>
        </div>
        
        <div className='graph'>
        <h1>Daily Working Hours</h1>
        <hr></hr>
             <Graph/></div>
       
        </div>
        <div className='bt'>
        <div className='bar'>

        <h1>Monthly Working Hours</h1>
  
        <Bar></Bar>
        </div>
        <div className='table'>
        <h1>Student Log</h1>
            <TaBle></TaBle>
        </div>
        </div>
    </div>
  )
}
