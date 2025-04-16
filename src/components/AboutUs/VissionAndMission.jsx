import Card from 'react-bootstrap/Card';
import img from "../../../public/assets/imgs/icons/vission.png"
export const VissionAndMission = () => {
    const data = [ 
        {
            icon:img ,
            title:'رؤيتنا',
            content:[
"تقديم مفهوم جديد"
,
'لمهنة التقييم العقاري',
'يرتكز على أساليب علمية',
'وقيم أخلاقية، مع توفير',
'حلول متنوعة تلبي',
'احتياجات العملاء.'
            ]
        },
        {
            icon: img,
            title:'رسالتنا',
            content:[
"تقديم خدمات التقييم"
,
'بدقة عالية وبأسلوب',
'يرتكز على أساليب علمية',
'واضح يعكس معطيات',
'السوق، وفقًا لأعلى',
'المعايير المحلية والدولية.'            ]
        },
        {
            icon: img,
            title:'قيمنا',
            content:[
'النزاهة',
'الأمانة',
'المسؤولية',
'الحيادية والشفافية'
            ]
        },
    ]
  return (
    <div className='container d-flex flex-column align-items-center align-items-lg-stretch flex-lg-row justify-content-center gap-5 my-50'>{

        data.map((item,index)=>    <Card key={index} style={{ width: '18rem' ,borderRadius:"20px"
        }} className='d-flex flex-column   boxShadowCard justify-content-between  wow fadeInUp p-4 border-0'>
            <div className="d-flex justify-content-center">

        <Card.Img variant="top" src={item.icon} style={{ width: '75px' }} />
            </div>
        <Card.Body>
          <Card.Title className='text-center'>{item.title}</Card.Title>
          {
            item.content.map((elm,index)=><Card.Text key={index} className='text-secondary my-2 text-center '>
            {elm}
          </Card.Text>)
          }
   
        </Card.Body>
      </Card>)
    }
        </div>
  )
}
