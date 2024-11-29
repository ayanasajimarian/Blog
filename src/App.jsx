import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddBlog from './assets/components/AddBlog';
import Home from './assets/components/Home';

const App = () => {
  return (
    <Router>
      <div>
        <nav style={styles.navbar}>
          <Link to="/" style={styles.link}>
            Home
          </Link>
          <Link to="/add-blog" style={styles.link}>
            Add Blog
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-blog" element={<AddBlog />} />
        </Routes>
      </div>
    </Router>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#0277bd', /* Deep blue background */
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', /* Soft shadow */
    borderRadius: '8px', /* Rounded corners */
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    margin: '0 20px', /* Space between links */
    fontWeight: '500',
    padding: '8px 16px',
    borderRadius: '25px',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
 
  linkHover: {
    backgroundColor: '#81d4fa', /* Light blue hover effect */
    transform: 'translateY(-2px)', /* Slight lift on hover */
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
  },
};


const linkStyle = {
  ...styles.link,
  ':hover': styles.linkHover,
};

export default App;
