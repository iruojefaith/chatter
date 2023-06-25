import React from 'react'

const links = () => {
  return (
    <div>links</div>
  )
}

export default links

// import React from 'react'

// import {ReactNode, useState} from 'react'

// export type BloglinksData = {
//     title: string;
//     content: ReactNode;
// };


//  const links:BloglinksData[] = [

//          {title: "Overview",
//          content:(
//             [
//             "Programming", "DataScience", "Technology",
//             "Machine learning",
//             "See All"]
//          )},
//          {title: "Overview",
//          content:(
//             <ul>
//             <li>Account</li>
//             <li>Notification</li>

//         </ul>
//          )},
//          {
//             title: "Logout",
//             content:
//          }

//     ];




// import Analytic from '../../Assets/carbon_analytics.png';
// import Social from '../../Assets/fluent_people.png';
// import Content from '../../Assets/Vector.png';

//  const Overview = () => {

//     interface  Bloglinks {
//         id:number,
//     icon: string
//     title: string
// }

//  const Bloglinks: Bloglinks[] = [
//     {
//         id: 1,
//         icon : `${Analytic}`,
//         title: "Feeds"},
//     {
//         id: 2,
//         icon: `${Social}`,
//         title: "Bookmarks",
//     },

//     {
//         id: 3,
//         icon: `${Content}`,
//         title: "TeamBlogs",
//     },
//       {
//         id: 4,
//         icon: `${Content}`,
//         title: "Draft",
//     },
//       {
//         id: 5,
//         icon: `${Content}`,
//         title: "Analytics"
// },
// ];

// const [links, setcards] = useState(Bloglinks)

//   return (
//     < >
//     <h3>Overview</h3>
//     {links.map((items, id)=>{
//         return(
//         <ul key={id}>
//                 <li>{items.icon}{items.title}</li>
//         </ul>)

//     })}

//     </>
//   )
// }
// export default Overview;
