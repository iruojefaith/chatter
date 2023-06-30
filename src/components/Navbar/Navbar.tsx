import React from 'react';
import {Link} from 'react-router-dom'
import styles from './Nav.module.css';


import * as data from './links.json';
const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;

type Link = {
    label: string;
    href: string;
}

const Links: React.FC<{ links: Link[] }> = ({ links }) => {
    return (
        <div className={styles['links-container']}>
            {links.map((link: Link) => {
                return (
                    <div key={link.href} className={styles['link']}>
                        <a href={link.href}>
                            {link.label}
                        </a>
                    </div>
                )
            })}
        </div>
    )
};

const Nav: React.FC<{}> = () => {
     const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
    return (
        <div>
        <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
        <nav className={styles.navbar} onClick={e => e.stopPropagation()} >
            <div className={styles['logo-container']}>
                <span className='w-2/12'>CHATTER</span>
            </div>
            <div className = 'md:flex hidden gap-8 '>
                 <Links links={links} />
            <div className='flex gap-2  '>
               <Link to='/register'> <button className='btn'>Login in</button> </Link>
                <Link to='/register'><button>Sign Up</button></Link>
            </div>
            </div>

            <div className="nav-icon md:hidden " onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>

          </div>


        </nav>
        </div>

    )
}

export default Nav;