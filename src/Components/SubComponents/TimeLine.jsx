import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const TimeLine = ({data}) => {
  return (
    <div>
      <VerticalTimeline>

      {
          data.map((course,idx)=>(
            <VerticalTimelineElement key={idx}
               className="vertical-timeline-element--work"
               contentStyle={{ background: 'transparent', color: '#fff', border: '2px solid #00ffff', borderBottom:'none'}}
               contentArrowStyle={{ borderRight: '10px solid #00ffff' }}
               date={course.date}
               iconStyle={{ background: '#002828', color: '#00ffff' }}
               icon={course.image}
             >
               <h3 className="vertical-timeline-element-title">{course.degree}</h3>
               <h4 className="vertical-timeline-element-subtitle text-gray-300">{course.college}</h4>
   
             </VerticalTimelineElement>
          ))
      }

      </VerticalTimeline>
    </div>
  )
}

export default TimeLine
