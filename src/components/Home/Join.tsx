import React,{useState} from 'react';
import Analytic from '../../Assets/carbon_analytics.png';
import Social from '../../Assets/fluent_people.png';
import Content from '../../Assets/Vector.png';

const Join = () => {

    interface Icards {
        id:number
    image: string
    title: string
    paragraph: string
}



const initialCards: Icards[] = [
    {
        id: 1,
        image : `${Analytic}`,
        title: "Analytics",
        paragraph: "Analytics to track the number of views, likes and comment and also analyze the performance of your articles over a period of time"
    },
    {
        id: 2,
        image: `${Social}`,
        title: "Social interactions",
        paragraph: "Users on the platform can interact with posts they like, comment and engage in discussions",
    },
    {
        id: 3,
        image: `${Content}`,
        title: "Content creation",
        paragraph: "Write nice and appealing with our in-built markdown, a rich text editor",
    }
];

const [cards, setcards] = useState(initialCards)

  return (
    <section className='flex flex-col ' >
        <div className='m-auto w-10/12 '>
            <h2 className='text-center '>Why you should join chatter</h2>
            <p>Our goal is to make writers and readers see our platform as their next heaven for blogging, ensuring ease in interactions, connecting with like-minded peers, have access to favorite content based on interests and able to communicate your great ideas with people</p>
        </div>
        <div className=' md:flex gap-12 mt-10 m-auto w-10/12 '>
            {
                cards.map((card, id) => {
                    return (
                <div key={id} className='w-[377px] h-[360px] border border-[#D0D0D0] rounded-lg flex gap-4 flex-col p-4  '>
                    <div className='w-[92px] h-[88px] bg-[#d6d1f833] rounded-full flex '>
                         <img className="m-auto " src={card.image} alt='icon'/>
                    </div>

                     <h4 className='text-[26px] font-semibold leading-[36px]  text-[#111111]'>{card.title}</h4>
                     <p className='text-[#626262] flow-root  '>{card.paragraph}</p>
                </div>
                    )
                })
            }

        </div>
    </section>
  )
}

export default Join