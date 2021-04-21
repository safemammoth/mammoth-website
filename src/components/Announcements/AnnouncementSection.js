import React from 'react';
import Announcement from './Announcement';
import "./announcementsection.css"

function AnnouncementSection({title}){
return(
    <div className="announcement-section">
    <h2>{title}</h2>
    <div className="announcements">
    <Announcement title="Airdrop!!! Airdrop!!!" content="We will be giving away 50000 $MMTH each for the first 200 to complete the tasks listed on this link
        For more information about our SAFE Mammoth, head on to our telegram"/>
    </div>
    </div>
)
}

export default AnnouncementSection