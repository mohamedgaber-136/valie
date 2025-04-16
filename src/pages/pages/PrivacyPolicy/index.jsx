import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import '../../../../public/assets/css/custom/PrivacePolicy.css';
import MobailHeader1 from "@/components/headers/MobailHeader1";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "سياسة الخصوصية || Valie للتقييم العقاري",
  description: "سياسة الخصوصية الخاصة بشركة Valie للتقييم العقاري.",
};

function PrivacyPolicy() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <MobailHeader1 />
      <main className="privacy-policy-main d-flex flex-column gap-2">
        <h1 className="privacy-policy-title">سياسة الخصوصية</h1>
        <p className="last-updated">آخر تحديث: 2 فبراير 2025</p>
        <p className="privacy-policy-text text-center">
          توضح سياسة الخصوصية هذه سياسات وإجراءات شركة Valie بشأن جمع واستخدام والكشف عن معلوماتك عند استخدامك لموقعنا، وتوضح حقوق الخصوصية الخاصة بك وكيف يحميك القانون.
        </p>

        <h2 className="section-title">التفسيرات والتعريفات</h2>
        <div className="border rounded p-2">
          <h3 className="subsection-title">التفسيرات</h3>
          <p className="privacy-policy-text">
            الكلمات التي تبدأ بحرف كبير تحمل معاني محددة وفقًا للتعريفات التالية.
          </p>
        </div>

        <h3 className="subsection-title">التعريفات</h3>
        <div className="border rounded p-2">
          <ul className="definitions-list">
            <li><p><strong>الحساب:</strong> يعني حسابًا فريدًا تم إنشاؤه من أجلك للوصول إلى خدماتنا.</p></li>
            <li><p><strong>الشركة:</strong> تشير إلى Valie، تركيا.</p></li>
            <li><p><strong>الشريك:</strong> هو كيان يتحكم أو يخضع لنفس التحكم من قبل الشركة.</p></li>
            <li><p><strong>ملفات تعريف الارتباط (Cookies):</strong> هي ملفات صغيرة تُحفظ على جهازك.</p></li>
            <li><p><strong>الدولة:</strong> تشير إلى: تركيا</p></li>
            <li><p><strong>الجهاز:</strong> يعني أي جهاز يمكنه الوصول إلى الخدمة مثل الهاتف المحمول أو الكمبيوتر.</p></li>
            <li><p><strong>البيانات الشخصية:</strong> تعني أي معلومات تتعلق بشخص مُعرف أو يمكن التعرف عليه.</p></li>
            <li><p><strong>الخدمة:</strong> تشير إلى موقع Valie الإلكتروني.</p></li>
            <li><p><strong>مزود الخدمة:</strong> هو أي جهة تقوم بمعالجة البيانات نيابة عن الشركة.</p></li>
            <li><p><strong>بيانات الاستخدام:</strong> تشير إلى البيانات التي يتم جمعها تلقائيًا أثناء استخدام الخدمة.</p></li>
            <li>
              <p><strong>الموقع الإلكتروني:</strong> يشير إلى Valie، ويمكن الوصول إليه من خلال <a href="https://www.valie.com" target="_blank">www.valie.com</a></p>
            </li>
            <li><p><strong>أنت:</strong> تعني الشخص الذي يصل إلى الخدمة أو يستخدمها.</p></li>
          </ul>
        </div>

        <h2 className="section-title">جمع واستخدام بياناتك الشخصية</h2>

        <h3 className="subsection-title">أنواع البيانات التي يتم جمعها</h3>

        <h4 className="sub-subsection-title">البيانات الشخصية</h4>
        <p className="privacy-policy-text">
          أثناء استخدامك لخدمتنا، قد نطلب منك تزويدنا ببعض المعلومات الشخصية التي يمكن استخدامها للتواصل معك أو التعرف عليك.
        </p>
        <div className="border rounded p-2">
          <ul className="data-list">
            <li><p>عنوان البريد الإلكتروني</p></li>
            <li><p>الاسم الأول واسم العائلة</p></li>
            <li><p>رقم الهاتف</p></li>
            <li><p>بيانات الاستخدام</p></li>
          </ul>
        </div>

        <h4 className="sub-subsection-title">بيانات الاستخدام</h4>
        <div className="border rounded p-2">
          <p className="privacy-policy-text m-0 p-0">
            يتم جمع بيانات الاستخدام تلقائيًا عند استخدام الخدمة، وتشمل معلومات مثل عنوان IP، نوع المتصفح، إصدار المتصفح، الصفحات التي تزورها، الوقت والتاريخ، والوقت الذي قضيته على تلك الصفحات.
          </p>
        </div>

        <h4 className="sub-subsection-title">تقنيات التتبع وملفات تعريف الارتباط</h4>
        <div className="border rounded p-2">
          <p className="privacy-policy-text p-0 m-0">
            نستخدم ملفات تعريف الارتباط والتقنيات المشابهة لتتبع النشاط على خدمتنا وتخزين معلومات معينة.
          </p>
        </div>

        <h3 className="subsection-title">استخدام بياناتك الشخصية</h3>
        <div className="border rounded p-2">
          <ul className="use-data-list">
            <li><p><strong>لتقديم الخدمة وصيانتها:</strong> بما في ذلك مراقبة استخدام الخدمة.</p></li>
            <li><p><strong>لإدارة حسابك:</strong> تمكينك من الدخول إلى أجزاء معينة من الخدمة.</p></li>
            <li><p><strong>لتنفيذ العقود:</strong> مثل شراء المنتجات أو الخدمات المقدمة عبر الخدمة.</p></li>
            <li><p><strong>للتواصل معك:</strong> من خلال البريد الإلكتروني أو الهاتف أو الرسائل النصية.</p></li>
          </ul>
        </div>
      </main>

      <Footer1 />
    </>
  );
}

export default PrivacyPolicy;
