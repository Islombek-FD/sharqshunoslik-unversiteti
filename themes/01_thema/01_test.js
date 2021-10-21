da=0;da1=0
function wda(){
da++
if ((da==1800)&&(da1!=1)){
da=0; da1=1;
alert("Ваше время истекло. Результаты теста - в конце страницы.")
w()
document.location.href="#down"}
else setTimeout("wda()",1000)
}
wda()
br="\n"
if (navigator.appVersion.lastIndexOf('Win')!=-1) br="\r\n"
function w(){
da1=1;
N=6;
u0=new Array();	
res=new Array(3,3,1,2,2,3)
u2=new Array();
tr=N;
k=0;
oce=0;
oce1=1;
un=""
re=1;
num="331223"
 for (var i=1; i<=N;i++){ u0[i]=0;p=1;
    for (var j=num.charAt(i-1)-1; j>=0;j--){if (eval("document.f1.i"+i+"["+j+"].checked==true")){u0[i]=u0[i]+p*(j+1); p=p*6}}
      if (u0[i]!=res[i-1]){tr--;k++;u2[k]=i;}
   }  
 oce=100*tr/N; 
 if (k>0){un="Savollarga noto'g'ri javob:"+br;
 for (i=1;i<k;i++)
 {un=un+" "+u2[i]+",";
 if(Math.round(i/6)*6==i) un=un+br};
  un=un+" "+u2[k]+"."}
 if (oce>20) oce1=2;
 if (oce>50) oce1=3;
 if (oce>75) oce1=4;
 if (oce>90) oce1=5;
 //document.f2.t2.value="BAHO: "+oce1+"."+br+"To'g'ri javoblar: "+tr+" dan "+N+". "+br+un;
 document.f2.t2.value="BAHO: "+oce1+"."+br+"To'g'ri javoblar: "+N+" savoldan "+tr+" tasi to`g`ri. "+br+un;
 
}

