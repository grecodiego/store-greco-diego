import './pagebutton.scss'

export function PageButton(props) {
        return <button onClick={props.onPress} className="pagebutton">
        {<img src={props.img} alt='arrow-page' />}
	</button>
}
