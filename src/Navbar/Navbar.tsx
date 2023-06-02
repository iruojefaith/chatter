import React from 'react';
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
    return (
        <nav className={styles.navbar}>
            <div className={styles['logo-container']}>
                <span>CHATTER</span>
            </div>
            <Links links={links} />
            <div className='flex gap-2  '>
                <button className='border-[3px] border-blue-500 rounded-lg w-[157px] h-14 font-bold '>Login in</button>
                <button className="border-[3px] border-blue-500 rounded-lg w-[157px] h-14 text-white bg-blue-500 font-bold ">Sign Up</button>
            </div>
        </nav>
    )
}

export default Nav;