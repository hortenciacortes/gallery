import * as C from "./styled";

type Props = {
    url: string;
    name: string;
    onDelete: (name: string) => Promise<void>;
}

export const PhotoItem = ({ url, name, onDelete }: Props) => {
    return(
        <C.Container>
            <img src={url} alt={name} />
            <div>
                {name}
                <svg onClick={e => onDelete(name)} xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus-circle red"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
            </div>
        </C.Container>
    )
}