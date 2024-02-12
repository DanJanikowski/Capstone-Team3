import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Employee from '../components/Employee'
import './HomePage.css'

export default function HomePage({ user, setCurEmployee }) {
  const [searchString, setSearchString] = useState('');
  const [people, setPeople] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);

  const handleSearch = async () => {
    if (searchString.length === 0) return;
    let sendData = searchString.split(' ').slice(0, 2);
    if (sendData.length === 1) sendData.push("");
    let response = await axios.post('/api/search_request', {
      'user_fn': user.first_name,
      'user_ln': user.last_name,
      'search_fn': sendData[0],
      'search_ln': sendData[1]
    })
    setPeople(response.data);
  };

  const fetchPeople = async (index) => {
    // let response = await axios.get(`/api/getpeople/${index}`);
    let response = await axios.post(`/api/getpeople/${index}`, {
      'user_fn': user.first_name,
      'user_ln': user.last_name
    })
    return response.data;
  };

  const prevIndex = () => {
    let newIndex = Math.max(pageIndex - 1, 0);
    fetchPeople(newIndex).then((_people) => setPeople(_people));
    setPageIndex(newIndex);
  };
  const nextIndex = () => {
    let newIndex = pageIndex + 1;
    fetchPeople(newIndex).then((_people) => setPeople(_people));
    setPageIndex(newIndex);
  };

  useEffect(() => {
    fetchPeople(0).then((_people) => setPeople(_people));
  }, [])

  return (
    <>
      <section className='employee-search'>
        <h1>Employee Search</h1>
        <form className='search-form' onSubmit={e => [e.preventDefault(), handleSearch()]}>
          <input className='search-box' placeholder="Employee name" value={searchString} onChange={e => setSearchString(e.target.value)} />
          <input className='search-submit' type="submit" value='Search' />
        </form>
        <section className='page-select'>
          <button className='ps-item' onClick={prevIndex}>prev</button>
          <p className='ps-item'>{pageIndex + 1}</p>
          <button className='ps-item' onClick={nextIndex}>next</button>
        </section>
        <h2>Results</h2>
        <div className='people-list'>
          {people && people.map((person) => (
            <Employee key={person.id} person={person} setCurEmployee={setCurEmployee} />
          ))}
        </div>
      </section>
      <section className='page-select'>
        <button className='ps-item' onClick={prevIndex}>prev</button>
        <p className='ps-item'>{pageIndex + 1}</p>
        <button className='ps-item' onClick={nextIndex}>next</button>
      </section>
    </>
  )
}