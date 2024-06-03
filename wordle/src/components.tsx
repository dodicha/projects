export function CheckWords(storedWord: string, typedWord:string[], letter:string){
    let count = 0
    const match = typedWord.map((el, index)=>{
      count += 1;
      if(el.includes(letter)){
  
        if(storedWord.includes(letter)){
  
          if(el.indexOf(letter) === storedWord.indexOf(letter)){
            return 'green';
          }else{
            return 'yellow'
          }
        }else{
  
          return 'grey'
        }
      }else if(typedWord.join('').split('').includes(letter) && !storedWord.includes(letter)){
        return 'grey'
      }
      else{
        return 'letters'
      }
    });
  
    return match[count-1];
  };
export function Column(subWord: string, word:string){  
    const column = new Array(word.length).fill('').map((el,index)=>{
        if(subWord === undefined){
          return <div key={Math.random()*Math.random()} className='colum-element'>{el}</div>
        }else{
          el=subWord[index];
          let classname = 'colum-element'
          if(word.includes(el) && subWord[index] === word[index]){
            classname = `${classname} column-green`
          }else if(word.includes(el)){
            
            classname = `${classname} column-yellow`;
            console.log(classname)
          }else{
            classname =`${classname} column-grey`
          }
          return <div key={Math.random()*Math.random()} className={classname}>{el}</div>
        }
      
      
      
    });
    return (
      <div className='colum'>
        {column}
      </div>
    )
  };
export function Row(props: {words: string[], hiddenWord : string}){
    const row = new Array(6).fill('').map((el, index)=>{
      return(
        <div key={index}> 
          {Column(props.words[index], props.hiddenWord)}
        </div>
      );
    });
    return (
      <div>
        {row}
      </div>
    )
  };
export function keyboard(array:string[], word : string, guesses:string[]){
    const letters = array.map((el, index)=>{
        
        const classname = `letters ${CheckWords(word, guesses, el)}`
        return (
          <div 
          className = {classname} 
          key={index}> {el}  
          </div>
        )
    });
  
  return(
    <div className='keyboard'>
      {letters}
    </div>
  );
  };
export function Board(props:{array:string[][], word:string, guesses:string[]}){
    const letter: any = props.array.map((el, index)=>{
      return(
        <div key={index}>
          {keyboard(el, props.word, props.guesses)}
        </div>
      ) 
    })
  
    return(
      <div>
        {letter}
      </div>
    );
  };
 export function showLetter(index: number, letters: boolean[], setLetter: (letters:boolean[])=>void, setHelps: (number: number)=>void){
    if(!letters.includes(true)){
      const changedArray = [...letters];
      changedArray[index] = true;
      setLetter(changedArray);
      setHelps(1);
    }
  };
 export function Help(props:{word: string, letters:boolean[], setLetter: (letters:boolean[])=>void, setHelps: (number: number)=>void}){
    const helps = props.word.split('').map((el, index)=> {
      return (
        <div 
          key={index}
         className='square' 
         onClick={()=> showLetter(index, props.letters, props.setLetter, props.setHelps) }
         >{props.letters[index]? el : ''}</div>
      )
    });
    return (
      <div>
        <h3>1 Hint = 25 PTS</h3>
        <div className='help'>{helps}</div>
      </div>
      
    )
  }
  const words =
`აბადოკი
აბლაბუდა
აგი
ადამიანი
ადექი
ადვილი
ადიელა
ადუღდა
ავდგე
ავდგეთ
ავიღე
ავტობუსი
ავტომანქანა
ავტომატი
ავტოფარეხი
ავყირავდი
ათასგვარი
ათასფერი
აი
აკვარიუმი
აკრიფე
აკუმლიატორი
ალო
ალუბალი
ალუჩა
ამამა
ამინდი
ამიყვანე
ამიხუტე
ამოდი
ამოსვლა
ანასტასია
ანდრია
ანნა მარია
აპარატი
არა
არაჩვეულებრივი
არვარგა
არვიცი
არმინდა
არქიტექტორი
ასანთი
ასვლა
ასკინკილა
ატამი
ატრაქციონი
აქლემი
აყენება
აყვავებულა
აჭარული
ახალი
ახტი
აჯაფსანდალი
ბაბაიაგა
ბაბუ
ბაბუა
ბაბუკა
ბაბუუ
ბადრიჯანი
ბავშვები
ბავშვი
ბაზრობაზე
ბაკურიანი
ბალიში
ბანანი
ბანაობა
ბანკომატი
ბარანბინო
ბარბარე
ბარბი
ბასანოჟკები
ბასანოჩკები
ბასანოჩკი
ბასილაშვილი
ბატი
ბატიბუტი
ბატონო
ბაყაყი
ბაჭია
ბებერი
ბებია
ბებო
ბეგემოტი
ბედისწერა
ბედნიერი
ბეკეკა
ბეჰემოთი
ბეჰემოტი
ბზიკი
ბინძურია
ბიცოლა
ბიძია
ბიჭი
ბლოკნოტი
ბოდიში
ბოთლი
ბორბალი
ბოროტი
ბოხი
ბრინჯი
ბროწეული
ბრჭყვიალა
ბუბლიკი
ბუზი
ბუთქუნა
ბუთხუზა
ბულვარი
ბურატინო
ბურბუშელა
ბურთი
ბუტერბროდი
ბუტხუზა
ბუშტი
ბუჩქი
გააბრაზა
გააკეთე
გააღე
გაბერილი
გაბერილო
გაბუტული
გაგებუტე
გაგორდა
გაგწუწე
გადააგდე
გადავარდა
გადავხტი
გადაიწვა
გადაყლაპე
გადი
გადმობრუნდი
გათავდა
გათამაშება
გაკაწრული
გამადიდებელი
გამარჯობა
გამებუტა
გამიღე
გამიშვი
გამიხსენი
გამოქვაბული
გამხადე
განიერი
გარეთ
გასაფერადებელი
გასაღები
გატეხა
გაფუჭებულია
გაქაფე
გაჩერდი
გაწუწნა
გაჭედილი
გელა
გემრიელია
გემუდარები
გეუბნები
გეხვეწები
გვრიტი
გიგა
გითხრეს
გილოცავ
გინდა
გიო
გიორგი
გიჟქალა
გიტარა
გოგო
გოლფი
გორგასალი
გოჭი
გრუხუნი
გრძნობა
გუაში
გუგული
გუდაური
გუდიანი
გულიკო
გურამი
დაამუხრუჭა
დაარტყა
დაარტყი
დააფარე
დაბანვა
დადე
დავათვალიერო
დავამთქნარე
დავატრიალო
დავიმალო
დავიღუპები
დავიძინოთ
დავჭმუჭნე
დავჯდე
დავჯდები
დათვი
დათო
დათუნა
დათუნია
დალმატინელი
დამალაპარაკე
დამალევინე
დამანახე
დამანებე
დამატება
დამაფარე
დამაწიწკნე
დამაჯინე
დამელოდე
დამთავრდა
დამიმაცე
დამირიგე
დამიხატე
დამპალო
დამსვი
დამჭმუჭნე
დამხვდა
დანა
დარბიან
დარტყმა
დაუმიზნე
დაღამდა
დაჩუტა
დაჩხაპნილი
დაძინება
დახატვა
დაჯექი
დაჯღანული
დაჯღაპნილი
დებილი
დებილო
დედა
დედიკო
დედოფალი
დეველოპერული
დეიდა
დესკტოპი
დიბილი
დიდი
დიმა
დიმპიტაური
დინამიკი
დინოზავრი
დინჯად
დირექტორი
დიროლ
დისკი
დოლი
დრაკონი
დუბლიონკა
დუღს
დუხი
ეზო
ეკა
ეკლესია
ეკლესიაში
ელემენტი
ელენე
ემემდემსი
ენა
ერთი
ერთნაერი
ერთნაირი
ეს
ეტევა
ექიმი
ეშმაკი
ეჩხუბა
ვაჟბატონი
ვარდისფერი
ვარსკვლავები
ვარსკვლავი
ვარსკულავი
ვაშლატამა
ვაშლი
ველოსიპედი
ველოსიპეტი
ვენტილატორი
ვერა
ვერტალიოტი
ვერტმფრენი
ვერცხლისფერი
ვეფხვი
ვზივარ
ვითამაშოთ
ვითომ
ვიმუშაო
ვიპოვე
ვირთხა
ვიცეკვოთ
ვიჭიდაოთ
ვიხტუნაოთ
ვნახოთ
ვსვავ
ვულკანი
ვქენი
ვქნა
ზაზუნა
ზემოთ
ზვიგენი
ზონტიკი
ზოოპარკში
ზორბეგი
ზურა
ზღარბი
ზღვა
თაგვი
თაიგული
თაკო
თამაშები
თამაში
თამუ
თამუნა
თანამშრომელი
თაფლი
თედო
თევზი
თეკლე
თეფში
თვალი
თვითმფრინავი
თითი
თიკო
თინიკო
თმა
თმისაბნევი
თოვდა
თოვლი
თოფი
თოჯინა
თუთიყუში
თქვენ
თხუთმეტი
იასამნისფერი
ივანუშკა
ილაპარაკე
ინაუგურაცია
ინგა
ინგლისი
ინგლისური
ინდაური
ინტერნეტი
იოგურტი
ის
ისინი
ისმის
იუბილარი
იქნება
იცი
იხვი
იხტუნავე
კაბა
კაი ბიჭი
კაი კაცო
კაია
კაკაო
კაკტუსი
კალამი
კალგოტკა
კალიასკა
კამპოტი
კამფეტი
კანალიზაცია
კანფეთი
კანფეტი
კარალიოკი
კარაქი
კარაქიანი
კარგად
კარგია
კარები
კართოფილი
კარტოფილი
კარუსელი
კატა
კატლეტები
კატლეტი
კბილი
კევა
კევი
კესანე
კვადრატი
კვერცხი
კი
კიბეები
კიბორჩხალა
კიდე
კიდევ
კისერი
კიტრი
კლასელი
კლდე
კლიზმა
კლოუნი
კლუბი
კნოპკა
კნუტი
კოვზი
კოკაკოლა
კოკროჭინა
კომპიუტერი
კონვერტი
კონკია
კოპლებიანი
კორპუსი
კოღო
კრუასანები
კუ
კუბიკი
კუდი
კულიჩი
კუნკულა
კუპალნიკი
კურდღელი
კურკა
კურტკა
ლამაზი
ლაპარაკი
ლაპარაკობს
ლაურა
ლაშა
ლევანი
ლეკვი
ლეოპარდი
ლეპტოპი
ლექსი
ლექსიკონი
ლიზი
ლიზიკო
ლიკა
ლიმონათი
ლიმონი
ლოგინი
ლოკოკინა
ლომი
ლონდრე
ლუდი
ლუიზა
ლურჯი
მაგიდა
მადლობა
მადლონა
მათხოვე
მაიკა
მაიმუნი
მაიმუნო
მაიონეზი
მაკარონი
მაკრატელი
მამა
მამიდა
მამიკო
მანანა
მანახე
მანდარინი
მანიკური
მანქანა
მანქანაში
მანქანები
მარი
მარიამი
მარშუტკა
მასწავლებელი
მატარებელი
მატლი
მატყუარა
მატყუარა (სოსკა)
მაუსი
მაქვს
მაშურტკა
მაჩვენე
მაჩუქა
მაცდურო
მაცივარი
მაწონი
მაჭამე
მაჯლაჯუა
მაჯლაჯუნა
მგელი
მე
მეგობარი
მეთემატიკა
მენატრება
მეორე
მერცხალი
მესროლე
მეღიტინება
მეშინია
მეძინაბა
მეძინება
მზე
მზესუმზირა
მთა და ბარი
მთვარე
მიბრუნდი
მიდის
მივადოთ
მივდივარ
მიიტანე
მიკიმაუსი
მინდა
მიყვარხარ
მიყვარხვარ
მიშველე
მიშველეთ
მიშიკო
მიწა
მობილური
მოგატყუე
მოდი
მოვედი
მოვიდა
მოვძებნოთ
მოკლა
მომე
მომენტი
მომეფეროს
მომეცი
მომიფხანე
მომიფხიკე
მონიტორი
მონსტრი
მორჩა
მოტოციკლეტი
მოტოციკლი
მოფერება
მოცხარი
მოწნული
მსუქანი
მტკვარი
მტკივა
მუზეუმი
მუთაქა
მულტფილმები
მულტფილმი
მურაბა
მუსიკა
მუშაობს
მშია
მწვანე
მწყურია
ნაბეღლავი
ნაგავი
ნაზუქი
ნათელა
ნამცხვარი
ნანა
ნანიკო
ნანუკა
ნასკი
ნატახრატი
ნატახტარი
ნატკენი
ნატო
ნაყინი
ნაძვის ხე
ნაძვისხე
ნაჭერი
ნახატი
ნახევარი
ნემსიყლაპია
ნიკა
ნიკაპი
ნინი
ნინო
ნუგეშინია
ობობა
ობობოა
ოთხი
ოთხკუთხედი
ოლივიე
ორი
ორივე
ორსული
ოხერი
პამიდორი
პამპერსი
პაპა
პაპიდა
პაროლი
პასკა
პასტა
პასტაფურცელი
პასუხი
პატარა
პატრული
პეპელა
პერაშკი
პეჩენია
პიანინო
პინგვინი
პიოი
პირი
პირსახოცი
პიტერ პენი
პიურე
პლასტელინი
პლასტილინი
პოლიცია
პომადა
პომიდორი
პრიანიკი
პტაპტა
პური
ჟაკეტი
ჟირაფი
რაარი
რამაზი
რატომ
რაფაელო
რაღაცა
რაღაცეები
რბოლა
რგოლი
რეზო
რეიტუზი
რეკლამა
რვაფეხა
რობოტი
რული
რძე
საავადმყოფო
საათი
საბა
საბანი
საზამთრო
საზამტრო
სათამაშო
სათამაშოები
საკატაო
სალა
სალომე
სალტო
სალფეთქი
სამეგრელო
სამსახური
სამსახურში
სამშობლო
სანდოძე
სანთელი
სანტიმეტრი
საპონი
სარაფანა
სარგებელი
სასისკი
სასრიალო
სასრიალო კარუსელი
სატელევიზიო ანძა
საფულე
საქანელა
საქართველო
საღეჭი რეზინა
საყვარელი
საყურე
საჩუქარი
საძინებელი
საწოვარა
საწოლი
საწრუპი
საჭე
საჭმელი
სახლი
სახლში
სახურავი
სგუშონი
სემიჩკა
სენსიზი
სერთიფიკატი
სეფილო
სეფისკვერი
სექსი
სიარული
სიბნელე
სიგარეტი
სიმბა
სიმღერა
სინათლე
სიცოცხლე
სკამი
სკოლა
სკოლაში
სმეტანა
სნიკერსი
სოკარი
სოსისი
სოსკა
სოფო
სპაიდერმენი
სპილო
სპლიყვი
სტაფილო
სტაფილოსფერი
სულ
სულხან-საბა ორბელიანი
სუნამო
სუნთქვა
სუპი
სურათი
სურამი
სუფთა
სუხარი
სხენი
სხვა
ტაკო
ტანსაცმელი
ტარაკანა
ტელევიზორი
ტელეფონი
ტელეღიპუცები
ტერასი
ტიტველა
ტიტველი
ტიტლიკანა
ტკბილი
ტლიკინი
ტორტი
ტრაილერი
ტრაქტორი
ტრიტუარი
ტროლეიბუსი
ტროტუარი
ტრუსიკი
ტუტუცი
ტუტუცო
ტყემალი
ტყვია
ტყუპები
უთო
უთუოდ
უკუღმა
უმი
უნიტაზი
ურჩხული
უსინდისო
უღრმესი
უყვარხარ
უცხო
უცხოპლანეტელი
ფანქარი
ფარშევანგი
ფაფა
ფაფს
ფეიერვერკი
ფელამუში
ფერია
ფეხბურთი
ფეხი
ფეხსაცმელები
ფეხსაცმელი
ფინჯანი
ფისო
ფიფქი
ფიფქია
ფიქრია
ფოთლები
ფორთოხალი
ფული
ფუნიკულიორი
ფურცელი
ფუტკარი
ფხოველიშვილი
ქაბაბი
ქათამი
ქალბატონო
ქართული
ქარი
ქეთი
ქვაბი
ქიშმიში
ქოთანი
ქოლგა
ქორი
ქოქოსი
ქრისტინე
ქუდი
ქურთუკი
ღამე
ღამე მშვიდობისა
ღამურა
ღვთისწყალობა
ღვინო
ღვიძლი
ღილაკი
ღლონტი
ღრუბელი
ყავა
ყავისფერი
ყაყაჩო
ყვავილები
ყვავილი
ყველა
ყველი
ყვითელი
ყინული
ყიყლიყო
ყულაბა
ყური
ყურძენი
შავი
შარვალი
შაქარი
შეინახე
შეიძლება?
შენ
შეხედე
შვილი
შლანგი
შოკოლადი
შორენა
შოტლანდიური
შოშია
შპილკა
შრეკი
შუაში
შუქი
ჩავყლაპო
ჩაი
ჩამეტიოს
ჩამოსვლა
ჩამოსრიალება
ჩანთა
ჩართე
ჩაქუჩი
ჩახოხბილი
ჩეკების
ჩემთან
ჩემია
ჩექმები
ჩინური
ჩიტი
ჩიტო ჩიტო
ჩოგანი
ჩუმად
ჩუპაჩუპი
ჩურჩხელა
ჩუსტები
ჩუსტი
ჩხირები
ცატა
ცეკვა
ციყვი
ციცინათელა
ცოტა ხანში
ცოტახანი
ცოცხი
ცუდი
ცუდია
ცუდო
ცხელია
ცხენი
ცხვირი
ცხვირსახოცი
ცხრა
ძალიან
ძაღლი
ძილი
ძილინებისა
ძროხა
ძუნწი
ძუძუ
წაგიშალო
წადი
წავიდა
წავიკითხოთ
წამალი
წამიკითხე
წამწამი
წარმატება
წასვლა
წაშლილი
წეპია
წერტილი
წვენი
წვიმა
წვიმს
წვრილი
წიგნი
წითელი
წითელქუდა
წიწაკა
წიწვი
წიწიკა
წრუწუნა
წყალი
ჭამა
ჭექაქუხილი
ჭიამაია
ჭიანჭველა
ჭიტაა
ჭოჭინა
ჭუპა-ჭუპა
ჭუჭყი
ჭუჭყიანი
ჭუჭყიანია
ხათუნა
ხალხო
ხატვა
ხაჭაპური
ხაჭო
ხახვი
ხბო
ხე
ხელთათმანი
ხელი
ხელსახოცი
ხვლიკი
ხიზილალა
ხილფაფა
ხინკალი
ხმა
ხო
ხორცი
ხოჭო
ხრამუნა
ხტუნაობა
ხტუნაობენ
ხტუნვა
ხუთკუნჭულა
ჯაგრისი
ჯადოსნური
ჯამბაზი
ჯარისკაცი
ჯეჯილი
`
export const eachWord = words.split('\n');