import {ReactNode} from 'react'

export type BloglinksData = {
    title: string;
    content: ReactNode;
};


export default function Bloglinks({ data }: {data: BloglinksData}) {
  return (
    <div>
       <h3>
        <button>{data.title}</button>
    </h3>
    <div>
        {data.content}
    </div>
    </div>

  )
}
