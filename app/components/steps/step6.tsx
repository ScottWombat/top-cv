
import Languages from "~/components/languages";
import References from "~/components/references";
import './step-form.css';
import Celebration  from '~/components/svg/celebration';
import { Link, Outlet } from 'react-router';
const Step6 = (props) => {
    if (props.currentPage !== 6) {
        return null;
    }
    return (
        <div className='step6-wrapper'>
            <Celebration/>
            Congraturation! Your resume have successfully created. 
            <br/>
             <Link to={'/'} className="link" data-hover="HOME">HOME</Link>
            <button>Preview</button>
         {/*}
         <Languages/>
         <div className="empty-row">&nbsp;</div>
         <References/>
         */}
        </div>
       
    )
}

export default Step6;