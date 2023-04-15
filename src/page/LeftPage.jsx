import './LeftPage.css'
import Left3D from "./leftMode/Left3D";


function LeftPage(props) {
    return (
        <div className={'left_main'}>
            <div className={'left_3d'}>
                <Left3D/>
            </div>
            <div className={'left_pay'}> {props.name}</div>
        </div>
    );
}

export default LeftPage;
