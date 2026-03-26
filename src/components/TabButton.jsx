export default function TabButton({ children, onSelect, isSelected }) {



    return (
        <li>
            <button className={isSelected ? 'active' : ''} onClick={onSelect}>{children}</button>
        </li>
    );
}

//props.children or {children} get all written b/w copening and closing component tags, it can be just a text or complex tags like <div><h2></h2></div> - this is known as component composition