import React from 'react';
import './TodoHeader.scss';
import Year from "react-live-clock";
import Month from "react-live-clock";


const TodoHeader = () => {
    return (
        <div className="Todo__header">
            {/* title */}
            <div className="title">TODO LISt</div>
            {/* time */}
            <div className="time">

                {/* Year */}
                <span className="Year">
                    <Year format={"YYYY"} ticking={false} timezone={"KR/Pacific"} />
                </span>
                <div className="time__bottom">
                    {/* Month */}
                    <span className="Month">
                        <Month format={"MMM"} ticking={false} timezone={"KR/Pacific"} />
                    </span>
                    {/* Day */}
                    <span className="Day">
                        <Month format={"DD"} ticking={false} timezone={"KR/Pacific"} />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TodoHeader;