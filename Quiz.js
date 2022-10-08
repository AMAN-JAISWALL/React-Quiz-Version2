import React from "react";
import { useRef, useState } from "react";

export default function Quiz(){

    const a1 =useRef(null);
    const a2 =useRef(null);
    const a3 =useRef(null);
    const a4 =useRef(null);
    const [A1, setA1] = useState('');

    const b1 =useRef(null);
    const b2 =useRef(null);
    const b3 =useRef(null);
    const b4 =useRef(null);
    const [A2, setA2] = useState('');

    const c1 =useRef(null);
    const c2 =useRef(null);
    const c3 =useRef(null);
    const c4 =useRef(null);
    const [A3, setA3] = useState('');

    const d1 =useRef(null);
    const d2 =useRef(null);
    const d3 =useRef(null);
    const d4 =useRef(null);
    const [A4, setA4] = useState('');

    const e1 =useRef(null);
    const e2 =useRef(null);
    const e3 =useRef(null);
    const e4 =useRef(null);
    const [A5, setA5] = useState('');

    const f1 = useRef(null);
    const f2 = useRef(null);
    const f3 = useRef(null);
    const f4 = useRef(null);
    const [A6,setA6] = useState('');
    
    const g1 = useRef(null);
    const g2 = useRef(null);
    const g3 = useRef(null);
    const g4 = useRef(null);
    const [A7,setA7] = useState('')

    const h1 = useRef(null);
    const h2 = useRef(null);
    const h3 = useRef(null);
    const h4 = useRef(null);
    const [A8, setA8] = useState('');

    const q1 = useRef(null);
    const q2 = useRef(null);
    const q3 = useRef(null);
    const q4 = useRef(null);
    const [A9 , setA9] = useState('');

    const r1 =useRef(null);
    const r2 = useRef(null);
    const r3 = useRef(null);
    const r4 = useRef(null);
    const [A10, setA10] = useState('')




    const [Num, setNum] = useState(0);

    function fun1(event){
        var A1 = [a1.current, a2.current, a3.current, a4.current];
        var res1 = ''
        var num1= 0
        for(var i =0; i<A1.length; i++){
            if(A1[i].checked){
                res1 = res1 + A1[i].value
            }
        }
        if(res1=== "Cascading style sheets"){
            num1 =num1 + 2
            setA1("Currect, this Question Marks= "+num1)
            
        }else{
            num1 =num1 -1
            setA1("inCurrect, this Question Marks= "+num1)
        }


        var A2 = [b1.current, b2.current, b3.current, b4.current];
        var res2 = ''
        var num2 = 0
        for(var j =0; j<A2.length; j++){
            if(A2[j].checked){
                res2 = res2 + A2[j].value
            }
        }
        if(res2=== "font-size"){
            num2 =num2 + 2
            setA2("Currect, this Question Marks= "+num2)
        }else{
            num2 =num2 -1
            setA2("inCurrect, this Question Marks= "+num2)
        }


        var A3 = [c1.current, c2.current, c3.current, c4.current];
        var res3 = ''
        var num3 = 0
        for(var k =0; k<A3.length; k++){
            if(A3[k].checked){
                res3 = res3 + A3[k].value
            }
        }
        if(res3=== "style"){
            num3 =num3 + 2
            setA3("Currect, this Question Marks= "+num3)
        }else{
            num3 =num3 -1
            setA3("inCurrect, this Question Marks= "+num3)
        }

        var A4 = [d1.current, d2.current, d3.current, d4.current];
        var res4 = ''
        var num4 = 0
        for(var m =0; m<A4.length; m++){
            if(A4[m].checked){
                res4 = res4 + A4[m].value
            }
        }
        if(res4=== "opacity"){
            num4 =num4 + 2
            setA4("Currect, this Question Marks= "+num4)
        }else{
            num4 =num4 -1
            setA4("inCurrect, this Question Marks= "+num4)
        }

        var A5 = [e1.current, e2.current, e3.current, e4.current];
        var res5 = ''
        var num5 = 0
        for(var n =0; n<A5.length; n++){
            if(A5[n].checked){
                res5 = res5 + A5[n].value
            }
        }
        if(res5=== "writing-mode"){
            num5 =num5 + 2
            setA5("Currect, this Question Marks= "+num5)
        }else{
            num5 =num5 -1
            setA5("inCurrect, this Question Marks= "+num5)
        }

        var A6 = [f1.current, f2.current,f3.current,f4.current];
        var res6 = ""
        var num6 = 0;

        for(var x=0; x<A6.length; x++){
            if(A6[x].checked){
                res6 = res6+ A6[x].value
            }
        }
        if(res6==="box-shadow"){
            num6 = num6+2
            setA6("Currect "+ num6)
        }else{
            num6 = num6-1
            setA6("incurrect " + num6)
        }

        var A7 =[g1.current,g2.current,g3.current,g4.current];
        var res7 = ""
        var num7 = 0;

        for(var y =0; y<A7.length;y++){
            if(A7[y].checked){
                res7 = res7+ A7[y].value;
            }
        }
        if(res7==="position"){
            num7 = num7+2;
            setA7("Currect " + " this Question Marks is = " + num7 )
        }else{
            setA7("inCurrect " +  " this question marks is = " + num7  )
        }


        var A8 =[h1.current, h2.current,h3.current,h4.current];
        var res8 = '';
        var num8 = 0;

        for(var z =0; z<A8.length; z++){
            if(A8[z].checked){
                res8 = res8+ A8[z].value;
            }
        }
        if(res8==="all of the mentioned"){
            num8 = num8 + 2
            setA8("Currect "+ "this question Marks is = " + num8)
        }else{
            num8 = num8-1
            setA8("incurrect " + "this question Marks is = " + num8)
        }

        var A9 = [q1.current, q2.current, q3.current,q4.current];
        var res9 = '';
        var num9 = 0;

        for(var i1=0; i1<A9.length; i1++){
            if(A9[i1].checked){
                res9 =res9 + A9[i1].value
            }
        }
        if(res9=== "border"){
            num9 = num9+ 2
            setA9("currect" + "this question marks is = " + num9)
        }else{
            num9 = num9-1
            setA9("inCurrect" + 'this question marks is = ' + num9)
        }

        var A10 = [r1.current, r2.current, r3.current,r4.current];
        var res10 = '';
        var num10 = 0;

        for(var j1= 0; j1<A10.length; j1++){
            if(A10[j1].checked){
                res10 = res10 + A10[j1].value
            }
        }
        if(res10 === "text-align" ){
            num10 = num10 +2
            setA10("Currect ans " + "this question marks is = " + num10)
        }else{
            num10 = num10 -1
            setA10("Incurrect ans " + "this question marks is = " + num10)
        }




        setNum(num1+num2+num3+num4+num5+num6+num7+num8+num9+num10)
        event.preventDefault();
    }




    return(
        <div>
            <h1>React Quiz for Css MCQ</h1>
            <form action="" onSubmit={fun1}>
                <h4> Q1.The full form of CSS is:</h4>
                <input type="radio" name="Css1" ref={a1} value="Cascade style sheets" />Cascade style sheets <br />
                <input type="radio" name="Css1" ref={a2} value="Color and style sheets"  />Color and style sheets <br />
                <input type="radio" name="Css1" ref={a3} value="Cascading style sheets" />Cascading style sheets  <br />
                <input type="radio" name="Css1" ref={a4}  value="None of the above" />None of the above <br />
                <h3>{A1}</h3>

                <h4>Q2.The CSS property used to control the element's font-size is -</h4>
                <input type="radio" name="css2" ref={b1} value="text-style" />text-style <br />
                <input type="radio" name="css2"  ref={b2} value="text-size"/>text-size <br />
                <input type="radio" name="css2"  ref={b3} value="font-size" />font-size <br />
                <input type="radio" name="css2" ref={b4}  value="None of the above" />None of the above <br/>
                <h4>{A2}</h4>

                <h4>Q3.The HTML attribute used to define the inline styles is-</h4>
                <input type="radio" name="css3" ref={c1} value="style" />style<br />
                <input type="radio" name="css3" ref={c2} value="styles" />styles <br />
                <input type="radio" name="css3"  ref={c3} value="class" />class <br />
                <input type="radio" name="css3" ref={c4} value="None of the above" />None of the above <br/>
                <h4>{A3}</h4>

                <h4>Q4.The CSS property used to specify the transparency of an element is -</h4>
                <input type="radio" name="css4" ref={d1} value="opacity" />opacity <br />
                <input type="radio" name="css4" ref={d2} value="filter" />filter <br />
                <input type="radio" name="css4" ref={d3} value="visibility" />visibility<br />
                <input type="radio" name="css4" ref={d4} value="overlay" />overlay <br/>
                <h4>{A4}</h4>

                <h4>Q5.The CSS property used to specify whether the text is written in the horizontal or vertical direction?</h4>
                <input type="radio" name="css5" ref={e1} value="writing-mode" />writing-mode <br />
                <input type="radio" name="css5" ref={e2} value="text-indent" />text-indent <br />
                <input type="radio" name="css5" ref={e3} value="word-break" />word-break <br />
                <input type="radio" name="css5" ref={e4} value="None of the above" />None of the above
                <h4>{A5}</h4>

                <h4>Q6.Which of the following CSS property sets the shadow for a box element?</h4>
                <input type="radio" name='css6' ref={f1} value="set-shadow" /> set-shadow <br />
                <input type="radio" name='css6' ref={f2} value="box-shadow"  />box-shadow <br />
                <input type="radio" name="css6" ref={f3} value="shadow" /> shadow <br />
                <input type="radio" name='css6' ref={f4} value='canvas-shadow'  /> canvas-shadow <br />
                <h4>{A6}</h4>
                

                <h4>Q7. Which of the following CSS Property controls how an element is positioned?</h4>
                <input type="radio" name="css7" ref={g1} value='static'  />static <br />
                <input type="radio" name="css7" ref={g2} value="position" /> position <br />
                <input type="radio"  name="css7"  ref={g3} value="fix"  />fix   <br />
                <input type="radio" name="css7" ref={g4} value="set"  /> set <br />
                <h4>{A7}</h4> 

                <h4>Q8.Which of the following is an appropriate value for the overflow element?</h4>
                <input type="radio" name="css8" value="scroll" ref={h1} />scroll<br />
                <input type="radio"  name="css8"value="hidden" ref={h2} />hidden<br />
                <input type="radio" name="css8" value="auto" ref={h3} />auto<br />
                <input type="radio" name="css8" value="all of the mentioned" ref={h4} />all of the mentioned<br />
                <h4>{A8}</h4>

                <h4>Q9. Which of the following CSS property is used to specify table borders in CSS?</h4>
                <input type="radio" name="css9" ref={q1} value=" table:border" /> table:border <br />
                <input type="radio" name="css9" ref={q2} value="table" />table <br />
                <input type="radio" name="css9" ref={q3} value="border" /> border<br />
                <input type="radio" name="css9" ref={q4} value="none of the mentioned" /> none of the mentioned<br />
                <h4>{A9}</h4>

                <h4>Q10. Which of the following property is used to align the text in a table?</h4>
                <input type="radio" name="css10" ref={r1} value="text-align" />text-align<br />
                <input type="radio" name="css10" ref={r2} value="align" /> align<br />
                <input type="radio" name="css10" ref={r3} value="text" />text <br />
                <input type="radio" name="css10" ref={r4} value="none of the mentioned" />none of the mentioned <br />
                <h4>{A10}</h4>
                









                   <h1>Total Marks is = {Num}</h1>
                 <br/>
                <input type="submit" value="Click Me" />
            </form>
        </div>
    )
}