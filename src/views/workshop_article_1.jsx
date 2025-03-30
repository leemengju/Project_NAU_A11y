import React from "react";
import { ChevronLeft } from "lucide-react";


const Workshop_article_1 = () => {
  const articleContent = [
    {
      type: "header",
      content: (
        <header className="mb-16">
          <h4 onClick={() => window.location.href = '/collection_workshop'} className=" flex flex-row items-center gap-1 mb-1.5 text-xl font-medium tracking-wide text-stone-700 max-sm:text-md max-sm:leading-9 underline">

            <ChevronLeft />
            回到文章彙總
          </h4>
          <h1 className="mb-1.5 text-3xl font-bold tracking-wide leading-10 text-stone-700 max-sm:text-2xl max-sm:leading-9">
          數位無障礙設計：遊石設計企業內訓
          </h1>

          <time dateTime="2024-11-20" className="text-base leading-5 font-[350] text-stone-700">
            2024-11-20
          </time>
        </header>
      ),
    },
    {
      type: "section",
      content: (
        <section className="px-0 py-5 bg-white rounded max-sm:p-4">

          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          我們以訪談的形式，隨機邀請三位完整參與課程並進行實作演練
          的學員，與我們分享課程心得，以下為訪談內容的整理：
          </p>
          <p className="text-red-500 mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          Q：哪些課程內容或資源，能幫助你更理解無障礙設計概
            念？
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          學員 A：課程內容中提供的設計實作資源在實踐時非常受用，
            此外，透過無障礙小工具（plugin），能協助留意實作的小細
            節及建立無障礙設計概念。
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          學員 B：課程中提及的元件互動方式、顏色對比度及替代文字
            的撰寫，都能直接幫助到設計實作。此外，WebAIM 檢核表
            工具幫助了解與開發合作的實踐要點，透過這些資源都能幫助
            我建立無障礙思維與意識。
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          學員 C：對於課程中提到的「對比度」特別有印象，光是一個
            規範，就有很多落實上的注意事項，這也讓我了解到不是去死
            記每條規範，而是要以使用者的角度去思考，這在理解規範有
            很大的幫助。
          </p>
          <p className="text-red-500 mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          Q：在實作練習時，哪些資源能提供你最大的幫助？
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          學員 A：本次課程內容豐富且充足，此外課堂中推薦的顏色對
            比度分析器 CCA 也在實作中很有幫助。
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
    
            學員 B：透過像 Microsoft 這樣的科技巨頭提供的開源資源，
            我學到了如何實現良好的的無障礙設計，尤其是從他們的設計
            文件中獲得啟發。
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          學員 C：透過課堂中的小練習環節，讓我對這些工具的操作和
            使用方法加熟悉，在實作練習時能夠更加得心應手。另外，
            Color review 選測小工具能更有效率的幫助定義色彩，很實
            用。
          </p>
          <p className="text-red-500 mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          Q：在實作練習過程中，你遇到的三個最大的困難或挑戰
          是什麼？你與團隊是如何克服它們？
          </p>
          <p className="text-zinc-400 mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          *實作演練說明：我們延續了競品分析的三大類別，並挑選了使用者常見
            的流程環節，最終選定「醫療類別的掛號流程」與「金融類別的轉帳流
            程」作為無障礙設計改版
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          學員 A：本次實作花了不少時間梳理原有流程的資訊架構，並
            考量了易用性問題。在完成整理後，進入重新設計階段，過程
            中花了些時間在美觀與實用之間找到平衡，特別是顏色選擇方
            面。
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          學員 B：針對無障礙需求，感覺整體視覺風格偏向較為生硬、
            扁平，尤其在設計金融類型的流程時，會更注重操作的流暢
            度，這樣一來美感就不太能以主流風格呈現。此外，由於顏色
            必須符合對比度規範，花了不少時間進行調整，過程稍顯繁
            瑣。不過幸好無障礙檢測工具提供了推薦配色，讓整個過程變
            得簡單許多。
          </p>
          <p className="text-red-500 mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          Q：完成無障礙課程訓練後，你的設計思維、理念或執行
            作法有沒有發生改變？為什麼？
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          學員 A：增加了許多無漲案的設計知識，並在實作的過程中會
            提醒自己留意。另外，現在有許多免費的無障礙工具可以降低
            執行無障礙設計的阻力。
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          學員 B：在設計時，我會特別關注區域劃分以及顏色對比度對
            視覺的影響。隨著對這些元素的敏感度提升，這些習慣不僅影
            響我的作品，也讓我在觀察其他設計時，自然而然地開始分析
            其結構和設計邏輯。
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          學員 C：透過金融無障礙小隊的專案的 PB 小聚分享，我覺得
            無障礙是個有趣的領域。上完本次的無障礙設計課程後，即使
            客戶沒有明確要求無障礙標準，我在設計時仍會先考慮佈局、
            用色和字級是否符合無障礙標準，感覺這些知識已經潛移默化
            地影響了我的設計思維。
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          Q：你對這次無障礙設計課程的內容或是實作練習，有什
          麼改進的建議？
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          學員 A：除了這類課程外，我希望無障礙設計能夠融入我們的
            工作流程和設計思維中，而不僅僅是一次性的學習體驗。希望
            從自身開始，將無障礙的理念影響到專案，並擴展到相關利害
            關係人。期待未來在企業內部的每週設計例會中，能夠撥出時
            間討論無障礙知識、實踐經驗以及全球的新趨勢和動態。
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          學員 B：希望課程中能增加更多的小實作環節，因為這些小練
          習能幫助我發現自己的盲點，同時對實踐和應用有很大幫助。
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          學員 C：這次的實作練習以 App 為主，但在準確測量介面上
            的元件大小、字級或色號時有些困難。相比之下，Web 頁面
            可以使用一些開源工具來直接測量，這樣能減少主觀判斷。不
            知道是否有推薦的作法？
          </p>
          <p className="font-bold mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          結論
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          在本次無障礙設計課程中，學員們分享了他們的學習體驗與實作
            挑戰，並提出了有價值的改進建議。學員們普遍認為課程中的內
            容、提供的資源、小練習及課後實作練習，對於理解無障礙設計
            概念非常有幫助，其中包括設計實作資源、顏色對比度分析器，
            以及開源工具等，能夠在設計過程中更好地應對無障礙要求，並
            提升了對無障礙設計的認知及思維。
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          然而，在實作過程中，學員們也面臨了一些挑戰，像是如何把規
            範落實到實作的過程中，知識的轉化及落地會需要著墨一番，尤
            其無障礙設計方樣具有多樣性，哪種解決方案適用，使用者的真
            實回饋對於選擇適合的解決方案至關重要，這突顯了使用者研究
            在無障礙設計中的重要性。
          </p>
          <p className="mb-5 text-lg leading-8 max-sm:text-base max-sm:leading-7">
          總體而言，本次課程有效協助遊石企業的設計師建立無障礙知
          識、實踐能力，並促進了無障礙思維的養成。
          </p>
          
        </section>
      ),
    },
  ];

  return (
    <>
      <article className="mx-auto mt-30 mb-20 text-gray-700 max-w-[510px] max-md:px-5 max-md:py-0">
        {articleContent.map((section, index) => (
          <React.Fragment key={index}>
            {section.content}
          </React.Fragment>
        ))}
      </article>
    </>
  );
};

export default Workshop_article_1;
