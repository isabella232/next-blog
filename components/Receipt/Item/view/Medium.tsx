import { FunctionComponent, ReactElement } from 'react';
import config from "@config/config";
import Link from 'next/link';

type ItemProps = {
    cover,
    created_at: string,
    content: string
}

const Medium: FunctionComponent<ItemProps> = ( {title, cover, created_at, content, link } ) => {

    let cardContentStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }

    return(
        <div className="card columns has-background-white-bis mb-5">
            {cover && (
                 <figure className="image column">
                    <img src={config.strapiUrl + cover.formats.small.url} alt="Placeholder image" />
                </figure>
            )}
            <div style={cardContentStyle} className="card-content column is-three-quarters">

                <div className="level">
                    <div className="level-left">
                        <h3 className="is-size-4">{title}</h3>
                    </div>
                    <div className="level-right">
                        <time className="has-text-grey" datetime={created_at}>{created_at}</time>
                    </div>
                </div>

                <div className="content has-text-weight-light mb-2">
                    {content}
                </div>

                <div className="level">
                    <div className="level-left"></div>
                    <div className="level-right">
                        <Link href={link.href} as={link.as} >
                          <a className="button is-primary has-text-right">Lire la suite</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Medium;
