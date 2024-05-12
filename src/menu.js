import React from 'react'
import "./menu.css"
import { FaHome } from "react-icons/fa";
import { FaTable } from "react-icons/fa";


export default function () {
  return (
    <div className='Menu'>
<div className='links'>
    <ul>
        <ul>
            <li>Dashboard</li>
            <li><a href='/Dashboard'><FaHome />{'  '}{' '}Dashboard</a></li>
        </ul>
        <ul>
        <li>Worklog</li>
            <li><a href='/Worklog'><FaTable />{'  '}{' '}Worklog</a></li>
        </ul>
    </ul>
</div>
    </div>
  )
}
