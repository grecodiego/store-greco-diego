import './pagenumber.scss'

export function PageNumber(props) {
        return <button  onClick={props.onPress} className="pagenumber">
                {props.number}
	</button>
}
