
import React, { useEffect, useState } from 'react';
function About() {
     const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users') // dummy API
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        // setLoading(false);
      });
  }, []);
    return (
        <div style={{ fontFamily: "Arial, sans-serif" }}>
            
            <main style={{ padding: "40px", minHeight: "60vh", textAlign: "center" }}>
                <h2>Users</h2>
      {/* {/* {loading ? (
        <p>Loading...</p>
      ) :    */}

        <ul>
          {users.map(user => (
            <li key={user.id}>UserName:{user.name}<br/>
           UserAddress: {user.address.city}<br/>
           UserEmail: {user.email}</li>
          ))}
        </ul>
          {/* )} */}


                <h2>Our Mission</h2>
                <p>
                    Our mission is to bridge the gap between technology and people by
        creating solutions that are reliable, scalable, and user-friendly. We
        aim to transform ideas into impactful products.
                </p>
                <h2>Our Mission</h2>
                <p>
                    Our mission is to bridge the gap between technology and people by
        creating solutions that are reliable, scalable, and user-friendly. We
        aim to transform ideas into impactful products.
                </p>
                 <h2>Our Mission</h2>
                <p>
                    Our mission is to bridge the gap between technology and people by
        creating solutions that are reliable, scalable, and user-friendly. We
        aim to transform ideas into impactful products.
                </p>
                <h2>Our Mission</h2>
                <p>
                    Our mission is to bridge the gap between technology and people by
        creating solutions that are reliable, scalable, and user-friendly. We
        aim to transform ideas into impactful products.
                </p>
                 <h2>Our Mission</h2>
                <p>
                    Our mission is to bridge the gap between technology and people by
        creating solutions that are reliable, scalable, and user-friendly. We
        aim to transform ideas into impactful products.
                </p>
                 <h2>Our Mission</h2>
                <p>
                    Our mission is to bridge the gap between technology and people by
        creating solutions that are reliable, scalable, and user-friendly. We
        aim to transform ideas into impactful products.
                </p>
                 <h2>Our Mission</h2>
                <p>
                    Our mission is to bridge the gap between technology and people by
        creating solutions that are reliable, scalable, and user-friendly. We
        aim to transform ideas into impactful products.
                </p>
            </main>

        </div>
    )
}
export default About;
