import React from 'react';
function Details(){
    return(
        <section id='details' style={{ padding: '20px 0' }}>
       <div className="info-section">
  <h2 style={{ fontSize: "42px" }}>MY JOURNEY</h2>
  <div className="cards-container">
    <div className="card">
      <h3>Education</h3>
      <div className="item">
        <h4>BS in Computer Science</h4>
<p><em>FAST-NUCES, Islamabad (2016 - 2020)</em></p>
        <p>Focused on web technologies, JavaScript frameworks, and UI design principles.</p>
      </div>
      <div className="item">
        <h4>Diploma in Frontend Development</h4>
        <p><em>University of Sardodha (2022 - 2023)</em></p>
        <p>Studied React, CSS3, HTML5, and modern JavaScript for building responsive web apps.</p>
      </div>
      <div className="item">
        <h4>Roots Millennium College</h4>
<p><em>Islamabad, Pakistan (2010 - 2016)</em></p>
        <p>Completed secondary education with emphasis on computer science basics.</p>
      </div>
    </div>

    <div className="card">
<h3>Experience</h3>
      <div className="item">
        <h4>Frontend Developer Intern</h4>
        <p><em>Creative Web Solutions - (2021 - 2022)</em></p>
        <p>Worked on UI components using React and helped improve site responsiveness.</p></div>
      <div className="item">
        <h4>Junior Frontend Developer</h4>
        <p><em>BrightTech - (2022 - Present)</em></p>
        <p>Developing interactive web pages, optimizing performance, and collaborating with designers.</p>
      </div>
      <div className="item">
        <h4>Freelance Web Designer</h4>
        <p><em>Self-employed (2020 - Present)</em></p>
        <p>Designed custom landing pages and small business websites with modern UI/UX.</p>
      </div>
    </div>
  </div>
</div>


</section>
    )
}
export default Details;