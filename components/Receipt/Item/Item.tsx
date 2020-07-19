import { FunctionComponent, ReactElement } from 'react';
import config from "@config/config";
import Large from './view/Large';
import Medium from './view/Medium';
import Small from './view/Small';
import ReactMarkdown from 'react-markdown';

type ItemProps = {
    item: {
        title: string,
        content: string,
        difficulty: string,
        image: string,
        created_at: string,
    },
    type: string
  }

const Item: FunctionComponent<ItemProps> = ( { item : { title, content, difficulty, cover, created_at }, type} ) => {
    
    const printContentResume = (content :string, letters :number) : string => {
        return content.substr(0, letters) + '...';
    }

    const printformatDate = (created_at : string) : string => {
        let date = new Date(created_at);
        return `${date.getDay()}/${date.getDate()}/${date.getFullYear()}`;
    }

    if(type === 'large'){
        return(
            <Large 
                title={title} 
                cover={cover} 
                created_at={printformatDate(created_at)} 
                content={<ReactMarkdown 
                    source={printContentResume(content, 200)} 
            />} />
        );
    } else if(type === "small") {
        return(
            <Small 
                title={title} 
                cover={cover} 
                created_at={printformatDate(created_at)} 
                content={<ReactMarkdown source={printContentResume(content, 100)} 
            />} />
        );
    } else {
        return(
            <Medium 
                title={title} 
                cover={cover} 
                created_at={printformatDate(created_at)} 
                content={<ReactMarkdown source={printContentResume(content, 250)} 
            />} />
        );
    }
}

export default Item;