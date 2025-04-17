import './team.css'
import team1 from '../../../public/assets/imgs/team/1724329561760.png'
import team2 from '../../../public/assets/imgs/team/358.png'
import team3 from '../../../public/assets/imgs/team/Untitled-4.png'
import vission from '../../../public/assets/imgs/icons/vission.png'
export const Team = () => {
    const data = [
        {        name:'عبدالمجيد بن حمد العليان',
            img:team3,
    
            experience:`18 سنة خبرة في مجال التقييم`,
            title:'الشريك المؤسس و المدير التنفيذي',
            float:false,
            agent:`مدرب معتمد و عضو أساسي  في الهيئة 
            السعودية للمقيمين المعتمدين`
         },
         {
           title:'الشريك المؤسس و الرئيس التنفيذي',
            experience:`25 سنة خبرة في المجال العقاري و 16 سنة في
    مجال التقييم العقاري`,
            img:team2,
            name:'وحيد بن أحمد الجساس',
            agent:`عضو أساسي زميل في الهيئة السعودية
            للمقيمين المعتمدين`,
                float:true
         },
        {
            img:team1,
            name:' عبدالله بن إبراهيم السكران  ',
            title:' مدير التقييم العقاري  ',
            experience:`10 سنوات خبرة في مجال التقييم  `,
agent:` عضو أساسي زميل في الهيئة السعودية
للمقيمين المعتمدين`,
float:false
        },
    ]
  return (
    <div className=' teamContainer' id='team'>
        <h2 className='teamTitle'>خبراء فالي</h2>
        <div className="row p-0 gap-5 gap-md-0  DataContainer">
           {data.map((item,index)=>
             <div className={`${item.float?'floatCard ':''}  wow fadeInUp    col-12 d-flex flex-column align-items-center justify-content-center col-md-4 `} key={index}>
                <div className='teamImgContainer d-flex align-items-center justify-content-center'>
<img src={vission} className='vissionimg' alt="" />
             <img src={item.img} className='profileImg' alt="" />
                </div>
             <div className="d-flex align-items-center justify-content-center flex-column gap-2 dataContent">
             <h2 className='AgentName  CustomFont text-center'>
                {item.name}
             </h2>
             <h4 className='AgentTitle CustomFont  text-center'>
                {item.title}
             </h4>
             <h6 className='Agentexp  CustomFont text-center'>
                {item.experience}
             </h6>
             </div>
             <h6 className='Agentexp CustomFont text-center'>
                {item.agent}
             </h6>
         </div>
           )}
        </div>
    </div>
  )
}
