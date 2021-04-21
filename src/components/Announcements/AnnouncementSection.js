import React from 'react';
import Announcement from './Announcement';
import "./announcementsection.css"

function AnnouncementSection({title}){
return(
    <div className="announcement-section">
    <h2>{title}</h2>
    <div className="announcements">
    <Announcement title="Airdrop!!! Airdrop!!!" content="We will be giving away 50000 $MMTH each for the first 200 to complete the tasks listed on the link below.
        For more information about our SAFE Mammoth, head on to our telegram." linkname="Airdrop" 
        link="https://docs.google.com/forms/d/e/1FAIpQLSdsuIZ-IFL0J8rdlsW9EqZDlDMy7BPSJ4unwg2rRGWUAVBnyw/viewform"/>
    </div>
    </div>
)
}

export default AnnouncementSection