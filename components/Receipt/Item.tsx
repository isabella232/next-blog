import { FunctionComponent, ReactElement } from 'react';
import config from "@config/config";

type ItemProps = {
    item: {
        content: string,
        difficulty: string,
        image: string,
        created_at: string,
    }
  }

const Item: FunctionComponent<ItemProps> = ( { item : { content, difficulty, image, created_at } } ) => {

    const printImage = () : ReactElement => {
        let firstImage = image[0];
        return (
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={config.strapiUrl + firstImage.formats.small.url} alt="Placeholder image" />
                </figure>
            </div>
        );
    }

    const printContentResume = (content) : string => {
        return content.substr(0, 150) + '...';
    }

    const printformatDate = (created_at) : string => {
        let date = new Date(created_at);
        return `${date.getDay()}/${date.getDate()}/${date.getFullYear()}`;
    }

    return(
        <div className="card">
           {image.length > 0 ? printImage(image) : ''}
            <div className="card-content">
                <time datetime={created_at}>{printformatDate(created_at)}</time>
                <div className="content">
                    {printContentResume(content)}
                </div>
                <a className="button is-primary has-text-right" href="">Lire la suite</a>
            </div>
        </div>
    );
}

export default Item;