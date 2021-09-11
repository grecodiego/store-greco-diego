import './sortbutton.scss'

export function SortButton(props) {
        function handleSortButton(){
                props.handle()
                props.jump(1)
        }
        return <button className="sortbutton" onClick={handleSortButton}>
        {props.textButton}
	</button>
}
