"use client";
import React from 'react'
import { fetchApiUsers } from '../redux/slice'
import { useDispatch } from 'react-redux'

function ApiUsers() {
    const dispatch = useDispatch();
  return (
    <div>
      <h1>This is User list Page API Calls</h1>

      <button onClick={() => dispatch(fetchApiUsers())}>Load Users</button>

    </div>
  )
}

export default ApiUsers
