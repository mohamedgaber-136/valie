import "./team.css";
import team1 from "../../../public/assets/imgs/team/1724329561760.png";
import team2 from "../../../public/assets/imgs/team/358.png";
import team3 from "../../../public/assets/imgs/team/Untitled-4.png";
import vission from "../../../public/assets/imgs/icons/vission.png";
export const Team = () => {
    const data = [
        {        name:'عبدالمجيد بن حمد العليان',
            img:team3,
    
            title:'الشريك  و المدير التنفيذي',
            float:false,
            
            agent:<span  className='Lheight' style={{fontFamily:'ge-light'}}>مدرب معتمد و عضو أساسي  في الهيئه<br />  السعودية للمقيمين المعتمدين</span>
         },
         {
           title:'الشريك المؤسس و الرئيس التنفيذي',
       
            img:team2,
            name:'وحيد بن أحمد الجساس',
         
            agent:<span className='Lheight' style={{fontFamily:'ge-light'}}>   عضو اساسي زميل في الهيئه السعودية <br /> للمقيمين المعتمدين      </span>,
                float:true
         },
        {
            img:team1,
            name:' عبدالله بن إبراهيم السكران  ',
            title:' مدير التقييم العقاري  ',
            agent:<span className='Lheight' style={{fontFamily:'ge-light'}}>   عضو اساسي زميل في الهيئه السعودية <br /> للمقيمين المعتمدين      </span>,

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
             <h2 className='AgentName   text-center' >
                {item.name}
             </h2>
             <h4 className='AgentTitle   text-center' style={{fontFamily:'ge-light'}}>
                {item.title}
             </h4>
        
             </div>
             <h6 className='Agentexp  text-center'>
                {item.agent}
             </h6>
         </div>
           )}
        </div>
    </div>
  );
};
