import { FunctionComponent } from 'react';
import Large from './view/Large';
import ReactMarkdown from 'react-markdown';

type ItemProps = {
    item: {
        title: string,
        description: string,
        difficulty: string,
        image: string,
        created_at: string,
    },
    type: string,
    width: string,
    maxWidth: string
  }

const Item: FunctionComponent<ItemProps> = ( { item : { title, description, difficulty, cover, created_at, slug }, type, maxWidth} ) => {

    const printContentResume = (description :string, letters :number) : string => {
        if(description === null) return "";
        return description.substr(0, letters) + '...';
    }

    const printformatDate = (created_at : string) : string => {
        let date = new Date(created_at);
        return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    }

    return(
        <Large
            title={title}
            cover={cover}
            created_at={printformatDate(created_at)}
            link={{
                href: "/recettes/[slug]",
                as: `/recettes/${slug}`
            }}
            description={<ReactMarkdown source={printContentResume(description, 100)}/>}
            width={"100%"}
            maxWidth={maxWidth}
        />
    );

}

export default Item;
