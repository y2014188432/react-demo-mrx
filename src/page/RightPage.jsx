import './RightPage.css'
import RightTitle from "./rightMode/RightTitle";
import RightAttributes from "./rightMode/RightAttributes";
import RightAbout from "./rightMode/RightAbout";
import RightDescription from "./rightMode/RightDescription";

function LeftPage() {
    return (
        <div className={'right_main'}>
            <div className={'right_link'}>
                <RightTitle/>
            </div>
            <div className={'right_link'}>
                <RightAbout/>
            </div>
            <div className={'right_link'}>
                <RightAttributes/>
            </div>
            <div className={'right_link'}>
                <RightDescription/>
            </div>
        </div>
    );
}

export default LeftPage;
