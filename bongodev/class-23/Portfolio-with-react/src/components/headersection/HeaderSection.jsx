import React from 'react';

const navMenu = [
    { url: '#skills', name: 'Skills' },
    { url: '#experience', name: 'Experience' },
    { url: '#projects', name: 'Projects' },
    { url: '#contact', name: 'Contact' }
];

function HeaderSection() {
  return (
    <div>
       <header>
        <h1>Toukir Portfolio</h1>
        <nav>
            <ul>
                {
                  navMenu.map((navItem)=>{
                     return(
                        <li key={navItem.name}>
                            <a href={navItem.url}>{navItem.name}</a>
                        </li>
                     );
                  })
                }
            </ul>
            <section id="social-link">
                <ul>
                    <li><a href="https://github.com/toukir103">Github Profile</a></li>
                    <li><a href="https://www.linkedin.com/in/toukir-ahmed-abid-744b09256/">LinkedIn Profile</a></li>
                    <li><a href="https://www.youtube.com/@toukirahmed3475/videos">YouTube Channel</a></li>
                </ul>
            </section>
        </nav>
    </header>
    </div>
  );
}

export default HeaderSection;
