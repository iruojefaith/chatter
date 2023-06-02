import React,{useState} from 'react';
import Analytic from '../Assets/carbon_analytics.png';
import Social from '../Assets/fluent_people.png';
import Content from '../Assets/Vector.png';

const Join = () => {

    interface Icards {
    image: string
    title: string
    paragraph: string
}



const initialCards: Icards[] = [
    {
        image : `${Analytic}`,
        title: "Analytics",
        paragraph: "Analytics to track the number of views, likes and comment and also analyze the performance of your articles over a period of time"
    },
    {
        image: `${Social}`,
        title: "Social interactions",
        paragraph: "Users on the platform can interact with posts they like, comment and engage in discussions",
    },
    {
        image: `${Content}`,
        title: "Content creation",
        paragraph: "Write nice and appealing with our in-built markdown, a rich text editor",
    }
];

const [cards, setcards] = useState(initialCards)

  return (
    <div className='section flex flex-col w-full' >
        <div className='m-auto w-10/12 '>
            <h2 className='text-center '>Why you should join chatter</h2>
            <p className='text-[18px] font-normal leading-[27px]' >Our goal is to make writers and readers see our platform as their next heaven for blogging, ensuring ease in interactions, connecting with like-minded peers, have access to favorite content based on interests and able to communicate your great ideas with people</p>
        </div>
        <div className='m-auto w-10/12 md:flex gap-4 md:gap-2 '>
            {
                cards.map(card => {
                    return (
                <div className=''>
                    <div className='w-[92px] h-[88px] bg-[#d6d1f833] rounded-full flex '>
                         <img className="m-auto " src={card.image} alt='icon'/>
                    </div>

                     <h4 className='text-[24px] font-semibold leading-[36px]  text-[#111111]'>{card.title}</h4>
                     <p className='text-[18px] leading-[27px] text-[#626262] '>{card.paragraph}</p>
                </div>
                    )
                })
            }

        </div>
    </div>
  )
}

export default Join